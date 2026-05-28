# Pool Contractor Landing Page — Cloning Template

Premium cinematic landing page template for pool contractor businesses.
Built in plain HTML/CSS/JS — no build tools, no framework, no package manager.

**Live demo:** Off The Deep End Pools — `https://off-the-deep-end-pools.vercel.app/`

---

## How to Clone for a New Client

1. Copy the entire project folder to a new directory
2. Open `src/config/site-content.js` and update every value
3. Search `index.html` for `<!-- CLIENT SWAP` comments and update that content
4. Replace media files in `public/videos/` and `public/images/`
5. Connect the quote form to the client's backend (see `TODO` in `src/js/main.js`)
6. Push to a new Vercel project → auto-deploys

---

## Project Structure

```
.
├── index.html                        # All markup — search "CLIENT SWAP" for swap areas
├── vercel.json                       # Vercel deploy config (outputDirectory: ".")
├── src/
│   ├── config/
│   │   └── site-content.js          # ← CLIENT CONTENT MAP — start here when cloning
│   ├── styles/
│   │   └── main.css                 # All styles — organized by section
│   └── js/
│       └── main.js                  # All scripts — nav, reveal, video, FAQ, form
└── public/
    ├── videos/
    │   ├── pool-hero-template.mp4           # Hero video background
    │   └── dirty-pool-to-clean-transformation.mp4
    └── images/
        ├── pool-hero-poster.jpg             # Hero video poster (add when ready)
        └── project-1 through project-5.jpg # Showcase photos (add real photos)
```

---

## Page Sections (all CLIENT SWAP areas)

| Section | Swap What |
|---|---|
| **Hero** | eyebrow, headline, paragraph, CTA labels, video, poster |
| **Trust Strip** | 5 trust items (label + description) |
| **Problem / Desire** | pain points list, desire card quote |
| **Transformation** | heading, benefits list, transformation video |
| **Services** | 6 service cards (title, description, outcome) |
| **Why Choose Us** | 4 why-points + stat cards |
| **Process** | 5 step titles + descriptions |
| **Showcase** | 5 project photos (swap placeholders with real images) |
| **Testimonials** | 3 review cards (real reviews when available) |
| **FAQ** | 6 Q&A accordion items |
| **Objections** | 4 objection/answer cards |
| **Final CTA** | headline + paragraph |
| **Quote Form** | project type options + backend webhook |
| **Footer** | business name, tagline, description |

---

## Development

Open `index.html` directly in a browser — no server required.

## Deploy

Push to `main` → Vercel auto-deploys. The `vercel.json` serves from the repo root.

## Form Backend

The quote form currently saves leads to `localStorage`. To go live, replace the
`TODO` block in `src/js/main.js` with a real `fetch()` call to:
- Your backend API
- Zapier / Make / n8n webhook
- Google Apps Script → Google Sheets
- CRM (HubSpot, GoHighLevel, etc.)

## Media Assets Needed Per Client

- [ ] `public/videos/pool-hero-v2.mp4` — hero video (served at `/videos/pool-hero-v2.mp4`; replace with client footage)
- [ ] `public/images/pool-hero-poster.jpg` — hero video first-frame poster
- [ ] `public/videos/dirty-pool-to-clean-transformation.mp4` — transformation demo
- [ ] `public/images/project-1.jpg` through `project-5.jpg` — portfolio photos
