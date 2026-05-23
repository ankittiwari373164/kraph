import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wallItems = [
  { text: 'WEBSITES', type: 'text' as const },

  { text: 'CREATIVITY', type: 'text' as const },

  { text: 'BRANDING', type: 'text' as const },

  { text: 'IDEAS', type: 'text' as const },

  { text: 'SOCIAL MEDIA', type: 'text' as const },

  { text: 'DESIGN', type: 'text' as const },

  { text: 'SEO', type: 'text' as const },

  { text: 'CONTENT', type: 'text' as const },

  { text: 'ECOMMERCE', type: 'text' as const },

  { text: 'GROWTH', type: 'text' as const },

  { text: 'MARKETING', type: 'text' as const },

  { text: 'STRATEGY', type: 'text' as const },

  { text: 'VISUALS', type: 'text' as const },

  { text: 'STORYTELLING', type: 'text' as const },

  { text: 'DIGITAL', type: 'text' as const },

  { text: 'INNOVATION', type: 'text' as const },

  { text: 'CREATORS', type: 'text' as const },

  { text: 'STARTUPS', type: 'text' as const },

  { text: 'LOCAL BRANDS', type: 'text' as const },

  { text: 'ONLINE PRESENCE', type: 'text' as const },
]

export default function StatsSection() {
  const sectionRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      /* Horizontal Movement */
      const items =
        gsap.utils.toArray<HTMLElement>(
          '.wall-item'
        )

      items.forEach((item, index) => {
        const speed =
          index % 2 === 0 ? 40 : -40

        gsap.fromTo(
          item,

          {
            x: -speed,
          },

          {
            x: speed,

            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="stats-section relative bg-white text-gray-900 py-16 md:py-24 overflow-hidden border-t border-gray-200"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[180px] opacity-30 pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[180px] opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="section-padding mb-12 relative z-10">

        <p className="text-blue-600 font-semibold uppercase tracking-[0.2em] mb-4">
          Our Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Building Creative
          <span className="text-blue-600">
            {' '}
            Digital Experiences
          </span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          We’re a growing creative agency helping
          businesses build modern websites,
          branding, social media presence,
          and digital marketing experiences.
        </p>
      </div>

      {/* Kinetic Wall */}
      <div className="wall-container flex flex-wrap w-full gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 px-4 md:px-8 relative z-10">

        {wallItems.map((item, index) => (
          <div
            key={index}
            className="wall-item text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight text-gray-200 hover:text-blue-600 transition-colors duration-500"
          >

            {item.text}
          </div>
        ))}
      </div>

      {/* Bottom Cards */}
      <div className="section-padding mt-20 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {[
            {
              title: 'Creative Thinking',
              desc:
                'Ideas that help brands stand out online.',
            },

            {
              title: 'Modern Design',
              desc:
                'Clean and user-friendly digital experiences.',
            },

            {
              title: 'Growing Brands',
              desc:
                'Helping businesses build stronger presence.',
            },

            {
              title: 'Digital Solutions',
              desc:
                'Websites, SEO, marketing, and branding.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f8fafc] border border-gray-200 shadow-sm p-6 md:p-8 group hover:border-blue-200 hover:shadow-lg transition-all duration-500 rounded-[28px]"
            >

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">

                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}