import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Strategies',
    desc: 'Leverage machine learning algorithms to predict trends and optimize campaigns in real-time.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    desc: 'Hyper-focused audience segmentation that delivers your message to the right people at the right time.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    desc: 'Data-driven frameworks designed to scale your brand from startup to market leader.',
  },
]

export default function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      // Text reveal
      gsap.fromTo(
        '.solution-text > *',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reset',
          },
        }
      )

      // Image cards
      gsap.fromTo(
        '.solution-card',
        { opacity: 0, y: 60, rotateY: -15 },
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
            toggleActions: 'play none none reset',
          },
        }
      )

      // Feature items
      gsap.fromTo(
        '.solution-feature',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.solution-features',
            start: 'top 80%',
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
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div className="solution-text">
            <p className="font-teko text-neon-purple text-lg uppercase tracking-[0.2em] mb-4">
              The Solution
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
              Transforming
              <br />
              <span className="text-gradient-neon">Digital Presence</span>
            </h2>
            <p className="font-inter text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              We combine cutting-edge technology with creative excellence to build 
              brands that don&apos;t just exist online — they dominate. Our holistic 
              approach ensures every touchpoint is optimized for maximum impact.
            </p>

            {/* Features */}
            <div className="solution-features flex flex-col gap-5 mb-10">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="solution-feature flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                    <feature.icon size={20} className="text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-white text-base mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-inter text-white/40 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-inter font-semibold text-neon-purple hover:text-white transition-colors group"
            >
              Explore Our Services
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Right: Stacked image cards */}
          <div className="relative h-[500px] md:h-[600px] perspective-[1000px]">
            <div
              className="solution-card absolute top-0 right-0 w-[85%] h-[320px] rounded-2xl overflow-hidden shadow-neon/20 border border-white/10"
              style={{ transform: 'translateZ(0px)' }}
            >
              <img
                src="/images/gallery1.jpg"
                alt="Digital Analytics Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
            </div>
            <div
              className="solution-card absolute top-[100px] right-[20px] w-[80%] h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              style={{ transform: 'translateZ(-20px)' }}
            >
              <img
                src="/images/gallery2.jpg"
                alt="Brand Identity Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
            </div>
            <div
              className="solution-card absolute top-[200px] right-[40px] w-[75%] h-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              style={{ transform: 'translateZ(-40px)' }}
            >
              <img
                src="/images/gallery3.jpg"
                alt="Social Media Growth"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
