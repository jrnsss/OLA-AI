"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface AdvancedTransitionProps {
  children: ReactNode
}

export default function AdvancedTransition({ children }: AdvancedTransitionProps) {
  const pathname = usePathname()

  // Different animations based on the path
  const getAnimationVariants = () => {
    // Default animation
    let variants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    }

    // Home page animation
    if (pathname === "/") {
      variants = {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
      }
    }

    // Contact page animation
    else if (pathname === "/kontak") {
      variants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 },
      }
    }

    // Policy pages animation
    else if (pathname === "/privacy-policy" || pathname === "/terms") {
      variants = {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      }
    }

    return variants
  }

  const variants = getAnimationVariants()

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  )
}
