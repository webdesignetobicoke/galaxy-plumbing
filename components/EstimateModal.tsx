'use client'
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import Image from 'next/image'

const ModalContext = createContext<{ open: () => void }>({ open: () => {} })

export function useEstimateModal() {
  return useContext(ModalContext)
}

export function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {isOpen && <EstimateModal onClose={close} />}
    </ModalContext.Provider>
  )
}

function EstimateModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#060f24]/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left panel */}
        <div className="bg-[#060f24] lg:w-[380px] flex-shrink-0 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-8 flex flex-col relative overflow-hidden overflow-y-auto">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #f5c842 0%, transparent 60%)' }} />
          <div className="relative">
            <Image
              src="/galaxy_plumbing_white_text_transparent.png"
              alt="Galaxy Plumbing"
              width={160}
              height={50}
              className="h-[45px] w-auto mb-8"
            />
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] text-white leading-[1.05] mb-3">
              Get your free<br /><span className="italic text-[#f5c842]">estimate.</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Tell us about your project and we'll get back to you within 1–2 hours with a no-obligation quote.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: '⚡', text: 'Response within 1–2 hours' },
                { icon: '💬', text: 'No obligation, 100% free' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-white/5 rounded-xl p-3">
                  <span className="text-base grayscale brightness-0 invert mt-0.5">{item.icon}</span>
                  <span className="text-white/70 text-xs font-condensed tracking-wide leading-snug">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="border-t border-white/10 pt-6 space-y-3">
              <p className="font-condensed text-[11px] tracking-widest uppercase text-white/40 mb-4">Or send us a message</p>
              <input type="text" placeholder="Your name" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5c842]/50 transition-colors" />
              <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5c842]/50 transition-colors" />
              <input type="tel" placeholder="Phone number" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5c842]/50 transition-colors" />
              <textarea rows={3} placeholder="Your message..." className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#f5c842]/50 transition-colors resize-none" />
              <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-condensed text-[13px] tracking-widest uppercase py-3 rounded-xl transition-colors">
                Send Message
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 font-condensed text-[11px] tracking-widest uppercase mb-1">Emergency? Call us directly</p>
              <a href="tel:416-727-5810" className="text-[#f5c842] font-display text-xl hover:underline">416-727-5810</a>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-white rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none flex-1 p-8 overflow-y-auto">
          {/* Close */}
          <div className="flex justify-end mb-6">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-500 text-sm"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">First Name</label>
                  <input type="text" placeholder="John" className="input-field" />
                </div>
                <div>
                  <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">Last Name</label>
                  <input type="text" placeholder="Smith" className="input-field" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="(416) 555-0123" className="input-field" />
                </div>
                <div>
                  <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="input-field" />
                </div>
              </div>
              <div>
                <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">Service Address</label>
                <input type="text" placeholder="123 Main St, Toronto, ON" className="input-field" />
              </div>
              <div>
                <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">Service Needed</label>
                <select className="input-field">
                  <option value="">Select a service...</option>
                  <option>Emergency Repairs</option>
                  <option>Water Leak Detection</option>
                  <option>Drain Camera Inspection</option>
                  <option>Drain Snaking & Cleaning</option>
                  <option>Sump Pump</option>
                  <option>Toilet Repairs</option>
                  <option>Water Heaters & Boilers</option>
                  <option>Water Filtration</option>
                  <option>In-Floor Heating</option>
                  <option>Faucets</option>
                  <option>Vanities & Sinks</option>
                  <option>Back Water Valves</option>
                  <option>HVAC</option>
                  <option>Shower Cartridge Replacement</option>
                  <option>Water Service Line</option>
                  <option>Flood Prevention</option>
                  <option>Sewage Ejector Replacement</option>
                  <option>Property Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="font-condensed text-[12px] tracking-[0.2em] uppercase text-gray-400 block mb-1.5">Describe Your Issue</label>
                <textarea rows={3} placeholder="Tell us what's going on..." className="input-field resize-none" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 accent-[#060f24]" />
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">This is an emergency — please contact me ASAP</span>
              </label>
              <button className="btn-gold w-full justify-center text-base py-4">
                Send Estimate Request
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}
