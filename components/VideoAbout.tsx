'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'

export default function VideoAbout() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) ref.current?.play().catch(()=>{})
        else ref.current?.pause()
      })
    }, { threshold: 0.25 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-[#060f24] py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <video
            ref={ref}
            muted loop playsInline preload="metadata"
            poster="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f843ec04cc83de0b1_6127fe214f913d483b85ebb3_faucet_installation-min-webp.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/61292528c18dc048a3c6cb2c_2%20first%20sequences-transcode.mp4" type="video/mp4"/>
          </video>
          <div className="absolute inset-0 bg-[#060f24]/20"/>
          {/* Corner tag */}
          <div className="absolute top-5 left-5 bg-[#f5c842] text-[#060f24] font-condensed text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
            In The Field
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="label-chip-white mb-6">'Round the city, 'round the clock</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] mb-6">
            We are the<br/>
            <span className="italic text-[#f5c842]">plumbers</span><br/>
            you can trust.
          </h2>
          <div className="space-y-4 text-white/50 leading-relaxed mb-10">
            <p>Galaxy Plumbing serves the Greater Toronto Area 24/7. We make you a priority. No matter where, no matter the time — we've got you covered.</p>
            <p>Our experts have more than 20 years of expertise and will always offer a quote with competitive prices. We are the friendliest professional plumbing service you'll ever call.</p>
          </div>
          <Link href="/contact" className="btn-gold">Free Estimate</Link>
        </div>
      </div>
    </section>
  )
}
