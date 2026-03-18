import Link from 'next/link'
import EstimateButton from '@/components/EstimateButton'
export default function Page() {
  return (
    <div>
      <section className="pt-[220px] pb-20 bg-[#060f24] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-condensed text-[11px] tracking-widest uppercase mb-8 transition-colors">← Blog</Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#f5c842] text-[#060f24] font-condensed text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full">Tips & Advice</span>
            <span className="text-white/40 text-base font-condensed">February 2025 · 4 min read</span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] text-white leading-[0.9] mb-6">How to Tell If You Have a <span className="italic text-[#f5c842]">Hidden Water Leak</span></h1>
          <p className="text-white/60 text-lg leading-relaxed">Silent leaks waste thousands of litres and cause massive structural damage before you even notice them.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-8 grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8 text-gray-600 leading-relaxed">
            <h2 className="font-display text-3xl text-[#060f24]">Why Hidden Leaks Are Dangerous</h2>
            <p>Unlike a dripping faucet, hidden leaks operate silently — often behind walls, under slabs, or in crawl spaces. By the time visible damage appears, the problem has often been going on for months.</p>
            <p>A small, continuous leak can cause wood rot, mold growth, foundation damage, and elevated water bills that add up to hundreds of dollars annually.</p>
            <h2 className="font-display text-3xl text-[#060f24]">Warning Signs to Watch For</h2>
            {[{s:'Unexplained increase in your water bill',d:"If your water bill has increased without a change in usage habits, a hidden leak is one of the most common culprits."},{s:'Damp spots on walls, ceilings, or floors',d:"Discoloration, soft spots, or visible dampness without an obvious source is a strong indicator of a leaking pipe nearby."},{s:'Mold or mildew smell without visible mold',d:"A persistent musty odor — especially in closets or under sinks — can mean moisture is accumulating somewhere hidden."},{s:'Sound of running water when nothing is on',d:"If you can hear water moving through pipes when all fixtures are off, you may have a leak allowing constant water flow."},{s:'Low water pressure throughout the home',d:"A significant water leak can reduce pressure throughout your system, making showers weaker and fill times longer."}].map((item,i) => (
              <div key={i} className="p-6 rounded-xl bg-[#f8f6f1]">
                <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] uppercase mb-3">{i+1}. {item.s}</h3>
                <p className="text-base">{item.d}</p>
              </div>
            ))}
            <div className="bg-[#060f24] rounded-2xl p-8">
              <h3 className="font-display text-2xl text-white mb-4">Think you might have a leak?</h3>
              <p className="text-white/60 text-base mb-6">Galaxy Plumbing uses advanced acoustic and thermal detection to locate leaks without unnecessary demolition.</p>
              <div className="flex gap-4">
                <EstimateButton className="btn-gold">Get Help Now</EstimateButton>
                <a href="tel:416-727-5810" className="btn-ghost">416-727-5810</a>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-[#060f24] rounded-2xl p-6 sticky top-28">
              <h3 className="font-display text-xl text-white mb-3">Related Services</h3>
              <div className="space-y-2 mb-6">
                {[{n:'Water Leak Detection',h:'/services/water-leak-detection'},{n:'Drain Camera Inspection',h:'/services/drain-camera-inspection'},{n:'Emergency Repairs',h:'/services/emergency-repairs'}].map((r,i) => (
                  <Link key={i} href={r.h} className="block text-base text-white/50 hover:text-white transition-colors py-2 border-b border-white/8 last:border-0">→ {r.n}</Link>
                ))}
              </div>
              <Link href="/contact" className="btn-gold w-full justify-center text-xs">Free Estimate</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
