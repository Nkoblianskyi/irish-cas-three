"use client"

import { CasinoSiteCard } from "./casino-site-card"
import { HorizontalBanner } from "./horizontal-banner"
import type { BettingSite, HorizontalBanner as HorizontalBannerType } from "../types"

interface SitesListProps {
  sites: BettingSite[]
  banners: HorizontalBannerType[]
}

export function SitesList({ sites, banners }: SitesListProps) {
  return (
    <div className="space-y-2 w-full">
      {sites.map((site: BettingSite, index: number) => (
        <div key={site.id} className="w-full">
          <CasinoSiteCard site={site} rank={index + 1} />
          {/* Банер після 3-го елемента */}
          {index === 2 && banners[0] && (
            <div className="my-3 w-full">
              <HorizontalBanner banner={banners[0]} />
            </div>
          )}
          {/* Банер після 6-го елемента */}
          {/* {index === 5 && (
            <div className="my-3 w-full">
              <HorizontalBanner banner={horizontalBanners[1]} />
            </div>
          )} */}
        </div>
      ))}
    </div>
  )
}
