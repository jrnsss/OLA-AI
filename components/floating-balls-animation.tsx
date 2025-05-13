"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FloatingBallsAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const [message, setMessage] = useState("")
  const messages = [
    "Teknologi AI yang mudah digunakan, tanpa perlu keahlian khusus.",
    "Tetap pertahankan cara kerja tim kamu, OLA hanya membantu, bukan mengganti.",
    "Bisnis makin modern, tapi tetap dengan sentuhan personal khas kamu.",
    "Hemat waktu hingga 3 jam sehari untuk fokus kembangkan bisnis.",
    "Adopsi teknologi bukan lagi hal yang sulit. Mulai sekarang dengan OLA AI.",
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
      // Start showing messages
      let messageIndex = 0
      const messageInterval = setInterval(() => {
        setMessage(messages[messageIndex])
        setTimeout(() => setMessage(""), 3000)
        messageIndex = (messageIndex + 1) % messages.length
      }, 4000)

      return () => {
        clearInterval(messageInterval)
      }
    }
  }, [isVisible])

  // Generate random positions for the balls
  const balls = [
    // Large balls
    { size: 100, x: -120, y: -20, z: 0, color: "bg-blue-500", delay: 0 },
    { size: 80, x: 100, y: 50, z: -20, color: "bg-blue-400", delay: 0.5 },
    { size: 120, x: 20, y: -80, z: -40, color: "bg-blue-600", delay: 1 },
    // Medium balls
    { size: 60, x: -80, y: 80, z: -60, color: "bg-blue-300", delay: 1.5 },
    { size: 50, x: 140, y: -60, z: -30, color: "bg-blue-700", delay: 2 },
    { size: 70, x: -40, y: -120, z: -50, color: "bg-blue-200", delay: 2.5 },
    // Small balls
    { size: 30, x: 60, y: 120, z: -70, color: "bg-blue-400", delay: 3 },
    { size: 25, x: -150, y: -40, z: -80, color: "bg-blue-300", delay: 3.5 },
    { size: 35, x: 180, y: 30, z: -90, color: "bg-blue-500", delay: 4 },
    { size: 20, x: -100, y: 100, z: -100, color: "bg-blue-600", delay: 4.5 },
    { size: 15, x: 120, y: -100, z: -110, color: "bg-blue-200", delay: 5 },
  ]

  return (
    <div ref={containerRef} className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>

      {/* Speech bubble */}
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 bg-white rounded-2xl p-4 shadow-lg max-w-[280px] md:max-w-[320px]"
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

      {/* Floating balls */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl mx-auto">
          {balls.map((ball, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full ${ball.color} shadow-lg`}
              style={{
                width: ball.size,
                height: ball.size,
                left: "50%",
                top: "50%",
                x: ball.x,
                y: ball.y,
                z: ball.z,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isVisible
                  ? {
                      opacity: [0, 0.8, 0.6],
                      scale: [0, 1, 0.9],
                      x: [ball.x, ball.x + 20, ball.x - 20, ball.x],
                      y: [ball.y, ball.y - 20, ball.y + 20, ball.y],
                    }
                  : {}
              }
              transition={{
                delay: ball.delay,
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {/* Glossy effect */}
              <div
                className="absolute rounded-full bg-white opacity-20"
                style={{
                  width: "60%",
                  height: "60%",
                  top: "10%",
                  left: "10%",
                  transform: "rotate(-45deg)",
                }}
              ></div>
            </motion.div>
          ))}

          {/* Center ball with OLA AI logo */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-blue-600 rounded-full shadow-xl z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    scale: [0, 1.2, 1],
                    y: [0, -10, 0, 10, 0],
                  }
                : {}
            }
            transition={{
              delay: 0.5,
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl md:text-3xl">
              OLA AI
            </div>
            {/* Glossy effect */}
            <div
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: "60%",
                height: "60%",
                top: "10%",
                left: "10%",
                transform: "rotate(-45deg)",
              }}
            ></div>
          </motion.div>

          {/* Small decorative particles */}
          {[...Array(20)].map((_, index) => {
            const size = Math.random() * 6 + 2
            const x = (Math.random() - 0.5) * 300
            const y = (Math.random() - 0.5) * 300
            const delay = Math.random() * 5

            return (
              <motion.div
                key={`particle-${index}`}
                className="absolute rounded-full bg-blue-200"
                style={{
                  width: size,
                  height: size,
                  left: "50%",
                  top: "50%",
                }}
                initial={{ opacity: 0, x, y }}
                animate={
                  isVisible
                    ? {
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0],
                        x: [x, x + (Math.random() - 0.5) * 100, x + (Math.random() - 0.5) * 200],
                        y: [y, y + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 200],
                      }
                    : {}
                }
                transition={{
                  delay: delay,
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(8)].map((_, index) => {
          const rotation = (index * 45) % 360
          return (
            <motion.div
              key={`ray-${index}`}
              className="absolute top-1/2 left-1/2 h-[600px] w-2 bg-gradient-to-t from-blue-400 to-transparent origin-bottom"
              style={{
                rotate: rotation,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={
                isVisible
                  ? {
                      opacity: [0, 0.3, 0],
                      scaleY: [0, 1, 0],
                    }
                  : {}
              }
              transition={{
                delay: index * 0.2,
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          )
        })}
      </div>

      {/* Call to action button */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/kontak">Majukan Bisnis dengan OLA AI</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
