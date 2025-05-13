"use client"

import Link from "next/link"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment, Float, Text, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"

function ChatBubble({ position, color, children, delay = 0 }) {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5 + delay) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh castShadow>
        <boxGeometry args={[2.5, 1, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Html position={[0, 0, 0.06]} transform center>
        <div className="w-56 text-center px-2 py-1 text-sm">{children}</div>
      </Html>
    </group>
  )
}

function PhoneModel({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { nodes, materials } = useGLTF("/assets/3d/phone.glb") || { nodes: {}, materials: {} }
  const { viewport } = useThree()
  const isMobile = viewport.width < 5

  // Fallback if model doesn't load
  if (!nodes.Phone) {
    return (
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[1, 2, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    )
  }

  return (
    <group position={position} rotation={rotation} scale={isMobile ? 0.8 : 1}>
      <mesh castShadow receiveShadow geometry={nodes.Phone.geometry} material={materials.PhoneMaterial} />
    </group>
  )
}

function Scene() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 5

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} castShadow />
      <Environment preset="city" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <PhoneModel position={[0, -0.5, 0]} rotation={[0, 0, 0]} />

        <ChatBubble position={[-2, 0.8, 0.5]} color="#e2e8f0" delay={0}>
          Halo, saya ingin tanya tentang produk Anda
        </ChatBubble>

        <ChatBubble position={[2, 0, 0.5]} color="#dbeafe" delay={1}>
          Halo! Terima kasih sudah menghubungi kami. Ada yang bisa kami bantu?
        </ChatBubble>

        <ChatBubble position={[-2, -0.8, 0.5]} color="#e2e8f0" delay={2}>
          Apakah produk ini tersedia untuk pengiriman besok?
        </ChatBubble>

        <Text
          position={[0, 1.8, 0]}
          fontSize={isMobile ? 0.3 : 0.4}
          color="#1e40af"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          OLA AI
        </Text>
      </Float>
    </>
  )
}

export default function ChatAnimation() {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full">
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
          <Button asChild size="lg">
            <Link href="/kontak">Coba OLA AI Sekarang</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
