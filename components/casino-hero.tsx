"use client"
import { Shield, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface CasinoHeroProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

const AGGREGATOR_DISCLAIMER =
  "We compare licensed online casino websites for Ireland — we publish research and offers; we do not run games, take bets, or hold player funds."

const HERO_GRADIENT =
  "linear-gradient(148deg, rgba(10,31,24,0.96) 0%, rgba(15,46,36,0.94) 42%, rgba(26,122,82,0.22) 100%)"

const HERO_TITLE = (
  <>
    Top <span className="text-irish-green">Online Casino </span>Sites for{" "}
    <span className="text-casino-gold">Ireland</span>
  </>
)

function HeroDisclaimer({ variant }: { variant: "lg" | "md" | "sm" }) {
  return (
    <div
      role="note"
      aria-label="Important notice"
      className={cn(
        "mx-auto border-l-[3px] border-casino-gold bg-gradient-to-r from-casino-shamrock/15 to-transparent py-1.5 pl-3 pr-2 text-left shadow-[inset_0_0_0_1px_rgba(201,162,39,0.08)] rounded-r-xl",
        variant === "lg" && "mt-1 max-w-2xl lg:mt-1.5 lg:max-w-3xl lg:py-2 lg:pl-3.5",
        variant === "md" && "mt-1 max-w-md md:max-w-lg md:pl-3.5",
        variant === "sm" && "mt-0.5 max-w-[18.5rem] py-1 pl-2.5 pr-1.5"
      )}
    >
      <p
        className={cn(
          "font-bold uppercase tracking-[0.12em] text-casino-gold",
          variant === "sm" ? "text-[7px] mb-px" : "text-[8px] mb-0.5 md:text-[9px] lg:text-[10px]"
        )}
      >
        Please note
      </p>
      <p
        className={cn(
          "text-pretty font-semibold leading-snug text-casino-gold-muted/95",
          variant === "sm" && "text-[9px] leading-tight",
          variant === "md" && "text-[10px] md:text-[11px] md:leading-snug",
          variant === "lg" && "text-[11px] leading-snug lg:text-xs xl:text-[13px] xl:leading-snug"
        )}
      >
        {AGGREGATOR_DISCLAIMER}
      </p>
    </div>
  )
}

export function CasinoHero({ onAdvertiserModalOpen, onTermsModalOpen }: CasinoHeroProps) {
  const getCurrentMonthYear = () => {
    const now = new Date()
    const monthNames = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ]
    return `${monthNames[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <>
      <div
        className="hidden lg:block relative overflow-hidden text-white mb-2 w-full min-h-[268px] border-b border-casino-gold/30 lg:min-h-[300px] rounded-b-2xl"
        style={{ background: HERO_GRADIENT }}
      >
        <div className="flex h-full min-h-[inherit] flex-col justify-between gap-1 px-1 py-3 text-center xl:px-8 lg:py-4">
          <div className="space-y-0.5">
            <h1 className="text-lg font-bold drop-shadow-lg lg:text-[38px] xl:text-[40px] 2xl:text-[40px]">
              {HERO_TITLE}
            </h1>
            <h2 className="text-[28px] font-bold leading-tight text-casino-gold-muted/95 lg:text-[30px] xl:text-[32px]">
              ONLINE GUIDE UPDATED — {getCurrentMonthYear()}
            </h2>
            <HeroDisclaimer variant="lg" />
          </div>

          <div className="mx-auto max-w-4xl space-y-1 lg:space-y-1.5">
            <p className="text-[11px] leading-snug text-white/88 lg:text-xs xl:text-sm xl:leading-snug">
              Best Casinos IE reviews regulated online casino sites Irish adults can join from home — welcome bonuses,
              slot libraries, live dealer streams, mobile apps, and how fast winnings reach your bank or e-wallet.
            </p>
            <p className="text-[11px] leading-snug text-white/82 lg:text-xs xl:text-sm xl:leading-snug">
              Every featured promo is explained in plain language so you can compare digital operators before creating a
              new online account.
            </p>
            <p className="text-[10px] text-casino-gold-muted/75 lg:text-[11px] lg:text-casino-gold-muted/80 xl:text-xs">
              *Internet-only play. Promo rules vary by brand. New players only where stated. 18+.
            </p>
          </div>

          <div className="space-y-1.5 lg:space-y-2">
            <div className="flex flex-nowrap items-center justify-center gap-2 lg:gap-4 xl:gap-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <Shield className="h-3 w-3 text-casino-gold lg:h-4 lg:w-4" />
                <span className="text-[10px] font-bold lg:text-xs xl:text-sm">Licensed sites</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <div className="flex gap-0.5" title="Ireland">
                  <div className="h-1.5 w-2 bg-irish-green lg:h-2 lg:w-3" />
                  <div className="h-1.5 w-2 bg-white/95 lg:h-2 lg:w-3" />
                  <div className="h-1.5 w-2 bg-irish-orange lg:h-2 lg:w-3" />
                </div>
                <span className="text-[10px] font-bold text-casino-gold-muted/95 lg:text-xs xl:text-sm">IE focus</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <Clock className="h-3 w-3 text-casino-gold lg:h-4 lg:w-4" />
                <span className="text-[10px] font-bold lg:text-xs xl:text-sm">Fast withdrawals</span>
              </div>
              <div className="flex items-center gap-1 lg:gap-2">
                <span
                  aria-label="18 plus only"
                  className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-casino-ruby bg-white text-[8px] font-black text-casino-ruby shadow-[0_2px_6px_rgba(196,30,58,0.4)] lg:h-6 lg:w-6 lg:text-[9px]"
                >
                  18+
                </span>
                <span className="text-[10px] font-bold text-casino-ruby lg:text-xs xl:text-sm">Adults only</span>
              </div>
            </div>

            <div className="text-[9px] leading-tight text-white/72 lg:text-[10px] xl:text-xs">
              Play online for entertainment only. Wagering and eligibility rules apply.
              <button
                type="button"
                onClick={onAdvertiserModalOpen}
                className="ml-1 underline transition-colors hover:text-casino-gold"
              >
                How we earn
              </button>
              <span> | </span>
              <button type="button" onClick={onTermsModalOpen} className="underline transition-colors hover:text-casino-gold">
                18+ terms
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden md:block lg:hidden relative min-h-[198px] w-full overflow-hidden border-b border-casino-gold/30 text-white md:min-h-[214px] rounded-b-xl"
        style={{ background: HERO_GRADIENT }}
      >
        <div className="flex h-full min-h-[inherit] flex-col justify-between gap-1.5 px-4 py-2.5 text-center md:px-6 md:py-3">
          <div className="space-y-0.5">
            <h1 className="text-xl font-bold md:text-2xl">{HERO_TITLE}</h1>
            <h2 className="text-base font-bold text-casino-gold-muted/95 md:text-lg">ONLINE — {getCurrentMonthYear()}</h2>
            <HeroDisclaimer variant="md" />
          </div>

          <p className="px-1 text-[10px] leading-snug text-white/86 md:text-[11px] md:leading-snug">
            We rank Irish-facing online casinos on bonuses, game choice, mobile apps, and whether digital withdrawals
            reach your account without unnecessary delays.
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-3 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="h-4 w-4 text-casino-gold md:h-5 md:w-5" />
              <span className="text-xs font-bold md:text-sm">Licensed</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <div className="flex gap-0.5 md:gap-1" title="Ireland">
                <div className="h-1.5 w-2 bg-irish-green md:h-2 md:w-3" />
                <div className="h-1.5 w-2 bg-white/95 md:h-2 md:w-3" />
                <div className="h-1.5 w-2 bg-irish-orange md:h-2 md:w-3" />
              </div>
              <span className="text-xs font-bold md:text-sm">IE</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="h-4 w-4 text-casino-gold md:h-5 md:w-5" />
              <span className="text-xs font-bold md:text-sm">Fast payouts</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <span
                aria-label="18 plus only"
                className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-casino-ruby bg-white text-[8px] font-black text-casino-ruby shadow-[0_2px_6px_rgba(196,30,58,0.4)] md:h-6 md:w-6 md:text-[9px]"
              >
                18+
              </span>
              <span className="text-xs font-bold text-casino-ruby md:text-sm">18+</span>
            </div>
          </div>

          <div className="text-[10px] text-white/75 md:text-xs">
            Internet-only. Bonus T&amp;Cs apply.
            <button type="button" onClick={onAdvertiserModalOpen} className="ml-1 underline hover:text-casino-gold">
              Disclosure
            </button>
            <span> | </span>
            <button type="button" onClick={onTermsModalOpen} className="underline hover:text-casino-gold">
              Terms
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative mb-1 min-h-[138px] w-full overflow-hidden rounded-2xl border border-casino-gold/35 text-white md:hidden"
        style={{
          backgroundImage: "url(/bg-7.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-casino-velvet/95 via-casino-forest/80 to-casino-shamrock/25" />

        <div className="relative z-10 flex min-h-[inherit] flex-col">
          <div className="flex flex-1 flex-col justify-between gap-1 px-2 py-1.5 text-center">
            <div className="space-y-0.5">
              <h1 className="text-[15px] font-bold leading-tight drop-shadow-lg">{HERO_TITLE}</h1>
              <h2 className="text-[10px] font-bold leading-tight text-casino-gold-muted/95">{getCurrentMonthYear()}</h2>
              <HeroDisclaimer variant="sm" />
            </div>

            <div className="flex flex-nowrap items-end justify-center gap-2">
              <div className="flex flex-col items-center">
                <Shield className="mb-0.5 h-3 w-3 text-casino-gold" />
                <span className="text-[7px] font-bold leading-none">Licensed</span>
              </div>
              <div className="mt-0.5 flex flex-col items-center">
                <div className="mb-0.5 flex gap-0.5" title="Ireland">
                  <div className="h-2 w-1 bg-irish-green" />
                  <div className="h-2 w-1 bg-white/95" />
                  <div className="h-2 w-1 bg-irish-orange" />
                </div>
                <span className="text-[7px] font-bold leading-none mt-0.5">IE</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="mb-0.5 h-3 w-3 text-casino-gold" />
                <span className="text-[7px] font-bold leading-none">Payouts</span>
              </div>
              <div className="flex flex-col items-center">
                <span
                  aria-label="18 plus only"
                  className="mb-0.5 flex h-3 w-3 items-center justify-center rounded-full border border-casino-ruby bg-white text-[5px] font-black text-casino-ruby"
                >
                  18+
                </span>
                <span className="text-[7px] font-bold leading-none text-casino-ruby">18+</span>
              </div>
            </div>

            <div className="text-[6.5px] leading-tight text-white/78">
              <div>18+. Online play only. Promo rules apply.</div>
              <div>
                <button type="button" onClick={onAdvertiserModalOpen} className="underline hover:text-casino-gold">
                  Disclosure
                </button>
                <span> | </span>
                <button type="button" onClick={onTermsModalOpen} className="underline hover:text-casino-gold">
                  T&amp;Cs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
