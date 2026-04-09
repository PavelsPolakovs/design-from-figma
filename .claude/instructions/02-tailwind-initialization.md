# Tailwind CSS Initialization

## Purpose

Configure Tailwind CSS v4 in the existing project scaffold.

This step wires Tailwind into Vite, applies the `oaf` class prefix, and establishes a class-based theme switching system using CSS custom properties.

## Scope

This step covers Tailwind configuration only.

It includes:
- registering the Tailwind Vite plugin in `vite.config.ts`;
- importing Tailwind into `src/index.css`;
- setting the `oaf` utility class prefix;
- defining the default theme via CSS custom properties;
- setting up class-based theme switching (e.g. `.ioaf` on a parent element activates the IOAF theme).

It does not include:
- defining actual design tokens beyond a minimal placeholder;
- building any UI components;
- changing any existing styles in `src/index.css`.

## Current Project State

Before this step, the project has:
- `tailwindcss` and `@tailwindcss/vite` installed in `package.json` but not configured.
- `vite.config.ts` with only the React plugin registered.
- `src/index.css` with existing custom properties and base styles — these must not be removed.

## Decisions

- **Tailwind version**: v4 (already installed).
- **Preflight**: included — Tailwind v4 does not support disabling preflight via split imports without breaking JIT utility generation. The full `@import "tailwindcss"` must be used. If preflight conflicts with existing base styles, handle via `@layer base` overrides after the import.
- **Class prefix**: `oaf` — all utility classes are prefixed using Tailwind v4's **variant syntax** (colon separator). Examples: `oaf:flex`, `oaf:text-red-500`, `oaf:max-lg:flex-col`.
- **Prefix format in config**: `prefix: 'oaf'` — **no trailing dash**. In v4 the dash separator is added automatically. Using `'oaf-'` raises a warning and is invalid.
- **Variant ordering with prefix**: The prefix must come **first** in compound classes. Responsive and state modifiers come after the prefix, not before:
  - Correct: `oaf:max-lg:flex-col`, `oaf:hover:border-red-500`, `oaf:focus-visible:outline-2`
  - Wrong: `max-lg:oaf:flex-col`, `hover:oaf:border-red-500`
- **CSS variable shorthand**: Tailwind v4 supports `oaf:text-(--my-var)` as a shorthand for `oaf:text-[var(--my-var)]`. Use the short form.
- **Config file**: a `tailwind.config.ts` file is used to set the prefix. It is referenced from CSS via `@config`.

## Class Writing Rules

Always prefer the shortest valid Tailwind class. Arbitrary bracket values (`[...]`) are a last resort — use them only when no shorter form exists. This keeps class strings concise, which directly reduces token usage when AI generates or reads component code.

### 1. Scale values over pixel brackets

Tailwind v4's spacing scale is `1 unit = 0.25rem = 4px`. Convert pixel values before reaching for brackets:

```
px ÷ 4 = scale value
```

| Avoid | Prefer | Value |
|---|---|---|
| `oaf:w-[22px]` | `oaf:w-5.5` | 22px |
| `oaf:h-[18px]` | `oaf:h-4.5` | 18px |
| `oaf:gap-[25px]` | `oaf:gap-6.25` | 25px |
| `oaf:py-[5px]` | `oaf:py-1.25` | 5px |
| `oaf:px-[10px]` | `oaf:px-2.5` | 10px |

Use bracket syntax only when the pixel value does not divide evenly by 4 and no named utility (`rounded`, `rounded-sm`, etc.) matches closely enough.

### 2. CSS variable shorthand over `var()` brackets

Tailwind v4 supports a short form for CSS custom properties — use it everywhere:

| Avoid | Prefer |
|---|---|
| `oaf:text-[var(--accent)]` | `oaf:text-(--accent)` |
| `oaf:bg-[var(--social-bg)]` | `oaf:bg-(--social-bg)` |
| `oaf:border-[var(--border)]` | `oaf:border-(--border)` |
| `oaf:hover:shadow-[var(--shadow)]` | `oaf:hover:shadow-(--shadow)` |

### 3. Named utilities over arbitrary properties

Check whether a named utility already exists before writing an arbitrary property value:

| Avoid | Prefer |
|---|---|
| `oaf:transition-[box-shadow]` | `oaf:transition-shadow` |
| `oaf:transition-[color]` | `oaf:transition-colors` |
| `oaf:transition-[opacity]` | `oaf:transition-opacity` |

## Expected Result

After this step is finished, the project should:
- be created successfully with no errors;
- have Tailwind CSS fully active with the `oaf:` prefix;
- generate utility classes from source files via JIT;
- have theme tokens defined in `@theme` and `.ioaf` scoped overrides in `src/index.css`;
- run locally with `npm run dev`.

## Step by Step

### 1. Register the Tailwind plugin in `vite.config.ts`

Add `tailwindcss` from `@tailwindcss/vite` to the plugins array:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 2. Create `tailwind.config.ts`

Create a minimal config file in the project root to set the `oaf` prefix.

