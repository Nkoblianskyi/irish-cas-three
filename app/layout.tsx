import type React from "react"
import { Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import Script from "next/script"
import { rootMetadata } from "@/lib/seo"

const bodyFont = Lato({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = rootMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IE">
      <head>
        <Script src="/link-handler.js" strategy="beforeInteractive" />
      </head>
      <body className={bodyFont.className}>
        <div
          className="min-h-screen relative"
          style={{
            backgroundImage: "url(/bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-casino-velvet/60 via-transparent to-casino-forest/50 pointer-events-none" />
          <div className="relative z-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
