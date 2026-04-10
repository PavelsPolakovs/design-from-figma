import { chromium } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'

const FIGMA_URL =
  'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/6xAceEtwOog3zcB1rAPiP2/Default-404-pages--Community-?node-id=1-2'
const APP_URL = 'http://localhost:5175'
const OUT_DIR = path.resolve('tests/screenshots')

fs.mkdirSync(OUT_DIR, { recursive: true })

;(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--use-gl=swiftshader',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--disable-web-security',
    ],
  })
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  })

  /* ── 1. Screenshot the local app ── */
  console.log('📸  Capturing local app…')
  const appPage = await context.newPage()
  await appPage.goto(APP_URL, { waitUntil: 'networkidle' })
  await appPage.screenshot({ path: path.join(OUT_DIR, 'app.png'), fullPage: true })
  console.log('    → saved tests/screenshots/app.png')
  await appPage.close()

  /* ── 2. Screenshot the Figma design frame ── */
  console.log('📸  Capturing Figma design frame…')
  const figmaPage = await context.newPage()

  try {
    await figmaPage.goto(FIGMA_URL, { waitUntil: 'domcontentloaded', timeout: 30_000 })

    // Wait for Figma canvas or sign-in
    const loginVisible = await figmaPage
      .locator('input[placeholder*="email" i], input[name="email"]')
      .isVisible()
      .catch(() => false)

    if (loginVisible) {
      console.log('    ⚠️  Figma requires login — skipping Figma screenshot.')
    } else {
      // Give the canvas time to fully render
      await figmaPage.waitForTimeout(12000)
      // Try to dismiss any popups/overlays
      await figmaPage.keyboard.press('Escape')
      await figmaPage.waitForTimeout(2000)
      await figmaPage.screenshot({
        path: path.join(OUT_DIR, 'figma-reference.png'),
        fullPage: false,
      })
      console.log('    → saved tests/screenshots/figma-reference.png')
    }
  } catch (e) {
    console.log('    ⚠️  Could not reach Figma:', (e as Error).message)
  }
  await figmaPage.close()

  await browser.close()
  console.log('\n✅  Done. Check tests/screenshots/')
})()

