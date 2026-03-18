'use client'
import { useRef, useEffect, useState } from 'react'

type VideoCard = {
  src: string
  poster: string
  quote: string
  name: string
}

const testimonialVideos: VideoCard[] = [
  {
    src: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6137f5934a37785d98949e18_3%20vids%20CTA%20section_2_1-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9d2175ce82c7aabe65_6138f184312c13c9a8ab96bb_Capture-d%E2%80%99%C3%A9cran%2C-le-2021-09-08-%C3%A0-13.21-webp.webp',
    quote: '"Rob cares. Anytime we had questions, he would walk us through beginning to end."',
    name: 'Customer Testimonial',
  },
  {
    src: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/61292528c18dc048a3c6cb2c_2%20first%20sequences-transcode.mp4',
    poster: 'https://cdn.prod.website-files.com/60997e06a8d6843b1cb9c2c9/6568ad9e9dfd89b93bd09d98_6138f1ad2b8451de0e37a144_Capture-d%E2%80%99%C3%A9cran%2C-le-2021-09-08-%C3%A0-13.20-webp.webp',
    quote: '"Rob and Galaxy Plumbing were fantastic. Highly recommend to anyone in the GTA."',
    name: 'Customer Testimonial',
  },
]

function TestimonialCard({ video }: { video: VideoCard }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!ref.current) return
    if (playing) { ref.current.pause(); setPlaying(false) }
    else { ref.current.play(); setPlaying(true) }
  }

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#060f24] cursor-pointer group" onClick={toggle}>
      <video ref={ref} playsInline preload="metadata" poster={video.poster}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity">
        <source src={video.src} type="video/mp4"/>
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f24]/90 via-[#060f24]/30 to-transparent"/>
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        <div className="self-start bg-white/15 backdrop-blur-sm border border-white/20 text-white font-condensed text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
          Video Testimonial
        </div>
        {!playing ? (
          <div>
            <p className="text-white/90 text-sm italic leading-relaxed mb-5 max-w-sm">{video.quote}</p>
            <div className="flex items-center gap-4">
              <button className="play-btn">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path d="M0 0L16 9L0 18V0Z" fill="#060f24"/>
                </svg>
              </button>
              <span className="text-white/50 font-condensed text-[10px] tracking-widest uppercase">Play Video</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-white rounded-full"/>
                <div className="w-1 h-4 bg-white rounded-full"/>
              </div>
            </div>
            <span className="text-white/50 font-condensed text-[10px] tracking-widest uppercase">Pause</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function VideoReviews() {
  return (
    <section className="py-24 bg-[#060f24]">
      <div className="max-w-[1400px] mx-auto px-8">
        <p className="label-chip-white mb-6">Video Testimonials</p>
        <h2 className="font-display text-4xl text-white mb-12">
          Hear it from our<br/><span className="italic text-[#f5c842]">customers.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonialVideos.map((v, i) => (
            <TestimonialCard key={i} video={v} />
          ))}
        </div>
      </div>
    </section>
  )
}
