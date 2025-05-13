import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70 -z-10"></div>

      <div className="container px-4 md:px-6 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Link>

        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Syarat & Ketentuan – OLA AI</h1>
          <p className="text-gray-600">Berlaku sejak: {currentDate}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-lg leading-relaxed">
            Selamat datang di OLA AI. Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h2 className="text-xl font-bold">Definisi</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  <strong className="text-blue-800">OLA AI:</strong> Layanan otomatisasi pesan dan komentar berbasis
                  kecerdasan buatan yang disediakan oleh kami.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  <strong className="text-blue-800">Pengguna:</strong> Individu atau entitas bisnis yang menggunakan
                  layanan OLA AI.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  <strong className="text-blue-800">Platform:</strong> Media sosial seperti WhatsApp, Instagram,
                  Facebook, atau platform lain yang terintegrasi dengan OLA AI.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h2 className="text-xl font-bold">Penggunaan Layanan</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  OLA AI adalah layanan otomatisasi yang membantu bisnis mengelola interaksi pelanggan di berbagai
                  platform komunikasi.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  Pengguna bertanggung jawab untuk memastikan bahwa penggunaan OLA AI sesuai dengan ketentuan layanan
                  platform media sosial yang terkait.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  OLA AI tidak menyimpan data pelanggan kecuali diizinkan oleh pengguna untuk tujuan peningkatan
                  layanan.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h2 className="text-xl font-bold">Privasi Data</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  OLA AI menghormati privasi pengguna dan pelanggan mereka. Kami hanya mengumpulkan data yang diperlukan
                  untuk menyediakan layanan.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>Data yang dikumpulkan akan diproses sesuai dengan Kebijakan Privasi kami.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  Pengguna bertanggung jawab untuk mendapatkan persetujuan dari pelanggan mereka terkait penggunaan data
                  oleh layanan pihak ketiga seperti OLA AI.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h2 className="text-xl font-bold">Batasan Tanggung Jawab</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>OLA AI menyediakan layanan "sebagaimana adanya" tanpa jaminan apapun.</div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  Kami tidak bertanggung jawab atas kerugian bisnis, kehilangan data, atau masalah lain yang mungkin
                  timbul dari penggunaan layanan kami.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <span className="text-blue-600 text-xs">•</span>
                </div>
                <div>
                  Pengguna bertanggung jawab penuh atas konten yang dihasilkan oleh OLA AI berdasarkan pengaturan dan
                  pelatihan yang diberikan oleh pengguna.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8 mt-8">
          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">5</span>
              </div>
              <h2 className="text-xl font-bold">Perubahan Layanan</h2>
            </div>
            <p className="ml-11">
              Kami berhak untuk mengubah, memodifikasi, atau menghentikan layanan OLA AI kapan saja dengan atau tanpa
              pemberitahuan sebelumnya.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">6</span>
              </div>
              <h2 className="text-xl font-bold">Hukum yang Berlaku</h2>
            </div>
            <p className="ml-11">
              Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap perselisihan yang timbul akan
              diselesaikan melalui musyawarah atau melalui pengadilan yang berwenang di Indonesia.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold">7</span>
              </div>
              <h2 className="text-xl font-bold">Kontak</h2>
            </div>
            <p className="ml-11 mb-4">
              Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
            </p>
            <div className="ml-11 bg-blue-50 rounded-lg p-6">
              <p className="font-bold text-blue-800 mb-2">OLA AI Support</p>
              <div className="space-y-2">
                <p className="flex flex-wrap items-center">
                  <span className="w-16 inline-block text-gray-600">Email:</span>
                  <a href="mailto:ola.support@globaltrustech.com" className="text-blue-600 hover:underline break-all">
                    ola.support@globaltrustech.com
                  </a>
                </p>
                <p className="flex flex-wrap items-center">
                  <span className="w-16 inline-block text-gray-600">WhatsApp:</span>
                  <a href="https://wa.me/6285820155171" className="text-blue-600 hover:underline break-all">
                    +62 858-2015-5171
                  </a>
                </p>
                <p className="flex flex-wrap items-center">
                  <span className="w-16 inline-block text-gray-600">Jam Kerja:</span>
                  <span>Senin – Jumat (09.00 – 18.00 WIB)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Terakhir diperbarui: {currentDate}</p>
          <div className="mt-4">
            <Link href="/privacy-policy" className="text-blue-600 hover:underline text-sm">
              Lihat Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
