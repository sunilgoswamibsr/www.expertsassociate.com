# Experts Associates — Redesigned Website

A refreshed, more professional version of the original site: a "live ledger /
dashboard" visual system (navy + brass-gold, tabular numerals, hairline grid),
an animated KPI/chart preview in the hero, and an interactive dashboard-style
enquiry panel that shows a live preview of what gets sent as you fill the form.

## What changed from the original
- New design system: Space Grotesk (headings) + Inter (body) + IBM Plex Mono
  (labels/data), navy/brass palette, hairline "ledger" texture, card hover
  states, scroll-reveal animation (with a safety fallback so content never
  gets stuck hidden if JS is slow/blocked).
- New hero: animated "CoreAxis · Live View" dashboard widget (KPI counters +
  bar chart), clearly labelled as an illustrative preview.
- New contact section: a two-pane "enquiry dashboard" — the left pane is the
  actual form, the right pane is a live-updating preview card (name, company,
  email, service, message length, a "ready to send" indicator) so visitors
  can see exactly what they're about to send.
- Fixed responsive bug: hero didn't stack on mobile in the original build;
  now verified down to 390px width.
- Working mobile nav, floating call/WhatsApp buttons.
- Fixed likely email typo: `coreaxishrsm@expertsassociate.om` →
  `coreaxishrms@expertsassociate.com` (the `.om` TLD and `hrsm` transposition
  looked like typos and would have silently bounced mail). **Please confirm
  this is the correct address before publishing** — update it in
  `index.html` (appears twice) if the intended domain is different.
- Kept your actual logos and founder photos as supplied.

## Files
- `index.html` — all page content/sections
- `assets/style.css` — design system + layout
- `assets/script.js` — mobile nav, scroll reveal, animated counters, live
  enquiry preview, mailto send
- `assets/user-logos/`, `images/` — your original logo and photo assets

## Free hosting
Recommended: Cloudflare Pages or GitHub Pages — upload/connect this folder
as a static site and attach your domain per the host's DNS instructions.

## Before public launch
- Confirm the HRMS contact email above.
- Replace any placeholder figures in the hero dashboard (82% / 96% /
  chart bars) with real numbers if you have them, or keep as illustrative.
- Add Privacy Policy / Terms pages and verified social links if needed.
- Wire the enquiry form to a real backend/CRM if you want submissions
  captured automatically instead of via the visitor's email app.
