import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"

type SiteDocumentPageProps = {
  title: string
  description?: string
  showLastUpdated?: boolean
  headerIcon?: ReactNode
  children: ReactNode
}

export function SiteDocumentPage({
  title,
  description,
  showLastUpdated,
  headerIcon,
  children,
}: SiteDocumentPageProps) {
  const lastUpdatedStr = new Date().toLocaleDateString("en-IE", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-casino-gold/40 bg-black/55 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-casino-gold-muted shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-casino-gold hover:bg-casino-gold/15 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
        Back to home
      </Link>

      <article className="overflow-hidden rounded-2xl border border-casino-gold/30 shadow-casino-glow">
        <header
          className="relative border-b border-casino-gold/25 px-6 py-8 text-white md:px-10 md:py-10"
          style={{
            background: "linear-gradient(135deg, #0A1F18 0%, #0F2E24 55%, #1A7A52 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              background: "linear-gradient(105deg, #169B62 0%, transparent 26%, transparent 74%, #FF883E 100%)",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            {headerIcon ? (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-casino-gold/45 bg-casino-gold/15 text-casino-gold">
                {headerIcon}
              </div>
            ) : null}
            <div className="min-w-0 flex-1">
              <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">{title}</h1>
              {description ? (
                <p className="mt-3 max-w-2xl text-base leading-snug text-casino-gold-muted/95 md:text-lg">{description}</p>
              ) : null}
              {showLastUpdated ? (
                <p className="mt-4 text-sm text-white/65">Last updated: {lastUpdatedStr}</p>
              ) : null}
            </div>
          </div>
        </header>

        <div className="border-t border-casino-gold/10 bg-white/[0.98] p-8 md:p-10 lg:p-12">{children}</div>
      </article>
    </div>
  )
}
