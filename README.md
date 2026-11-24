<div align="center">

# Rizky Putra Ichfiandra — Portfolio

**A creative developer portfolio built as one expressive single page.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TanStack Router](https://img.shields.io/badge/TanStack_Router-000000?style=for-the-badge&logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

## Overview

Personal portfolio covering profile, education, selected UI/UX case studies, and a contact form. Built with file-based routing, scroll and reveal animations, and a dark visual language.

## Sections

- **Hero** — introduction and primary calls to action.
- **About** — short profile and focus areas.
- **Education** — BINUS University.
- **Projects** — UI/UX case studies linked to their Figma files.
- **Contact** — form submitted through Web3Forms, no backend required.
- **CV** — downloadable PDF from `public/`.

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | React + TypeScript, Vite |
| Routing | TanStack Router (file-based) |
| Styling | Tailwind CSS 4, shadcn/ui (Radix) |
| Animation | Framer Motion, custom text and grid effects |
| Forms | Web3Forms API |
| Deploy | Vercel (`vercel.json`, SPA rewrite to `index.html`) |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:8080
npm run build
npm run preview
npm run lint
```

Node.js 20+ is recommended.

## Project Structure

```
src/
├── routes/            # index.tsx and __root.tsx (file-based routes)
├── components/        # page sections, contact form, gallery
│   ├── effects/       # BlurText, RotatingText, ScrollReveal, ShapeGrid
│   └── ui/            # shadcn/ui primitives
├── lib/utils.ts
└── styles.css         # Tailwind entry + design tokens
```

## Deployment

`vercel.json` sets the build command to `npm run build`, output to `dist`, and rewrites all paths to `index.html` so client-side routing works. The contact form needs no environment variables; it posts directly to Web3Forms.

---

Built by [Rizky Putra Ichfiandra](https://github.com/RizkyPutraIchfiandra).
