import { SiteDocumentPage } from "@/components/site-document-page"
import { Shield, Clock, AlertTriangle, Phone, Globe } from "lucide-react"
import { responsibleGamingMetadata } from "@/lib/seo"

export const metadata = responsibleGamingMetadata

export default function ResponsibleGamingPage() {
  return (
    <SiteDocumentPage
      title="Responsible gaming"
      description="Safer online casino play for Irish adults — limits, warning signs, and support"
    >
      <div className="prose prose-lg max-w-none">
          <div className="not-prose flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-casino-gold/35 bg-casino-gold/10">
              <Shield className="w-9 h-9 text-casino-gold" aria-hidden />
            </div>
          </div>

          <div className="not-prose bg-red-50 border-l-4 border-casino-ruby p-6 mb-8 rounded-r-lg">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-casino-ruby mr-3 shrink-0" />
              <h2 className="text-red-900 font-bold text-xl mb-0">Read this first</h2>
            </div>
            <p className="text-red-800 mb-2">
              Online casino games are designed for entertainment. The moment play on a website or app strains your budget,
              mood, or relationships, pause and reach for structured help — early action prevents deeper harm.
            </p>
            <p className="text-red-800 font-semibold">Support lines are confidential and staffed by trained listeners.</p>
          </div>

          <h2 className="text-2xl font-bold text-casino-velvet mb-4">Ground rules that work</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Responsible online play is not about abstaining by default — it is about deciding limits while you are calm and
            sticking to them when adrenaline shows up on screen. Treat every session as a closed loop with a fixed ticket
            price.
          </p>

          <h3 className="text-xl font-semibold text-casino-velvet mb-3">Practical habits</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-amber-50/80 border border-casino-gold/20 p-4 rounded-lg">
              <h4 className="font-semibold text-casino-ruby-deep mb-2">Time boxing</h4>
              <p className="text-gray-700 text-sm">Set a clock before you open the casino website or app; log off when it rings.</p>
            </div>
            <div className="bg-amber-50/80 border border-casino-gold/20 p-4 rounded-lg">
              <h4 className="font-semibold text-casino-ruby-deep mb-2">Bankroll honesty</h4>
              <p className="text-gray-700 text-sm">Only allocate discretionary cash - never rent or grocery money.</p>
            </div>
            <div className="bg-amber-50/80 border border-casino-gold/20 p-4 rounded-lg">
              <h4 className="font-semibold text-casino-ruby-deep mb-2">Emotional check-ins</h4>
              <p className="text-gray-700 text-sm">If you play to numb stress, close the app and switch activities.</p>
            </div>
            <div className="bg-amber-50/80 border border-casino-gold/20 p-4 rounded-lg">
              <h4 className="font-semibold text-casino-ruby-deep mb-2">No loss hunting</h4>
              <p className="text-gray-700 text-sm">Chasing refunds with bigger spins almost always deepens damage.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-casino-velvet mb-4">Signals worth taking seriously</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Harm rarely arrives overnight. Watch for combinations of the behaviours below:
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Hiding sessions or statements from people you trust</li>
            <li>• Escalating stakes to feel the same buzz</li>
            <li>• Irritability when someone interrupts play</li>
            <li>• Sleep loss or neglected responsibilities</li>
            <li>• Repeated failed attempts to cut back</li>
          </ul>

          <h2 className="text-2xl font-bold text-casino-velvet mb-4">Tools inside licensed online casinos</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Regulated online operators must provide account controls that actually block play when you need breathing room:
          </p>
          <div className="bg-casino-velvet/5 border border-casino-gold/20 p-6 rounded-lg mb-6">
            <ul className="text-gray-700 space-y-2">
              <li>
                <strong>Deposit &amp; loss caps:</strong> hard stops on fresh funding or daily red ink
              </li>
              <li>
                <strong>Reality checks:</strong> full-screen reminders of elapsed time and net position
              </li>
              <li>
                <strong>Cool-off &amp; self-exclusion:</strong> timed bans that support staff cannot override casually
              </li>
              <li>
                <strong>Game blocks:</strong> temporary removal of slot or live dealer categories in your account
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-casino-velvet mb-4">Where to turn</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The organisations below operate independently of any online casino brand. Conversations stay private unless you
            choose otherwise.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-casino-gold/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-casino-ruby mr-3" />
                <h3 className="text-lg font-semibold text-casino-velvet">GambleAware</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Education, self-assessment tools, and treatment referrals.</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Web:</strong> https://www.gambleaware.org
                </p>
                <p>
                  <strong>Helpline:</strong> 0808 8020 133
                </p>
              </div>
            </div>

            <div className="border border-casino-gold/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-casino-gold mr-3" />
                <h3 className="text-lg font-semibold text-casino-velvet">GamCare</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Chat, forums, and structured counselling pathways.</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Web:</strong> https://www.gamcare.org.uk
                </p>
                <p>
                  <strong>Helpline:</strong> 0808 8020 133
                </p>
              </div>
            </div>

            <div className="border border-casino-gold/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-casino-ruby mr-3" />
                <h3 className="text-lg font-semibold text-casino-velvet">Gamblers Anonymous</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Peer meetings built around shared recovery goals.</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Web:</strong> https://www.gamblersanonymous.org.uk
                </p>
              </div>
            </div>

            <div className="border border-casino-gold/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-casino-gold mr-3" />
                <h3 className="text-lg font-semibold text-casino-velvet">Gordon Moody Association</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">Residential and outreach programmes for severe gambling harm.</p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Web:</strong> https://www.gordonmoody.org.uk
                </p>
                <p>
                  <strong>Phone:</strong> 01384 241292
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-casino-velvet mb-4">Guidance for families</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If someone close to you is struggling, combine empathy with boundaries:
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• Acknowledge the issue without shaming</li>
            <li>• Point toward professional services instead of policing every device</li>
            <li>• Avoid co-signing loans that refill an online casino account</li>
            <li>• Protect your own mental health through counselling if needed</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-casino-gold p-6 mb-8">
            <h3 className="text-casino-ruby-deep font-bold mb-3">Remember</h3>
            <p className="text-gray-800 mb-2">
              Problem gambling is a health condition with evidence-based treatments - not a moral failure.
            </p>
            <p className="text-gray-800">Asking for help is a sign of strength, especially when done early.</p>
          </div>

          <h2 className="text-2xl font-bold text-casino-velvet mb-4">Our editorial stance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Best Casinos IE only highlights online operators that surface responsible-gambling tools prominently in the
            website or app and communicate risk honestly. Glamourising unchecked play contradicts our mission.
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li>• We refuse copy that promises guaranteed wins</li>
            <li>• We cross-check safer-gambling UX during every review cycle</li>
            <li>• We link to independent charities alongside commercial content</li>
          </ul>

          <div className="text-center mt-8 p-6 bg-casino-velvet/5 rounded-lg border border-casino-gold/20">
            <h3 className="text-xl font-bold text-casino-velvet mb-4">Need to talk now?</h3>
            <p className="text-gray-700 mb-4">
              National helplines operate around the clock. You can remain anonymous and hang up whenever you need to.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-casino-ruby">National Gambling Helpline: 0808 8020 133</p>
              <p className="text-sm text-gray-600">Free, confidential, 24 hours a day</p>
            </div>
          </div>
        </div>
    </SiteDocumentPage>
  )
}
