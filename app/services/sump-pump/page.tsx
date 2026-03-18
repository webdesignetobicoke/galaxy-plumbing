import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Sump"
      titleAccent="Pumps"
      description="If you want to prevent flooding in your home, or deal with it promptly, sump pumps are a home savior."
      videoUrl="https://player.vimeo.com/video/593014913"
      sections={[
        {
          heading: 'No flood in my house.',
          body: 'If you want to prevent flooding in your home, or deal with it promptly, Sump pumps are a home savior. They will redirect the unwanted water into a basin and valves, but also filtrate the excessive water to send them back into discharge lines. Make sure that your area allows them, because they can overwhelm the system of the city. You can also contact us for a further diagnosis on the matter.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828794af1d4869799762f_sump%20pump_installation-min.jpg',
        },
        {
          heading: 'Submersible or above water level?',
          body: 'Sump pumps can either be submersible or above water level and most operate with a battery. Just like a water heater tank, a good maintenance can make them last a decade. Sump pumps have many advantages:',
          bullets: [
            'They protect your home against flooding',
            'They operate on battery and won\'t cost electricity',
            'Are placed nearly or completely out of sight',
            'Valves sensing problems',
            'Low cost',
            'Discharging water away',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128288057e370a761290714_sump%20pump_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'Our team cares about our clients. At Galaxy Plumbing, we treat our clients like family. We want to help you prevent flooding in your basement as it could cause irreparable damages to your property, but also to your belongings. We want the best protection for our customers at a competitive price. Our expertise will bring you peace of mind. We have been working with sump pumps for years and are specialists when it comes to installing and repairing them.',
        },
      ]}
      animatedHeadline={[
        { text: 'If you want' },
        { text: 'to prevent' },
        { text: 'flooding,', accent: true },
        { text: 'let us install' },
        { text: 'some pumping.' },
      ]}
      related={[
        { name: 'Flood Prevention Solutions', href: '/services/flood-prevention-solutions' },
        { name: 'Back Water Valves', href: '/services/back-water-valves' },
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
