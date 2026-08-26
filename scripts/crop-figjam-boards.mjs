import sharp from 'sharp'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const outDir = path.join(root, 'public/images/work/skill-tree-valhalla')
const assetsDir = path.join(
  process.env.USERPROFILE,
  '.cursor/projects/c-Users-bruno-lubambo-Desktop-portfolio-final/assets',
)
const fullBoard = path.join(process.env.USERPROFILE, 'Downloads', "Assassin's Creed.png")

const pngOpts = { compressionLevel: 6, adaptiveFiltering: true }

function findAsset(pattern) {
  const files = fs.readdirSync(assetsDir)
  const match = files.find((f) => pattern.test(f))
  if (!match) throw new Error(`Asset not found: ${pattern}`)
  return path.join(assetsDir, match)
}

async function writePng(input, output, extract) {
  let pipeline = sharp(input)
  if (extract) pipeline = pipeline.extract(extract)
  await pipeline.png(pngOpts).toFile(output)
  const meta = await sharp(output).metadata()
  const kb = Math.round((await sharp(output).toBuffer()).length / 1024)
  console.log(`  ${path.basename(output)} → ${meta.width}x${meta.height} (${kb} KB)`)
}

console.log('Generating high-res FigJam board PNGs...\n')

const fullMeta = await sharp(fullBoard).metadata()
const w = fullMeta.width
const h = fullMeta.height
console.log(`Full board: ${w}x${h}`)

const csdPt = {
  left: Math.round(w * 0.52),
  top: Math.round(h * 0.02),
  width: Math.round(w * 0.46),
  height: Math.round(h * 0.96),
}
const iaPt = {
  left: Math.round(w * 0.02),
  top: Math.round(h * 0.58),
  width: Math.round(w * 0.48),
  height: Math.round(h * 0.40),
}

console.log('PT (from full board crop):')
await writePng(fullBoard, path.join(outDir, 'csd-matrix-pt.png'), csdPt)
await writePng(fullBoard, path.join(outDir, 'information-architecture-pt.png'), iaPt)

const enCsd = findAsset(/Matrix_CSD/)
const enIa = findAsset(/Section_1/)

console.log('\nEN (from FigJam exports):')
console.log(`  source CSD: ${path.basename(enCsd)}`)
console.log(`  source IA:  ${path.basename(enIa)}`)
await writePng(enCsd, path.join(outDir, 'csd-matrix.png'))
await writePng(enIa, path.join(outDir, 'information-architecture.png'))

console.log('\nDone.')
