"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { COOKIE_CONSENT_KEY } from "@/lib/site-brand"

const CONSENT_KEY = COOKIE_CONSENT_KEY

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-casino-gold/30 bg-casino-forest p-4 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-casino-gold-muted/90">
            We use cookies to keep the site secure, store your consent choice, and — if you allow — measure anonymous
            readership. Optional analytics never load without your approval.
            <Link href="/privacy-policy" className="text-casino-gold hover:underline ml-1">
              Privacy policy
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleDecline}
            variant="outline"
            className="border-casino-gold/50 bg-transparent text-casino-gold-muted hover:border-irish-green/50 hover:bg-irish-green/10 hover:text-white"
          >
            Essential only
          </Button>
          <Button onClick={handleAccept} variant="irish" className="font-semibold">
            Accept all
          </Button>
        </div>
      </div>
    </div>
  )
}
