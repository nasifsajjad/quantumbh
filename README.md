# Quantum Software Solutions

Ten-page Next.js website for Quantum Software Solutions WLL, Bahrain.

## Local development

Requires Node.js 20.9 or later.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Deploy with Vercel

Import this repository into Vercel and use the automatically detected **Next.js** framework preset.

- Root directory: repository root
- Build command: `npm run build`
- Output directory: leave the Next.js default
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://quantumbh.net`

Use the intended production domain for `NEXT_PUBLIC_SITE_URL`. It controls canonical URLs, the sitemap, robots.txt, and organisation structured data. Connect the domain in Vercel when ready.

For local configuration, copy `.env.example` to `.env.local`.

## Pages

- `/` — Home
- `/about` — About Quantum
- `/solutions/software-development`
- `/solutions/ai-solutions-support`
- `/solutions/erp-accounting`
- `/solutions/hr-management`
- `/solutions/hospital-management`
- `/solutions/school-management` — Classveew
- `/solutions/sales-automation`
- `/contact` — Contact and request a demo

Solution-specific demo links preselect the relevant solution on the contact page.

## Project structure

- `app/` — App Router pages, metadata, global styles, sitemap, robots.txt, favicon
- `components/` — Reusable navigation, page sections, product explorer, enquiry form
- `lib/content.ts` — Company details, product capabilities, service content and enquiry copy
- `lib/product-previews.ts` — Labelled sample data for the four interactive software previews
- `public/images/` — Website imagery and logos
- `public/fonts/` — Self-hosted DM Sans and its SIL Open Font License

## Enquiry form

Demo requests can omit a message; general enquiries require one. The form validates the visitor's details and prepares an email draft addressed to `sales@quantumbh.net`. The visitor reviews and sends the enquiry through their email app, or copies the prepared text.

Automatic server-side email delivery is not connected. To enable it, connect an email service through a server-side endpoint and update the form and privacy notice. Keep email-service credentials server-side.

## Product visuals

The software imagery and interactive ERP, HR, hospital and Classveew previews are labelled conceptual visuals with illustrative data. Replace them with actual product screenshots when available. Editorial photographs are illustrative scenes, not photographs of Quantum staff or customers.

## Checks

```bash
npm run typecheck
npm run build
```
