"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ALL, SERIES, checksIn, seriesOf } from "@/lib/curriculum";
import {
  allChecks,
  emptyProgress,
  loadLocalProgress,
  mergeProgress,
  parseProgress,
  qKey,
  saveLocalProgress,
  shuffle,
  weakItems,
} from "@/lib/progress";
import type { CheckCard, Item, Module, ProgressState, RunMeta, TeachCard } from "@/lib/types";

function rosette(R: number, r: number, n: number, turns: number) {
  const pts: string[] = [];
  const steps = turns * 160;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    pts.push(
      (50 + R * Math.cos(t) + r * Math.cos(t * n)).toFixed(2) +
        "," +
        (50 + R * Math.sin(t) + r * Math.sin(t * n)).toFixed(2)
    );
  }
  return "M" + pts.join("L");
}

function Seal({ pct }: { pct: number }) {
  const path = useMemo(() => rosette(26, 8, 7, 1), []);
  return (
    <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
      <path className="faint" fill="none" strokeWidth="1.1" pathLength="1" d={path} />
      <path
        className="live"
        fill="none"
        strokeWidth="1.4"
        pathLength="1"
        strokeDasharray="1"
        strokeLinecap="round"
        d={path}
        style={{ strokeDashoffset: String(1 - pct) }}
      />
      <text x="50" y="54" textAnchor="middle">
        {Math.round(pct * 100)}%
      </text>
    </svg>
  );
}

