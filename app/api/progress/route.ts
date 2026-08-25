import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { COOKIE_OPTIONS, isValidSession, PROGRESS_COOKIE, SESSION_COOKIE } from "@/lib/session";
import { mergeProgress, parseProgress } from "@/lib/progress";
import { readProgress, writeProgress } from "@/lib/progress-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function withProgressCookie(data: unknown) {
  const res = NextResponse.json(data, {
    headers: { "Cache-Control": "private, no-store" },
  });
  const value = JSON.stringify(data);
  if (value.length < 3500) {
    res.cookies.set(PROGRESS_COOKIE, value, COOKIE_OPTIONS);
  }
  return res;
}

export async function GET() {
  const jar = await cookies();
  if (!(await isValidSession(jar.get(SESSION_COOKIE)?.value))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stored = await readProgress();
  const fromCookie = parseProgress(jar.get(PROGRESS_COOKIE)?.value);
  const preview = mergeProgress(stored, fromCookie);
  const changed =
    JSON.stringify({ done: preview.done, weak: preview.weak, epoch: preview.epoch || 0 }) !==
    JSON.stringify({ done: stored.done, weak: stored.weak, epoch: stored.epoch || 0 });
  const saved = changed ? await writeProgress(fromCookie) : stored;
  return withProgressCookie(saved);
}

export async function POST(req: Request) {
  const jar = await cookies();
  if (!(await isValidSession(jar.get(SESSION_COOKIE)?.value))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    done?: Record<string, { right: number; total: number }>;
    weak?: Record<string, number>;
    replace?: boolean;
    epoch?: number;
    updatedAt?: number;
  };
  const incoming = parseProgress(JSON.stringify(body));
  const saved = await writeProgress(incoming, { replace: body.replace === true });
  return withProgressCookie({ ok: true, ...saved });
}
