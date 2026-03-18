export default function Page() {
  return (
    <div>
      <section className="pt-36 pb-16 bg-[#060f24]">
        <div className="max-w-[900px] mx-auto px-8">
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] text-white leading-[0.9]">Privacy<br/><span className="italic text-[#f5c842]">Policy</span></h1>
            <p className="text-white/40 mt-4 font-condensed text-base tracking-wide">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 max-w-[900px] mx-auto px-8">
        <div className="space-y-10 text-gray-600 leading-relaxed">
          {[{t:'Information We Collect',c:"Galaxy Plumbing Inc. collects personal information you voluntarily provide when requesting a quote, contacting us, or using our services. This may include your name, phone number, email address, and service address. We collect this information solely to provide and improve our plumbing services."},{t:'How We Use Your Information',c:"We use your information to respond to inquiries, schedule and complete service calls, send appointment reminders, and occasionally share relevant service information. We do not sell, rent, or trade your personal information to third parties."},{t:'Information Sharing',c:"Galaxy Plumbing Inc. does not share your personal information with third parties except as necessary to provide our services or as required by law."},{t:'Data Security',c:"We take reasonable steps to protect your personal information from unauthorized access or disclosure. Our website uses SSL encryption for any data transmission."},{t:'Your Rights',c:"You have the right to access, correct, or request deletion of your personal information at any time. Contact us at 416-727-5810 to exercise these rights."},{t:'Cookies',c:"Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time."},{t:'Contact Us',c:"Questions about this policy? Contact Galaxy Plumbing Inc. at 416-727-5810 or through our contact form."}].map((s,i) => (
            <div key={i}>
              <h2 className="font-display text-2xl text-[#060f24] mb-4">{s.t}</h2>
              <p>{s.c}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
