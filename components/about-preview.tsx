import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="my-8 rounded-2xl border border-casino-gold/25 bg-gradient-to-br from-casino-forest/90 via-casino-velvet/95 to-casino-shamrock/20 px-5 py-6 text-white shadow-[0_12px_40px_rgba(10,31,24,0.45)] md:px-8 md:py-8"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-3">
          <h2
            id="about-preview-heading"
            className="text-base font-black uppercase tracking-[0.18em] text-casino-gold md:text-lg"
          >
            Who runs Best Casinos IE
          </h2>
          <span className="hidden rounded-full border border-casino-shamrock/50 bg-casino-shamrock/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-casino-gold-muted md:inline-block">
            Independent guide
          </span>
        </div>

        <div className="mt-4 grid gap-4 text-sm leading-relaxed text-white/85 md:grid-cols-2 md:gap-6 md:text-[15px]">
          <p>
            We are a small editorial desk that tests and compares{" "}
            <span className="font-semibold text-white">licensed online casinos</span> aimed at adults in Ireland. We
            never run a gambling product, take stakes, or touch player money — our job is research and clear writing.
          </p>
          <p>
            The site stays free to read because we work with operators on an{" "}
            <span className="font-semibold text-casino-gold">affiliate basis</span>: if you register through a tracked
            link, we may earn a fee. That income funds the reviews; it does not buy placement on our tables.
          </p>
        </div>

        <div className="mt-5 flex flex-col items-start gap-3 border-t border-casino-gold/15 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-xs text-casino-gold-muted/85 md:text-sm">
            <span
              aria-label="18 plus only"
              className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-casino-ruby bg-white text-[9px] font-black text-casino-ruby shadow-[0_2px_6px_rgba(196,30,58,0.4)]"
            >
              18+
            </span>
            <span>For Irish residents aged 18+. Treat gambling as paid entertainment, not income.</span>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-casino-gold transition-colors hover:text-casino-gold-muted"
          >
            Read our story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
