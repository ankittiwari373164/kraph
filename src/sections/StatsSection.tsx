import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wallItems = [
  { text: 'WEBSITES', type: 'text' as const },

  {
    text: '500+',
    type: 'counter' as const,
    target: 500,
    suffix: '+',
  },

  { text: 'BRANDING', type: 'text' as const },

  { text: 'SOCIAL MEDIA', type: 'text' as const },

  {
    text: '98%',
    type: 'counter' as const,
    target: 98,
    suffix: '%',
  },

  { text: 'SEO', type: 'text' as const },

  { text: 'ECOMMERCE', type: 'text' as const },

  {
    text: '10M+',
    type: 'counter' as const,
    target: 10,
    suffix: 'M+',
  },

  { text: 'MARKETING', type: 'text' as const },

  { text: 'CONTENT', type: 'text' as const },

  {
    text: '150+',
    type: 'counter' as const,
    target: 150,
    suffix: '+',
  },

  { text: 'CREATIVITY', type: 'text' as const },

  { text: 'STRATEGY', type: 'text' as const },

  { text: 'RESULTS', type: 'text' as const },

  {
    text: '350%',
    type: 'counter' as const,
    target: 350,
    suffix: '%',
  },
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

      /* Counters */
      const counters =
        gsap.utils.toArray<HTMLElement>(
          '.modern-counter'
        )

      counters.forEach((el) => {
        const target = parseInt(
          el.dataset.target || '0'
        )

        const suffix =
          el.dataset.suffix || ''

        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,

          duration: 2,

          ease: 'power2.out',

          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions:
              'play none none reset',
          },

          onUpdate: () => {
            el.textContent =
              Math.round(obj.val) + suffix
          },
        })
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
          Our Impact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Numbers That{' '}

          <span className="text-blue-600">
            Speak
          </span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Real growth, measurable results, and digital
          solutions that help businesses build stronger
          online presence.
        </p>
      </div>

      {/* Kinetic Wall */}
      <div className="wall-container flex flex-wrap w-full gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 px-4 md:px-8 relative z-10">

        {wallItems.map((item, index) => (
          <div
            key={index}
            className={`wall-item text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-none tracking-tight ${
              item.type === 'counter'
                ? 'text-blue-600 cursor-default'
                : 'text-gray-200 hover:text-gray-400 transition-colors duration-500'
            }`}
          >

            {item.type === 'counter' ? (
              <span
                className="modern-counter"
                data-target={item.target}
                data-suffix={item.suffix}
              >
                0
              </span>
            ) : (
              item.text
            )}
          </div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="section-padding mt-20 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {[
            {
              value: '500+',
              label: 'Projects Delivered',
            },

            {
              value: '98%',
              label: 'Client Satisfaction',
            },

            {
              value: '150+',
              label: 'Business Clients',
            },

            {
              value: '10M+',
              label: 'Marketing Reach',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#f8fafc] border border-gray-200 shadow-sm p-6 md:p-8 text-center group hover:border-blue-200 hover:shadow-lg transition-all duration-500 rounded-[28px]"
            >

              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">

                {stat.value}
              </p>

              <p className="text-gray-500 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}