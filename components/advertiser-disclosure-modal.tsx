"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
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
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Funding &amp; editorial independence</h2>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/15">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Partner links</h3>
              <p className="text-sm sm:text-base text-gray-700">
                We publish comparisons — we are not a casino. If you open a tracked link and later register or deposit,
                the operator may pay us a referral fee. That is how we keep the guide free to read.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">How rankings stay fair</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Fees do not buy top placement. Every brand is scored on the same pillars, including:
              </p>
              <ul className="text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                <li>Visible licence and complaint routes</li>
                <li>Readable bonus rules and realistic wagering</li>
                <li>Slots, tables, live studios, and stream stability</li>
                <li>Payment methods Irish players actually use</li>
                <li>Mobile usability, support speed, and safer-gambling tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Offers change fast</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Headline numbers and screenshots age quickly. Always confirm the live promo page on the operator&apos;s
                site before opting in. We label commercial relationships so funding never feels hidden.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-casino-forest">Your responsibility</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Our notes do not replace the casino&apos;s house rules. Check ID checks, payment limits, and country
                gates with the brand directly — and only stake money you are comfortable losing.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-t border-red-200 p-3 sm:p-4 rounded-b-lg flex-shrink-0">
          <p className="text-red-800 font-semibold text-center text-sm">
            18+ | Irish residents only | Casino play carries risk - stay within personal limits.
          </p>
        </div>
      </div>
    </div>
  )
}
