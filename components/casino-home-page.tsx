"use client"

import { useState } from "react"
import { CasinoTopOffersModal } from "./casino-top-offers-modal"
import { CookieBanner } from "./cookie-banner"
import { CasinoGuideSections } from "./casino-guide-sections"
import { AdvertiserDisclosureModal } from "./advertiser-disclosure-modal"
import { TermsModal } from "./terms-modal"
import { casinoSites, horizontalCasinoBanners } from "../data/mock-data"
import { CasinoMarquee } from "./casino-marquee"
import { CasinoHero } from "./casino-hero"
import { MainLayout } from "./main-layout"
import { SitesList } from "./sites-list"
import { AboutPreview } from "./about-preview"

export default function CasinoHomePage() {
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  return (
    <>
      <MainLayout>
        <CasinoHero
          onAdvertiserModalOpen={() => setIsAdvertiserModalOpen(true)}
          onTermsModalOpen={() => setIsTermsModalOpen(true)}
        />
        
        <SitesList sites={casinoSites} banners={horizontalCasinoBanners} />

        <AboutPreview />

        <CasinoGuideSections />
      </MainLayout>

      <CasinoTopOffersModal sites={casinoSites} />
      <CookieBanner />
      <AdvertiserDisclosureModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <TermsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </>
  )
}
