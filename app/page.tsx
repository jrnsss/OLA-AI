"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Palette, Shield, Instagram, Facebook, MessageSquare } from "lucide-react"
import SimpleTextAnimation from "@/components/simple-text-animation"
import EnhancedHero from "@/components/enhanced-hero"
import AnimatedOrderProcess from "@/components/animated-order-process"
import ScrollReveal from "@/components/scroll-reveal"
import EnhancedButton from "@/components/enhanced-button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import AdvancedFeaturesShowcase from "@/components/advanced-features-showcase"

function HomePage() {
  const { t, isLoaded } = useLanguage()

  // Show loading state while language context is loading
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading STAVI AI...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Animated Order Process Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl dark:text-white">
                {t("section.process.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("section.process.subtitle")}
              </p>
            </div>

            <AnimatedOrderProcess />
          </div>
        </section>
      </ScrollReveal>

      {/* Simple Text Animation Section - Replaced Floating Balls */}
      <ScrollReveal direction="left">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white/30 to-blue-50/30 dark:from-gray-900/30 dark:to-gray-800/30 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl dark:text-white">
                {t("section.tech.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("section.tech.subtitle")}
              </p>
            </div>

            <SimpleTextAnimation />
          </div>
        </section>
      </ScrollReveal>

      {/* Advanced Features Showcase Section */}
      <ScrollReveal direction="right">
        <section className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl dark:text-white">
                {t("section.platform.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("section.platform.subtitle")}
              </p>
            </div>

            <AdvancedFeaturesShowcase />
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl dark:text-white">
                {t("features.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("features.subtitle")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: t("feature.auto.title"),
                  description: t("feature.auto.desc"),
                },
                {
                  icon: Palette,
                  title: t("feature.brand.title"),
                  description: t("feature.brand.desc"),
                },
                {
                  icon: Shield,
                  title: t("feature.sentiment.title"),
                  description: t("feature.sentiment.desc"),
                },
                {
                  icon: MessageSquare,
                  title: t("feature.multi.title"),
                  description: t("feature.multi.desc"),
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-md">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 rounded-full bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-800/50 transition-colors">
                        <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-xl dark:text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed dark:text-gray-300">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits Section */}
      <ScrollReveal direction="left">
        <section className="py-16 md:py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl dark:text-white">
                    {t("benefits.title")}
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{t("benefits.subtitle")}</p>
                </div>

                <ul className="space-y-6">
                  {[
                    {
                      title: t("benefit.save.title"),
                      description: t("benefit.save.desc"),
                    },
                    {
                      title: t("benefit.247.title"),
                      description: t("benefit.247.desc"),
                    },
                    {
                      title: t("benefit.convert.title"),
                      description: t("benefit.convert.desc"),
                    },
                    {
                      title: t("benefit.consistent.title"),
                      description: t("benefit.consistent.desc"),
                    },
                  ].map((benefit, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold mb-2 dark:text-white">{benefit.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
                        </div>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>

                <div className="pt-4">
                  <EnhancedButton
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
                    asChild
                  >
                    <Link href="/kontak">Mulai Sekarang</Link>
                  </EnhancedButton>
                </div>
              </div>

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-6">
                    <div className="rounded-2xl bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm p-8 flex items-center justify-center h-48 hover:bg-blue-200/80 dark:hover:bg-blue-800/50 transition-colors border-0 shadow-md">
                      <Instagram className="h-20 w-20 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm p-8 flex items-center justify-center h-64 hover:bg-blue-100/80 dark:hover:bg-blue-800/30 transition-colors border-0 shadow-md">
                      <div className="text-center">
                        <h3 className="font-bold text-3xl mb-3 text-blue-600 dark:text-blue-400">90%</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          Penghematan waktu untuk mengelola komunikasi
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm p-8 flex items-center justify-center h-64 hover:bg-blue-100/80 dark:hover:bg-blue-800/30 transition-colors border-0 shadow-md">
                      <div className="text-center">
                        <h3 className="font-bold text-3xl mb-3 text-blue-600 dark:text-blue-400">24/7</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Layanan pelanggan non-stop</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-blue-100/80 dark:bg-blue-900/50 backdrop-blur-sm p-8 flex items-center justify-center h-48 hover:bg-blue-200/80 dark:hover:bg-blue-800/50 transition-colors border-0 shadow-md">
                      <Facebook className="h-20 w-20 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600/90 to-purple-700/90 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-8 md:p-16 shadow-2xl border-0">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                    {t("cta.title")}
                  </h2>
                  <p className="text-xl text-blue-100 leading-relaxed">{t("cta.subtitle")}</p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <EnhancedButton
                      variant="secondary"
                      size="lg"
                      className="bg-white/90 text-blue-600 hover:bg-white backdrop-blur-sm px-8 py-4"
                      asChild
                    >
                      <Link href="/kontak">{t("cta.contact")}</Link>
                    </EnhancedButton>
                    <EnhancedButton
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/80 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4"
                      asChild
                    >
                      <Link href="/kontak">{t("cta.demo")}</Link>
                    </EnhancedButton>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 border-0">
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-bold text-white">{t("cta.testimonial")}</h3>
                      <div className="flex justify-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-6 w-6 fill-current text-yellow-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-blue-50 italic text-lg leading-relaxed">
                        "{t("cta.quote")}"
                      </blockquote>
                      <p className="text-blue-100 font-semibold">{t("cta.author")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}

export default function Home() {
  return <HomePage />
}
