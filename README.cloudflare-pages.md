# Cloudflare Pages Configuration

## Problem
Your site is deploying the **Cloudflare Worker** instead of the **React app**.

## Solution

### In Cloudflare Pages Dashboard

1. Go to your project settings at: https://dash.cloudflare.com/
2. Navigate to: **Workers & Pages** → **jtj** → **Settings** → **Builds & deployments**

3. Set these values:

   **Build configuration:**
   - Framework preset: `None` (or `React`)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: (leave blank)

4. **IMPORTANT:** In the "Deploy" section:
   - **Remove any custom deploy command**
   - Cloudflare Pages will automatically serve files from `dist/`
   - The `npx wrangler deploy` command should NOT be used for Pages

### What's Happening Now

✅ **Build succeeds** and creates `dist/` folder with your React app
❌ **Then** it runs `npx wrangler deploy` which deploys the Worker
❌ **Result:** You see "Union of Relative Strangers API - Coming Soon" (the Worker response)

### What Should Happen

✅ **Build succeeds** and creates `dist/` folder
✅ **Cloudflare Pages serves** the static files from `dist/`
✅ **Result:** Your React app loads at https://relatives.ross.gg/

---

## Two Separate Deployments

You have **two separate things**:

### 1. React App (Static Site) → Cloudflare Pages
- **URL**: https://relatives.ross.gg/
- **Source**: `dist/` folder after `npm run build`
- **Deployment**: Automatic from GitHub pushes
- **Config**: Build output directory = `dist`

### 2. API Worker → Cloudflare Workers
- **URL**: https://jtj.pocc.workers.dev
- **Source**: `src/workers/index.ts`
- **Deployment**: Manual via `npm run worker:deploy`
- **Config**: `wrangler.toml`

---

## Quick Fix

1. Go to Cloudflare Pages dashboard
2. Settings → Builds & deployments
3. Under "Build configuration":
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Under "Deploy configuration":
   - **Delete/remove any custom deploy command**
5. Trigger a new deployment (Settings → Deployments → Retry deployment)

After this, https://relatives.ross.gg/ will show your React app!
