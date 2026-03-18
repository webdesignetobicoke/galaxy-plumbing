import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Drain Camera"
      titleAccent="Inspection"
      description="Plumbing video camera inspections are powerful tools in the hands of expert plumbers. They can identify causes of current problems or prevent issues before they occur."
      videoUrl="https://player.vimeo.com/video/593015269"
      sections={[
        {
          heading: 'Explore the darkest areas of your home with us.',
          body: 'Plumbing video camera inspections are powerful tools in the hands of expert plumbers. They can be used to take a deep look into your plumbing system to prevent issues before they occur or identify causes of current problems.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828c13eea8b3a82e90961_drain%20camera%20inspection_installation-min.jpg',
        },
        {
          heading: 'Finding the culprits.',
          body: 'Camera inspections are useful for preventive methods and problem solving. They can let plumbers identify problem sources, as well as prevent further issues. The results that they bring back can help prevent problems such as sewer backups, clogged drains, leaky pipes, water line damage, broken drains, backwater valve damage, and more. Plumbing cameras are a wise investment in the short and long term, when you are unsure of the state of your plumbing system. They can save you a lot of time, money and hassle. Common issues found by camera inspections are:',
          bullets: [
            'Sludge & Debris Build-Up',
            'Cracking Pipes',
            'Offset Joints',
            'Negative Grade Sloping',
            'Bad Mortar Connections',
            'Inline Traps',
            'Pipe Sagging',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612828c9b587b171cab3eee8_drain%20camera%20inspection_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: "Cameras are Galaxy Plumbing's ideal companion when it comes to your plumbing. Our plumbers are used to work with them and can easily set them up to locate and solve the troubling issues of your drains and entire plumbing system. We are efficient and unrivaled.",
        },
      ]}
      animatedHeadline={[
        { text: 'When the issue' },
        { text: 'is down' },
        { text: 'the drain,', accent: true },
        { text: "we'll send a camera" },
        { text: 'to explain.' },
      ]}
      related={[
        { name: 'Drain Snaking & Cleaning', href: '/services/drain-snaking-cleaning' },
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Sewage Ejector Replacement', href: '/services/sewage-ejector-replacement' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
