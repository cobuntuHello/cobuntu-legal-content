/**
 * Cobuntu Terms of Service.
 *
 * Shared legal content: this module is the single source of truth published from
 * `@cobuntu/legal-content` and rendered byte-for-byte identically by both the
 * community app and the admin app. Do not fork the copy; edit it here and let the
 * shared package propagate.
 *
 * INCORPORATION NOTE (for counsel / the founder): the operator-identification
 * particulars in Section 1 are placeholders ([ENTITY NAME], [ENTITY TYPE],
 * [JURISDICTION], [COMPANY REG. NO.], [REGISTERED ADDRESS], [VAT NUMBER]), to be
 * completed on incorporation and VAT registration. Governing law and jurisdiction
 * (Section 24) resolve to [JURISDICTION]; the VAT-on-own-commission clause
 * (Section 15.3) activates once VAT-registered under [VAT NUMBER]; the liability
 * cap (Section 21.2) and the consumer savings clause (Section 25) should all be
 * confirmed by local counsel against the chosen jurisdiction. COUNSEL should also
 * confirm the "merchant of record" characterisation (Sections 1.2, 5.6, 8): Cobuntu
 * collects payment via Stripe Connect Standard with the Seller named on the receipt,
 * which reads as a payment-facilitator / disclosed-agent model; and EU VAT
 * deemed-supplier rules (Implementing Reg. Art. 9a / 14a) may require accounting for
 * VAT on the full sale rather than on Cobuntu's commission only (Sections 15.2/15.3).
 * COUNSEL should also confirm the post-payout recovery / clawback clause (Section 9.7):
 * netting a refunded or charged-back amount off future payouts, debiting the connected
 * account, and carrying an unrecovered shortfall as a debt owed by the Seller/organiser
 * (consumer-law limits may apply where the Seller is an individual, not a business).
 *
 * Scope (intentional omissions, business reasons):
 * - Premium subscriptions are not described (feature on hold).
 * - Cobuntu is the merchant of record (platform-collect): funds are collected by
 *   Cobuntu, held in escrow, then the Seller's net is paid out by the daily payout
 *   sweep once the sale's refund window has closed. Commission is negotiated per
 *   community and configurable per category (memberships / products / events),
 *   set through Cobuntu (not on the community's Stripe account); a fallback rate
 *   applies when none is configured, and a configured 0% is honoured.
 */
