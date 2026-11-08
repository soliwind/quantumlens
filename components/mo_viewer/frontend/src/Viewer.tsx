import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { Streamlit } from "./streamlit";
import type { Atom, BondSpec, MeshPayload, ViewerArgs } from "./types";
import { Icon } from "./icons";

type Ctx = {
  renderer: THREE.WebGLRenderer;
  labelRenderer: CSS2DRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: TrackballControls;
  molecule: THREE.Group;
  lobes: THREE.Group;
  labels: THREE.Group;
  gizmo: { scene: THREE.Scene; camera: THREE.OrthographicCamera };
  materials: { positive: THREE.MeshPhysicalMaterial; negative: THREE.MeshPhysicalMaterial };
  home: { position: THREE.Vector3; target: THREE.Vector3; up: THREE.Vector3 };
  frame: number;
};

const SPHERE = new THREE.SphereGeometry(1, 40, 28);
const CYLINDER = new THREE.CylinderGeometry(1, 1, 1, 20, 1, false);

function decode<T extends Float32Array | Uint32Array>(b64: string, Ctor: { new (buf: ArrayBuffer): T }): T {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new Ctor(bytes.buffer);
}

function meshGeometry(payload: MeshPayload): THREE.BufferGeometry {
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(decode(payload.vertices, Float32Array), 3));
  g.setAttribute("normal", new THREE.BufferAttribute(decode(payload.normals, Float32Array), 3));
  g.setIndex(new THREE.BufferAttribute(decode(payload.faces, Uint32Array), 1));
  g.computeBoundingSphere();
  return g;
}

function disposeGroup(group: THREE.Group) {
  group.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      if (obj.geometry !== SPHERE && obj.geometry !== CYLINDER) obj.geometry.dispose();
      if (obj.userData.ownMaterial) (obj.material as THREE.Material).dispose();
    }
    if (obj instanceof CSS2DObject) obj.element.remove();
  });
  group.clear();
}

const atomMaterialCache = new Map<string, THREE.MeshStandardMaterial>();
function atomMaterial(color: string) {
  let m = atomMaterialCache.get(color);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.0 });
    atomMaterialCache.set(color, m);
  }
  return m;
}

function cylinderBetween(a: THREE.Vector3, b: THREE.Vector3, radius: number, material: THREE.Material) {
  const mid = a.clone().add(b).multiplyScalar(0.5);
  const dir = b.clone().sub(a);
  const len = dir.length();
  const mesh = new THREE.Mesh(CYLINDER, material);
  mesh.scale.set(radius, len, radius);
  mesh.position.copy(mid);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return mesh;
}

function perpendicularFor(bond: BondSpec, atoms: Atom[], bonds: BondSpec[], aromaticCenter: THREE.Vector3 | null) {
  const a = new THREE.Vector3(atoms[bond.i].x, atoms[bond.i].y, atoms[bond.i].z);
  const b = new THREE.Vector3(atoms[bond.j].x, atoms[bond.j].y, atoms[bond.j].z);
  const axis = b.clone().sub(a).normalize();
  let hint: THREE.Vector3 | null = null;
  if (bond.aromatic && aromaticCenter) {
    hint = aromaticCenter.clone().sub(a.clone().add(b).multiplyScalar(0.5));
  } else {
    for (const other of bonds) {
      if (other === bond) continue;
      const k = other.i === bond.i || other.i === bond.j ? other.j : other.j === bond.i || other.j === bond.j ? other.i : -1;
      if (k < 0 || k === bond.i || k === bond.j) continue;
      hint = new THREE.Vector3(atoms[k].x, atoms[k].y, atoms[k].z).sub(a);
      break;
    }
  }
  if (!hint || hint.clone().cross(axis).lengthSq() < 1e-6) {
    hint = Math.abs(axis.x) < 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  }
  return hint.sub(axis.clone().multiplyScalar(hint.dot(axis))).normalize();
}

