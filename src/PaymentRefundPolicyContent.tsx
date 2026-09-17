/**
 * "Payment &amp; Refund Policy" — a plain-language explainer of how buying, refunds, payouts,
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
export function PaymentRefundPolicyContent() {
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
          alike. For anything posted to you, that window starts when the parcel arrives rather than
          when you paid.
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
          <li>
            <strong>Physical items (posted to you):</strong> full refund <strong>within 14 days of the
            item arriving</strong>, not 14 days from when you paid. You send the item back at your
            own cost, and the money returns once the seller confirms it reached them; if they say
            nothing for 14 days after you post it, we refund you anyway. If the item was faulty or
            not as described, the return is not at your cost. If the seller does not post the order
            in the first place within 5 working days, it is cancelled and refunded in full
            automatically, postage included, without you having to ask.
          </li>
          <li><strong>Memberships:</strong> full refund <strong>within 14 days</strong> of your first payment. Renewals are not refundable, but you can cancel any time to stop future charges and keep access until the period you already paid for ends.</li>
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
          Cobuntu collects the payment and releases your share after the refund window closes, into
          your own connected Stripe account. When that release happens depends on what you sold:
        </p>
        <ul>
          <li><strong>Events:</strong> a few days after the event ends (event end plus about 4 days, to cover no-shows).</li>
          <li><strong>Digital products:</strong> about 14 days after the sale.</li>
          <li>
            <strong>Physical items:</strong> 30 days after the item is delivered, not after the sale.
            The buyer&rsquo;s right to change their mind starts when the parcel arrives, so the money
            is held until that has run out. If the carrier never reports a delivery, we treat the
            item as delivered about two weeks after you posted it and start the 30 days from there,
            so a quiet carrier cannot hold your money indefinitely.
          </li>
          <li><strong>Memberships:</strong> the first charge after 14 days; renewals right away.</li>
          <li><strong>Recurring product subscriptions:</strong> the first charge after about 14 days; renewals right away.</li>
        </ul>
        <p>Two things that can affect the exact timing:</p>
        <ul>
          <li><strong>New sellers:</strong> your first payouts are held a bit longer (about 21 days) as fraud protection. This eases to the normal schedule once you verify your identity with Stripe and complete a few clean sales.</li>
          <li><strong>Minimum payout:</strong> a small minimum (about &euro;10) applies. Balances below it add up and are released once they reach the minimum, or after 30 days at the latest.</li>
        </ul>
        <p>
          <strong>Getting the money into your bank is a second, separate step, and it is yours to
          control.</strong> Cobuntu releases your earnings into your own Stripe account. Stripe then
          transfers that balance to your bank on the payout schedule set on <em>your</em> Stripe
          account. You own that setting. If it is set to manual, Stripe will hold the balance until
          you request a payout yourself, and it can sit there indefinitely. Cobuntu does not set,
          change, or monitor that schedule, and cannot tell you when money reached your bank. Amounts
          and dates shown in Cobuntu describe the release into your Stripe account, not a bank
          credit, so they will not line up with your bank statement. Check your Stripe dashboard for
          bank payout status and to change your schedule.
        </p>
        <p>
          If a refund or chargeback comes in <strong>after</strong> you have already been paid (a late
          card chargeback, for example), that amount comes back out of your next payouts. If it is more
          than your upcoming payouts cover, it becomes a balance you owe until it is settled. The holds
          above are there to make this rare, but a bank chargeback can still arrive months later.
        </p>
      </section>

      <section>
        <h2>Posting physical items (for sellers)</h2>
        <p>
          Cobuntu does not hold stock. You pack the item and post it yourself, and you set the
          postage price on the listing, which the buyer pays on top of the item price. We never
          take a commission on postage.
        </p>
        <ul>
          <li>
            <strong>You have 5 working days to post it.</strong> After that the order is cancelled
            and the buyer is refunded in full, automatically. We email you when the sale happens and
            again when the deadline is close.
          </li>
          <li>
            <strong>Add the tracking number</strong> to the order once you have posted it. It is how
            the buyer follows the parcel, and how we know it arrived, which is what starts the clock
            on paying you.
          </li>
          <li>
            <strong>You post within your own country</strong> for now. The buyer can only enter a
            delivery address in the country your account is registered in.
          </li>
          <li>
            If you can no longer send an item, refund the buyer from the order rather than letting
            the deadline pass.
          </li>
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
