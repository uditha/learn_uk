import type { Module, Topic } from "./types";

export const SERIES: Topic[];
export const ALL: Module[];
export function seriesOf(m: Module): Topic | undefined;
export function checksIn(m: Module): number;
