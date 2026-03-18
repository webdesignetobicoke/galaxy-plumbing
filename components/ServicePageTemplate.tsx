'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EstimateButton from './EstimateButton'

interface ServicePageProps {
  title: string
  tagline: string
  description: string
  body: string[]
  icon: string
  benefits: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  related: { name: string; href: string }[]
  videoSrc?: string
  videoPoster?: string
}

function ServiceVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) ref.current?.play().catch(()=>{})
        else ref.current?.pause()
      })
    }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video">
      <video ref={ref} muted loop playsInline preload="metadata" poster={poster}
        className="absolute inset-0 w-full h-full object-cover">
        <source src={src} type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/50 to-transparent"/>
    </div>
  )
}

export default function ServicePageTemplate(props: ServicePageProps) {
  const { title, tagline, description, body, icon, benefits, faqs, related, videoSrc, videoPoster } = props
  return (
    <div>
      {/* Hero */}
      <section className="pt-[220px] pb-20 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 60% 40%, #f5c842 0%, transparent 60%)' }}/>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] text-white leading-[0.9] mb-6">{title}</h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end lg:items-end">
              <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
              <a href="tel:416-727-5810" className="btn-ghost">416-727-5810</a>
            </div>
          </div>
        </div>
      </section>

      {/* Body + Sidebar */}
      <section className="max-w-[1400px] mx-auto px-8 py-24 grid lg:grid-cols-3 gap-16">
        {/* Main */}
        <div className="lg:col-span-2 space-y-12">
          {/* Video if provided */}
          {videoSrc && videoPoster && (
            <ServiceVideo src={videoSrc} poster={videoPoster} />
          )}

          {/* Text */}
          <div className="space-y-5 text-gray-600 leading-relaxed">
            {body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {/* Benefits */}
          <div>
            <h2 className="font-display text-4xl text-[#060f24] mb-8">Why choose Galaxy Plumbing</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 rounded-xl border border-gray-100 hover:border-[#060f24]/20 hover:shadow-md transition-all service-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="gold-dot"/>
                    <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] uppercase">{b.title}</h3>
                  </div>
                  <p className="text-base text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {faqs.length > 0 && (
            <div>
              <h2 className="font-display text-3xl text-[#060f24] mb-8">Common Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[#f8f6f1] border border-transparent">
                    <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] uppercase mb-3">{faq.q}</h3>
                    <p className="text-base text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-[#060f24] rounded-2xl p-8 sticky top-28">
            <Image src={icon} alt="Service icon" width={40} height={40} className="w-[40px] h-[40px] object-contain mb-4" />
            <h3 className="font-display text-2xl text-white mb-3">Ready to start?</h3>
            <p className="text-white/50 text-base leading-relaxed mb-7">Get a free, no-obligation estimate. We respond fast.</p>
            <div className="space-y-3">
              <EstimateButton className="btn-gold w-full justify-center">Free Estimate</EstimateButton>
              <a href="tel:416-727-5810" className="btn-ghost w-full justify-center">416-727-5810</a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/8">
              <div className="font-condensed text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">Available</div>
              <div className="font-display text-3xl text-[#f5c842]">24/7</div>
              <div className="text-xs text-white/30 mt-1">Emergency service always on</div>
            </div>
          </div>

          <div className="bg-[#f8f6f1] rounded-2xl p-6">
            <h4 className="font-condensed text-[14px] tracking-[0.2em] uppercase text-[#e8a800] mb-4">Related Services</h4>
            <div className="space-y-1">
              {related.map((r, i) => (
                <Link key={i} href={r.href}
                  className="flex items-center gap-2 py-2.5 border-b border-gray-200 last:border-0 text-base text-gray-600 hover:text-[#060f24] transition-colors group">
                  <span className="text-[#e8a800] text-xs group-hover:translate-x-1 transition-transform">→</span>
                  {r.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h4 className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 mb-4">Financing Available</h4>
            <p className="text-base text-gray-500 mb-4">Don't let budget stop you from essential repairs.</p>
            <Link href="/apply-for-financing" className="btn-ghost-navy w-full justify-center text-xs">Apply for Financing</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
