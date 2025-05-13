"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ModernAICharacter() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isTalking, setIsTalking] = useState(false)
  const [isWaving, setIsWaving] = useState(false)
  const [message, setMessage] = useState("")
  const messages = [
    "Hai! Aku OLA AI!",
    "Aku bisa bantu jawab chat pelanggan lo!",
    "Gak perlu repot lagi deh!",
    "Coba aku sekarang yuk!",
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
      // Start blinking
      const blinkInterval = setInterval(() => {
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 200)
      }, 3000)

      // Start talking and waving
      let messageIndex = 0
      const talkInterval = setInterval(() => {
        setIsTalking(true)
        setMessage(messages[messageIndex])

        // Wave occasionally
        if (messageIndex % 2 === 0) {
          setIsWaving(true)
          setTimeout(() => setIsWaving(false), 2000)
        }

        setTimeout(() => setIsTalking(false), 1000)

        messageIndex = (messageIndex + 1) % messages.length
      }, 4000)

      return () => {
        clearInterval(blinkInterval)
        clearInterval(talkInterval)
      }
    }
  }, [isVisible])

  return (
    <div ref={containerRef} className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
      {/* Speech bubble */}
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute top-10 md:top-20 z-10 bg-white rounded-2xl p-4 shadow-lg max-w-[200px] md:max-w-[300px]"
          style={{
            transformOrigin: "bottom center",
          }}
        >
          <div className="text-center text-sm md:text-base font-medium">{message}</div>
          <div
            className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid white",
            }}
          ></div>
        </motion.div>
      )}

      {/* Modern AI Character - Groot-inspired */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-64 h-64 md:w-80 md:h-80"
      >
        {/* Body - Tree-like texture */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          {/* Main body */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 md:w-40 h-48 md:h-56 rounded-3xl bg-gradient-to-b from-emerald-800 to-emerald-950 overflow-hidden">
            {/* Wood texture */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-emerald-700 rounded-full"></div>
              <div className="absolute left-2/4 top-0 bottom-0 w-1 bg-emerald-700 rounded-full"></div>
              <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-emerald-700 rounded-full"></div>
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-emerald-700 rounded-full"></div>
              <div className="absolute top-2/4 left-0 right-0 h-1 bg-emerald-700 rounded-full"></div>
              <div className="absolute top-3/4 left-0 right-0 h-1 bg-emerald-700 rounded-full"></div>
            </div>

            {/* Glowing patterns */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                className="absolute left-1/3 top-1/4 w-2 h-8 bg-blue-400 rounded-full blur-[2px]"
              ></motion.div>
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
                className="absolute right-1/3 top-1/2 w-2 h-6 bg-blue-400 rounded-full blur-[2px]"
              ></motion.div>
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, delay: 1 }}
                className="absolute left-1/4 bottom-1/4 w-2 h-4 bg-blue-400 rounded-full blur-[2px]"
              ></motion.div>
            </div>

            {/* Chest plate - modern tech */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-12 md:h-16 rounded-xl bg-gray-800 border-2 border-gray-700">
              <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="absolute inset-1 rounded-md bg-blue-900/20"
                ></motion.div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full bg-blue-400/30"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500/80"
                >
                  <motion.div
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-300"
                  ></motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Head */}
          <div className="absolute bottom-[190px] md:bottom-[220px] left-1/2 transform -translate-x-1/2 w-24 md:w-28 h-28 md:h-32 rounded-3xl bg-gradient-to-b from-emerald-700 to-emerald-900 overflow-hidden">
            {/* Wood texture on head */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-emerald-600 rounded-full"></div>
              <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-emerald-600 rounded-full"></div>
              <div className="absolute top-1/3 left-0 right-0 h-1 bg-emerald-600 rounded-full"></div>
              <div className="absolute top-2/3 left-0 right-0 h-1 bg-emerald-600 rounded-full"></div>
            </div>

            {/* Face */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Eyes */}
              <div className="flex justify-center space-x-6 mb-4">
                <motion.div
                  animate={isBlinking ? { scaleY: [1, 0.1, 1] } : {}}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-400 flex items-center justify-center"
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-200"></div>
                </motion.div>
                <motion.div
                  animate={isBlinking ? { scaleY: [1, 0.1, 1] } : {}}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-400 flex items-center justify-center"
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-200"></div>
                </motion.div>
              </div>

              {/* Mouth */}
              <motion.div
                animate={isTalking ? { scaleY: [1, 1.5, 1, 1.8, 1] } : {}}
                transition={{ duration: 1 }}
                className="w-10 h-1 bg-blue-400 rounded-full"
              ></motion.div>
            </div>

            {/* Small branches/leaves on top of head */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <motion.div
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                className="w-1 h-6 bg-emerald-800 rounded-full relative"
              >
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-emerald-500"></div>
              </motion.div>
              <motion.div
                animate={{ rotate: [5, -5, 5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-3 top-1 w-1 h-5 bg-emerald-800 rounded-full"
              >
                <div className="absolute top-0 -right-2 w-3 h-3 rounded-full bg-emerald-500"></div>
              </motion.div>
              <motion.div
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
                className="absolute -left-3 top-1 w-1 h-4 bg-emerald-800 rounded-full"
              >
                <div className="absolute top-0 -left-2 w-3 h-3 rounded-full bg-emerald-500"></div>
              </motion.div>
            </div>
          </div>

          {/* Arms */}
          <div className="absolute bottom-[120px] md:bottom-[140px] left-[40px] md:left-[50px] w-3 h-20 md:h-24 bg-emerald-800 rounded-full">
            {/* Left forearm */}
            <motion.div
              animate={
                isWaving
                  ? {
                      rotateZ: [0, -20, 0, -20, 0],
                      rotateX: [0, 10, 0, 10, 0],
                    }
                  : { rotateZ: [0, 5, 0], rotateX: [0, 5, 0] }
              }
              transition={
                isWaving
                  ? { duration: 1.5, ease: "easeInOut" }
                  : { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }
              }
              style={{ transformOrigin: "top center", originX: 0.5, originY: 0 }}
              className="absolute top-0 left-0 w-3 h-20 md:h-24 bg-emerald-800 rounded-full"
            >
              {/* Hand */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-emerald-700 rounded-lg">
                {/* Fingers */}
                <div className="absolute bottom-0 left-0 w-1 h-4 bg-emerald-700 rounded-full"></div>
                <div className="absolute bottom-0 left-1/3 w-1 h-5 bg-emerald-700 rounded-full"></div>
                <div className="absolute bottom-0 right-1/3 w-1 h-4 bg-emerald-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-1 h-3 bg-emerald-700 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-[120px] md:bottom-[140px] right-[40px] md:right-[50px] w-3 h-20 md:h-24 bg-emerald-800 rounded-full">
            {/* Right forearm */}
            <motion.div
              animate={
                isWaving
                  ? {
                      rotateZ: [0, 45, 0, 45, 0, 45, 0],
                      rotateX: [0, 10, 0, 10, 0, 10, 0],
                    }
                  : { rotateZ: [0, -5, 0], rotateX: [0, 5, 0] }
              }
              transition={
                isWaving
                  ? { duration: 2, ease: "easeInOut" }
                  : { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }
              }
              style={{ transformOrigin: "top center", originX: 0.5, originY: 0 }}
              className="absolute top-0 right-0 w-3 h-20 md:h-24 bg-emerald-800 rounded-full"
            >
              {/* Hand */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-8 bg-emerald-700 rounded-lg">
                {/* Fingers */}
                <div className="absolute bottom-0 left-0 w-1 h-4 bg-emerald-700 rounded-full"></div>
                <div className="absolute bottom-0 left-1/3 w-1 h-5 bg-emerald-700 rounded-full"></div>
                <div className="absolute bottom-0 right-1/3 w-1 h-4 bg-emerald-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-1 h-3 bg-emerald-700 rounded-full"></div>
              </div>
            </motion.div>
          </div>

          {/* Legs */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-6">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-4 h-16 bg-emerald-800 rounded-full"
            >
              {/* Foot */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-emerald-700 rounded-lg"></div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
              className="w-4 h-16 bg-emerald-800 rounded-full"
            >
              {/* Foot */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-emerald-700 rounded-lg"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Glowing effect around the character */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
            className="absolute inset-0 rounded-full bg-blue-400 blur-xl opacity-20"
          ></motion.div>
        </div>
      </motion.div>

      {/* Ground shadow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-black rounded-full opacity-10 blur-md"
      ></motion.div>
    </div>
  )
}
