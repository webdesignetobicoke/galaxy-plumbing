'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import EstimateButton from './EstimateButton'

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f434fb126fc55cef5_6127fdc134839f23a5bd318f_happy%20rob-min.webp"
      >
        {/* Galaxy Plumbing's own CDN video */}
        <source src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/613800b1ebfca2f596363a84_hero%203%20sequences-transcode.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — dark at bottom, slight at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f24] via-[#060f24]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060f24]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 pb-24 pt-[320px] sm:pt-[280px] lg:pt-[220px] w-full">
        <div className="max-w-3xl bg-[#060f24]/70 lg:bg-transparent rounded-xl lg:rounded-none p-4 lg:p-0">
          {/* Heading */}
          <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] text-white leading-[0.9] mb-8 drop-shadow-lg lg:drop-shadow-none">
            Peace of mind.<br />
            <span className="italic" style={{ color: '#f5c842' }}>Every time.</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl drop-shadow-lg lg:drop-shadow-none">
            Out-of-this-world customer service and craftsmanship for over 20 years. Your home is in expert hands.
          </p>

          <div className="flex flex-wrap gap-4 w-full">
            <EstimateButton className="btn-gold">
              Free Estimate
            </EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost w-full sm:w-auto">
              Call 416-727-5810
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 z-10">
        <div className="scroll-indicator w-px h-16 bg-gradient-to-b from-transparent to-white/30" />
        <span className="font-condensed text-[9px] tracking-[0.3em] uppercase text-white/30 rotate-90 origin-center translate-x-4">Scroll</span>
      </div>

      {/* Trust badges bottom left */}
      <div className="absolute bottom-10 right-10 z-10 hidden lg:flex items-center gap-6">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
          <div className="flex gap-0.5">{[1,2,3,4,5].map(i=><span key={i} className="text-[#f5c842] text-xs">★</span>)}</div>
          <span className="font-condensed text-[10px] tracking-widest uppercase text-white/60">Google 5.0</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
          <span className="font-condensed text-[10px] tracking-widest uppercase text-white/60">BBB Accredited</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
          <span className="font-condensed text-[10px] tracking-widest uppercase text-white/60">HomeStars Verified</span>
        </div>
      </div>
    </section>
  )
}
