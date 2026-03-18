import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Emergency Plumbing"
      titleAccent="Repairs"
      description="Your call will always be answered. When the situation requires it, we will repair your faulty plumbing on site, as fast and meticulously as our abilities allow."
      videoUrl="https://player.vimeo.com/video/593015421"
      sections={[
        {
          heading: 'On site repairs.',
          body: 'Your call will always be answered with us. When the situation requires it, we will repair your faulty plumbing on site, as fast and meticulously as our abilities allow. With Galaxy Plumbing, your home is always safe.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828e84f092409e1a8bf1b_active%20water%20leak%20detection_installation-min.jpg',
        },
        {
          heading: 'Emergency 24/7.',
          body: 'If you ever find yourself in an emergency repair situation, do not hesitate a moment and call us. Explain your situation with your best capacities, so we can come with the right tools to save yourself some money and home damage. At Galaxy Plumbing, we care about our customers and we know how stressful it is when plumbing goes awry. No matter the problem, no matter the hour, Galaxy Plumbing will be right on time. With a customer service answering your call 24/7, you know that you are in good hands.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128288057e370a761290714_sump%20pump_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'No matter the plumbing problem, our team is there for you. Whether you need to fix something, install an appliance or for replacement, Galaxy Plumbing is your trusted company. We have the best plumbers of the galaxy and have dealt with faucets, drains, toilets, showers, heaters and other plumbing aspects for over two decades.',
        },
      ]}
      animatedHeadline={[
        { text: '24/7 service' },
        { text: 'in case of' },
        { text: 'emergency,', accent: true },
        { text: 'call us and' },
        { text: "we'll arrive promptly." },
      ]}
      related={[
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection' },
        { name: 'Sump Pumps', href: '/services/sump-pump' },
        { name: 'Toilet Repairs', href: '/services/toilet-repairs' },
      ]}
    />
  )
}
