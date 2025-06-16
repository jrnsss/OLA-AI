"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.contact": "Kontak",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Syarat & Ketentuan",
    "nav.try": "Coba Sekarang",

    // Brand
    "brand.name": "STAVI AI",
    "brand.status": "Online • Siap bantu kamu",

    // Hero
    "hero.badge": "Solusi AI untuk Bisnis Online",
    "hero.title": "STAVI AI – Biar Pesan Pelanggan Dijawab Otomatis",
    "hero.subtitle":
      "Hemat waktu dan sumber daya dengan AI yang mengelola interaksi pelanggan secara otomatis, meningkatkan efisiensi bisnis Anda 24/7.",
    "hero.cta.primary": "Mulai Coba Gratis",
    "hero.cta.secondary": "Lihat Demo",

    // Benefits
    "benefit.time": "Menghemat waktu",
    "benefit.speed": "Proses lebih cepat",
    "benefit.conversion": "Tingkatkan konversi",

    // Chat messages
    "chat.customer.1": "Hi, aku mau tanya produk ini dong",
    "chat.ai.1": "Hi kak! Aku bantu yaa 😊 Mau tanya produk yang mana nih?",
    "chat.customer.2": "Produk ini masih ada gak buat hari ini?",
    "chat.ai.2": "Masih ada kok kak! Bisa dikirim hari ini juga. Mau langsung order?",
    "chat.placeholder": "Ketik pesan...",
    "chat.completed": "Pesanan selesai!",

    // Order process
    "order.step1.customer": "Aku mau beli tas merah 1 sama sepatu biru 2",
    "order.step1.ai": "Oke kak, lagi aku proses ya... Tas merah (1) sama sepatu biru (2) ✅",
    "order.step2.customer": "Berapa totalnya kak?",
    "order.step2.ai": "Total 450rb kak. Mau lanjut bayar sekarang?",
    "order.step3.customer": "Iya mau bayar",
    "order.step3.ai": "Link bayar udah aku kirim ya kak. Pembayaran berhasil! 🎉",
    "order.step4.ai": "Pesanan lagi diproses kak, 1-2 hari kerja udah sampai deh!",

    // Sections
    "section.process.title": "Lihat Bagaimana STAVI AI Bekerja",
    "section.process.subtitle": "Dari chat hingga pembayaran, semua berjalan otomatis dalam satu percakapan",
    "section.tech.title": "Bikin Bisnis Anda Jadi Lebih Cepat dan Mudah",
    "section.tech.subtitle":
      "STAVI AI membantu Anda membuat bisnis lebih mudah dan cepat. Coba dan rasakan bedanya sekarang!",
    "section.platform.title": "Fitur Canggih STAVI AI",
    "section.platform.subtitle": "Teknologi terdepan yang mudah digunakan untuk semua jenis bisnis",

    // Features
    "features.title": "Fitur Utama STAVI AI",
    "features.subtitle": "Solusi lengkap untuk mengelola komunikasi dengan pelanggan",
    "feature.auto.title": "Respon Otomatis",
    "feature.auto.desc":
      "Balas pesan dan komentar pelanggan secara real-time, 24/7, tanpa perlu kamu online terus-menerus.",
    "feature.brand.title": "Sesuai Brand Kamu",
    "feature.brand.desc": "Bahasa dan gaya komunikasi dapat disesuaikan dengan karakter brand bisnis kamu.",
    "feature.sentiment.title": "Kenali Sentimen",
    "feature.sentiment.desc":
      "Secara otomatis mengenali dan menanggapi pesan dengan sentimen negatif atau positif dengan tepat.",
    "feature.multi.title": "Multi-Platform",
    "feature.multi.desc": "Terhubung dengan WhatsApp, Instagram, dan Facebook untuk pengalaman yang mulus.",

    // Showcase features
    "showcase.subtitle": "Powered by Advanced AI",
    "showcase.feature1.title": "AI Cerdas",
    "showcase.feature1.desc": "Memahami konteks percakapan dengan akurasi tinggi",
    "showcase.feature2.title": "Respon Instan",
    "showcase.feature2.desc": "Balas dalam hitungan detik, 24/7 tanpa henti",
    "showcase.feature3.title": "Keamanan Terjamin",
    "showcase.feature3.desc": "Data pelanggan terlindungi dengan enkripsi tingkat enterprise",
    "showcase.feature4.title": "Multi-Platform",
    "showcase.feature4.desc": "Satu dashboard untuk semua platform komunikasi",
    "showcase.feature5.title": "Analytics Real-time",
    "showcase.feature5.desc": "Pantau performa dan insights pelanggan secara langsung",
    "showcase.feature6.title": "Setup 5 Menit",
    "showcase.feature6.desc": "Mulai dalam 5 menit, tanpa coding atau setup rumit",

    // Benefits section
    "benefits.title": "Mengapa Bisnis Kamu Perlu STAVI AI?",
    "benefits.subtitle": "Tingkatkan efisiensi dan kepuasan pelanggan dengan bantuan AI yang cerdas",
    "benefit.save.title": "Hemat Waktu & Tenaga",
    "benefit.save.desc": "Gak perlu lagi balas pesan satu per satu secara manual.",
    "benefit.247.title": "Layanan 24/7",
    "benefit.247.desc": "Pelanggan dapet respon cepat kapan pun, bahkan pas kamu tidur.",
    "benefit.convert.title": "Tingkatkan Konversi",
    "benefit.convert.desc": "Respon cepat bikin pelanggan lebih gampang buat beli.",
    "benefit.consistent.title": "Konsistensi Komunikasi",
    "benefit.consistent.desc": "Pastiin semua pelanggan dapet kualitas respon yang sama bagusnya.",

    // CTA
    "cta.title": "Siap Menghemat Waktu dan Ningkatin Layanan Pelanggan?",
    "cta.subtitle": "Coba STAVI AI sekarang dan rasakan transformasi digital yang mulus untuk bisnis Anda.",
    "cta.contact": "Hubungi Kami",
    "cta.demo": "Lihat Demo",
    "cta.testimonial": "Apa Kata Pengguna Kami",
    "cta.quote":
      "STAVI AI udah ngirit waktu gue sampe 3 jam sehari. Sekarang gue bisa fokus ngembangain produk baru tanpa khawatir chat pelanggan terabaikan.",
    "cta.author": "Rina Wijaya, Pemilik Toko Online",

    // Tech messages - Updated to be simpler and more action-oriented
    "tech.msg1": "Setup cuma 5 menit, langsung bisa dipakai!",
    "tech.msg2": "Gak perlu ribet, STAVI AI langsung kerja untuk bisnis kamu.",
    "tech.msg3": "Bisnis jadi lebih cepat, pelanggan lebih puas.",
    "tech.msg4": "Hemat waktu 3 jam sehari, fokus ke hal yang lebih penting.",
    "tech.msg5": "Mulai sekarang, rasakan bedanya dalam 24 jam!",
    "tech.cta": "Mulai Sekarang!",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.contact": "Contact",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Terms & Conditions",
    "nav.try": "Try Now",

    // Brand
    "brand.name": "STAVI AI",
    "brand.status": "Online • Ready to help you",

    // Hero
    "hero.badge": "AI Solution for Online Business",
    "hero.title": "STAVI AI – Let Customer Messages Be Answered Automatically",
    "hero.subtitle":
      "Save time and resources with AI that manages customer interactions automatically, improving your business efficiency 24/7.",
    "hero.cta.primary": "Start Free Trial",
    "hero.cta.secondary": "View Demo",

    // Benefits
    "benefit.time": "Save time",
    "benefit.speed": "Faster process",
    "benefit.conversion": "Increase conversion",

    // Chat messages
    "chat.customer.1": "Hi, I want to ask about this product",
    "chat.ai.1": "Hi there! I'm here to help 😊 Which product would you like to know about?",
    "chat.customer.2": "Is this product still available for today?",
    "chat.ai.2": "Yes it's available! We can ship it today too. Want to order now?",
    "chat.placeholder": "Type message...",
    "chat.completed": "Order completed!",

    // Order process
    "order.step1.customer": "I want to buy 1 red bag and 2 blue shoes",
    "order.step1.ai": "Got it! Processing your order... Red bag (1) and blue shoes (2) ✅",
    "order.step2.customer": "What's the total price?",
    "order.step2.ai": "Total is $45. Ready to proceed with payment?",
    "order.step3.customer": "Yes, I want to pay",
    "order.step3.ai": "Payment link sent! Payment successful! 🎉",
    "order.step4.ai": "Your order is being processed, delivery in 1-2 business days!",

    // Sections
    "section.process.title": "See How STAVI AI Works",
    "section.process.subtitle": "From chat to payment, everything runs automatically in one conversation",
    "section.tech.title": "Make Your Business Faster and Easier",
    "section.tech.subtitle":
      "STAVI AI helps you make your business easier and faster. Try it and feel the difference now!",
    "section.platform.title": "Advanced STAVI AI Features",
    "section.platform.subtitle": "Cutting-edge technology that's easy to use for all types of businesses",

    // Features
    "features.title": "STAVI AI Key Features",
    "features.subtitle": "Complete solution for managing customer communication",
    "feature.auto.title": "Automatic Response",
    "feature.auto.desc":
      "Reply to customer messages and comments in real-time, 24/7, without needing to be online constantly.",
    "feature.brand.title": "Match Your Brand",
    "feature.brand.desc": "Language and communication style can be customized to match your business brand character.",
    "feature.sentiment.title": "Recognize Sentiment",
    "feature.sentiment.desc":
      "Automatically recognizes and responds to messages with negative or positive sentiment accurately.",
    "feature.multi.title": "Multi-Platform",
    "feature.multi.desc": "Connect with WhatsApp, Instagram, and Facebook for a seamless experience.",

    // Showcase features
    "showcase.subtitle": "Powered by Advanced AI",
    "showcase.feature1.title": "Smart AI",
    "showcase.feature1.desc": "Understands conversation context with high accuracy",
    "showcase.feature2.title": "Instant Response",
    "showcase.feature2.desc": "Replies in seconds, 24/7 non-stop",
    "showcase.feature3.title": "Guaranteed Security",
    "showcase.feature3.desc": "Customer data protected with enterprise-level encryption",
    "showcase.feature4.title": "Multi-Platform",
    "showcase.feature4.desc": "One dashboard for all communication platforms",
    "showcase.feature5.title": "Real-time Analytics",
    "showcase.feature5.desc": "Monitor performance and customer insights directly",
    "showcase.feature6.title": "5-Minute Setup",
    "showcase.feature6.desc": "Start in 5 minutes, no coding or complex setup required",

    // Benefits section
    "benefits.title": "Why Does Your Business Need STAVI AI?",
    "benefits.subtitle": "Improve efficiency and customer satisfaction with intelligent AI assistance",
    "benefit.save.title": "Save Time & Energy",
    "benefit.save.desc": "No need to reply to messages one by one manually anymore.",
    "benefit.247.title": "24/7 Service",
    "benefit.247.desc": "Customers get quick responses anytime, even when you're sleeping.",
    "benefit.convert.title": "Increase Conversion",
    "benefit.convert.desc": "Quick responses make customers more likely to buy.",
    "benefit.consistent.title": "Communication Consistency",
    "benefit.consistent.desc": "Ensure all customers get the same quality of response.",

    // CTA
    "cta.title": "Ready to Save Time and Improve Customer Service?",
    "cta.subtitle": "Try STAVI AI now and experience seamless digital transformation for your business.",
    "cta.contact": "Contact Us",
    "cta.demo": "View Demo",
    "cta.testimonial": "What Our Users Say",
    "cta.quote":
      "STAVI AI has saved me up to 3 hours a day. Now I can focus on developing new products without worrying about neglected customer chats.",
    "cta.author": "Rina Wijaya, Online Store Owner",

    // Tech messages - Updated to be simpler and more action-oriented
    "tech.msg1": "Setup in just 5 minutes, ready to use immediately!",
    "tech.msg2": "No hassle needed, STAVI AI works instantly for your business.",
    "tech.msg3": "Business becomes faster, customers more satisfied.",
    "tech.msg4": "Save 3 hours daily, focus on more important things.",
    "tech.msg5": "Start now, feel the difference in 24 hours!",
    "tech.cta": "Start Now!",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("id")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("stavi-language")
      if (savedLanguage && (savedLanguage === "id" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.log("localStorage not available")
    }
    setIsLoaded(true)
  }, [])

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang)
    try {
      localStorage.setItem("stavi-language", lang)
    } catch (error) {
      console.log("localStorage not available")
    }
  }

  const t = (key: string): string => {
    if (!isLoaded) return key
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.id] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
