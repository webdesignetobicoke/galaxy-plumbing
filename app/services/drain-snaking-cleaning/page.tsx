import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Drain Snaking"
      titleAccent="& Cleaning"
      description="Using chemicals to unclog drains can erode pipes and make things even worse. Our plumbers possess cutting-edge tools to access the issue and solve it fast."
      videoUrl="https://player.vimeo.com/video/593015105"
      sections={[
        {
          heading: 'Down the drain it goes.',
          body: 'Using chemicals to unclog drains can erode pipes and make things even worse. Whether it is for a sink, shower or toilet, our plumbers possess a variety of cutting-edge tools to access the issue and solve it fast.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6133ba7dfb865fa6397707b6_ISA05027-min.jpg',
        },
        {
          heading: 'Clogged, but manageable.',
          body: 'Drains typically take a lot of punishments. Over time, hair, dirt, grease, heavy dish soap, and other chemicals, can accumulate. It will reduce water flow and eventually clog the pipes completely. These problems are more frequent in commercial bathrooms, where it is impossible to keep guests from dropping or flushing items that were never meant to go down the drains. Sometimes, problems can be too severe, that a complete replacement of the drainage system is a necessity. In this case, a variety of options can be suggested by our plumbers, depending on the situation and property type. Some of these, include digging out, replacing and relining pipes. Multiple signs can hint to clogged or broken drains:',
          bullets: [
            'Slow/No Draining',
            'Toilet Constantly Running',
            'Unusual Noises',
            'Water Accumulation Near Plumbing',
            'Foul Smells Emanating From Drains',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828973eea8b1e53e908e4_drain%20snaking%20and%20cleaning_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'We have been down the drains and the pipes thousands of times for over twenty years. We can determine a problem faster than any other plumber. We also have great repairs, maintenance and installment advices compatible with your lifestyle and budget. Ask us about the possibility of hydro-jetting, where a powerful water jet is sent into your drain to clean it.',
        },
      ]}
      animatedHeadline={[
        { text: 'If your drains' },
        { text: 'are dirty,' , accent: true },
        { text: 'we will clean' },
        { text: 'them' },
        { text: 'rigorously.' },
      ]}
      related={[
        { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
        { name: 'Toilet Repairs', href: '/services/toilet-repairs' },
        { name: 'Back Water Valves', href: '/services/back-water-valves' },
      ]}
    />
  )
}
