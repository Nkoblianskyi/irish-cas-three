import { SiteDocumentPage } from "@/components/site-document-page"
import { SITE_NAME } from "@/lib/site-brand"
import { aboutMetadata } from "@/lib/seo"

export const metadata = aboutMetadata

export default function AboutPage() {
  return (
    <SiteDocumentPage
      title={`About ${SITE_NAME}`}
      description="Independent casino research for adults in Ireland"
    >
      <div className="prose prose-lg max-w-none">
        <div className="not-prose mb-8 rounded-2xl border border-casino-gold/25 bg-gradient-to-br from-emerald-50/80 to-amber-50/60 p-5 md:p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-casino-forest px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-casino-gold">
              Affiliate comparison site
            </span>
          </div>
          <p className="leading-relaxed text-gray-800 md:text-[15px]">
            <strong>{SITE_NAME} is an independent affiliate guide</strong> to licensed casino operators
            serving players in Ireland. We do not host games, accept wagers, process payments, run KYC checks, or hold
            customer funds. Access is free because we may receive commission (CPA or revenue share) when readers join an
            operator via our links. Commercial ties never override ranking order — scores follow editorial criteria such
            as licensing clarity, offer transparency, payout behaviour, and day-to-day lobby quality.
          </p>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-casino-forest">Why this site exists</h2>
        <p className="mb-6 leading-relaxed text-gray-700">
          Marketing noise makes every casino look identical. We built {SITE_NAME} to document what actually
          matters: how bonuses behave in practice, whether game libraries stay fresh, how friction-free cashiers feel, and
          whether responsible-gambling tools are visible — without pretending risk disappears.
        </p>

        <h2 className="mb-4 text-2xl font-bold text-casino-forest">What goes into every score</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Each review uses the same scorecard so month-to-month rankings stay comparable. Flashy banners alone never earn
          a spot on the list.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-casino-forest">Scorecard pillars</h3>
        <div className="mb-6 rounded-xl border border-casino-gold/20 bg-emerald-50/70 p-6">
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Regulatory footprint:</strong> who licenses the product you actually use
            </li>
            <li>
              <strong>Player safeguards:</strong> deposit caps, cool-off flows, and self-exclusion access
            </li>
            <li>
              <strong>Game breadth:</strong> slots, tables, live studios, and titles worth an Irish audience
            </li>
            <li>
              <strong>Promotion honesty:</strong> how clearly rollover and exclusions are explained
            </li>
            <li>
              <strong>Banking:</strong> withdrawal speed, fees, and wallet or card coverage
            </li>
            <li>
              <strong>Support:</strong> live chat quality, email follow-up, and dispute paths
            </li>
            <li>
              <strong>Mobile craft:</strong> install weight, biometric login, portrait usability
            </li>
            <li>
              <strong>Live reliability:</strong> stream stability, dealer professionalism, bet timing
            </li>
          </ul>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-casino-forest">How we work in the field</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Researchers open real accounts, complete KYC when required, place modest deposits, and request withdrawals at
          realistic amounts. Notes reflect ordinary player journeys — not operator press kits.
        </p>

        <div className="mb-6 rounded-xl border border-casino-shamrock/25 bg-casino-forest/5 p-6">
          <h4 className="mb-3 font-semibold text-casino-ruby-deep">Field checklist</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Sign-up flow and document uploads</li>
            <li>• Bonus activation and wagering contribution</li>
            <li>• Slot stability and RTP disclosure</li>
            <li>• Live-table pacing and chat moderation</li>
            <li>• Cashier pending periods and manual reviews</li>
            <li>• In-product responsible-gambling prompts</li>
          </ul>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-casino-forest">Independence, plainly stated</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Affiliate fees keep the editorial desk running. They do not automatically promote a weak brand — slow payouts,
          opaque terms, or poor support still drag scores down.
        </p>

        <h3 className="mb-3 text-xl font-semibold text-casino-forest">Commitments to readers</h3>
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-casino-gold/15 bg-emerald-50/60 p-4">
            <h4 className="mb-2 font-semibold text-casino-ruby-deep">Transparency</h4>
            <p className="text-sm text-gray-700">We explain how lists are built and how partners participate.</p>
          </div>
          <div className="rounded-xl border border-casino-gold/15 bg-emerald-50/60 p-4">
            <h4 className="mb-2 font-semibold text-casino-ruby-deep">Freshness</h4>
            <p className="text-sm text-gray-700">Material rule or fee changes trigger a new pass on affected brands.</p>
          </div>
          <div className="rounded-xl border border-casino-gold/15 bg-emerald-50/60 p-4">
            <h4 className="mb-2 font-semibold text-casino-ruby-deep">Safety first</h4>
            <p className="text-sm text-gray-700">We do not glamorise loss-chasing or guaranteed wins.</p>
          </div>
          <div className="rounded-xl border border-casino-gold/15 bg-emerald-50/60 p-4">
            <h4 className="mb-2 font-semibold text-casino-ruby-deep">Human sign-off</h4>
            <p className="text-sm text-gray-700">Tools assist research; editors approve every published score.</p>
          </div>
        </div>

        <h2 className="mb-4 text-2xl font-bold text-casino-forest">Safer play is mandatory</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Casino play should stay optional entertainment. Featured brands must offer limit controls, cooling-off options,
          and links to counselling networks without hiding them in footnotes.
        </p>
        <ul className="mb-6 space-y-1 text-gray-700">
          <li>• Loss and time reminders before you stake</li>
          <li>• Visible routes to national helplines</li>
          <li>• Strict age gates and identity checks</li>
          <li>• Bonus contracts written in plain language</li>
        </ul>

        <h2 className="mb-4 text-2xl font-bold text-casino-forest">Staying current</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          iGaming shifts weekly: studios launch, regulators tweak ad rules, cashback offers vanish overnight. When we
          miss an update, we revise the note once facts are confirmed.
        </p>

        <p className="mb-6 leading-relaxed text-gray-700">
          The aim is straightforward — give Irish adults structured context before they share card details with a new
          casino.
        </p>

        <div className="mt-8 rounded-xl border-l-4 border-casino-ruby bg-red-50 p-6">
          <h3 className="mb-3 font-bold text-red-900">Important</h3>
          <p className="mb-2 text-red-800">
            Gambling is not a financial strategy. If stakes feel compulsory, pause and contact a qualified support
            service.
          </p>
          <p className="text-red-800">Recovery is possible; reaching out early helps you and those close to you.</p>
        </div>
      </div>
    </SiteDocumentPage>
  )
}
