"use client"

import { motion } from "framer-motion"

interface Modern3DLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export default function Modern3DLogo({ size = "md", className = "" }: Modern3DLogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-4xl",
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Perfect Circle Container */}
      <div className="relative w-full h-full">
        {/* Main Logo - Perfect Circle */}
        <motion.div
          className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 shadow-2xl transform-gpu"
          style={{
            transformStyle: "preserve-3d",
            aspectRatio: "1 / 1", // Ensures perfect circle
          }}
          animate={{
            rotateY: [0, 5, -5, 0],
            rotateX: [0, 2, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {/* Top face highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent opacity-60" />

          {/* Side shadow for 3D effect */}
          <div className="absolute -right-1 -bottom-1 w-full h-full rounded-full bg-gradient-to-br from-blue-800 to-blue-900 -z-10 blur-sm opacity-50" />

          {/* Letter S - Perfectly Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className={`${textSizes[size]} font-black text-white drop-shadow-lg`}
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)",
                transform: "translateZ(10px)",
                lineHeight: "1",
              }}
              animate={{
                textShadow: [
                  "0 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)",
                  "0 2px 8px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.3)",
                  "0 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              S
            </motion.span>
          </div>

          {/* Glowing border */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              borderColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
        </motion.div>

        {/* Floating particles around logo */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-60"
            style={{
              left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 40}%`,
              top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 40}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
