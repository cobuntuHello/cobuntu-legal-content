export { TermsContent } from "./TermsContent";
export { HowItWorksContent } from "./HowItWorksContent";

// PrivacyContent is not yet shared: the community app's Privacy embeds an
// interactive, app-specific "manage cookie preferences" control (wired to that
// app's cookie-consent system) that the admin app does not have. It will be
// added here during the professional legal rewrite, injecting the per-app
// cookie control via a slot prop so the shared copy stays app-agnostic.