export default function StudyApp() {
  const [S, setS] = useState<ProgressState>(emptyProgress);
  const [ready, setReady] = useState(false);
  const [screen, setScreen] = useState<"home" | "run" | "finish">("home");
  const [items, setItems] = useState<Item[]>([]);
  const [meta, setMeta] = useState<RunMeta | null>(null);
  const [i, setI] = useState(0);
  const [right, setRight] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [missed, setMissed] = useState<Item[]>([]);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [locked, setLocked] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const persistTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const SRef = useRef(S);
  SRef.current = S;

  function persist(next: ProgressState, replace = false) {
    setS(next);
    saveLocalProgress(next);
    if (persistTimer.current) clearTimeout(persistTimer.current);
    persistTimer.current = setTimeout(() => {
      fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...next, replace }),
      })
        .then(async (res) => {
          if (!res.ok) return;
          const saved = parseProgress(JSON.stringify(await res.json()));
          const merged = mergeProgress(SRef.current, saved);
          setS(merged);
          saveLocalProgress(merged);
        })
        .catch(() => {});
    }, 250);
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const local = loadLocalProgress();
      let merged = local;
      try {
        const res = await fetch("/api/progress");
        if (res.ok) {
          const remote = parseProgress(JSON.stringify(await res.json()));
          merged = mergeProgress(local, remote);
        }
      } catch {
        /* local only */
      }
      if (!cancelled) {
        persist(merged);
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function home() {
    setScreen("home");
    setMeta(null);
    setItems([]);
    setStreak(0);
    setI(0);
    setLocked(false);
    setPicked(null);
    window.scrollTo(0, 0);
  }

  function startRun(nextItems: Item[], nextMeta: RunMeta) {
    if (!nextItems.length) {
      home();
      return;
    }
    setItems(nextItems);
    setMeta(nextMeta);
    setI(0);
    setRight(0);
    setAnswered(0);
    setMissed([]);
    setStreak(0);
    setBest(0);
    setLocked(false);
    setPicked(null);
    setScreen("run");
    window.scrollTo(0, 0);
  }

  function lesson(id: string) {
    const mod = ALL.find((m: Module) => m.id === id);
    if (!mod) return;
    startRun(
      mod.cards.map((card, idx) => ({ mod, idx, card })),
      { kind: "module", title: mod.title, mod }
    );
  }

  function finishRun(finalRight: number, finalAnswered: number, currentMeta: RunMeta) {
    if (currentMeta.kind === "module") {
      const prev = SRef.current.done[currentMeta.mod.id];
      const total = Math.max(finalAnswered, checksIn(currentMeta.mod));
      if (!prev || finalRight >= prev.right) {
        persist({
          ...SRef.current,
          done: { ...SRef.current.done, [currentMeta.mod.id]: { right: finalRight, total } },
        });
      }
    }
    setScreen("finish");
    window.scrollTo(0, 0);
  }

  function advance() {
    if (!meta) return;
    if (i < items.length - 1) {
      setI((n) => n + 1);
      setLocked(false);
      setPicked(null);
      window.scrollTo(0, 0);
      return;
    }
    finishRun(right, answered, meta);
  }

  function pick(k: number) {
    if (locked || !meta) return;
    const it = items[i];
    const c = it.card as CheckCard;
    const ok = k === c.a;
    const key = qKey(it.mod.id, it.idx);
    const next = { ...SRef.current, weak: { ...SRef.current.weak } };
    if (ok) {
      if (next.weak[key]) {
        next.weak[key] -= 1;
        if (next.weak[key] <= 0) delete next.weak[key];
      }
      setRight((n) => n + 1);
      setStreak((n) => {
        const v = n + 1;
        setBest((b) => Math.max(b, v));
        return v;
      });
    } else {
      next.weak[key] = (next.weak[key] || 0) + 1;
      setStreak(0);
      setMissed((m) => [...m, it]);
    }
    persist(next);
    setAnswered((n) => n + 1);
    setPicked(k);
    setLocked(true);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (screen === "run") {
        if (e.key === "Escape") {
          home();
          return;
        }
        const card = items[i]?.card;
        if (card?.t === "teach") {
          if (e.key === " " || e.key === "ArrowRight" || e.key === "Enter") {
            e.preventDefault();
            advance();
          }
        } else {
          if (/^[1-9]$/.test(e.key) && !locked) {
            const k = +e.key - 1;
            if (card && k < (card as CheckCard).o.length) pick(k);
          }
          if (locked && (e.key === " " || e.key === "ArrowRight" || e.key === "Enter")) {
            e.preventDefault();
            advance();
          }
        }
      }
      if (screen === "finish" && e.key === "Escape") home();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const pct = ALL.length ? ALL.filter((m: Module) => S.done[m.id]).length / ALL.length : 0;
  const cleared = ALL.filter((m: Module) => S.done[m.id]).length;
  const asked = ALL.reduce((a: number, m: Module) => a + (S.done[m.id] ? S.done[m.id].total : 0), 0);
  const rights = ALL.reduce((a: number, m: Module) => a + (S.done[m.id] ? S.done[m.id].right : 0), 0);
  const wk = weakItems(S).length;

  return (
    <div className="wrap">
      <div className="top">
        <Seal pct={pct} />
        <div>
          <h1>The Regulatory Runway</h1>
          <p>FRE1 and FRE2 in 90-second cards, checked against the 2025/26 texts.</p>
        </div>
        <form className="top-actions" action="/api/logout" method="post">
          <button className="ghost-link" type="submit">
            Lock
          </button>
        </form>
      </div>
      <main role="main">
        {!ready ? (
          <p className="sync-note">Restoring progress…</p>
        ) : screen === "home" ? (
          <Home
            S={S}
            cleared={cleared}
            asked={asked}
            rights={rights}
            wk={wk}
            onLesson={lesson}
            onDrill={() =>
              startRun(shuffle(allChecks()).slice(0, 12), { kind: "drill", title: "Mixed drill" })
            }
            onSharpen={() =>
              startRun(shuffle(weakItems(S)).slice(0, 12), { kind: "sharpen", title: "Sharpen" })
            }
            onReset={() => persist(emptyProgress(), true)}
          />
        ) : screen === "run" && meta ? (
          <Runner
            items={items}
            meta={meta}
            i={i}
            streak={streak}
            locked={locked}
            picked={picked}
            onHome={home}
            onAdvance={advance}
            onPick={pick}
          />
        ) : screen === "finish" && meta ? (
          <Finish
            meta={meta}
            right={right}
            answered={answered}
            best={best}
            missed={missed}
            onHome={home}
            onAgain={() => {
              if (meta.kind === "module") lesson(meta.mod.id);
              else if (meta.kind === "sharpen") {
                startRun(shuffle(weakItems(SRef.current)).slice(0, 12), meta);
              } else {
                startRun(shuffle(allChecks()).slice(0, 12), meta);
              }
            }}
            onNext={
              meta.kind === "module"
                ? () => {
                    const idx = ALL.indexOf(meta.mod);
                    const nxt = ALL[idx + 1];
                    if (nxt) lesson(nxt.id);
                    else home();
                  }
                : home
            }
          />
        ) : null}
      </main>
    </div>
  );
}

function Home({
  S,
  cleared,
  asked,
  rights,
  wk,
  onLesson,
  onDrill,
  onSharpen,
  onReset,
}: {
  S: ProgressState;
  cleared: number;
  asked: number;
  rights: number;
  wk: number;
  onLesson: (id: string) => void;
  onDrill: () => void;
  onSharpen: () => void;
  onReset: () => void;
}) {
  return (
    <div className="fade">
      <div className="stats">
        <div className="stat">
          <span className="eyebrow">Modules</span>
          <b>
            {cleared}
            <small> / {ALL.length}</small>
          </b>
        </div>
        <div className="stat">
          <span className="eyebrow">Best accuracy</span>
          <b>{asked ? Math.round((rights / asked) * 100) + "%" : "—"}</b>
        </div>
        <div className="stat">
          <span className="eyebrow">Checks logged</span>
          <b>{asked}</b>
        </div>
      </div>
      <div className="modes">
        <button className="mode" onClick={onDrill}>
          <b>Mixed drill</b>
          <span>12 random checks, exam pace</span>
        </button>
        <button className="mode" onClick={onSharpen} disabled={!wk}>
          <b>Sharpen {wk ? `(${wk})` : ""}</b>
          <span>{wk ? "Questions you got wrong" : "Nothing to review yet"}</span>
        </button>
      </div>
      {SERIES.map((s) => (
        <section className="series" key={s.n}>
          <div className="series-head">
            <span className="eyebrow">{s.n}</span>
            <h2>{s.t}</h2>
            <span className="rule" />
            <span className="ac">{s.ac}</span>
          </div>
          <div className="mods">
            {s.m.map((m, idx) => {
              const d = S.done[m.id];
              const bar = d ? Math.round((d.right / Math.max(1, d.total)) * 100) : 0;
              return (
                <button
                  className={`mod ${d ? "done" : ""}`}
                  key={m.id}
                  onClick={() => onLesson(m.id)}
                >
                  <span className="num">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="txt">
                    <b>{m.title}</b>
                    <span>
                      {m.sub} · {m.cards.length} cards
                    </span>
                    {d ? (
                      <span className="bar">
                        <i style={{ width: `${bar}%` }} />
                      </span>
                    ) : null}
                  </span>
                  <span className="mark">{d ? `${d.right}/${d.total} ✓` : "▸"}</span>
                </button>
              );
            })}
          </div>
        </section>
      ))}
      <button className="reset" onClick={onReset}>
        Clear all progress
      </button>
      <p className="sync-note">Progress syncs across every device you sign in on</p>
    </div>
  );
}

function Runner({
  items,
  meta,
  i,
  streak,
  locked,
  picked,
  onHome,
  onAdvance,
  onPick,
}: {
  items: Item[];
  meta: RunMeta;
  i: number;
  streak: number;
  locked: boolean;
  picked: number | null;
  onHome: () => void;
  onAdvance: () => void;
  onPick: (k: number) => void;
}) {
  const it = items[i];
  const c = it.card;
  const s = seriesOf(it.mod);
  const serial = `${(s?.n || "").replace("Topic ", "T")} · ${it.mod.id.toUpperCase()} · ${String(it.idx + 1).padStart(3, "0")}`;
  const label = meta.kind === "module" ? meta.title : it.mod.title;

  return (
    <div>
      <div className="crumbs">
        <button className="back" onClick={onHome}>
          ← All modules
        </button>
        <span className="streak">{streak > 1 ? `streak ×${streak}` : ""}</span>
        <div className="pips">
          {items.map((_, k) => (
            <span key={k} className={`pip ${k < i ? "on" : ""} ${k === i ? "now" : ""}`} />
          ))}
        </div>
      </div>
      {c.t === "teach" ? (
        <TeachView card={c} serial={serial} label={label} last={i === items.length - 1} onNext={onAdvance} />
      ) : (
        <CheckView
          card={c}
          serial={serial}
          label={meta.kind === "module" ? "Check" : label}
          last={i === items.length - 1}
          locked={locked}
          picked={picked}
          onPick={onPick}
          onNext={onAdvance}
        />
      )}
    </div>
  );
}

function TeachView({
  card,
  serial,
  label,
  last,
  onNext,
}: {
  card: TeachCard;
  serial: string;
  label: string;
  last: boolean;
  onNext: () => void;
}) {
  return (
    <>
      <article className="card fade">
        <div className="serial">
          <span>{serial}</span>
          <span>{label}</span>
        </div>
        <h3>{card.h}</h3>
        {card.b ? <div dangerouslySetInnerHTML={{ __html: card.b }} /> : null}
        {card.k ? (
          <ul>
            {card.k.map((x) => (
              <li key={x} dangerouslySetInnerHTML={{ __html: x }} />
            ))}
          </ul>
        ) : null}
        {card.tbl ? (
          <table>
            <tbody>
              {card.tbl.map((r) => (
                <tr key={r[0]}>
                  <td dangerouslySetInnerHTML={{ __html: r[0] }} />
                  <td dangerouslySetInnerHTML={{ __html: r[1] }} />
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        {card.note ? (
          <div className="note">
            <b>{card.note.b}</b>
            <span dangerouslySetInnerHTML={{ __html: card.note.x }} />
          </div>
        ) : null}
        {card.hook ? (
          <div className="hook">
            <i>Hook</i>
            <span>{card.hook}</span>
          </div>
        ) : null}
      </article>
      <div className="actions">
        <button className="go" onClick={onNext}>
          {last ? "Finish" : "Got it"}
        </button>
      </div>
      <div className="hintline">Space or → to continue</div>
    </>
  );
}

function CheckView({
  card,
  serial,
  label,
  last,
  locked,
  picked,
  onPick,
  onNext,
}: {
  card: CheckCard;
  serial: string;
  label: string;
  last: boolean;
  locked: boolean;
  picked: number | null;
  onPick: (k: number) => void;
  onNext: () => void;
}) {
  const ok = picked === card.a;
  return (
    <>
      <article className="card fade">
        <div className="serial">
          <span>{serial}</span>
          <span>{label}</span>
        </div>
        <h3>{card.q}</h3>
        <div className="opts">
          {card.o.map((o, k) => {
            let cls = "opt";
            if (locked && k === card.a) cls += " right";
            else if (locked && k === picked) cls += " wrong";
            return (
              <button key={o} className={cls} disabled={locked} onClick={() => onPick(k)}>
                <kbd>{k + 1}</kbd>
                <span>{o}</span>
              </button>
            );
          })}
        </div>
        {locked ? (
          <div className={`verdict ${ok ? "ok" : "no"} fade`}>
            <b>{ok ? "Correct." : "Not this time."}</b>
            <span dangerouslySetInnerHTML={{ __html: card.e }} />
          </div>
        ) : null}
      </article>
      {locked ? (
        <div className="actions">
          <button className="go" onClick={onNext} autoFocus>
            {last ? "Finish" : "Next card"}
          </button>
        </div>
      ) : (
        <div className="hintline">Press 1–4 to answer</div>
      )}
    </>
  );
}

function Finish({
  meta,
  right,
  answered,
  best,
  missed,
  onHome,
  onAgain,
  onNext,
}: {
  meta: RunMeta;
  right: number;
  answered: number;
  best: number;
  missed: Item[];
  onHome: () => void;
  onAgain: () => void;
  onNext: () => void;
}) {
  const total = Math.max(answered, 1);
  const pct = answered ? right / answered : 0;
  const verdict = !answered
    ? "Read through. Come back and take the checks when you're ready."
    : pct === 1
      ? "Clean sweep. That one is stamped."
      : pct >= 0.6
        ? "Solid. The misses are in your Sharpen pile — clear them tomorrow."
        : "Worth a second pass. The explanations are where the marks hide.";
  const nextLabel =
    meta.kind === "module"
      ? (() => {
          const idx = ALL.indexOf(meta.mod);
          const nxt = ALL[idx + 1];
          return nxt ? `Next: ${nxt.title}` : "Back to modules";
        })()
      : "Back to modules";

  return (
    <div className="finish fade">
      <span className="eyebrow">
        {meta.kind === "module"
          ? `${seriesOf(meta.mod)?.n} · module cleared`
          : `${meta.title} complete`}
      </span>
      <h3>{meta.title}</h3>
      <p className="score">
        {right} / {total} first time{best > 2 ? ` · best streak ×${best}` : ""}
      </p>
      <p>{verdict}</p>
      {missed.length ? (
        <div className="misses">
          <b>Back into Sharpen</b>
          <ul>
            {missed.slice(0, 6).map((m) => (
              <li key={`${m.mod.id}#${m.idx}`}>{m.card.t === "check" ? m.card.q : m.mod.title}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="actions">
        <button className="go ghost" onClick={onAgain}>
          Run again
        </button>
        <button className="go" onClick={onNext}>
          {nextLabel}
        </button>
      </div>
      <button className="reset" onClick={onHome}>
        All modules
      </button>
    </div>
  );
}
