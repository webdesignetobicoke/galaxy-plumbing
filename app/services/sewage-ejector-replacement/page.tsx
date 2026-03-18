import ServicePageOriginal from '@/components/ServicePageOriginal'

export default function Page() {
  return (
    <ServicePageOriginal
      title="Sewage Ejector"
      titleAccent="Replacement"
      description="Among plumbing emergencies, few are as stressful as sewer backups. Thankfully, the right tools and knowledge will deal with the situation in record time."
      videoUrl="https://player.vimeo.com/video/593014861"
      sections={[
        {
          heading: 'Oh, so smelly!',
          body: 'Among plumbing emergencies, few are as stressful as sewer backups. When you are hit with an unexpected sewer backup, you will know with the putrid smell. Thankfully, the right tools and knowledge will deal with the situation in record time.',
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/6128285efd6890e81daa917d_sewage%20ejector%20pump_installation-min.jpg',
        },
        {
          heading: 'Complex backup.',
          body: "Sewer backups mostly begin with a clogged drain. Of course, that clog can be caused by a number of things, including the gradual build-up of fats, oils and grease, soil and the presence of other unwanted inconveniences. Other common culprits can be tree roots, which have pierced through pipes, or made their way through small cracks. Any of these things can be enough to cause a sewer backup. Add heavy rain and it becomes a recipe for disaster. When it happens, excess water from the city's sewer lines can find its way into your home's pipes and potentially flood your basement. If you're experiencing a sewer backup, you'll notice a terrible smell emitting from your drains. When that happens, it's time to turn to professional plumbers who can repair the issue swiftly and efficiently. Our experts identify problems and fix them swiftly and thoroughly:",
          bullets: [
            'Quick Identification of Source',
            'Contamination Safety',
            'Less Property Damage Potential',
            'Avoid Further Plumbing Damage',
            'Prevent Future Backups',
          ],
          image: 'https://cdn.prod.website-files.com/60997e06a8d6840ce2b9c2d9/61282856c522b9fdeef412e7_sewage%20ejector%20pump_repair-min.jpg',
        },
        {
          heading: 'Why Galaxy Plumbing?',
          body: "We are equipped to fix the most severe situations, but we also understand how stressful dealing with a sewer backup can be. As part of our commitment to being your \"go-to-guys\", we're available for sewer backup emergencies 24/7. We'll make it our top priority to arrive promptly and fix your problem with professionalism.",
        },
      ]}
      animatedHeadline={[
        { text: 'When your' },
        { text: 'drains are' },
        { text: 'smelly,', accent: true },
        { text: 'something is' },
        { text: 'definitely fishy.' },
      ]}
      related={[
        { name: 'Drain Snaking & Cleaning', href: '/services/drain-snaking-cleaning' },
        { name: 'Drain Camera Inspection', href: '/services/drain-camera-inspection' },
        { name: 'Back Water Valves', href: '/services/back-water-valves' },
        { name: 'Emergency Repairs', href: '/services/emergency-repairs' },
      ]}
    />
  )
}
