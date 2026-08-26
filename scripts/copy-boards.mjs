import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const outDir = path.join(root, 'public/images/work/skill-tree-valhalla')
const assetsDir = path.join(
  process.env.USERPROFILE,
  '.cursor/projects/c-Users-bruno-lubambo-Desktop-portfolio-final/assets',
)

function findAsset(pattern) {
  const match = fs.readdirSync(assetsDir).find((f) => pattern.test(f))
  if (!match) throw new Error(`Asset not found: ${pattern}`)
  return path.join(assetsDir, match)
}

function copyAsset(pattern, outputName) {
  const src = findAsset(pattern)
  const dest = path.join(outDir, outputName)
  fs.copyFileSync(src, dest)
  const kb = Math.round(fs.statSync(dest).size / 1024)
  console.log(`${outputName} ← ${path.basename(src)} (${kb} KB)`)
}

console.log('Copying FigJam board images...\n')

copyAsset(/Matrix_CSD/, 'csd-matrix.jpg')
copyAsset(/Section_1-d7b1225f/, 'information-architecture.jpg')
copyAsset(/Assassin_s_Creed-12839361/, 'csd-matrix-pt.jpg')
copyAsset(/Assassin_s_Creed_2-7d57c8f8/, 'information-architecture-pt.jpg')

console.log('\nDone.')
