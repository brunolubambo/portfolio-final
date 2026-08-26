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

function findAsset(pattern) {
  const match = fs.readdirSync(assetsDir).find((f) => pattern.test(f))
  if (!match) throw new Error(`Asset not found: ${pattern}`)
  return path.join(assetsDir, match)
}

async function upscale2x(input, output) {
  const buffer = fs.readFileSync(input)
  const meta = await sharp(buffer).metadata()
  const w = Math.round(meta.width * 2)
  const h = Math.round(meta.height * 2)
  await sharp(buffer)
    .resize(w, h, { kernel: 'lanczos3' })
    .png({ compressionLevel: 6 })
    .toFile(output)
  console.log(`${path.basename(output)}: ${meta.width}x${meta.height} → ${w}x${h}`)
}

console.log('Processing user FigJam board images (2× upscale)...\n')

const jobs = [
  [/Assassin_s_Creed-2b3fefcb/, 'csd-matrix-pt.png'],
  [/Assassin_s_Creed_2-72dfde7b/, 'information-architecture-pt.png'],
  [/Matrix_CSD/, 'csd-matrix.png'],
  [/Section_1-d7b1225f/, 'information-architecture.png'],
]

for (const [pattern, name] of jobs) {
  await upscale2x(findAsset(pattern), path.join(outDir, name))
}

console.log('\nDone.')
