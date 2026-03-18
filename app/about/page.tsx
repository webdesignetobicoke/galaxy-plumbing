import Link from 'next/link'
import Image from 'next/image'
import VideoAbout from '@/components/VideoAbout'
import { Flame, Handshake, Gem, Medal } from 'lucide-react'

const valueIcons = {
  Passionate: <Flame size={48} strokeWidth={1.5} className="mx-auto" />,
  Honest: <Handshake size={48} strokeWidth={1.5} className="mx-auto" />,
  Perfectionists: <Gem size={48} strokeWidth={1.5} className="mx-auto" />,
  'Your Go-To-Guys': <Medal size={48} strokeWidth={1.5} className="mx-auto" />,
}

const values = [
  { title: 'Passionate', desc: 'Plumbing is our craft. We honor it in everything we do.' },
  { title: 'Honest', desc: 'Transparent pricing. We commit to quotes. No surprises ever.' },
  { title: 'Perfectionists', desc: 'We don\'t settle for good enough. Every job gets meticulous care.' },
  { title: 'Your Go-To-Guys', desc: 'Bestowed by customers, not marketing. Your satisfaction is everything.' },
]

const reviews = [
  { name: 'Daniel Manickam', text: 'Rob and Galaxy Plumbing are the best plumbing team in the GTA. He was there in a heartbeat, did a scope and explained everything clearly. His trenchless pipe replacement saved us $10,000.' },
  { name: 'Scot Adams', text: 'Galaxy are the best at plumbing. Always on time, professional and incredibly workmanlike. Superb service!' },
  { name: 'Rosemary Ayling', text: 'Rob made the job so easy for us. Helped us to select the shower head, ordered it for us and installed it. He was thorough and made sure the installation was done right.' },
  { name: 'Eric Chow', text: 'Rob was very knowledgeable in explaining the entire process and what he was doing. Very professional and super friendly. Will be using his service again.' },
  { name: 'Grace Andrews', text: 'This is the second time Rob has done a repair for me and each time I have been impressed by his professional and conscientious approach. Friendly and patient.' },
  { name: 'Jeff Smith', text: 'From the first moment I called them they were very responsive and professional. I\'m very happy with the quality of work they performed! Now I can sleep soundly.' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{backgroundImage:'radial-gradient(circle at 80% 50%, #f5c842 0%, transparent 60%)'}}/>
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <h1 className="font-display text-[clamp(4rem,10vw,8rem)] text-white leading-[0.85] mb-8">
              About<br/><span className="italic text-[#f5c842]">Us</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Passionate, honest, and hard-working perfectionists serving the Greater Toronto Area with plumbing excellence for over two decades.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6133bbb9afe96552b10e2d33_ISA05582-min.jpg"
              alt="Galaxy Plumbing About Us" fill className="object-cover object-top" unoptimized
            />
            <div className="absolute inset-0 bg-[#060f24]/30"/>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-[1400px] mx-auto px-8 py-28 grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <p className="label-chip mb-6">Our Story</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05] mb-8">
            Plumbing like<br/>it's <span className="italic">1999.</span>
          </h2>
          <div className="space-y-5 text-gray-500 leading-relaxed">
            <p>Galaxy Plumbing executes flawless work while you enjoy a worry-free day. Our plans are structured to the smallest detail to provide the lowest cost and the best tools. Once we set a quote, we commit to our prices.</p>
            <p>We provide complete and perfect results as we pride ourselves in our craft. The best plumbers in the Galaxy are only a speed-dial away. We have been around for two decades — we know plumbing.</p>
            <p>We bring back plumbing to the noble profession that it once was. You can count on the best quote, customer service, tools, plan and price. We are meticulous and we pride ourselves in our work.</p>
          </div>
          <div className="mt-10 flex gap-12">
            <div className="border-l-2 border-[#f5c842] pl-5">
              <div className="font-display text-4xl text-[#060f24]">20+</div>
              <div className="font-condensed text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="border-l-2 border-[#f5c842] pl-5">
              <div className="font-display text-4xl text-[#060f24]">5,000+</div>
              <div className="font-condensed text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-1">Jobs Completed</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/5]">
            <Image
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ada36f54c48557b67fa1_6127fe4be9458bbed805b5c6_rob%20at%20client%27s%20door-min.webp"
              alt="Rob at client's door" fill className="object-cover" unoptimized
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[#060f24] text-white rounded-xl p-6 shadow-2xl">
            <div className="font-display text-4xl text-[#f5c842]">GTA</div>
            <div className="font-condensed text-[10px] tracking-[0.2em] uppercase text-white/50 mt-1">Service Area 24/7</div>
          </div>
        </div>
      </section>

      {/* Video section */}
      <VideoAbout />

      {/* 'Round the City */}
      <section className="bg-[#060f24] py-28">
        <div className="max-w-[1400px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white leading-[1.05] mb-8">
              &lsquo;Round the city,<br/><span className="italic text-[#f5c842]">&lsquo;round the clock.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Galaxy Plumbing serves the Greater Toronto area 24/7. We make you a priority. No matter where, no matter the time, we&apos;ve got you covered.
            </p>
            <p className="text-white/50 leading-relaxed">
              Our experts have more than 20 years in expertise and will always offer a quote with competitive prices. Galaxy Plumbing has the friendliest professional customer service and will consistently answer your call.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/61380a0339fd5fdf071b1a1c_ISA04337.jpg"
              alt="Galaxy Plumbing at work" fill className="object-cover" unoptimized
            />
            <div className="absolute inset-0 bg-[#060f24]/30"/>
          </div>
        </div>
      </section>

      {/* Big Statement */}
      <section className="py-32 px-8 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-[#060f24] leading-[1.15] mb-8">
            We offer perfect results at the perfect price.
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg max-w-3xl mx-auto">
            Rated five stars by our customers, there is simply no dispute &mdash; Galaxy Plumbing is the best in the known galaxy. We take your sh*t seriously. We are passionate and dedicated professionals working with care and consistency. Our plumbers provide unrivalled customer services. We are your &lsquo;Go-To Guys&rsquo;.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8f6f1] py-28">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <p className="label-chip mb-4 justify-center">Who We Are</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
              Our <span className="italic">values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div key={i} className="service-card bg-white rounded-xl p-8 border border-gray-100 text-center">
                <div className="mb-5 text-[#060f24]">{valueIcons[v.title as keyof typeof valueIcons]}</div>
                <h3 className="font-display text-2xl text-[#060f24] mb-3">{v.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <p className="label-chip mb-4 justify-center">It's All Love</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24]">What they say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="service-card p-7 rounded-xl border border-gray-100 hover:border-[#060f24]/20">
              <div className="flex gap-0.5 mb-5">{[1,2,3,4,5].map(s=><span key={s} className="text-[#f5c842]">★</span>)}</div>
              <p className="text-base text-gray-600 italic leading-relaxed mb-5">"{r.text}"</p>
              <div className="font-condensed text-[16px] tracking-wide text-[#060f24] uppercase">{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060f24] py-24 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-white mb-6">Experience the<br/><span className="italic text-[#f5c842]">difference.</span></h2>
          <p className="text-white/50 mb-10">Join thousands of satisfied homeowners across the GTA.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Free Estimate</Link>
            <a href="tel:416-727-5810" className="btn-ghost">Call 416-727-5810</a>
          </div>
        </div>
      </section>
    </div>
  )
}
