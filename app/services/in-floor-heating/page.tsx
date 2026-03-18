import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="In-Floor"
      titleAccent="Heating"
      description="In-floor heating systems offer convenience and efficiency. They can be installed under any type of floor and will drastically reduce heating costs."
      videoUrl="https://player.vimeo.com/video/593014292"
      sections={[
        {
          heading: 'Cozy home, happy feet.',
          body: 'In-floor heating systems have multiple advantages to their use. They offer convenience and efficiency. They can be installed under any type of floor and will drastically reduce heating costs.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827622e4cd284c6ed42e2_in-floor%20heating_installation-min.jpg',
        },
        {
          heading: 'Only advantages.',
          body: 'Since the heat will be coming directly from the floors, you will no longer have chills when walking around your home. By the simple decision of installing in-floor heaters, the value of your property will drastically increase! We are experts, let us put your comfort in place. Here are some other benefits:',
          bullets: [
            'No Noise V.S. Air Conditioning Humming',
            'Even Heat Distribution V.S. Cold Air Pockets',
            'Steady Temperature V.S. Frequent Irregular AC',
            'Incredible Reliability & Safety',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827622e4cd284c6ed42e2_in-floor%20heating_installation-min-p-500.jpeg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'We put extreme care in tailoring the exact solution for your needs and goals. We only use the best and most reliable in-floor heating systems. Our installations are carried out diligently by our team of meticulous plumbers.',
        },
      ]}
      animatedHeadline={[
        { text: "Don't hide" },
        { text: 'under' },
        { text: 'the sheets,', accent: true },
        { text: 'let us warm' },
        { text: 'your feet.' },
      ]}
      related={[
        { name: 'Water Heaters', href: '/services/water-heaters' },
        { name: 'HVAC', href: '/services/hvac' },
        { name: 'Water Lines', href: '/services/water-lines' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
