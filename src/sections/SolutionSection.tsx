import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react'

import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Zap,

    title: 'Smart Solutions That Work',

    desc:
      'We use modern digital strategies that help businesses grow with better visibility, stronger branding, and more customer engagement.',
  },

  {
    icon: Target,

    title: 'Reach The Right Audience',

    desc:
      'Our marketing strategies are designed to connect your business with people who are genuinely interested in your services.',
  },

  {
    icon: TrendingUp,

    title: 'Growth You Can Measure',

    desc:
      'From websites to ecommerce marketing, we focus on real results that help your business grow steadily online.',
  },
]

export default function SolutionSection() {
  const sectionRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      /* Text Reveal */
      gsap.fromTo(
        '.solution-text > *',

        {
          opacity: 0,
          x: -50,
        },

        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
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

      /* Cards */
      gsap.fromTo(
        '.solution-card',

        {
          opacity: 0,
          y: 60,
          rotateY: -15,
        },

        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions:
              'play none none reset',
          },
        }
      )

      /* Features */
      gsap.fromTo(
        '.solution-feature',

        {
          opacity: 0,
          y: 30,
        },

        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',

          scrollTrigger: {
            trigger:
              '.solution-features',

            start: 'top 80%',

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
      className="relative bg-[#f8fafc] py-24 md:py-32 overflow-hidden"
    >

      {/* Background Shapes */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none opacity-50" />

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="solution-text">

            <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] mb-4">
              How We Help
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">

              Helping Businesses
              <br />

              <span className="text-blue-600">
                Grow Online With Confidence
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              We help local businesses and online brands
              build a strong digital presence through
              websites, social media management,
              ecommerce marketing, SEO, and creative branding.
            </p>

            {/* Features */}
            <div className="solution-features flex flex-col gap-6 mb-10">

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="solution-feature flex items-start gap-4 group"
                >

                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">

                    <feature.icon
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h4 className="font-semibold text-gray-900 text-base mb-1">
                      {feature.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
            >

              Explore Our Services

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right Cards */}
          <div className="relative h-[500px] md:h-[600px] perspective-[1000px]">

            {/* Card 1 */}
            <div
              className="solution-card absolute top-0 right-0 w-[85%] h-[320px] rounded-[28px] overflow-hidden shadow-xl border border-gray-200 bg-white"
              style={{
                transform:
                  'translateZ(0px)',
              }}
            >

              <img
                src="/images/gallery1.jpg"
                alt="Professional Website Design"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Card 2 */}
            <div
              className="solution-card absolute top-[100px] right-[20px] w-[80%] h-[300px] rounded-[28px] overflow-hidden border border-gray-200 shadow-xl bg-white"
              style={{
                transform:
                  'translateZ(-20px)',
              }}
            >

              <img
                src="/images/gallery2.jpg"
                alt="Creative Brand Design"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Card 3 */}
            <div
              className="solution-card absolute top-[200px] right-[40px] w-[75%] h-[280px] rounded-[28px] overflow-hidden border border-gray-200 shadow-xl bg-white"
              style={{
                transform:
                  'translateZ(-40px)',
              }}
            >

              <img
                src="/images/gallery3.jpg"
                alt="Social Media Success"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}