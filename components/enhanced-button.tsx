"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  variant?: "default" | "outline" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
  asChild?: boolean
}

export default function EnhancedButton({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick,
  ...props
}: EnhancedButtonProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <motion.div
        whileHover={{
          y: -2,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <Button
          variant={variant}
          size={size}
          className={`relative overflow-hidden group ${className}`}
          onClick={onClick}
          {...props}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
          {children}
        </Button>
      </motion.div>
    </motion.div>
  )
}