function buildMolecule(ctx: Ctx, atoms: Atom[], bonds: BondSpec[]) {
  disposeGroup(ctx.molecule);
  disposeGroup(ctx.labels);
  const pos = atoms.map((a) => new THREE.Vector3(a.x, a.y, a.z));
  atoms.forEach((atom, idx) => {
    const m = new THREE.Mesh(SPHERE, atomMaterial(atom.color));
    m.scale.setScalar(atom.radius);
    m.position.copy(pos[idx]);
    ctx.molecule.add(m);

    const el = document.createElement("div");
    el.className = "atom-label";
    el.textContent = `${atom.symbol}${idx + 1}`;
    const label = new CSS2DObject(el);
    label.position.copy(pos[idx]).add(new THREE.Vector3(0, 0, atom.radius + 0.12));
    ctx.labels.add(label);
  });

  const aromaticAtoms = new Set<number>();
  bonds.forEach((b) => {
    if (b.aromatic) {
      aromaticAtoms.add(b.i);
      aromaticAtoms.add(b.j);
    }
  });
  let aromaticCenter: THREE.Vector3 | null = null;
  if (aromaticAtoms.size) {
    aromaticCenter = new THREE.Vector3();
    aromaticAtoms.forEach((i) => aromaticCenter!.add(pos[i]));
    aromaticCenter.multiplyScalar(1 / aromaticAtoms.size);
  }

  const dashedMaterial = atomMaterial("#8a9099");
  for (const bond of bonds) {
    const a = pos[bond.i];
    const b = pos[bond.j];
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const matA = atomMaterial(atoms[bond.i].color);
    const matB = atomMaterial(atoms[bond.j].color);
    const lines: { offset: number; radius: number }[] = [];
    if (bond.aromatic) lines.push({ offset: 0, radius: 0.075 });
    else if (bond.order >= 2.5) lines.push({ offset: -0.12, radius: 0.045 }, { offset: 0, radius: 0.045 }, { offset: 0.12, radius: 0.045 });
    else if (bond.order >= 1.75) lines.push({ offset: -0.075, radius: 0.05 }, { offset: 0.075, radius: 0.05 });
    else lines.push({ offset: 0, radius: 0.075 });
    const perp = lines.length > 1 || bond.aromatic ? perpendicularFor(bond, atoms, bonds, aromaticCenter) : new THREE.Vector3();
    for (const line of lines) {
      const shift = perp.clone().multiplyScalar(line.offset);
      ctx.molecule.add(cylinderBetween(a.clone().add(shift), mid.clone().add(shift), line.radius, matA));
      ctx.molecule.add(cylinderBetween(mid.clone().add(shift), b.clone().add(shift), line.radius, matB));
    }
    if (bond.aromatic) {
      // dashed inner line toward the ring center
      const shift = perp.clone().multiplyScalar(0.16);
      const start = a.clone().lerp(b, 0.2).add(shift);
      const end = a.clone().lerp(b, 0.8).add(shift);
      const n = 4;
      for (let s = 0; s < n; s++) {
        const p0 = start.clone().lerp(end, s / n);
        const p1 = start.clone().lerp(end, (s + 0.55) / n);
        ctx.molecule.add(cylinderBetween(p0, p1, 0.035, dashedMaterial));
      }
    }
  }
}

function buildLobes(ctx: Ctx, positive: MeshPayload | null, negative: MeshPayload | null) {
  disposeGroup(ctx.lobes);
  const add = (payload: MeshPayload | null, material: THREE.Material, order: number) => {
    if (!payload || payload.count === 0) return;
    const mesh = new THREE.Mesh(meshGeometry(payload), material);
    mesh.renderOrder = order;
    ctx.lobes.add(mesh);
  };
  add(positive, ctx.materials.positive, 2);
  add(negative, ctx.materials.negative, 2);
}

function homeView(ctx: Ctx, atoms: Atom[], aspect: number) {
  // Pivot and framing follow what is actually drawn: atoms plus the current lobes.
  const box = new THREE.Box3().setFromObject(ctx.molecule);
  if (ctx.lobes.children.length) box.union(new THREE.Box3().setFromObject(ctx.lobes));
  if (box.isEmpty()) box.setFromCenterAndSize(new THREE.Vector3(), new THREE.Vector3(4, 4, 4));
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const center = sphere.center;
  const radius = Math.max(sphere.radius, 1.5) * 1.02;

  const linear = atoms.length > 1 && atoms.every((a) => Math.abs(a.x) < 1e-3 && Math.abs(a.y) < 1e-3);
  const planar = !linear && atoms.every((a) => Math.abs(a.z) < 1e-2);
  let dir: THREE.Vector3;
  let up: THREE.Vector3;
  if (linear) {
    dir = new THREE.Vector3(1, 0.38, 0.12);
    up = new THREE.Vector3(0, 1, 0);
  } else if (planar) {
    dir = new THREE.Vector3(0.18, -0.78, 0.6);
    up = new THREE.Vector3(0, 0, 1);
  } else {
    dir = new THREE.Vector3(0.62, -0.62, 0.48);
    up = new THREE.Vector3(0, 0, 1);
  }
  const fov = (28 * Math.PI) / 180;
  const fit = radius / Math.tan(fov / 2) / Math.min(1, aspect) ** 0.8;
  // make `up` exactly perpendicular to the viewing direction
  dir.normalize();
  up.sub(dir.clone().multiplyScalar(up.dot(dir))).normalize();
  return { position: center.clone().add(dir.multiplyScalar(fit)), target: center.clone(), up };
}

