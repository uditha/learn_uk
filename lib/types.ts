export type Note = { b: string; x: string };

export type TeachCard = {
  t: "teach";
  h: string;
  b?: string;
  k?: string[];
  tbl?: [string, string][];
  note?: Note;
  hook?: string;
};

export type CheckCard = {
  t: "check";
  q: string;
  o: string[];
  a: number;
  e: string;
};

export type Card = TeachCard | CheckCard;

export type Module = {
  id: string;
  title: string;
  sub: string;
  cards: Card[];
};

export type Topic = {
  n: string;
  t: string;
  ac: string;
  m: Module[];
};

export type ProgressState = {
  done: Record<string, { right: number; total: number }>;
  weak: Record<string, number>;
};

export type Item = { mod: Module; idx: number; card: Card };

export type RunMeta =
  | { kind: "module"; title: string; mod: Module }
  | { kind: "drill"; title: string }
  | { kind: "sharpen"; title: string };
