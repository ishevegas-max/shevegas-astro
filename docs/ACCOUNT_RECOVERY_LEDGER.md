# SHEVEGAS ACCOUNT RECOVERY LEDGER

This ledger records ownership and recovery state. It must never contain passwords, tokens, recovery codes or private keys.

| Service | Account/project | Importance | Current state | Next verified action |
|---|---|---:|---|---|
| X | SheVegas legacy account; exact handle under verification | Critical | Not accessed for roughly a decade; recovery email/phone unknown | Start recovery with the known usernames and `ishevegas@gmail.com`; preserve the archive before changing or deleting related accounts |
| X | `@optimikeb` | High | Documented in `sheboyganite/src/lib/content/site.ts` and the prior publishing handoff as Michael's X identity; live ownership/access not yet verified | Use the official password-reset flow with this username and test the masked destination offered by X |
| X | `@xsheboygan` | High | Identified in Michael's current account context; no matching reference was recovered from the three local repository histories | Test the official password-reset flow separately; do not merge or retire it until the archive is checked |
| GitHub | `ishevegas-max` | Critical | Current accessible personal account | Inventory owned repositories and preserve unique history before deletion |
| GitHub | `SheVegas` organization | Critical | Some repositories visible; write access incomplete | Recover/confirm organization administration and connect the real `Shevegas-astro` repository |
| Vercel | Mike Brunette's projects | Critical | Connected project inspection/deployment works | Reduce to confirmed production projects only after migration |

## Recovery sequence

1. Identify the exact X handle from owned records and old links.
2. Check the device password manager for saved X/Twitter credentials using the handle, known emails and old domain names.
3. Use X's official password-reset and account-access forms.
4. Complete provider identity checks directly; never transmit codes through a handoff file.
5. Once recovered, download the X archive before changing or deleting anything.
6. Update email, phone, password and two-factor authentication.
7. Record recovery completion here without recording secrets.

## Official X recovery record

- Password recovery: `https://help.x.com/en/managing-your-account/forgotten-or-lost-password-reset`
- Archive download: `https://help.x.com/en/managing-your-account/how-to-download-your-x-archive`
- X states that a valid username can be used to identify the masked email or phone on file. Without access to either, recovery options are limited and support may still require account verification.
