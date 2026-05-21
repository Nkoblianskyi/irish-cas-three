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
            How to Choose an Online Casino in Ireland
          </h2>

          <div className="w-full space-y-4">
            <p className="text-sm leading-relaxed text-casino-gold-muted/90">
              Rankings only help when every website is scored the same way. We check licence visibility, how clear bonus
              rules read online, depth of slots and live dealer games, app stability, and whether withdrawals match what
              the payment page promises.
            </p>
            <p className="text-sm leading-relaxed text-casino-gold-muted/90">
              Before your first deposit, confirm you can register from Ireland on the web or app, that your card or
              e-wallet works, and that any free-spin or match offer fits your usual stake — a loud banner rarely tells
              the full story.
            </p>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">How we test each online brand</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Researchers follow one digital playbook: game catalogue freshness, bet limits on live games, stream lag,
                KYC uploads, support chat, and whether promo pages survive a close read in the browser.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                That keeps scores fair for readers who care about fast cash-outs, honest wagering math, and
                responsible-gambling tools that are easy to find in the account menu — not buried three clicks deep.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Match the site to how you play online</h3>
              <p className="mb-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Heavy slot sessions, Friday live roulette streams, and quick mobile spins rarely need the same platform.
                Start with the games you open first, then check which shortlisted online casino counts them fairly toward
                bonus wagering.
              </p>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Note expiry timers, max-bet caps during rollover, and whether jackpots or live dealer games contribute
                before you opt in.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Tournament fans should look for missions in the app; live game fans should verify digital bet spreads;
                phone-first players should test portrait layout and login on their own device.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Read welcome offers on screen</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                A useful package aligns with your budget. Compare minimum deposits, spin values, excluded games, and any
                cap on withdrawable winnings shown in the promo terms.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Strong online operators explain forfeiture mid-wager, how bonus cash stacks against real balance, and
                which titles count at 100% — vague wording is a warning sign.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Licence and player protection online</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Oversight exists to keep player funds segregated, marketing honest, and minors off gambling websites. We
                favour brands that surface deposit limits, cool-off periods, and reality checks without a scavenger hunt.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                When comparing Irish-market online casinos, look for published licence references, clear dispute routes,
                and support teams that actually unblock KYC or payment issues in your account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Software, streams, and site speed</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Two websites can host the same game providers yet feel different. We log load times, search quality,
                filter depth, and whether live dealer streams stay sharp on mobile data.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                The smoothest online experiences pair crisp thumbnails with stable launches, sensible favourites lists,
                and touch controls that forgive an occasional mis-tap.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-bold text-casino-gold">Play online with a long view</h3>
              <p className="text-sm leading-relaxed text-casino-gold-muted/90">
                Sustainable sessions beat chasing losses on screen. Set a bankroll before you spin, log out when the fun
                fades, and never treat promotions as wages.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90">
                Picking a reputable online casino matters — discipline matters more. Bonuses should inform your choice,
                not push you past comfortable spend.
              </p>
            </div>
          </div>

          <div className="mt-8 w-full border-t border-casino-gold/25 pt-4">
            <div className="text-xs leading-relaxed text-casino-gold-muted/70">
              <p className="mb-2">
                EDITORIAL CONTENT. FEATURED ONLINE CASINOS AND PROMOTIONS ARE FOR IRISH ADULTS AGED 18+ ONLY.
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
