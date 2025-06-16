"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Zap, Shield, Smartphone, BarChart3, Clock, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Modern3DLogo from "@/components/modern-3d-logo"

export default function AdvancedFeaturesShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const containerRef = useRef(null)
  const { t } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: t("showcase.feature1.title"),
      description: t("showcase.feature1.desc"),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      accentColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Zap,
      title: t("showcase.feature2.title"),
      description: t("showcase.feature2.desc"),
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
      accentColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: Shield,
      title: t("showcase.feature3.title"),
      description: t("showcase.feature3.desc"),
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      accentColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Smartphone,
      title: t("showcase.feature4.title"),
      description: t("showcase.feature4.desc"),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      accentColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: BarChart3,
      title: t("showcase.feature5.title"),
      description: t("showcase.feature5.desc"),
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      accentColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: Clock,
      title: t("showcase.feature6.title"),
      description: t("showcase.feature6.desc"),
      color: "from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
      accentColor: "text-red-600 dark:text-red-400",
    },
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
    if (isVisible && isAutoPlay) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVisible, features.length, isAutoPlay])

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  if (isMobile) {
    return (
      <div
        ref={containerRef}
        className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/50"
      >
        {/* Mobile-First Design */}
        <div className="container px-4 py-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <Modern3DLogo size="lg" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t("brand.name")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm px-4">{t("showcase.subtitle")}</p>
          </motion.div>

          {/* Feature Card - Full Screen Mobile */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`relative ${features[activeFeature].bgColor} rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 backdrop-blur-sm`}
              >
                {/* Feature Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center shadow-lg mb-4`}
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {React.createElement(features[activeFeature].icon, {
                      className: "w-10 h-10 text-white",
                    })}
                  </motion.div>

                  {/* Feature Number */}
                  <div className="inline-flex items-center bg-white/80 dark:bg-gray-800/80 rounded-full px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 mb-4">
                    <span
                      className={`w-2 h-2 rounded-full ${features[activeFeature].accentColor.replace("text-", "bg-")} mr-2`}
                    ></span>
                    Feature {activeFeature + 1} of {features.length}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-bold dark:text-white leading-tight">{features[activeFeature].title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base px-2">
                    {features[activeFeature].description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${features[activeFeature].color}`}></div>
                </div>

                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm"></div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Previous Button */}
              <motion.button
                onClick={prevFeature}
                className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>

              {/* Auto-play Control */}
              <motion.button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlay ? (
                  <Pause className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Play className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                )}
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                  {isAutoPlay ? "Pause" : "Play"}
                </span>
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={nextFeature}
                className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {features.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeFeature
                      ? "w-8 bg-gradient-to-r " + features[activeFeature].color
                      : "w-2 bg-gray-300 dark:bg-gray-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    index === activeFeature
                      ? {
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            {/* Feature List Preview */}
            <div className="mt-8 grid grid-cols-3 gap-2">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    index === activeFeature
                      ? feature.bgColor + " shadow-md scale-105"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70"
                  }`}
                  whileHover={{ scale: index === activeFeature ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-2`}
                  >
                    {React.createElement(feature.icon, {
                      className: "w-4 h-4 text-white",
                    })}
                  </div>
                  <p className="text-xs font-medium dark:text-white text-center leading-tight">{feature.title}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Background Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    )
  }

  // Desktop Layout (unchanged)
  return (
    <div ref={containerRef} className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background with animated gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
            "linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(99, 102, 241, 0.1) 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Feature showcase */}
            <div className="relative order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border-0"
              >
                {/* Header with consistent logo */}
                <div className="text-center mb-6 md:mb-8">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <Modern3DLogo size="md" className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t("brand.name")}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 px-2">
                    {t("showcase.subtitle")}
                  </p>
                </div>

                {/* Active feature display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`${features[activeFeature].bgColor} backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border-0`}
                  >
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center shadow-lg`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {React.createElement(features[activeFeature].icon, {
                        className: "w-6 h-6 md:w-8 md:h-8 text-white",
                      })}
                    </motion.div>
                    <h4 className="text-lg md:text-xl font-bold mb-2 dark:text-white px-2">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed px-2">
                      {features[activeFeature].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Progress indicator */}
                <div className="flex justify-center mt-4 md:mt-6 space-x-2">
                  {features.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        index === activeFeature ? "w-6 md:w-8 bg-blue-600" : "w-2 bg-gray-300 dark:bg-gray-600"
                      }`}
                      animate={index === activeFeature ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                      onClick={() => setActiveFeature(index)}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-pink-200/30 dark:border-pink-700/30"
              />

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"
              />
            </div>

            {/* Right side - Feature grid */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`relative p-4 rounded-xl backdrop-blur-sm border-0 transition-all duration-300 cursor-pointer ${
                      index === activeFeature
                        ? `${feature.bgColor} shadow-lg scale-105`
                        : "bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-800/70"
                    }`}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ scale: index === activeFeature ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className={`w-10 h-10 mb-3 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-md`}
                      animate={index === activeFeature ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      {React.createElement(feature.icon, {
                        className: "w-5 h-5 text-white",
                      })}
                    </motion.div>
                    <h5 className="font-semibold text-sm mb-1 dark:text-white leading-tight">{feature.title}</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>

                    {index === activeFeature && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
