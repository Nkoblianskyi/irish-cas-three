import type { Metadata } from "next"
import { SITE_DOMAIN, SITE_NAME, SITE_URL } from "@/lib/site-brand"

/** Primary + long-tail keywords for Irish casino comparison SEO */
export const SITE_KEYWORDS = [
  "best casinos ie",
  "best casinos ireland",
  "bestcasinosie",
  "bestcasinosie.com",
  "online casino ireland",
  "online casino sites ireland",
  "top online casinos ireland",
  "licensed online casino ireland",
  "regulated online casino ireland",
  "irish casino reviews",
  "casino comparison ireland",
  "best casino bonus ireland",
  "welcome bonus casino ireland",
  "free spins ireland casino",
  "live casino ireland",
  "live dealer casino ireland",
  "slots ireland online",
  "mobile casino ireland",
  "fast withdrawal casino ireland",
  "casino payout speed ireland",
  "new casino sites ireland",
  "safe online casino ireland",
  "responsible gambling ireland",
  "18+ casino ireland",
] as const

const DEFAULT_OG_IMAGE = "/logo.png"

type PageSeoInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: PageSeoInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : path ? `/${path}` : ""
  const url = `${SITE_URL}${canonicalPath || "/"}`
  const fullTitle = canonicalPath === "" || canonicalPath === "/" ? title : `${title} | ${SITE_NAME}`
  const keywordSet = [...new Set([...SITE_KEYWORDS, ...keywords])]

  return {
    title: fullTitle,
    description,
    keywords: keywordSet,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_IE",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 512,
          height: 512,
          alt: `${SITE_NAME} — online casino comparisons for Ireland`,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    other: {
      "geo.region": "IE",
      "geo.placename": "Ireland",
    },
  }
}

export const homeMetadata: Metadata = buildPageMetadata({
  title: `${SITE_NAME} — Top Licensed Online Casinos in Ireland`,
  description:
    "Compare licensed online casinos for Irish players at Best Casinos IE. Honest reviews of welcome bonuses, slots, live dealers, mobile apps, and withdrawal speed — updated for adults 18+.",
  path: "/",
  keywords: [
    "best online casino ireland 2026",
    "casino rankings ireland",
    "irish casino guide",
  ],
})

export const aboutMetadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn how Best Casinos IE researches licensed online casinos for Ireland. Independent affiliate comparisons, editorial scorecards, and transparent funding — no operator ties.",
  path: "/about",
  keywords: ["about best casinos ie", "casino review methodology ireland"],
})

export const privacyMetadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Best Casinos IE (bestcasinosie.com): what data we collect, why we use it, cookie choices, GDPR rights, and how to contact us.",
  path: "/privacy-policy",
  keywords: ["best casinos ie privacy", "casino site data protection ireland"],
})

export const cookieMetadata: Metadata = buildPageMetadata({
  title: "Cookie Policy",
  description:
    "Cookie policy for Best Casinos IE — essential, analytics, and optional cookies explained. Manage consent and browser controls on bestcasinosie.com.",
  path: "/cookie-policy",
  keywords: ["best casinos ie cookies", "cookie consent casino comparison"],
})

export const termsMetadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Website terms for Best Casinos IE. Eligibility (18+), editorial online casino comparisons, liability limits, and Irish governing law for bestcasinosie.com visitors.",
  path: "/terms",
  keywords: ["best casinos ie terms", "casino comparison site terms ireland"],
})

export const responsibleGamingMetadata: Metadata = buildPageMetadata({
  title: "Responsible Gaming",
  description:
    "Responsible gambling resources for Irish online casino players. Limits, self-exclusion, warning signs, and links to GambleAware, GamCare, and support networks.",
  path: "/responsible-gaming",
  keywords: [
    "responsible gambling ireland casino",
    "problem gambling help ireland",
    "casino deposit limits ireland",
  ],
})

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Top Licensed Online Casinos in Ireland`,
    template: `%s | ${SITE_NAME}`,
  },
  description: homeMetadata.description as string,
  keywords: [...SITE_KEYWORDS],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Gambling",
  alternates: {
    canonical: SITE_URL,
  },
  robots: homeMetadata.robots,
  openGraph: {
    ...homeMetadata.openGraph,
    url: SITE_URL,
  },
  twitter: homeMetadata.twitter,
  other: {
    "geo.region": "IE",
    "geo.placename": "Ireland",
  },
}
