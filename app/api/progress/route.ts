import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { COOKIE_OPTIONS, isValidSession, PROGRESS_COOKIE, SESSION_COOKIE } from "@/lib/session";
import { emptyProgress, parseProgress } from "@/lib/progress";

export async function GET() {
  const jar = await cookies();
  if (!(await isValidSession(jar.get(SESSION_COOKIE)?.value))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const progress = parseProgress(jar.get(PROGRESS_COOKIE)?.value);
  return NextResponse.json(progress);
}

export async function POST(req: Request) {
  const jar = await cookies();
  if (!(await isValidSession(jar.get(SESSION_COOKIE)?.value))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => emptyProgress())) as {
    done?: Record<string, { right: number; total: number }>;
    weak?: Record<string, number>;
  };
  const progress = {
    done: body.done && typeof body.done === "object" ? body.done : {},
    weak: body.weak && typeof body.weak === "object" ? body.weak : {},
  };
  const value = JSON.stringify(progress);

  const res = NextResponse.json({ ok: true });
  if (value.length < 3500) {
    res.cookies.set(PROGRESS_COOKIE, value, COOKIE_OPTIONS);
  }
  return res;
}
