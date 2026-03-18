import Link from 'next/link'
import Image from 'next/image'
import VideoHero from '@/components/VideoHero'
import VideoShowcase from '@/components/VideoShowcase'
import EstimateButton from '@/components/EstimateButton'

const services = [
  { name: 'Emergency Repairs', href: '/services/emergency-repairs', icon: '/icons/imgi_4_60c8f170fc6de306d3d4cfcf_clipboard.svg', desc: '24/7 rapid response — day or night, holidays included.' },
  { name: 'Water Leak Detection', href: '/services/water-leak-detection', icon: '/icons/imgi_6_60c8f0b0ec7fdda96efce064_leak.svg', desc: 'Advanced acoustic & thermal technology. No demolition.' },
  { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection', icon: '/icons/imgi_10_60c8f0e61f9de62fd1b33dab_camera-lens.svg', desc: 'HD cameras reveal the truth inside your pipes.' },
  { name: 'Drain Snaking & Cleaning', href: '/services/drain-snaking-cleaning', icon: '/icons/imgi_7_60c8f12bfc816e74edb08125_pipe.svg', desc: 'Commercial-grade clearing for all drain sizes.' },
  { name: 'Sump Pump & Battery Backup', href: '/services/sump-pump', icon: '/icons/imgi_3_60c8f114a169d930ce989e0c_pump.svg', desc: 'Keep your basement dry — even during a power outage.' },
  { name: 'Toilet Repairs', href: '/services/toilet-repairs', icon: '/icons/imgi_15_60c8f146d5503e413509417e_toilet.svg', desc: 'All makes and models serviced, repaired, or replaced.' },
  { name: 'Water Heaters & Boilers', href: '/services/water-heaters', icon: '/icons/imgi_13_60c8f2017846e5e7b5b42f2e_water-heater.svg', desc: 'Tank, tankless, on-demand, and boiler systems.' },
  { name: 'Water Filtration', href: '/services/water-filtration', icon: '/icons/imgi_8_60c8f18a5dd422daae6be387_water-filter.svg', desc: 'Whole-home filtration for clean, pure water.' },
  { name: 'In-Floor Heating', href: '/services/in-floor-heating', icon: '/icons/imgi_5_60c8f1c6a32f3852c412ce8b_underfloor-heating.svg', desc: 'Luxurious radiant warmth from the ground up.' },
  { name: 'Faucets', href: '/services/faucets', icon: '/icons/imgi_17_60c8f2154d8247045badd39b_faucet.svg', desc: 'Installation and repair for all faucet types.' },
  { name: 'Vanities & Sinks', href: '/services/vanities-and-sinks', icon: '/icons/imgi_12_60c8f19754efe0eadbf5a035_sink.svg', desc: 'Complete installation of all vanity and sink types.' },
  { name: 'Back Water Valves', href: '/services/back-water-valves', icon: '/icons/imgi_14_60c8f0faa47e8e09a361cb4c_water-hose.svg', desc: 'City-approved flood protection for your home.' },
  { name: 'Flood Prevention', href: '/services/flood-prevention-solutions', icon: '/icons/imgi_9_698b546004836da2e2057eed_Untitled design.png', desc: 'Backwater valves, sump pumps, and waterproofing.' },
  { name: 'Sewage Ejector Replacement', href: '/services/sewage-ejector-replacement', icon: '/icons/imgi_2_60c8f0837846e57554b429b5_toolbox.svg', desc: 'Professional ejector pump installation and replacement.' },
  { name: 'HVAC', href: '/services/hvac', icon: '/icons/imgi_9_698b546004836da2e2057eed_Untitled design.png', desc: 'Heating, ventilation, and air conditioning services.' },
  { name: 'Shower Cartridge Replacement', href: '/services/shower-cartridge-replacement', icon: '/icons/imgi_11_60c8f13a540f087f0b6b16db_shower.svg', desc: 'Fix leaks and restore shower temperature control.' },
  { name: 'Water Service Line', href: '/services/water-lines', icon: '/icons/imgi_16_60c8f1af4d8247bd7cadcfcf_pipe.svg', desc: 'Main water supply line repair and replacement.' },
]

const reviews = [
  { name: 'William Hucker', stars: 5, text: 'Galaxy Plumbing Inc has been our go-to plumbing solutions contractor for over 2 years. Their knowledge and professionalism is hard to beat. If you are reading this and considering their services, just call them. The best there is.' },
  { name: 'Nancy Pascua', stars: 5, text: 'Just fantastic service. Spent extra time trying to figure out a mysterious water leak. Super professional and knowledgeable. Gave me options and time to decide how to proceed. Would use again and would recommend to anyone.' },
  { name: 'Daniel Manickam', stars: 5, text: 'Rob and Galaxy Plumbing are the best plumbing team in the GTA. His team did a trenchless pipe replacement which saved us $10,000. He was there in a heartbeat and explained everything clearly.' },
  { name: 'Mia G', stars: 5, text: 'Rob is absolutely amazing to work with. He takes his time to explain everything and always takes pictures of the problematic areas. We rely on him for all our plumbing needs.' },
]

export default function HomePage() {
  return (
    <>
      {/* ─── VIDEO HERO ─── */}
      <VideoHero />

      {/* ─── MARQUEE STRIP ─── */}
      <div className="bg-[#f5c842] overflow-hidden py-4">
        <div className="marquee-inner">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-8 whitespace-nowrap">
              {['Emergency Repairs','·','Leak Detection','·','Drain Cleaning','·','Water Heaters','·','In-Floor Heating','·','Sump Pumps','·','Water Filtration','·','Your Go-To-Guys','·'].map((t,j) => (
                <span key={j} className="font-condensed font-bold text-[#060f24] text-sm tracking-[0.15em] uppercase">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── INTRO SPLIT ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <p className="label-chip mb-6">Your Go-To-Guys Since 2003</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-[#060f24] mb-8">
            You deserve<br />
            <span className="italic">flawless</span> plumbing<br />
            and peace of mind.
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6 max-w-lg">
            Plumbing is our passion. We honor the craft in the service industry. To ensure your absolute peace of mind and extreme satisfaction, your job is handled by highly-trained professional plumbers using durable quality materials and adhering to a strict, transparent and courteous customer service.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-lg">
            Out of this world customer service and craftsmanship for over 20 years.
          </p>
          <div className="flex flex-wrap gap-4 w-full">
            <Link href="/about" className="btn-primary w-1/2 sm:w-auto">Our Story →</Link>
            <EstimateButton className="btn-ghost-navy w-1/2 sm:w-auto">Free Estimate</EstimateButton>
          </div>
        </div>

        <div className="relative">
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f434fb126fc55cef5_6127fdc134839f23a5bd318f_happy%20rob-min.webp"
              alt="Rob — Galaxy Plumbing" fill className="object-cover" unoptimized
            />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-8 -left-8 bg-[#060f24] text-white rounded-xl p-6 shadow-2xl">
            <div className="font-display text-5xl text-[#f5c842]">20+</div>
            <div className="font-condensed text-[10px] tracking-[0.2em] uppercase text-white/50 mt-1">Years of Excellence</div>
          </div>
          {/* Badge */}
          <div className="absolute -top-6 -right-6 bg-white rounded-full w-24 h-24 shadow-xl flex flex-col items-center justify-center border border-gray-100">
            <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i=><span key={i} className="text-[#f5c842] text-xs">★</span>)}</div>
            <div className="font-condensed text-[9px] tracking-widest uppercase text-[#060f24] text-center leading-tight">Top<br/>Rated</div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-[#060f24]">
        <div className="max-w-[1400px] mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '20+', label: 'Years Experience' },
            { value: '5,000+', label: 'Jobs Completed' },
            { value: '24/7', label: 'Emergency Service' },
            { value: '5.0★', label: 'Google Rating' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#f5c842] leading-none">{s.value}</div>
              <div className="font-condensed text-[14px] tracking-[0.2em] uppercase text-white/40 mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VIDEO SHOWCASE ─── */}
      <VideoShowcase />

      {/* ─── SERVICES GRID ─── */}
      <section className="bg-[#f8f6f1] py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div>
              <p className="label-chip mb-4">What We Do</p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
                Complete plumbing<br/><span className="italic">solutions</span> for every need.
              </h2>
            </div>
            <div className="hidden lg:block">
              <Link href="/services" className="btn-primary whitespace-nowrap">All Services →</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <Link key={i} href={s.href}
                className="service-card bg-white rounded-xl p-6 border border-gray-100 group block hover:border-[#060f24]/20">
                <Image src={s.icon} alt={s.name + ' icon'} width={32} height={32} className="mb-5 w-[32px] h-[32px] object-contain" />
                <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] group-hover:text-[#e8a800] transition-colors uppercase mb-2 leading-tight">{s.name}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-1.5 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <span className="text-[#e8a800] font-condensed text-[14px] tracking-widest uppercase">Learn more</span>
                  <span className="text-[#e8a800] text-sm">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 lg:hidden">
            <Link href="/services" className="btn-primary w-full justify-center">All Services →</Link>
          </div>
        </div>
      </section>

      {/* ─── SPLIT FEATURE: Residential ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-video">
          <Image
            src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f843ec04cc83de0b1_6127fe214f913d483b85ebb3_faucet_installation-min-webp.webp"
            alt="Residential Plumbing" fill className="object-cover" unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/60 to-transparent"/>
          <div className="absolute bottom-6 left-6">
            <span className="bg-[#f5c842] text-[#060f24] font-condensed text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">Residential</span>
          </div>
        </div>
        <div>
          <p className="label-chip mb-6">Impeccable</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
            Your home is as<br/>important to us<br/><span className="italic">as it is to you.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            You'll benefit from plumbers that have the expertise to install, repair and maintain literally anything that runs on water. We bring meticulous care and consistency to every single job, no matter the size.
          </p>
          <Link href="/services" className="btn-primary">Our Services →</Link>
        </div>
      </section>

      {/* ─── SPLIT FEATURE: Property Mgmt — dark bg ─── */}
      <section className="bg-[#060f24] py-28">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-chip-white mb-6">Reliable</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] mb-6">
              Property management<br/>plumbing that works<br/><span className="italic text-[#f5c842]">in plain sight.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              We have the stealth to work in plain sight, while never being in the way of your affairs. Time is of the essence in every business — our property management division is there to make sure you don't lose a minute of it.
            </p>
            <Link href="/property-management" className="btn-gold">Learn More</Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568b024f39bc0e0cd17698d_614611a0b4605c760c365cc7_brxxto-Jr4AVlVL6Lw-unsplash-min%20-%20instasize.webp"
              alt="Property Management" fill className="object-cover" unoptimized
            />
            <div className="absolute inset-0 bg-[#060f24]/30"/>
          </div>
        </div>
      </section>

      {/* ─── FINANCING ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="label-chip mb-6">No Budget? No Problem.</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
            Essential plumbing work<br/><span className="italic">shouldn't wait.</span>
          </h2>
          <Image src="/financeit logo.png" alt="Financeit" width={400} height={120} className="w-full h-auto mb-8" unoptimized />
          <p className="text-gray-500 leading-relaxed mb-8">
            We've partnered with Financeit to offer flexible payment plans so you can get the plumbing work you need — and pay over time. Fast approval, flexible terms, no hidden fees.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/apply-for-financing" className="btn-primary">Apply for Financing →</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Fast Approval', desc: 'Most applications approved within minutes.' },
            { title: 'Flexible Terms', desc: 'Repayment schedules that fit your budget.' },
            { title: 'Simple Application', desc: 'Quick online process with no hidden fees.' },
            { title: 'All Services Covered', desc: 'Finance any plumbing project, big or small.' },
          ].map((b, i) => (
            <div key={i} className="service-card bg-[#f8f6f1] rounded-xl p-6 border border-gray-100">
              <span className="gold-dot mb-4 block"/>
              <h3 className="font-condensed text-[16px] tracking-wide text-[#060f24] uppercase mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BIG STATEMENT ─── */}
      <section className="py-32 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="label-chip mb-8 justify-center">We take your sh*t seriously</p>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] text-[#060f24] leading-[0.95]">
            We will come<br/>
            <span className="italic text-[#e8a800]">down the pipe</span><br/>
            for you.
          </h2>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="bg-[#f8f6f1] py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
            <div>
              <p className="label-chip mb-4">It's All Love, Baby</p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
                We love what we do.<br/><span className="italic">It's because of you.</span>
              </h2>
            </div>
            <div className="hidden lg:block">
              <Link href="/reviews" className="btn-ghost-navy whitespace-nowrap">All Reviews →</Link>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="service-card bg-white rounded-xl p-7 border border-gray-100">
                <div className="flex gap-0.5 mb-5">{[1,2,3,4,5].map(s=><span key={s} className="text-[#f5c842]">★</span>)}</div>
                <p className="text-base text-gray-600 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="font-condensed text-[16px] tracking-wide text-[#060f24] uppercase">{r.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 lg:hidden">
            <Link href="/reviews" className="btn-ghost-navy w-full justify-center">All Reviews →</Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#060f24] py-28">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-chip-white mb-6">Available 24/7</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.05] mb-6">
              Ready when<br/><span className="italic text-[#f5c842]">you need us.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 max-w-lg">
              Plumbing emergencies don't wait for business hours. Neither do we. One call gets a real plumber on the line — any time, day or night.
            </p>
            <div className="flex flex-wrap gap-4 w-full">
              <EstimateButton className="btn-gold w-1/2 sm:w-auto">Free Estimate</EstimateButton>
              <a href="tel:416-727-5810" className="btn-ghost w-1/2 sm:w-auto">Call 416-727-5810</a>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: '⚡', title: '24/7 Emergency Response', desc: 'Real plumbers, not answering machines.' },
              { icon: '💎', title: 'Transparent Pricing', desc: 'We quote before we start. No surprises.' },
              { icon: '🏆', title: '20+ Years Experience', desc: 'Two decades of mastery across the GTA.' },
              { icon: '📋', title: 'BBB Accredited', desc: 'Trusted and verified by the Better Business Bureau.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-xl border border-white/8 hover:border-white/20 transition-colors">
                <span className="text-2xl grayscale brightness-0 invert">{item.icon}</span>
                <div>
                  <div className="font-condensed text-[20px] tracking-wide text-white uppercase mb-1">{item.title}</div>
                  <div className="text-base text-white/40">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
