# Project Initialization

## Purpose

Create an empty project scaffold using React, Vite, and Tailwind CSS.

The result must be a minimal starter project only, without business logic, feature implementation, or extra tooling unless explicitly requested later.

## Scope

This step covers only project initialization.

It includes:
- creating the project;
- installing base dependencies;
- installing Tailwind CSS package (configuration happens in the next step).

It does not include:
- Tailwind CSS configuration (content paths, directives, plugin setup);
- application logic;
- routing;
- state management;
- API integration;
- UI components beyond a minimal placeholder;
- testing or deployment setup.

## Used Technologies

This project uses carefully selected modern technologies that provide optimal developer experience and performance.

Install only the technologies listed here. Do not add any additional libraries, tools, or plugins unless explicitly requested. Tailwind's own required companion packages (e.g. `@tailwindcss/vite`) are considered part of Tailwind and are allowed.

1. **React** — Declarative UI library for building interactive user interfaces.
2. **Vite** — Next-generation frontend tooling with lightning-fast development server.
3. **Tailwind CSS** — Utility-first CSS framework for rapid UI development.

## Decisions

These decisions resolve ambiguities and must be followed exactly:

- **Package manager**: npm.
- **Language**: TypeScript (use the `react-ts` Vite template).
- **Tailwind version**: v4 (latest stable). Install `tailwindcss` and `@tailwindcss/vite`.
- **Project location**: scaffold into the repository root using `.` as the target directory.
- **Versioning**: use the latest stable release of each technology, not alpha or beta versions. "LTS" in this context means latest stable.

## Expected Result

After this step is finished, the project should:
- be created successfully with no errors;
- have all dependencies installed;
- have Tailwind CSS installed as a dependency (not yet configured);
- run locally with `npm run dev`.

## Step by Step

> **Warning:** Step 1 uses `--overwrite`, which deletes all existing files in the target directory. Back up or commit any important files (e.g. `CLAUDE.md`, `.claude/`) before running it.

1. Commit or back up any existing files in the repository root that must be preserved.
2. Scaffold the Vite + React + TypeScript project into the current directory:
   ```
   npm create vite@latest . -- --template react-ts --overwrite
   ```
3. Restore any backed-up files that were overwritten in Step 2.
4. Install project dependencies:
   ```
   npm install
   ```
5. Install Tailwind CSS v4 and its Vite plugin:
   ```
   npm install tailwindcss @tailwindcss/vite
   ```
6. Verify the project runs without errors:
   ```
   npm run dev
   ```

## Notes

Keep the structure minimal and clean.

Do not add anything that is not required for initializing the base project.

Do not configure Tailwind in this step — that is handled separately.

Scaffold-provided devDependencies (ESLint, TypeScript types, `@vitejs/plugin-react`, etc.) that come automatically with the Vite template are acceptable and do not violate the "install only listed technologies" rule.

## Quality Checklist

Before considering this step complete, verify:
- [ ] Project was created successfully with no errors.
- [ ] All dependencies from the **Used Technologies** block are installed.
- [ ] No extra dependencies were manually added beyond what is listed (scaffold-provided packages are acceptable).
- [ ] Latest stable versions were used for all technologies.
- [ ] TypeScript template (`react-ts`) was used.
- [ ] Tailwind CSS and `@tailwindcss/vite` are present in `package.json` but not yet configured.
- [ ] Project runs locally with `npm run dev`.
- [ ] Project structure is minimal and contains no placeholder business logic.