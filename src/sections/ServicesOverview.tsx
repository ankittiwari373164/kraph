import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Palette,
  Search,
  Share2,
  Brain,
  BarChart3,
  Globe,
  ArrowRight,
} from 'lucide-react'

import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Palette,
    title: 'Graphic Designing',
    desc:
      'We create modern branding, social media creatives, flyers, and visual identities that make your business stand out.',
    image: '/images/service-branding.jpg',
    color: '#8b5cf6',
  },

  {
    icon: Search,
    title: 'Local SEO & Google Business',
    desc:
      'Improve your online visibility and help local customers find your business through smart SEO strategies.',
    image: '/images/service-seo.jpg',
    color: '#10b981',
  },

  {
    icon: Share2,
    title: 'Social Media Handling',
    desc:
      'Grow your online presence with engaging content, creative campaigns, and consistent social media management.',
    image: '/images/service-social.jpg',
    color: '#ec4899',
  },

  {
    icon: Brain,
    title: 'AI Product Photos',
    desc:
      'Get professional AI-generated product visuals for ecommerce, social media marketing, and branding.',
    image: '/images/service-ai.jpg',
    color: '#06b6d4',
  },

  {
    icon: BarChart3,
    title: 'Ecommerce Marketing',
    desc:
      'Increase sales and grow your online store with targeted ads, conversion strategies, and ecommerce campaigns.',
    image: '/images/service-performance.jpg',
    color: '#f59e0b',
  },

  {
    icon: Globe,
    title: 'Website Designing',
    desc:
      'We design responsive and user-friendly websites that help businesses build trust and attract customers.',
    image: '/images/service-web.jpg',
    color: '#2563eb',
  },
]

export default function ServicesOverview() {
  const sectionRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',

        {
          opacity: 0,
          y: 60,
        },

        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions:
              'play none none reset',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f8fafc] py-24 md:py-32 overflow-hidden border-t border-gray-200"
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-padding relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>

            <p className="text-blue-600 font-semibold text-lg uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">

              Our{' '}

              <span className="text-blue-600">
                Services
              </span>
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 transition-colors group self-start md:self-auto"
          >

            View All Services

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white border border-gray-200 rounded-[28px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

                {/* Icon */}
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-xl border flex items-center justify-center backdrop-blur-sm"
                  style={{
                    backgroundColor:
                      `${service.color}20`,
                    borderColor:
                      `${service.color}30`,
                  }}
                >

                  <service.icon
                    size={22}
                    style={{
                      color: service.color,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 pb-6 pt-5">

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}