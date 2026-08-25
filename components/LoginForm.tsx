"use client";

import { FormEvent, useState } from "react";

function SealMark() {
  return (
    <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
      <path
        className="faint"
        fill="none"
        strokeWidth="1.1"
        d="M76,50L75.66,55.01L74.64,59.91L72.98,64.58L70.71,68.91L67.89,72.79L64.58,76.12L60.87,78.81L56.86,80.8L52.66,82.02L48.39,82.44L44.17,82.04L40.12,80.84L36.35,78.87L32.97,76.19L30.09,72.88L27.81,69.02L26.22,64.7L25.36,60.04L25.28,55.15L25.97,50.16L27.41,45.19L29.54,40.38L32.3,35.85L35.61,31.71L39.37,28.07L43.48,25.02L47.81,22.66L52.25,21.06L56.66,20.27L60.93,20.32L64.94,21.22L68.58,22.95L71.74,25.45L74.33,28.64L76.27,32.42L77.5,36.67L78,41.26L77.76,46.05L76.8,50.9"
      />
      <path
        className="live"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        d="M76,50L75.66,55.01L74.64,59.91L72.98,64.58L70.71,68.91L67.89,72.79L64.58,76.12L60.87,78.81L56.86,80.8L52.66,82.02L48.39,82.44L44.17,82.04L40.12,80.84L36.35,78.87L32.97,76.19L30.09,72.88L27.81,69.02L26.22,64.7L25.36,60.04L25.28,55.15L25.97,50.16L27.41,45.19L29.54,40.38L32.3,35.85L35.61,31.71L39.37,28.07L43.48,25.02L47.81,22.66L52.25,21.06L56.66,20.27L60.93,20.32L64.94,21.22L68.58,22.95L71.74,25.45L74.33,28.64L76.27,32.42L77.5,36.67L78,41.26L77.76,46.05L76.8,50.9"
      />
      <text x="50" y="54" textAnchor="middle">
        FRE1
      </text>
    </svg>
  );
}

export default function LoginForm({ error }: { error?: boolean }) {
  const [err, setErr] = useState(Boolean(error));
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setErr(false);
    const form = new FormData(e.currentTarget);
    const password = String(form.get("password") || "");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      window.location.href = "/";
      return;
    }
    setErr(true);
    setPending(false);
  }

  return (
    <div className="gate">
      <div className="gate-box">
        <SealMark />
        <h1>The Regulatory Runway</h1>
        <p className="lede">
          FRE1 in bite-size cards. Enter the password on your phone, laptop, or tablet
          to pick up where you left off.
        </p>
        <form onSubmit={onSubmit}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
          />
          {err ? <p className="err">That password doesn&apos;t match.</p> : null}
          <button className="go" type="submit" disabled={pending}>
            {pending ? "Opening…" : "Open the runway"}
          </button>
        </form>
      </div>
    </div>
  );
}
