import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Active Water Leak"
      titleAccent="Detection"
      description="Leaky pipes in your plumbing can cost hundreds of dollars on water bill. If you ignore the issue, the damages to your other appliances and home furniture can be irreversible."
      videoUrl="https://player.vimeo.com/video/593015317"
      sections={[
        {
          heading: 'Pricey issue.',
          body: 'Leaky pipes in your plumbing can cost hundreds of dollars on water bill. If you ignore the issue, the damages to your other appliances and home furniture can be irreversible.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828e84f092409e1a8bf1b_active%20water%20leak%20detection_installation-min.jpg',
        },
        {
          heading: "Drip, drop, drip, drop.",
          body: 'Aside from the obvious noise of dripping water, it can be hard to tell if your plumbing system has leaky pipes. Small cracks in your pipes can cause the leakage of minuscule amount of water. Over time, this leakage can cause extensive water damage and significantly get you more pricey water bills. There are many signs of leaky pipes:',
          bullets: [
            'Presence of Mold/Mildew',
            'Warped/Water-Stained Walls',
            'Blistering Paint/Wallpaper',
            'Water-Stained Floors',
            'Sagging Ceiling',
            'Presence of Musty Odors',
            'Walk-In Bathtubs',
            'Accumulation of Water',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828ee3e71b3c534da09e3_active%20water%20leak%20detection_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'Our plumbers are experienced in upgrading plumbing and repairing systems with the installation of PVC or copper pipes, which are more durable and less prone to cracking and leakage. Whatever the extent of your problem or project, we will work with you to formulate a solution that works, within your budget and schedule.',
        },
      ]}
      animatedHeadline={[
        { text: 'If you are' },
        { text: 'overwhelmed by' },
        { text: 'water bills,', accent: true },
        { text: 'we will fix' },
        { text: 'leaks with skills.' },
      ]}
      related={[
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
        { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection' },
        { name: 'Sump Pumps', href: '/services/sump-pump' },
        { name: 'Water Filtration', href: '/services/water-filtration' },
      ]}
    />
  )
}
