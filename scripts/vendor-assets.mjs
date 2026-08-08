#!/usr/bin/env node
/**
 * Downloads every Higgsfield asset referenced by src/data/media.js into
 * public/media/, then writes .env.local so the site serves them locally.
 *
 * Run once, from the project root:
 *   npm run vendor:assets
 *
 * If your network blocks the Higgsfield CDN the script reports the failing
 * host and leaves the site pointing at the remote URLs, which still work.
 */
import { mkdir, writeFile, readFile, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'media')

const source = await readFile(join(ROOT, 'src', 'data', 'media.js'), 'utf8')
const cdn = source.match(/const CDN = '([^']+)'/)?.[1]
if (!cdn) throw new Error('Could not read the CDN base from src/data/media.js')

const entries = [...source.matchAll(/^ {2}(\w+): \{\n\s+id: '([^']+)',\n\s+stamp: '([^']+)',/gm)].map(
  ([, key, id, stamp]) => ({ key, url: `${cdn}/hf_${stamp}_${id}.png` }),
)

if (!entries.length) throw new Error('No media entries found in src/data/media.js')

await mkdir(OUT, { recursive: true })

let downloaded = 0
let skipped = 0
const failures = []

for (const { key, url } of entries) {
  const dest = join(OUT, `${key}.png`)
  try {
    await stat(dest)
    skipped += 1
    continue
  } catch {
    /* not cached yet */
  }
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    downloaded += 1
    process.stdout.write(`  ✓ ${key}\n`)
  } catch (error) {
    failures.push(`${key}: ${error.message}`)
    process.stdout.write(`  ✗ ${key} — ${error.message}\n`)
  }
}

console.log(`\n${downloaded} downloaded, ${skipped} already present, ${failures.length} failed.`)

if (failures.length) {
  console.error(
    '\nSome assets could not be fetched. Leaving the site on remote URLs.\n' +
      'If every asset failed, the Higgsfield CDN host is likely blocked by a network policy.',
  )
  process.exit(1)
}

await writeFile(join(ROOT, '.env.local'), 'VITE_LOCAL_MEDIA=true\n')
console.log('Wrote .env.local — the site will now serve images from /media/.')