export function TermsContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-10 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:opacity-80 [&_li]:opacity-80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:opacity-100">
      <section>
        <h2>1. Who We Are; Definitions</h2>
        <h3>1.1 Operator</h3>
        <p>
          These Terms of Service (the &ldquo;Terms&rdquo;) form a binding agreement between you and
          [ENTITY NAME], a [ENTITY TYPE] incorporated under the laws of [JURISDICTION], with company
          registration number [COMPANY REG. NO.], registered office at [REGISTERED ADDRESS], and VAT
          identification number [VAT NUMBER] (&ldquo;Cobuntu&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;). Cobuntu operates the Cobuntu platform at
          cobuntu.com together with its related community and marketplace surfaces (the
          &ldquo;Platform&rdquo;). Cobuntu is a white-label community platform that lets community
          operators host their members, sell digital products, run events, and manage payments under
          their own brand. For payments, Cobuntu acts as the merchant of record (see Section 8).
        </p>
        <p>
          The bracketed particulars above are completed on Cobuntu&rsquo;s incorporation and VAT
          registration. Until then, references to the operating entity refer to the founder
          operating the Platform; those particulars, together with the VAT provisions in Section 15,
          take effect on incorporation.
        </p>
        <h3>1.2 Definitions</h3>
        <ul>
          <li><strong>Cobuntu</strong>, <strong>we</strong>, <strong>us</strong>, <strong>our</strong>: the operator identified in Section 1.1.</li>
          <li><strong>Platform</strong>: the Cobuntu software, websites, applications, and services, including every Community surface hosted on it.</li>
          <li><strong>you</strong>, <strong>your</strong>, <strong>User</strong>: any person or entity that accesses or uses the Platform. Some sections define &ldquo;you&rdquo; more specifically (for example, as a Member Seller or a referrer); that local meaning applies within the section in question.</li>
          <li><strong>Community</strong>: an independently operated community hosted on the Platform, together with its storefront and marketplace.</li>
          <li><strong>Founder</strong> / <strong>Community Leader</strong>: the person or persons who legally operate and administer a Community.</li>
          <li><strong>Community organiser</strong> / <strong>host</strong>: a Community, and its Founder and Community Leaders, when acting as a Seller. These terms are used interchangeably in these Terms.</li>
          <li><strong>Seller</strong>: any party that offers goods or services for sale through the Platform, whether a Community or a Member Seller.</li>
          <li><strong>Member Seller</strong>: a member whom a Community permits to list their own products or events in that Community&rsquo;s marketplace (see Section 13).</li>
          <li><strong>Buyer</strong>: any person who purchases, or attempts to purchase, goods or services through the Platform, including guest purchasers.</li>
          <li><strong>Content</strong>: listings, profile content, messages, images, links, and other materials submitted to the Platform.</li>
          <li><strong>Merchant of record</strong>: Cobuntu&rsquo;s role as the party that collects Buyer payments through Stripe Connect (platform-collect), holds them in escrow, and settles each Seller&rsquo;s net proceeds through the daily payout sweep.</li>
        </ul>
      </section>

      <section>
        <h2>2. Acceptance of Terms</h2>
        <p>
          By accessing or using the Platform, you agree to be bound by these Terms. If you use the
          Platform on behalf of an organisation, you represent that you are authorised to bind that
          organisation, and &ldquo;you&rdquo; refers to that organisation as well as to yourself.
          If you do not agree to these Terms, do not use the Platform.
        </p>
        <p>
          You must be at least 18 years old (or the age of majority in your jurisdiction, if higher)
          and legally able to enter into a binding contract in order to use the Platform.
        </p>
      </section>

      <section>
        <h2>3. Account &amp; Authentication</h2>
        <h3>3.1 Account Creation</h3>
        <p>
          You may create a Cobuntu account using:
        </p>
        <ul>
          <li>Email and password (passwords are hashed using a strong, industry-standard one-way algorithm and never stored in plain text)</li>
          <li>A phone number, verified by a one-time passcode (OTP) sent to you by SMS</li>
          <li>Google OAuth (basic profile and email only; we request no other Google scope and do not access your Gmail, Drive, Calendar, or contacts)</li>
          <li>Slack or Discord (&ldquo;Sign in with&rdquo; identity only: your name, verified email, and avatar; no bot install or message access)</li>
        </ul>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activity that occurs under your account. Notify us promptly of any unauthorised
          use.
        </p>
        <h3>3.2 Magic Links (Token-Based Access)</h3>
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
          14 to 30 days, capped at the event date where relevant), and are single-use semantically
          (re-clicking after the action is complete returns a clear &ldquo;already done&rdquo; state).
          Do not share magic-link URLs.
        </p>
        <h3>3.3 Guest Checkout</h3>
        <p>
          You can buy event tickets and digital products without creating a Cobuntu account.
          Stripe collects your email at checkout and we use it to deliver the receipt, ticket
          confirmation, and a magic-link sale-management page. If you later create an account
          using the same email, your past guest purchases are automatically linked to your account.
        </p>
      </section>

      <section>
        <h2>4. Communities</h2>
        <p>
          Each Cobuntu Community is operated independently by its Founder and Community Leaders.
          Cobuntu provides the Platform; the Community is the storefront.
        </p>
        <ul>
          <li>
            <strong>Founders</strong> are the legal operators of their Community. They configure
            their own branding, payment processor (Stripe Connect), refund policy, member
            permissions, and pricing. They are responsible for the accuracy of any content
            published under their Community&rsquo;s name.
          </li>
          <li>
            <strong>Members</strong> agree to the rules and conduct guidelines published by each
            Community they join, in addition to these platform-wide Terms.
          </li>
          <li>
            Communities can be PUBLIC (open to anyone) or MEMBERS_ONLY (gated by application or
            invite). Each Community sets its own visibility and accessibility.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Products, Events &amp; Pricing</h2>
        <h3>5.1 What Can Be Sold</h3>
        <ul>
          <li><strong>Event Tickets</strong>: access to community-hosted events (online or in-person)</li>
          <li><strong>Digital Products</strong>: downloadable content (eBooks, courses, templates, media)</li>
          <li><strong>Recurring Subscriptions</strong>: products billed monthly or yearly via Stripe</li>
          <li><strong>Community Memberships</strong>: paid access to a Community&rsquo;s segment(s)</li>
        </ul>
        <h3>5.2 Multi-Tier Pricing</h3>
        <p>
          Each event or product may offer multiple tiers (for example, &ldquo;General Admission&rdquo;
          and &ldquo;VIP&rdquo;). Each tier has its own price, optional capacity, optional
          registration form, and is sold independently.
        </p>
        <h3>5.3 Donations</h3>
        <p>
          Any event or product may enable optional donations: a &ldquo;tip&rdquo; a Buyer may add on
          top at checkout, or give on its own for a free item. Donations may be a fixed amount or
          Buyer-chosen, with an optional minimum. Donations are not refundable on their own once
          paid; if the entire purchase is refunded, the donation is refunded with it.
        </p>
        <p>
          Donations are <strong>not subject to platform fees, community commission, or VAT</strong>.
          The full donation goes to the Seller as a separate line, less only Stripe&rsquo;s
          percentage processing fee (currently approximately 2.9%) on the donation amount. Cobuntu
          absorbs the small fixed per-transaction component on tips (for example, approximately
          &euro;0.30) and takes nothing else from donations.
        </p>
        <h3>5.4 Currency</h3>
        <p>
          Prices are displayed in the currency configured by the host on each tier (EUR, USD, GBP,
          BRL, JPY, and others). The price you pay is the price displayed at checkout, regardless of
          subsequent price changes. Currency conversion (if your card&rsquo;s issuer charges in a
          different currency) is handled by your bank or card network and may include additional
          fees.
        </p>
        <h3>5.5 Per-Tier Registration Forms</h3>
        <p>
          Hosts may require attendees to complete a registration form when buying a specific tier
          (for example, dietary restrictions, T-shirt size). Form answers are stored alongside the
          attendance and are visible to the event host. Cobuntu does not use form answers for
          purposes outside the event they were collected for.
        </p>
        <h3>5.6 Installment Payment Plans</h3>
        <p>
          Some membership tiers offer the option to pay a fixed total amount in scheduled
          installments (for example, &euro;300 over three monthly payments of &euro;100). When you
          subscribe to an installment plan:
        </p>
        <ul>
          <li>
            <strong>You authorise the full set of charges at signup.</strong> By starting an
            installment plan you authorise the Community to charge the configured amount on each
            scheduled date until the plan is paid in full.
          </li>
          <li>
            <strong>Access begins immediately and continues for the configured duration.</strong>
            Your access to the Community starts at your first successful payment and lasts for the
            access duration shown at checkout (typically twelve months from signup), regardless of
            when the last installment is paid.
          </li>
          <li>
            <strong>If a payment fails:</strong> our payment processor will automatically retry your
            card per its standard automatic retry schedule. If the retries are unsuccessful, your
            subscription will be cancelled and your access will end. You may resubscribe at any time.
          </li>
          <li>
            <strong>If you cancel before completing the plan:</strong> future installments will stop
            and your access will end on the cancellation date. Installments already paid are
            non-refundable except at the Community organiser&rsquo;s discretion and except where a
            mandatory statutory right applies to you as a consumer (see Section 25).
          </li>
          <li>
            <strong>Cobuntu is the merchant of record and processes the recurring payments via
            Stripe; the Community organiser is the seller of the product or service.</strong>
            Refunds, disputes, and tax obligations are between you and the Community organiser.
            Cobuntu facilitates payment via Stripe Connect.
          </li>
        </ul>
        <h3>5.7 Recurring Membership Lifecycle</h3>
        <p>
          Recurring memberships (monthly or yearly) renew automatically until cancelled. The
          following lifecycle rules apply in addition to anything specific to the tier you
          purchased:
        </p>
        <ul>
          <li>
            <strong>If you cancel (&ldquo;leave the community&rdquo;):</strong> your Stripe
            subscription is set to cancel at the end of the current billing period. You keep access
            through that period (as with a typical subscription service) and are not charged again.
            The already-paid current period is non-refundable on voluntary leave. If you change your
            mind before access ends, you can resume from the Community surface without paying again.
          </li>
          <li>
            <strong>If a Community Leader removes you (kick or ban):</strong> your access ends
            immediately. Your Stripe subscription is set to cancel so you are not charged again. By
            default, the unused portion of the current billing period is refunded to you
            automatically (prorated by remaining days). Community Leaders may opt out of the prorated
            refund in rare circumstances (for example, when removal follows a billed dispute or
            chargeback); in that case the current period is non-refundable but no further charges
            occur. Refund eligibility for free or installment-plan tiers is governed by the
            tier&rsquo;s own rules, not by this clause.
          </li>
          <li>
            <strong>Resuming a cancelled membership:</strong> while your access window from a
            voluntary leave is still open, you may resume your membership at any time. Resuming
            re-enables automatic renewal at the same tier and price you previously paid; no new
            payment is taken until the next regular billing date. Resuming after your access window
            has elapsed is treated as a new signup at the then-current price.
          </li>
          <li>
            <strong>Disputes and chargebacks:</strong> initiating a chargeback through your card
            issuer may result in immediate removal from the Community and forfeiture of any granted
            access pending dispute resolution between the Community organiser and your card issuer.
          </li>
        </ul>
        <h3>5.8 Profile Content (Signature, Bio, Links)</h3>
        <p>
          You may publish a profile signature (short headline), a bio, and up to four labelled link
          buttons (label plus URL) that other members can see on your profile and in the members
          directory. You are responsible for what you publish there. Cobuntu and the Community
          organiser may remove profile content that violates these Terms, community rules, or
          applicable law, and may suspend accounts that repeat such violations.
        </p>
      </section>

      <section>
        <h2>6. Event Approval Flow (Reserve-Before-Decide)</h2>
        <p>
          Hosts may require approval for attendance to an event. When this option is enabled and the
          event has a paid tier:
        </p>
        <ul>
          <li>You reserve a seat by paying the ticket price up front. Your card is charged immediately at checkout.</li>
          <li>The payment is held by Cobuntu (in escrow); it is <strong>not</strong> released to the Community while the host is still deciding.</li>
          <li>Your application is recorded as PENDING and the host is notified.</li>
          <li>If the host approves, your reservation becomes a regular paid attendance. The funds become eligible for the Community&rsquo;s daily payout sweep in line with our standard refund window (see Section 9.1).</li>
          <li>If the host rejects, you are automatically refunded (see Section 9.6 for how the Stripe processing fee is handled in this case).</li>
          <li>If you change your mind before the host has decided, you can cancel your reservation yourself from the event page and receive the same automatic refund.</li>
        </ul>
        <p>
          The host&rsquo;s decision is final. Cobuntu does not arbitrate approval decisions. Free
          events with approval (no paid tier) continue to use a no-payment application flow; you only
          encounter the reservation-and-escrow model when the event has at least one paid tier.
        </p>

        <h3>6.1 Event Invitations</h3>
        <p>
          Hosts may invite specific people to an event by email via the &ldquo;Invite Guests&rdquo;
          flow:
        </p>
        <ul>
          <li>
            <strong>Free events:</strong> accepting the invitation link grants attendance directly.
            No payment is required.
          </li>
          <li>
            <strong>Paid events:</strong> accepting an invitation does <strong>not</strong> entitle
            you to free entry. You must complete the standard checkout flow at the event&rsquo;s
            current price to confirm your attendance. The price applicable to your registration is
            the price displayed at checkout time, not the price at the time the invitation was
            issued. Cobuntu does not lock prices into invitations. If the event becomes paid after
            your invitation was sent, the standard checkout flow applies.
          </li>
          <li>
            Invitations do <strong>not</strong> reserve a seat. Events may sell out before an
            invitation is accepted; standard sold-out behaviour applies.
          </li>
          <li>
            On a paid event that requires host approval, an invited recipient who completes checkout
            is recorded as confirmed (APPROVED) immediately upon payment, skipping the
            Reserve-Before-Decide approval queue described above. By sending the invitation, the host
            has pre-approved the recipient; an explicit second approval is not required. The funds
            become eligible for payout in line with Section 9.1 (no escrow-pending hold).
          </li>
          <li>
            Hosts who wish to grant free entry without payment use the administrative &ldquo;Add
            Guests&rdquo; action, not the invitation flow.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Event Group Chats</h2>
        <ul>
          <li>A host who creates a group chat for an event receives attendee information through it (the member list and messages). Hosts must use this only for the event, must not spam or misuse it, and remain responsible for how they handle it.</li>
          <li>All participants must follow the platform code of conduct in event chats. Hosts and Cobuntu may remove participants or content that violate it.</li>
          <li>Blocking another user limits direct messaging and profile visibility only; it does not remove either of you from group chats you both belong to, including event chats.</li>
          <li>Cobuntu provides the chat as a tool; messages are user-generated content, and to the extent permitted by law Cobuntu is not responsible for their content.</li>
        </ul>
      </section>

      <section>
        <h2>8. Payment Processing</h2>
        <h3>8.1 Stripe Connect</h3>
        <p>
          Payments on Cobuntu are processed by Stripe. Each Seller (a Community or a Member Seller)
          connects their own Stripe account (Stripe Connect, Standard). When a Buyer pays, Cobuntu
          collects the funds into its platform account as the merchant of record and holds them in
          escrow until the applicable window closes (see Section 9), then transfers the Seller&rsquo;s
          net share to their connected Stripe account via the daily payout sweep (see Section 12).
          Cobuntu holds these funds only to settle the sale and only for the escrow period before
          payout.
        </p>
        <h3>8.2 Platform &amp; Processing Fees</h3>
        <p>
          Cobuntu&rsquo;s commission is negotiated with each Community and is configurable per
          category (memberships, products, and events) rather than a single platform-wide fixed rate.
          These rates are set through Cobuntu (not on the Community&rsquo;s Stripe account) and are
          deducted from the Seller&rsquo;s net proceeds by Cobuntu; the applicable rate is disclosed
          to the Seller. Where a Community has no rate configured, a default rate (currently 8%)
          applies; a Community may also configure a rate of 0%, which is honoured. For member-listed
          sales, Cobuntu does not charge the member a fee directly; its revenue comes from a share of
          the Community&rsquo;s commission (see Section 13.3).
        </p>
        <p>
          Stripe charges its standard processing fee per transaction (typically 2.9% plus a fixed
          fee, varying by currency and region); see Stripe&rsquo;s pricing page for current rates.
          This Stripe processing fee is borne by the Seller and is not absorbed by Cobuntu, save for
          the two narrow exceptions described in Section 9.6. VAT and other taxes are handled as
          described in Section 15.
        </p>
        <h3>8.3 Strong Customer Authentication (3-D Secure)</h3>
        <p>
          To reduce fraud and to comply with applicable law (including EU Strong Customer
          Authentication requirements), 3-D Secure (3DS) authentication is requested on every card
          checkout. Your card issuer may ask you to confirm the payment (for example, through your
          banking app or a one-time code). Payments that fail authentication may be declined.
        </p>
        <h3>8.4 Transaction Immutability</h3>
        <p>
          Once a transaction is completed, the purchase record (price paid, item details, Buyer
          email, refund status) is permanent. This protects Buyers from retroactive price changes and
          Sellers from disputed records.
        </p>
      </section>

      <section>
        <h2>9. Refund Policy</h2>
        <p>
          Cobuntu operates an <strong>escrow-based</strong> refund model that protects both Buyers
          and Sellers. Funds remain in an escrow window after purchase before becoming eligible for
          payout to the Seller. During this window, refunds can be processed quickly and predictably.
          These contractual refund windows are offered in addition to any mandatory statutory rights
          you may have as a consumer (see Section 25).
        </p>
        <h3>9.1 Event Tickets</h3>
        <ul>
          <li><strong>Until the event ends:</strong> a full refund is available on request.</li>
          <li><strong>After the event has ended:</strong> refunds are no longer available (the escrow window has closed).</li>
          <li><strong>Event cancellation by host:</strong> all paid attendees receive an automatic full refund regardless of the timing.</li>
          <li><strong>Conversion from free to paid:</strong> not allowed once attendees have registered. Existing free attendees are not auto-converted to paid attendees.</li>
          <li><strong>Conversion from paid to free:</strong> all paid attendees are automatically refunded.</li>
        </ul>
        <h3>9.2 Digital Products, Subscriptions &amp; Memberships</h3>
        <ul>
          <li><strong>Digital products, within 14 days of purchase:</strong> a full refund is available on request.</li>
          <li><strong>Digital products, after 14 days:</strong> refunds are no longer available.</li>
          <li><strong>Community memberships, first charge:</strong> a full refund is available within 7 days of your first membership payment (a &ldquo;didn&rsquo;t like it&rdquo; window). After 7 days, and on all renewals, memberships are not self-refundable.</li>
          <li><strong>Recurring subscriptions and renewals:</strong> no refunds for past billing periods. On cancellation, you retain access until the end of the current period and are not billed again.</li>
        </ul>
        <h3>9.3 How Refunds Work</h3>
        <ul>
          <li>You request a refund from the event detail page (for tickets) or your purchase library (for products).</li>
          <li>If the request falls within the escrow window, the refund is processed automatically and immediately.</li>
          <li>Funds appear on your original payment method within five to ten business days, depending on your bank.</li>
          <li>You receive an email confirmation when the refund is processed.</li>
          <li>All buyer-initiated refunds are full refunds; partial refunds are not supported. The one exception is the prorated refund of the unused portion of a membership&rsquo;s current billing period on involuntary removal (kick or ban), described in Section 5.7.</li>
          <li>The Community host (or their designated team) can also issue a refund on your behalf when they have approved it for service-related reasons; you will receive the same confirmation email regardless of whether you or the host triggered the refund.</li>
          <li>For member-listed sales, the Member Seller can likewise refund their own Buyers directly from their sales ledger, within the same escrow window and on the same full-refund basis. The Member Seller bears the Stripe processing fee on any refund they issue (see Section 9.6).</li>
        </ul>
        <h3>9.4 Refund Window Indicator</h3>
        <p>
          Whether a sale is still within its escrow window depends on the purchase type (events:
          until the event ends; digital products: 14 days from purchase) and Cobuntu&rsquo;s internal
          payout schedule. The refund interface on each sale displays the current eligibility status,
          showing whether a refund is available right now and, if not, why.
        </p>
        <h3>9.5 Chargebacks and Disputes</h3>
        <p>
          A <strong>chargeback</strong> (also called a <em>dispute</em>) is when you ask your bank or
          card network to reverse a charge directly, without going through Cobuntu&rsquo;s refund
          flow. Chargebacks are governed entirely by the card network&rsquo;s rules and are
          <strong> outside Cobuntu&rsquo;s control</strong>. If the card network rules in your favour,
          the funds return to you and the Community organiser bears both the Stripe processing fee and
          a flat dispute fee (currently approximately &euro;15) charged by the card network, netted
          off their payouts. We strongly recommend using the in-app refund flow first (it is faster,
          costs nobody the extra network dispute fee, and we can confirm it immediately).
        </p>
        <h3>9.6 Stripe Processing Fees on Refunds</h3>
        <p>
          When Stripe processes a card payment, it charges a non-refundable processing fee (typically
          <strong> approximately 2.9% plus a fixed fee</strong>, varying by currency and region; see
          {" "}<a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">Stripe&rsquo;s pricing page</a>).
          When a refund is later issued, Stripe returns the principal but <strong>does not</strong>
          {" "}return the processing fee it kept on the original charge. That fee is unrecoverable. As a
          rule Cobuntu does not absorb it; it is borne by one of the parties described below. Two
          narrow exceptions apply: Cobuntu absorbs the small fixed per-transaction component on
          donation tips, and it absorbs any residual dispute or refund fee that genuinely cannot be
          recovered from the Seller. Otherwise, who bears the fee depends on whether the sale had
          already converted to a confirmed attendance at the moment the refund fires:
        </p>
        <ul>
          <li>
            <strong>Refund after the sale converted to attendance</strong> (for example, you bought a
            ticket on a non-approval event and later requested a refund within the refund window, or
            the host approved your reservation and later issued a refund): the Community organiser
            bears the Stripe processing fee, which is automatically netted off their next payout from
            the daily payout sweep (or the Member Seller, for member-listed sales, see Section 13.6).
            <strong> You receive a full refund</strong> of the original amount you paid.
          </li>
          <li>
            <strong>Refund before the sale converted to attendance</strong> (that is, on an
            approval-gated paid event where the host rejects your reservation, or you cancel your
            reservation yourself before the host has decided): you bear the Stripe processing fee. You
            receive a refund of the original amount <strong>minus the Stripe processing fee</strong>.
            We disclose the exact net amount you will receive on the Reserve button and in the
            cancellation confirmation before you act. The host is not charged this fee; using an
            approval gate to keep a community intentional does not incur a per-rejection cost.
          </li>
          <li>
            <strong>Host cancels the entire event:</strong> the Community organiser bears the fee on
            every refund issued. All attendees receive a full refund of the original amount they paid.
          </li>
          <li>
            <strong>Chargebacks (Section 9.5):</strong> governed by the card network. On a lost
            dispute the Community organiser bears both the Stripe processing fee and the flat
            card-network dispute fee (currently approximately &euro;15), netted off their payouts.
          </li>
        </ul>
        <p>
          The reasoning is straightforward: when a sale converts into an attendance, the Community has
          accepted the revenue and bears the operational cost of any later refund. When a sale has not
          yet converted (the host has not yet approved, or you decided not to follow through), you
          took the reservation bet, and the small irreversible processing fee is the cost of that bet.
          This protects Communities from being penalised for using approval gates to keep their
          membership intentional.
        </p>
        <p>
          Host-side accounting: all Stripe-fee absorptions are surfaced as a separate line item on the
          organiser&rsquo;s payout summary so they remain auditable. Refunds issued before the sale
          converted (that is, pre-approval) do <strong>not</strong> appear in this line item because
          the Community is not charged for them.
        </p>

        <h3>9.7 Post-Payout Recovery (Clawback)</h3>
        <p>
          The escrow and hold periods in Sections 9.1 to 9.4 are designed to keep funds on the
          Platform until a sale&rsquo;s refund exposure has largely passed, so that most refunds and
          disputes are resolved <em>before</em> the Seller or Community organiser is paid. They reduce
          this exposure but cannot eliminate it: a card chargeback in particular can be raised by a
          Buyer&rsquo;s bank weeks or months after a payout has already been made.
        </p>
        <p>
          Where a refund or chargeback occurs <strong>after</strong> the corresponding proceeds have
          already been paid out to you (as a Community organiser or as a Member Seller, see Section
          13.6), you remain responsible for that amount, and Cobuntu recovers it from you. This applies
          to the amount returned to the Buyer together with any associated Stripe processing fee and
          card-network dispute fee allocated to you under Sections 9.5 and 9.6. Recovery works as
          follows:
        </p>
        <ul>
          <li>
            The amount is recorded as a <strong>pending payout debit</strong> on your account and
            automatically netted off your next payout, and subsequent payouts, until it is cleared. It
            appears as a separate line item on your payout summary so it stays auditable.
          </li>
          <li>
            Where the funds can be pulled back directly from your connected Stripe account, they may be
            recovered that way instead of, or in addition to, netting future payouts.
          </li>
          <li>
            If your pending and future payouts do not cover the amount, the shortfall is a balance you
            owe Cobuntu. Your account may show a negative balance until it is settled, and Cobuntu may
            recover the outstanding amount from your later earnings anywhere on the Platform or by other
            lawful means. New Sellers may additionally be subject to Stripe&rsquo;s negative-balance
            recovery on their connected account.
          </li>
        </ul>
        <p>
          This is the same principle applied to referral commissions in Section 14.5. Cobuntu, as
          merchant of record for payment processing, does not absorb refunded or charged-back sale
          proceeds on your behalf; it absorbs only the narrow residual fees described in Section 9.6.
        </p>
      </section>

      <section>
        <h2>10. Seller / Host Obligations</h2>
        <ul>
          <li>Hosts must connect a Stripe account before publishing paid products or events.</li>
          <li>Hosts must fulfil commitments made to attendees (deliver the event, deliver the product, honour the form requirements).</li>
          <li>Cobuntu maintains immutable purchase snapshots of digital products at the time of purchase, so Buyers retain perpetual access even if the host later archives or modifies the original product.</li>
          <li>Products with completed sales cannot be permanently deleted; they may be archived (hidden from the marketplace) while preserving Buyer access.</li>
          <li>Hosts must not cancel events without justifiable cause; cancelled events trigger automatic refunds and attendee notifications.</li>
        </ul>
      </section>

      <section>
        <h2>11. Buyer Protections</h2>
        <ul>
          <li>The price you pay is locked at the time of transaction; later price changes do not affect you.</li>
          <li>You receive email confirmation for all purchases and refunds.</li>
          <li>Cobuntu&rsquo;s Purchase Snapshot System guarantees perpetual access to purchased digital content via your purchase library.</li>
          <li>You will be notified of any significant change to an event you registered for (date, time, location).</li>
          <li>Cancelled events always trigger an automatic full refund to paid attendees.</li>
          <li>Nothing in this Section limits any mandatory statutory consumer right you may have (see Section 25).</li>
        </ul>
      </section>

      <section>
        <h2>12. Payouts to Sellers</h2>
        <p>
          Cobuntu pays Sellers (Communities and Member Sellers) through a daily payout sweep, which
          is the sole mechanism by which funds are released and is designed for transparency:
        </p>
        <ul>
          <li>The payout sweep runs daily. A sale becomes eligible for payout once its refund window has closed (see Section 9), and eligible funds are picked up by the next daily sweep. No other mechanism releases funds.</li>
          <li><strong>Event settlement buffer:</strong> for event tickets, funds settle a few days after the event ends (currently the event end date plus 4 days) to allow for no-shows and dispute or chargeback exposure, and are then released on the next daily sweep.</li>
          <li><strong>New-seller hold:</strong> to protect Buyers against fraud and chargebacks, a Member Seller&rsquo;s payouts are held for an additional buffer when they first start selling, currently 21 days from each sale. This eases to the standard payout timing once the Seller has verified their identity with Stripe and completed a few clean sales. Established Community sellers are not subject to this hold.</li>
          <li>A minimum payout balance of &euro;10 applies. Balances below the minimum accumulate until they reach it; accumulated funds are released when the minimum is reached, or after 30 days at the latest.</li>
          <li>If a payout fails (for example, a Stripe transfer error, or an account not configured), Cobuntu logs the failure with a clear reason and creates a recovery payout in a subsequent sweep.</li>
          <li>Communities can view pending, processing, completed, and failed payouts in their admin dashboard.</li>
        </ul>
      </section>

      <section>
        <h2>13. Member Sellers</h2>
        <p>
          A Community may permit its members to list their own products and events in the
          Community&rsquo;s marketplace. This Section describes how those member-led sales work.
          References to &ldquo;you&rdquo; in this Section mean a member acting as a Seller.
        </p>

        <h3>13.1 What a Member Listing Is</h3>
        <p>
          When a Community has enabled member listings for a given content type (products or events),
          members of that Community may submit their own products or events for inclusion in the
          Community&rsquo;s marketplace. The Community Leader configures whether submissions go live
          automatically or require approval before publication, and the commission the Community takes
          when a member sale completes. The applicable rate is disclosed at the moment you publish.
        </p>

        <h3>13.2 The Transaction Is Between You and Your Buyer</h3>
        <p>
          When a Buyer purchases a member-listed product or event, the transaction is directly between
          the Buyer and you. Cobuntu is a marketplace platform and a payment-processing facilitator;
          it is not a party to your sales. The host Community acts as a curator and broker, taking a
          commission, but does not become a party to the sale beyond that broker role.
        </p>

        <h3>13.3 Commission Terms</h3>
        <ul>
          <li>The Community sets the commission rate. The rate may be a flat percentage configured by the Community per membership tier and product type (a per-tier by per-type matrix), or negotiated per submission via the listing chat. The applicable rate is shown to you when you publish.</li>
          <li>Cobuntu does not take a commission directly from you. On member sales, the member pays no platform fee; Cobuntu&rsquo;s revenue comes from a percentage of the Community&rsquo;s commission, charged to the Community.</li>
          <li>Donations attached to a member listing are not subject to community commission and flow in full to you, less only Stripe&rsquo;s percentage processing fee; Cobuntu absorbs the fixed per-transaction component on donations (see Section 5.3).</li>
        </ul>

        <h3>13.4 Stripe Connect Requirement for Paid Listings</h3>
        <p>
          To publish a listing with a price greater than zero, you must connect a Stripe Connect
          account in good standing. Cobuntu uses Stripe to process payments and route funds; the price
          field is disabled until your Stripe account has charges enabled. Free listings do not require
          Stripe.
        </p>

        <h3>13.5 Editing and Re-Approval</h3>
        <ul>
          <li>You may edit non-material fields (description, images, stock or availability) on a live listing at any time without re-approval.</li>
          <li>Edits to material fields (title, price, scheduled date for events) revert the listing to a pending state. The listing is hidden from the marketplace until the Community Leader re-approves it.</li>
          <li>You may pause or remove your own listings at any time. Listings with in-flight Buyer obligations (pending refund windows, undelivered orders) cannot be permanently deleted until those obligations are resolved.</li>
        </ul>

        <h3>13.6 Refunds and Chargebacks</h3>
        <ul>
          <li>You are the seller of record. Refund requests and chargebacks are between you and your Buyer. Cobuntu may facilitate refunds via the Platform but is not a party to the dispute.</li>
          <li>When a refund or chargeback results in a loss of funds, the Stripe processing fees on that transaction are not returned. Those fees are deducted from your payout or future earnings; they are not absorbed by Cobuntu or by the Community.</li>
          <li>If a refund or chargeback occurs after you have already been paid the proceeds of a sale, the amount is recovered from you as a post-payout clawback under Section 9.7 (netted off your future payouts, pulled from your connected account, or carried as a balance you owe if neither covers it).</li>
          <li>For chargebacks, Cobuntu provides an automated evidence-package tool you can submit to Stripe. The outcome of any chargeback is determined by the Buyer&rsquo;s bank and card network, not by Cobuntu. Cobuntu cannot guarantee chargeback outcomes.</li>
        </ul>

        <h3>13.7 What Happens When Your Community Changes Its Rules</h3>
        <ul>
          <li>If the Community disables member listings for a content type, your existing live listings are hidden from the community marketplace but not deleted. They are restored automatically if the Community re-enables the feature.</li>
          <li>If you voluntarily leave the Community, your listings in that Community are paused. They are restored if you rejoin.</li>
          <li>If the Community removes you without permanently banning you, your listings in that Community are paused. They are restored if you are re-admitted.</li>
          <li>If the Community bans you (a final removal recorded in the Community&rsquo;s ban records), your listings in that Community are cancelled and will not return unless an administrator reverses the ban.</li>
          <li>In all cases, sales that already completed remain valid and refundable per Section 9. Only future sales are affected by these state changes.</li>
        </ul>

        <h3>13.8 Tax Responsibility</h3>
        <ul>
          <li>You are responsible for your own tax obligations on sales you make, including any applicable VAT, sales tax, or income tax. Cobuntu is not your tax adviser.</li>
          <li>Cobuntu&rsquo;s handling of VAT on your sales, and the domestic-only mechanism by which it determines when VAT is added, is set out in Section 15 (Value Added Tax &amp; Other Taxes). Sellers remain responsible for VAT on their own underlying sales.</li>
          <li>You are responsible for the accuracy of your VAT registration details and for reporting and remitting VAT to the relevant authorities.</li>
          <li>For statutory tax forms, see Section 15.4.</li>
        </ul>

        <h3>13.9 Receipts and Seller of Record</h3>
        <p>
          The receipt your Buyer receives identifies you (using the legal or business name on your
          Stripe Connect account) as the seller of the goods or services. Cobuntu is the merchant of
          record for payment processing; the host Community is identified as the marketplace curator.
          None of this makes Cobuntu or the Community a party to your underlying sale.
        </p>
      </section>

      <section>
        <h2>14. Referral Program</h2>
        <p>
          A Community may run a referral program that rewards its members for bringing in new paying
          members. This Section describes how referral commissions are earned and paid. References to
          &ldquo;you&rdquo; in this Section mean a member acting as a referrer.
        </p>

        <h3>14.1 What the Referral Program Is</h3>
        <p>
          When a Community turns the program on, you receive a personal referral link, and the
          Community may also assign you a dedicated link with its own rate. When someone joins and
          pays for a membership of that Community through your link, you earn a commission.
        </p>

        <h3>14.2 How the Commission Works</h3>
        <ul>
          <li>The commission is recurring. You earn it on the referred member&rsquo;s first membership payment and on each renewal, for the duration the Community sets (a fixed number of payments, or the lifetime of the membership).</li>
          <li>The rate and duration that apply to a given referral are fixed at the time the referral is made. If the Community later changes the program&rsquo;s rate or duration, the change applies only to new referrals; your existing referrals keep the terms they were made under.</li>
          <li>The commission is funded from the Community&rsquo;s share of the membership revenue, after Cobuntu&rsquo;s platform fee. Cobuntu takes no part of your referral commission (0%). Both Cobuntu&rsquo;s fee and your commission are calculated on the amount actually paid on each membership invoice, so discounts and coupons scale them down.</li>
        </ul>

        <h3>14.3 You Must Connect Stripe to Earn</h3>
        <ul>
          <li>To receive referral commissions you must have a Stripe Connect account able to receive payouts. Your referral link is inactive until you connect one, and while it is inactive it does not record referrals.</li>
          <li>If your ability to receive payouts lapses (for example, your Stripe account is disconnected or restricted), commissions are skipped for the payments that fall in that period. They resume automatically on later payments once you can receive payouts again. Cobuntu does not hold commissions for you while you are unable to receive them.</li>
        </ul>

        <h3>14.4 No Self-Referral</h3>
        <p>
          You cannot earn a referral commission on your own membership, and a Community&rsquo;s own
          operators cannot earn on memberships taken through the Community&rsquo;s general program
          link. Attempts to self-refer are not eligible and may constitute prohibited conduct under
          Section 16.
        </p>

        <h3>14.5 Refund Hold and Clawback</h3>
        <ul>
          <li>A commission is held through the referred member&rsquo;s refund window and only becomes payable to you after that window passes (the same hold that applies to other payouts, see Section 9).</li>
          <li>If the underlying membership payment is refunded or charged back before the commission is paid to you, the commission is cancelled and not paid.</li>
          <li>If the payment is refunded or charged back after the commission was already paid to you, the commission is reversed. Where the funds can be pulled back from your connected account, they are. Where they cannot, the amount is deducted from your next referral payout.</li>
        </ul>

        <h3>14.6 Payouts of Referral Commissions</h3>
        <p>
          Referral commissions are grouped by currency and paid to your Stripe Connect account on the
          Platform&rsquo;s payout schedule, subject to the same minimum payout thresholds as other
          payouts. You receive a remittance statement for each referral payout.
        </p>

        <h3>14.7 Privacy of the People You Refer</h3>
        <p>
          Your referral tracker shows how many people you referred, the timing and amounts of your
          commissions, and when your next commission is expected. It does not reveal identifying
          details of the people you referred beyond what is necessary to operate the program. See the
          Privacy Policy.
        </p>

        <h3>14.8 Tax Responsibility</h3>
        <p>
          You are responsible for your own tax obligations on referral commissions you earn, including
          any applicable VAT or income tax. Cobuntu&rsquo;s handling of VAT is set out in Section 15;
          where Cobuntu is able to determine and apply VAT, it will do so and reflect it on your
          remittance, and until then no VAT is added and you remain responsible for accounting for any
          tax due.
        </p>

        <h3>14.9 Cobuntu&rsquo;s Role and Program Changes</h3>
        <p>
          Cobuntu facilitates the referral program and processes payouts. Cobuntu is not a party to
          the arrangement between you and the Community beyond payment processing, holds no referral
          funds unclaimed, and takes 0% of the referral commission. A Community may change or end its
          referral program at any time; existing referrals keep their snapshotted terms to their cap,
          and commissions already earned and payable remain payable.
        </p>
      </section>

      <section>
        <h2>15. Value Added Tax (VAT) &amp; Other Taxes</h2>
        <h3>15.1 Your Taxes Are Your Responsibility</h3>
        <p>
          Each Seller is solely responsible for determining, charging, collecting, reporting, and
          remitting all taxes (including VAT, sales tax, and income tax) arising from goods and
          services it sells through the Platform. These Terms do not constitute legal, tax, or
          financial advice to you as a Seller; you are responsible for your own compliance, and
          Cobuntu is not your tax adviser. If you are unsure of your obligations, seek professional
          advice.
        </p>
        <h3>15.2 VAT on Seller Sales (Current, Seller-Side Mechanism)</h3>
        <p>
          If you are VAT-registered, you may record your VAT registration (number and country) in your
          Cobuntu seller settings. Cobuntu applies a conservative, domestic-only approach designed
          never to misprice VAT: it adds VAT to your sale only where it can determine the correct
          treatment, and otherwise adds none, and always shows your VAT number on the Buyer&rsquo;s
          receipt where VAT is charged. Specifically:
        </p>
        <ul>
          <li><strong>Buyer in your country:</strong> Cobuntu charges your standard domestic VAT rate on your sale and collects that VAT on your behalf.</li>
          <li><strong>VAT-registered business buyer elsewhere in the EU:</strong> where the Buyer provides a valid EU VAT identification number for an EU country other than yours, the sale is treated as a zero-rated intra-EU business-to-business supply (reverse charge), and no VAT is added.</li>
          <li><strong>All other cases</strong> (the Buyer&rsquo;s country is unknown, a cross-border sale to a consumer, or a Buyer outside the EU): no VAT is added, and you remain responsible for accounting for any VAT or other tax due.</li>
        </ul>
        <p>
          Recurring subscriptions and memberships defer to Stripe Tax, which determines applicable tax
          based on the Buyer&rsquo;s jurisdiction at checkout. You are responsible for the accuracy of
          your VAT registration details and for reporting and remitting VAT to the relevant
          authorities.
        </p>
        <h3>15.3 VAT on Cobuntu&rsquo;s Own Fees (Upon VAT Registration)</h3>
        <p>
          Cobuntu is incorporating and registering for VAT. Once registered under [VAT NUMBER],
          Cobuntu, as merchant of record, will charge and remit VAT on <strong>its own commission and
          platform fees</strong> where required by law. This VAT applies to Cobuntu&rsquo;s fees only.
          It does not change the treatment of your underlying sale to your Buyer, for which you remain
          responsible under Section 15.2. Donations remain outside VAT (see Section 5.3).
        </p>
        <h3>15.4 Tax Forms</h3>
        <p>
          For statutory tax forms (for example, IRS Form 1099-K for U.S. Sellers who cross applicable
          reporting thresholds), Stripe issues the forms directly to you under its own reporting
          program. Cobuntu does not issue tax forms on your behalf.
        </p>
      </section>

      <section>
        <h2>16. Acceptable Use &amp; Prohibited Conduct</h2>
        <p>
          You agree not to use the Platform, and not to permit anyone using your account to use the
          Platform, to:
        </p>
        <ul>
          <li>violate any applicable law or regulation, or infringe the rights of others (including intellectual-property, privacy, and publicity rights);</li>
          <li>sell or promote goods or services that are illegal, fraudulent, counterfeit, or that you are not authorised to sell;</li>
          <li>upload or transmit content that is defamatory, harassing, hateful, obscene, or otherwise objectionable, or that breaches a Community&rsquo;s published rules or the platform code of conduct;</li>
          <li>misrepresent your identity, impersonate any person or entity, or falsify VAT, tax, payment, or Stripe account details;</li>
          <li>engage in fraud, money laundering, or the financing of illegal activity, or use the payment system to launder funds or evade taxes;</li>
          <li>circumvent, disable, or interfere with the Platform&rsquo;s security, fee, escrow, or payout mechanisms, or attempt to receive payouts or commissions you are not entitled to (including self-referral, see Section 14.4);</li>
          <li>access or use the Platform by automated means (scraping, bots) except as expressly permitted, or attempt to gain unauthorised access to any account, system, or data;</li>
          <li>introduce malware, or take any action that imposes an unreasonable or disproportionate load on the Platform&rsquo;s infrastructure.</li>
        </ul>
        <p>
          Cobuntu may remove content, and suspend or terminate accounts, that breach this Section (see
          Section 19).
        </p>
      </section>

      <section>
        <h2>17. Intellectual Property &amp; Licence to Use</h2>
        <h3>17.1 Cobuntu&rsquo;s Intellectual Property</h3>
        <p>
          The Platform, including its software, design, text, graphics, and the Cobuntu name and logo,
          is owned by Cobuntu or its licensors and is protected by intellectual-property laws. Subject
          to these Terms, Cobuntu grants you a limited, non-exclusive, non-transferable, revocable
          licence to access and use the Platform for its intended purpose. No other rights are
          granted; you may not copy, modify, distribute, sell, or create derivative works from the
          Platform except as permitted by law.
        </p>
        <h3>17.2 Your Content</h3>
        <p>
          You retain ownership of the Content you submit (listings, profile content, messages, images,
          and other materials). You grant Cobuntu a worldwide, non-exclusive, royalty-free licence to
          host, store, reproduce, adapt (for formatting and display), and communicate that Content to
          the extent necessary to operate, secure, promote, and improve the Platform and to deliver
          your sales. You are responsible for your Content and warrant that you have the rights
          necessary to grant this licence and that your Content does not infringe any third-party
          right or violate any law.
        </p>
        <h3>17.3 Community Branding</h3>
        <p>
          Each Community&rsquo;s branding, name, and content belong to that Community or its licensors,
          not to Cobuntu. Cobuntu&rsquo;s white-label facilitation does not transfer ownership of
          Community or Seller Content to Cobuntu.
        </p>
      </section>

      <section>
        <h2>18. Data Retention &amp; Deletion</h2>
        <ul>
          <li>Products with purchase history cannot be permanently deleted; they are soft-deleted (hidden from the marketplace) and retained for accounting and Buyer access.</li>
          <li>Events with ticket purchases must be soft-deleted to maintain financial audit trails.</li>
          <li>Free events without purchases may be permanently deleted by the host.</li>
          <li>Purchase records are retained as required for legal compliance, accounting, and your purchase history.</li>
          <li>You may request deletion of your account and personal data; see the Privacy Policy for details, including which records must be retained by law even after deletion.</li>
        </ul>
      </section>

      <section>
        <h2>19. Account Suspension &amp; Termination</h2>
        <ul>
          <li>You may delete your account at any time, subject to outstanding financial obligations.</li>
          <li>Cobuntu may suspend or terminate accounts that violate these Terms, that create legal or fraud risk, or that Cobuntu is required to suspend by law or by Stripe.</li>
          <li>Account deletion may be restricted while you have active products, events, or payouts pending.</li>
          <li>Purchase and financial records are retained as required by law even after account deletion.</li>
          <li>Termination does not affect any right or obligation that accrued before termination, or any provision that by its nature should survive (including Sections 15, 17, 20, 21, 22, 23, 24, 25, and 26).</li>
        </ul>
      </section>

      <section>
        <h2>20. Disclaimer of Warranties</h2>
        <p>
          To the fullest extent permitted by law, the Platform is provided on an &ldquo;as is&rdquo;
          and &ldquo;as available&rdquo; basis, without warranties of any kind, whether express,
          implied, or statutory. Cobuntu disclaims all implied warranties, including merchantability,
          fitness for a particular purpose, title, and non-infringement, and does not warrant that the
          Platform will be uninterrupted, timely, secure, or error-free, or that defects will be
          corrected.
        </p>
        <p>
          Cobuntu is a platform facilitator and the merchant of record for payment processing only. It
          does not sell, produce, or control the goods, services, or events offered by Sellers, and
          gives no warranty as to their quality, safety, legality, or fitness, or as to the accuracy of
          Seller-provided content. Product quality, event execution, and customer support are the
          responsibility of the host (Community or individual). Payment processing is provided by
          Stripe under Stripe&rsquo;s own terms of service, and Cobuntu does not warrant Stripe&rsquo;s
          services, nor is it responsible for payment processing failures, delays, or disputes that
          originate with Stripe or with your bank.
        </p>
        <p>
          Nothing in this Section affects warranties or rights that cannot be excluded under applicable
          law, including mandatory consumer rights (see Section 25).
        </p>
      </section>

      <section>
        <h2>21. Limitation of Liability</h2>
        <h3>21.1 Exclusion of Indirect Losses</h3>
        <p>
          To the fullest extent permitted by law, Cobuntu will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or for any loss of profits,
          revenue, goodwill, data, or business, arising out of or in connection with your use of the
          Platform, whether in contract, tort (including negligence), or otherwise, even if Cobuntu has
          been advised of the possibility of such damages.
        </p>
        <h3>21.2 Liability Cap</h3>
        <p>
          To the fullest extent permitted by law, Cobuntu&rsquo;s total aggregate liability arising out
          of or in connection with these Terms or the Platform will not exceed the greater of (a) the
          total commission and platform fees Cobuntu earned from your transactions in the twelve (12)
          months preceding the event giving rise to the claim, or (b) one hundred euros (&euro;100).
        </p>
        <p>
          If you are a consumer, nothing in this Section limits or excludes Cobuntu&rsquo;s liability
          beyond what the mandatory law of your country of residence permits, and this cap does not
          reduce your statutory rights (see Section 25). Where limb (a) above produces no figure
          because you have paid Cobuntu no fees (for example, as a Buyer, who pays no platform fee),
          the cap for you is the amount in limb (b).
        </p>
        <h3>21.3 Sales and Events Are Between Buyer and Seller</h3>
        <p>
          Because Cobuntu is a facilitator and not a party to the underlying sale, Cobuntu is not
          liable for the acts or omissions of any Seller, Community, or Buyer, including non-delivery,
          defective goods or services, event cancellation or execution, or any dispute between Buyer
          and Seller. Attendees participate in events at their own risk; the relevant host is
          responsible for the logistics, safety, and execution of each event. Your remedy for such
          matters is against the relevant Seller or Community.
        </p>
        <h3>21.4 Carve-Outs</h3>
        <p>
          Nothing in these Terms excludes or limits Cobuntu&rsquo;s liability for death or personal
          injury caused by its negligence, for fraud or fraudulent misrepresentation, for any
          liability arising under the merchant-of-record duty to remit funds held for you, or for any
          liability that cannot be excluded or limited under applicable law. Where a liability cannot
          be excluded but can be limited, it is limited to the maximum extent permitted.
        </p>
      </section>

      <section>
        <h2>22. Indemnification</h2>
        <p>
          To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless
          Cobuntu and its officers, directors, employees, and agents from and against any claims,
          liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of
          or related to: (a) Content you submit to the Platform; (b) goods, services, or events you
          sell or offer through the Platform, including their delivery, quality, safety, and legality;
          (c) your taxes, including VAT, sales tax, and income tax on your sales; (d) your breach of
          these Terms or of a Community&rsquo;s rules; and (e) your violation of any law or of any
          third-party right. Cobuntu may, at its own expense, assume the exclusive defence of any
          matter subject to indemnification, in which case you will cooperate with Cobuntu. This
          Section does not apply to consumers except to the extent permitted by mandatory law.
        </p>
      </section>

      <section>
        <h2>23. Dispute Resolution</h2>
        <h3>23.1 Buyer-Seller Disputes</h3>
        <p>
          Disputes about goods, services, or events (quality, delivery, execution) are between the
          Buyer and the relevant Seller or Community, who should first attempt to resolve them
          directly. Cobuntu is not a party to those disputes and does not arbitrate the parties&rsquo;
          underlying legal rights. Within the refund windows in Section 9, the in-app refund flow is
          the fastest route to a resolution.
        </p>
        <h3>23.2 Platform Mediation</h3>
        <p>
          If a Buyer and Seller cannot resolve a dispute, either may contact Cobuntu support at{" "}
          <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a>. Cobuntu may, at its discretion,
          facilitate a resolution and will make final determinations on matters of platform policy (for
          example, eligibility for a refund under these Terms). Cobuntu&rsquo;s determination on
          platform-policy matters is final; it does not determine the parties&rsquo; underlying legal
          rights.
        </p>
        <h3>23.3 Chargebacks</h3>
        <p>
          Card chargebacks are governed by the card network&rsquo;s rules and are outside
          Cobuntu&rsquo;s control (see Section 9.5). We strongly recommend using the in-app refund flow
          before initiating a chargeback.
        </p>
        <h3>23.4 Preservation of Remedies</h3>
        <p>
          Nothing in this Section prevents you from pursuing any right or remedy available to you under
          applicable law, including before the courts identified in Section 24 or, where applicable, an
          alternative dispute-resolution or consumer body.
        </p>
      </section>

      <section>
        <h2>24. Governing Law &amp; Jurisdiction</h2>
        <p>
          These Terms, and any dispute or claim arising out of or in connection with them or their
          subject matter (including non-contractual disputes), are governed by the laws of
          [JURISDICTION]. Subject to Section 25 (which preserves your mandatory rights) and to the
          mandatory consumer-protection rules that may entitle you to bring proceedings in your country
          of residence, the courts of [JURISDICTION] have exclusive jurisdiction to settle any such
          dispute or claim.
        </p>
      </section>

      <section>
        <h2>25. Consumer Rights (Your Mandatory Rights Are Not Limited)</h2>
        <h3>25.1 Mandatory Rights Prevail</h3>
        <p>
          If you use the Platform as a consumer, nothing in these Terms limits or excludes any right you
          have under mandatory consumer-protection or data-protection law (including the EU General Data
          Protection Regulation) that cannot be limited or excluded by agreement. Where any provision of
          these Terms conflicts with such mandatory law, that law prevails and the provision is modified
          only to the minimum extent necessary to comply.
        </p>
        <h3>25.2 Right of Withdrawal for Digital Content and Services</h3>
        <p>
          EU and UK consumers may have a statutory right to withdraw from certain purchases within 14
          days. For digital content supplied immediately and for services that begin during the
          withdrawal period, you may be asked to expressly consent to immediate performance and to
          acknowledge that you thereby lose the right of withdrawal once performance has begun; where
          the law provides otherwise, the statutory right prevails. The refund windows in Section 9 are
          contractual protections offered in addition to, and do not replace, any mandatory statutory
          rights.
        </p>
        <h3>25.3 Data-Protection Rights</h3>
        <p>
          Your rights over your personal data, and how Cobuntu processes it, are described in the
          Privacy Policy.
        </p>
      </section>

      <section>
        <h2>26. Force Majeure</h2>
        <p>
          Cobuntu is not liable for any delay or failure to perform arising from events beyond its
          reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest,
          epidemics or pandemics, strikes, and failures or outages of the internet, hosting,
          telecommunications, power infrastructure, or third-party providers such as Stripe. This
          Section does not relieve Cobuntu of its obligation to remit amounts held for you under these
          Terms once performance becomes possible.
        </p>
      </section>

      <section>
        <h2>27. General Provisions</h2>
        <h3>27.1 Severability</h3>
        <p>
          If any provision of these Terms is held invalid or unenforceable, that provision is severed
          to the minimum extent necessary and the remaining provisions continue in full force.
        </p>
        <h3>27.2 Entire Agreement</h3>
        <p>
          These Terms, together with the Privacy Policy and any rules published by a Community you join,
          constitute the entire agreement between you and Cobuntu regarding the Platform and supersede
          any prior agreements on that subject. A Community&rsquo;s own rules govern your relationship
          with that Community and do not bind Cobuntu.
        </p>
        <h3>27.3 Assignment</h3>
        <p>
          You may not assign or transfer these Terms without Cobuntu&rsquo;s prior written consent.
          Cobuntu may assign or transfer these Terms, in whole or in part, including to the incorporated
          entity identified in Section 1 upon completion of incorporation, or in connection with a
          merger, acquisition, reorganisation, or sale of assets. Your rights as a consumer are not
          diminished by any such assignment.
        </p>
        <h3>27.4 No Waiver</h3>
        <p>
          Cobuntu&rsquo;s failure to enforce any provision is not a waiver of its right to enforce it
          later. No waiver is effective unless made in writing.
        </p>
        <h3>27.5 Notices</h3>
        <p>
          Cobuntu gives notices to you by email (to the address on your account or given at checkout) or
          through the Platform, and such notices are deemed received when sent. You give notices to
          Cobuntu at <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a> or, for formal legal
          notices, at the registered address in Section 1.
        </p>
      </section>

      <section>
        <h2>28. Changes to These Terms</h2>
        <p>
          Cobuntu may update these Terms from time to time. Material changes will be communicated by
          email and posted here with an updated &ldquo;Last updated&rdquo; date. Continued use of the
          Platform after the change becomes effective constitutes acceptance of the modified Terms. If
          you do not accept a material change, your remedy is to stop using the Platform, subject to any
          outstanding obligations.
        </p>
      </section>

      <section>
        <h2>29. Contact</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a>, or in writing to [ENTITY NAME] at
          [REGISTERED ADDRESS].
        </p>
      </section>

      <p className="text-xs opacity-50 pt-8 border-t">
        By using Cobuntu, you acknowledge that you have read, understood, and agree to be bound by these
        Terms of Service and our <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </div>
  );
}
