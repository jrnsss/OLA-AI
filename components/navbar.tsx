"use client"

import Link from "next/link"
import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = useCallback(
    (href: string) => {
      setIsMenuOpen(false)
      router.push(href)
    },
    [router],
  )

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">O</span>
            </div>
            <span className="font-bold text-xl">OLA AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Beranda
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/kontak" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Kontak
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Syarat & Ketentuan
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Button asChild>
            <Link href="/kontak">Coba Sekarang</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-100/50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="container py-4 flex flex-col gap-4"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 0.1 }}
            >
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-gray-100/50"
                onClick={() => handleNavigation("/")}
              >
                Beranda
              </Link>
              <Link
                href="/kontak"
                className="text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-gray-100/50"
                onClick={() => handleNavigation("/kontak")}
              >
                Kontak
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-gray-100/50"
                onClick={() => handleNavigation("/privacy-policy")}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-gray-100/50"
                onClick={() => handleNavigation("/terms")}
              >
                Syarat & Ketentuan
              </Link>
              <Button asChild className="w-full mt-2">
                <Link href="/kontak" onClick={() => handleNavigation("/kontak")}>
                  Coba Sekarang
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
