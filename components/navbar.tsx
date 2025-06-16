"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import Modern3DLogo from "@/components/modern-3d-logo"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, isLoaded } = useLanguage()

  // Show loading state while context is initializing
  if (!isLoaded) {
    return (
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md dark:bg-gray-900/90">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              STAVI AI
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="w-20 h-9 rounded bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </header>
    )
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  const buttonVariants = {
    closed: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const menuItems = [
    { href: "/", label: t("nav.home") },
    { href: "/kontak", label: t("nav.contact") },
    { href: "/privacy-policy", label: t("nav.privacy") },
    { href: "/terms", label: t("nav.terms") },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md dark:bg-gray-900/90 transition-colors">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Modern3DLogo size="sm" />
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all">
            STAVI AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>

          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          >
            <Link href="/kontak">{t("nav.try")}</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation with Smooth Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md dark:bg-gray-900/95 border-t border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.href}
                    className="block text-lg font-medium hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={buttonVariants} initial="closed" animate="open" exit="closed" className="mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  size="lg"
                >
                  <Link href="/kontak" onClick={() => setIsMenuOpen(false)}>
                    {t("nav.try")}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
