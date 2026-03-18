import Image from 'next/image'
import Link from 'next/link'

const services = [
  { name: 'HVAC', href: '/services/hvac', icon: '/icons/imgi_9_698b546004836da2e2057eed_Untitled design.png', desc: 'Too hot? Too cold? Get it just right. Design, install, or upgrade your HVAC system by consulting our experts on the matter.' },
  { name: 'Faucets', href: '/services/faucets', icon: '/icons/imgi_17_60c8f2154d8247045badd39b_faucet.svg', desc: 'Tired of dripping drops? Change or fix your faucet by consulting our experts on the matter.' },
  { name: 'Water Heaters', href: '/services/water-heaters', icon: '/icons/imgi_13_60c8f2017846e5e7b5b42f2e_water-heater.svg', desc: 'If you are in need of some hot water, water heaters are a must. The only question that remains is: tank or tankless water heater?' },
  { name: 'In-Floor Heating', href: '/services/in-floor-heating', icon: '/icons/imgi_5_60c8f1c6a32f3852c412ce8b_underfloor-heating.svg', desc: 'No more cold feet with in-floor heating. Installed under any type of flooring, it is a money saver when it comes to electricity bills.' },
  { name: 'Water Lines', href: '/services/water-lines', icon: '/icons/imgi_16_60c8f1af4d8247bd7cadcfcf_pipe.svg', desc: 'Ever wondered how your home gets the water running down the faucet? The answer lies in the water lines.' },
  { name: 'Vanities & Sinks', href: '/services/vanities-and-sinks', icon: '/icons/imgi_12_60c8f19754efe0eadbf5a035_sink.svg', desc: 'Ideal under a mirror in a bathroom or a kitchen, vanities\' counters and sinks come in all shapes, colors and sizes.' },
  { name: 'Water Filtration', href: '/services/water-filtration', icon: '/icons/imgi_8_60c8f18a5dd422daae6be387_water-filter.svg', desc: 'Water is essential to life. You want to make sure that the water in your home is safe to use. This is where water filtration comes in handy.' },
  { name: 'Flood Prevention Solutions', href: '/services/flood-prevention-solutions', icon: '/icons/imgi_9_698b546004836da2e2057eed_Untitled design.png', desc: 'To dig a trench around the house or not? See our solutions to keep flooding outside your home.' },
  { name: 'Toilet Repairs & Installations', href: '/services/toilet-repairs', icon: '/icons/imgi_15_60c8f146d5503e413509417e_toilet.svg', desc: 'If you don\'t want to find yourself in a sticky situation, you might want to make sure that the toilet is flushing properly and repaired adequately.' },
  { name: 'Shower Cartridge Replacement', href: '/services/shower-cartridge-replacement', icon: '/icons/imgi_11_60c8f13a540f087f0b6b16db_shower.svg', desc: 'If you want a durable and enjoyable shower, you might want to think about its maintenance, replacement and repairs, including the shower cartridge.' },
  { name: 'Sewage Ejector Replacement', href: '/services/sewage-ejector-replacement', icon: '/icons/imgi_2_60c8f0837846e57554b429b5_toolbox.svg', desc: 'To prevent sewage backups, think about sewage ejector replacement. When something smells fishy, you call Galaxy!' },
  { name: 'Sump Pumps', href: '/services/sump-pump', icon: '/icons/imgi_3_60c8f114a169d930ce989e0c_pump.svg', desc: 'Preventing one or multiple home floods is a plumber\'s duty. Devices such as sump pumps are furniture saviors, when it comes to keeping unwanted water out of your basement.' },
  { name: 'Drain Snaking & Cleaning', href: '/services/drain-snaking-cleaning', icon: '/icons/imgi_7_60c8f12bfc816e74edb08125_pipe.svg', desc: 'Should you use hydro-jetting or not? See what can help your drain unclog.' },
  { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection', icon: '/icons/imgi_10_60c8f0e61f9de62fd1b33dab_camera-lens.svg', desc: 'Ever wondered what is causing your plumbing to act out? Well, our drain camera goes down your pipe, inspects every inch of its content and reports it back as a live video on our screen.' },
  { name: 'Active Water Leak Detection', href: '/services/water-leak-detection', icon: '/icons/imgi_6_60c8f0b0ec7fdda96efce064_leak.svg', desc: 'There is a device for your plumbing vice. Ask us about the Phyn Plus or sturdy pipes to protect your home from active leaks.' },
  { name: 'Emergency Repairs', href: '/services/emergency-repairs', icon: '/icons/imgi_4_60c8f170fc6de306d3d4cfcf_clipboard.svg', desc: '24/7 rapid response — day or night, holidays included.', tag: 'Most Popular' },
  { name: 'Back Water Valves', href: '/services/back-water-valves', icon: '/icons/imgi_14_60c8f0faa47e8e09a361cb4c_water-hose.svg', desc: 'City-approved flood protection for your basement.' },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 70% 30%, #f5c842, transparent 60%)'}}/>
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] text-white leading-[0.85] mb-8">
            We've mastered<br/><span className="italic text-[#f5c842]">the art—</span>
          </h1>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6441ca107dfc9c1c47b08f9f_Services.png"
              alt="Galaxy Plumbing Services" className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Link key={i} href={s.href}
              className="service-card bg-white rounded-xl p-7 border border-gray-100 group block hover:border-[#060f24]/20 relative overflow-hidden">
              {s.tag && (
                <span className="absolute top-5 right-5 bg-[#f5c842] text-[#060f24] font-condensed text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="mb-5">
                <Image
                  src={s.icon}
                  alt={`${s.name} icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-condensed text-[20px] tracking-wide text-[#060f24] group-hover:text-[#e8a800] transition-colors uppercase mb-2 leading-tight">{s.name}</h3>
              <p className="text-base text-gray-500 leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center gap-1.5 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <span className="text-[#e8a800] font-condensed text-[14px] tracking-widest uppercase">Learn more</span>
                <span className="text-[#e8a800] text-xs">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-[#060f24] py-24">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <div className="font-display text-7xl text-[#f5c842] mb-4">24/7</div>
          <h2 className="font-display text-4xl text-white mb-5">Emergency Service</h2>
          <p className="text-white/50 leading-relaxed mb-10">
            Plumbing emergencies don't wait for business hours. Neither do we. Call any time — day or night — and get a real plumber on the line.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:416-727-5810" className="btn-gold">Call 416-727-5810</a>
            <Link href="/contact" className="btn-ghost">Request Online</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