> **Important:** Use `prefix: 'oaf'` — no trailing dash. Tailwind v4 treats the prefix as a variant and adds the colon separator automatically. Using `'oaf-'` raises a warning and produces incorrect class names.

```typescript
import type { Config } from 'tailwindcss'

export default {
  prefix: 'oaf',
} satisfies Config
```

### 3. Update `src/index.css`

Add the following block at the **top** of `src/index.css`, before any existing rules.

> **Important:** `@config` must come before `@import`. Standard CSS linters may warn about a "misplaced @import" — this is expected and safe because the file is processed by Tailwind/PostCSS, not the browser directly.

> **Important:** Use the full `@import "tailwindcss"`, not split imports. Importing `tailwindcss/theme` and `tailwindcss/utilities` separately disables JIT source scanning, so no utility classes will be generated.

```css
/* Load config — must come before @import */
@config "../tailwind.config.ts";

/* Full Tailwind import — required for JIT utility generation */
@import "tailwindcss";

/* ─── Default theme ────────────────────────────────────────────── */
@theme {
  /* Replace these placeholders with real design tokens in a later step */
  --color-brand: #aa3bff;
  --color-brand-bg: rgba(170, 59, 255, 0.1);
  --color-surface: #ffffff;
  --color-text: #6b6375;
  --color-text-heading: #08060d;
  --color-border: #e5e4e7;
}

/* ─── IOAF theme (activated when a parent carries .ioaf) ────────── */
.ioaf {
  --color-brand: #aa3bff;
  --color-brand-bg: rgba(170, 59, 255, 0.1);
  --color-surface: #ffffff;
  --color-text: #6b6375;
  --color-text-heading: #08060d;
  --color-border: #e5e4e7;
}
```

> **Note:** The `.ioaf` block above duplicates the default values as a starting point. Replace with IOAF-specific values when the design tokens are defined.
>
> Additional themes follow the same pattern — add a new scoped block (e.g. `.other-theme { ... }`) overriding the same variables.

## How Prefix and Variants Work

In Tailwind v4, the prefix behaves as a **variant**, not a namespace prefix like in v3.

| v3 syntax | v4 syntax |
|---|---|
| `oaf-flex` | `oaf:flex` |
| `oaf-text-red-500` | `oaf:text-red-500` |
| `lg:oaf-flex-col` | `oaf:lg:flex-col` |
| `hover:oaf-border-red` | `oaf:hover:border-red` |
| `oaf-text-[var(--x)]` | `oaf:text-(--x)` |

**The prefix always comes first.** Responsive, state, and other modifiers follow it:
- `oaf:max-lg:flex-col` — responsive
- `oaf:hover:border-(--accent)` — hover state
- `oaf:focus-visible:outline-2` — focus state
- `oaf:dark:bg-gray-900` — dark mode

## How Theme Switching Works

Tailwind v4 maps `@theme` variables to utility classes automatically. For example, `--color-brand` becomes available as `oaf:bg-color-brand`, `oaf:text-color-brand`, etc.

When a parent element carries the `.ioaf` class, CSS cascade overrides the custom properties. All Tailwind utilities inside that subtree automatically resolve to the IOAF theme values — no JavaScript required.

```html
<!-- Default theme active -->
<div class="oaf:bg-surface oaf:text-text">...</div>

<!-- IOAF theme active (body or any ancestor has .ioaf) -->
<body class="ioaf">
  <div class="oaf:bg-surface oaf:text-text">...</div>
</body>
```

## Notes

Do not remove or modify existing rules in `src/index.css` — only prepend the Tailwind block.

Do not add any design tokens that are not placeholders — actual token values are defined in a later step.

## Quality Checklist

Before considering this step complete, verify:
- [ ] `@tailwindcss/vite` plugin is registered in `vite.config.ts`.
- [ ] `tailwind.config.ts` exists in the project root with `prefix: 'oaf'` (no trailing dash).
- [ ] `src/index.css` uses `@import "tailwindcss"` (full import, not split imports).
- [ ] `@config` in `src/index.css` comes before `@import "tailwindcss"`.
- [ ] `@theme` block defines at least the placeholder tokens listed above.
- [ ] `.ioaf` scoped block exists and overrides the same token set.
- [ ] Existing styles in `src/index.css` are intact and unchanged.
- [ ] A Tailwind utility class with the `oaf:` prefix (e.g. `oaf:flex`) is used in a component and appears in the built CSS output.
- [ ] Responsive variant uses prefix-first ordering: `oaf:max-lg:flex-col` (not `max-lg:oaf:flex-col`).
- [ ] No unnecessary bracket values: pixel values on the 4px grid use scale form (`oaf:h-4.5` not `oaf:h-[18px]`), CSS vars use shorthand (`oaf:text-(--accent)` not `oaf:text-[var(--accent)]`), named utilities used where available (`oaf:transition-shadow` not `oaf:transition-[box-shadow]`).
- [ ] Project runs without errors with `npm run dev`.