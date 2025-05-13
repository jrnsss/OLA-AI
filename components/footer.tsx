import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <span className="font-bold text-xl">OLA AI</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              AI Agent untuk bisnis di media sosial yang membalas pesan dan komentar pelanggan secara otomatis.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Halaman</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-600">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-sm text-gray-600 hover:text-blue-600">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex flex-wrap items-center">
                <span className="mr-2">Email:</span>
                <a href="mailto:ola.support@globaltrustech.com" className="hover:text-blue-600 break-all">
                  ola.support@globaltrustech.com
                </a>
              </li>
              <li className="text-sm text-gray-600 flex flex-wrap items-center">
                <span className="mr-2">WhatsApp:</span>
                <a href="https://wa.me/6285820155171" className="hover:text-blue-600 break-all">
                  +62 858-2015-5171
                </a>
              </li>
              <li className="text-sm text-gray-600">Jam Kerja: Senin – Jumat (09.00 – 18.00 WIB)</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} OLA AI. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
