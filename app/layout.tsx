import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SmoothPageTransition from "@/components/smooth-page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "STAVI AI - Biar Pesan Pelanggan Dijawab Otomatis",
  description:
    "AI Agent untuk bisnis di media sosial yang membalas pesan dan komentar pelanggan secara otomatis di WhatsApp, Instagram, dan Facebook",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <SmoothPageTransition />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
