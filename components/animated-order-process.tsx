"use client"

import React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, ShoppingCart, CreditCard, Package } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Modern3DLogo from "@/components/modern-3d-logo"

export default function AnimatedOrderProcess() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const containerRef = useRef(null)
  const { t } = useLanguage()

  const orderSteps = [
    {
      customer: t("order.step1.customer"),
      ai: t("order.step1.ai"),
      icon: ShoppingCart,
      color: "bg-blue-500",
    },
    {
      customer: t("order.step2.customer"),
      ai: t("order.step2.ai"),
      icon: CreditCard,
      color: "bg-green-500",
    },
    {
      customer: t("order.step3.customer"),
      ai: t("order.step3.ai"),
      icon: CheckCircle,
      color: "bg-emerald-500",
    },
    {
      customer: "",
      ai: t("order.step4.ai"),
      icon: Package,
      color: "bg-purple-500",
    },
  ]

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
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % orderSteps.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="relative h-[500px] md:h-[600px] w-full">
      {/* Phone mockup */}
      <div className="flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative w-80 h-[500px] bg-gray-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
        >
          {/* Phone notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>

          {/* Screen */}
          <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden">
            {/* Chat header - Precisely centered logo */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Modern3DLogo size="sm" className="w-full h-full" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {t("brand.name")}
                  </div>
                  <div className="text-xs opacity-80">{t("brand.status")}</div>
                </div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-3 h-80 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  {/* Customer message */}
                  {orderSteps[currentStep].customer && (
                    <motion.div
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white dark:bg-gray-600 rounded-lg p-3 max-w-[80%] shadow-sm"
                    >
                      <p className="text-xs dark:text-white">{orderSteps[currentStep].customer}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 text-right mt-1">
                        {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </motion.div>
                  )}

                  {/* AI response */}
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: orderSteps[currentStep].customer ? 0.8 : 0.1 }}
                    className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 max-w-[80%] ml-auto shadow-sm"
                  >
                    <p className="text-xs dark:text-white">{orderSteps[currentStep].ai}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 text-right mt-1">
                      {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </motion.div>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center justify-center mt-4"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${orderSteps[currentStep].color} flex items-center justify-center shadow-lg`}
                    >
                      {React.createElement(orderSteps[currentStep].icon, { className: "w-5 h-5 text-white" })}
                    </div>
                  </motion.div>

                  {/* Progress bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / orderSteps.length) * 100}%` }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-4"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Input area */}
            <div className="bg-white dark:bg-gray-800 p-3 border-t border-gray-200 dark:border-gray-600 flex items-center">
              <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 text-xs text-gray-400 dark:text-gray-500">
                {currentStep === orderSteps.length - 1 ? t("chat.completed") : t("chat.placeholder")}
              </div>
              <div className="ml-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center cursor-pointer shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg"
          asChild
        >
          <Link href="/kontak">{t("hero.cta.primary")}</Link>
        </Button>
      </motion.div>
    </div>
  )
}
