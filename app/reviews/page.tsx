import Link from 'next/link'
import VideoReviews from '@/components/VideoReviews'

const reviews = [
  { name: 'Nancy Pascua', source: 'Google', text: 'Just fantastic service. Spent extra time trying to figure out a mysterious water leak. Super professional and knowledgeable. Gave me options and time to decide how to proceed. Would use again and would recommend to anyone.' },
  { name: 'Bev Battaglia', source: 'Google', text: 'Fantastic job by Galaxy Plumbing! Appreciated the professionalism and informative service from this team. I had a toilet and sink back up issue which the technician was able to come and resolve the same day I called. Great attitude and top notch workmanship!' },
  { name: 'Jason Lobo', source: 'Google', text: "Rob's service from start to finish was exceptional. Spoke with him about getting a dripping bathtub faucet fixed. Communication throughout was fantastic. For someone who has never booked a plumber for a smaller job, Rob made it easy. Would definitely recommend and use again." },
  { name: 'William Hucker', source: 'HomeStars', text: "Galaxy Plumbing Inc has been our go-to plumbing solutions contractor for over 2 years, on my job-sites and in my home. Their knowledge and professionalism is hard to beat. They are my first call and I am always impressed with the workmanship and honesty. The best there is." },
  { name: 'Starr Shah', source: 'Google', text: 'Rob did a wonderful job when I called to have him service/repair a leaking toilet. He was very responsive, punctual, efficient, and made sure he left the job clean. Will definitely call on him again for any future plumbing issues.' },
  { name: 'Madhavi Wadkar', source: 'Google', text: 'We had our old plumbing stack replaced, and new connections set up for a re-model. Rob was great — not only did he do what we needed, but he made some great suggestions and recommendations. Very knowledgeable, professional and a pleasure to work with.' },
  { name: 'Trevor Arnold', source: 'Google', text: 'From start to finish Rob was a pleasure to deal with. Responded to my initial inquiry right away. Communication was fantastic and the actual work even better. Showed up on time and was friendly. I would suggest anyone looking for plumbing work to be done use his services.' },
  { name: 'Christine', source: 'Google', text: "Excellent service! Rob was super responsive and extremely respectful of our space. We had our toilet replaced and he found us a nice one with a strong flush. His work was very clean and really well done. I didn't have to worry about a thing. He's efficient, responsive, respectful, clean, on time." },
  { name: 'Daniel Manickam', source: 'Google', text: "Rob and Galaxy Plumbing are the best plumbing team in the GTA. We were fixing up a 60 year old home and found the sewer drain was completely filled with roots. Rob's team did a trenchless pipe replacement, saving us $10,000 and a lot of time! Incredible service." },
  { name: 'Mia G', source: 'Google', text: 'Rob is absolutely amazing to work with. He takes his time to explain everything and always takes pictures of the problematic areas so that we can see for ourselves what the issue was. I love that he takes the time to figure out the issue before jumping in to fix something. We rely on him for all our plumbing needs.' },
  { name: 'Eric Chow', source: 'Google', text: 'Rob came to fix a leak from my outdoor unit, he was very knowledgeable in explaining the entire process and what he was doing. Very professional and super friendly. Will be using his service again.' },
  { name: 'Kristen YL', source: 'HomeStars', text: 'Rob came highly recommended from my mother who had two other plumbers before Rob attempt to solve a slow draining kitchen sink problem. Rob persevered and solved a year long saga for my parents. Cheater vent needed replacing — problem solved!' },
  { name: 'Aniko Vargha', source: 'Google', text: 'I would highly recommend Galaxy Plumbing. Rob was extremely professional and quickly reviewed the job and fixed it on budget, actually slightly lower than the estimate! He was responsive and got back to me within a day of my request to set up an appointment. If you have any plumbing issues call Rob, you won\'t be disappointed.' },
  { name: 'Elaine Allen-Milne', source: 'Google', text: 'Rob was great. On time, quick to assess and fix the problem and also point out some other issues that should be addressed. He explained everything really well. Will definitely use him again. Definitely recommend.' },
  { name: 'Maz Mozaffari', source: 'Google', text: 'This is the 2nd time we\'ve used Rob and his company Galaxy Plumbing for various plumbing needs. They have always been very responsive, helpful, and knowledgeable. Rob was very thorough in explaining the potential causes to our new plumbing issues, and provided a number of possible solutions without trying to pressure us to take on any unnecessary work.' },
  { name: 'Louise P', source: 'Google', text: 'I had an issue with my kitchen faucet and called Galaxy Plumbing because I had seen their van in my neighbourhood. Rob returned my call and came to have a quick look and assess the situation. He ended up taking the time to fix the faucet while he was here. He was very responsive, professional and friendly.' },
]

export default function ReviewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-[220px] pb-24 bg-[#060f24] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 60% 40%, #f5c842, transparent 60%)'}}/>
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] text-white leading-[0.85] mb-8">
            It&apos;s all<br/><span className="italic text-[#f5c842]">love, baby.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">We love what we do. It&apos;s pretty much all because of you.</p>
        </div>
      </section>

      {/* Video testimonials */}
      <VideoReviews />

      {/* Written reviews */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <p className="label-chip mb-6">What Customers Say</p>
        <h2 className="font-display text-4xl text-[#060f24] mb-12">Written Reviews</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((r, i) => (
            <div key={i} className="break-inside-avoid service-card bg-white rounded-xl p-7 border border-gray-100 hover:border-[#060f24]/20 block">
              <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(s=><span key={s} className="text-[#f5c842]">★</span>)}</div>
              <p className="text-base text-gray-600 italic leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-condensed text-[16px] tracking-wide text-[#060f24] uppercase">{r.name}</span>
                <span className="font-condensed text-[14px] tracking-widest uppercase text-gray-400">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f6f1] py-24 text-center">
        <div className="max-w-xl mx-auto px-8">
          <h2 className="font-display text-4xl text-[#060f24] mb-5">Become our next<br/><span className="italic">happy customer.</span></h2>
          <p className="text-gray-500 mb-10">Join thousands of satisfied GTA homeowners.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Free Estimate</Link>
            <a href="tel:416-727-5810" className="btn-ghost-navy">Call 416-727-5810</a>
          </div>
        </div>
      </section>
    </div>
  )
}
