import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Faucets"
      description="The most sanitary activity of a day is when we wash our hands. When the faucet becomes unpredictable, many problems can occur."
      videoUrl="https://player.vimeo.com/video/593014101"
      sections={[
        {
          heading: 'Wash, wash, wash your hands!',
          body: 'The most sanitary activity of a day is when we wash our hands. When the faucet becomes unpredictable, many problems can occur. Leaky faucet, noisy faucet, or any other unusual faucet occurrence, we\'ve got you covered.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612821cffd689022b5aa7594_faucet_installation-min.jpg',
        },
        {
          heading: 'Leaky, leaky, oh so noisy!',
          body: "Faucets come in all shapes and sizes. They can be used to enhance the look of any space. Whether we are talking about a plain garage, commercial unit faucet, or a high-end luxury bathroom faucet, they all have the same purpose and potential issues. If your bathroom or kitchen faucet utilizes an up-down motion to turn the water on and a left-right motion to regulate temperature, you're using a cartridge faucet. Leaking faucets are commonly caused by worn-out cartridges or worn out O-ring seals. Other problems may occur. The most common ones are:",
          bullets: [
            'Low Water Pressure',
            'Spraying Mist',
            'Faucet Handle Leak',
            'Spout Dripping',
            'Unexpected Noises',
            'Stiff Handles',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/612821d63b57388e4b84bed4_faucet_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'Your experts when it comes to old, new or unique products. Our plumbers have encountered all types of faucet models during their years of performance. Whether you need a repair, or want to install a new faucet, we\'ll get the job done quickly and flawlessly.',
        },
      ]}
      animatedHeadline={[
        { text: 'When faucets' },
        { text: 'are dripping' },
        { text: 'constantly,', accent: true },
        { text: 'our experts' },
        { text: 'fix them thoroughly.' },
      ]}
      related={[
        { name: 'Shower Cartridge Replacement', href: '/services/shower-cartridge-replacement' },
        { name: 'Vanities & Sinks', href: '/services/vanities-and-sinks' },
        { name: 'Water Leak Detection', href: '/services/water-leak-detection' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
