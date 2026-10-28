#!/usr/bin/env node
/**
 * notify-indexnow.js — StrompreiseHeute.de IndexNow Submission
 * Pings Bing, Yandex and IndexNow engines with up to 200 priority URLs.
 */

import https from 'node:https';
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

const allUrls = getUrlsFromDist(DIST_DIR);
const priorityUrls = allUrls.slice(0, 200);

console.log(`[IndexNow] Found ${allUrls.length} total URLs. Submitting ${priorityUrls.length} priority URLs...`);

if (priorityUrls.length === 0) {
  console.log('[IndexNow] No URLs found in dist/ to submit.');
  process.exit(0);
}

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: priorityUrls
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com'
];

for (const endpoint of endpoints) {
  const req = https.request({
    hostname: endpoint,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  }, (res) => {
    console.log(`[IndexNow] ${endpoint} -> Status: ${res.statusCode}`);
  });

  req.on('error', (err) => {
    console.warn(`[IndexNow] Warning for ${endpoint}: ${err.message}`);
  });

  req.write(payload);
  req.end();
}
