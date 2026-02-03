import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AccessibilityToggle } from "@/components/accessibility-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { CookieConsent } from "@/components/cookie-consent"
import { LoadingProvider } from "@/components/loading-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zyra Africa - Premium Ethical Gemstones",
  description:
    "Direct from artisanal miners in Taita Taveta. Premium Tsavorite, Ruby, Tourmaline, and more. Mine-to-market transparency and community empowerment.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-blue-50 dark:via-cyan-50 dark:to-blue-100 min-h-screen transition-colors duration-300`}>
        <AnimatedBackground />
        <AccessibilityToggle />
        <CookieConsent />
        <LoadingProvider>
          {children}
        </LoadingProvider>
        <Analytics />
      </body>
    </html>
  )
}
