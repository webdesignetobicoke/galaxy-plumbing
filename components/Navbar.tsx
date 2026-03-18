'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EstimateButton from './EstimateButton'

const services = [
  { name: 'Emergency Repairs', href: '/services/emergency-repairs', icon: '/icons/imgi_4_60c8f170fc6de306d3d4cfcf_clipboard.svg' },
  { name: 'Water Leak Detection', href: '/services/water-leak-detection', icon: '/icons/imgi_6_60c8f0b0ec7fdda96efce064_leak.svg' },
  { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection', icon: '/icons/imgi_10_60c8f0e61f9de62fd1b33dab_camera-lens.svg' },
  { name: 'Drain Snaking & Cleaning', href: '/services/drain-snaking-cleaning', icon: '/icons/imgi_7_60c8f12bfc816e74edb08125_pipe.svg' },
  { name: 'Sump Pump & Battery Backup', href: '/services/sump-pump', icon: '/icons/imgi_3_60c8f114a169d930ce989e0c_pump.svg' },
  { name: 'Toilet Repairs', href: '/services/toilet-repairs', icon: '/icons/imgi_15_60c8f146d5503e413509417e_toilet.svg' },
  { name: 'Water Heaters & Boilers', href: '/services/water-heaters', icon: '/icons/imgi_13_60c8f2017846e5e7b5b42f2e_water-heater.svg' },
  { name: 'Water Filtration', href: '/services/water-filtration', icon: '/icons/imgi_8_60c8f18a5dd422daae6be387_water-filter.svg' },
  { name: 'In-Floor Heating', href: '/services/in-floor-heating', icon: '/icons/imgi_5_60c8f1c6a32f3852c412ce8b_underfloor-heating.svg' },
  { name: 'Faucets', href: '/services/faucets', icon: '/icons/imgi_17_60c8f2154d8247045badd39b_faucet.svg' },
  { name: 'Vanities & Sinks', href: '/services/vanities-and-sinks', icon: '/icons/imgi_12_60c8f19754efe0eadbf5a035_sink.svg' },
  { name: 'Back Water Valves', href: '/services/back-water-valves', icon: '/icons/imgi_14_60c8f0faa47e8e09a361cb4c_water-hose.svg' },
  { name: 'Flood Prevention', href: '/services/flood-prevention-solutions', icon: '/icons/imgi_9_698b546004836da2e2057eed_Untitled design.png' },
  { name: 'Sewage Ejector Replacement', href: '/services/sewage-ejector-replacement', icon: '/icons/imgi_2_60c8f0837846e57554b429b5_toolbox.svg' },
  { name: 'HVAC', href: '/services/hvac', icon: '/icons/imgi_9_698b546004836da2e2057eed_Untitled design.png' },
  { name: 'Shower Cartridge Replacement', href: '/services/shower-cartridge-replacement', icon: '/icons/imgi_11_60c8f13a540f087f0b6b16db_shower.svg' },
  { name: 'Water Service Line', href: '/services/water-lines', icon: '/icons/imgi_16_60c8f1af4d8247bd7cadcfcf_pipe.svg' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [heroLight, setHeroLight] = useState(true)
  const [mobile, setMobile] = useState(false)
  const [servDrop, setServDrop] = useState(false)
  const [mobileServ, setMobileServ] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setHeroLight(window.scrollY < 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navTextColor = scrolled ? 'text-[#060f24]' : (heroLight ? 'text-white' : 'text-[#060f24]')
  const logoTextColor = scrolled ? 'text-[#060f24]' : (heroLight ? 'text-white' : 'text-[#060f24]')

  return (
    <>
      {/* Emergency bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#060f24] text-white py-6 text-center" style={{fontSize:'18px'}}>
        <span className="font-condensed tracking-widest uppercase" style={{letterSpacing:'0.15em'}}>
          ⚡ 24/7 Emergency — <a href="tel:416-727-5810" className="text-[#f5c842] font-bold hover:underline">416-727-5810</a>
        </span>
      </div>

      <header className={`fixed top-[66px] left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-white/96 backdrop-blur-sm shadow-[0_2px_24px_rgba(0,0,0,0.06)]' : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between h-[120px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={scrolled ? '/galaxy plumbing logo.png' : '/galaxy_plumbing_white_text_transparent.png'}
              alt="Galaxy Plumbing"
              width={200}
              height={80}
              className="h-[70px] w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: 'About', href: '/about' },
              { label: 'Property Mgmt', href: '/property-management' },
              { label: 'Financing', href: '/apply-for-financing' },
              { label: 'Blog', href: '/blog' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Contact', href: '/contact' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                className={`font-condensed text-[18px] tracking-[0.15em] uppercase transition-colors underline-gold ${navTextColor}`}>
                {item.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServDrop(true)} onMouseLeave={() => setServDrop(false)}>
              <button className={`font-condensed text-[18px] tracking-[0.15em] uppercase transition-colors flex items-center gap-1.5 underline-gold ${navTextColor}`}>
                Services
                <svg className={`w-3 h-3 transition-transform ${servDrop ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {servDrop && (
                <div className="absolute top-full right-0 pt-3 w-[760px]">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-1">
                    {services.map(s => (
                      <Link key={s.href} href={s.href}
                        className="flex items-center gap-2.5 p-3 rounded-lg hover:bg-[#f8f6f1] group transition-colors">
                        <Image src={s.icon} alt={s.name + ' icon'} width={28} height={28} className="w-[28px] h-[28px] object-contain" />
                        <span className="font-condensed text-[15px] tracking-wide text-[#060f24] group-hover:text-[#e8a800] transition-colors uppercase">{s.name}</span>
                      </Link>
                    ))}
                    <Link href="/services" className="col-span-3 mt-2 pt-4 border-t border-gray-100 text-center font-condensed text-[14px] tracking-[0.2em] uppercase text-[#e8a800] hover:text-[#060f24] transition-colors">
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:416-727-5810" className={`font-condensed text-[18px] tracking-[0.15em] uppercase transition-colors ${navTextColor}`}>
              416-727-5810
            </a>
            <EstimateButton className="btn-gold text-[11px] px-5 py-3">
              Free Estimate
            </EstimateButton>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobile(!mobile)} className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5">
            <span className={`block w-5 h-px transition-all ${mobile ? 'rotate-45 translate-y-[5px]' : ''} ${scrolled ? 'bg-[#060f24]' : heroLight ? 'bg-white' : 'bg-[#060f24]'}`}/>
            <span className={`block w-5 h-px transition-all ${mobile ? 'opacity-0' : ''} ${scrolled ? 'bg-[#060f24]' : heroLight ? 'bg-white' : 'bg-[#060f24]'}`}/>
            <span className={`block w-5 h-px transition-all ${mobile ? '-rotate-45 -translate-y-[5px]' : ''} ${scrolled ? 'bg-[#060f24]' : heroLight ? 'bg-white' : 'bg-[#060f24]'}`}/>
          </button>
        </div>

        {/* Mobile menu */}
        {mobile && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-6 flex flex-col gap-4">
            <Link href="/about" onClick={() => setMobile(false)}
              className="font-condensed text-lg tracking-[0.15em] uppercase text-[#060f24] hover:text-[#e8a800] transition-colors">
              About
            </Link>

            {/* Services dropdown */}
            <div>
              <button
                onClick={() => setMobileServ(!mobileServ)}
                className="font-condensed text-lg tracking-[0.15em] uppercase text-[#060f24] hover:text-[#e8a800] transition-colors flex items-center justify-between w-full">
                Services
                <svg className={`w-4 h-4 text-[#e8a800] transition-transform ${mobileServ ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {mobileServ && (
                <div className="mt-3 flex flex-col gap-1 pl-3 border-l-2 border-[#f5c842]">
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => { setMobile(false); setMobileServ(false) }}
                      className="font-condensed text-[15px] tracking-wide uppercase text-gray-600 hover:text-[#e8a800] transition-colors py-1.5">
                      {s.name}
                    </Link>
                  ))}
                  <Link href="/services" onClick={() => { setMobile(false); setMobileServ(false) }}
                    className="font-condensed text-[14px] tracking-widest uppercase text-[#e8a800] hover:text-[#060f24] transition-colors pt-2 mt-1 border-t border-gray-100">
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {[
              {label:'Property Mgmt',href:'/property-management'},
              {label:'Financing',href:'/apply-for-financing'},
              {label:'Blog',href:'/blog'},
              {label:'Reviews',href:'/reviews'},
              {label:'Contact',href:'/contact'}
            ].map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMobile(false)}
                className="font-condensed text-lg tracking-[0.15em] uppercase text-[#060f24] hover:text-[#e8a800] transition-colors">
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-2">
              <a href="tel:416-727-5810" className="btn-ghost-navy w-full justify-center">Call Now</a>
              <EstimateButton className="btn-gold w-full justify-center">Free Estimate</EstimateButton>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
