import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Streamlit } from "./streamlit";
import type { Level, LevelsArgs } from "./types";

const AXIS_W = 40;
const PAD_Y = 18;
const FOOT_H = 30;

type Placed = Level & { x0: number; x1: number; y: number };

function niceStep(span: number, target = 6) {
  const raw = span / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  return (norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10) * mag;
}

function fmt(e: number) {
  return (e < 0 ? "−" : "") + Math.abs(e).toFixed(2);
}

function Electrons({ x, y, occ }: { x: number; y: number; occ: number }) {
  if (occ <= 0) return null;
  const arrow = (cx: number, upward: boolean) => {
    const top = y - 9;
    const bottom = y + 9;
    return upward ? (
      <path d={`M${cx} ${bottom} L${cx} ${top} M${cx - 3} ${top + 4} L${cx} ${top} L${cx + 3} ${top + 4}`} />
    ) : (
      <path d={`M${cx} ${top} L${cx} ${bottom} M${cx - 3} ${bottom - 4} L${cx} ${bottom} L${cx + 3} ${bottom - 4}`} />
    );
  };
  return (
    <g className="electrons">
      {occ >= 2 ? (
        <>
          {arrow(x - 4, true)}
          {arrow(x + 4, false)}
        </>
      ) : (
        arrow(x, true)
      )}
    </g>
  );
}

