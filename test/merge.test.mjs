import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  emptyProgress,
  isEmptyProgress,
  mergeProgress,
  parseProgress,
} from "../lib/progress-logic.mjs";

describe("mergeProgress", () => {
  it("keeps the stronger module score from either device", () => {
    const phone = {
      done: { r1: { right: 4, total: 6 } },
      weak: { "r1#2": 1 },
    };
    const laptop = {
      done: { r1: { right: 6, total: 6 }, r2: { right: 3, total: 5 } },
      weak: { "r2#1": 2 },
    };
    const merged = mergeProgress(phone, laptop);
    assert.deepEqual(merged.done.r1, { right: 6, total: 6 });
    assert.deepEqual(merged.done.r2, { right: 3, total: 5 });
    assert.equal(merged.weak["r1#2"], 1);
    assert.equal(merged.weak["r2#1"], 2);
  });

  it("is commutative so either device can save first", () => {
    const a = { done: { r1: { right: 2, total: 4 } }, weak: { "r1#0": 3 } };
    const b = { done: { r1: { right: 1, total: 4 } }, weak: { "r1#0": 1, "r1#1": 1 } };
    assert.deepEqual(mergeProgress(a, b), mergeProgress(b, a));
  });

  it("lets a newer reset on one device win over stale progress on another", () => {
    const phoneReset = { done: {}, weak: {}, epoch: 2, updatedAt: 20 };
    const laptopOld = {
      done: { r1: { right: 6, total: 6 } },
      weak: { "r1#1": 2 },
      epoch: 1,
      updatedAt: 10,
    };
    assert.deepEqual(mergeProgress(phoneReset, laptopOld).done, {});
    assert.equal(mergeProgress(phoneReset, laptopOld).epoch, 2);
  });
});

describe("parseProgress", () => {
  it("returns empty progress for missing or invalid payloads", () => {
    assert.deepEqual(parseProgress(null), emptyProgress());
    assert.deepEqual(parseProgress("{not json"), emptyProgress());
    assert.equal(isEmptyProgress(parseProgress("{}")), true);
  });

  it("keeps updatedAt when present", () => {
    const parsed = parseProgress(JSON.stringify({ done: {}, weak: {}, updatedAt: 50 }));
    assert.equal(parsed.updatedAt, 50);
  });
});
