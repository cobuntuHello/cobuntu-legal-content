/**
 * Cobuntu — Privacy Policy.
 *
 * Single canonical legal content for the user-facing community app.
 * The admin app has its own copy (separate repo). Keep both in sync when
 * editing legal language.
 *
 * Authentication methods documented: Email/Password, phone number + SMS
 * one-time passcode (OTP), Google OAuth (basic profile + email only), and
 * "Sign in with Slack/Discord" (OIDC identity only: name, email, avatar; NOT a
 * bot install or message access).
 */
import { CookieSettingsLink } from "./CookieSettingsLink";

export function PrivacyContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-10 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:opacity-80 [&_li]:opacity-80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:opacity-100">
      <section>
        <p>
          This Privacy Policy describes how Cobuntu (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;the Platform&rdquo;)
          collects, uses, and protects your personal information. It applies to both the user-facing
          community apps (each at <code>&lt;tag&gt;.cobuntu.com</code>) and the admin app at{" "}
          <code>admin.cobuntu.com</code>.
        </p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>

        <h3>1.1 Account Information</h3>
        <p>When you create a Cobuntu account, we collect:</p>
        <ul>
          <li>Name and email address</li>
          <li>Phone number (optional; required only if you choose to sign in with a phone number and SMS passcode)</li>
          <li>Profile image (optional)</li>
          <li>Username/usertag</li>
          <li>Bio and signature (optional)</li>
          <li>Marketing preferences (opt-in / opt-out for non-essential email)</li>
        </ul>

        <h3>1.2 Authentication Data</h3>
        <p>Cobuntu supports the following authentication methods:</p>
        <h4 className="text-[14px] font-semibold mt-4 mb-2">Email &amp; Password</h4>
        <ul>
          <li>Passwords are hashed with bcrypt and a per-user salt; we never store plain-text passwords.</li>
          <li>Email verification is required via a one-time signed token.</li>
          <li>Password resets are sent as one-time links that expire in one hour.</li>
        </ul>
        <h4 className="text-[14px] font-semibold mt-4 mb-2">Phone Number &amp; SMS Passcode</h4>
        <ul>
          <li>If you choose to sign in with a phone number, we collect that number and send a one-time passcode (OTP) to it by SMS.</li>
          <li>SMS delivery is handled by our messaging provider (Twilio); we share only the phone number and the passcode message needed to deliver it.</li>
          <li>We use your phone number to authenticate you and to secure your account. We do not sell it or use it for marketing.</li>
        </ul>
        <h4 className="text-[14px] font-semibold mt-4 mb-2">Google OAuth</h4>
        <p>When you sign in with Google, we receive:</p>
        <ul>
          <li>Your basic profile (name, email, profile picture)</li>
        </ul>
        <p>
          We request the basic profile and email scopes only. We do not access your Gmail, Drive,
          Calendar, contacts, or any other Google service.
        </p>
        <h4 className="text-[14px] font-semibold mt-4 mb-2">Slack &amp; Discord</h4>
        <p>When you sign in with Slack or Discord, we receive your basic profile from that provider:</p>
        <ul>
          <li>Your name (display name) and avatar</li>
          <li>Your email address, which the provider has verified (on Discord, only if you grant the email permission)</li>
        </ul>
        <p>
          We request identity scopes only (Slack: <code>openid email profile</code>; Discord:{" "}
          <code>identify email</code>). We do not install a bot, read your messages, or access any
          other data in your Slack workspace or Discord account. If the verified email matches an
          existing Cobuntu account, that provider is linked to it; otherwise a new account is created
          from your name, email, and avatar.
        </p>

        <h3>1.3 Magic-Link Tokens</h3>
        <p>
          Cobuntu issues short-lived signed tokens (HS256 JWT) for guest actions like cancelling
          a registration, downloading a paid product, or completing payment after event approval.
          These tokens contain only the resource ID, the email of the recipient, and an expiration
          timestamp. Tokens are validated server-side and are scope-locked to a single resource.
        </p>

        <h3>1.4 Community &amp; Social Data</h3>
        <ul>
          <li>Community memberships and roles</li>
          <li>Friendship connections and requests</li>
          <li>Event attendance, applications, and invitations (including registration form answers)</li>
          <li>
            Partial application details you begin entering on a community&rsquo;s apply form but do
            not submit. We capture these so the community can follow up with you; they are kept for
            up to 30 days and then automatically deleted, unless you complete the application.
          </li>
          <li>Content interactions: posts, reactions, article views</li>
        </ul>

        <h3>1.5 Payment Information</h3>
        <p>For purchases and subscriptions:</p>
        <ul>
          <li>Stripe handles all card data; Cobuntu never sees or stores your card number, CVV, or full card details.</li>
          <li>We retain transaction records: amounts, currency, status, refund history, and the email associated with the buyer.</li>
          <li>For sellers and community operators, we store the connected Stripe account ID and payout history.</li>
          <li>VAT registration number and country (if you provide them as a seller).</li>
          <li>For buyers who provide them at checkout: VAT/tax identification number, its country and type, and billing country.</li>
          <li>
            <strong>Payment history.</strong> When you complete a payment to a community on Cobuntu
            — whether one-time, recurring, or via an installment plan — we retain a record of the
            transaction (date, amount, status, currency) for accounting and tax compliance.
            Retention follows applicable tax law (typically 7&ndash;10 years in EU jurisdictions).
            Community organisers can view payment history for their own communities via their
            admin dashboard.
          </li>
        </ul>

        <h3>1.6 Usage Analytics</h3>
        <ul>
          <li>Product and event view counts</li>
          <li>Cart and checkout interactions (for funnel analysis)</li>
          <li>Article view counts and approximate read time</li>
          <li>IP address and user agent (for security and abuse detection only — not used for ad targeting)</li>
          <li>Approximate geographic location (country, city, region) derived from your IP for tax and currency purposes</li>
        </ul>

        <h3>1.7 Purchase Snapshots</h3>
        <p>
          When you buy a digital product, we create an immutable snapshot of the product files at
          the time of purchase. This guarantees you perpetual access to what you bought, even if
          the seller later modifies or archives the original. Snapshots are stored in encrypted
          Google Cloud Storage and accessible from your purchase library.
        </p>

        <h3>1.8 Presence &amp; Activity Status</h3>
        <p>To power real-time messaging features, we process information about your availability:</p>
        <ul>
          <li>
            Whether you currently have the app open and connected (your &ldquo;online&rdquo; status),
            and whether you have recently interacted or are idle (&ldquo;away&rdquo;). The away state
            is derived only from whether the app is in the foreground and from recent activity such as
            typing or scrolling &mdash; not from the content of what you do.
          </li>
          <li>The time you were last connected (your &ldquo;last seen&rdquo; time).</li>
        </ul>
        <p>
          This status is shown to other members you exchange messages with (see 3.2). You can turn it
          off at any time in Settings &rarr; Privacy (&ldquo;Show online status&rdquo;); when it is off,
          other members see neither your online/away status nor your last-seen time.
        </p>

        <h3>1.9 Referral Program Data</h3>
        <p>
          If you take part in a community&rsquo;s referral program (as a referrer), we process:
        </p>
        <ul>
          <li>Your referral links and their configured commission rate and duration.</li>
          <li>Referral attributions: a record linking you as the referrer to a member who joined through your link, with the commission rate and duration fixed at the time of the referral.</li>
          <li>Referral commission records: the amount earned on each qualifying membership payment, its status, and the payout that settled it.</li>
        </ul>
        <p>
          <strong>What a referrer can see.</strong> Your referral tracker shows how many people you
          referred, the amounts you have earned or are due, and when your next commission is expected
          (for example, the timing of an upcoming renewal). It does not reveal the identity or personal
          details of the members you referred; referred members are shown to you only in aggregate and
          anonymized form.
        </p>
        <p>
          <strong>Retention.</strong> Referral commission records are financial records, retained under
          applicable tax law (typically 7 to 10 years) on the same basis as other payment history. If
          you delete your account, your personal identifiers are removed from referral records; the
          monetary records themselves are retained without those identifiers, as required for accounting.
        </p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <h3>2.1 Service Provision</h3>
        <ul>
          <li>Provide community platform features (membership, events, marketplace)</li>
          <li>Power real-time messaging, including presence (online/away/last-seen), which you can disable in Settings &rarr; Privacy</li>
          <li>Process payments, payouts, and refunds via Stripe</li>
          <li>Operate community referral programs (track referrals and pay referral commissions to referrers)</li>
          <li>Send one-time login passcodes by SMS (only if you use phone sign-in)</li>
          <li>Send transactional notifications: receipts, confirmations, refund confirmations, host approvals/rejections</li>
        </ul>
        <h3>2.2 Analytics &amp; Improvement</h3>
        <ul>
          <li>Track product and event performance for sellers</li>
          <li>Analyze platform-wide engagement to improve features</li>
          <li>Detect fraud, abuse, and security threats</li>
        </ul>
        <h3>2.3 Communication</h3>
        <ul>
          <li>Service-related notifications (always sent)</li>
          <li>Marketing emails (only with your explicit opt-in; you can unsubscribe at any time)</li>
          <li>Customer support correspondence</li>
        </ul>
      </section>

      <section>
        <h2>3. Information Sharing</h2>
        <h3>3.1 Third-Party Services</h3>
        <p>We integrate with the following third-party services:</p>
        <ul>
          <li><strong>Stripe</strong> — payment processing, subscriptions, and Stripe Connect for community payouts</li>
          <li><strong>Google</strong> — OAuth login (basic profile and email only)</li>
          <li><strong>Twilio</strong> — SMS delivery for phone sign-in one-time passcodes</li>
          <li><strong>Resend</strong> — transactional and marketing email delivery</li>
          <li><strong>Google Cloud Storage</strong> — encrypted file storage for product snapshots, banners, and receipts</li>
          <li><strong>Vercel</strong> — application hosting and edge delivery</li>
        </ul>
        <h3>3.2 Within Communities</h3>
        <ul>
          <li>Your profile information is visible to other members of communities you join.</li>
          <li>Your event attendance and marketplace activity may be visible to community leaders for moderation and analytics purposes.</li>
          <li>Registration form answers you submit to a host are visible to that event&rsquo;s host(s) only.</li>
          <li>Your online/away status and last-seen time are visible to members you exchange messages with, unless you turn this off in Settings &rarr; Privacy (see 1.8).</li>
        </ul>
        <h3>3.3 Event Group Chats</h3>
        <p>
          A host may create a group chat for an event. If they do, joining that event
          &mdash; by RSVP, ticket purchase, invitation, or being added by a host &mdash;
          adds you to the chat. Inside it, your name, profile photo, online status, and the
          messages you send are visible to the other attendees and the event&rsquo;s host(s).
        </p>
        <ul>
          <li>When a chat already exists, you are told at registration and may decline (opt out). You can also leave the chat at any time.</li>
          <li>The event&rsquo;s host(s) receive the member list and messages through the chat and are responsible for handling that information appropriately.</li>
          <li>The chat is private to its members &mdash; it is never public or search-indexed &mdash; and may persist after the event ends.</li>
        </ul>
        <h3>3.4 Legal Requirements</h3>
        <p>We may disclose information if required by law or to:</p>
        <ul>
          <li>Comply with a valid legal obligation</li>
          <li>Protect the rights, property, or safety of Cobuntu, our users, or the public</li>
          <li>Investigate fraud or platform abuse</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Storage &amp; Security</h2>
        <h3>4.1 Storage</h3>
        <ul>
          <li>Application data is stored in PostgreSQL on Google Cloud Platform.</li>
          <li>Files (product snapshots, banners, profile images, receipt PDFs) are stored in Google Cloud Storage with server-side encryption.</li>
          <li>Sensitive tokens (OAuth refresh tokens, Stripe webhook secrets) are encrypted at rest.</li>
          <li>We perform automated daily backups for disaster recovery.</li>
        </ul>
        <h3>4.2 Security Measures</h3>
        <ul>
          <li>HTTPS for all data in transit</li>
          <li>JWT-based authentication with reasonable session expiration</li>
          <li>OAuth 2.0 for third-party integrations</li>
          <li>Per-community Stripe Connect (your community&rsquo;s payment data is segregated)</li>
          <li>Permission-based access control (role groups + per-feature permissions)</li>
        </ul>
        <h3>4.3 Region &amp; GDPR</h3>
        <p>
          Application data is hosted in the EU region (<code>europe-west1</code>) for GDPR
          compliance. International data transfers (e.g., to Stripe in the US, to Google services)
          are governed by Standard Contractual Clauses and the third-party&rsquo;s adequacy program.
        </p>
        <h3>4.4 Local Storage in Your Browser</h3>
        <p>We use browser localStorage to persist:</p>
        <ul>
          <li>Authentication tokens (JWT, automatically expired)</li>
          <li>Theme and language preferences</li>
          <li>Your active community context (which community&rsquo;s storefront you&rsquo;re viewing)</li>
        </ul>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <h3>5.1 Account Management</h3>
        <ul>
          <li>Update your profile, preferences, and notification settings at any time</li>
          <li>Disconnect Google, Slack, or Discord from your account</li>
          <li>Disconnect a Stripe Connect account from a community you operate</li>
        </ul>
        <h3>5.2 Data Access &amp; Portability (GDPR Article 15 &amp; 20)</h3>
        <ul>
          <li>Request a copy of the personal data we hold about you</li>
          <li>View your purchase history, attendance history, and active subscriptions in your account</li>
          <li>Export your data in a machine-readable format on request</li>
        </ul>
        <h3>5.3 Data Deletion (GDPR Article 17 — Right to Erasure)</h3>
        <p>
          You can request deletion of your account by emailing{" "}
          <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a> or via your account settings.
          On deletion:
        </p>
        <ul>
          <li>Your profile and account data are removed.</li>
          <li>Your community memberships are removed.</li>
          <li>Active subscriptions are cancelled.</li>
          <li>
            Records required for legal or financial compliance (purchase records, refund records,
            tax records) are retained for the period required by law and the buyer email is
            anonymized where feasible.
          </li>
        </ul>
        <h3>5.4 Marketing Opt-Out</h3>
        <p>
          You can opt out of marketing emails at any time via the unsubscribe link in any
          marketing email or your account preferences. Transactional emails (receipts,
          confirmations, security alerts) are not affected by marketing opt-outs.
        </p>
      </section>

      <section>
        <h2>6. Cookies &amp; Tracking</h2>
        <h3>6.1 Essential Cookies</h3>
        <ul>
          <li>Authentication and session management</li>
          <li>Security (CSRF protection, fraud prevention)</li>
          <li>User preferences (theme, language, community context)</li>
        </ul>
        <h3>6.2 Analytics &amp; Marketing</h3>
        <p>
          Some communities choose to enable their own analytics (Google Analytics) and marketing
          pixels (Meta, TikTok) on their space. These non-essential cookies load only after you opt
          in, by category, through our cookie banner. You can review or change your choice at any
          time: <CookieSettingsLink className="underline" />.
        </p>
        <h3>6.3 Third-Party Cookies</h3>
        <ul>
          <li>Stripe sets cookies during checkout for fraud prevention</li>
          <li>Google sets cookies during Google OAuth authentication</li>
        </ul>
      </section>

      <section>
        <h2>7. International Data Transfers</h2>
        <p>
          Your data may be transferred to and processed in countries other than your own
          (notably the United States, where Stripe and some Google services operate). We rely on
          Standard Contractual Clauses, the EU–US Data Privacy Framework where applicable, and
          our hosting region in the EU to provide appropriate safeguards.
        </p>
      </section>

      <section>
        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          Cobuntu is not intended for children under 13 years of age. We do not knowingly
          collect personal information from children under 13. If you believe we have
          inadvertently collected such information, please contact us at{" "}
          <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a> and we will delete it.
        </p>
      </section>

      <section>
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be
          communicated by email to active users and posted here with an updated
          &ldquo;Last updated&rdquo; date.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          For questions about this Privacy Policy or how your data is handled, contact us at{" "}
          <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a>.
        </p>
      </section>

      <p className="text-xs opacity-50 pt-8 border-t">
        By using Cobuntu, you acknowledge that you have read, understood, and agree to our{" "}
        <a href="/terms" className="underline">Terms of Service</a> and this Privacy Policy.
      </p>
    </div>
  );
}
