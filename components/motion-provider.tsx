"use client"

import { AnimatePresence } from "framer-motion"
import type { ReactNode } from "react"

interface MotionProviderProps {
  children: ReactNode
}

export default function MotionProvider({ children }: MotionProviderProps) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}
