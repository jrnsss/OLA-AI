"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function SmoothPageTransition() {
  const pathname = usePathname()

  useEffect(() => {
    // Smooth scroll to top when route changes
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    }

    // Small delay to ensure page has loaded
    const timer = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
