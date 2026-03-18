import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Flood Prevention"
      titleAccent="Solutions"
      description="No one likes to wake up in a puddle of water. Galaxy Plumbing wants to make your home a safe haven and will help you prevent or repair faulty plumbing."
      videoUrl="https://player.vimeo.com/video/593014679"
      sections={[
        {
          heading: 'Flood prevention.',
          body: 'No one likes to wake up in a puddle of water. Even less, when your property or belongings are damaged by a sudden burst. Galaxy Plumbing wants to make your home a safe haven and will help you prevent or repair faulty plumbing.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128233fce2e309eafcfae43_water%20assistants_installation-min.jpg',
        },
        {
          heading: 'Preventing the worst.',
          body: 'To prevent flooding, you can install a water assistant who will monitor the entire plumbing of your home, or you can have us perform a routinely checkup. Also, don\'t let the pipes freeze in winter, it damages them. Other solutions are offered to you like:',
          bullets: [
            'Creating a dam',
            'A barrier',
            'Installing a pump',
            'Security detection system',
            'Sealing cracks in the foundation',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/61282333cb914a762bd10ed0_water%20assistants_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'We repair the damage and ensure it never happens again. We offer solutions to prevent floods and advise you with experience. We love and respect our clients and offer them the best solution to deal with floods. We care and accommodate you with our expertise, prices, materials and courteous customer service.',
        },
      ]}
      animatedHeadline={[
        { text: 'Before you' },
        { text: 'get your' },
        { text: 'feet wet,', accent: true },
        { text: "we'll make sure" },
        { text: 'your needs are met.' },
      ]}
      related={[
        { name: 'Sump Pumps', href: '/services/sump-pump' },
        { name: 'Back Water Valves', href: '/services/back-water-valves' },
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
