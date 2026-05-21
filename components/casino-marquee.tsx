"use client"

const MARQUEE_ITEMS = [
  { id: "1", line: "Live dealer streams — HD roulette & blackjack online", sub: "Fresh site checks • Best Casinos IE" },
  { id: "2", line: "Jackpot trackers refreshed weekly", sub: "See which brands publish clear RTP notes" },
  { id: "3", line: "Fast KYC = faster first withdrawal", sub: "We flag casinos with streamlined verification" },
  { id: "4", line: "Slots tournaments & mission rewards", sub: "Compare wager-friendly prize structures" },
  { id: "5", line: "Mobile-first lobbies tested on real devices", sub: "Portrait layouts, biometrics, haptics" },
  { id: "6", line: "Responsible tools should be one tap away", sub: "Deposit caps • reality checks • cool-off timers" },
  { id: "7", line: "Crypto & e-wallet cashiers reviewed", sub: "Digital payout rails for Irish players" },
] as const

export function CasinoMarquee() {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="relative overflow-hidden h-[40px]">
      <div className="absolute left-0 top-0 bottom-0 right-0 overflow-hidden bg-gradient-to-r from-casino-velvet via-casino-forest to-casino-velvet border-y border-casino-gold/35 rounded-br-lg">
        <div className="casino-marquee-track h-full flex items-center pl-36">
          {loop.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 px-6 py-2 border-l border-casino-gold/30 min-w-[280px] text-center whitespace-nowrap"
            >
              <div className="font-semibold text-sm text-casino-gold-muted">{item.line}</div>
              <div className="text-xs text-white/70 mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-b from-casino-forest to-casino-shamrock text-casino-gold font-bold px-4 py-2 text-sm rounded-r-full z-10 flex items-center border border-casino-gold/40 shadow-casino-card-top">
        <div className="text-center leading-tight">
          <div className="text-[10px] uppercase tracking-widest text-casino-gold-muted">Casino</div>
          <div className="text-xs uppercase tracking-wide">Pulse</div>
        </div>
      </div>

      <style jsx>{`
        .casino-marquee-track {
          animation: casino-marquee-scroll 110s linear infinite;
          width: max-content;
        }
        @keyframes casino-marquee-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .casino-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
