"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-brand"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[90vh] flex flex-col border border-casino-gold/25 shadow-casino-glow">
        <div
          className="text-white p-4 sm:p-6 rounded-t-lg flex-shrink-0 border-b border-casino-gold/30"
          style={{
            background: "linear-gradient(120deg, #0A1F18 0%, #0F2E24 55%, #1A7A52 140%)",
          }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold">Visitor terms (summary)</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/15">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Using {SITE_DOMAIN}</h3>
              <p className="text-sm sm:text-base text-gray-700">
                By staying on this website you agree to these visitor terms. They govern informational use of{" "}
                {SITE_NAME} and do not replace the legal contracts you accept with any third-party online casino website.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Age gate</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Content discusses real-money online gaming and is meant strictly for users aged 18 or older. If you are not
                of legal age in your jurisdiction, leave the site immediately.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Responsible play</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">We advocate measured entertainment:</p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Budget online casino play like any other leisure expense</li>
                <li>Use operator limits before sessions get emotional</li>
                <li>Never borrow funds to chase a jackpot narrative</li>
                <li>Pause when sessions blur together or stop feeling fun</li>
                <li>Reach out to specialist helplines if control slips</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Accuracy &amp; updates</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Bonus mechanics, game catalogues, and payment rails change without warning. We refresh articles when
                material differences appear, yet you should always confirm numbers on the operator&apos;s live site.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">External destinations</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Outbound links leave {SITE_NAME}. We are not responsible for third-party policies, bonus engines, or
                account decisions made after you click through.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Liability</h3>
              <p className="text-sm sm:text-base text-gray-700">
                {SITE_NAME} provides opinions and structured research, not financial or legal advice. We are not liable
                for losses arising from reliance on editorial summaries or outdated promotional text.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Helpful contacts</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">If casino play stops feeling recreational:</p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>
                  <strong>GambleAware:</strong> https://www.gambleaware.org
                </li>
                <li>
                  <strong>GamCare:</strong> https://www.gamcare.org.uk
                </li>
                <li>
                  <strong>Gamblers Anonymous:</strong> https://www.gamblersanonymous.org.uk
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ | Bonus wagering &amp; operator T&amp;Cs apply | Keep play recreational
          </p>
        </div>
      </div>
    </div>
  )
}
