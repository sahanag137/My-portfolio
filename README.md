# Sahana G — Personal Portfolio

A modern, minimal, editorial paper-style personal portfolio for Sahana G, Data Science Student & Developer.

## Stack

- **React** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)

## Design

- Warm beige / ivory background (`#EDE4D3`)
- Off-white paper surfaces (`#F8F5ED`)
- Dark charcoal text (`#171512`)
- Subtle burgundy accents (`#6F2633`)
- Paper texture, thin borders, soft shadows
- Handwritten annotations (Caveat font)
- Inter for main typography

## Getting Started

```bash
npm install
npm run dev
```

## Adding Your Photo

Place your photo at:

```
public/images/sahana.jpg
```

Recommended: square or portrait crop, at least 600x700px.

## Adding Your Resume

Place your PDF at:

```
public/resume/Sahana-G-Resume.pdf
```

## Project Data

All project information lives in `src/data/projects.ts`.
Edit `professionalProjects` or `personalProjects` to add/remove projects — no UI code changes needed.

## Sections

| Section   | File                          |
|-----------|-------------------------------|
| Navbar    | `src/components/Navbar.tsx`   |
| Home      | `src/components/Home.tsx`     |
| Skills    | `src/components/Skills.tsx`   |
| Projects  | `src/components/Projects.tsx` |
| Learning  | `src/components/Learning.tsx` |
| Resume    | `src/components/Resume.tsx`   |
| GitHub    | `src/components/GitHub.tsx`   |
| Contact   | `src/components/Contact.tsx`  |
| Footer    | `src/components/Footer.tsx`   |

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or GitHub Pages.
