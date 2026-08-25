# The Regulatory Runway

A private Vercel app for learning FRE1 (UK financial regulation) as 90-second cards, taken from the original Regulatory Runway notes.

## Features

- Password gate (not indexed by search engines)
- All nine FRE1 topics plus an FRE2 preview
- Mixed drill and a Sharpen pile for questions you miss
- Progress saved in the browser and in your login session

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Set `APP_PASSWORD` in `.env.local`.

## Vercel

1. Import this GitHub repo in [Vercel](https://vercel.com/new).
2. Add environment variables:
   - `APP_PASSWORD` — the site password
   - `SESSION_SECRET` — any long random string
3. Deploy.

Progress follows the browser you study in. Completing a module, mixed drill, or Sharpen session writes immediately, so a refresh does not lose your place.
