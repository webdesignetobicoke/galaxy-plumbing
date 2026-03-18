import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Water"
      titleAccent="Lines"
      description="Water lines are responsible for supplying your property with water. They carry it from a reservoir or storage to your home using mechanical force."
      videoUrl="https://player.vimeo.com/video/593014340"
      sections={[
        {
          heading: 'Down the line it goes.',
          body: 'Water lines are responsible for supplying your property with water. They carry it from a reservoir or storage to your home\'s diverse appliances using mechanical force.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827837386b3d913dfbca2_water%20lines_installation-min.jpg',
        },
        {
          heading: 'Water lines issues.',
          body: 'Sometimes, water lines can get damaged when work is done on your property\'s land. Landscaping is a common cause of water line damage. However, other factors must be taken into consideration: natural forces like invasive tree roots, earthquakes, subtle ground shifting and cold temperatures, natural wear and tear, excessive water pressure or simple build-ups.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128278957e370bcc72905c4_water%20lines_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'We treat every project with the same attention to detail. Every problem is different and requires proper assessment, which we take all the care in carrying out. After identifying the problem swiftly and precisely, we can suggest the best solutions according to your unique situation and budget. Our interventions are always extremely respectful of your property and can be accomplished with little to no impact to your lawn.',
        },
      ]}
      animatedHeadline={[
        { text: 'If you want' },
        { text: 'to drink' },
        { text: 'good water,', accent: true },
        { text: "we'll be your" },
        { text: 'lines makers.' },
      ]}
      related={[
        { name: 'Water Filtration', href: '/services/water-filtration' },
        { name: 'Water Heaters', href: '/services/water-heaters' },
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
