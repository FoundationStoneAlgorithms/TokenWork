# TokenWork Pitch Deck

An interactive seed investment pitch deck for **TokenWork** — business capital markets infrastructure for African SMEs.

Built using the same design system and code architecture as [AuditLinkTrail PitchDeck](../AuditChain/PitchDeck).

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

The app lives in the `PitchDeck` directory of this repository.

1. Import the repository into Vercel.
2. Set **Root Directory** to `PitchDeck` when prompted.
3. Keep the detected Next.js preset. `vercel.json` pins `npm ci` for installs,
   `npm run build` for builds, and `npm run dev` for local Vercel development.
4. Deploy — no environment variables are required.

Each slide has a stable route (`/cover`, `/problem`, and so on), so preview
deployments can be shared with a direct link to any slide.

## Navigation

| Input | Action |
|---|---|
| ↑ / ↓ or ← / → | Previous / next slide |
| Space | Next slide |
| Shift + Space | Previous slide |
| Home / End | First / last slide |
| F | Toggle fullscreen |
| ? | Keyboard help |
| Scroll / Swipe | Navigate slides |

## Typography

Press `?` to open Presentation Controls. The Typography section lets you choose
fonts independently for headings, body text, and labels/numbers. Choices apply to
all slides immediately and are remembered in the browser; **Reset** restores the
Fraunces / Geist / IBM Plex Mono triad.

## Slides

| # | Slide | Key content |
|---|---|---|
| 01 | Cover | TokenWork brand mark, tagline |
| 02 | The Problem | 2.57M enterprises, 25% credit access, six barriers |
| 03 | The Opportunity | Uganda capital markets 5× growth, SME gap |
| 04 | The Insight | Rights before tokens, compliance by design |
| 05 | The Solution | Integrated 7-layer infrastructure |
| 06 | How It Works | 7-step capital formation flow |
| 07 | AI Agents | 3 bounded MVP agents |
| 08 | Target Market | Uganda-first, 5 candidate segments |
| 09 | Legal & Regulatory | CMA framework, D1–D10 open decisions |
| 10 | Technology | Rust · PostgreSQL · Solana · Next.js |
| 11 | MVP | 21 acceptance criteria, 8-week Bridge |
| 12 | Business Model | 4 customer segments, 4 revenue streams |
| 13 | Why Now | Regulations + capital + infrastructure aligned |
| 14 | Roadmap | Phases 0–5 |
| 15 | The Ask | Seed allocation: build, validate, prepare |
| 16 | Closing | Vision statement |

## Notes

- All data cited from public sources (CMA Uganda, World Bank, GROW/MGLSD, 2025–2026).
- Demonstration flows are simulated. No live settlement, no legally effective issuance.
- Investment amounts shown as directional only — to be agreed once real, never invented.
