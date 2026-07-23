/**
 * Cobuntu — Terms of Service.
 *
 * Cobuntu platform Terms of Service — this content is IDENTICAL across the
 * community app and the admin app (separate repos). Keep the two copies byte-for-byte
 * in sync when editing legal language (a shared package is planned to remove the
 * duplication).
 *
 * Scope (intentional omissions, business reasons):
 * - Premium subscriptions are not described — feature on hold.
 * - Cobuntu is the merchant of record (platform-collect): funds are collected by
 *   Cobuntu, held in escrow, then the seller's net is paid out by the daily payout
 *   sweep once the sale's refund window has closed.
 *   Commission is negotiated per community and configurable per category
 *   (memberships / products / events), set through Cobuntu (not on the community's
 *   Stripe account); a fallback rate applies when none is configured. It is not a
 *   platform-wide fixed rate.
 */
export function TermsContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-10 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:opacity-80 [&_li]:opacity-80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:opacity-100">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Cobuntu (&ldquo;the Platform&rdquo;), you agree to be bound by these
          Terms of Service. Cobuntu is a white-label community platform that lets community
          operators host their members, sell digital products, run events, and manage payments
          under their own brand. If you do not agree to these terms, please do not use the Platform.
        </p>
      </section>

      <section>
        <h2>2. Account &amp; Authentication</h2>
        <h3>2.1 Account Creation</h3>
        <p>
          You may create a Cobuntu account using:
        </p>
        <ul>
          <li>Email and password (passwords are hashed with bcrypt and never stored in plain text)</li>
          <li>A phone number, verified by a one-time passcode (OTP) sent to you by SMS</li>
          <li>Google OAuth (basic profile and email only; we request no other Google scope and do not access your Gmail, Drive, Calendar, or contacts)</li>
          <li>Slack or Discord (&ldquo;Sign in with&rdquo; identity only: your name, verified email, and avatar; no bot install or message access)</li>
        </ul>
        <h3>2.2 Magic Links (Token-Based Access)</h3>
        <p>
          Some account-less actions are unlocked by single-use magic links sent to your email,
          including:
        </p>
        <ul>
          <li>Cancelling an event registration as a guest</li>
          <li>Managing a paid ticket (downloading a receipt, leaving an event)</li>
          <li>Accessing a digital product you bought as a guest</li>
          <li>Completing payment after a host approves your application to a paid event</li>
        </ul>
        <p>
          Magic links are scoped to a specific resource and email, expire automatically (typically
          14 to 30 days, capped at the event date when relevant), and are single-use semantically
          (re-clicking after the action is complete returns a clear &ldquo;already done&rdquo; state).
          Do not share magic-link URLs.
        </p>
        <h3>2.3 Guest Checkout</h3>
        <p>
          You can buy event tickets and digital products without creating a Cobuntu account.
          Stripe collects your email at checkout and we use it to deliver the receipt, ticket
          confirmation, and a magic-link sale-management page. If you later create an account
          using the same email, your past guest purchases are automatically linked to your account.
        </p>
      </section>

      <section>
        <h2>3. Communities</h2>
        <p>
          Each Cobuntu community is operated independently by its founder and community
          leaders. Cobuntu is the platform; the community is the storefront.
        </p>
        <ul>
          <li>
            <strong>Founders</strong> are the legal operators of their community. They configure
            their own branding, payment processor (Stripe Connect), refund policy, member
            permissions, and pricing. They are responsible for the accuracy of any content
            published under their community&rsquo;s name.
          </li>
          <li>
            <strong>Members</strong> agree to the rules and conduct guidelines published by each
            community they join, in addition to these platform-wide Terms.
          </li>
          <li>
            Communities can be PUBLIC (open to anyone) or MEMBERS_ONLY (gated by application or
            invite). Each community sets its own visibility and accessibility.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Products, Events &amp; Pricing</h2>
        <h3>4.1 What Can Be Sold</h3>
        <ul>
          <li><strong>Event Tickets</strong>: access to community-hosted events (online or in-person)</li>
          <li><strong>Digital Products</strong>: downloadable content (eBooks, courses, templates, media)</li>
          <li><strong>Recurring Subscriptions</strong>: products billed monthly or yearly via Stripe</li>
          <li><strong>Community Memberships</strong>: paid access to a community&rsquo;s segment(s)</li>
        </ul>
        <h3>4.2 Multi-Tier Pricing</h3>
        <p>
          Each event or product can offer multiple tiers (for example, &ldquo;General Admission&rdquo;
          and &ldquo;VIP&rdquo;). Each tier has its own price, optional capacity, optional registration
          form, and is independently sold.
        </p>
        <h3>4.3 Donations</h3>
        <p>
          Any event or product can enable optional donations: a &ldquo;tip&rdquo; a buyer may add
          on top at checkout, or give on its own for a free item. Donations may be a fixed amount
          or buyer-chosen, with an optional minimum. Donations are not refundable on their own once
          paid; if the entire purchase is refunded, the donation is refunded with it.
        </p>
        <p>
          Donations are <strong>not subject to platform fees, community commission, or VAT</strong>.
          The full donation goes to the seller, less only Stripe&rsquo;s percentage processing fee
          (currently ~2.9%) on the donation amount — Cobuntu absorbs the small fixed per-transaction
          component on tips. Cobuntu takes nothing from donations.
        </p>
        <h3>4.4 Currency</h3>
        <p>
          Prices are displayed in the currency configured by the host on each tier (EUR, USD, GBP,
          BRL, JPY, etc.). The price you pay is the price displayed at checkout, regardless of
          subsequent price changes. Currency conversion (if your card&rsquo;s issuer charges in a
          different currency) is handled by your bank or card network and may include additional fees.
        </p>
        <h3>4.5 Per-Tier Registration Forms</h3>
        <p>
          Hosts may require attendees to fill in a registration form when buying a specific tier
          (for example, dietary restrictions, T-shirt size). Form answers are stored alongside
          the attendance and visible to the event host. Cobuntu does not use form answers for
          purposes outside the event they were collected for.
        </p>
        <h3>4.6 Installment Payment Plans</h3>
        <p>
          Some membership tiers offer the option to pay a fixed total amount in scheduled
          installments (for example, &euro;300 over 3 monthly payments of &euro;100). When you
          subscribe to an installment plan:
        </p>
        <ul>
          <li>
            <strong>You authorise the full set of charges at signup.</strong> By starting an
            installment plan you authorise the community to charge the configured amount on each
            scheduled date until the plan is paid in full.
          </li>
          <li>
            <strong>Access begins immediately and continues for the configured duration.</strong>
            {" "}Your access to the community starts at your first successful payment and lasts for
            the access duration shown at checkout (typically twelve months from signup), regardless
            of when the last installment is paid.
          </li>
          <li>
            <strong>If a payment fails:</strong> our payment processor will automatically retry your
            card per its standard automatic retry schedule. If the retries are unsuccessful,
            your subscription will be cancelled and your access will end. You may resubscribe at
            any time.
          </li>
          <li>
            <strong>If you cancel before completing the plan:</strong> future installments will stop
            and your access will end on the cancellation date. Installments already paid are
            non-refundable except at the community organiser&rsquo;s discretion.
          </li>
          <li>
            <strong>Cobuntu is the merchant of record and processes the recurring payments
            via Stripe; the community organiser is the seller of the product or service.</strong>{" "}
            Refunds, disputes, and tax obligations are between you and the community organiser.
            Cobuntu facilitates payment via Stripe Connect.
          </li>
        </ul>
        <h3>4.7 Recurring Membership Lifecycle</h3>
        <p>
          Recurring memberships (monthly or yearly) renew automatically until cancelled. The
          following lifecycle rules apply in addition to anything specific to the tier you
          purchased:
        </p>
        <ul>
          <li>
            <strong>If you cancel (&ldquo;leave the community&rdquo;):</strong> your Stripe
            subscription is set to cancel at the end of the current billing period. You keep
            access through that period (think Netflix) and are not charged again. The
            already-paid current period is non-refundable on voluntary leave. If you change
            your mind before access ends, you can resume from the community surface without
            paying again.
          </li>
          <li>
            <strong>If a community leader removes you (kick or ban):</strong> your access ends
            immediately. Your Stripe subscription is set to cancel so you are not charged
            again. By default, the unused portion of the current billing period is refunded
            to you automatically (prorated by remaining days). Community leaders may opt out
            of the prorated refund in rare circumstances (for example, when removal follows
            a billed dispute or chargeback); in that case the current period is non-refundable
            but no further charges occur. Refund eligibility for free or installment-plan
            tiers is governed by the tier&rsquo;s own rules, not by this clause.
          </li>
          <li>
            <strong>Resuming a cancelled membership:</strong> while your access window from a
            voluntary leave is still open, you may resume your membership at any time. Resuming
            re-enables automatic renewal at the same tier and price you previously paid; no
            new payment is taken until the next regular billing date. Resuming after your
            access window has elapsed is treated as a new signup at the then-current price.
          </li>
          <li>
            <strong>Disputes &amp; chargebacks:</strong> initiating a chargeback through your
            card issuer may result in immediate removal from the community and forfeiture of
            any granted access pending dispute resolution between the community organiser and
            your card issuer.
          </li>
        </ul>
        <h3>4.8 Profile Content (Signature, Bio, Links)</h3>
        <p>
          You can publish a profile signature (short headline), a bio, and up to four labelled
          link buttons (label + URL) that other members can see on your profile and in the
          members directory. You are responsible for what you publish there. Cobuntu and the
          community organiser may remove profile content that violates these Terms, community
          rules, or applicable law, and may suspend accounts that repeat such violations.
        </p>
      </section>

      <section>
        <h2>5. Event Approval Flow (Reserve-Before-Decide)</h2>
        <p>
          Hosts may require approval for attendance to an event. When this option is enabled
          and the event has a paid tier:
        </p>
        <ul>
          <li>You reserve a seat by paying the ticket price up front. Your card is charged immediately at checkout.</li>
          <li>The payment is held by Cobuntu (in escrow) — it is <strong>not</strong> released to the community while the host is still deciding.</li>
          <li>Your application is recorded as PENDING and the host is notified.</li>
          <li>If the host approves, your reservation becomes a regular paid attendance. The funds become eligible for the community&rsquo;s daily payout sweep in line with our standard refund window (see §8.1).</li>
          <li>If the host rejects, you are automatically refunded (see §8.6 for how the Stripe processing fee is handled in this case).</li>
          <li>If you change your mind before the host has decided, you can cancel your reservation yourself from the event page and receive the same automatic refund.</li>
        </ul>
        <p>
          The host&rsquo;s decision is final. Cobuntu does not arbitrate approval decisions. Free events
          with approval (no paid tier) continue to use a no-payment application flow — you only see
          the reservation-and-escrow model when the event has at least one paid tier.
        </p>

        <h3>5.1 Event Invitations</h3>
        <p>
          Hosts may invite specific people to an event by email via the &ldquo;Invite Guests&rdquo; flow:
        </p>
        <ul>
          <li>
            <strong>Free events:</strong> accepting the invitation link grants attendance directly.
            No payment is required.
          </li>
          <li>
            <strong>Paid events:</strong> accepting an invitation does <strong>not</strong> entitle you to
            free entry. You must complete the standard checkout flow at the event&rsquo;s current price
            to confirm your attendance. The price applicable to your registration is the price
            displayed at checkout time, not the price at the time the invitation was issued —
            Cobuntu does not lock prices into invitations. If the event becomes paid after your
            invitation was sent, the standard checkout flow applies.
          </li>
          <li>
            Invitations do <strong>not</strong> reserve a seat. Events may sell out before an invitation is
            accepted; standard sold-out behaviour applies.
          </li>
          <li>
            On a paid event that requires host approval, an invited recipient who completes
            checkout is recorded as confirmed (APPROVED) immediately upon payment, skipping the
            Reserve-Before-Decide approval queue described above. By sending the invitation, the
            host has pre-approved the recipient; an explicit second approval is not required. The
            funds become eligible for payout in line with §8.1 (no escrow-pending hold).
          </li>
          <li>
            Hosts who wish to grant free entry without payment use the administrative &ldquo;Add Guests&rdquo;
            action, not the invitation flow.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Event Group Chats</h2>
        <ul>
          <li>A host who creates a group chat for an event receives attendee information through it (the member list and messages). Hosts must use this only for the event, must not spam or misuse it, and remain responsible for how they handle it.</li>
          <li>All participants must follow the platform code of conduct in event chats. Hosts and Cobuntu may remove participants or content that violate it.</li>
          <li>Blocking another user limits direct messaging and profile visibility only; it does not remove either of you from group chats you both belong to, including event chats.</li>
          <li>Cobuntu provides the chat as a tool; messages are user-generated content, and to the extent permitted by law Cobuntu is not responsible for their content.</li>
        </ul>
      </section>

      <section>
        <h2>7. Payment Processing</h2>
        <h3>7.1 Stripe Connect</h3>
        <p>
          Payments on Cobuntu are processed by Stripe. Each seller — a community or a
          member — connects their own Stripe account (Stripe Connect, Standard). When a
          buyer pays, Cobuntu collects the funds into its platform account as the merchant
          of record and holds them in escrow until the applicable window closes (see §8),
          then transfers the seller&rsquo;s net share to their connected Stripe account via the
          daily payout sweep (see §11). Cobuntu holds these funds only to settle the
          sale and only for the escrow period before payout.
        </p>
        <h3>7.2 Platform &amp; Processing Fees</h3>
        <p>
          Cobuntu&rsquo;s commission is negotiated with each community and is configurable per
          category — memberships, products, and events — rather than a single platform-wide
          fixed rate. These rates are set through Cobuntu (not on the community&rsquo;s Stripe
          account) and are deducted from the seller&rsquo;s net proceeds by Cobuntu; the
          applicable rate is disclosed to the seller. Where a community has no rate
          configured, a default rate (currently 8%) applies. For member-listed sales, Cobuntu does not
          charge the member a fee directly — its revenue comes from a share of the
          community&rsquo;s commission (see §12.3).
          Stripe charges its standard processing fee per transaction (typically 2.9% + a fixed
          fee, varying by currency and region) — see Stripe&rsquo;s pricing page for current rates.
          Where applicable, VAT and other local taxes are calculated by Stripe based on the
          buyer&rsquo;s jurisdiction and added at checkout.
        </p>
        <h3>7.3 Transaction Immutability</h3>
        <p>
          Once a transaction is completed, the purchase record (price paid, item details,
          buyer email, refund status) is permanent. This protects buyers from retroactive
          price changes and sellers from disputed records.
        </p>
      </section>

      <section>
        <h2>8. Refund Policy</h2>
        <p>
          Cobuntu uses an <strong>escrow-based</strong> refund model that protects both buyers
          and sellers. Funds remain in an escrow window after purchase before becoming eligible
          for payout to the community. During this window, refunds can be processed quickly and
          predictably.
        </p>
        <h3>8.1 Event Tickets</h3>
        <ul>
          <li><strong>Until the event ends:</strong> a full refund is available on request.</li>
          <li><strong>After the event has ended:</strong> refunds are no longer available (the escrow window has closed).</li>
          <li><strong>Event cancellation by host:</strong> all paid attendees receive an automatic full refund regardless of the timing.</li>
          <li><strong>Free → paid conversion:</strong> not allowed once attendees have registered. Existing free attendees are not auto-converted to paid attendees.</li>
          <li><strong>Paid → free conversion:</strong> all paid attendees are automatically refunded.</li>
        </ul>
        <h3>8.2 Digital Products, Subscriptions &amp; Memberships</h3>
        <ul>
          <li><strong>Digital products — within 14 days of purchase:</strong> a full refund is available on request.</li>
          <li><strong>Digital products — after 14 days:</strong> refunds are no longer available.</li>
          <li><strong>Community memberships — first charge:</strong> a full refund is available within 7 days of your first membership payment (a &ldquo;didn&rsquo;t like it&rdquo; window). After 7 days, and on all renewals, memberships are not self-refundable.</li>
          <li><strong>Recurring subscriptions and renewals:</strong> no refunds for past billing periods. On cancellation, you retain access until the end of the current period and are not billed again.</li>
        </ul>
        <h3>8.3 How Refunds Work</h3>
        <ul>
          <li>You request a refund from the event detail page (for tickets) or your purchase library (for products).</li>
          <li>If the request falls within the escrow window, the refund is processed automatically and immediately.</li>
          <li>Funds appear on your original payment method within 5–10 business days, depending on your bank.</li>
          <li>You receive an email confirmation when the refund is processed.</li>
          <li>All refunds are full refunds; partial refunds are not supported.</li>
          <li>The community host (or their designated team) can also issue a refund on your behalf when they have approved it for service-related reasons; you will receive the same confirmation email regardless of whether you or the host triggered the refund.</li>
          <li>For member-listed sales, the member seller can likewise refund their own buyers directly from their sales ledger, within the same escrow window and on the same full-refund basis. The member seller bears the Stripe processing fee on any refund they issue (see §8.6).</li>
        </ul>
        <h3>8.4 Refund Window Indicator</h3>
        <p>
          Whether a sale is still within its escrow window depends on the
          purchase type (events: until the event ends; digital products:
          14 days from purchase) and Cobuntu&rsquo;s internal payout schedule.
          The refund UI on each sale displays the current eligibility status —
          whether a refund is available right now and, if not, why.
        </p>
        <h3>8.5 Chargebacks and Disputes</h3>
        <p>
          A <strong>chargeback</strong> (also called a <em>dispute</em>) is when
          you ask your bank or card network to reverse a charge directly, without
          going through Cobuntu&rsquo;s refund flow. Chargebacks are governed
          entirely by the card network&rsquo;s rules and are <strong>outside Cobuntu&rsquo;s
          control</strong>. If the card network rules in your favor, the funds
          return to you and the community organiser bears both the Stripe processing fee
          and a flat dispute fee (currently around &euro;15) charged by the card network,
          netted off their payouts. We strongly recommend using the in-app refund flow first
          (it&rsquo;s faster, costs nobody the extra network dispute fee, and we can confirm it
          immediately).
        </p>
        <h3>8.6 Stripe Processing Fees on Refunds</h3>
        <p>
          When Stripe processes a card payment, it charges a non-refundable processing
          fee (typically <strong>~2.9% + a fixed fee</strong>, varying by currency and
          region — see <a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">Stripe&rsquo;s pricing page</a>).
          When a refund is later issued, Stripe returns the principal but
          <strong>does not</strong> return the processing fee it kept on the original
          charge. That fee is unrecoverable. As a rule Cobuntu does not absorb it — it is
          borne by one of the parties described below. Two narrow exceptions apply: Cobuntu
          absorbs the small fixed per-transaction component on donation tips, and it absorbs
          any residual dispute or refund fee that genuinely cannot be recovered from the
          seller. Otherwise, who bears the fee depends on whether the sale had already
          converted to a confirmed attendance at the moment the refund fires:
        </p>
        <ul>
          <li>
            <strong>Refund after the sale converted to attendance</strong> (e.g. you bought a
            ticket on a non-approval event and later requested a refund within the refund
            window; or the host approved your reservation and later issued a refund) — the
            community organiser bears the Stripe processing fee, which is automatically
            netted off their next payout from the daily payout sweep (or the member seller,
            for member-listed sales — see §12.6). <strong>You receive a full refund</strong> of
            the original amount you paid.
          </li>
          <li>
            <strong>Refund before the sale converted to attendance</strong> (i.e. on an
            approval-gated paid event where the host rejects your reservation, or you
            cancel your reservation yourself before the host has decided) — you bear the
            Stripe processing fee. You receive a refund of the original amount
            <strong>minus the Stripe processing fee</strong>. We disclose the exact net
            amount you will receive on the Reserve button and in the
            cancellation confirmation before you act. The host is not charged this fee —
            using an approval gate to keep a community intentional does not incur a
            per-rejection cost.
          </li>
          <li>
            <strong>Host cancels the entire event</strong> — the community organiser bears
            the fee on every refund issued. All attendees receive a full refund of the
            original amount they paid.
          </li>
          <li>
            <strong>Chargebacks (§8.5)</strong> — governed by the card network. On a lost
            dispute the community organiser bears both the Stripe processing fee and the
            flat card-network dispute fee (currently around &euro;15), netted off their payouts.
          </li>
        </ul>
        <p>
          The reasoning is simple: when a sale converts into an attendance, the community has
          accepted the revenue and bears the operational cost of any later refund. When a sale
          has not yet converted — the host has not yet approved, or you decided not to follow
          through — you took the reservation bet, and the small irreversible processing fee is
          the cost of that bet. This protects communities from being penalised for using
          approval gates to keep their membership intentional.
        </p>
        <p>
          Host-side accounting: all Stripe-fee absorptions are surfaced as a separate line
          item on the organiser&rsquo;s payout summary so they remain auditable. Refunds
          issued before the sale converted (i.e. pre-approval) do <strong>not</strong>
          appear in this line item because the community is not charged for them.
        </p>
      </section>

      <section>
        <h2>9. Seller / Host Obligations</h2>
        <ul>
          <li>Hosts must connect a Stripe account before publishing paid products or events.</li>
          <li>Hosts must fulfill commitments made to attendees (deliver the event, deliver the product, honor the form requirements).</li>
          <li>Cobuntu maintains immutable purchase snapshots of digital products at the time of purchase, so buyers retain perpetual access even if the host later archives or modifies the original product.</li>
          <li>Products with completed sales cannot be permanently deleted; they may be archived (hidden from the marketplace) while preserving buyer access.</li>
          <li>Hosts must not cancel events without justifiable cause; cancelled events trigger automatic refunds and attendee notifications.</li>
        </ul>
      </section>

      <section>
        <h2>10. Buyer Protections</h2>
        <ul>
          <li>The price you pay is locked at the time of transaction; later price changes do not affect you.</li>
          <li>You receive email confirmation for all purchases and refunds.</li>
          <li>Cobuntu&rsquo;s Purchase Snapshot System guarantees perpetual access to purchased digital content via your purchase library.</li>
          <li>You will be notified of any significant change to an event you registered for (date, time, location).</li>
          <li>Cancelled events always trigger an automatic full refund to paid attendees.</li>
        </ul>
      </section>

      <section>
        <h2>11. Payouts to Communities</h2>
        <p>
          Cobuntu pays sellers through a daily payout sweep that provides transparency for
          community operators:
        </p>
        <ul>
          <li>The payout sweep runs daily. A sale becomes eligible for payout once its refund window has closed (see Section 8), and eligible funds are picked up by the next daily sweep.</li>
          <li><strong>Event settlement buffer:</strong> for event tickets, funds settle a few days after the event ends (currently the event end date plus 4 days) to allow for no-shows and late refund requests, and are then released on the next daily sweep.</li>
          <li><strong>New-seller hold:</strong> to protect buyers against fraud and chargebacks, a member seller&rsquo;s payouts are held for an additional buffer when they first start selling — currently 21 days from each sale. This eases to the standard payout timing once the seller has verified their identity with Stripe and completed a few clean sales. Established community sellers are not subject to this hold.</li>
          <li>A minimum payout balance of &euro;10 applies. Balances below the minimum accumulate until they reach it; accumulated funds are released when the minimum is reached, or after 30 days at the latest.</li>
          <li>If a payout fails (e.g., Stripe transfer error, account not configured), Cobuntu logs the failure with a clear reason and creates a recovery payout in a subsequent sweep.</li>
          <li>Communities can view pending, processing, completed, and failed payouts in their admin dashboard.</li>
        </ul>
      </section>

      <section>
        <h2>12. Member sellers</h2>
        <p>
          A community may permit its members to list their own products and events in the
          community&rsquo;s marketplace. This section describes how those member-led sales work.
          References to &ldquo;you&rdquo; in this section mean a member acting as a seller.
        </p>

        <h3>12.1 What a member listing is</h3>
        <p>
          When a community has enabled member listings for a given content type
          (products or events), members of that community may submit their own products or
          events for inclusion in the community&rsquo;s marketplace. The community leader
          configures whether submissions go live automatically or require approval before
          publication, and the commission the community takes when a member sale completes.
          The applicable rate is disclosed at the moment you publish.
        </p>

        <h3>12.2 The transaction is between you and your buyer</h3>
        <p>
          When a buyer purchases a member-listed product or event, the transaction is
          directly between the buyer and you. Cobuntu is a marketplace platform and a
          payment-processing facilitator; it is not a party to your sales. The host
          community acts as a curator and broker, taking a commission, but does not become
          a party to the sale beyond that broker role.
        </p>

        <h3>12.3 Commission terms</h3>
        <ul>
          <li>The community sets the commission rate. The rate may be a flat percentage configured by the community per membership tier and product type, or negotiated per submission via the listing chat. The applicable rate is shown to you when you publish.</li>
          <li>Cobuntu does not take a commission directly from you. Cobuntu&rsquo;s revenue on member sales comes from a percentage of the community&rsquo;s commission, charged to the community.</li>
          <li>Donations attached to a member listing are not subject to community commission and flow in full to you (less Stripe&rsquo;s processing fees).</li>
        </ul>

        <h3>12.4 Stripe Connect requirement for paid listings</h3>
        <p>
          To publish a listing with a price greater than zero, you must connect a Stripe
          Connect account in good standing. Cobuntu uses Stripe to process payments and
          route funds; the price field is disabled until your Stripe account has charges
          enabled. Free listings do not require Stripe.
        </p>

        <h3>12.5 Editing and re-approval</h3>
        <ul>
          <li>You may edit non-material fields (description, images, stock or availability) on a live listing at any time without re-approval.</li>
          <li>Edits to material fields (title, price, scheduled date for events) revert the listing to a pending state. The listing is hidden from the marketplace until the community leader re-approves it.</li>
          <li>You may pause or remove your own listings at any time. Listings with in-flight buyer obligations (pending refund windows, undelivered orders) cannot be permanently deleted until those obligations are resolved.</li>
        </ul>

        <h3>12.6 Refunds and chargebacks</h3>
        <ul>
          <li>You are the seller of record. Refund requests and chargebacks are between you and your buyer. Cobuntu may facilitate refunds via the platform but is not a party to the dispute.</li>
          <li>When a refund or chargeback results in a loss of funds, the Stripe processing fees on that transaction are not returned. Those fees are deducted from your payout or future earnings — they are not absorbed by Cobuntu or by the community.</li>
          <li>For chargebacks, Cobuntu provides an automated evidence-package tool you can submit to Stripe. The outcome of any chargeback is determined by the buyer&rsquo;s bank and card network, not by Cobuntu. Cobuntu cannot guarantee chargeback outcomes.</li>
        </ul>

        <h3>12.7 What happens when your community changes its rules</h3>
        <ul>
          <li>If the community disables member listings for a content type, your existing live listings are hidden from the community marketplace but not deleted. They are restored automatically if the community re-enables the feature.</li>
          <li>If you voluntarily leave the community, your listings in that community are paused. They are restored if you rejoin.</li>
          <li>If the community removes you from the community without permanently banning you, your listings in that community are paused. They are restored if you are re-admitted.</li>
          <li>If the community bans you (a final removal recorded in the community&rsquo;s ban records), your listings in that community are cancelled and will not return unless an administrator reverses the ban.</li>
          <li>In all cases, sales that already completed remain valid and refundable per Section 8. Only future sales are affected by these state changes.</li>
        </ul>

        <h3>12.8 Tax responsibility</h3>
        <ul>
          <li>You are responsible for your own tax obligations on sales you make, including any applicable VAT, sales tax, or income tax. Cobuntu is not your tax adviser.</li>
          <li>If you are VAT-registered, you may record your VAT registration (number and country) in your Cobuntu seller settings. Where Cobuntu can determine that VAT applies and price it correctly — currently sales to buyers in your own country, and zero-rated reverse charge for VAT-registered business buyers elsewhere in the EU — Cobuntu adds and collects that VAT on your behalf and shows your VAT number on the buyer&rsquo;s receipt. For sales where the correct rate cannot be determined, no VAT is added and you remain responsible for accounting for any VAT due.</li>
          <li>You are responsible for the accuracy of your VAT registration details and for reporting and remitting VAT to the relevant authorities.</li>
          <li>For tax forms (e.g., IRS Form 1099-K for U.S. sellers crossing reporting thresholds), Stripe issues the forms directly to you under its own reporting program. Cobuntu does not issue tax forms on your behalf.</li>
        </ul>

        <h3>12.9 Receipts and seller of record</h3>
        <p>
          The receipt your buyer receives identifies you (using the legal or business name
          on your Stripe Connect account) as the seller of the goods or services. Cobuntu is
          the merchant of record for payment processing; the host community is identified as
          the marketplace curator. None of this makes Cobuntu or the community a party to
          your underlying sale.
        </p>
      </section>

      <section>
        <h2>13. Referral Program</h2>
        <p>
          A community may run a referral program that rewards its members for bringing in new
          paying members. This section describes how referral commissions are earned and paid.
          References to &ldquo;you&rdquo; in this section mean a member acting as a referrer.
        </p>

        <h3>13.1 What the referral program is</h3>
        <p>
          When a community turns the program on, you receive a personal referral link, and the
          community may also assign you a dedicated link with its own rate. When someone joins
          and pays for a membership of that community through your link, you earn a commission.
        </p>

        <h3>13.2 How the commission works</h3>
        <ul>
          <li>The commission is recurring. You earn it on the referred member&rsquo;s first membership payment and on each renewal, for the duration the community sets (a fixed number of payments, or the lifetime of the membership).</li>
          <li>The rate and duration that apply to a given referral are fixed at the time the referral is made. If the community later changes the program&rsquo;s rate or duration, the change applies only to new referrals; your existing referrals keep the terms they were made under.</li>
          <li>The commission is funded from the community&rsquo;s share of the membership revenue, after Cobuntu&rsquo;s platform fee. Cobuntu takes no part of your referral commission (0%). Both Cobuntu&rsquo;s fee and your commission are calculated on the amount actually paid on each membership invoice, so discounts and coupons scale them down.</li>
        </ul>

        <h3>13.3 You must connect Stripe to earn</h3>
        <ul>
          <li>To receive referral commissions you must have a Stripe Connect account able to receive payouts. Your referral link is inactive until you connect one, and while it is inactive it does not record referrals.</li>
          <li>If your ability to receive payouts lapses (for example, your Stripe account is disconnected or restricted), commissions are skipped for the payments that fall in that period. They resume automatically on later payments once you can receive payouts again. Cobuntu does not hold commissions for you while you are unable to receive them.</li>
        </ul>

        <h3>13.4 No self-referral</h3>
        <p>
          You cannot earn a referral commission on your own membership, and a community&rsquo;s
          own operators cannot earn on memberships taken through the community&rsquo;s general
          program link. Attempts to self-refer are not eligible.
        </p>

        <h3>13.5 Refund hold and clawback</h3>
        <ul>
          <li>A commission is held through the referred member&rsquo;s refund window and only becomes payable to you after that window passes (the same hold that applies to other payouts, see Section 8).</li>
          <li>If the underlying membership payment is refunded or charged back before the commission is paid to you, the commission is cancelled and not paid.</li>
          <li>If the payment is refunded or charged back after the commission was already paid to you, the commission is reversed. Where the funds can be pulled back from your connected account, they are. Where they cannot, the amount is deducted from your next referral payout.</li>
        </ul>

        <h3>13.6 Payouts of referral commissions</h3>
        <p>
          Referral commissions are grouped by currency and paid to your Stripe Connect account
          on the platform&rsquo;s payout schedule, subject to the same minimum payout thresholds
          as other payouts. You receive a remittance statement for each referral payout.
        </p>

        <h3>13.7 Privacy of the people you refer</h3>
        <p>
          Your referral tracker shows how many people you referred, the timing and amounts of
          your commissions, and when your next commission is expected. It does not reveal
          identifying details of the people you referred beyond what is necessary to operate
          the program. See the Privacy Policy.
        </p>

        <h3>13.8 Tax responsibility</h3>
        <p>
          You are responsible for your own tax obligations on referral commissions you earn,
          including any applicable VAT or income tax. Where Cobuntu is able to determine and
          apply VAT in the future, it will do so and reflect it on your remittance; until then,
          no VAT is added and you remain responsible for accounting for any tax due.
        </p>

        <h3>13.9 Cobuntu&rsquo;s role and program changes</h3>
        <p>
          Cobuntu facilitates the referral program and processes payouts. Cobuntu is not a party
          to the arrangement between you and the community beyond payment processing, holds no
          referral funds unclaimed, and takes 0% of the referral commission. A community may
          change or end its referral program at any time; existing referrals keep their
          snapshotted terms to their cap, and commissions already earned and payable remain
          payable.
        </p>
      </section>

      <section>
        <h2>14. Data Retention &amp; Deletion</h2>
        <ul>
          <li>Products with purchase history cannot be permanently deleted — they are soft-deleted (hidden from the marketplace) and retained for accounting and buyer access.</li>
          <li>Events with ticket purchases must be soft-deleted to maintain financial audit trails.</li>
          <li>Free events without purchases may be permanently deleted by the host.</li>
          <li>Purchase records are retained permanently for legal compliance, accounting, and your purchase history.</li>
          <li>You may request deletion of your account and personal data — see the Privacy Policy for details.</li>
        </ul>
      </section>

      <section>
        <h2>15. Liability &amp; Disclaimers</h2>
        <h3>15.1 Host Responsibility</h3>
        <p>
          Product quality, event execution, and customer support are the responsibility of the
          host (community or individual). Cobuntu acts as a platform facilitator and is not
          responsible for host performance, the safety of in-person events, or the accuracy of
          host-provided content.
        </p>
        <h3>15.2 Payment Processing</h3>
        <p>
          Payment processing is handled by Stripe under Stripe&rsquo;s own terms of service. Cobuntu
          is not responsible for payment processing failures, delays, or disputes that originate
          with Stripe or with your bank.
        </p>
        <h3>15.3 Event Attendance</h3>
        <p>
          Attendees participate in events at their own risk. The host is responsible for the
          logistics, safety, and execution of the event.
        </p>
      </section>

      <section>
        <h2>16. Account Termination</h2>
        <ul>
          <li>You may delete your account at any time, subject to outstanding financial obligations.</li>
          <li>Cobuntu reserves the right to suspend or terminate accounts that violate these terms.</li>
          <li>Account deletion may be restricted while you have active products, events, or payouts pending.</li>
          <li>Purchase and financial records are retained as required by law even after account deletion.</li>
        </ul>
      </section>

      <section>
        <h2>17. Dispute Resolution</h2>
        <p>
          Disputes between buyers and hosts should first be resolved directly. If you cannot
          reach a resolution, contact Cobuntu support at <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a>{" "}
          for mediation. Cobuntu reserves the right to make final determinations on platform-policy
          disputes.
        </p>
      </section>

      <section>
        <h2>18. Changes to These Terms</h2>
        <p>
          Cobuntu may update these Terms from time to time. Material changes will be communicated
          by email and posted here with an updated &ldquo;Last updated&rdquo; date. Continued use of
          the Platform after the change becomes effective constitutes acceptance of the modified
          Terms.
        </p>
      </section>

      <section>
        <h2>19. Contact</h2>
        <p>
          For questions about these Terms, contact us at <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a>.
        </p>
      </section>

      <p className="text-xs opacity-50 pt-8 border-t">
        By using Cobuntu, you acknowledge that you have read, understood, and agree to be bound
        by these Terms of Service and our <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </div>
  );
}
