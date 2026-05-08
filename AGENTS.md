# AGENTS

This file defines the agent conventions for the **Trusted Local Tech** project — a production React + TypeScript + Vite website. It tells AI coding agents how this project is structured, what the rules are, and how to operate safely and effectively within it.

---

## Table of Contents

- [Project Identity](#project-identity)
- [Technology Stack](#technology-stack)
- [Source Layout](#source-layout)
- [Coding Conventions](#coding-conventions)
- [Agent Directives](#agent-directives)
- [Allowed Operations](#allowed-operations)
- [Prohibited Operations](#prohibited-operations)
- [Commands](#commands)
- [Content Rules](#content-rules)

---

## Project Identity

**Name**: Trusted Local Tech  
**Type**: Production marketing website  
**Audience**: Local residential tech service customers  
**Goal**: Convert visitors into leads via clear service presentation, trust signals, and direct contact actions.

---

## Technology Stack

| Layer | Tool |
|-------|------|
| Framework | React 19 |
| Language | TypeScript (strict) |
| Bundler | Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Routing | React Router v7 |
| Linting | ESLint |

---

## Source Layout

```
src/
  app/            # Entry point and router setup — do not add business logic here
  pages/          # One file per route (Home, About, Services, Contact)
  widgets/        # Page-section compositions (HeroSection, ServicesGrid, etc.)
  shared/
    components/   # Reusable UI primitives — stateless, prop-driven
    config/       # Static site content — siteData.ts is the single source of truth
    lib/          # Pure utility functions, no side effects
    types/        # Shared TypeScript interfaces and types
```

**Rule**: Agents must respect these boundaries. Do not place business logic in `app/`, do not hardcode content outside `siteData.ts`, do not add stateful logic to `shared/components/`.

---

## Coding Conventions

- **TypeScript**: All new files must be `.tsx` or `.ts`. No `any` types. Prefer explicit return types on exported functions.
- **Components**: Functional components only. Props must be typed with a named interface.
- **Styling**: Tailwind utility classes only — no inline styles, no CSS modules, no external CSS files beyond `index.css`.
- **Exports**: Named exports preferred. Default exports only for page-level components.
- **Content**: All user-facing strings (copy, labels, service names) must live in `src/shared/config/siteData.ts`.
- **Imports**: Use relative imports within `src/`. Do not use path aliases unless already configured in `tsconfig.app.json`.
- **Animation**: Framer Motion is the only approved animation library. Do not introduce CSS keyframe animations or other libraries.

---

## Agent Directives

These instructions govern how agents must behave in this repository.

### Before Making Changes

1. Read the relevant file(s) before editing — never write blind.
2. Identify which layer the change belongs to (`pages`, `widgets`, `shared`, etc.) before creating or modifying a file.
3. If content is being changed, check `siteData.ts` first — it may already define what you need.
4. If a similar component already exists in `shared/components/`, extend it rather than creating a duplicate.

### While Making Changes

1. Match the existing code style precisely — indentation, naming conventions, import order.
2. Keep changes minimal and scoped. Do not refactor surrounding code that was not part of the request.
3. Do not add comments, docstrings, or `TODO` markers unless explicitly instructed.
4. Do not install new dependencies without explicit user approval.

### After Making Changes

1. Verify TypeScript validity — changes must not introduce type errors.
2. Confirm that any modified component is still usable with its existing props interface.
3. Do not auto-commit. Stage and commit only when the user instructs it.

---

## Allowed Operations

- Reading any file in the repository
- Editing files within `src/`
- Creating new components in `src/shared/components/` or new widgets in `src/widgets/`
- Adding new pages in `src/pages/` and registering routes in `src/app/`
- Updating `src/shared/config/siteData.ts` to reflect content changes
- Running `npm run dev`, `npm run build`, `npm run lint`, and `npm run preview`
- Staging and committing changes **only when the user requests it**

---

## Prohibited Operations

- `git push` — never push without explicit user instruction
- `git reset --hard` or any destructive git operation
- Dropping or truncating any file contents without instruction
- Installing npm packages without user approval
- Modifying `vite.config.ts`, `tsconfig*.json`, or `eslint.config.js` unless specifically asked
- Introducing new global CSS rules outside `src/index.css`
- Adding `console.log` statements to production code

---

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Type-check and produce production bundle in `dist/` |
| `npm run lint` | Run ESLint across the entire project |
| `npm run preview` | Serve the production build locally for verification |

---

## Content Rules

All customer-facing content is intentional and curated. When an agent modifies copy:

- Preserve the professional, approachable tone — no technical jargon visible to end users.
- Do not invent service names, prices, or contact details.
- Do not alter SEO metadata (`src/shared/components/Seo.tsx`) without explicit instruction.
- Phone numbers, addresses, and business hours must only be updated when the user provides the exact new value.

---

**Last Updated**: May 8, 2026  
**Status**: Active

