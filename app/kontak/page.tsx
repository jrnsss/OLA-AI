"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, Clock, MapPin, CheckCircle, Send, Zap } from "lucide-react"
import { motion } from "framer-motion"
import ScrollReveal from "@/components/scroll-reveal"
import Modern3DLogo from "@/components/modern-3d-logo"

export default function KontakPage() {
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

      <div className="relative py-12 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4 border-0">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hubungi Kami
              </h1>
              <p className="text-gray-600 dark:text-gray-300 md:text-xl leading-relaxed">
                Punya pertanyaan tentang STAVI AI? Tim kami siap membantu Anda mencapai kesuksesan bisnis.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 items-start max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <ScrollReveal direction="left">
              <Card className="overflow-hidden shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Modern3DLogo size="sm" />
                    <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Kirim Pesan
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base dark:text-gray-300">
                    Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 1x24 jam.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                        >
                          Nama Lengkap
                        </label>
                        <Input
                          id="name"
                          placeholder="Masukkan nama lengkap"
                          className="border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-700/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="nama@email.com"
                          className="border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-700/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                      >
                        Subjek
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subjek pesan Anda"
                        className="border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-700/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none text-gray-700 dark:text-gray-300"
                      >
                        Pesan
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tulis pesan Anda di sini..."
                        className="min-h-[150px] border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 bg-white/50 dark:bg-gray-700/50 resize-none"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg group"
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        Kirim Pesan
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Right Column - Contact Info & Demo */}
            <div className="space-y-6">
              {/* Demo Card */}
              <ScrollReveal direction="right" delay={0.2}>
                <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="h-6 w-6 text-yellow-300" />
                      <CardTitle className="text-xl">Ingin Demo Langsung?</CardTitle>
                    </div>
                    <CardDescription className="text-blue-100">
                      Jadwalkan demo 15 menit dengan tim kami untuk melihat bagaimana STAVI AI dapat membantu bisnis
                      Anda.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Lihat fitur STAVI AI secara langsung",
                      "Tanya jawab dengan tim ahli kami",
                      "Dapatkan penawaran khusus untuk bisnis Anda",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                        <p className="text-sm">{benefit}</p>
                      </motion.div>
                    ))}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="secondary"
                        className="w-full mt-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                        asChild
                      >
                        <a href="https://wa.me/6285820155171?text=Halo,%20saya%20ingin%20melihat%20demo%20STAVI%20AI">
                          Jadwalkan Demo Gratis
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Contact Methods */}
              <ScrollReveal direction="right" delay={0.4}>
                <Card className="shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl dark:text-white">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      Kontak Langsung
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Hubungi kami melalui salah satu kontak di bawah ini.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        content: "ola.support@globaltrustech.com",
                        href: "mailto:ola.support@globaltrustech.com",
                        subtitle: "Respon dalam 1-2 hari kerja",
                        color: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
                      },
                      {
                        icon: Phone,
                        title: "WhatsApp",
                        content: "+62 858-2015-5171",
                        href: "https://wa.me/6285820155171",
                        subtitle: "Respon cepat pada jam kerja",
                        color: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
                      },
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 transition-all hover:shadow-md border-0"
                      >
                        <div
                          className={`h-12 w-12 rounded-xl ${contact.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <contact.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold dark:text-white">{contact.title}</h3>
                          <a
                            href={contact.href}
                            className="text-blue-600 dark:text-blue-400 hover:underline break-all text-sm"
                          >
                            {contact.content}
                          </a>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{contact.subtitle}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Operating Hours */}
              <ScrollReveal direction="right" delay={0.6}>
                <Card className="shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl dark:text-white">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Jam Operasional
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Waktu layanan dukungan pelanggan kami.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-0">
                        <div className="space-y-3">
                          {[
                            { day: "Senin - Jumat", time: "09.00 - 18.00 WIB", status: "active" },
                            { day: "Sabtu", time: "09.00 - 15.00 WIB", status: "limited" },
                            { day: "Minggu & Hari Libur", time: "Tutup", status: "closed" },
                          ].map((schedule, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-600 last:border-b-0 last:pb-0"
                            >
                              <span className="font-medium dark:text-white">{schedule.day}</span>
                              <span
                                className={`text-xs px-3 py-1 rounded-full ${
                                  schedule.status === "active"
                                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300"
                                    : schedule.status === "limited"
                                      ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300"
                                      : "bg-gray-100 dark:bg-gray-600/50 text-gray-800 dark:text-gray-300"
                                }`}
                              >
                                {schedule.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border-0">
                        <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold dark:text-white">Lokasi</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Jakarta, Indonesia</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Layanan online tersedia di seluruh Indonesia
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
