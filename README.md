# Off The Deep End Pools — Landing Page

Premium cinematic landing page for Off The Deep End Pools. Built in plain HTML/CSS/JS, no build tools or frameworks.

## Project Structure

```
.
├── index.html                    # Main landing page (all markup)
├── vercel.json                   # Vercel deploy config
├── public/
│   ├── videos/
│   │   ├── off-the-deep-end-hero-pool.mp4          # Hero video (luxury pool)
│   │   └── dirty-pool-to-clean-transformation.mp4  # Transformation video
│   └── images/
│       ├── off-the-deep-end-hero-poster.jpg         # Hero video poster (add later)
│       ├── dirty-pool-to-clean-poster.jpg           # Transform video poster (add later)
│       └── project-1 through project-5.jpg          # Showcase photos (add later)
└── src/
    ├── styles/
    │   └── main.css              # All styles — organized by section
    └── js/
        └── main.js               # All scripts — nav, reveal, video, FAQ, form
```

## Sections

1. **Hero** — full-screen cinematic pool video, headline, CTA
2. **Trust Strip** — 4 credibility signals
3. **Problem / Desire** — emotional pain points + desire card
4. **Transformation Video** — dirty-to-clean split section with lazy video
5. **Services** — 6 service cards with outcomes
6. **Why Choose Us** — 4 points + stats
7. **Process** — 5-step timeline
8. **Showcase** — portfolio grid (replace placeholders with real photos)
9. **Testimonials** — 3 review cards (replace with real reviews)
10. **FAQ** — 6 accordion questions
11. **Final CTA** — strong closing section
12. **Quote Form** — 6-field form with success state

## Development

Open `index.html` directly in a browser — no server required.

## Deploy

Push to `main` → Vercel auto-deploys. The `vercel.json` serves from the repo root.

## TODO: Real Backend Integration

The quote form currently saves leads to `localStorage`. To go live, replace the TODO block in `src/js/main.js` with a real `fetch()` call to:
- Your backend API
- Zapier / Make / n8n webhook
- Google Apps Script → Google Sheets
- CRM (HubSpot, GoHighLevel, etc.)

## TODO: Add Real Content

- [ ] Add poster images: `public/images/off-the-deep-end-hero-poster.jpg` and `dirty-pool-to-clean-poster.jpg`
- [ ] Replace showcase placeholder cards with real project photos (see HTML comments)
- [ ] Replace placeholder testimonials with verified real reviews
- [ ] Update business details (phone, email, service area)
