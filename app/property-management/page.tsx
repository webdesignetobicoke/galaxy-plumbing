import Link from 'next/link'
import EstimateButton from '@/components/EstimateButton'
import Image from 'next/image'

const b2bServices = [
  { num: '01', title: 'Drain Replacements', desc: 'Sometimes drains can\'t be saved and need to be fully replaced. If our inspections bring us to this conclusion, our team is fully equipped to tackle the job strategically to minimize the restorative work that could need to be done after the job.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f4fd68715dd2a7a8f_61339e6e305bd84e51607fe4_emergency-plumbing-repairs_repair-min-webp.webp' },
  { num: '02', title: 'Drain Snaking and Cleaning', desc: 'Our team can tackle complex drain system problems and help prevent future blockage and issues. Drains are the lifeline of your plumbing system, we\'ll make sure they always keep up with the flow.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada149396a03e5c00f93_61438f9c8cb3e70f800b2b6f_iStock-1166470997-webp.webp' },
  { num: '03', title: 'Circulation Pumps Repairs and Replacements', desc: 'Circulation pump issues can generate some serious problems and complaints from your customers and employees. We know the drill! When sh*t hits the fan, you can count on us to be there in a jiffy to repair or replace the faulty pump.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f2f6080c2b2a4b7d6_613f97894a9cb4188b85846c_Circulation.webp' },
  { num: '04', title: 'Active Water Leak Detection', desc: 'We\'ve seen and repaired leaks countless times. We\'ve got the tools and knowledge to quickly identify the source of the leak and the material to get it fixed in real-time so that no further water damage is caused. Preventative inspections and work can allow us to avoid costly issues.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9f17812ba8f739e204_61339d5f7be8058a48214bad_active-water-leak-detection_repair-min-webp.webp' },
  { num: '05', title: 'Toilet Repairs and Replacements for Individual Units', desc: 'We can assist with mundane emergencies which are mostly caused by misuse. However, as with all our property management services we prefer to have a more global approach and plan preventative work and inspections to make sure you avoid issues. We also work with distributors and can provide you with items at competitive costs.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada0536e0170219fd1cd_61339d885c8d977b3c0319a4_toilets_repair-min-webp.webp' },
  { num: '06', title: 'Domestic Hot/Cold Water Pipe Replacement', desc: 'Whether there\'s an issue in how the pipes were installed or if the material has become outdated or eroded, we\'ve got you covered. When on site, our team will inspect your system to confirm if other adjustments or repairs could be done during the replacement to prevent future problems and maximize our investment.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada03bf5da4e516476b4_61439101257eff3f13d0697c_iStock-1174823676-min-webp.webp' },
  { num: '07', title: 'Pressure Reducing Valve Repairs and Replacements', desc: 'In some lucky instances, a quick change of the o-ring can be the solution but other times broader repairs, rebuilds or full replacements are needed. When on site, our team will quickly assess the issue and present the best solution. Pressure reducing valves are great at preventing bursts but their own deterioration also needs to be accounted for.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada1216ee6ba90aef594_61438ff93ab23509c5a5a18b_iStock-471582714-min-webp.webp' },
  { num: '08', title: 'Water Saving Solutions', desc: 'As the saying goes "anything that is monitored is improved". Our team can help you monitor water usage and can optimize consumption by fixing weaker aspects of your plumbing system or by adding new components to it.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada0fe6622df13f23903_613f9a44d32980956b1f485a_Water-saving-solutions-webp.webp' },
  { num: '09', title: 'Mixing Valve Repairs and Installations', desc: 'Mixing valve problems will most often affect the consistency of water temperature and/or achieving the desired temperature. Our team will troubleshoot the valve to confirm the issue and then inspect its integrity to validate if it can be fixed or if it must be fully replaced.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada1216ee6ba90aef594_61438ff93ab23509c5a5a18b_iStock-471582714-min-webp.webp' },
  { num: '10', title: 'Booster Pumps Repair and Installation', desc: 'Our team can install your unit flawlessly and can help you figure out the type of booster pump your building needs according to your water demand. We also know how to fix booster pumps so make sure to give us a call before deciding on a replacement.', image: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada14021fb6904101337_614390d8580f0d15159fca53_iStock-599960276-min-webp.webp' },
]

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 70% 50%, #f5c842, transparent 60%)'}}/>
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] text-white leading-[0.85] mb-8">
              Property<br/><span className="italic text-[#f5c842]">Management</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Your real estate deserves dedicated expert maintenance. Our B2B division typically operates on a recurring service plan. Ranging from monthly drop-ins to full-time on-site care, you&apos;ll reap the benefits of having a dedicated expert plumber that knows your building&apos;s secrets by heart.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost">416-727-5810</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80" alt="Property Management Building" fill className="object-cover" unoptimized/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/30 to-transparent"/>
          </div>
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-[#060f24] leading-[1.1] mb-6">
              Your schedule, your preferences&hellip;<span className="italic">your building in stellar condition.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Plumbing is one of those things that we forget about on a daily basis. However, when problems arise they can cause a world of problems and put a serious dent in your operations&hellip;and budget. No building is too complex for our team. You can trust Galaxy Plumbing to have your back and keep your building&apos;s plumbing flowing flawlessly.
            </p>
          </div>
        </div>
      </section>

      {/* 10 B2B Services */}
      <section className="bg-[#f8f6f1] py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label-chip mb-4 justify-center">Our B2B Services</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
              10 specialized <span className="italic">services.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {b2bServices.map((s, i) => (
              <div key={i} className="service-card bg-white rounded-xl border border-gray-100 hover:border-[#060f24]/20 overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={s.image} alt={s.title} fill className="object-cover" unoptimized />
                </div>
                <div className="p-8">
                  <div className="font-condensed text-[12px] tracking-[0.2em] uppercase text-[#e8a800] mb-3">B2B Service {s.num}/10</div>
                  <h3 className="font-display text-2xl text-[#060f24] mb-4">{s.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f24] py-24">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/613f9a16b777e4a7b93d0f70_Go-To-Guys.jpg" alt="Galaxy Plumbing Go-To-Guys" fill className="object-cover" unoptimized/>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-white mb-5">Put your property in<br/><span className="italic text-[#f5c842]">specialist hands.</span></h2>
            <p className="text-white/50 mb-10">You care about your customers and we care about you. Request a quote or call us to quickly get your business back on track.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
              <a href="tel:416-727-5810" className="btn-ghost">416-727-5810</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
