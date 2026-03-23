# Suleiman Adeniyi — Portfolio

A modern, premium, conversion-focused portfolio website built with Next.js 14, Tailwind CSS, and TypeScript.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts
- **Deployment**: Vercel-optimized

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
ade-portfolio/
├── app/
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout, metadata, fonts
│   └── page.tsx           # Main page — composes all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Hero section with animated entrance
│   ├── Trust.tsx          # Authority / credibility grid
│   ├── Projects.tsx       # Featured projects + cards
│   ├── Services.tsx       # Services offered
│   ├── Process.tsx        # How you work
│   ├── About.tsx          # About section + skills
│   ├── CTA.tsx            # Closing CTA with WhatsApp + email
│   ├── Footer.tsx         # Footer with social links
│   ├── SectionHeader.tsx  # Reusable section header
│   └── useScrollReveal.ts # Scroll-triggered fade-in hook
└── public/                # Static assets (add your photo here)
```

## Before Going Live — Checklist

### 1. Update contact info in `components/CTA.tsx`
```ts
const WHATSAPP_NUMBER = "2348012345678"; // your real number
const EMAIL = "you@yourdomain.com";
```

### 2. Update project URLs in `components/Projects.tsx`
Each project has `demoUrl` and `projectUrl` — replace the placeholder links.

### 3. Update social links in `components/Footer.tsx`
Replace `yourusername` with your real GitHub, LinkedIn, Twitter handles.

### 4. Add your photo (optional)
Drop your photo in `/public/ade.jpg` and update the avatar in `components/About.tsx`:
```tsx
// Replace the "SA" initials div with:
<Image src="/ade.jpg" alt="Suleiman Adeniyi" fill className="object-cover rounded-2xl" />
```

### 5. Update ToolsNG live demo URL
In `components/Projects.tsx`, update `demoUrl` for ToolsNG to the real URL.

### 6. SEO metadata
Update `app/layout.tsx` → `metadata` with your real domain for `openGraph`.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments on every push.

## Color Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--yellow` | `#FFD600` | Primary accent, CTAs |
| `--bg` | `#0A0A0A` | Page background |
| `--bg2` | `#111111` | Elevated surfaces |
| `--bg3` | `#181818` | Cards, inputs |
| `--border` | `#222222` | Borders |
| `--muted` | `#888888` | Subtext, descriptions |
| `--text` | `#F0F0F0` | Primary text |
| `--card` | `#141414` | Project cards |
