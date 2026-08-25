export const SESSION_COOKIE = "learn_uk_auth";
export const PROGRESS_COOKIE = "learn_uk_progress";

const encoder = new TextEncoder();

function secret() {
  return (
    process.env.SESSION_SECRET ||
    process.env.APP_PASSWORD ||
    "learn-uk-dev-secret"
  );
}

export function appPassword() {
  return process.env.APP_PASSWORD || "Harangala@13";
}

async function hmacHex(message: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const buf = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return Array.from(new Uint8Array(buf), (b) =>
    b.toString(16).padStart(2, "0")
  ).join("");
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export async function makeSessionToken() {
  return hmacHex("authenticated");
}

export async function isValidSession(token: string | undefined) {
  if (!token) return false;
  const expected = await makeSessionToken();
  return safeEqual(token, expected);
}

export function passwordsMatch(input: string) {
  const expected = appPassword();
  return safeEqual(input, expected);
}

export const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
};
