import type { Item, Module, ProgressState } from "./types";
import { ALL } from "./curriculum";
import { emptyProgress, parseProgress } from "./progress-logic.mjs";
export {
  emptyProgress,
  isEmptyProgress,
  mergeProgress,
  parseProgress,
} from "./progress-logic.mjs";

export const PROGRESS_KEY = "runway:v2";

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
