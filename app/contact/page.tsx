export default function ContactPage() {
  return (
    <div>
      <section className="pt-[220px] pb-20 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 30% 60%, #f5c842, transparent 60%)'}}/>
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="font-display text-[clamp(4rem,10vw,8rem)] text-white leading-[0.85] mb-6">
              Flawless plumbing<br/><span className="italic text-[#f5c842]">a click away.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              If it runs on water, we&apos;re your go-to-guys. Request a quote in a few clicks or give us a call.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada36f54c48557b67fa1_6127fe4be9458bbed805b5c6_rob%20at%20client%27s%20door-min.webp"
              alt="Contact Galaxy Plumbing" className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20">
        {/* Form */}
        <div>
          <h2 className="font-display text-4xl text-[#060f24] mb-10">Request a free estimate</h2>
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">First Name</label>
                <input type="text" placeholder="John" className="input-field"/>
              </div>
              <div>
                <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">Last Name</label>
                <input type="text" placeholder="Smith" className="input-field"/>
              </div>
            </div>
            <div>
              <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">Phone Number</label>
              <input type="tel" placeholder="(416) 555-0123" className="input-field"/>
            </div>
            <div>
              <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">Email Address</label>
              <input type="email" placeholder="john@example.com" className="input-field"/>
            </div>
            <div>
              <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">Service Address</label>
              <input type="text" placeholder="123 Main St, Toronto, ON" className="input-field"/>
            </div>
            <div>
              <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">Service Needed</label>
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
                <option>Property Management</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 block mb-2">Describe Your Issue</label>
              <textarea rows={5} placeholder="Tell us what's going on. The more detail, the better we can prepare..." className="input-field resize-none"/>
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 accent-[#060f24]"/>
              <span className="text-base text-gray-500">This is an emergency — please contact me as soon as possible</span>
            </label>
            <button className="btn-primary w-full justify-center">Send My Estimate Request</button>
            <p className="text-xs text-gray-400 text-center">We typically respond within 1-2 hours. For emergencies, call us directly.</p>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6 lg:pt-20">
          <div className="bg-[#f8f6f1] rounded-2xl p-8">
            <p className="label-chip mb-5">Contact Details</p>
            <div className="space-y-6">
              <a href="tel:416-727-5810" className="flex items-start gap-4 group">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 mb-1">Phone — 24/7 Emergency</div>
                  <div className="font-display text-3xl text-[#060f24] group-hover:text-[#e8a800] transition-colors">416-727-5810</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 mb-1">Service Area</div>
                  <div className="text-gray-600 text-base leading-relaxed">Greater Toronto Area, Ontario<br/>Mississauga · Brampton · Vaughan<br/>Markham · Scarborough · North York</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <div className="font-condensed text-[14px] tracking-[0.2em] uppercase text-gray-400 mb-1">Hours</div>
                  <div className="text-gray-600 text-base">Emergency Service: 24/7/365<br/>Office: Mon–Fri 8am–6pm</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#060f24] rounded-2xl p-8">
            <div className="font-display text-5xl text-[#f5c842] mb-3">Emergency?</div>
            <p className="text-white/60 text-base mb-7">Don't wait. Call us now. We pick up any time.</p>
            <a href="tel:416-727-5810" className="btn-gold w-full justify-center">Call 416-727-5810 Now</a>
          </div>

          <div className="rounded-2xl border border-gray-100 p-8">
            <h3 className="font-display text-2xl text-[#060f24] mb-3">Financing Available</h3>
            <p className="text-base text-gray-500 mb-6">Don't let budget hold you back from essential work. Flexible financing through our trusted partner.</p>
            <a href="https://www.financeit.ca" target="_blank" rel="noopener noreferrer" className="btn-ghost-navy w-full justify-center">Apply for Financing</a>
          </div>
        </div>
      </section>

      {/* We walk the whole city */}
      <section className="bg-[#f8f6f1] py-28">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05] mb-8">
              We walk the <span className="italic">whole city.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Give us a call, wherever you are! Galaxy Plumbing is well established in the greater Toronto area and is ready to walk the mile to serve its many clients. Broken toilet? Leaky pipes or smelly drain? We are the experts your household needs!
            </p>
            <p className="font-condensed text-[14px] tracking-[0.2em] uppercase text-[#e8a800]">Greater Toronto &mdash; Wherever You Are</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/61257d59922dc1c07338a470_Capture%20d%E2%80%99e%CC%81cran%2C%20le%202021-08-24%20a%CC%80%2019.14.10.png"
              alt="Galaxy Plumbing Service Area Map" className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f24] py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white mb-6">
            We are your<br/><span className="italic text-[#f5c842]">Go-To-Guys.</span>
          </h2>
          <p className="text-white/50 mb-10">Get a free quote in just a few clicks or give us a call at 416-727-5810.</p>
          <a href="tel:416-727-5810" className="btn-gold">Call 416-727-5810</a>
        </div>
      </section>
    </div>
  )
}
