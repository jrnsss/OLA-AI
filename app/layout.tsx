import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// Import the AdvancedTransition component instead of PageTransition
import AdvancedTransition from "@/components/advanced-transition"
import MotionProvider from "@/components/motion-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OLA AI - Biar Komentar Pelanggan Dijawab Otomatis",
  description:
    "AI Agent untuk bisnis di media sosial yang membalas komentar pelanggan secara otomatis di Instagram dan Facebook",
    generator: 'v0.dev'
}

// Update the RootLayout component to use AdvancedTransition
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MotionProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                <AdvancedTransition>{children}</AdvancedTransition>
              </main>
              <Footer />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
