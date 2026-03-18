import Link from 'next/link'
import Image from 'next/image'
import EstimateButton from '@/components/EstimateButton'
import { Zap, SlidersHorizontal, ClipboardCheck, Wrench } from 'lucide-react'

const benefits = [
  { icon: <Zap size={40} strokeWidth={1.5} className="mx-auto" />, title: 'Fast Approval', desc: 'Most applications are approved within minutes — so your project can start right away.' },
  { icon: <SlidersHorizontal size={40} strokeWidth={1.5} className="mx-auto" />, title: 'Flexible Terms', desc: 'Choose from a range of repayment schedules that fit comfortably within your budget.' },
  { icon: <ClipboardCheck size={40} strokeWidth={1.5} className="mx-auto" />, title: 'Simple Application', desc: 'Quick online application with no hidden fees. Know exactly what you\u0027re paying.' },
  { icon: <Wrench size={40} strokeWidth={1.5} className="mx-auto" />, title: 'All Services Covered', desc: 'Finance any plumbing project — from emergency repairs to full bathroom renovations.' },
]

const steps = [
  { num: '01', title: 'Get Your Estimate', desc: 'Contact us for a free, no-obligation estimate on your plumbing project.' },
  { num: '02', title: 'Apply Online', desc: 'Complete the simple Financeit application — it only takes a few minutes.' },
  { num: '03', title: 'Get Approved', desc: 'Receive your approval quickly and choose the payment plan that works for you.' },
  { num: '04', title: 'Work Begins', desc: 'We start your project right away. Pay over time with easy monthly payments.' },
]

const faqs = [
  { q: 'Who is eligible?', a: 'Most homeowners are eligible. The application process is simple and decisions are typically made quickly.' },
  { q: 'What work can be financed?', a: 'Most services including water heater replacement, sump pump, backwater valve, drain work, and renovation projects.' },
  { q: 'What are the interest rates?', a: 'Rates vary based on your credit profile and term selected. Apply online to see your personalized offer.' },
  { q: 'How quickly can I get approved?', a: 'Most applications receive a decision within minutes. Work can typically begin within days.' },
  { q: 'Is there a minimum loan amount?', a: 'Financing is available for projects of varying sizes. Contact us to discuss your specific project.' },
]

export default function Page() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #f5c842 0%, transparent 60%)' }} />
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white leading-[0.85] mb-8">
              Flexible<br /><span className="italic text-[#f5c842]">Financing</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Don't let budget hold you back. We've partnered with Financeit to offer flexible payment plans so you can get the plumbing work you need — and pay over time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end lg:items-end">
            <a href="https://www.financeit.ca" target="_blank" rel="noopener noreferrer" className="btn-gold text-[20px] px-10 py-5">Apply Online Now</a>
            <a href="tel:416-727-5810" className="btn-ghost text-[20px] px-10 py-5">416-727-5810</a>
          </div>
        </div>
      </section>

      {/* ─── FINANCEIT PARTNER SECTION ─── */}
      <section className="bg-[#f8f6f1] py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-shrink-0">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <Image
                  src="/financeit logo.png"
                  alt="Financeit — Our Financing Partner"
                  width={280}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div>
              <p className="label-chip mb-6">Our Financing Partner</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#060f24] leading-[1.1] mb-5">
                Powered by <span className="italic">Financeit</span>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Financeit is one of Canada's leading point-of-sale financing platforms, trusted by thousands of homeowners and service providers. Their secure, simple application process makes it easy to get the financing you need for any plumbing project — big or small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28">
        <div className="text-center mb-16">
          <p className="label-chip mb-4 justify-center">No Budget? No Problem.</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
            Essential plumbing work<br /><span className="italic">shouldn't wait.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="service-card bg-white rounded-xl p-8 border border-gray-100 text-center">
              <div className="text-5xl mb-5 grayscale">{b.icon}</div>
              <h3 className="font-display text-2xl text-[#060f24] mb-3">{b.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#060f24] py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label-chip mb-4 justify-center">Step by Step</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white leading-[1.05]">
              How it <span className="italic text-[#f5c842]">works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="font-display text-6xl text-[#f5c842]/20 mb-4">{s.num}</div>
                <h3 className="font-display text-xl text-white mb-3">{s.title}</h3>
                <p className="text-white/50 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-[#f5c842]/30 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="https://www.financeit.ca" target="_blank" rel="noopener noreferrer" className="btn-gold">Apply Online Now</a>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28">
        <div className="text-center mb-16">
          <p className="label-chip mb-4 justify-center">Questions?</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
            Frequently <span className="italic">asked</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#f8f6f1]">
              <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] uppercase mb-3">{faq.q}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#f8f6f1] py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] mb-5">
            Ready to<br /><span className="italic">get started?</span>
          </h2>
          <p className="text-gray-500 mb-10">Apply for financing today or contact us for a free estimate on your project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.financeit.ca" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply Online Now</a>
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
          </div>
        </div>
      </section>
    </div>
  )
}
