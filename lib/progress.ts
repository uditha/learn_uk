import type { Item, Module, ProgressState } from "./types";
import { ALL } from "./curriculum";

export const PROGRESS_KEY = "runway:v2";

export function emptyProgress(): ProgressState {
  return { done: {}, weak: {} };
}

export function parseProgress(raw: string | null | undefined): ProgressState {
  if (!raw) return emptyProgress();
  try {
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      done: parsed.done && typeof parsed.done === "object" ? parsed.done : {},
      weak: parsed.weak && typeof parsed.weak === "object" ? parsed.weak : {},
    };
  } catch {
    return emptyProgress();
  }
}

export function mergeProgress(a: ProgressState, b: ProgressState): ProgressState {
  const done = { ...a.done };
  for (const [id, score] of Object.entries(b.done)) {
    const prev = done[id];
    if (!prev || score.right >= prev.right) done[id] = score;
  }
  const weak = { ...a.weak };
  for (const [key, n] of Object.entries(b.weak)) {
    weak[key] = Math.max(weak[key] || 0, n);
  }
  return { done, weak };
}

export function qKey(modId: string, i: number) {
  return `${modId}#${i}`;
}

export function weakItems(S: ProgressState): Item[] {
  const out: Item[] = [];
  for (const k of Object.keys(S.weak)) {
    const [id, i] = k.split("#");
    const mod = ALL.find((m: Module) => m.id === id);
    if (mod && mod.cards[+i]) out.push({ mod, idx: +i, card: mod.cards[+i] });
  }
  return out;
}

export function allChecks(): Item[] {
  const out: Item[] = [];
  ALL.forEach((mod: Module) => {
    mod.cards.forEach((card, idx) => {
      if (card.t === "check") out.push({ mod, idx, card });
    });
  });
  return out;
}

export function shuffle<T>(a: T[]) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export function loadLocalProgress() {
  if (typeof window === "undefined") return emptyProgress();
  return parseProgress(window.localStorage.getItem(PROGRESS_KEY));
}

export function saveLocalProgress(S: ProgressState) {
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(S));
}
