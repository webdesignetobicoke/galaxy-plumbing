import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="HVAC"
      description="Your HVAC system works around the clock to keep your home or business comfortable year-round. When heating or cooling becomes inconsistent, we've got you covered."
      videoUrl="https://player.vimeo.com/video/593014150"
      sections={[
        {
          heading: 'Breathe easy, stay comfortable!',
          body: 'Your HVAC system works around the clock to keep your home or business comfortable year-round. When heating or cooling becomes inconsistent, inefficient, or unreliable, comfort quickly turns into frustration. Uneven temperatures, rising energy bills, or outdated equipment. We\'ve got you covered.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/698b8e6c03f65ef02b6e323c_1.jpg',
        },
        {
          heading: 'Reliable comfort, all seasons long!',
          body: 'HVAC systems come in many configurations, each designed to meet different space, efficiency, and performance needs. From residential homes to large commercial buildings, the right system makes all the difference. Whether you\'re upgrading an aging furnace, installing a new air conditioner, or planning HVAC for a new build, proper design and installation are key to long-term comfort and efficiency. Our experts ensure every system is built to perform.',
          bullets: [
            'Furnace installation and replacement',
            'Air conditioner installation',
            'Heat pump systems (air-source & hybrid)',
            'Ductless mini-split systems',
            'Rooftop units (RTUs) for commercial buildings',
            'New construction HVAC design and installation',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/698b8e7178d1ba0130cc3956_2.jpg',
        },
        {
          heading: 'Why Galaxy HVAC?',
          body: 'Your experts when it comes to old, new, or unique systems. Our HVAC technicians have encountered all types of heating and cooling equipment throughout their years of experience. Whether you need a repair, replacement, or a brand-new installation, we\'ll get the job done efficiently and flawlessly.',
        },
      ]}
      animatedHeadline={[
        { text: 'When comfort' },
        { text: 'matters most,' , accent: true },
        { text: 'our experts' },
        { text: 'design and install' },
        { text: 'systems properly.' },
      ]}
      related={[
        { name: 'In-Floor Heating', href: '/services/in-floor-heating' },
        { name: 'Water Heaters', href: '/services/water-heaters' },
        { name: 'Water Lines', href: '/services/water-lines' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
