import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Water"
      titleAccent="Filtration"
      description="If you want to prevent getting poisoned by the water you drink, you might want to make sure that your home has a water filtration system."
      videoUrl="https://player.vimeo.com/video/593014552"
      sections={[
        {
          heading: 'Essential and drinkable.',
          body: 'If you want to prevent getting poisoned by the water you drink, you might want to make sure that your home has a water filtration system. To put it simply, the water filtration makes your water safe to consume and use to your convenience. It eliminated bacteria, residues, particles, viruses and fungi that could find themselves in your pipes. If you experience any of the following symptoms after drinking the water in your home, the water filtration system might be inefficient or outdated: diarrhea, headache, stomachache, vomiting, etc. If you are unsure about the quality of your water, it is highly recommended to boil the water before use and call a specialist to have it tested. Galaxy Plumbing can provide answers to your questions in the blink of an eye. Our customers matter and we will fix your plumbing inconveniences with a swift and effective method.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827cccd2b91357ca4d90a_water%20filtration_installation-min.jpg',
        },
        {
          heading: 'To be always verified.',
          body: 'Usually, the city provides the necessary water filtration and warns citizens of potential hazardous water, but some homes might require their own. Here are the common signs of a bad water filtration:',
          bullets: [
            'Smelly water',
            'Sickness symptoms',
            'Coloured or blurred water',
            'Bad water taste',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612827d11e6a8c8b03021ab0_water%20filtration_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'Galaxy Plumbing is the expert when it comes to your residential plumbing. The wellness of our clients is constantly on our minds. We know water filtration better than our competitors. We have faced, prevented and fixed home threats since 1999. We have the expertise, our costs are the best on the market and we always think about your needs when we make our plans.',
        },
      ]}
      animatedHeadline={[
        { text: 'When your water' },
        { text: 'smells kind of' },
        { text: 'fishy,', accent: true },
        { text: "don't hesitate and call" },
        { text: 'our Galaxy!' },
      ]}
      related={[
        { name: 'Water Lines', href: '/services/water-lines' },
        { name: 'Water Heaters', href: '/services/water-heaters' },
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
