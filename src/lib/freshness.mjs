import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const SUMMARY_PATH = path.join(ROOT, 'src/data/strompreise_summary.json');

export const SITE_ORIGIN = 'https://strompreise-heute.de';

/** Pages whose body does not change with each price ingest. */
const EDITORIAL_LASTMOD = {
  '/impressum/': '2026-11-14',
  '/datenschutz/': '2026-11-14',
  '/kontakt/': '2026-11-14',
  '/ueber-uns/': '2026-11-14',
  '/glossar/': '2026-11-14',
  '/methodik/': '2026-11-14',
};

export function loadSummary() {
  return JSON.parse(readFileSync(SUMMARY_PATH, 'utf8'));
}

/** Wall-clock stamp from the ingest ("YYYY-MM-DD HH:MM:SS" in Europe/Berlin). */
export function formatUpdated(stamp) {
  const [date, time = '00:00:00'] = String(stamp).split(' ');
  const [year, month, day] = date.split('-');
  const [hour, minute] = time.split(':');
  return {
    date,
    label: `${day}.${month}.${year}, ${hour}:${minute} Uhr`,
    iso: berlinTimestamp(date, time),
  };
}

export function freshness(summary = loadSummary()) {
  return formatUpdated(summary.lastUpdated);
}

/**
 * Convert a Europe/Berlin wall time to a W3C timestamp with the real offset
 * (CET +01:00 or CEST +02:00).
 */
export function berlinTimestamp(date, time) {
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute, second] = time.split(':').map(Number);
  for (const offset of ['+01:00', '+02:00']) {
    const utc = new Date(`${date}T${time}${offset}`);
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Berlin',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(utc);
    const get = (type) => Number(parts.find((part) => part.type === type)?.value);
    if (
      get('year') === year &&
      get('month') === month &&
      get('day') === day &&
      get('hour') === hour &&
      get('minute') === minute &&
      get('second') === second
    ) {
      return `${date}T${time}${offset}`;
    }
  }
  return date;
}

export function canonicalUrl(input) {
  const url = new URL(input, SITE_ORIGIN);
  url.protocol = 'https:';
  url.hostname = 'strompreise-heute.de';
  url.hash = '';
  url.search = '';
  if (!url.pathname.endsWith('/') && !path.posix.basename(url.pathname).includes('.')) {
    url.pathname = `${url.pathname}/`;
  }
  return url.toString();
}

export function lastmodForPath(pathname, summary = loadSummary()) {
  if (EDITORIAL_LASTMOD[pathname]) return EDITORIAL_LASTMOD[pathname];
  return formatUpdated(summary.lastUpdated).iso;
}

/** Same end-price model as scripts/ingest_strompreise.py. */
export function consumerPriceCt(eurMwh, netzentgeltCt = 11.5) {
  const boersenCt = Number(eurMwh) / 10;
  const abgabenNetto = Number(netzentgeltCt) + 2.05 + 1.66 + 1.5 + 1.5;
  return Math.round((boersenCt + abgabenNetto) * 1.19 * 100) / 100;
}

export function withLocalConsumer(hours, netzentgeltCt) {
  return hours.map((hour) => ({
    ...hour,
    consumerPriceCt: consumerPriceCt(hour.eurMwh, netzentgeltCt),
  }));
}

export function average(values) {
  if (!values.length) return 0;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 100) / 100;
}
