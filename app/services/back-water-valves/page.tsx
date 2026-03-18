import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Back Water"
      titleAccent="Valves"
      description="A backwater valve is your last line of defense against sewage backup entering your home. Required by code in many municipalities across the GTA."
      sections={[
        {
          heading: 'Your last line of defense.',
          body: 'A backwater valve is your last line of defense against sewage backup entering your home. When the municipal sewer system becomes overwhelmed during heavy rainfall, sewage can reverse flow and flood your basement. A properly installed backwater valve prevents this by automatically closing when it detects reverse flow.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128233fce2e309eafcfae43_water%20assistants_installation-min.jpg',
        },
        {
          heading: 'Required by code.',
          body: 'Many municipalities across the Greater Toronto Area now require backwater valve installation, especially for homes with below-grade plumbing fixtures. Even if not required in your area, the protection a backwater valve provides is well worth the investment. Benefits include:',
          bullets: [
            'Prevents sewage backup into your home',
            'Required by code in many GTA municipalities',
            'May qualify for municipal rebate programs',
            'Protects basement fixtures and finishes',
            'Low maintenance once installed',
            'Peace of mind during heavy storms',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/61282333cb914a762bd10ed0_water%20assistants_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: 'Our team has installed hundreds of backwater valves across the GTA. We handle the entire process from permit applications to final inspection, ensuring your installation meets all local code requirements. We also help you apply for any available municipal rebates to offset the cost.',
        },
      ]}
      animatedHeadline={[
        { text: 'When the sewers' },
        { text: 'overflow,' },
        { text: 'your home stays', accent: true },
        { text: 'safe and dry' },
        { text: 'down below.' },
      ]}
      related={[
        { name: 'Flood Prevention Solutions', href: '/services/flood-prevention-solutions' },
        { name: 'Sump Pumps', href: '/services/sump-pump' },
        { name: 'Sewage Ejector Replacement', href: '/services/sewage-ejector-replacement' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
