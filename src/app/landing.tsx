// src/app/landing.tsx
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Grain */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter%22)%22 opacity=%220.03%22/%3E%3C/svg%3E')]"></div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-10 text-3xl">
          <a href="#how" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">How it Works</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Voice Engine</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Pricing</a>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/10 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md"></div>
            <span className="font-bold text-xl tracking-tight text-white">Echo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#how" className="hover:text-white">How it Works</a>
            <a href="#demo" className="hover:text-white">Voice Engine</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://getecho.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID" className="lemonsqueezy-button hidden sm:block px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200">
              Get Lifetime Access
            </a>
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-3xl">☰</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> v2.0 Now Live
            </div>
            <h1 className="font-bold text-5xl md:text-7xl leading-tight mb-6">
              Turn 1 Podcast Into <span className="text-white">30 Days of Content</span> In 9 Minutes.
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl">
              Echo learns your voice and creates viral clips, threads, carousels & shorts — all sounding exactly like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://getecho.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID" className="lemonsqueezy-button px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] text-center">
                Claim Lifetime Deal — $149 (97 left)
              </a>
              <Button variant="outline" className="px-8 py-4 border-white/10 hover:bg-white/10 flex items-center gap-2">
                Watch 45s Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              Already saving 400+ creators 10+ hours/week
            </p>
          </div>
          {/* Your hero image here */}
        </div>
      </header>

      {/* PRICING — FINAL */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="text-6xl font-bold mb-2">$149 <span className="text-2xl text-gray-500 line-through">$499</span></div>
          <div className="text-xl mb-8">Lifetime Access · Unlimited Episodes</div>
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-6 py-3 rounded-full text-lg font-bold animate-pulse mb-10">
            97 spots left
          </div>
          <a href="https://getecho.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID" className="lemonsqueezy-button w-full py-6 bg-white text-black font-bold text-2xl rounded-xl hover:bg-gray-200 block">
            Claim Lifetime Access Now
          </a>
          <p className="text-sm text-gray-500 mt-6">60-day money-back · Secured by Stripe</p>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/10">
        © 2025 Echo · All rights reserved
      </footer>
    </>
  )
}
