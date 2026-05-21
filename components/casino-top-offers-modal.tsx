"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BettingSite } from "../types"
import { AffiliateLink } from "./affiliate-link"

interface CasinoTopOffersModalProps {
  sites: BettingSite[]
}

export function CasinoTopOffersModal({ sites }: CasinoTopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedTerms, setExpandedTerms] = useState<{ [key: number]: boolean }>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  // Змінюємо порядок: центр (1-й), ліва (2-й), права (3-й)
  const top3Sites = sites.slice(0, 3)
  const reorderedSites = [
    top3Sites[1], // 2-й сайт (BetVictor) - ліва позиція
    top3Sites[0], // 1-й сайт (Novibet) - центральна позиція
    top3Sites[2], // 3-й сайт (Midnite) - права позиція
  ]

  const toggleTerms = (siteId: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedTerms((prev) => ({
      ...prev,
      [siteId]: !prev[siteId],
    }))
  }

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/80 backdrop-blur-sm z-50 items-center justify-center p-4">
      {/* Close button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-black hover:bg-gray-200 z-10 w-10 h-10 p-0 rounded-full bg-white/90"
      >
        <X className="w-8 h-8 font-bold" />
      </Button>

      <div className="w-full max-w-6xl">
        {/* Title */}
        <div className="text-center mb-2 md:mb-2">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
            Tonight&apos;s <span className="text-casino-gold">Standout</span> Irish Casinos
          </h2>
        </div>

        {/* Desktop Layout (1024px+) */}
        <div className="hidden lg:flex items-center justify-center gap-0 w-full px-4 pb-2">
          {reorderedSites.map((site: BettingSite, index: number) => {
            // index 1 = центральна позиція (найбільша)
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden ${isCenter
                    ? "w-[357px] border-4 border-casino-gold shadow-casino-glow rounded-lg relative z-20"
                    : "w-[255px] border-4 border-white rounded-lg relative z-10"
                  } ${expandedTerms[site?.id] ? "h-auto" : isCenter ? "h-[386px]" : "h-[370px]"}`}
              >
                {/* White header section */}
                <div
                  className={`bg-white ${isCenter ? "h-[115px]" : "h-[109px]"} flex items-center justify-center p-4`}
                  style={{
                    borderTopLeftRadius: "calc(0.5rem - 4px)",
                    borderTopRightRadius: "calc(0.5rem - 4px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-18 w-auto object-contain"
                  />
                </div>

                {/* Black content section */}
                <div
                  className={`bg-black text-white ${expandedTerms[site?.id] ? "min-h-[267px]" : isCenter ? "h-[267px]" : "h-[255px]"
                    } flex flex-col p-4 text-center`}
                  style={{
                    borderBottomLeftRadius: "calc(0.5rem - 4px)",
                    borderBottomRightRadius: "calc(0.5rem - 4px)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mt-4 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Offer text */}
                  <div className="flex-1 flex flex-col justify-center mb-3">
                    <div className={` ${isCenter ? "text-2xl" : "text-xl"} font-bold mb-2`}>{site?.bonus}</div>
                    <div className={` ${isCenter ? "text-2xl" : "text-xl"}`}>{site?.welcomeOffer}</div>
                  </div>

                  {/* Button */}
                  <div className="mb-2">
                    <AffiliateLink
                      brandUrl={site?.link || "#"}
                      slug={site?.slug || ""}
                      rel="nofollow noopener sponsored referrer"
                    >
                      <Button variant="irish" className="w-full rounded-md px-4 py-2 text-sm font-bold">
                        CLAIM OFFER
                      </Button>
                    </AffiliateLink>
                  </div>

                  {/* Terms */}
                  <div className="text-[9px] text-gray-300 leading-tight text-center">{site?.terms}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tablet Layout (768px - 1023px) */}
        <div className="hidden md:flex lg:hidden items-center justify-center gap-0 w-full px-2">
          {reorderedSites.map((site: BettingSite, index: number) => {
            const isCenter = index === 1

            return (
              <div
                key={site?.id || index}
                className={`overflow-hidden ${isCenter
                    ? "w-[240px] border-4 border-casino-gold shadow-casino-glow rounded-lg relative z-20"
                    : "w-[180px] border-4 border-white rounded-lg relative z-10"
                  } ${expandedTerms[site?.id] ? "h-auto" : isCenter ? "h-[280px]" : "h-[260px]"}`}
              >
                {/* White header section */}
                <div
                  className={`bg-white ${isCenter ? "h-[80px]" : "h-[75px]"} flex items-center justify-center p-3`}
                  style={{
                    borderTopLeftRadius: "calc(0.5rem - 3px)",
                    borderTopRightRadius: "calc(0.5rem - 3px)",
                  }}
                >
                  <img
                    src={site?.logo || "/placeholder.svg"}
                    alt={site?.name || "Site"}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                {/* Black content section */}
                <div
                  className={`bg-black text-white ${expandedTerms[site?.id] ? "min-h-[200px]" : isCenter ? "h-[200px]" : "h-[185px]"
                    } flex flex-col p-3 text-center`}
                  style={{
                    borderBottomLeftRadius: "calc(0.5rem - 3px)",
                    borderBottomRightRadius: "calc(0.5rem - 3px)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Offer text */}
                  <div className="flex-1 flex flex-col justify-center mb-1">
                    <div className={` ${isCenter ? "text-lg" : "text-base"} font-bold mb-1`}>{site?.bonus}</div>
                    <div className={` ${isCenter ? "text-lg" : "text-base"}`}>{site?.welcomeOffer}</div>
                  </div>

                  {/* Button */}
                  <div className="mb-1">
                    <AffiliateLink
                      brandUrl={site?.link || "#"}
                      slug={site?.slug || ""}
                      rel="nofollow noopener sponsored referrer"
                    >
                      <Button variant="irish" className="w-full rounded-md px-3 py-1.5 text-xs font-bold">
                        CLAIM OFFER
                      </Button>
                    </AffiliateLink>
                  </div>

                  {/* Terms */}
                  <div className="text-[8px] text-gray-300 leading-tight text-center">{site?.terms}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer text */}
        <div className="text-center mt-4 md:mt-8">
          <p className="text-white text-xs md:text-sm">
            18+. T&C's apply. <span className="underline">Begambleaware.org</span>. Play responsibly.
          </p>
        </div>
      </div>
    </div>
  )
}
