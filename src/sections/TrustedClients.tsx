import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const clients = [
  'Local Businesses',
  'Startups',
  'Creators',
  'Restaurants',
  'Ecommerce Stores',
  'Personal Brands',
  'Coaching Brands',
  'Fashion Stores',
  'Real Estate',
  'Small Businesses',
]

export default function TrustedClients() {
  const sectionRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const items =
      section.querySelectorAll(
        '.client-logo'
      )

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',

        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions:
            'play none none reset',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll()
        .filter(
          (t) => t.trigger === section
        )
        .forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 border-t border-gray-200 overflow-hidden"
    >

      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
            Growing With Businesses
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Helping Brands Build Their
            Digital Presence
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We work with local businesses,
            startups, creators, and growing
            brands to create modern websites,
            branding, social media, and
            marketing solutions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {clients.map((client) => (
            <div
              key={client}
              className="client-logo bg-[#f8fafc] border border-gray-200 rounded-[24px] h-28 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group cursor-default"
            >

              <span className="text-lg md:text-xl font-semibold tracking-wide text-gray-500 group-hover:text-blue-600 transition-colors duration-300 text-center px-4">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}