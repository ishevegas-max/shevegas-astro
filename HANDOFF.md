# SHEVEGAS.COM — CANONICAL ASTRO HANDOFF

**Owner:** Michael Edward Brunette  
**Brand:** SheVegas™  
**Updated:** 2026-09-15  
**Status:** Production Astro publication is live at `https://shevegas.com`

## 1. The current truth

SheVegas.com is now a visual-first Astro publication. The former Next.js/static-packaging arrangement is superseded.

- Canonical working source: `Shevegas-astro`
- Framework: Astro 5, static output
- Vercel project: `shevegas-com`
- Project ID: `prj_Tynd8V4ViY47NwOkr7r8QL2t8DyE`
- Team ID: `team_6uyzgNXx21J4HuHWB5AOIJlX`
- Canonical domain: `https://shevegas.com`
- Current production deployment: `dpl_FZmquUJed6dBMavqtnjKLhFU8h3U`
- Current production state: `READY`
- Rollback target: `dpl_5Utz4s47CMvcp1gTEzDshZAynskU`
- `www.shevegas.com`: not yet attached; currently returns 502
- `shevegas.org`: outside the current build; do not change it

Vercel may still display the old project-level framework label `nextjs`. That label is stale metadata. The deployed source and build are Astro.

## 2. What SheVegas is

SheVegas is a visual publication, not a conventional article index.

- The SheVegas house interior is the front door.
- The Fabulous SheVegas marquee is the recurring brand seal.
- Michael Brunette / SheVegas-owned photography, art, video, scans and archive material lead every story.
- No stock imagery, scraped imagery or generated filler.
- Each visual should be assigned to one story. Reuse only when editorially necessary.
- Fun and visual impact live in front. Full stories, receipts, provenance and corrections remain underneath.

## 3. Reading model

The publication loads once. Each visual occupies the screen. Opening a story reveals it in place without a page flash or conventional reload.

- Every story has a permanent `/stories/<slug>/` URL.
- Previous and next stories are available inside the reader.
- Browser back/forward behavior is preserved.
- Closing a story returns the reader to the corresponding visual card.
- Images are responsive and generated as modern AVIF/WebP variants during the Astro build.
- JavaScript is limited to the story browser and necessary interaction. There is no React application.

## 4. Source structure

```text
src/assets/                 owned artwork used by the publication
src/data/stories.ts         current story order, words and artwork assignments
src/components/Publication.astro
src/layouts/BaseLayout.astro
src/pages/index.astro
src/pages/stories/[slug].astro
src/styles/global.css
```

`src/data/stories.ts` is currently the publication manifest. Moving story bodies into typed Astro content collections is the next structural migration as the story count grows.

## 5. Normal publishing procedure

1. Change the `Shevegas-astro` source.
2. Run `npm run check`.
3. Run `npm run build`.
4. Create a Vercel preview deployment in the existing `shevegas-com` project.
5. Verify the homepage, changed story routes, images, keyboard controls and phone-width layout.
6. Promote the exact verified preview to production. Do not rebuild it.
7. Verify `https://shevegas.com` and record the deployment ID here or in the deployment log.

Direct production deployment is allowed only when Michael explicitly says to put it straight live. It is not the default release method.

## 6. Current transition limitation

The new Astro source has been built and deployed through the connected Vercel file-deployment path. The final GitHub source-of-truth handoff is not complete until the actual `Shevegas-astro` repository is accessible and linked to `shevegas-com`.

As of 2026-09-15, Vercel still reports `shevegas-com` as Git-linked to
`SheVegas/Shevegas-democracy`. Do not push that old repository or delete it until the
project has been unlinked or relinked to `Shevegas-astro`; either action could disturb
the production connection.

Do not create a similarly named substitute repository. Do not reconnect the old `SheVegas/Shevegas-democracy` repository as the source of the new publication.

## 7. Story migration rule

Stories move into Astro from repository history and canonical project files—not by scraping or reconstructing the live website.

For every migrated story preserve:

- title and permanent slug
- short visual invitation
- complete story text
- evidence status: documented, first-hand, alleged, inferred or archive silent
- primary-source links and receipts
- artwork filename and provenance
- correction/update history

Unmatched artwork stays an explicit archive-match slot. It is never silently replaced with filler.

## 8. Repository retirement rule

The end state is one obvious SheVegas.com source repository and one production Vercel project.

Before deleting an old repository:

1. Inventory every branch and tag.
2. Search Git history for deleted stories and artwork.
3. Compare unique files, routes, media and documents against `Shevegas-astro`.
4. Migrate every unique item worth preserving.
5. Record the repository name, last commit and migration destination.
6. Create and verify a complete Git bundle or equivalent recoverable snapshot.
7. Delete only the inventoried obsolete repository or project.

No repository or Vercel project is deleted merely because its name looks obsolete.

Michael gave standing authorization on 2026-09-15 to retire obsolete repositories and
projects without presenting another approval list. That authorization does not extend to
`Shevegas-astro`, the live Vercel project `shevegas-com`, either custom domain, or
`shevegas.org`. Archive-first and exact-target checks remain mandatory.

## 9. Account and credential rule

- Never place passwords, recovery codes, tokens or private keys in Git, a handoff file or chat.
- Use the device password manager as the credential source.
- Recover accounts through the provider's official recovery workflow.
- After recovery, update the account to a current email, current phone, unique password and two-factor authentication.
- Record only the account name, recovery status, owner and recovery method—not the secret itself.

The SheVegas X account is a critical archive and must be recovered before related accounts are retired.

## 10. Do not revive

- Next.js as the SheVegas.com shell
- `node build.mjs` static packaging
- `node unpack.mjs && next build`
- the old democracy prototype as production source
- multiple competing SheVegas.com repositories
- live-site scraping as migration source
- blind direct-production patching
- stock or generated filler artwork
- `.org` changes during the current `.com` work

## 11. Immediate work queue

1. Continue migrating every recovered story into the visual browser.
2. Add typed content collections and an artwork provenance manifest.
3. Connect the real GitHub `Shevegas-astro` repository to `shevegas-com`.
4. Attach `www.shevegas.com` and redirect it permanently to `https://shevegas.com`.
5. Recover the SheVegas X account and preserve its archive.
6. Archive and retire the verified obsolete GitHub/Vercel projects.

## Bottom line

**Repository and canonical files → Astro visual publication → Vercel preview → verify → promote exact deployment → shevegas.com.**

The workaround era is over. The publication is Astro.
