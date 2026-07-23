/**
 * "How it works" — a plain-language explainer of how buying, refunds, payouts,
 * and fees work on Cobuntu, for buyers and sellers. Shared from
 * @cobuntu/legal-content and rendered by both apps. This is a friendly summary,
 * not the legal contract; the Terms of Service govern.
 *
 * KEEP ACCURATE to the deployed system (see the cobuntu-legal-docs skill): event
 * refund runs to event end + payout end+4d; digital 14d; membership first charge
 * 7d and renewals immediate; product-subscription renewals now pay immediately
 * too; per-community commission (default 8%); Stripe fees on the seller; EUR10
 * minimum + 30-day floor; 21-day new-seller hold.
 */
export function HowItWorksContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-10 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_h2]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:opacity-80 [&_li]:opacity-80 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_strong]:font-semibold [&_strong]:opacity-100">
      <section>
        <p>
          A quick, plain-language guide to how buying, refunds, and getting paid work on Cobuntu.
          This is a summary to help you understand the system; the full rules are in our{" "}
          <a href="/terms" className="underline">Terms of Service</a>.
        </p>
      </section>

      <section>
        <h2>The short version</h2>
        <p>
          When you buy something, Cobuntu holds your payment safely during a refund window instead
          of handing it straight to the seller. If you are entitled to a refund, it happens quickly.
          Once the window closes, the seller is paid automatically. This protects buyers and sellers
          alike.
        </p>
      </section>

      <section>
        <h2>Buying</h2>
        <ul>
          <li>The price you pay is the price shown at checkout. You always get an email receipt.</li>
          <li>You can buy as a guest (no account needed) or signed in.</li>
          <li>Your payment is held in escrow by Cobuntu during the refund window, then released to the seller.</li>
          <li>Card payments use 3-D Secure (your bank&rsquo;s extra verification) for security.</li>
        </ul>
      </section>

      <section>
        <h2>Refunds</h2>
        <p>Every eligible refund is a full refund. You request it from the event page or your purchase library.</p>
        <ul>
          <li><strong>Event tickets:</strong> full refund any time <strong>until the event ends</strong>.</li>
          <li><strong>Digital products:</strong> full refund <strong>within 14 days</strong> of purchase.</li>
          <li><strong>Memberships:</strong> full refund <strong>within 7 days</strong> of your first payment. Renewals are not refundable, but you can cancel any time to stop future charges and keep access until the period you already paid for ends.</li>
          <li><strong>Recurring product subscriptions:</strong> the first charge follows the 14-day product rule; renewals are not refundable (cancel any time to stop billing).</li>
          <li><strong>Donations / tips:</strong> not refundable on their own, but refunded if the whole purchase is refunded.</li>
        </ul>
        <p>
          If you dispute a charge with your bank instead of using the refund flow (a
          &ldquo;chargeback&rdquo;), it costs the seller an extra network fee, so please use the
          in-app refund first, it is faster for everyone.
        </p>
      </section>

      <section>
        <h2>Getting paid (for sellers)</h2>
        <p>
          Cobuntu collects the payment and pays you after the refund window closes, through an
          automatic daily payout. When you are paid depends on what you sold:
        </p>
        <ul>
          <li><strong>Events:</strong> a few days after the event ends (event end plus about 4 days, to cover no-shows).</li>
          <li><strong>Digital products:</strong> about 14 days after the sale.</li>
          <li><strong>Memberships:</strong> the first charge after 7 days; renewals right away.</li>
          <li><strong>Recurring product subscriptions:</strong> the first charge after about 14 days; renewals right away.</li>
        </ul>
        <p>Two things that can affect the exact timing:</p>
        <ul>
          <li><strong>New sellers:</strong> your first payouts are held a bit longer (about 21 days) as fraud protection. This eases to the normal schedule once you verify your identity with Stripe and complete a few clean sales.</li>
          <li><strong>Minimum payout:</strong> a small minimum (about &euro;10) applies. Balances below it add up and are released once they reach the minimum, or after 30 days at the latest.</li>
        </ul>
      </section>

      <section>
        <h2>Fees</h2>
        <ul>
          <li><strong>Card processing (Stripe):</strong> a small fee per transaction (around 2.9% plus a fixed amount), paid by the seller.</li>
          <li><strong>Cobuntu&rsquo;s commission:</strong> set per community (a default applies if none is configured). When a member sells inside a community, the member pays no platform fee, Cobuntu&rsquo;s share comes out of the community&rsquo;s commission.</li>
          <li><strong>Donations / tips</strong> carry no commission or platform fee, they go to the seller minus only the card processing fee.</li>
        </ul>
      </section>

      <section>
        <h2>Tax &amp; VAT</h2>
        <p>
          Where VAT applies, it is calculated at checkout (via Stripe and the seller&rsquo;s tax
          settings). Sellers are responsible for their own tax obligations on what they sell. See
          the Terms for details.
        </p>
      </section>

      <section>
        <h2>Questions?</h2>
        <p>
          Contact us at <a href="mailto:hello@cobuntu.com">hello@cobuntu.com</a>, or read the full{" "}
          <a href="/terms" className="underline">Terms of Service</a> and{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </p>
      </section>
    </div>
  );
}
