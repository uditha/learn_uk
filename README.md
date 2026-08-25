# The Regulatory Runway

A private Vercel app for learning FRE1 (UK financial regulation) as 90-second cards, taken from the original Regulatory Runway notes.

## Features

- Password gate (not indexed by search engines)
- Works on phone, tablet, and laptop — add it to your home screen if you like
- All nine FRE1 topics plus an FRE2 preview
- Mixed drill and a Sharpen pile for questions you miss
- Progress syncs across every device you sign in on

## Across devices

Open the same Vercel URL on any device and enter the password. Completing a module, mixed drill, or Sharpen session writes to the shared store immediately, so your phone and laptop stay in step.

Locally, that store is `.data/progress.json`. On Vercel, add a KV database so it survives deploys:

1. In the Vercel project, open **Storage → Create Database → KV**.
2. Connect it to this project. `KV_REST_API_URL` and `KV_REST_API_TOKEN` are injected automatically.
3. Redeploy.

Until KV is connected, a device still keeps its own copy in the browser. After KV is on, the next visit uploads that copy and every other signed-in device can read it.

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
3. Add a KV store (see above) so progress follows you across devices.
4. Deploy.

On an iPhone or Android phone, open the site in the browser and use **Add to Home Screen**. It opens as its own app, still behind the same password.
