import Link from 'next/link'
const posts = [
  {title:'How to Tell If You Have a Hidden Water Leak',slug:'hidden-water-leaks',date:'Feb 2025',cat:'Tips & Advice',excerpt:'Silent leaks waste thousands of litres and cause massive structural damage before you notice. Here are the warning signs every homeowner should know.',read:'4 min'},
  {title:'Tankless vs. Traditional Water Heaters: Which Is Right for You?',slug:'hidden-water-leaks',date:'Jan 2025',cat:'Water Heaters',excerpt:'Both systems have real pros and cons. We break down the real differences in cost, comfort, efficiency, and lifespan.',read:'6 min'},
  {title:'Why Your Drains Keep Clogging (And How to Stop It)',slug:'hidden-water-leaks',date:'Dec 2024',cat:'Drains',excerpt:"Recurring drain clogs are a symptom of a bigger problem. From root intrusions to deteriorating pipes, here's what might really be going on.",read:'5 min'},
  {title:'The Complete Guide to Backwater Valves in Ontario',slug:'hidden-water-leaks',date:'Nov 2024',cat:'Flood Prevention',excerpt:'Everything you need to know: what they do, why you need one, Ontario permit requirements, and available municipal subsidies.',read:'7 min'},
  {title:'Sump Pump Maintenance: What Every Homeowner Should Do',slug:'hidden-water-leaks',date:'Oct 2024',cat:'Maintenance',excerpt:"Your sump pump is your last line of defense against basement flooding. A few simple checks per year can prevent a very expensive disaster.",read:'4 min'},
  {title:'In-Floor Heating: Is It Worth It in a Toronto Home?',slug:'hidden-water-leaks',date:'Sep 2024',cat:'In-Floor Heating',excerpt:'Radiant floor heating is a luxury that pays for itself in comfort and efficiency. We break down costs, benefits, and ideal applications.',read:'5 min'},
]
export default function Page() {
  return (
    <div>
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8">
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] text-white leading-[0.85]">The<br/><span className="italic text-[#f5c842]">Blog</span></h1>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p,i) => (
            <Link key={i} href={`/blog/${p.slug}`} className="service-card group block">
              <div className="aspect-video bg-[#f8f6f1] rounded-xl mb-5 relative overflow-hidden flex items-center justify-center">
                <div className="font-display text-8xl text-[#060f24]/10 group-hover:scale-110 transition-transform">G</div>
                <div className="absolute top-4 left-4 bg-[#f5c842] text-[#060f24] font-condensed text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full">{p.cat}</div>
              </div>
              <div className="flex gap-3 mb-3">
                <span className="text-xs text-gray-400 font-condensed tracking-wide">{p.date}</span>
                <span className="text-gray-200">·</span>
                <span className="text-xs text-gray-400 font-condensed tracking-wide">{p.read} read</span>
              </div>
              <h3 className="font-display text-xl text-[#060f24] group-hover:text-[#e8a800] transition-colors mb-3 leading-tight">{p.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
