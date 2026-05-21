import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const clients = [
  'NVIDIA', 'SPOTIFY', 'AIRBNB', 'STRIPE', 'NOTION',
  'FIGMA', 'LINEAR', 'VERCEL', 'RAILWAY', 'SUPABASE',
]

export default function TrustedClients() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.client-logo')
    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === section)
        .forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-void py-20 border-t border-white/5"
    >
      <div className="section-padding">
        <p className="font-teko text-sm uppercase tracking-[0.3em] text-white/40 text-center mb-12">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="client-logo font-teko text-2xl md:text-3xl text-white/20 hover:text-neon-purple/60 transition-colors duration-500 cursor-default select-none"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