export default function Levels({ args }: { args: LevelsArgs }) {
  const box = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(340);
  const [showAll, setShowAll] = useState(false);
  const [hover, setHover] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = box.current!;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => setShowAll(false), [args.moleculeKey]);

  const { levels, selected, homo, lumo, fragments } = args;
  const height = args.height - FOOT_H;

  // Visible energy window: everything up to LUMO+3 unless "show all" is on.
  const { lo, hi, hidden } = useMemo(() => {
    const energies = levels.map((l) => l.energy);
    let top = levels.length - 1;
    if (!showAll && lumo !== null) {
      // up to LUMO+3, but never more than 8 eV above the LUMO (keeps the frontier region readable)
      const ceiling = energies[lumo] + 8;
      top = lumo;
      while (top + 1 < levels.length && top + 1 <= lumo + 3 && energies[top + 1] <= ceiling) top++;
      top = Math.max(top, selected);
      // keep degenerate partners together
      while (top + 1 < levels.length && levels[top + 1].group === levels[top].group) top++;
    }
    const visibleTop = energies[top];
    const fragE = fragments ? [...fragments.left.levels, ...fragments.right.levels].map((f) => f.energy) : [];
    const lo0 = Math.min(...energies, ...fragE);
    const hi0 = Math.max(visibleTop, ...fragE.filter((e) => e <= visibleTop + 1e-9 || showAll));
    const span = Math.max(hi0 - lo0, 2);
    return { lo: lo0 - span * 0.04, hi: hi0 + span * 0.05, hidden: levels.length - 1 - top };
  }, [levels, lumo, selected, showAll, fragments]);

  const yOf = (e: number) => PAD_Y + (1 - (e - lo) / (hi - lo)) * (height - 2 * PAD_Y);

  // Horizontal layout
  const plotX0 = AXIS_W + 8;
  const plotX1 = width - 8;
  const plotW = plotX1 - plotX0;
  const colMO = fragments
    ? { x0: plotX0 + plotW * 0.33, x1: plotX0 + plotW * 0.67 }
    : { x0: plotX0 + 18, x1: plotX0 + Math.min(plotW * 0.52, 170) };
  const colL = { x0: plotX0 + 4, x1: plotX0 + plotW * 0.2 };
  const colR = { x0: plotX0 + plotW * 0.8, x1: plotX1 - 4 };

  const placed: Placed[] = useMemo(() => {
    const groups = new Map<number, Level[]>();
    levels.forEach((l) => groups.set(l.group, [...(groups.get(l.group) ?? []), l]));
    const out: Placed[] = [];
    // Groups closer than MIN_SEP px are nudged apart (display only) so that
    // near-degenerate levels stay clickable; order is always preserved.
    const MIN_SEP = 6;
    const groupY = new Map<number, number>();
    let prevY = Infinity;
    Array.from(groups.keys())
      .sort((a, b) => groups.get(a)![0].energy - groups.get(b)![0].energy)
      .forEach((g) => {
        const y = Math.min(yOf(groups.get(g)![0].energy), prevY - MIN_SEP);
        groupY.set(g, y);
        prevY = y;
      });
    groups.forEach((members) => {
      const n = members.length;
      const gap = 6;
      const w = (colMO.x1 - colMO.x0 - gap * (n - 1)) / n;
      members.forEach((l, i) => {
        const x0 = colMO.x0 + i * (w + gap);
        out.push({ ...l, x0, x1: x0 + w, y: groupY.get(l.group)! });
      });
    });
    return out.sort((a, b) => a.k - b.k);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levels, colMO.x0, colMO.x1, lo, hi, height]);

  const visible = placed.filter((p) => p.y >= PAD_Y - 6);

  // Labels: HOMO, LUMO, selected, hovered — pushed apart vertically.
  const labelKs = Array.from(new Set([homo, lumo, selected, hover].filter((k): k is number => k !== null)));
  const labelItems = labelKs
    .map((k) => {
      const group = visible.filter((p) => p.group === placed[k]?.group);
      if (!group.length) return null;
      const lead = group[group.length - 1];
      return { k, y: lead.y, x: lead.x1 + 10, level: placed[k] };
    })
    .filter((v): v is { k: number; y: number; x: number; level: Placed } => v !== null)
    .sort((a, b) => a.y - b.y);
  const uniqueByGroup: typeof labelItems = [];
  for (const item of labelItems) {
    const dup = uniqueByGroup.find((u) => u.level.group === item.level.group);
    if (dup) {
      if (item.k === selected) Object.assign(dup, item);
      continue;
    }
    uniqueByGroup.push({ ...item });
  }
  for (let i = 1; i < uniqueByGroup.length; i++) {
    if (uniqueByGroup[i].y - uniqueByGroup[i - 1].y < 15) uniqueByGroup[i].y = uniqueByGroup[i - 1].y + 15;
  }

  const ticks = useMemo(() => {
    const step = niceStep(hi - lo);
    const out: number[] = [];
    for (let t = Math.ceil(lo / step) * step; t <= hi; t += step) out.push(t);
    return out;
  }, [lo, hi]);

  function select(k: number) {
    Streamlit.setComponentValue({ type: "select", k, nonce: Date.now() });
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowUp" || e.key === "ArrowRight") select(Math.min(levels.length - 1, selected + 1));
    else if (e.key === "ArrowDown" || e.key === "ArrowLeft") select(Math.max(0, selected - 1));
    else return;
    e.preventDefault();
  }

  const gap = homo !== null && lumo !== null ? levels[lumo].energy - levels[homo].energy : null;
  const fragLevelY = (side: "left" | "right", i: number) => yOf(fragments![side].levels[i].energy);

  return (
    <div className="levels" ref={box} style={{ height: args.height }}>
      <svg width={width} height={height} tabIndex={0} onKeyDown={onKey} role="listbox" aria-label="MO 에너지 준위. 위아래 화살표로 선택">
        {/* axis */}
        <g className="axis">
          {ticks.map((t) => (
            <g key={t}>
              <line x1={AXIS_W} x2={plotX1} y1={yOf(t)} y2={yOf(t)} className="grid" />
              <text x={AXIS_W - 6} y={yOf(t) + 3.5} textAnchor="end">{fmt(t).replace(".00", "")}</text>
            </g>
          ))}
          <text className="unit" x={4} y={12}>eV</text>
        </g>

        {/* fragment AO columns (diatomics) */}
        {fragments && (
          <g className="fragments">
            {(["left", "right"] as const).map((side) => {
              const col = side === "left" ? colL : colR;
              const frag = fragments[side];
              return (
                <g key={side}>
                  <text className="frag-title" x={(col.x0 + col.x1) / 2} y={height - 4} textAnchor="middle">{frag.symbol}</text>
                  {frag.levels.map((f, i) => (
                    <g key={i}>
                      <line className="frag-level" x1={col.x0} x2={col.x1} y1={yOf(f.energy)} y2={yOf(f.energy)} />
                      <text className="frag-name" x={side === "left" ? col.x0 : col.x1} y={yOf(f.energy) - 4} textAnchor={side === "left" ? "start" : "end"}>{f.name}</text>
                    </g>
                  ))}
                </g>
              );
            })}
            {fragments.links.map((link, i) => {
              const p = placed[link.k];
              if (!p || p.y < PAD_Y - 6) return null;
              const active = link.k === selected || link.k === hover;
              const fy = fragLevelY(link.side, link.level);
              const x0 = link.side === "left" ? colL.x1 : colR.x0;
              const x1 = link.side === "left" ? p.x0 : p.x1;
              return (
                <line key={i} className={`link ${active ? "active" : ""}`} x1={x0} y1={fy} x2={x1} y2={p.y} style={{ opacity: active ? 0.9 : 0.12 + 0.4 * link.weight }} />
              );
            })}
            <text className="frag-title" x={(colMO.x0 + colMO.x1) / 2} y={height - 4} textAnchor="middle">분자</text>
          </g>
        )}

        {/* HOMO–LUMO gap */}
        {gap !== null && homo !== null && lumo !== null && placed[lumo].y >= PAD_Y && (
          <g className="gap">
            <line x1={colMO.x0 - 10} x2={colMO.x0 - 10} y1={placed[homo].y} y2={placed[lumo].y} />
            <line x1={colMO.x0 - 13} x2={colMO.x0 - 7} y1={placed[homo].y} y2={placed[homo].y} />
            <line x1={colMO.x0 - 13} x2={colMO.x0 - 7} y1={placed[lumo].y} y2={placed[lumo].y} />
          </g>
        )}

        {/* MO levels */}
        {visible.map((p) => {
          const isSel = p.k === selected;
          return (
            <g
              key={p.k}
              className={`level ${p.occupation > 0 ? "occ" : "virt"} ${isSel ? "sel" : ""} ${hover === p.k ? "hover" : ""}`}
              onClick={() => select(p.k)}
              onMouseEnter={() => setHover(p.k)}
              onMouseLeave={() => setHover(null)}
              role="option"
              aria-selected={isSel}
            >
              <rect className="hit" x={p.x0 - 3} y={p.y - 7} width={p.x1 - p.x0 + 6} height={14} />
              {isSel && <rect className="sel-band" x={p.x0 - 4} y={p.y - 11} width={p.x1 - p.x0 + 8} height={22} rx={3} />}
              <line x1={p.x0} x2={p.x1} y1={p.y} y2={p.y} />
              <Electrons x={(p.x0 + p.x1) / 2} y={p.y} occ={p.occupation} />
            </g>
          );
        })}

        {/* labels */}
        {!fragments &&
          uniqueByGroup.map((item) => {
            const l = item.level;
            const isSel = item.k === selected;
            const deg = visible.filter((p) => p.group === l.group).length;
            return (
              <g key={`lab-${item.k}`} className={`tag ${isSel ? "sel" : ""}`}>
                <text x={item.x} y={item.y + 4}>
                  <tspan className="sym">{l.symbol || "·"}</tspan>
                  {l.shell && <tspan className="shell" dy={3}>{l.shell}</tspan>}
                  <tspan className="title" dx={6} dy={l.shell ? -3 : 0}>{l.title}{deg > 1 ? ` ×${deg}` : ""}</tspan>
                </text>
              </g>
            );
          })}
        {fragments && placed[selected] && placed[selected].y >= PAD_Y && (
          <g className="tag sel">
            <text x={(colMO.x0 + colMO.x1) / 2} y={placed[selected].y - 14} textAnchor="middle">
              <tspan className="sym">{placed[selected].symbol || "·"}</tspan>
              {placed[selected].shell && <tspan className="shell" dy={3}>{placed[selected].shell}</tspan>}
            </text>
          </g>
        )}
      </svg>
      <div className="levels-foot">
        {hidden > 0 || showAll ? (
          <button className="link-btn" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "경계 오비탈 주변만 보기" : `위쪽 비점유 오비탈 ${hidden}개 더 보기`}
          </button>
        ) : (
          <span />
        )}
        {gap !== null && <span className="gap-note">HOMO–LUMO 간격 {gap.toFixed(2)} eV</span>}
      </div>
    </div>
  );
}
