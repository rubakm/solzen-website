# SOLZEN corporate website

A lightweight, static-first company site for SOLZEN. It uses plain HTML, CSS and a small script for the mobile navigation. There is no database, contact form, CMS, authentication or required third-party service.

## Local build and preview

Requirements: Node.js 18 or later. No package installation is required.

```powershell
node build.mjs
node preview.cjs
```

Open `http://127.0.0.1:4173/`. The preview server serves the generated `dist/` folder. Stop it with Ctrl+C.

## Production build

Run `node build.mjs`. Deploy the **contents of `dist/`** as the static document root. The build has no external dependencies. The `_headers` file supplies baseline headers on hosts that support the Netlify/Cloudflare Pages format.

## Deployment and domain

This site can be deployed to any static host that serves HTML, CSS, JavaScript and image files. Configure `solzen.in` and `www.solzen.in` with the DNS records supplied by the selected host, enable HTTPS, and choose one hostname as the canonical host. The current pages use `https://solzen.in` as the requested canonical domain; the domain was not configured or verified as live as part of this project.

## Content and public claims

The public copy is limited to the mission, learning challenge, high-level framework, visual direction and incubation wording provided in the project documents. No product availability, customer results, market figures, commercial model, testimonials or institutional endorsement is claimed. The supplied SOLZEN and NIRMAAN logo images are served locally from `assets/`; IIT Madras appears as text.

The project documents did not provide approved team names, roles, biographies, photographs, articles, company email addresses or social profiles. These are not fabricated or linked. Add approved material before publishing team, insights, updates or contact channels. The current contact page explains that no public channel has been confirmed. There is no form, analytics script or cookie-based feature.

## Files

- `index.html`: company homepage
- `about/index.html`: company purpose, mission, stage and ecosystem context
- `approach/index.html`: public four-stage learning framework
- `contact/index.html`: contact status and informational next steps
- `styles.css`, `menu.js`: shared design system and accessible mobile menu
- `build.mjs`, `preview.cjs`: dependency-free static build and local preview
- `robots.txt`, `sitemap.xml`, `_headers`: discovery and host configuration
