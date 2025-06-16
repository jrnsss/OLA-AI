import Link from "next/link"
import Modern3DLogo from "@/components/modern-3d-logo"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Modern3DLogo size="sm" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                STAVI AI
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 max-w-xs leading-relaxed">
              AI Agent untuk bisnis di media sosial yang membalas pesan dan komentar pelanggan secara otomatis.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Halaman</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-gray-900 dark:text-white">Kontak</h3>
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6 border-0">
              <p className="font-bold text-blue-800 dark:text-blue-200 mb-2">STAVI AI Support</p>
              <div className="space-y-2">
                <p className="flex flex-wrap items-center text-sm">
                  <span className="mr-2 text-gray-600 dark:text-gray-300">Email:</span>
                  <a
                    href="mailto:ola.support@globaltrustech.com"
                    className="hover:text-blue-600 dark:hover:text-blue-400 break-all text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    ola.support@globaltrustech.com
                  </a>
                </p>
                <p className="flex flex-wrap items-center text-sm">
                  <span className="mr-2 text-gray-600 dark:text-gray-300">WhatsApp:</span>
                  <a
                    href="https://wa.me/6285820155171"
                    className="hover:text-blue-600 dark:hover:text-blue-400 break-all text-gray-700 dark:text-gray-200 transition-colors"
                  >
                    +62 858-2015-5171
                  </a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Jam Kerja: Senin – Jumat (09.00 – 18.00 WIB)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} STAVI AI. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
