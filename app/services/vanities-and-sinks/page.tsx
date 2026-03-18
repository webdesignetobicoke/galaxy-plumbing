import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Vanities"
      titleAccent="and Sinks"
      description="Vanities are great for renewing the look of bathrooms and kitchens. Their designs and materials are so diverse that choosing one is a chore."
      videoUrl="https://player.vimeo.com/video/593014491"
      sections={[
        {
          heading: 'Outstanding look!',
          body: "Vanities are great for renewing the look of bathrooms and kitchens. Their designs and materials are so diverse that choosing one is a chore. There is a suitable vanity out there for every bathroom. Take you time choosing it and we will install it. Did we mention that it increases a property's value? Don't wait, take your space to the next level. Upgrading your kitchen or bathroom's vanity might seem as simple as purchasing and installing a model, but there are many factors to consider. Depending on the design of your space, you may need the help of a certified plumber to get the job done right.",
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827b5ce2e3036d0cfbac6_vanities%20and%20sinks_installation-min.jpg',
        },
        {
          heading: 'A job well done!',
          body: "You might want to consider the professional installation of your vanity if your plumbing system's shut off valves are not functioning properly, were never installed or if the vanity requires modifications to your plumbing system. When working with our experts, you can expect:",
          bullets: [
            'Custom Design',
            'Upfront Pricing',
            'Selection Assistance',
            'Flexible Schedule',
            'Friendly Service',
            'Flawless Installation',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827b057e3708a33290613_vanities%20and%20sinks_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: "The installation of a new vanity and sink can be a complicated task to tackle alone. Especially, if a rerouting of your home's plumbing system is involved. Don't do it alone, our plumbers have got you covered! Serving residential properties throughout the Greater Toronto area, we provide a stress-free installation of vanities.",
        },
      ]}
      animatedHeadline={[
        { text: 'If you want' },
        { text: 'a home' },
        { text: 'in style,', accent: true },
        { text: 'we add beauty' },
        { text: 'to your lifestyle.' },
      ]}
      related={[
        { name: 'Faucets', href: '/services/faucets' },
        { name: 'Shower Cartridge Replacement', href: '/services/shower-cartridge-replacement' },
        { name: 'Water Lines', href: '/services/water-lines' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
