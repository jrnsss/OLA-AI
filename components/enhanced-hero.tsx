"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function EnhancedHero() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const { t, isLoaded } = useLanguage()
  const fullText = t("hero.title")

  useEffect(() => {
    if (!isLoaded) return

    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText, isLoaded])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  if (!isLoaded) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/50 via-white/30 to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </section>
    )
  }

  const benefits = [
    { icon: Zap, text: t("benefit.time"), color: "text-yellow-500" },
    { icon: Clock, text: t("benefit.speed"), color: "text-blue-500" },
    { icon: TrendingUp, text: t("benefit.conversion"), color: "text-green-500" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white/30 to-purple-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50">
      {/* Animated background elements with transparency */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/30 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="inline-flex items-center rounded-full bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm px-4 py-2 text-sm text-blue-800 dark:text-blue-200 border border-blue-200/50 dark:border-blue-700/50">
                <Zap className="w-4 h-4 mr-2" />
                {t("hero.badge")}
              </div>
            </motion.div>

            {/* Main heading with typing effect */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {typedText}
                </span>
                {showCursor && <span className="animate-pulse">|</span>}
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-xl text-gray-600 dark:text-gray-300 md:text-2xl max-w-2xl leading-relaxed"
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-white/50 dark:border-gray-700/50"
                >
                  <benefit.icon className={`w-5 h-5 mr-2 ${benefit.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg group backdrop-blur-sm"
                  asChild
                >
                  <Link href="/kontak">
                    {t("hero.cta.primary")}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/kontak">{t("hero.cta.secondary")}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Visual with casual AI chat */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual container */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/50 dark:border-gray-700/50"
              >
                {/* Browser header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-md h-6 flex items-center px-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">stavi-ai.com</span>
                  </div>
                </div>

                {/* Content with casual chat */}
                <div className="space-y-4">
                  <div className="bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium dark:text-white">Pelanggan</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t("chat.customer.1")}</p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-blue-50/80 dark:bg-blue-900/50 backdrop-blur-sm rounded-lg p-4 ml-8"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium dark:text-white">STAVI AI</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t("chat.ai.1")}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium dark:text-white">Pelanggan</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t("chat.customer.2")}</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                    className="bg-blue-50/80 dark:bg-blue-900/50 backdrop-blur-sm rounded-lg p-4 ml-8"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium dark:text-white">STAVI AI</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{t("chat.ai.2")}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements with transparency */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm"
              />

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500/30 to-blue-500/30 rounded-full backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400/50 dark:border-gray-500/50 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gray-400/50 dark:bg-gray-500/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
