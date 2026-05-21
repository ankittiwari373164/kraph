import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const wallItems = [
  { text: 'GROWTH', type: 'text' as const },
  { text: '500+', type: 'counter' as const, target: 500 },
  { text: 'BRANDING', type: 'text' as const },
  { text: 'SCALING', type: 'text' as const },
  { text: '98%', type: 'counter' as const, target: 98 },
  { text: 'ALGORITHMS', type: 'text' as const },
  { text: 'STRATEGY', type: 'text' as const },
  { text: '10M+', type: 'counter' as const, target: 10 },
  { text: 'IMPACT', type: 'text' as const },
  { text: 'DOMINANCE', type: 'text' as const },
  { text: '150+', type: 'counter' as const, target: 150 },
  { text: 'INNOVATION', type: 'text' as const },
  { text: 'ANALYTICS', type: 'text' as const },
  { text: 'RESULTS', type: 'text' as const },
  { text: '350%', type: 'counter' as const, target: 350 },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Kinetic wall items horizontal scroll
      const items = gsap.utils.toArray<HTMLElement>('.wall-item')
      items.forEach((item, index) => {
        const speed = index % 2 === 0 ? 40 : -40
        gsap.fromTo(
          item,
          { x: -speed },
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

      // Counter animations
      const counters = gsap.utils.toArray<HTMLElement>('.neon-counter')
      counters.forEach((el) => {
        const target = parseInt(el.dataset.target || '0')
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          },
          onUpdate: () => {
            if (suffix === '%') {
              el.textContent = Math.round(obj.val) + '%'
            } else if (suffix === 'M+') {
              el.textContent = Math.round(obj.val) + 'M+'
            } else {
              el.textContent = Math.round(obj.val) + '+'
            }
          },
        })
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="stats-section relative bg-void text-white py-16 md:py-24 overflow-hidden"
    >
      {/* Section header */}
      <div className="section-padding mb-12">
        <p className="font-teko text-neon-cyan text-lg uppercase tracking-[0.2em] mb-4">
          Our Impact
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4">
          Numbers That <span className="text-neon-purple">Speak</span>
        </h2>
      </div>

      {/* Kinetic wall */}
      <div className="wall-container flex flex-wrap w-full gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 px-4 md:px-8">
        {wallItems.map((item, index) => (
          <div
            key={index}
            className={`wall-item font-teko text-4xl md:text-6xl lg:text-7xl uppercase font-bold whitespace-nowrap leading-tight ${
              item.type === 'counter'
                ? 'neon-text cursor-default'
                : 'text-white/10 hover:text-white/25 transition-colors duration-500 cursor-default'
            }`}
          >
            {item.type === 'counter' ? (
              <span
                className="neon-counter"
                data-target={item.target}
                data-suffix={
                  String(item.target).includes('%')
                    ? '%'
                    : item.target >= 1000
                    ? ''
                    : item.target >= 10
                    ? 'M+'
                    : '+'
                }
              >
                0
              </span>
            ) : (
              item.text
            )}
          </div>
        ))}
      </div>

      {/* Key stats grid */}
      <div className="section-padding mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: '500+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '150+', label: 'Global Clients' },
            { value: '10M+', label: 'Leads Generated' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 text-center group hover:border-neon-purple/30 transition-all duration-500"
            >
              <p className="font-teko text-4xl md:text-5xl text-neon-purple mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="font-inter text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
