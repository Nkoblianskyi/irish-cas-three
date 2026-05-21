import Link from "next/link"
import Image from "next/image"
import { SITE_DOMAIN, SITE_NAME } from "@/lib/site-brand"

const supportOrgs = [
  { href: "https://gambleaware.org/", src: "/gamble.webp", alt: "GambleAware" },
  { href: "https://gamcare.org/", src: "/gamecare.svg", alt: "GamCare" },
  { href: "https://gamblingtherapy.org/", src: "/gordon.png", alt: "Gordon Moody" },
  { href: "https://gamblersanonymous.org/", src: "/anonymos.avif", alt: "Gamblers Anonymous" },
  { href: "https://egba.org/", src: "/egba.png", alt: "EGBA" },
] as const

const exploreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/responsible-gaming", label: "Responsible Gaming" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
] as const

export function Footer() {
  return (
    <footer className="relative z-20 mt-12 border-t border-casino-gold/30 bg-gradient-to-b from-casino-forest to-casino-velvet text-white shadow-[inset_0_1px_0_rgba(201,162,39,0.12)]">
      <div className="container mx-auto max-w-5xl px-4 py-8 md:py-10">
        <section
          className="rounded-2xl border border-casino-gold/35 bg-gradient-to-b from-black/50 to-black/25 px-4 py-6 md:px-8 md:py-8 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          aria-labelledby="footer-support-heading"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="footer-support-heading"
              className="text-base font-black uppercase tracking-[0.2em] text-casino-gold md:text-lg"
            >
              Support organisations
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-casino-gold-muted/90 md:text-[15px]">
              When gambling no longer feels optional, these charities and networks provide confidential guidance. We
              surface them prominently because recovery starts with a single conversation.
            </p>
          </div>

          <ul className="mt-6 flex list-none flex-wrap items-center justify-center gap-3 sm:gap-4 md:mt-8 md:gap-5">
            {supportOrgs.map((org) => (
              <li key={org.href}>
                <Link
                  href={org.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 min-w-[7.5rem] items-center justify-center rounded-lg border border-white/15 bg-white px-3 shadow-sm transition-colors hover:border-casino-gold/50 hover:shadow-[0_0_20px_rgba(201,162,39,0.15)] md:h-12 md:px-4"
                >
                  <img
                    src={org.src}
                    alt={org.alt}
                    className="max-h-7 w-auto max-w-[5.5rem] object-contain object-center md:max-h-8 md:max-w-[6.5rem]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-casino-gold/15 pt-8 md:flex-row md:items-start md:justify-between md:gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90">
            <Image src="/logo.png" alt={`${SITE_NAME} logo`} width={40} height={40} className="h-10 w-10" />
            <div className="leading-tight">
              <p className="text-lg font-black uppercase tracking-[0.08em] sm:text-xl">
                <span className="text-white">Best </span>
                <span className="text-casino-gold">Casinos </span>
                <span className="text-irish-green">IE</span>
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.26em] text-casino-gold-muted/70">
                {SITE_DOMAIN}
              </p>
            </div>
          </Link>
          <p className="max-w-xl text-center text-xs leading-relaxed text-casino-gold-muted/85 md:text-left md:text-sm">
            Hand-tested casino comparisons for Irish adults. Read each operator&apos;s full terms before claiming any
            welcome package or free-spin deal.
          </p>
        </div>

        <nav
          className="mt-6 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm md:mt-7"
          aria-label="Site pages"
        >
          {exploreLinks.map((item, i) => (
            <span key={item.href} className="inline-flex items-center">
              {i > 0 ? (
                <span className="mx-2 hidden h-3 w-px bg-casino-gold/25 sm:inline" aria-hidden />
              ) : null}
              <Link
                href={item.href}
                className="rounded-md px-2 py-1 font-medium text-casino-gold-muted/90 underline decoration-casino-gold/35 underline-offset-4 transition-colors hover:text-casino-gold hover:decoration-casino-gold/70"
              >
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="mt-8 rounded-xl border border-casino-gold/20 bg-black/35 px-4 py-4 md:px-6 md:py-5">
          <p className="text-[11px] leading-relaxed text-casino-gold-muted/80 sm:text-xs md:text-[13px]">
            <span className="font-bold text-casino-gold">How we operate:</span> {SITE_DOMAIN} is an independent affiliate
            guide to licensed casinos. We do not run games, take bets, process payments, perform KYC, or hold player
            balances. We may earn commission when you register via our links; that income never buys a higher rank on our
            tables.
          </p>
        </div>

        <div className="mt-8 border-t border-casino-gold/10 pt-6 text-center">
          <p className="text-xs text-casino-gold-muted/60 sm:text-sm">
            © 2026 {SITE_DOMAIN}. All rights reserved.
          </p>
          <p className="mt-2 text-xs font-bold leading-snug text-casino-ruby sm:text-sm">
            18+ | Ireland adults only | Gambling can be harmful if uncontrolled — play responsibly.
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-casino-gold-muted/50 sm:text-xs">
            If the fun stops, pause immediately and contact a support organisation.
          </p>
        </div>
      </div>
    </footer>
  )
}
