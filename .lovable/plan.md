## What I'll build

**1. AI feature — "Why?" explanations on the results screen**
On the review screen, each question gets a "Why?" button. Clicking it calls a server endpoint that uses Lovable AI to generate a 1–2 sentence explanation of the correct answer and caches it in memory for the session.

**2. Google sign-in (via Lovable Cloud)**
A small auth bar on the Home screen: "Sign in with Google" / "Sign out · {email}". Progress still lives in localStorage — no per-user database (keeps the current single-file quiz simple).

GitHub login is **not** natively supported by Lovable Cloud. To add it I'd need to connect Supabase directly and enable GitHub in the Supabase dashboard. I'll skip GitHub for now; tell me if you want that path instead.

## Technical details

- Enable **Lovable Cloud** (Supabase + AI Gateway) — needed for both auth and the AI endpoint.
- Add a public server route `src/routes/api/explain.ts` that:
  - Accepts `{ question, correctAnswer, category }`
  - Calls Lovable AI Gateway (`google/gemini-2.5-flash`) via `@ai-sdk/openai-compatible`
  - Returns `{ explanation: string }`
- In `public/quiz.html`:
  - Add Supabase JS via CDN, initialize with the publishable key + URL (injected as globals from a tiny `/api/config` route, or hardcoded from `VITE_` env at build — will use a small config endpoint).
  - Google sign-in button using `supabase.auth.signInWithOAuth({ provider: 'google' })`.
  - Session-aware header showing user email + sign-out.
  - Per-question "Why?" button on results screen that lazy-fetches `/api/explain`.

## Files touched
- New: `src/routes/api/explain.ts`, `src/routes/api/config.ts`
- Edit: `public/quiz.html` (auth bar, "Why?" buttons, small CSS)
- Enable Lovable Cloud and configure Google provider
