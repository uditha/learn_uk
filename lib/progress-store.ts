import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  emptyProgress,
  isEmptyProgress,
  mergeProgress,
  parseProgress,
} from "./progress-logic.mjs";
import type { ProgressState } from "./types";

const KV_KEY = "learn_uk_progress";

function filePath() {
  return process.env.PROGRESS_FILE || path.join(process.cwd(), ".data", "progress.json");
}

function fileStoreEnabled() {
  if (process.env.PROGRESS_FILE) return true;
  if (process.env.VERCEL) return false;
  return true;
}

function kvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url, token };
}

async function kvCommand(args: Array<string>) {
  const cfg = kvConfig();
  if (!cfg) return null;
  const res = await fetch(cfg.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!res.ok) return null;
  return (await res.json()) as { result?: string | null };
}

async function kvGet(): Promise<ProgressState | null> {
  try {
    const data = await kvCommand(["GET", KV_KEY]);
    if (!data || data.result == null) return null;
    return parseProgress(data.result);
  } catch {
    return null;
  }
}

async function kvSet(state: ProgressState) {
  if (!kvConfig()) return;
  try {
    await kvCommand(["SET", KV_KEY, JSON.stringify(state)]);
  } catch {
    /* keep file/cookie copies */
  }
}

async function fileGet(): Promise<ProgressState | null> {
  if (!fileStoreEnabled()) return null;
  try {
    return parseProgress(await readFile(filePath(), "utf8"));
  } catch {
    return null;
  }
}

async function fileSet(state: ProgressState) {
  if (!fileStoreEnabled()) return;
  try {
    const file = filePath();
    await mkdir(path.dirname(file), { recursive: true });
    const tmp = `${file}.${process.pid}.tmp`;
    await writeFile(tmp, JSON.stringify(state), "utf8");
    await rename(tmp, file);
  } catch {
    /* read-only filesystem */
  }
}

export async function readProgress(): Promise<ProgressState> {
  const kv = await kvGet();
  const file = await fileGet();
  if (kv && file) return mergeProgress(kv, file);
  return kv || file || emptyProgress();
}

export async function writeProgress(
  incoming: ProgressState,
  opts: { replace?: boolean } = {}
): Promise<ProgressState> {
  const current = await readProgress();
  const stamped: ProgressState = { ...incoming, updatedAt: Date.now() };
  const next = opts.replace
    ? { ...stamped, epoch: (current.epoch || 0) + 1 }
    : mergeProgress(current, stamped);
  await Promise.all([kvSet(next), fileSet(next)]);
  return next;
}

export function progressIsEmpty(state: ProgressState) {
  return isEmptyProgress(state);
}
