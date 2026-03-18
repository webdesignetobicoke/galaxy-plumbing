import Link from 'next/link'
import EstimateButton from '@/components/EstimateButton'

const services = [
  'Steam Showers',
  'Shower Heads',
  'Leaky Pipes & Faucets',
  'Clogged Drains',
  'Shower & Bath Retrofitting',
  'Water Pipe Relocation',
  'Walk-In Bathtubs',
  'Water Pressure Improvement',
]

const values = [
  { title: 'Exclusive & Responsive', desc: 'No one can match our response time. We offer customer service 24/7, so you know that you are in good hands.' },
  { title: 'Technology Mastery', desc: '21 years in the business and our professionals have seen it all. We will flush your worries away with our low cost methods and outstanding precision.' },
  { title: 'The Best in the Known Galaxy', desc: 'There is simply nothing that we can\'t do: Plumbing noises, dripping or clogged toilets and tanks, weak flushing or overflowing, we have tools and professionals to accommodate you.' },
]

const related = [
  { name: 'Faucets', href: '/services/faucets' },
  { name: 'Vanities & Sinks', href: '/services/vanities-and-sinks' },
  { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
  { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
]

export default function Page() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #f5c842 0%, transparent 60%)' }} />
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] text-white leading-[0.9] mb-6">
              Shower Cartridge<br /><span className="italic text-[#f5c842]">Replacement</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Expert shower cartridge replacement for all faucet brands. Fix leaks, restore temperature control, and get your shower working like new.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end lg:items-end">
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost">416-727-5810</a>
          </div>
        </div>
      </section>

      {/* ─── VIDEO + CONTENT ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-2 gap-20 items-start">
        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
          <iframe
            src="https://player.vimeo.com/video/593014782?background=1&autoplay=1&loop=1&muted=1"
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Shower Cartridge Replacement"
          />
        </div>

        {/* Unique shower, unique story */}
        <div>
          <p className="label-chip mb-6">Shower Specialists</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
            Unique shower,<br /><span className="italic">unique story.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Showers come in all sizes and shapes. They provide a comfortable and fast way to rinse soap, but they also look amazing in a bathroom. Custom showers are highly in demand. They bring a certain uniqueness to the room. Some bathrooms are even redesigned around a custom shower, and that is making a statement on the attachment of an owner to its appliance. Our Galaxy Plumbing experts know the importance of a shower, so we treat it with mindfulness. From time to time, cartridges and O-rings need to be changed to avoid leaking or dripping. If your shower misbehaves, call us and we will perform a maintenance examination.
          </p>
          <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
        </div>
      </section>

      {/* ─── COMPLEX OASIS ─── */}
      <section className="bg-[#f8f6f1] py-28">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="label-chip mb-6">Full-Service Shower Experts</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
              Complex <span className="italic">oasis.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              The market offers a wide selection of unique shower heads, steams, and water jets options to help you transform your bathroom into the relaxing oasis of your dreams. Whether you are looking to upgrade your bathroom with a state-of-the-art shower or are in need of a simple repair, shower systems come with their share of complexity and can be overwhelming for plumbers without specific experience in the matter. At Galaxy Plumbing, we repair, install, and perform maintenance and upgrades. We simply do it all:
            </p>
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <span className="gold-dot" />
                <span className="font-condensed text-[15px] tracking-wide text-[#060f24] uppercase">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY GALAXY PLUMBING ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28">
        <div className="max-w-3xl">
          <p className="label-chip mb-6">The Galaxy Difference</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
            Why <span className="italic">Galaxy Plumbing?</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Custom shower projects and repairs are the things that we do most, and also the ones that we enjoy doing the most. We have developed a unique expertise in the matter and love tackling unique projects. We are honored to participate in the creation of your dearest projects. We know the importance of a shower in a home. We work meticulously to exceed expectations and fulfill your oasis dream.
          </p>
          <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
        </div>
      </section>

      {/* ─── ANIMATED HEADLINE ─── */}
      <section className="bg-[#060f24] py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] text-white leading-[0.9]">
            You want<br />
            a shower that<br />
            looks <span className="italic text-[#f5c842]">fancy,</span><br />
            we'll install one<br />
            that is <span className="italic text-[#f5c842]">dreamy.</span>
          </h2>
        </div>
      </section>

      {/* ─── TO INFINITY AND BEYOND ─── */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="label-chip mb-4 justify-center">Why Choose Us</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05] mb-6">
              To Infinity and <span className="italic">Beyond.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              If you want quick and effective service, Galaxy Plumbing is right for you. Not only do we offer the lowest prices on the market, but we also give you the quietude that we know you deserve. We are the best plumbing experts in the entire galaxy. Your residential plans will always work with ours. We will flush your worries away with the strongest results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className="service-card p-8 rounded-xl border border-gray-100 hover:border-[#060f24]/20 text-center">
                <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] uppercase mb-4">{v.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED SERVICES ─── */}
      <section className="bg-[#f8f6f1] py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <h3 className="font-display text-2xl text-[#060f24] mb-8 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {related.map((r, i) => (
              <Link key={i} href={r.href} className="px-6 py-3 rounded-lg bg-white border border-gray-100 hover:border-[#060f24]/20 font-condensed text-[14px] tracking-wide text-[#060f24] uppercase transition-all hover:shadow-md">
                {r.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#060f24] py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white mb-6">
            Ready for a<br /><span className="italic text-[#f5c842]">dreamy shower?</span>
          </h2>
          <p className="text-white/50 mb-10">Get a free estimate and let us take care of all your shower needs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost">Call 416-727-5810</a>
          </div>
        </div>
      </section>
    </div>
  )
}
