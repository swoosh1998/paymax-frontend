# Paymax website rebuild

Rebuild the existing Paymax site as a modern React app on this project's stack (TanStack Start + Tailwind), keeping the current layout, colours, typography and imagery, with polished spacing and a new Regulatory Updates section modelled on sgcms.com.

## Pages

- **Home** — polished hero, existing sections kept, "News & Blog" replaced by a Regulatory Updates preview (4 latest cards + "View All"), contact form in the lower half.
- **About Us** (dropdown): About Us (with contact form), Vision & Mission, Our Team, Team Details, Privacy Policy, Terms and Conditions.
- **Services** (dropdown): All Services, Payroll Processing, HR & Labour Compliances, HR Operations, Attendance and Leave — migrated as-is.
- **Regulatory Updates** — listing page plus an article page per entry.
- **Contact** — existing form, wired up.
- **/admin** — empty placeholder page for a future Sanity Studio, not linked anywhere.

Pages in the old archive that are not in the new menu (pricing, FAQ, blog, case studies, press release, appointment, newsletter, login, register) are dropped.

## Header & footer

- Logo from your uploaded `logo.png`, white version in the footer; `fav.png` becomes the site icon.
- Smooth hover dropdowns, working mobile menu.
- "Get Started" button goes to Contact; phone shows **+91 9810442861** and dials on tap.
- Footer keeps its current layout, copyright and social links, adds Privacy Policy and Terms links, and makes **alert@paymaxonline.in** a working email link. Back-to-top arrow scrolls smoothly.

## Regulatory Updates

- Breadcrumbs, search bar, and working filters for date, state and compliance/act.
- 12 detailed sample entries on Indian HR compliance (EPFO, ESIC, Labour Codes, Minimum Wages).
- "Read More" opens a clean article page with a "Back to Updates" button.
- Content comes from one data file behind a `getRegulatoryUpdates()` function, so a real CMS can replace it later without touching the pages.

## Forms

Contact forms on Home, About Us and Contact, plus the footer newsletter input, all post to Web3Forms with success and error messages. Your access key sits as a single placeholder constant in one config file — paste it in and everything starts working.

## Team data

Team members (photo, name, role, bio, socials) live in an editable `teamData` file. Neutral avatar placeholders are used until you supply real photos.

## Technical notes

- Routes under `src/routes/` using TanStack Router file routes; shared header/footer in `__root.tsx`.
- Original `style.css` design tokens (brand colours, `s1`/`s2` palette, fonts) ported into `src/styles.css` as semantic tokens; no hardcoded colours in components.
- Images and brand files from the archive/uploads served as CDN asset pointers; favicon copied into `public/`.
- `SANITY_PROJECT_ID` and `WEB3FORMS_ACCESS_KEY` exposed as named constants in `src/config/site.ts`.
- Each route gets its own page title and description for search and social sharing.

## Build order

1. Design tokens, layout shell (header, dropdowns, mobile menu, footer), branding, favicon.
2. Home page.
3. Services pages, About Us group, legal pages, team data.
4. Regulatory Updates listing, filters, article pages, CMS-ready data layer.
5. Forms wiring, Contact page, `/admin` placeholder, polish pass.
