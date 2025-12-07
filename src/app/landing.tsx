// src/app/landing.tsx
'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter%22)%22 opacity=%220.03%22/%3E%3C/svg%3E')]"></div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-12 text-3xl">
          <a href="#how" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">How it Works</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">Voice Engine</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition">Pricing</a>
          <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 text-xl">Close</button>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/10 bg-[#0d0d0d]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md"></div>
            <span className="font-display font-bold text-xl tracking-tight text-white">Echo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#how" className="hover:text-white transition">How it Works</a>
            <a href="#demo" className="hover:text-white transition">Voice Engine</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://getecho.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID" className="lemonsqueezy-button hidden sm:block px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
              Get Lifetime Access
            </a>
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-3xl">☰</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> v2.0 Now Live
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 text-balance">
              Turn 1 Podcast Into <span className="text-white">30 Days of Content</span> In 9 Minutes.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Echo listens to your episode, learns your voice, and instantly creates viral clips, threads, carousels, and shorts — <span className="text-white font-medium">all sounding exactly like you.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://getecho.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID" 
                 className="lemonsqueezy-button px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition transform hover:-translate-y-1 text-center">
                Claim Lifetime Deal — $149 (97 left)
              </a>
              <Button variant="outline" className="px-8 py-4 border-white/10 hover:bg-white/10 flex items-center gap-2 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch 45s Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              Already saving 400+ creators 10+ hours/week
            </p>
          </div>

          {/* HERO VISUAL */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-50"></div>
            <div className="relative grid grid-cols-2 gap-4 p-4 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
              {/* Left: Raw */}
              <div className="col-span-1 space-y-3 opacity-40 grayscale blur-[1px] transition duration-500 group-hover:blur-0 group-hover:grayscale-0">
                <div className="text-xs text-gray-500 font-mono mb-2">RAW_footage_final_v2.mp4</div>
                <div className="h-24 bg-[#262626] rounded border border-white/5 relative overflow-hidden">
                  <div className="absolute top-1/2 w-full h-[1px] bg-gray-600"></div>
                  <div className="flex items-center justify-center gap-[2px] h-full">
                    <div className="w-1 h-8 bg-gray-600"></div>
                    <div className="w-1 h-12 bg-gray-600"></div>
                    <div className="w-1 h-6 bg-gray-600"></div>
                    <div className="w-1 h-16 bg-gray-600"></div>
                  </div>
                </div>
                <div className="h-4 w-3/4 bg-[#262626] rounded"></div>
                <div className="h-4 w-1/2 bg-[#262626] rounded"></div>
              </div>

              {/* Right: Echo */}
              <div className="col-span-1 space-y-3 relative">
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-20 border-4 border-[#0a0a0a]">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div                 className="p-3 rounded-lg bg-[#141414] border border-primary/30 shadow-[0_0_15px_-5px_rgba(139,92,246,0.3)]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-600"></div>
                    <div className="h-2 w-16 bg-gray-700 rounded"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-gray-600 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-600 rounded"></div>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-white/10 translate-x-4">
                  <div className="aspect-video bg-[#262626] rounded mb-2 flex items-center justify-center">
                    <span className="text-[10px] text-gray-500">LINKEDIN PDF</span>
                  </div>
                  <div className="h-2 w-2/3 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              You're leaving 90% of your content's potential <span className="text-gray-500 line-through decoration-primary">in the trash</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition group">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">4+ Hours Editing</h3>
              <p className="text-gray-400 leading-relaxed">Manually scrubbing through timelines to find that one "viral moment" while your actual business suffers.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition group">
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Writer's Block</h3>
              <p className="text-gray-400 leading-relaxed">Staring at a blank screen trying to turn a 40-minute audio file into a compelling Twitter thread.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition group">
              <div className="w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center text-gray-400 mb-6 group-hover:scale-110 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Amateur Distribution</h3>
              <p className="text-gray-400 leading-relaxed">Posting the same YouTube link on LinkedIn and wondering why nobody clicked. Native content wins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">From Audio to Empire</h2>
          <p className="text-gray-400 text-lg">Four steps. Zero effort. Infinite scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <div className="md:col-span-1 rounded-2xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
            <div className="relative z-10">
              <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-2 block">Step 01</span>
              <h3 className="text-2xl font-bold font-display">Drop it like it's hot</h3>
              <p className="text-gray-400 text-sm mt-2">Paste a YouTube link or upload raw audio.</p>
            </div>
            <div className="relative z-10 w-full h-24 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center bg-white/5 group-hover:border-primary/50 transition">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
            <div className="relative z-10 max-w-sm">
              <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-2 block">Step 02</span>
              <h3 className="text-2xl font-bold font-display">Neural Voice Analysis</h3>
              <p className="text-gray-400 text-sm mt-2">Echo ingests your past 10 episodes to learn your cadence, humor, and vocabulary.</p>
            </div>
            <div className="flex items-end gap-1 h-16 w-full opacity-70">
              <div className="w-2 bg-primary h-[40%] rounded-t animate-pulse"></div>
              <div className="w-2 bg-primary h-[80%] rounded-t animate-pulse" style={{ animationDelay: '100ms' }}></div>
              <div className="w-2 bg-primary h-[60%] rounded-t animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-2 bg-primary h-[100%] rounded-t animate-pulse" style={{ animationDelay: '300ms' }}></div>
              <div className="w-2 bg-primary h-[30%] rounded-t animate-pulse" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 bg-primary h-[70%] rounded-t animate-pulse" style={{ animationDelay: '50ms' }}></div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-2xl bg-[#141414] border border-white/5 p-8 flex flex-row items-center justify-between relative overflow-hidden">
            <div className="relative z-10 max-w-xs">
              <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-2 block">Step 03</span>
              <h3 className="text-2xl font-bold font-display">Asset Generation</h3>
              <p className="text-gray-400 text-sm mt-2">20+ pieces of content generated in seconds. Zero hallucinations.</p>
            </div>
            <div className="relative w-48 h-full flex items-center">
              <div className="absolute right-0 w-40 h-56 bg-gray-800 rounded-xl border border-white/10 rotate-6 shadow-xl z-10"></div>
              <div className="absolute right-4 w-40 h-56 bg-gray-700 rounded-xl border border-white/10 rotate-3 shadow-xl z-20"></div>
              <div className="absolute right-8 w-40 h-56 bg-[#1a1a1a] rounded-xl border border-primary/50 shadow-2xl z-30 p-3 flex flex-col gap-2">
                <div className="w-8 h-8 rounded bg-primary mb-2"></div>
                <div className="h-2 w-full bg-gray-600 rounded"></div>
                <div className="h-2 w-3/4 bg-gray-600 rounded"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 rounded-2xl bg-[#141414] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden hover:bg-white/5 transition">
            <div className="relative z-10">
              <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-2 block">Step 04</span>
              <h3 className="text-2xl font-bold font-display">One-Click Export</h3>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="h-10 rounded border border-white/10 flex items-center justify-center text-[10px] text-gray-400">Notion</div>
              <div className="h-10 rounded border border-white/10 flex items-center justify-center text-[10px] text-gray-400">Buffer</div>
              <div className="h-10 rounded border border-white/10 flex items-center justify-center text-[10px] text-gray-400">Typefully</div>
              <div className="h-10 rounded border border-white/10 flex items-center justify-center text-[10px] text-gray-400">LinkedIn</div>
            </div>
          </div>
        </div>
      </section>

      {/* VOICE DEMO */}
      <section id="demo" className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              It Sounds Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">YOU</span>, Not AI.
            </h2>
            <p className="text-gray-400">We train a micro-model on your specific syntax.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="font-mono text-sm text-red-400">GENERIC LLM OUTPUT</span>
              </div>
              <p className="font-serif italic text-lg text-gray-400 leading-relaxed">
                "In today's fast-paced digital landscape, it is imperative to leverage synergies to maximize output. Content creation is key to success."
              </p>
              <div className="mt-4 text-xs text-red-500/50 uppercase font-bold">Verdict: Robotic, Boring, Ignore.</div>
            </div>

            <div className="p-8 rounded-2xl border border-primary/50 bg-primary/5 relative">
              <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-[#0d0d0d]">ECHO MODEL</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                <span className="font-mono text-sm text-primary">YOUR VOICE CLONE</span>
              </div>
              <p className="font-sans font-medium text-lg text-white leading-relaxed">
                "Look, if you aren't repurposing your content, you're lighting money on fire. Simple as that. You do the work once, you get paid 20 times."
              </p>
              <div className="mt-4 text-xs text-green-400 uppercase font-bold">Verdict: Punchy, Direct, Viral.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-[#141414] border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-700"></div>
              <div>
                <div className="font-bold">Alex Rivera</div>
                <div className="text-xs text-primary">+340% Engagement</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">"I used to spend my entire Sunday editing clips. Now I upload to Echo on Friday afternoon and my content is scheduled for the whole week."</p>
          </div>
          <div className="p-6 rounded-xl bg-[#141414] border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-700"></div>
              <div>
                <div className="font-bold">Sarah Chen</div>
                <div className="text-xs text-primary">Saved 15hrs/week</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">"The voice matching is actually scary good. It doesn't use those cheesy AI emojis or hashtags. It writes exactly how I speak."</p>
          </div>
          <div className="p-6 rounded-xl bg-[#141414] border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-700"></div>
              <div>
                <div className="font-bold">Marcus Jones</div>
                <div className="text-xs text-primary">$8k Sponsor Rev</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">"Consistent content helped me close my biggest sponsor yet. Echo is the only tool in my stack I'd pay double for."</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-lg mx-auto px-6 relative z-10 text-center">
          <div className="text-sm text-gray-500 mb-2">Founder's Deal — Ends Soon</div>
          <div className="text-6xl font-display font-bold mb-2">$149 <span className="text-2xl text-gray-500 line-through">$499</span></div>
          <div className="text-xl mb-6">Lifetime Access · Unlimited Episodes</div>
          
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-lg font-bold animate-pulse mb-8">
            <span>97</span> spots left
          </div>

          <a href="https://getecho.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID" 
             className="lemonsqueezy-button w-full py-5 bg-white text-black font-display font-bold text-xl rounded-xl hover:bg-gray-200 transition shadow-[0_0_30px_rgba(255,255,255,0.4)] block mb-4">
            Claim Lifetime Access Now
          </a>
          
          <p className="text-sm text-gray-500">60-day money-back guarantee • Secured by Stripe</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-md opacity-50"></div>
            <span className="font-display font-bold text-lg text-gray-500">Echo</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Terms</a>
          </div>
          <div className="text-xs text-gray-700">
            © 2025 Echo Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
