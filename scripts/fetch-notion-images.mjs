import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { URL } from 'url'

function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const mod = u.protocol === 'https:' ? https : http
    const opts = { hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Accept': 'text/html,*/*' } }
    mod.get(opts, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location))
      }
      let data = ''
      res.on('data', c => data += c)
      res.on('end', () => resolve(data))
    }).on('error', reject)
  })
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const u = new URL(url)
    const mod = u.protocol === 'https:' ? https : http
    const opts = { hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'Mozilla/5.0' } }
    mod.get(opts, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest))
      }
      if (res.statusCode !== 200) { resolve(false); return }
      const ct = res.headers['content-type'] || ''
      if (!ct.includes('image')) { resolve(false); return }
      const file = fs.createWriteStream(dest)
      res.pipe(file)
      file.on('finish', () => { file.close(); resolve(true) })
    }).on('error', () => resolve(false))
  })
}

const projects = [
  {
    slug: 'dead-space',
    url: 'https://gelatinous-nitrogen-9db.notion.site/Analysis-of-the-Diegetic-Interface-in-Dead-Space-as-a-Tool-for-Immersion-and-Tension-in-Horror-Games-2d84542a5f41809d8b15f021cdeca9ee'
  },
  {
    slug: 'harmonymind',
    url: 'https://gelatinous-nitrogen-9db.notion.site/Harmonymind-b97ef101d23c420aa8a19c11ef5c2461'
  },
  {
    slug: 'digital-key',
    url: 'https://gelatinous-nitrogen-9db.notion.site/Simplifying-Digital-Key-NFT-Acquisition-for-Urban-Mobility-2224542a5f418004a62bdb30e0b3ed66'
  }
]

for (const proj of projects) {
  const dir = `public/images/work/${proj.slug}`
  fs.mkdirSync(dir, { recursive: true })
  console.log(`\nFetching ${proj.slug}...`)
  const html = await get(proj.url)
  
  // Extract image URLs from Notion CDN
  const imgRegex = /https:\/\/(?:prod-files-secure\.s3\.us-west-2\.amazonaws\.com|notion\.so\/image)[^\s"'>)]+/g
  const s3Regex = /https:\/\/prod-files-secure[^\s"'\\>)]+/g
  const notionImgRegex = /https:\/\/www\.notion\.so\/image\/[^\s"'\\>)]+/g
  
  const found = new Set([
    ...(html.match(s3Regex) || []),
    ...(html.match(notionImgRegex) || [])
  ])
  
  console.log(`  Found ${found.size} image URLs`)
  
  let i = 0
  for (const rawUrl of found) {
    const cleanUrl = rawUrl.replace(/\\u0026/g, '&').replace(/\\/g, '')
    try {
      const ext = cleanUrl.includes('.png') ? 'png' : cleanUrl.includes('.gif') ? 'gif' : 'jpg'
      const dest = path.join(dir, `img-${String(i).padStart(2,'0')}.${ext}`)
      const ok = await download(cleanUrl, dest)
      if (ok) {
        const sz = fs.statSync(dest).size
        console.log(`  [${i}] saved ${dest} (${sz} bytes)`)
        i++
      }
    } catch(e) {
      // skip
    }
  }
  if (i === 0) console.log('  No images downloaded — Notion may require JS rendering')
}
