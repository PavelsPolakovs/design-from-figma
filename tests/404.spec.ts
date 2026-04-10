import { test, expect, Page } from '@playwright/test'

// ─── helpers ────────────────────────────────────────────────────
async function cssVar(page: Page, name: string) {
  return page.evaluate(
    (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim(),
    name,
  )
}

async function computedStyle(page: Page, selector: string, prop: string) {
  return page.evaluate(
    ([sel, p]) => getComputedStyle(document.querySelector(sel)!)[p as any],
    [selector, prop] as const,
  )
}

// ─── tests ──────────────────────────────────────────────────────
test.describe('404 page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders all required elements', async ({ page }) => {
    // Large decorative "404"
    const code = page.locator('.not-found__code')
    await expect(code).toBeVisible()
    await expect(code).toHaveText('404')

    // Heading
    const heading = page.locator('.not-found__heading')
    await expect(heading).toBeVisible()
    await expect(heading).toHaveText('Page not found')

    // Description
    const desc = page.locator('.not-found__description')
    await expect(desc).toBeVisible()

    // CTA button
    const btn = page.locator('.not-found__button')
    await expect(btn).toBeVisible()
    await expect(btn).toHaveText('Back to home')
    await expect(btn).toHaveAttribute('href', '/')
  })

  test('icon SVG is present', async ({ page }) => {
    const icon = page.locator('.not-found__icon')
    await expect(icon).toBeVisible()
    // Has a circle (exclamation icon)
    await expect(icon.locator('circle')).toHaveCount(1)
  })

  test('layout is vertically centered', async ({ page }) => {
    const main = page.locator('.not-found')
    const box = await main.boundingBox()
    const viewportHeight = page.viewportSize()!.height
    expect(box).not.toBeNull()
    // The <main> should span most of the viewport height
    expect(box!.height).toBeGreaterThanOrEqual(viewportHeight * 0.8)
  })

  test('typography — heading size ≥ 28px', async ({ page }) => {
    const fs = await computedStyle(page, '.not-found__heading', 'fontSize')
    expect(parseFloat(fs)).toBeGreaterThanOrEqual(28)
  })

  test('decorative "404" is large (≥ 120px)', async ({ page }) => {
    const fs = await computedStyle(page, '.not-found__code', 'fontSize')
    expect(parseFloat(fs)).toBeGreaterThanOrEqual(120)
  })

  test('button uses accent colour', async ({ page }) => {
    const accent = await cssVar(page, '--accent')
    const bg = await computedStyle(page, '.not-found__button', 'backgroundColor')
    // Convert both to rgb for comparison
    const accentRgb = await page.evaluate((hex) => {
      const el = document.createElement('div')
      el.style.color = hex
      document.body.appendChild(el)
      const rgb = getComputedStyle(el).color
      document.body.removeChild(el)
      return rgb
    }, accent)
    expect(bg).toBe(accentRgb)
  })

  test('button is accessible (focusable)', async ({ page }) => {
    await page.keyboard.press('Tab')
    const focused = await page.evaluate(() => document.activeElement?.className ?? '')
    expect(focused).toContain('not-found__button')
  })

  test('full-page screenshot', async ({ page }) => {
    await page.waitForTimeout(300) // wait for any CSS transitions
    await expect(page).toHaveScreenshot('404-page.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.02,
    })
  })
})