function makeGizmo() {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1.6, 1.6, 1.6, -1.6, 0.1, 10);
  const axes: [THREE.Vector3, string][] = [
    [new THREE.Vector3(1, 0, 0), "x"],
    [new THREE.Vector3(0, 1, 0), "y"],
    [new THREE.Vector3(0, 0, 1), "z"],
  ];
  for (const [v, name] of axes) {
    const arrow = new THREE.ArrowHelper(v, new THREE.Vector3(), 1.0, 0x5b636e, 0.3, 0.18);
    scene.add(arrow);
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const g = canvas.getContext("2d")!;
    g.fillStyle = "#4b5360";
    g.font = "600 46px Pretendard Variable, sans-serif";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(name, 32, 34);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), depthTest: false }));
    sprite.position.copy(v.clone().multiplyScalar(1.38));
    sprite.scale.setScalar(0.62);
    scene.add(sprite);
  }
  return { scene, camera };
}

export default function Viewer({ args }: { args: ViewerArgs }) {
  const host = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<Ctx | null>(null);
  const argsRef = useRef(args);
  argsRef.current = args; // handlers registered once must still see the latest atoms
  const showAxesRef = useRef(args.showAxes);
  const [labels, setLabels] = useState(args.showLabels);
  const [fullscreen, setFullscreen] = useState(false);
  const [flash, setFlash] = useState("");

  // --- one-time setup --------------------------------------------------------
  useEffect(() => {
    const el = stage.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.autoClear = false;
    el.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.domElement.className = "label-layer";
    el.appendChild(labelRenderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 500);
    scene.add(camera);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x9aa3ad, 1.1));
    const key = new THREE.DirectionalLight(0xffffff, 1.9);
    key.position.set(-3, 4, 6);
    camera.add(key);
    const rim = new THREE.DirectionalLight(0xffffff, 0.45);
    rim.position.set(4, -2, -5);
    camera.add(rim);

    // Trackball: free rotation that follows the drag direction on screen,
    // no pole lock, and no inertia after the mouse is released.
    const controls = new TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 3.0;
    controls.zoomSpeed = 1.0;
    controls.panSpeed = 0.6;
    controls.staticMoving = true;
    controls.minDistance = 2;
    controls.maxDistance = 120;
    controls.keys = ["", "", ""]; // disable the A/S/D modifier keys

    const lobeMaterial = () =>
      new THREE.MeshPhysicalMaterial({
        roughness: 0.38,
        metalness: 0,
        clearcoat: 0.35,
        clearcoatRoughness: 0.4,
        side: THREE.FrontSide,
        transparent: true,
        depthWrite: true,
      });

    const molecule = new THREE.Group();
    const lobes = new THREE.Group();
    const labelGroup = new THREE.Group();
    scene.add(molecule, lobes, labelGroup);

    const ctx: Ctx = {
      renderer,
      labelRenderer,
      scene,
      camera,
      controls,
      molecule,
      lobes,
      labels: labelGroup,
      gizmo: makeGizmo(),
      materials: { positive: lobeMaterial(), negative: lobeMaterial() },
      home: { position: new THREE.Vector3(0, 0, 20), target: new THREE.Vector3(), up: new THREE.Vector3(0, 1, 0) },
      frame: 0,
    };
    ctxRef.current = ctx;

    const resize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = `${w}px`;
      renderer.domElement.style.height = `${h}px`;
      labelRenderer.setSize(w, h);
      camera.aspect = w / Math.max(h, 1);
      camera.updateProjectionMatrix();
      controls.handleResize();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();

    const loop = () => {
      ctx.frame = requestAnimationFrame(loop);
      controls.update();
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setViewport(0, 0, w, h);
      renderer.setScissorTest(false);
      renderer.clear();
      renderer.render(scene, camera);
      if (showAxesRef.current) {
        const size = Math.min(104, Math.floor(Math.min(w, h) * 0.24));
        const gz = ctx.gizmo;
        gz.camera.position.copy(camera.position).sub(controls.target).setLength(5);
        gz.camera.up.copy(camera.up);
        gz.camera.lookAt(0, 0, 0);
        renderer.setScissorTest(true);
        renderer.setScissor(10, 10, size, size);
        renderer.setViewport(10, 10, size, size);
        renderer.clearDepth();
        renderer.render(gz.scene, gz.camera);
        renderer.setScissorTest(false);
      }
      labelRenderer.render(scene, camera);
    };
    loop();

    const onFs = () => setFullscreen(document.fullscreenElement === host.current);
    document.addEventListener("fullscreenchange", onFs);

    return () => {
      cancelAnimationFrame(ctx.frame);
      observer.disconnect();
      document.removeEventListener("fullscreenchange", onFs);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  // Effects run in declaration order: lobes first, so the initial framing includes them.
  // --- lobes -----------------------------------------------------------------
  useEffect(() => {
    buildLobes(ctxRef.current!, args.positive, args.negative);
    // Streamlit sends fresh objects on every rerun; compare the data, not identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.positive?.vertices, args.positive?.faces, args.negative?.vertices, args.negative?.faces]);

  // --- molecule (re)build and camera home -------------------------------------
  useEffect(() => {
    const ctx = ctxRef.current!;
    buildMolecule(ctx, args.atoms, args.bonds);
    resetView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [args.moleculeKey]);

  useEffect(() => {
    const { positive, negative } = ctxRef.current!.materials;
    positive.color.set(args.colors.positive);
    negative.color.set(args.colors.negative);
    for (const m of [positive, negative]) {
      m.opacity = args.opacity;
      m.transparent = args.opacity < 0.999;
      m.depthWrite = true;
      m.needsUpdate = true;
    }
  }, [args.colors.positive, args.colors.negative, args.opacity]);

  useEffect(() => {
    ctxRef.current!.labels.visible = labels;
  }, [labels]);

  useEffect(() => {
    showAxesRef.current = args.showAxes;
  }, [args.showAxes]);

  useEffect(() => setLabels(args.showLabels), [args.showLabels]);

  // --- keyboard: ←/→ step through MOs -----------------------------------------
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") step(1);
      else if (e.key === "ArrowLeft" || e.key === "ArrowDown") step(-1);
      else if (e.key === "r" || e.key === "R") resetView();
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function step(delta: number) {
    Streamlit.setComponentValue({ type: "step", delta, nonce: Date.now() });
  }

  function resetView() {
    const ctx = ctxRef.current!;
    const el = stage.current!;
    ctx.home = homeView(ctx, argsRef.current.atoms, el.clientWidth / Math.max(el.clientHeight, 1));
    ctx.camera.up.copy(ctx.home.up);
    ctx.camera.position.copy(ctx.home.position);
    ctx.controls.target.copy(ctx.home.target);
    ctx.camera.lookAt(ctx.home.target);
    ctx.controls.update();
  }

  function savePng() {
    const ctx = ctxRef.current!;
    const el = stage.current!;
    const prev = ctx.renderer.getPixelRatio();
    const scale = Math.max(2, Math.ceil(2400 / Math.max(el.clientWidth, 1)));
    ctx.renderer.setPixelRatio(scale);
    ctx.renderer.setSize(el.clientWidth, el.clientHeight, false);
    const bg = args.dark ? "#14171c" : "#ffffff";
    ctx.renderer.setClearColor(bg, 1);
    ctx.renderer.clear();
    ctx.renderer.render(ctx.scene, ctx.camera);
    ctx.renderer.domElement.toBlob((blob) => {
      ctx.renderer.setClearColor(0x000000, 0);
      ctx.renderer.setPixelRatio(prev);
      ctx.renderer.setSize(el.clientWidth, el.clientHeight, false);
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${args.fileName || "quantumlens"}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      setFlash("이미지를 저장했습니다");
      setTimeout(() => setFlash(""), 1600);
    }, "image/png");
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen();
    else host.current?.requestFullscreen?.();
  }

  const empty = !args.positive?.count && !args.negative?.count;

  return (
    <div ref={host} className={`viewer ${fullscreen ? "is-fullscreen" : ""}`} style={{ height: fullscreen ? "100vh" : args.height }}>
      <div ref={stage} className="stage" tabIndex={0} aria-label="3D 분자 오비탈 보기. 드래그해 회전, 휠로 확대, 화살표 키로 다른 오비탈" />
      <div className="toolbar" role="toolbar">
        <button title="이전 오비탈 (←)" onClick={() => step(-1)}><Icon name="down" /></button>
        <button title="다음 오비탈 (→)" onClick={() => step(1)}><Icon name="up" /></button>
        <span className="sep" />
        <button title="처음 보기로 (R)" onClick={resetView}><Icon name="reset" /></button>
        <button title="원자 번호 표시" className={labels ? "on" : ""} onClick={() => setLabels((v) => !v)}><Icon name="label" /></button>
        <button title="PNG로 저장" onClick={savePng}><Icon name="download" /></button>
        <button title={fullscreen ? "전체 화면 끝내기" : "전체 화면"} onClick={toggleFullscreen}><Icon name={fullscreen ? "shrink" : "expand"} /></button>
      </div>
      {args.caption && <div className="caption" dangerouslySetInnerHTML={{ __html: args.caption }} />}
      {empty && <div className="notice">이 등치값에서는 표시할 면이 없습니다. 등치값을 낮춰 보세요.</div>}
      {flash && <div className="flash">{flash}</div>}
    </div>
  );
}
