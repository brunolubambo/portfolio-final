import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { en, pt } from './csd-matrix-blocks.mjs'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

function patch(locale, block, intro) {
  const file = path.join(root, 'content/work', locale, 'skill-tree-valhalla.md')
  let md = fs.readFileSync(file, 'utf8')
  const heading = locale === 'en' ? '### CSD Matrix' : '### Matriz CSD'
  const start = md.indexOf(heading)
  if (start === -1) throw new Error(`Heading not found in ${file}`)
  const end = md.indexOf('\n---\n', start)
  if (end === -1) throw new Error(`Section end not found in ${file}`)

  const replacement = `${heading}\n\n${intro}\n\n${block}\n`
  md = md.slice(0, start) + replacement + md.slice(end + 1)
  fs.writeFileSync(file, md)
  console.log(`Patched ${file}`)
}

patch(
  'en',
  en,
  '*If only what is directly in front of you is visible, medium- and long-term planning becomes impossible.* Research synthesis — Certainties, Suppositions and Doubts:',
)

patch(
  'pt',
  pt,
  '*Se só o que está na sua frente é visível, o planejamento de médio/longo prazo se torna impossível.* Síntese da pesquisa — Certezas, Suposições e Dúvidas:',
)
