# Trusted Local Tech

Production website built with React, TypeScript, Vite, and Tailwind CSS.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - typecheck and build production bundle
- `npm run lint` - run ESLint checks
- `npm run preview` - preview the production build

## Project Structure

The source tree is organized by responsibility:

- `src/app` - app entry and router wiring
- `src/pages` - route-level pages
- `src/widgets` - larger UI sections composed on pages
- `src/shared/components` - reusable UI primitives
- `src/shared/config` - static business/content configuration
- `src/shared/lib` - pure helper utilities
- `src/shared/types` - shared TypeScript contracts

## Notes

- Main HTML entry points to `src/app/main.tsx`.
- Keep business content updates in `src/shared/config/siteData.ts`.
