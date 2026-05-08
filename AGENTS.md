# AGENTS.md

Guidelines for AI coding agents working on this repository.

Project: **Majstorska IT pomoć**  
Type: Croatian local PC/laptop/Windows/simple IT help website for Zagreb.  
Main goal: make it easy for visitors to contact the service through **WhatsApp, phone, or email** while keeping the site honest, local, clear, and trustworthy.

This is **not** a SaaS startup, corporate IT company, flashy agency page, or generic AI-looking landing page. It should feel like a calm local person who helps with everyday computer problems and explains things clearly.

---

## 1. Project identity

The website must feel:

- honest, direct, calm, human, and local
- Croatian-first and beginner-friendly
- practical, not flashy
- affordable, but not cheap-looking
- trustworthy without fake proof or overpromising

Main audience:

- home users in Zagreb
- older or less technical users
- students
- freelancers
- small offices / small local businesses
- people with slow laptops, Windows issues, printer/Wi-Fi/email problems, backup needs, or basic software setup problems

Visitors should quickly understand:

1. What help is offered.
2. Whether their problem fits.
3. How to contact the service.
4. That the price/scope is agreed before work.
5. That impossible results are not promised.

All visible copy should be in **Croatian using Latin script**.

---

## 2. Tech stack

This is a **React + TypeScript + Vite** project.

Current stack:

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router v7
- ESLint

Do **not** migrate to Next.js, Astro, Remix, or another framework unless explicitly asked.

Commands:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

`npm run build` and `npm run lint` should pass before a task is considered finished. If you cannot run them, say so clearly.

Do not auto-commit, push, or run destructive git commands unless the user explicitly asks.

---

## 3. Repository structure

```txt
src/
  app/              app entry and router setup
  pages/            route-level pages
  widgets/          larger page sections
  shared/
    components/     reusable UI primitives
    config/         static business/content configuration
    lib/            helper utilities
    types/          shared TypeScript contracts
```

Important rule:

**Most business copy, services, FAQ, contact info, SEO copy, and pricing belong in `src/shared/config/siteData.ts`.**

Do not scatter business text across components unless it is clearly layout-only or component-specific.

Use this ownership:

- page structure/layout → `src/pages/`
- homepage sections → `src/widgets/home/`
- reusable UI → `src/shared/components/`
- business content/contact/pricing/FAQ/SEO → `src/shared/config/siteData.ts`
- shared types → `src/shared/types/`
- pure helpers → `src/shared/lib/`

Do not put business logic inside `src/app/`.

---

## 4. Agent workflow

Before editing:

1. Read `AGENTS.md`.
2. Inspect relevant files first.
3. For copy/content changes, check `src/shared/config/siteData.ts` first.
4. For design changes, check existing Tailwind/theme patterns first.
5. For routing changes, check `src/app/` and `src/pages/` first.

For larger tasks:

1. Audit current state.
2. Explain the problem.
3. Make a small plan.
4. Implement in focused passes.
5. Verify with build/lint.
6. Summarize exact files changed and anything not verified.

Avoid giant rewrites. Keep changes scoped. Do not refactor unrelated files.

---

## 5. Coding rules

- Use TypeScript for new code.
- Prefer `.tsx` for React components and `.ts` for config/helpers/types.
- Avoid `any`.
- Use typed props.
- Use functional components.
- Reuse existing components before creating new ones.
- Preserve current architecture and naming unless there is a strong reason.
- Use Tailwind and existing theme tokens.
- Do not add new styling systems.
- Do not add dependencies without user approval.
- Framer Motion is allowed, but use it lightly.
- Keep code readable, not clever.

---

## 6. Design direction

The design should feel like:

**friendly local repair expert + clean modern tech + honest Croatian service**

Preferred visual style:

- warm off-white / cream / paper-like background
- deep green / teal / charcoal identity
- subtle clay/amber accent if already present
- clean cards, soft shadows, readable typography
- generous spacing and clear hierarchy
- polished but local and human

Avoid:

- generic AI-template look
- corporate SaaS style
- dark mode as main identity
- neon/flashy gradients
- fake dashboard visuals
- enterprise IT support feeling
- obvious stock-photo technician vibe

Mobile matters a lot. Prioritize large tap targets, readable text, no cramped sections, no horizontal scroll, clear CTAs, and repeated contact options.

---

## 7. Contact and conversion rules

Contact is the main conversion goal.

- WhatsApp should be the primary CTA.
- Phone should be visible and easy to tap.
- Email is useful for longer explanations.
- Contact options should appear near the top and near the bottom.
- Do not create a fake backend form.
- If a form only opens `mailto:`, make that behavior clear or prefer direct contact buttons.

Good CTA labels:

- `Pošalji WhatsApp poruku`
- `Nazovi`
- `Pošalji što ne radi`
- `Imam sporo računalo`
- `Trebam pomoć s Windowsima`
- `Trebam pomoć s printerom ili Wi-Fi-jem`

Avoid vague CTAs like `Get started`, `Learn more`, or `Discover solutions`.

