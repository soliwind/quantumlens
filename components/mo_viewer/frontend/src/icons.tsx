const PATHS: Record<string, string> = {
  up: "M6 14l6-6 6 6",
  down: "M6 10l6 6 6-6",
  reset: "M4 12a8 8 0 1 0 2.6-5.9M4 4v4h4",
  label: "M5 19L12 5l7 14M8 14h8",
  download: "M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14",
  expand: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
  shrink: "M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5",
};

export function Icon({ name }: { name: keyof typeof PATHS | string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
