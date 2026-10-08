#!/usr/bin/env node
/**
 * scripts/check-placeholders.js — build-time placeholder guard (Tier A).
 *
 * Walks app/, components/, content/ and lib/ and throws on any "[TODO"
 * marker, so an unfinished placeholder can never reach production again.
 * This replaces the manual per-call-site asserts in lib/guard.ts, which only
 * covered blog posts and six named FAQ arrays — that gap let 79 live markers
 * ship on the homepage, /industries and /labs (see brain/FACTS.md F-015/F-016).
 *
 * Escape hatch for local preview of unfinished work:
 *   ALLOW_TODO=1 npm run build
 * Never set ALLOW_TODO in a production build.
 *
 * Draft blog posts (draft: true) are excluded: their markers are intentional
 * and never render publicly. lib/blog.ts assertPublishedClean still guards the
 * published-post path at prerender time; this script is the build-wide net.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SCAN_DIRS = ['app', 'components', 'content', 'lib'];
const MARKER = '[TODO';
const EXEMPT_FILES = new Set([
  // The guard itself names the marker it looks for.
  path.join('lib', 'guard.ts'),
  // assertPublishedClean's error message names the marker it reports.
  path.join('lib', 'blog.ts'),
  // This script names the marker it looks for.
  path.join('scripts', 'check-placeholders.js'),
]);

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function isDraftPost(file, source) {
  // Draft blog posts are excluded wholesale — assertPublishedClean in
  // lib/blog.ts blocks them from publishing, so their markers never render.
  if (!file.startsWith(path.join(ROOT, 'content', 'blog'))) return false;
  return /draft:\s*true/.test(source);
}

function main() {
  if (process.env.ALLOW_TODO === '1' || process.env.BLOG_ALLOW_TODO === '1') {
    console.log('[placeholder-guard] ALLOW_TODO=1 — scan skipped (local preview only)');
    return;
  }

  const files = [];
  for (const d of SCAN_DIRS) {
    const dir = path.join(ROOT, d);
    if (fs.existsSync(dir)) walk(dir, files);
  }

  const offenders = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    if (EXEMPT_FILES.has(rel)) continue;
    const source = fs.readFileSync(file, 'utf8');
    if (!source.includes(MARKER)) continue;
    if (isDraftPost(file, source)) continue;
    const lines = source.split('\n');
    lines.forEach((line, i) => {
      if (line.includes(MARKER)) {
        offenders.push(`${rel}:${i + 1}: ${line.trim().slice(0, 120)}`);
      }
    });
  }

  if (offenders.length > 0) {
    console.error(
      `[placeholder-guard] BUILD FAILED: ${offenders.length} "[TODO" marker(s) in ` +
      `published source. Fill in the facts or move the file behind draft:true.\n` +
      offenders.map((o) => `  ${o}`).join('\n')
    );
    process.exit(1);
  }

  console.log(`[placeholder-guard] clean: ${files.length} source files scanned, 0 markers`);
}

main();
