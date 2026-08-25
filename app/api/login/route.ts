import { NextResponse } from "next/server";
import {
  COOKIE_OPTIONS,
  makeSessionToken,
  passwordsMatch,
  SESSION_COOKIE,
} from "@/lib/session";

export async function POST(req: Request) {
  let password = "";
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = (await req.json().catch(() => ({}))) as { password?: string };
    password = body.password || "";
  } else {
    const form = await req.formData().catch(() => null);
    password = String(form?.get("password") || "");
  }

  if (!passwordsMatch(password)) {
    if (contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "Wrong password." }, { status: 401 });
    }
    const url = new URL("/login", req.url);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url, { status: 303 });
  }

  const token = await makeSessionToken();
  const res = contentType.includes("application/json")
    ? NextResponse.json({ ok: true })
    : NextResponse.redirect(new URL("/", req.url), { status: 303 });

  res.cookies.set(SESSION_COOKIE, token, COOKIE_OPTIONS);
  return res;
}
