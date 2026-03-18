import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Toilet Repairs"
      titleAccent="& Installations"
      description="One of the most visited locations in a day is beyond doubt the toilet. It is most certainly uncomfortable to find yourself in a sticky situation where the toilet has a mind of its own."
      videoUrl="https://player.vimeo.com/video/593014736"
      sections={[
        {
          heading: 'Overflowing Private Quarters.',
          body: 'One of the most visited locations in a day is beyond doubt the toilet. It is most certainly uncomfortable to find yourself in a sticky situation where the toilet has a mind of its own.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128280fba310832a48a70d5_toilets_installation-min.jpg',
        },
        {
          heading: 'Deluge Over the Throne.',
          body: "Different types of toilets, same issues. Whether your toilet is an eco-friendly, low-flow, dual-flush, hybrid sink lid, composting or waterless toilet, we flush the issue down the hole. In case you wish to install a new toilet or fix your familiar one, we have the expertise and tools to help you put your throne in (or back in) function. Commonly fixed toilet issues:",
          bullets: [
            'Weak & Partial Flushing',
            'Low Bowl Water Levels',
            'Double Flushing',
            'Slow Tank Fill',
            'Dripping Tank',
            'Unusual Noises',
            'Clogs',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/61282816b3b41b318552e247_toilets_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'Galaxy Plumbing is a caring team player whose satisfaction is yours. We have the skills, the engineering, the expertise and the passion to make your home a safe haven for you and your family. With our 24/7 customer service, there will be no leaky mistake on our watch. Our prices are the most competitive on the market. We tailor plans according to your requirements and our honesty defines us.',
        },
      ]}
      animatedHeadline={[
        { text: 'You want to poo' },
        { text: 'peacefully,' , accent: true },
        { text: 'we fix the loo' },
        { text: 'vigorously.' },
      ]}
      related={[
        { name: 'Drain Snaking & Cleaning', href: '/services/drain-snaking-cleaning' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
        { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection' },
        { name: 'Back Water Valves', href: '/services/back-water-valves' },
      ]}
    />
  )
}
