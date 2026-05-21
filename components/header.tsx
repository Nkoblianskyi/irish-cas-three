import Link from "next/link"
import Image from "next/image"
import { SITE_NAME } from "@/lib/site-brand"

function AgeBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const dimensions =
    size === "sm"
      ? "h-7 w-7 text-[9px]"
      : "h-9 w-9 text-[11px] lg:h-10 lg:w-10 lg:text-xs"
  return (
    <div
      aria-label="18 plus only"
      className={`flex items-center justify-center rounded-full border-2 border-casino-ruby bg-white font-black text-casino-ruby shadow-[0_2px_8px_rgba(196,30,58,0.4)] ${dimensions}`}
    >
      18+
    </div>
  )
}

function BrandTitle({ className = "" }: { className?: string }) {
  return (
    <h1 className={`font-extrabold uppercase tracking-[0.08em] ${className}`}>
      <span className="text-white">Best </span>
      <span className="text-casino-gold">Casinos </span>
      <span className="text-irish-green">IE</span>
    </h1>
  )
}

export function Header() {
  return (
    <header className="text-white bg-gradient-to-r from-casino-velvet via-casino-forest to-casino-velvet border-b border-casino-gold/30 shadow-[0_8px_24px_rgba(10,31,24,0.5)]">
      <div className="md:hidden relative h-[44px] flex items-center justify-center px-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt={`${SITE_NAME} logo`}
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
          />
          <div className="leading-none">
            <BrandTitle className="text-[10px] tracking-[0.1em]" />
          </div>
        </Link>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <AgeBadge size="sm" />
        </div>
      </div>

      <div className="hidden md:block container mx-auto px-4 h-[72px]">
        <div className="relative flex h-full items-center justify-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${SITE_NAME} logo`}
              width={42}
              height={42}
              className="w-9 h-9 lg:w-11 lg:h-11"
            />
            <div className="leading-none">
              <BrandTitle className="text-xl lg:text-3xl" />
              <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-casino-gold-muted/80">
                Ireland&apos;s casino comparison desk
              </div>
            </div>
          </Link>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <AgeBadge />
          </div>
        </div>
      </div>
    </header>
  )
}
