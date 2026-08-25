/** @typedef {{ done: Record<string, { right: number; total: number }>; weak: Record<string, number>; updatedAt?: number; epoch?: number }} ProgressState */

/** @returns {ProgressState} */
export function emptyProgress() {
  return { done: {}, weak: {} };
}

/** @param {unknown} value */
function copyScores(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

/** @param {string | null | undefined} raw @returns {ProgressState} */
export function parseProgress(raw) {
  if (!raw) return emptyProgress();
  try {
    const parsed = JSON.parse(raw);
    /** @type {ProgressState} */
    const next = {
      done: copyScores(parsed?.done),
      weak: copyScores(parsed?.weak),
    };
    if (typeof parsed?.updatedAt === "number" && Number.isFinite(parsed.updatedAt)) {
      next.updatedAt = parsed.updatedAt;
    }
    if (typeof parsed?.epoch === "number" && Number.isFinite(parsed.epoch) && parsed.epoch > 0) {
      next.epoch = parsed.epoch;
    }
    return next;
  } catch {
    return emptyProgress();
  }
}

/** @param {ProgressState} state @returns {ProgressState} */
function cloneProgress(state) {
  /** @type {ProgressState} */
  const next = { done: { ...state.done }, weak: { ...state.weak } };
  if (state.updatedAt) next.updatedAt = state.updatedAt;
  if (state.epoch) next.epoch = state.epoch;
  return next;
}

/**
 * Combine two snapshots. A higher epoch (from "Clear all progress") wins outright
 * so an old copy on another device cannot undo a reset.
 * @param {ProgressState} a
 * @param {ProgressState} b
 * @returns {ProgressState}
 */
export function mergeProgress(a, b) {
  const ae = a.epoch || 0;
  const be = b.epoch || 0;
  if (be > ae) return cloneProgress(b);
  if (ae > be) return cloneProgress(a);

  const done = { ...a.done };
  for (const [id, score] of Object.entries(b.done || {})) {
    const prev = done[id];
    if (!prev || score.right >= prev.right) done[id] = score;
  }
  const weak = { ...a.weak };
  for (const [key, n] of Object.entries(b.weak || {})) {
    weak[key] = Math.max(weak[key] || 0, n);
  }
  const updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
  /** @type {ProgressState} */
  const next = { done, weak };
  if (updatedAt) next.updatedAt = updatedAt;
  if (ae) next.epoch = ae;
  return next;
}

/** @param {ProgressState} p */
export function isEmptyProgress(p) {
  return Object.keys(p.done || {}).length === 0 && Object.keys(p.weak || {}).length === 0;
}
