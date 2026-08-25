import type { ProgressState } from "./types";

export function emptyProgress(): ProgressState;
export function parseProgress(raw: string | null | undefined): ProgressState;
export function mergeProgress(a: ProgressState, b: ProgressState): ProgressState;
export function isEmptyProgress(p: ProgressState): boolean;
