import { chromium } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'
import { createCanvas, loadImage } from 'canvas'

const OUT_DIR = path.resolve('tests/screenshots')

;(async () => {
  const appImg = await loadImage(path.join(OUT_DIR, 'app.png'))
  const figmaImg = await loadImage(path.join(OUT_DIR, 'figma-reference.png'))

  const w = Math.max(appImg.width, figmaImg.width)
  const h = Math.max(appImg.height, figmaImg.height)

  // Create side-by-side canvas
  const canvas = createCanvas(w * 2 + 40, h + 80)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#f0f0f0'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#333'
  ctx.font = 'bold 28px sans-serif'
  ctx.fillText('Current App', 20, 50)
  ctx.fillText('Figma Reference', w + 60, 50)

  ctx.drawImage(appImg, 0, 70)
  ctx.drawImage(figmaImg, w + 40, 70)

  fs.writeFileSync(path.join(OUT_DIR, 'comparison.png'), canvas.toBuffer('image/png'))
  console.log('✅  Saved tests/screenshots/comparison.png')
})()

