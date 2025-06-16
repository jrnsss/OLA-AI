"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Modern3DLogo from "@/components/modern-3d-logo"
import { AnimatePresence } from "framer-motion"

export default function SimpleTextAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const [message, setMessage] = useState("")
  const { t } = useLanguage()

  const messages = [t("tech.msg1"), t("tech.msg2"), t("tech.msg3"), t("tech.msg4"), t("tech.msg5")]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      let messageIndex = 0
      const messageInterval = setInterval(() => {
        setMessage(messages[messageIndex])
        setTimeout(() => setMessage(""), 2500)
        messageIndex = (messageIndex + 1) % messages.length
      }, 3500)

      return () => {
        clearInterval(messageInterval)
      }
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background gradient - simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white/50 dark:from-gray-800/30 dark:to-gray-900/50"></div>

      {/* Center content - Fixed positioning with precise centering */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 md:space-y-8 w-full max-w-sm md:max-w-md px-4">
          {/* STAVI AI Logo - Precisely centered */}
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center"
            >
              <Modern3DLogo size="xl" className="w-full h-full" />
            </motion.div>
          </div>

          {/* Brand name with gradient - Precisely centered */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center"
          >
            {t("brand.name")}
          </motion.h3>

          {/* Message display - Fixed height container with better responsive text */}
          <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center px-2 sm:px-4">
            <AnimatePresence mode="wait">
              {message && (
                <motion.div
                  key={message}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] border-0"
                >
                  <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 leading-relaxed text-center break-words">
                    {message}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Call to action button - Fixed position */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 backdrop-blur-sm text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            <Link href="/kontak">{t("tech.cta")}</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
