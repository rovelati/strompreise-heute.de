#!/usr/bin/env node
/**
 * notify-indexnow.js — StrompreiseHeute.de IndexNow Submission
 * Pings Bing, Yandex and IndexNow engines with up to 200 priority URLs.
 */

import fs from 'node:fs';
import path from 'node:path';

const HOST = 'strompreise-heute.de';
const KEY = 'd4b89e3a6f724c08b894165ea972e391';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const DIST_DIR = path.resolve('dist');

function getUrlsFromDist(dir, base = '') {
  let urls = [];
  if (!fs.existsSync(dir)) return urls;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      urls = urls.concat(getUrlsFromDist(path.join(dir, entry.name), `${base}/${entry.name}`));
    } else if (entry.name === 'index.html') {
      const cleanPath = base === '' ? '/' : `${base}/`;
      urls.push(`https://${HOST}${cleanPath}`);
    }
  }
  return urls;
}

async function main() {
  const allUrls = getUrlsFromDist(DIST_DIR);
  const priorityUrls = allUrls.slice(0, 200);

  console.log(`[IndexNow] Found ${allUrls.length} total URLs. Submitting ${priorityUrls.length} priority URLs...`);

  if (priorityUrls.length === 0) {
    console.log('[IndexNow] No URLs found in dist/ to submit.');
    return;
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: priorityUrls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow'
  ];

  await Promise.allSettled(
    endpoints.map(async (url) => {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(8000)
        });
        console.log(`[IndexNow] ${new URL(url).hostname} -> Status: ${res.status}`);
      } catch (err) {
        console.warn(`[IndexNow] Notice for ${new URL(url).hostname}: ${err.message}`);
      }
    })
  );

  console.log('[IndexNow] Submission complete.');
}

main().catch(console.error);
