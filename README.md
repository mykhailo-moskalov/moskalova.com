# moskalova.com

Portfolio site of Natalia Moskalova, an editorial lifestyle photographer based in Vienna.
English and Ukrainian, statically prerendered, self-hosted.

**Live:** https://moskalova.com

## Stack

- Next.js 16 (App Router, Turbopack, React Compiler), React 19, TypeScript
- next-intl 4 for locale routing and translations (`en`, `uk`)
- CSS Modules, no UI framework. Fonts via `next/font` (Cormorant Garamond, Forum)
- Swiper for the hero slideshow, yet-another-react-lightbox for galleries,
  Radix Accordion for menus and Q&A, Zustand for sidebar and viewport state
- Nodemailer for the contact form

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The contact form works in development without any SMTP settings. While `SMTP_HOST`
is empty, mail goes to a throwaway [Ethereal](https://ethereal.email) inbox and the
preview links are printed in the dev server console.

## Scripts

| Command                | What it does                                                              |
| ---------------------- | ------------------------------------------------------------------------- |
| `npm run dev`          | Dev server on port 3000                                                   |
| `npm run build`        | Production build into `.next`                                             |
| `npm run start`        | Serve the production build                                                |
| `npm run lint`         | ESLint with the Next.js core-web-vitals and TypeScript rules              |
| `npm run scan`         | Resize new photos and regenerate the gallery manifest, see [Galleries](#galleries) |
| `npm run sort-imports` | Group imports in `app`, `components` and `lib`, then format with Prettier |

`sort-imports` expects `prettier` on your `PATH`. It is not a project dependency.

## Project structure

```text
app/
  [locale]/          pages: home, about, services, contact, impressum,
                     three gallery categories and [category]/[set] galleries
  api/contact/       contact form endpoint
  sitemap.ts         sitemap, robots and web manifest routes
  robots.ts
  manifest.ts
components/
  sections/          page-level blocks (Hero, Pricing, ContactForm, ...)
  layout/            composite pieces (Header, Footer, Gallery, PhotoGrid, ...)
  ui/                primitives (Btn, Container, Heading, LangSwitcher, ...)
i18n/                next-intl routing and request config
lib/
  data/              gallery definitions and the generated photo manifest
  seo/               canonical, hreflang and Open Graph helpers
  mail.ts            SMTP transport
  contactEmails.ts   email templates
  rateLimit.ts       in-memory rate limiter
messages/            en.json, uk.json
public/
  galleries/         photos, one folder per set
  og.jpg             link preview image, 1200x630
scripts/             scan-galleries.mjs, sort-imports.mjs
proxy.ts             next-intl middleware (locale redirect)
```

## Content

### Translations

All interface text lives in `messages/en.json` and `messages/uk.json`. Both files
must contain the same keys. Gallery titles are the exception: they sit next to the
gallery definitions in `lib/data/*.ts` as `{ en, uk }` pairs.

Every URL carries a locale prefix (`/en/...`, `/uk/...`). A request to `/` is
redirected to a locale by the middleware in `proxy.ts`.

### Galleries

Photos live in `public/galleries/<category>/<set>/`. To add a set:

1. Copy the photos into a new folder, for example `public/galleries/personal/maria/`.
2. Run `npm run scan`.
3. Register the set in `lib/data/personal.ts`, `brand.ts` or `creatives.ts`:

   ```ts
   set("maria", "personal/maria", 3, {
     title: { en: "Maria", uk: "Марія" },
     subtitle: { en: "Garden Story", uk: "У саду" },
   }),
   ```

   The arguments are the URL slug, the folder under `public/galleries`, the
   zero-based index of the cover photo (files are sorted by name), and the titles.
   Slugs must be unique within a category.

The gallery page, its static params and its sitemap entries follow automatically.
A folder that was not scanned, or a cover index that does not exist, fails the
build with an explicit error.

`npm run scan` walks every folder under `public/galleries` and:

- copies each original to `photos-originals/` the first time it sees it (gitignored),
- resizes anything longer than 2560 px on its long edge, in place, and applies EXIF rotation,
- writes file names and pixel dimensions to `lib/data/galleries.generated.json`.

Commit the photos together with the regenerated manifest.

Two folders are not sets: `hero/` feeds the home page slideshow (slide grouping
is defined in `components/sections/Hero/Hero.tsx`) and `about/` holds the portrait
for the about page.

## Contact form

`POST /api/contact` sends two emails over SMTP: a notification to the photographer,
with the visitor as reply-to, and a confirmation to the visitor in their language.

| Variable               | Purpose                                                                |
| ---------------------- | ---------------------------------------------------------------------- |
| `SMTP_HOST`            | SMTP server. Required in production, empty in development for Ethereal |
| `SMTP_PORT`            | Defaults to `587`. Port `465` switches to implicit TLS                 |
| `SMTP_USER`            | Mailbox used to authenticate                                           |
| `SMTP_PASSWORD`        | Password for that mailbox. With Google Workspace, an App Password      |
| `SMTP_FROM`            | Sender shown to recipients, e.g. `"Name <noreply@moskalova.com>"`      |
| `CONTACT_TO`           | Inbox that receives form submissions                                   |
| `CONTACT_OWNER_LOCALE` | Language of the notification email, `en` or `uk`. Defaults to `uk`     |
| `SITE_URL`             | Public origin, used in the email signature and for the origin check    |

`.env.example` documents each of them in more detail.

Abuse protection is built in: a honeypot field, an origin check in production, a
16 KB body limit, and rate limits of 5 messages per IP per hour, 30 per hour
overall and 3 confirmation emails per address per day.

The rate limits are kept in memory. The app therefore has to run as a single
process, and the reverse proxy has to pass the client address in `X-Real-IP`.

## Deployment

The site needs a Node.js server because of the contact endpoint and the locale
middleware. It runs as one long-lived `next start` process behind nginx, managed
by pm2.

First start, with production values in `.env.local`:

```bash
npm install
npm run build
pm2 start npm --name moskalova -- start -- -p 3001 -H 127.0.0.1
pm2 save
```

Every release after that:

```bash
git pull
npm ci
npm run build
pm2 restart moskalova
```

If `npm ci` reports that `package-lock.json` is out of sync, run `npm install`
instead and commit the lockfile it writes.

nginx forwards requests to the app and passes the client address on:

```nginx
location / {
    proxy_pass http://127.0.0.1:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Validate and reload after any change to the nginx config:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## Credits

Photographs and texts © Natalia Moskalova Photography.
Development by [Mykhailo Moskalov](https://github.com/mykhailo-moskalov).
