#!/bin/bash
# rebuild-and-deploy.sh — StrompreiseHeute.de
# Executed via crontab on Contabo VPS
set -euo pipefail

LOG="/var/log/strompreise-rebuild.log"
APP_DIR="/var/www/strompreise-heute.de"
CF_PROJECT="strompreise-heute"

export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"
if [ -d "${HOME:-/root}/.nvm" ]; then
  export NVM_DIR="${HOME:-/root}/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG"; }

log "============================================================"
log "Starting StrompreiseHeute.de Data Ingestion & Deploy..."

cd "$APP_DIR"

# 1. Update repository if exists
if [ -d .git ]; then
  log "Fetching latest code from GitHub..."
  git fetch origin main || true
  git reset --hard origin/main || true
fi

# 2. Run SMARD Data Ingestion into PostgreSQL & Export JSON
log "Running SMARD (Bundesnetzagentur) Day-Ahead ingestion..."
python3 scripts/ingest_strompreise.py 2>&1 | tee -a "$LOG"

# 3. Install dependencies if missing
if [ ! -d "node_modules" ]; then
  log "Installing npm dependencies..."
  npm install --legacy-peer-deps 2>&1 | tee -a "$LOG"
fi

# 4. Build Astro Static Site
log "Building Astro SSG..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build 2>&1 | tee -a "$LOG"

# 5. Ensure headers are copied
cp public/_headers dist/ 2>/dev/null || true

# 6. Deploy to Cloudflare Pages
log "Deploying to Cloudflare Pages project=$CF_PROJECT..."
export CLOUDFLARE_API_KEY="${CLOUDFLARE_API_KEY:-9578b8b72ddb8947067606c42533c784203b6}"
export CLOUDFLARE_EMAIL="${CLOUDFLARE_EMAIL:-romolo.velati@gmail.com}"
export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-383050c9ba92a1ab1144bc18d44f586c}"

npx --yes wrangler@4 pages deploy dist \
  --project-name="$CF_PROJECT" \
  --branch=main \
  --commit-dirty=true 2>&1 | tee -a "$LOG"

# 7. Notify IndexNow (Bing & Search Engines)
log "Pinging IndexNow for German search engines..."
node scripts/notify-indexnow.js 2>&1 | tee -a "$LOG" || true

log "StrompreiseHeute.de Ingestion & Deploy SUCCESSFUL!"
log "============================================================"
