# SHEVEGAS ACCOUNT RECOVERY LEDGER

This ledger records ownership and recovery state. It must never contain passwords, tokens, recovery codes or private keys.

| Service | Account/project | Importance | Current state | Next verified action |
|---|---|---:|---|---|
| X | SheVegas legacy account; exact handle under verification | Critical | Not accessed for roughly a decade; recovery email/phone unknown | Identify exact handle and official recovery channels; preserve archive before changing or deleting related accounts |
| X | `@optimikeb` | High | Referenced by prior SheVegas source files; ownership/access not yet verified | Verify whether it is the desired account or a separate current identity |
| X | `@xsheboygan` | High | Referenced in prior project memory; ownership/access not yet verified | Verify whether it is the desired legacy SheVegas archive |
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
