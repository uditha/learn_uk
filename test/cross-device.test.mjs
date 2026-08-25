import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { after, before, describe, it } from "node:test";

const PORT = process.env.TEST_PORT || "4173";
const BASE = `http://127.0.0.1:${PORT}`;
const PASSWORD = "cross-device-test-password";

function cookieHeader(setCookie) {
  return setCookie.map((c) => c.split(";")[0]).join("; ");
}

async function waitForServer(url, tries = 80) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      if (res.status) return;
    } catch {
      /* still booting */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("Server did not start");
}

describe("cross-device progress", () => {
  /** @type {import('node:child_process').ChildProcess | null} */
  let child = null;
  /** @type {string} */
  let dataDir = "";

  before(async () => {
    dataDir = await mkdtemp(path.join(tmpdir(), "learn-uk-"));
    child = spawn("npx", ["next", "start", "-p", PORT, "-H", "127.0.0.1"], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        APP_PASSWORD: PASSWORD,
        SESSION_SECRET: "test-session-secret-for-cross-device",
        PROGRESS_FILE: path.join(dataDir, "progress.json"),
        PORT,
      },
      stdio: "inherit",
    });
    await waitForServer(`${BASE}/login`);
  });

  after(async () => {
    if (child?.pid) child.kill("SIGTERM");
    if (dataDir) await rm(dataDir, { recursive: true, force: true });
  });

  async function loginAsNewDevice() {
    const res = await fetch(`${BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: PASSWORD }),
      redirect: "manual",
    });
    assert.equal(res.status, 200);
    const cookie = cookieHeader(res.headers.getSetCookie());
    assert.match(cookie, /learn_uk_auth=/);
    return cookie;
  }

  async function postProgress(cookie, body) {
    const res = await fetch(`${BASE}/api/progress`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Cookie: cookie },
      body: JSON.stringify(body),
    });
    assert.equal(res.status, 200);
    return res.json();
  }

  it("lets a second device pick up progress from the first", async () => {
    const phone = await loginAsNewDevice();
    const saved = await postProgress(phone, {
      done: { r1: { right: 5, total: 6 } },
      weak: { "r1#3": 1 },
    });
    assert.equal(saved.done.r1.right, 5);

    const laptop = await loginAsNewDevice();
    assert.notEqual(laptop, phone);

    const res = await fetch(`${BASE}/api/progress`, { headers: { Cookie: laptop } });
    assert.equal(res.status, 200);
    const remote = await res.json();
    assert.deepEqual(remote.done.r1, { right: 5, total: 6 });
    assert.equal(remote.weak["r1#3"], 1);
  });

  it("merges work done on two devices at once", async () => {
    const phone = await loginAsNewDevice();
    const laptop = await loginAsNewDevice();
    const reset = await postProgress(phone, { replace: true, done: {}, weak: {} });
    const epoch = reset.epoch;

    await postProgress(phone, {
      epoch,
      done: { r1: { right: 4, total: 6 } },
      weak: {},
    });
    await postProgress(laptop, {
      epoch,
      done: { r2: { right: 3, total: 5 } },
      weak: { "r2#0": 1 },
    });

    const res = await fetch(`${BASE}/api/progress`, { headers: { Cookie: phone } });
    const merged = await res.json();
    assert.deepEqual(merged.done.r1, { right: 4, total: 6 });
    assert.deepEqual(merged.done.r2, { right: 3, total: 5 });
    assert.equal(merged.weak["r2#0"], 1);
  });

  it("does not let a second device undo a reset", async () => {
    const phone = await loginAsNewDevice();
    await postProgress(phone, {
      replace: true,
      done: { r1: { right: 6, total: 6 } },
      weak: {},
    });
    await postProgress(phone, { replace: true, done: {}, weak: {} });

    const laptop = await loginAsNewDevice();
    const body = await postProgress(laptop, {
      done: { r1: { right: 6, total: 6 } },
      weak: {},
    });
    assert.deepEqual(body.done, {});
  });
});
