import fs from 'fs'
import path from 'path'

async function dl(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) { console.log(`  HTTP ${res.status} for ${path.basename(dest)}`); return false }
    const buf = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(dest, buf)
    return buf.length
  } catch(e) { console.log(`  Error: ${e.message}`); return false }
}

// Fresh HarmonyMind URLs (captured live)
const harmonymind = [
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2F4ca42d9e-f467-4fff-996c-3bca680084d1%2FPixel_7a.png?table=block&id=2f0875f0-0ce0-454e-81e0-700bf0aafd50&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'cover.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2F7aa9684a-1431-45c5-bfe3-81e9aad914f3%2Fimage_1.png?table=block&id=912d1a66-c5ac-4dda-99ec-6c2f301a0671&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'ui-main.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2Fb6ae6830-876a-4da1-b243-0b7bc5f45cd9%2FDesktop_-_3.png?table=block&id=dbe29e40-cf80-4159-9cbc-ca8865c9d0f5&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=640&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'desktop-map.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2Fc10f7914-effd-428a-beff-27859ee0f364%2FDesktop_-_5.png?table=block&id=d2363622-cba5-4a44-b882-8ab95ee728c2&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=640&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'desktop-booking.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2Fab5a6897-e532-47f1-a5f4-976fcced3ab6%2Foutput.png?table=block&id=1826a01f-b8ed-49de-8b66-c4d1ce4f5b34&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'output.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2F9633134f-8d1c-4a47-8257-fdf5f25c892d%2FGroup_1161.png?table=block&id=f9781f06-7fa7-41ec-add0-91c95a4263c0&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'wireframes.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2Ff7ab5376-01b5-4b0a-865f-5edd86fb5fb0%2Fgroup_(1).png?table=block&id=eaf392fa-6728-41ef-8830-a577a20eb75e&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'screens.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2Ff0368314-becb-4879-8868-61fe9cb158ef%2FGroup_1360.png?table=block&id=1c71b707-1f46-49db-9a71-a638b4d52451&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1410&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'final-screens.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F611ece97-8c11-4f0d-85ef-756619afd0ff%2F8b8c0bed-fb7f-4c4d-b6c9-217f9585493e%2FNokia_XR21.png?table=block&id=cd4d5aa0-930f-47cb-b397-17f43de185cd&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=840&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'mockup.png'],
]

// Digital Key URLs — need fresh ones; using same session cache
const digitalkey = [
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3A48f77f9f-280c-40fc-8131-20a41371d7f5%3AGroup_107.png?table=block&id=2224542a-5f41-8097-afff-e74387fb4c58&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1120&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'cover.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3A2cc94db0-dea7-4885-a8aa-5112955476a6%3AiPhone_16_Pro.png?table=block&id=2224542a-5f41-800b-8de5-eb98ef6d01e6&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1600&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'iphone-pro.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3Ae9de2fbf-e401-48a5-a1a4-3a343d00d6ea%3AMatriz_CSD.png?table=block&id=2224542a-5f41-80c6-a138-e5e5ff3cc8d5&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'csd-matrix.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3A34b7c02c-a6d8-4d7f-8298-e5e1607aa15e%3ABenchmarking.png?table=block&id=2224542a-5f41-807a-bdfc-e32a1f40d608&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'benchmarking.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3Ad065a30d-7aee-4393-99b4-26980b5fe4a8%3ADouble_Diamond.png?table=block&id=2224542a-5f41-800a-a8df-c4548c053487&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1890&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'double-diamond.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3A2ce1ecc4-9193-4d90-a4bd-dcfd46c48036%3Adeepseek_mermaid_20250420_e4f26d_1.png?table=block&id=2224542a-5f41-8088-9f5f-db7e8475fc25&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=2000&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'flow-diagram.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3A25c28291-2a10-48a9-81e4-e21aaae76f6a%3AiPhone_15.png?table=block&id=2224542a-5f41-80fd-a15a-d257f0810643&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1330&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'iphone-15.png'],
  ['https://gelatinous-nitrogen-9db.notion.site/image/attachment%3A7f0cbaff-1b53-4376-b751-c9a523e218ec%3AiPhone_16.png?table=block&id=2224542a-5f41-8053-be82-ce4dccdebdda&spaceId=611ece97-8c11-4f0d-85ef-756619afd0ff&width=1700&userId=&cache=v2&imgBuildSrc=requestProxiedImageUrl', 'iphone-16.png'],
]

for (const [list, slug] of [[harmonymind, 'harmonymind'], [digitalkey, 'digital-key']]) {
  const dir = `public/images/work/${slug}`
  fs.mkdirSync(dir, { recursive: true })
  console.log(`\n--- ${slug} ---`)
  for (const [url, name] of list) {
    const dest = path.join(dir, name)
    const sz = await dl(url, dest)
    if (sz) console.log(`  ✓ ${name} (${(sz/1024).toFixed(0)} KB)`)
    else console.log(`  ✗ ${name}`)
  }
}
console.log('\nAll done.')
