import Link from 'next/link'
import Image from 'next/image'
import EstimateButton from './EstimateButton'

const cols = [
  {
    title: 'Services',
    links: [
      {label:'Emergency Repairs',href:'/services/emergency-repairs'},
      {label:'Water Leak Detection',href:'/services/water-leak-detection'},
      {label:'Drain Camera Inspection',href:'/services/drain-camera-inspection'},
      {label:'Drain Snaking & Cleaning',href:'/services/drain-snaking-cleaning'},
      {label:'Sump Pump',href:'/services/sump-pump'},
      {label:'Toilet Repairs',href:'/services/toilet-repairs'},
    ]
  },
  {
    title: 'More Services',
    links: [
      {label:'Water Heaters & Boilers',href:'/services/water-heaters'},
      {label:'Water Filtration',href:'/services/water-filtration'},
      {label:'In-Floor Heating',href:'/services/in-floor-heating'},
      {label:'Faucets',href:'/services/faucets'},
      {label:'Vanities & Sinks',href:'/services/vanities-and-sinks'},
      {label:'Back Water Valves',href:'/services/back-water-valves'},
      {label:'Flood Prevention',href:'/services/flood-prevention-solutions'},
      {label:'Sewage Ejector',href:'/services/sewage-ejector-replacement'},
      {label:'HVAC',href:'/services/hvac'},
      {label:'Shower Cartridge',href:'/services/shower-cartridge-replacement'},
      {label:'Water Service Line',href:'/services/water-lines'},
    ]
  },
  {
    title: 'Company',
    links: [
      {label:'About Us',href:'/about'},
      {label:'Reviews',href:'/reviews'},
      {label:'Blog',href:'/blog'},
      {label:'Property Management',href:'/property-management'},
      {label:'Financing',href:'/apply-for-financing'},
      {label:'Privacy Policy',href:'/privacy-policy'},
    ]
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#060f24] text-white">
      {/* CTA strip */}
      <div className="border-b border-white/8">
        <div className="max-w-[1400px] mx-auto px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-chip-white mb-4">Ready to get started?</p>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Your Go-To-Guys.<br/>
              <span className="italic text-[#f5c842]">Always.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost">Call 416-727-5810</a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/galaxy plumbing logo.png"
                alt="Galaxy Plumbing Inc. Logo"
                width={58}
                height={84}
                className="h-[84px] w-auto"
              />
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-xs mb-8">
              Out-of-this-world customer service and craftsmanship for over 20 years. Serving Toronto and the Greater Toronto Area 24/7.
            </p>
            <div className="space-y-3">
              <a href="tel:416-727-5810" className="flex items-center gap-3 group">
                <span className="text-[#f5c842] text-lg">📞</span>
                <div>
                  <div className="font-condensed text-xl text-white group-hover:text-[#f5c842] transition-colors tracking-wide">416-727-5810</div>
                  <div className="text-[14px] text-white/40 font-condensed tracking-widest uppercase">24/7 Emergency</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-[#f5c842] text-lg">📍</span>
                <div className="text-base text-white/50">Greater Toronto Area, Ontario</div>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-condensed text-[14px] tracking-[0.2em] uppercase text-[#f5c842] mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-base text-white/50 hover:text-white transition-colors underline-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="max-w-[1400px] mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-condensed tracking-wide">
            © {new Date().getFullYear()} Galaxy Plumbing Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map(i => <span key={i} className="text-[#f5c842] text-sm">★</span>)}
            <span className="text-white/30 text-xs ml-2 font-condensed tracking-wide">Top Rated GTA Plumber</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
