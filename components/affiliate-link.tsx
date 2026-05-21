"use client"

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react"
import { USE_AFFILIATE_REDIRECT } from "@/lib/site-brand"

interface AffiliateLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  brandUrl: string
  slug: string
  children: ReactNode
}

export function AffiliateLink({ brandUrl, slug, children, ...rest }: AffiliateLinkProps) {
  const navigate = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const base = USE_AFFILIATE_REDIRECT
      ? new URL(`/go/${slug}`, window.location.origin)
      : new URL(brandUrl)
    try {
      const current = new URL(e.currentTarget.href)
      current.searchParams.forEach((v, k) => base.searchParams.set(k, v))
    } catch {}
    window.open(base.toString(), "_blank", "noopener")
  }

  return (
    <a
      {...rest}
      href={brandUrl}
      target="_blank"
      onClick={navigate}
      onAuxClick={(e) => {
        if (e.button === 1) navigate(e)
      }}
    >
      {children}
    </a>
  )
}
