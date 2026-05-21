"use client"

const SECTION_GRADIENT =
  "linear-gradient(165deg, rgba(10,31,24,0.98) 0%, rgba(15,46,36,0.96) 50%, rgba(26,122,82,0.18) 100%)"

export function CasinoGuideSections() {
  return (
    <div className="mt-16">
      <section className="relative overflow-hidden rounded-2xl border border-casino-gold/25">
        <div className="absolute inset-0" style={{ background: SECTION_GRADIENT }} />

        <div className="relative z-10 flex flex-col items-center px-4 py-6 text-center text-white lg:py-8">
          <h2 className="mb-4 text-xl font-bold text-casino-gold lg:text-2xl">
            Choosing a Casino in Ireland Without the Guesswork
          </h2>

          <div className="w-full space-y-4">
            <p className="text-sm leading-relaxed text-casino-gold-muted/90">
              Comparison tables only help when every brand is judged on the same yardstick. We weigh licence visibility,
              how readable bonus rules are, depth of slots and live tables, app stability, and whether withdrawals match
              what the cashier promises.
            </p>
            <p className="text-sm leading-relaxed text-casino-gold-muted/90">
              Before you deposit, confirm you can register from Ireland, that your card or e-wallet is supported, and
              that any free-spin or match offer fits your usual stake — a loud headline rarely tells the full story.
            </p>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">How we test each brand</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Researchers follow one playbook: catalogue freshness, table limits, live-stream lag, KYC steps, support
                tone, and whether promo pages survive a close read.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                That rhythm keeps scores fair for readers who care about fast cash-outs, honest wagering math, and
                responsible-gambling tools that are easy to find — not buried three menus deep.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Match the venue to how you play</h3>
              <p className="mb-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Heavy slot sessions, Friday roulette, and quick mobile spins rarely need the same product. Start with the
                games you open first, then check which shortlisted casino counts them fairly toward bonus play-through.
              </p>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Note expiry timers, max-bet caps during rollover, and whether jackpots or live tables contribute before
                you opt in.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Mission hunters should look for tournaments; table fans should verify bet spreads; phone-first players
                should test portrait layout and login on their own device.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Decode welcome packages</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                A useful offer aligns with your budget. Compare minimum deposits, spin values, excluded games, and any
                cap on withdrawable winnings.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Strong operators explain forfeiture mid-wager, how bonus cash stacks against real balance, and which titles
                count at 100% — vague wording is a warning sign.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Licence and player protection</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Oversight exists to keep funds segregated, marketing honest, and minors off the floor. We favour brands that
                surface deposit limits, cool-off periods, and reality checks without a scavenger hunt.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                When comparing Irish-market casinos, look for published licence references, clear dispute routes, and
                support teams that actually unblock KYC or payment issues.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Software and live performance</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Two sites can host the same studios yet feel different. We log load times, search quality, filter depth,
                and whether live streams stay sharp on mobile data.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                The best lobbies pair crisp thumbnails with stable launches, sensible favourites lists, and controls that
                forgive an occasional mis-tap.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Play with a long view</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Sustainable sessions beat chasing losses. Set a bankroll before you spin, log off when the fun fades, and
                never treat promotions as wages.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Picking a reputable casino matters — discipline matters more. Bonuses should inform your choice, not push
                you past comfortable spend.
              </p>
            </div>
          </div>

          <div className="mt-8 w-full border-t border-casino-gold/25 pt-4">
            <div className="text-xs leading-relaxed text-casino-gold-muted/70">
              <p className="mb-2">
                EDITORIAL CONTENT. FEATURED SERVICES AND PROMOTIONS ARE FOR IRISH ADULTS AGED 18+ ONLY.
              </p>
              <p>
                ADDITIONAL ELIGIBILITY MAY APPLY — GEOCHECKS, ID VERIFICATION, AND OPERATOR-SPECIFIC EXCLUSIONS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
