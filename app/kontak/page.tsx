import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone, Clock, MapPin, CheckCircle } from "lucide-react"

export default function KontakPage() {
  return (
    <div className="py-12 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70 -z-10"></div>
      <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-blue-100 rounded-full opacity-50 -z-10"></div>
      <div className="absolute bottom-1/3 right-1/6 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>

      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-full mb-2">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Hubungi Kami</h1>
          <p className="text-gray-500 md:text-xl/relaxed">
            Punya pertanyaan tentang OLA AI? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Kirim Pesan</span>
                </CardTitle>
                <CardDescription>Isi formulir di bawah ini dan kami akan menghubungi Anda segera.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nama
                      </label>
                      <Input id="name" placeholder="Nama Lengkap" className="border-gray-200 focus:border-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        className="border-gray-200 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subjek
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subjek pesan Anda"
                      className="border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      className="min-h-[150px] border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Ingin Demo Langsung?</CardTitle>
                <CardDescription className="text-blue-100">
                  Jadwalkan demo 15 menit dengan tim kami untuk melihat bagaimana OLA AI dapat membantu bisnis Anda.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <p className="text-sm">Lihat fitur OLA AI secara langsung</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <p className="text-sm">Tanya jawab dengan tim ahli kami</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <p className="text-sm">Dapatkan penawaran khusus untuk bisnis Anda</p>
                </div>
                <Button variant="secondary" className="w-full mt-4" asChild>
                  <a href="https://wa.me/6285820155171?text=Halo,%20saya%20ingin%20melihat%20demo%20OLA%20AI">
                    Jadwalkan Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Kontak Langsung</span>
                </CardTitle>
                <CardDescription>Hubungi kami melalui salah satu kontak di bawah ini.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500">
                      <a
                        href="mailto:ola.support@globaltrustech.com"
                        className="text-blue-600 hover:underline break-all"
                      >
                        ola.support@globaltrustech.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Respon dalam 1-2 hari kerja</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-sm text-gray-500">
                      <a href="https://wa.me/6285820155171" className="text-blue-600 hover:underline break-all">
                        +62 858-2015-5171
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Respon cepat pada jam kerja</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-gray-500">Tersedia di website kami pada jam kerja</p>
                    <Button variant="outline" size="sm" className="mt-2" asChild>
                      <a href="https://wa.me/6285820155171">Mulai Chat</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>Jam Operasional</span>
                </CardTitle>
                <CardDescription>Waktu layanan dukungan pelanggan kami.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Senin - Jumat</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          09.00 - 18.00 WIB
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <span className="font-medium">Sabtu</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          09.00 - 15.00 WIB
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Minggu & Hari Libur</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Tutup</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Lokasi</h3>
                      <p className="text-sm text-gray-500 mt-1">Jakarta, Indonesia</p>
                      <p className="text-sm text-gray-500 mt-1">Layanan online tersedia di seluruh Indonesia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
