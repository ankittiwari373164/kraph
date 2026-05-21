import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Palette, Search, Share2, Brain, BarChart3, Globe, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Palette,
    title: 'Brand Strategy & Identity',
    desc: 'Craft compelling brand narratives and visual identities that resonate with your audience and stand the test of time.',
    image: '/images/service-branding.jpg',
  },
  {
    icon: Search,
    title: 'SEO & Organic Growth',
    desc: 'Dominate search rankings with data-driven SEO strategies that drive qualified traffic and sustainable growth.',
    image: '/images/service-seo.jpg',
  },
  {
    icon: Share2,
    title: 'Social Media Mastery',
    desc: 'Build engaged communities across platforms with content strategies that spark conversations and drive conversions.',
    image: '/images/service-social.jpg',
  },
  {
    icon: Brain,
    title: 'AI-Powered Marketing',
    desc: 'Harness the power of machine learning to predict trends, personalize experiences, and optimize campaigns in real-time.',
    image: '/images/service-ai.jpg',
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Maximize ROI with precision-targeted paid campaigns across Google, Meta, LinkedIn, and emerging platforms.',
    image: '/images/service-performance.jpg',
  },
  {
    icon: Globe,
    title: 'Web Experiences',
    desc: 'Create immersive digital experiences with cutting-edge web design and development that converts visitors into customers.',
    image: '/images/service-web.jpg',
  },
]

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reset',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-void py-24 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="section-padding relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-teko text-neon-blue text-lg uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Our <span className="text-gradient-neon">Services</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-inter font-semibold text-neon-blue hover:text-white transition-colors group self-start md:self-auto"
          >
            View All Services
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card neon-card group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden rounded-[18px] mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <service.icon size={22} className="text-neon-purple" />
                </div>
              </div>
              <div className="px-4 pb-6">
                <h3 className="font-inter font-semibold text-lg text-white mb-2 group-hover:text-neon-purple transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-white/40 text-sm leading-relaxed">
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