Do not change phone, WhatsApp, email, service area, or working hours unless the user provides exact replacement values.

---

## 8. Copywriting rules

User-facing copy must be simple Croatian, not corporate English-style marketing.

Write like:

> “Pošaljite kratko što ne radi i dogovorimo realan sljedeći korak.”

Do not write like:

> “We deliver innovative end-to-end IT solutions for digital transformation.”

Preferred ideas:

- pošteno
- jasno
- bez kompliciranja
- bez žargona
- okvirna cijena prije rada
- ako se ne isplati, kažem odmah
- realna procjena
- pomoć za svakodnevne probleme

Avoid:

- “najbolji servis”
- “100% garancija”
- “garantirano spašavanje podataka”
- “certificirani stručnjaci” unless actually true
- “tim stručnjaka” unless actually true
- “24/7” unless actually true
- fake reviews, ratings, addresses, statistics, or business history

---

## 9. Truth and scope rules

Never fake trust.

Do not add:

- fake testimonials/reviews/star ratings
- fake statistics or “trusted by” logos
- fake certifications
- fake address or business registration details
- fake team members
- fake before/after claims
- fake LocalBusiness schema

Allowed trust signals:

- clear process
- honest FAQ
- Zagreb and okolica service area
- dogovor prije rada
- okvirna cijena prije rada
- “ako je izvan mog opsega, kažem odmah”
- “ne obećavam profesionalno spašavanje podataka”
- “ne obećavam napredne hardverske popravke”

Core service scope:

- slow PC/laptop help
- Windows problems
- basic software setup
- printer help
- Wi-Fi/basic home network help
- email setup/help
- basic backup guidance
- new laptop setup
- data transfer guidance
- basic suspicious app/browser cleanup
- beginner-friendly IT explanation

Avoid exaggerated claims like 100% virus removal, guaranteed data recovery, motherboard repair, advanced electronics repair, forensic analysis, or cybersecurity audits unless explicitly requested and supported.

---

## 10. Pricing rules

Use honest approximate pricing with `od`, not fixed promises for unknown problems.

Recommended packages:

- `Brzi pregled — od 20€`
- `Windows osvježenje — od 35€`
- `Sigurniji podaci — od 30€`
- `Čisto i mirnije računalo — od 45€`
- `Mala IT pomoć — od 25€`

Always include the idea:

> “Točna cijena ovisi o stanju računala i dogovara se prije rada.”

Do not include parts, licenses, or paid software in service prices unless explicitly stated.

---

## 11. SEO and accessibility

Local SEO terms to use naturally, without keyword stuffing:

- PC pomoć Zagreb
- laptop pomoć Zagreb
- IT pomoć Zagreb
- Windows pomoć Zagreb
- sporo računalo Zagreb
- servis računala Zagreb only when not misleading
- pomoć s printerom Zagreb
- Wi-Fi pomoć Zagreb
- backup podataka Zagreb

Each page should have a clear title, meta description, one strong H1, semantic headings, readable copy, and a contact CTA.

Accessibility requirements:

- semantic HTML
- readable contrast
- large enough text
- descriptive buttons/links
- keyboard-visible focus states
- useful alt text
- no tiny contact links
- respect `prefers-reduced-motion`

Remember: this is a Vite SPA, so SEO improvements have limits unless the project later moves to SSR/SSG.

---

## 12. Media, animation, and performance

Images should support trust, not fake it.

Avoid obvious stock technicians, fake repair labs, fake teams, AI-looking people, and unrealistic cybersecurity visuals.

Better direction:

- clean desk
- laptop/PC detail
- calm home-desk/workspace feeling
- subtle repair/notebook atmosphere

Animation should be subtle: small fades, gentle hover states, restrained reveals. Avoid flashy motion, parallax overload, and constant moving elements.

Performance rules:

- avoid unnecessary dependencies
- avoid huge images
- avoid heavy animation
- keep components small
- do not add client-side complexity for static content

Simplicity wins.

---

## 13. Prohibited actions

Do not:

- push or commit unless asked
- run destructive git commands
- rewrite the whole project for a small request
- install packages without approval
- migrate frameworks without approval
- invent business facts
- add fake trust signals
- change real contact details without exact instruction
- add hidden tracking/analytics/third-party scripts without approval
- add secrets or API keys
- turn the site into a generic IT agency or dark SaaS page

---

## 14. Definition of done

A task is done when:

- the requested change is implemented
- changes are scoped and reviewable
- visible copy remains Croatian unless instructed otherwise
- contact actions still work
- mobile layout is considered
- TypeScript is not broken
- build/lint is run or clearly recommended
- no fake claims or fake data were introduced
- final summary lists changed files, checks run, and anything not verified

Preferred final response:

```txt
Done:
- ...

Checked:
- npm run build
- npm run lint

Notes:
- ...
```

---

## Final principle

Build this like a real local service website that needs trust more than hype.

Make it clear.  
Make it honest.  
Make it easy to contact.  
Do not make it fake.  
Do not make it corporate.  
Do not make it look like an AI template.
