export type MeshPayload = {
  vertices: string; // base64 float32 xyz (Å)
  normals: string;  // base64 float32 xyz
  faces: string;    // base64 uint32 triangle indices
  count: number;
};

export type Atom = {
  symbol: string;
  x: number;
  y: number;
  z: number;
  color: string;
  radius: number;
};

export type BondSpec = {
  i: number;
  j: number;
  order: number;
  aromatic: boolean;
};

export type ViewerArgs = {
  kind: "viewer";
  height: number;
  moleculeKey: string;
  atoms: Atom[];
  bonds: BondSpec[];
  positive: MeshPayload | null;
  negative: MeshPayload | null;
  colors: { positive: string; negative: string };
  opacity: number;
  showLabels: boolean;
  showAxes: boolean;
  dark: boolean;
  caption: string;
  fileName: string;
};

export type Level = {
  k: number;
  energy: number;
  occupation: number;
  symbol: string;   // e.g. "π*"
  shell: string;    // e.g. "2p"
  title: string;    // HOMO / LUMO+1 / ...
  group: number;    // degenerate group index
};

export type FragmentLevel = { energy: number; name: string };

export type Fragments = {
  left: { symbol: string; levels: FragmentLevel[] };
  right: { symbol: string; levels: FragmentLevel[] };
  // MO k ↔ fragment level index, with weight (0–1)
  links: { k: number; side: "left" | "right"; level: number; weight: number }[];
};

export type LevelsArgs = {
  kind: "levels";
  height: number;
  moleculeKey: string;
  levels: Level[];
  selected: number;
  homo: number | null;
  lumo: number | null;
  fragments: Fragments | null;
  dark: boolean;
};

export type Args = ViewerArgs | LevelsArgs;
