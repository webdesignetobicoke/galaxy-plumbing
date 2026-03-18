import Link from 'next/link'
import Image from 'next/image'
import EstimateButton from './EstimateButton'

interface Section {
  heading: string
  body: string
  bullets?: string[]
  image?: string
}

interface ServicePageOriginalProps {
  title: string
  titleAccent?: string
  description: string
  sections: Section[]
  animatedHeadline: { text: string; accent?: boolean }[]
  videoUrl?: string
  related: { name: string; href: string }[]
}

const values = [
  { title: 'Exclusive & Responsive', desc: 'No one can match our response time. We offer customer service 24/7, so you know that you are in good hands.', icon: '/icons/60997e06a8d6840098b9c347_24-hours.svg' },
  { title: 'Technology Mastery', desc: '21 years in the business and our professionals have seen it all. We will flush your worries away with our low cost methods and outstanding precision.', icon: '/icons/60997e06a8d6843af1b9c348_processor.svg' },
  { title: 'The Best in the Known Galaxy', desc: 'There is simply nothing that we can\'t do: Plumbing noises, dripping or clogged toilets and tanks, weak flushing or overflowing, we have tools and professionals to accommodate you.', icon: '/icons/60997e06a8d68432a3b9c349_galaxy.svg' },
]

export default function ServicePageOriginal({
  title, titleAccent, description, sections, animatedHeadline, videoUrl, related,
}: ServicePageOriginalProps) {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #f5c842 0%, transparent 60%)' }} />
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] text-white leading-[0.9] mb-6">
              {titleAccent ? (
                <>{title}<br /><span className="italic text-[#f5c842]">{titleAccent}</span></>
              ) : title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end lg:items-end">
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost">416-727-5810</a>
          </div>
        </div>
      </section>

      {/* ─── VIDEO/IMAGE + FIRST SECTION ─── */}
      <section className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-2 gap-20 items-start">
        {videoUrl ? (
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
            <iframe
              src={`${videoUrl}?background=1&autoplay=1&loop=1&muted=1`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={title}
            />
          </div>
        ) : sections[0]?.image ? (
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image src={sections[0].image} alt={sections[0].heading} width={800} height={600} className="w-full h-auto" unoptimized />
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-[#060f24]">
            <video
              autoPlay muted loop playsInline preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6137f5934a37785d98949e18_3%20vids%20CTA%20section_2_1-transcode.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/50 to-transparent" />
          </div>
        )}

        {sections[0] && (
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
              {sections[0].heading}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">{sections[0].body}</p>
            {sections[0].bullets && (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {sections[0].bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-[#f8f6f1] rounded-xl">
                    <span className="gold-dot" />
                    <span className="font-condensed text-[14px] tracking-wide text-[#060f24] uppercase">{b}</span>
                  </div>
                ))}
              </div>
            )}
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
          </div>
        )}
      </section>

      {/* ─── SECTION 2 ─── */}
      {sections[1] && (
        <section className="bg-[#f8f6f1] py-28">
          <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
                {sections[1].heading}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">{sections[1].body}</p>
              {sections[1].bullets && (
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {sections[1].bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100">
                      <span className="gold-dot" />
                        <span className="font-condensed text-[20px] tracking-wide text-[#060f24] uppercase">{b}</span>
                    </div>
                  ))}
                </div>
              )}
              <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            </div>
            {sections[1].image && (
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image src={sections[1].image} alt={sections[1].heading} width={800} height={600} className="w-full h-auto" unoptimized />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── SECTION 3 (Why Galaxy Plumbing?) ─── */}
      {sections[2] && (
        <section className="max-w-[1400px] mx-auto px-8 py-28">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-[#060f24]">
              <video
                autoPlay muted loop playsInline preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6137f5934a37785d98949e18_3%20vids%20CTA%20section_2_1-transcode.mp4"
              />
            </div>
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-[#060f24] leading-[1.1] mb-6">
                {sections[2].heading}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">{sections[2].body}</p>
              <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            </div>
          </div>
        </section>
      )}

      {/* ─── ANIMATED HEADLINE ─── */}
      <section className="bg-[#060f24] py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] text-white leading-[0.9]">
            {animatedHeadline.map((line, i) => (
              <span key={i}>
                {line.accent ? (
                  <span className="italic text-[#f5c842]">{line.text}</span>
                ) : line.text}
                <br />
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* ─── TO INFINITY AND BEYOND ─── */}
      <section className="py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
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
                <Image src={v.icon} alt={v.title + ' icon'} width={40} height={40} className="mx-auto mb-4 w-[40px] h-[40px] object-contain filter invert" />
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
            We are your<br /><span className="italic text-[#f5c842]">Go-To-Guys.</span>
          </h2>
          <p className="text-white/50 mb-10">Get a free estimate and let our expert plumbers handle the rest.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <EstimateButton className="btn-gold">Free Estimate</EstimateButton>
            <a href="tel:416-727-5810" className="btn-ghost">Call 416-727-5810</a>
          </div>
        </div>
      </section>
    </div>
  )
}
