import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Palette, Shield, Instagram, Facebook, MessageSquare } from "lucide-react"
import SimpleChatAnimation from "@/components/simple-chat-animation"
import FloatingBallsAnimation from "@/components/floating-balls-animation"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Solusi AI untuk Bisnis Online
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                OLA AI – Biar Pesan Pelanggan Dijawab Otomatis
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hemat waktu dan sumber daya dengan AI yang mengelola interaksi pelanggan secara otomatis, meningkatkan
                efisiensi bisnis Anda 24/7.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/kontak">Coba Demo Gratis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/kontak">Hubungi Kami</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gray-100 p-4 shadow-lg">
                <div className="absolute top-4 left-4 right-4 h-8 bg-white rounded-md flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="mt-10 space-y-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div>
                        <p className="text-sm font-medium">Pelanggan</p>
                        <p className="text-sm text-gray-600">Produk ini masih ada gak?</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg shadow-sm ml-12">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-sm font-medium">OLA AI</p>
                        <p className="text-sm text-gray-600">
                          Halo! Makasih udah nanya. Yoi, produk ini masih ada dan siap dikirim. Lo mau pesen sekarang?
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">AI</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div>
                        <p className="text-sm font-medium">Pelanggan</p>
                        <p className="text-sm text-gray-600">Iya, mau pesen. Berapa harganya?</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg shadow-sm ml-12">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-sm font-medium">OLA AI</p>
                        <p className="text-sm text-gray-600">
                          Harganya 150rb udah termasuk ongkir buat area Jabodetabek. Lo bisa langsung checkout di link
                          ini: [link toko]
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Balls Animation Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Teknologi AI yang Mudah Diadopsi</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Majukan bisnis tanpa mengubah alur kerja yang sudah ada. OLA AI menyempurnakan operasional dengan tetap
              mempertahankan nilai inti bisnis Anda.
            </p>
          </div>

          <FloatingBallsAnimation />
        </div>
      </section>

      {/* 3D Animation Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Layanan Otomatis di Semua Platform</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              OLA AI bekerja di berbagai platform komunikasi untuk bisnis kamu
            </p>
          </div>

          <SimpleChatAnimation />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Fitur Utama OLA AI</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Solusi lengkap untuk mengelola komunikasi dengan pelanggan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <MessageCircle className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Respon Otomatis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Balas pesan dan komentar pelanggan secara real-time, 24/7, tanpa perlu kamu online terus-menerus.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Palette className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Sesuai Brand Kamu</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bahasa dan gaya komunikasi dapat disesuaikan dengan karakter brand bisnis kamu.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Shield className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Kenali Sentimen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secara otomatis mengenali dan menanggapi pesan dengan sentimen negatif atau positif dengan tepat.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <MessageSquare className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle>Multi-Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Terhubung dengan WhatsApp, Instagram, dan Facebook untuk pengalaman yang mulus.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mengapa Bisnis Kamu Perlu OLA AI?</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tingkatkan efisiensi dan kepuasan pelanggan dengan bantuan AI yang cerdas
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Hemat Waktu & Tenaga</h3>
                    <p className="text-sm text-gray-500">Gak perlu lagi balas pesan satu per satu secara manual.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Layanan 24/7</h3>
                    <p className="text-sm text-gray-500">
                      Pelanggan dapet respon cepat kapan pun, bahkan pas kamu tidur.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Tingkatkan Konversi</h3>
                    <p className="text-sm text-gray-500">Respon cepat bikin pelanggan lebih gampang buat beli.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Konsistensi Komunikasi</h3>
                    <p className="text-sm text-gray-500">
                      Pastiin semua pelanggan dapet kualitas respon yang sama bagusnya.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button size="lg" asChild>
                  <Link href="/kontak">Mulai Sekarang</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-blue-100 p-6 flex items-center justify-center h-40">
                  <Instagram className="h-16 w-16 text-blue-600" />
                </div>
                <div className="rounded-xl bg-blue-50 p-6 flex items-center justify-center h-56">
                  <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">90%</h3>
                    <p className="text-sm text-gray-600">Penghematan waktu untuk mengelola komunikasi</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-blue-50 p-6 flex items-center justify-center h-56">
                  <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">24/7</h3>
                    <p className="text-sm text-gray-600">Layanan pelanggan non-stop</p>
                  </div>
                </div>
                <div className="rounded-xl bg-blue-100 p-6 flex items-center justify-center h-40">
                  <Facebook className="h-16 w-16 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="rounded-xl bg-blue-600 p-8 md:p-12 shadow-lg">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                  Siap Menghemat Waktu dan Ningkatin Layanan Pelanggan?
                </h2>
                <p className="text-blue-100 md:text-xl/relaxed">
                  Coba OLA AI sekarang dan rasakan transformasi digital yang mulus untuk bisnis Anda.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/kontak">Hubungi Kami</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                    asChild
                  >
                    <Link href="/kontak">Lihat Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-white">Apa Kata Pengguna Kami</h3>
                    <div className="flex justify-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-blue-50 italic">
                      "OLA AI udah ngirit waktu gue sampe 3 jam sehari. Sekarang gue bisa fokus ngembangain produk baru
                      tanpa khawatir chat pelanggan terabaikan."
                    </blockquote>
                    <p className="text-blue-100 font-medium">Rina Wijaya, Pemilik Toko Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
