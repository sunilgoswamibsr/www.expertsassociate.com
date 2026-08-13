# Experts Associates — Version 2

This is a redesigned static website for Experts Associates.

## Important file structure

Upload these files to the repository root:

- `index.html`
- `style.css` (optional if you split the inline CSS from index.html)
- `script.js`
- `robots.txt`
- `sitemap.xml`

The supplied `index.html` contains the CSS inline for easier deployment and loads `script.js` from the repository root.

Keep your existing logo files at:

- `assets/user-logos/Experts Associate Logo.png`
- `assets/user-logos/CoreAxis ERP logo.png`
- `assets/user-logos/CoreAxis HRMS Logo.png`

## Important checks before publishing

1. Verify `coreaxishrsm@expertsassociate.com` is a real mailbox.
2. Verify the WhatsApp number +91 9761414000 is correct.
3. Add genuine testimonials, client logos and business statistics only.
4. Add Privacy Policy and Terms pages if you collect visitor information.
5. The contact form currently opens the visitor's email application. For reliable lead capture, connect a real form backend/CRM.

## Critical fix from the previous version

The old page referenced `assets/style.css` and `assets/script.js`, while the repository listing showed `style.css` and `script.js` at the repository root. Version 2 loads `script.js` from the root and keeps the main CSS inside `index.html`, eliminating that path mismatch.
