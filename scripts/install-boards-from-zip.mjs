import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const outDir = path.join(root, 'public/images/work/skill-tree-valhalla')
const zipPath = String.raw`C:\Users\bruno.lubambo\Desktop\game UI\assassin's creed\Matrix CSD.zip`
const gameDir = path.dirname(zipPath)

// Prefer loose PNGs in folder if present (same as zip contents)
const csdSrc = path.join(gameDir, 'Matrix CSD.png')
const iaSrc = path.join(gameDir, 'Section 1.png')

function copyBoard(src, destName) {
  if (!fs.existsSync(src)) throw new Error(`Missing: ${src}`)
  const dest = path.join(outDir, destName)
  fs.copyFileSync(src, dest)
  const mb = (fs.statSync(dest).size / (1024 * 1024)).toFixed(2)
  console.log(`${destName} ← ${path.basename(src)} (${mb} MB)`)
}

console.log('Installing board images from game UI folder...\n')

copyBoard(csdSrc, 'csd-matrix.png')
copyBoard(iaSrc, 'information-architecture.png')
copyBoard(csdSrc, 'csd-matrix-pt.png')
copyBoard(iaSrc, 'information-architecture-pt.png')

for (const old of ['csd-matrix.jpg', 'csd-matrix-pt.jpg', 'information-architecture.jpg', 'information-architecture-pt.jpg']) {
  const p = path.join(outDir, old)
  if (fs.existsSync(p)) {
    fs.unlinkSync(p)
    console.log(`removed ${old}`)
  }
}

console.log('\nDone.')
