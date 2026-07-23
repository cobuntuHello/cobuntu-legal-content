# @cobuntu/legal-content

The **single canonical source** for Cobuntu's user-facing legal content:

- `TermsContent` — Terms of Service
- `PrivacyContent` — Privacy Policy

Both the community app and the admin app import these components from this
package, so the two apps can **never diverge** (they previously drifted apart —
the community app once described a retired bi-weekly payout system and the wrong
event-refund window while the admin app was correct).

## Usage

```tsx
import { TermsContent, PrivacyContent } from "@cobuntu/legal-content";
```

Raw source is shipped (no build step); the consuming Next.js app transpiles it
via `transpilePackages` and scans its classes via a Tailwind v4 `@source`
directive. When adding this package to an app you MUST do both:

```ts
// next.config.ts
transpilePackages: ["@cobuntu/legal-content", /* … */]
```

```css
/* app/globals.css */
@source "../node_modules/@cobuntu/legal-content/src";
```

## Editing legal language

1. Edit `src/TermsContent.tsx` / `src/PrivacyContent.tsx`.
2. Bump `version` in `package.json`.
3. Commit + push; re-pin the git-dep SHA in each consuming app and redeploy.
4. Bump the "Last updated" date on each app's `terms`/`privacy` page.

> Legal copy is customer-facing and, once Cobuntu is an incorporated,
> VAT-registered entity, consequential. Have counsel review material changes
> before they go live.
