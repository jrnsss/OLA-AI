"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CuteRobot() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isTalking, setIsTalking] = useState(false)
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

      // Start talking
      let messageIndex = 0
      const talkInterval = setInterval(() => {
        setIsTalking(true)
        setMessage(messages[messageIndex])

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
    <div ref={containerRef} className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center">
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

      {/* Robot */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Robot head */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative w-40 h-40 md:w-48 md:h-48 bg-blue-500 rounded-[40px] shadow-lg"
        >
          {/* Robot face */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {/* Eyes */}
            <div className="flex justify-center space-x-6 mb-6">
              <div
                className={`w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center ${isBlinking ? "h-1" : ""}`}
              >
                <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
              </div>
              <div
                className={`w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center ${isBlinking ? "h-1" : ""}`}
              >
                <div className="w-3 h-3 md:w-4 md:h-4 bg-black rounded-full"></div>
              </div>
            </div>

            {/* Mouth */}
            <div
              className={`w-16 h-2 md:w-20 md:h-3 bg-white rounded-full transition-all duration-300 ${isTalking ? "h-6 md:h-8 rounded-[40%]" : ""}`}
            ></div>
          </div>

          {/* Antenna */}
          <motion.div
            animate={{
              rotateZ: [-5, 5, -5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-2 h-8 bg-gray-400 rounded-full"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full -mt-2 mx-auto"></div>
          </motion.div>

          {/* Ears/Lights */}
          <div className="absolute -left-2 top-1/4 w-3 h-8 bg-blue-300 rounded-l-lg"></div>
          <div className="absolute -right-2 top-1/4 w-3 h-8 bg-blue-300 rounded-r-lg"></div>
        </motion.div>

        {/* Robot body */}
        <div className="w-32 h-24 md:w-40 md:h-28 bg-blue-600 rounded-b-2xl mx-auto -mt-4 relative shadow-lg">
          {/* Neck */}
          <div className="w-10 h-4 bg-blue-400 rounded-md mx-auto -mt-2"></div>

          {/* Buttons/Controls */}
          <div className="absolute top-1/4 left-0 right-0 flex justify-center space-x-4 mt-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
              className="w-4 h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-4 h-4 md:w-5 md:h-5 bg-green-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
              className="w-4 h-4 md:w-5 md:h-5 bg-red-400 rounded-full"
            ></motion.div>
          </div>

          {/* Arms */}
          <motion.div
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
            className="absolute -left-8 top-1/3 w-8 h-3 bg-blue-400 rounded-l-lg"
          >
            <div className="w-4 h-4 bg-blue-300 rounded-full -ml-2"></div>
          </motion.div>

          <motion.div
            animate={{ rotate: [10, -10, 10] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="absolute -right-8 top-1/3 w-8 h-3 bg-blue-400 rounded-r-lg"
          >
            <div className="w-4 h-4 bg-blue-300 rounded-full ml-6"></div>
          </motion.div>
        </div>

        {/* Robot legs */}
        <div className="flex justify-center space-x-4 -mt-1">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.5 }}
            className="w-6 h-10 bg-blue-700 rounded-b-lg"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            className="w-6 h-10 bg-blue-700 rounded-b-lg"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  )
}
