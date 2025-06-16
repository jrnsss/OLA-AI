"use client"

import { ArrowLeft, Shield, Lock, Eye, Database, Users, FileText } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"
import Modern3DLogo from "@/components/modern-3d-logo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const sections = [
    {
      icon: Database,
      title: "Informasi yang Kami Kumpulkan",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      items: [
        {
          title: "Data Interaksi Pengguna",
          desc: "Komentar, pesan, dan percakapan yang dikirim melalui platform seperti WhatsApp, Instagram, Facebook, atau marketplace yang terhubung.",
        },
        {
          title: "Informasi Akun Dasar",
          desc: "Username, nama tampilan, gambar profil, dan ID platform.",
        },
        {
          title: "Wawasan Pelanggan",
          desc: "Preferensi dan pola perilaku berdasarkan interaksi dengan AI.",
        },
        {
          title: "Metadata Bisnis",
          desc: "Katalog produk, FAQ, harga, atau konten bisnis lain yang Anda berikan untuk melatih AI.",
        },
        {
          title: "Informasi Teknis",
          desc: "Jenis perangkat, bahasa, lokasi (jika diaktifkan), waktu interaksi, jenis browser, dan sistem operasi.",
        },
      ],
    },
    {
      icon: Eye,
      title: "Bagaimana Kami Menggunakan Data",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      items: [
        { title: "Memberikan balasan otomatis yang cerdas kepada pelanggan" },
        { title: "Memproses pertanyaan pelanggan, pemilihan produk, dan penyelesaian pesanan" },
        { title: "Mempersonalisasi percakapan sesuai dengan nada merek bisnis" },
        { title: "Menghasilkan wawasan pelanggan dan analitik kinerja" },
        { title: "Mengirim follow-up otomatis, promosi, dan pesan kampanye (ketika diotorisasi)" },
        { title: "Meningkatkan kinerja dan akurasi AI dari waktu ke waktu" },
      ],
    },
    {
      icon: Lock,
      title: "Penyimpanan dan Keamanan Data",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      items: [
        { title: "Data Anda disimpan dengan aman di server yang berlokasi di Singapura/Jerman/Amerika Serikat." },
        {
          title:
            "Semua interaksi pelanggan dienkripsi selama transit (HTTPS) dan dibatasi secara internal berdasarkan kebutuhan.",
        },
        {
          title:
            "Kami tidak menyimpan detail pembayaran sensitif. Transaksi ditangani melalui gateway pihak ketiga yang aman (misalnya, QRIS, Shopee, Tokopedia).",
        },
      ],
    },
    {
      icon: Users,
      title: "API & Integrasi Pihak Ketiga",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      items: [
        {
          title:
            "STAVI AI terintegrasi dengan Meta Platforms (WhatsApp, Instagram, Facebook) dan layanan pihak ketiga lainnya (seperti marketplace atau gateway pembayaran).",
        },
        {
          title:
            "Meskipun kami dapat bertukar data dengan API tersebut untuk tujuan operasional, kami tidak membagikan atau menjual data Anda kepada pihak ketiga untuk pemasaran atau tujuan lain yang tidak terkait.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-white/30 to-blue-50/50 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-gray-900/50">
      {/* Simplified animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/20 dark:bg-blue-400/10 rounded-full"
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

      <div className="relative py-12">
        <div className="container px-4 md:px-6 max-w-4xl">
          {/* Back Button */}
          <ScrollReveal>
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-6 border-0">
                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy – STAVI AI
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Berlaku sejak: {currentDate}</p>
            </div>
          </ScrollReveal>

          {/* Introduction */}
          <ScrollReveal>
            <Card className="mb-8 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Modern3DLogo size="md" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4 dark:text-white">Tentang STAVI AI</h2>
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                      STAVI AI ("kami", "milik kami", atau "kita") adalah AI Agent yang dirancang untuk membantu bisnis
                      mengelola interaksi media sosial secara efisien dan otomatis. Kebijakan Privasi ini menjelaskan
                      bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda saat menggunakan layanan kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl dark:text-white">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          className={`p-4 rounded-xl ${section.bgColor} backdrop-blur-sm border-0`}
                        >
                          {item.title ? (
                            <div>
                              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                            </div>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.title}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Section */}
          <ScrollReveal>
            <Card className="mt-8 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl dark:text-white">Hubungi Kami</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Jika Anda memiliki pertanyaan atau kekhawatiran, silakan hubungi tim dukungan kami:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Modern3DLogo size="sm" />
                    <p className="font-bold text-blue-800 dark:text-blue-200">STAVI AI Support</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-600 dark:text-gray-300 min-w-[60px]">Email:</span>
                        <a
                          href="mailto:ola.support@globaltrustech.com"
                          className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                        >
                          ola.support@globaltrustech.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-600 dark:text-gray-300 min-w-[60px]">WhatsApp:</span>
                        <a
                          href="https://wa.me/6285820155171"
                          className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                        >
                          +62 858-2015-5171
                        </a>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-600 dark:text-gray-300 min-w-[60px]">Jam Kerja:</span>
                        <span className="text-gray-700 dark:text-gray-200">Senin – Jumat (09.00 – 18.00 WIB)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Footer */}
          <ScrollReveal>
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Terakhir diperbarui: {currentDate}</p>
              <div className="mt-4">
                <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  Lihat Syarat & Ketentuan
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
