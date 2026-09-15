# SHEVEGAS.COM DEPLOYMENT LOG

Canonical Vercel project: `shevegas-com`  
Canonical domain: `https://shevegas.com`  
Framework: Astro static output  
Normal rule: **source → check/build → preview → verify → promote exact preview → verify production**

| Date | Change | Deployment | Target | Rollback target | Result |
|---|---|---|---|---|---|
| 2026-09-15 | First Astro visual publication: house entrance, marquee seal, six visual stories and seamless story browser | `dpl_5Utz4s47CMvcp1gTEzDshZAynskU` | production, explicitly authorized | previous Next.js production | READY; apex returned 200; story route returned 200 |
| 2026-09-15 | First story expansion: 16 owned-art visual stories total | `dpl_FZmquUJed6dBMavqtnjKLhFU8h3U` | production, explicitly authorized | `dpl_5Utz4s47CMvcp1gTEzDshZAynskU` | READY; aliased to `shevegas.com` |

## Current verification state

- `https://shevegas.com`: live
- `/stories/inside-shevegas/`: live and shareable
- Production alias error: none
- `www.shevegas.com`: unresolved; returns 502 until attached and configured
- Visual browser: built
- Local Astro check: zero errors, zero warnings, zero hints after the first expansion
- Automated visual browser pass: still required

## Rollback

If the active production is wrong, promote the recorded rollback deployment before debugging. Do not stack blind production deployments.
