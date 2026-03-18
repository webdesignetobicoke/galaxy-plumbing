'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'

type VideoCard = {
  kind: 'video'
  id: string
  src: string
  poster: string
  quote: string
  label: string
  span: string
}

type ReviewCard = {
  kind: 'review'
  id: string
  quote: string
  name: string
  source: string
  stars: number
  label: string
  span: string
}

type ShowcaseItem = VideoCard | ReviewCard

// Customer Stories → section: mix of video and written testimonials
const items: ShowcaseItem[] = [
  {
    kind: 'video',
    id: 'testimonial-1',
    src: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6137f5934a37785d98949e18_3%20vids%20CTA%20section_2_1-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9d2175ce82c7aabe65_6138f184312c13c9a8ab96bb_Capture-d%E2%80%99%C3%A9cran%2C-le-2021-09-08-%C3%A0-13.21-webp.webp',
    label: 'Customer Story',
    quote: '"Rob cares. Anytime we had questions, he would walk us through beginning to end."',
    span: 'col-span-2 row-span-2',
  },
  {
    kind: 'video',
    id: 'testimonial-2',
    src: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/61292528c18dc048a3c6cb2c_2%20first%20sequences-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9e9dfd89b93bd09d98_6138f1ad2b8451de0e37a144_Capture-d%E2%80%99%C3%A9cran%2C-le-2021-09-08-%C3%A0-13.20-webp.webp',
    label: 'Customer Story',
    quote: '"Rob and Galaxy Plumbing were fantastic. Highly recommend to anyone in the GTA."',
    span: 'col-span-1 row-span-1',
  },
  {
    kind: 'review',
    id: 'review-1',
    label: 'Written Review',
    quote: '"Rob and Galaxy Plumbing are the best plumbing team in the GTA. His team did a trenchless pipe replacement which saved us $10,000. He was there in a heartbeat and explained everything clearly."',
    name: 'Daniel Manickam',
    source: 'Google',
    stars: 5,
    span: 'col-span-1 row-span-1',
  },
]

function TestimonialVideoCard({ video }: { video: VideoCard }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!ref.current) return
    if (playing) { ref.current.pause(); setPlaying(false) }
    else { ref.current.play(); setPlaying(true) }
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden lg:${video.span} min-h-[260px] bg-[#060f24]`}>
      <video
        ref={ref}
        playsInline
        preload="metadata"
        poster={video.poster}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/90 via-[#060f24]/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-7">
        <div className="label-chip-white">{video.label}</div>
        {!playing && (
          <div>
            <p className="text-white/90 text-sm italic leading-relaxed mb-4">{video.quote}</p>
            <button onClick={toggle} className="play-btn w-12 h-12 shadow-lg" aria-label="Play testimonial">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                <path d="M0 0L14 8L0 16V0Z" fill="#060f24"/>
              </svg>
            </button>
          </div>
        )}
        {playing && (
          <button onClick={toggle} className="self-start bg-white/20 backdrop-blur-sm border border-white/20 text-white font-condensed text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
            ■ Pause
          </button>
        )}
      </div>
    </div>
  )
}

function WrittenReviewCard({ review }: { review: ReviewCard }) {
  return (
    <div className={`relative rounded-2xl lg:${review.span} min-h-[260px] bg-[#0b1835] border border-white/10 p-7 flex flex-col justify-between`}>
      <div className="label-chip-white">{review.label}</div>
      <div>
        <div className="flex gap-0.5 mb-4">
          {[...Array(review.stars)].map((_, i) => (
            <span key={i} className="text-[#f5c842] text-sm">★</span>
          ))}
        </div>
        <p className="text-white/90 text-sm italic leading-relaxed">{review.quote}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-condensed text-[13px] tracking-wide uppercase text-white">{review.name}</span>
        <span className="font-condensed text-[11px] tracking-widest uppercase text-white/50">{review.source}</span>
      </div>
    </div>
  )
}

export default function VideoShowcase() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div>
            <p className="label-chip mb-4">Customer Stories →</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#060f24] leading-[1.05]">
              Hear it from our<br/><span className="italic">customers.</span>
            </h2>
          </div>
          <div className="hidden lg:block">
            <Link href="/reviews" className="btn-ghost-navy whitespace-nowrap">Customer Stories →</Link>
          </div>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:auto-rows-[260px]">
          {items.map(item => (
            item.kind === 'video'
              ? <TestimonialVideoCard key={item.id} video={item} />
              : <WrittenReviewCard key={item.id} review={item} />
          ))}
        </div>
        <div className="mt-10 lg:hidden">
          <Link href="/reviews" className="btn-ghost-navy">Customer Stories →</Link>
        </div>
      </div>
    </section>
  )
}
