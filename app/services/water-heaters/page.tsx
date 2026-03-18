import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Water"
      titleAccent="Heaters"
      description="Hot water heaters are essential for a constant supply of hot water. Without them, taking a shower, using the washer and doing the dishes are plain cold."
      videoUrl="https://player.vimeo.com/video/593014150"
      sections={[
        {
          heading: "It's cold, it's warm, it's perfect!",
          body: 'Hot water heaters are essential for a constant supply of hot water. Without them, taking a shower, using the washer and doing the dishes are plain cold. There are two types of water heaters: traditional tanks and tankless heaters.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612822f3969db05020eaba6f_water%20heaters_installation-min.jpg',
        },
        {
          heading: 'Water heaters functions and replacements.',
          body: 'Although, both traditional hot water tanks and tankless water heaters essentially work by heating an element with electricity, gas or propane, they also have significant differences. The most obvious difference is in their size, which directly distinct their heating method. Traditional water tanks are much bigger, since they store many gallons of water that they keep warm for future uses. Tankless water heaters do not store water, they simply warm up water on demand. While most residential water heaters last 10 to 15 years, you can greatly extend their life with routine maintenance. Although, some factors can also shorten their lifespan. It is important to be aware of signs indicating an upcoming replacement urgency. The common signs of a faulty heater are:',
          bullets: [
            'Water Takes Long To Heat',
            'Water Less Hot Than Previously',
            'Tank Leaking',
            'Leaky Pressure Relief',
            'Valve Cloudy/Murky Water',
            'Unusual Water Smell & Taste',
            'Noisy Water Heater',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128230e57e370825328f208_water%20heaters_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: "Regardless of the water heater type installed on your property, our plumbers are qualified. With access to a wide range of high-quality parts, tools and materials, we're equipped to install, repair and maintain all brands and models of water heaters.",
        },
      ]}
      animatedHeadline={[
        { text: 'If you want' },
        { text: 'to heat water' },
        { text: 'comfortably,', accent: true },
        { text: 'our experts change' },
        { text: 'the tank swiftly.' },
      ]}
      related={[
        { name: 'In-Floor Heating', href: '/services/in-floor-heating' },
        { name: 'Water Filtration', href: '/services/water-filtration' },
        { name: 'Water Lines', href: '/services/water-lines' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
