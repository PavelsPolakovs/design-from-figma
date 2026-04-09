# Project Initialization Workflow

High-level record of every initialization step completed in this project.
Each step links to the detailed instruction file used to execute it.

---

## Step 1 — Base Project Scaffold

**Instruction file:** `.claude/instructions/01-project-initialization.md`
**Status:** Done

### What was done
- Scaffolded a Vite + React + TypeScript project into the repository root using the `react-ts` template.
- Installed all project dependencies.
- Installed Tailwind CSS v4 and its Vite plugin (`@tailwindcss/vite`) as dependencies — not yet configured.

### Technologies installed

| Technology | Version |
|---|---|
| React | 19.2.4 |
| React DOM | 19.2.4 |
| Vite | 8.0.8 |
| TypeScript | 6.0.2 |
| Tailwind CSS | 4.2.2 |
| @tailwindcss/vite | 4.2.2 |

### Key files introduced
- `index.html` — Vite entry HTML
- `vite.config.ts` — Vite configuration (React plugin only at this stage)
- `src/main.tsx` — React entry point
- `src/App.tsx` — Root component placeholder
- `src/index.css` — Global styles (custom properties, base rules)
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` — TypeScript configuration
- `package.json` — Dependencies and scripts

### How to run
```
npm run dev
```

### Known issues encountered
- `npm create vite@latest .` fails on a non-empty directory. The `--overwrite` flag is required and wipes existing files — back up important files before running.

---

## Step 2 — Tailwind CSS Initialization

**Instruction file:** `.claude/instructions/02-tailwind-initialization.md`
**Status:** Pending