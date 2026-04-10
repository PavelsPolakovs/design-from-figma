import { chromium } from '@playwright/test'

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  })

  await page.goto('http://localhost:5175')
  await page.waitForLoadState('networkidle')

  const audit = await page.evaluate(`
    (() => {
      const get = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return {
          selector: sel,
          x: Math.round(rect.x), y: Math.round(rect.y),
          width: Math.round(rect.width), height: Math.round(rect.height),
          fontSize: cs.fontSize, color: cs.color,
          background: cs.backgroundColor, fontWeight: cs.fontWeight,
          textAlign: cs.textAlign, paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom, paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight, borderRadius: cs.borderRadius,
          gap: cs.gap, flexDirection: cs.flexDirection,
        };
      };
      return {
        root: get('#root'), main: get('.not-found'),
        inner: get('.not-found__inner'), code: get('.not-found__code'),
        content: get('.not-found__content'), icon: get('.not-found__icon'),
        heading: get('.not-found__heading'),
        description: get('.not-found__description'),
        button: get('.not-found__button'),
      };
    })()
  `)

  console.log('\n═══ Layout Audit ═══')
  for (const [name, data] of Object.entries(audit)) {
    if (!data) { console.log(`${name}: NOT FOUND`); continue }
    console.log(`\n[${name}]`)
    console.log(`  Position: x=${data.x}, y=${data.y}`)
    console.log(`  Size:     ${data.width}×${data.height}`)
    if (data.fontSize)   console.log(`  Font:     ${data.fontSize} / weight=${data.fontWeight}`)
    if (data.color)      console.log(`  Color:    ${data.color}`)
    if (data.background && data.background !== 'rgba(0, 0, 0, 0)') console.log(`  BG:       ${data.background}`)
    if (data.borderRadius && data.borderRadius !== '0px') console.log(`  Radius:   ${data.borderRadius}`)
  }

  console.log('\n═══ Spacing Check ═══')
  const { code, content, heading, description, button, icon } = audit
  if (code && content)    console.log(`code→content gap: ${content.y - (code.y + code.height)}px (negative = overlap)`)
  if (icon && heading)    console.log(`icon→heading gap: ${heading.y - (icon.y + icon.height)}px`)
  if (heading && description) console.log(`heading→desc gap: ${description.y - (heading.y + heading.height)}px`)
  if (description && button)  console.log(`desc→button gap: ${button.y - (description.y + description.height)}px`)

  await browser.close()
})()

