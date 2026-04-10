# Design Implementation Diary

## Original Prompt

> So, looks like we have all what we need to make component from figma design link.
> - Build new component in project:
> 1. Take component design from **https://www.figma.com/design/RG7VmgP9reLovGPQhlUhJP/-Oojo--Icons---Illustrations?node-id=570-470&m=dev**.
> 2. Break the design to small peases and implement all as separate components ( fithout fanatism ).
> 3. All components should be designed with Tailwind approach and should support theme changes ( .ioaf for example ).
> 4. Use Playwrite to verify your job.
> 5. Do not wait that you finish job, do verification of what is done step by step.
> 6. Keep a **diary** with full steps what you do and save this flow to **design-iplementaion-steps.md** file.
> 7. The diary should be updated on each step.
> 8. Save this prompt on the top of **diary**.
> 9. Ask any questions that need to be resolved as well.

---

## Step 1 — Parse Figma URL

- **Figma URL:** https://www.figma.com/design/RG7VmgP9reLovGPQhlUhJP/-Oojo--Icons---Illustrations?node-id=570-470&m=dev
- **fileKey:** `RG7VmgP9reLovGPQhlUhJP`
- **nodeId:** `570-470`

**Action:** Fetched design context and screenshot from Figma MCP simultaneously.

**Design elements identified:**
- Background: radial gradient (amber/gold → black) 
- Header: Oojo dark logo (left) + pink "LIBRARY" badge (right)
- Title: "Icons & Illustrations" at 104px Helvetica Neue, white
- Footer: DesignerCard (avatar + name) + UpdateLabel ("Updated 03/25")
- Decorative: 3 floating card columns (bottom-right, overflow clipped)

**Assets downloaded (SVG format):**
- `src/assets/oojo-logo-dark.svg`
- `src/assets/oojo-logo-light.svg`
- `src/assets/designer-avatar.svg`

---

## Step 2 — Component Breakdown

Components created in `src/components/Cover/`:

| File | Purpose |
|------|---------|
| `OojoLogo.tsx` | Logo image, `variant: 'light' \| 'dark'` |
| `LibraryBadge.tsx` | Pink pill with label text |
| `ProcessIllustrations.tsx` | 3 decorative card columns (absolutely positioned) |
| `DesignerCard.tsx` | Avatar circle + designer name |
| `UpdateLabel.tsx` | "Updated MM/YY" frosted pill |
| `CoverHeader.tsx` | Header row composing Logo + Badge |
| `Cover.tsx` | Main composition (all sub-components) |
| `index.ts` | Re-exports |

---

## Step 3 — Initial Render & Fixes

**Playwright verification — run 1:**
- Cover: 1700×960px ✅
- Background gradient ✅
- Illustrations ✅

**Issues found & fixed:**
1. `h1` color was dark — `index.css h1 { color: var(--text-h) }` overrode Tailwind class. Fixed: added `color: 'white'` to inline style.
2. `LibraryBadge` badge was grey — `mix-blend-luminosity` killed the pink on dark bg. Fixed: removed blend mode.
3. Sub-component font sizes were too small — used rem values instead of Figma's pixel values. Fixed: updated to exact px values (48px name, 48px badge, 32px "Updated", 40px date).

**Playwright verification — run 2:**
- Logo ✅, Pink badge ✅, White title ✅, Designer card ✅, Update label ✅, Illustrations ✅

---

## Step 4 — Theme Verification

Added a second Cover inside a `.ioaf` wrapper with `--cover-badge-bg: #c4e4ff` (blue override). Both covers rendered correctly — the second had a blue badge instead of pink. CSS variable cascade through `.ioaf` confirmed working.

Reverted `App.tsx` to single cover. Theme test removed.

---

## Open Questions

1. **Responsive behavior?** Cover is fixed at 1700×960px. Should it scale down for smaller viewports (CSS transform scale), or is this design-only / static use?
2. **Font availability?** "Helvetica Neue" is used for the title. Should we load it from a CDN (Google Fonts / Adobe) or rely on system font fallback?
3. **Theme scope?** The `.ioaf` theme currently only affects badge colors. Should the cover support a full light background variant, or is the dark gradient the only branded version?

---