import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const outDir = path.join(root, 'public/images/work/skill-tree-valhalla')

const BOARD_BG = [22, 22, 24] // --card
const INK = [244, 244, 243]
const INK_SOFT = [207, 207, 205]

const files = [
  'csd-matrix.jpg',
  'csd-matrix-pt.jpg',
  'information-architecture-classic-tree.jpg',
  'information-architecture-classic-tree-pt.jpg',
  'information-architecture-valhalla.jpg',
  'information-architecture-valhalla-pt.jpg',
]

function lum(r, g, b) {
  return (Math.max(r, g, b) + Math.min(r, g, b)) / (2 * 255)
}

function sat(r, g, b) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  if (max === 0) return 0
  return (max - min) / max
}

function isCanvasPixel(r, g, b) {
  const l = lum(r, g, b)
  const s = sat(r, g, b)
  return (l > 0.82 && s < 0.12) || (l > 0.62 && s < 0.07)
}

function buildBgMask(data, w, h) {
  const mask = new Uint8Array(w * h)

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 3
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const l = lum(r, g, b)
      const s = sat(r, g, b)

      // Near-white FigJam canvas, including interior islands
      if (l > 0.84 && s < 0.14) {
        mask[y * w + x] = 1
      }
    }
  }

  // Light gray chrome connected to canvas or image edge
  const edgeQueue = []
  const visited = new Uint8Array(w * h)

  for (let x = 0; x < w; x++) {
    for (const y of [0, h - 1]) {
      const idx = y * w + x
      if (visited[idx]) continue
      const i = idx * 3
      if (isCanvasPixel(data[i], data[i + 1], data[i + 2]) || mask[idx]) {
        visited[idx] = 1
        mask[idx] = 1
        edgeQueue.push(idx)
      }
    }
  }
  for (let y = 0; y < h; y++) {
    for (const x of [0, w - 1]) {
      const idx = y * w + x
      if (visited[idx]) continue
      const i = idx * 3
      if (isCanvasPixel(data[i], data[i + 1], data[i + 2]) || mask[idx]) {
        visited[idx] = 1
        mask[idx] = 1
        edgeQueue.push(idx)
      }
    }
  }

  while (edgeQueue.length) {
    const idx = edgeQueue.pop()
    const x = idx % w
    const y = (idx / w) | 0
    const neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue
      const n = ny * w + nx
      if (visited[n]) continue
      const ni = n * 3
      const l = lum(data[ni], data[ni + 1], data[ni + 2])
      const s = sat(data[ni], data[ni + 1], data[ni + 2])
      if ((l > 0.84 && s < 0.14) || (l > 0.62 && s < 0.07)) {
        visited[n] = 1
        mask[n] = 1
        edgeQueue.push(n)
      }
    }
  }

  return mask
}

function nearMask(mask, w, h, x, y, radius = 5) {
  for (let dy = -radius; dy <= radius; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      const nx = x + dx
      const ny = y + dy
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue
      if (mask[ny * w + nx]) return true
    }
  }
  return false
}

function adaptBoard(data, w, h) {
  const out = Buffer.from(data)
  const bgMask = buildBgMask(data, w, h)

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x
      const i = idx * 3
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const l = lum(r, g, b)
      const s = sat(r, g, b)

      if (bgMask[idx]) {
        out[i] = BOARD_BG[0]
        out[i + 1] = BOARD_BG[1]
        out[i + 2] = BOARD_BG[2]
        continue
      }

      if (l < 0.34 && s < 0.2 && nearMask(bgMask, w, h, x, y, 6)) {
        if (l < 0.12) {
          out[i] = INK[0]
          out[i + 1] = INK[1]
          out[i + 2] = INK[2]
        } else {
          const t = (l - 0.12) / 0.22
          out[i] = Math.round(INK[0] + t * (INK_SOFT[0] - INK[0]))
          out[i + 1] = Math.round(INK[1] + t * (INK_SOFT[1] - INK[1]))
          out[i + 2] = Math.round(INK[2] + t * (INK_SOFT[2] - INK[2]))
        }
      }
    }
  }

  return out
}

for (const file of files) {
  const input = path.join(outDir, file)
  if (!fs.existsSync(input)) {
    console.warn(`Skip (missing): ${file}`)
    continue
  }

  const { data, info } = await sharp(input)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const adapted = adaptBoard(data, info.width, info.height)
  const tmp = `${input}.tmp.jpg`

  await sharp(adapted, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(tmp)

  fs.renameSync(tmp, input)

  console.log(`Adapted: ${file} (${info.width}x${info.height})`)
}
