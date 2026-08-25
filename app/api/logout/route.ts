import { NextResponse } from "next/server";
import { COOKIE_OPTIONS, PROGRESS_COOKIE, SESSION_COOKIE } from "@/lib/session";

export async function POST(req: Request) {
  const res = NextResponse.redirect(new URL("/login", req.url), { status: 303 });
  res.cookies.set(SESSION_COOKIE, "", { ...COOKIE_OPTIONS, maxAge: 0 });
  res.cookies.set(PROGRESS_COOKIE, "", { ...COOKIE_OPTIONS, maxAge: 0 });
  return res;
}
