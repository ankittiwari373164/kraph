import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, Users, Eye, DollarSign, BarChart3 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    title: 'TechNova SaaS Launch',
    client: 'TechNova Inc.',
    industry: 'SaaS / B2B',
    image: '/images/case-study3.jpg',
    challenge: 'TechNova needed to launch their new AI-powered analytics platform in a crowded market with limited brand awareness.',
    solution: 'We developed an integrated go-to-market strategy combining thought leadership content, targeted paid campaigns, and strategic partnerships.',
    results: [
      { icon: Users, label: 'Qualified Leads', value: '12,400+', color: '#bc13fe' },
      { icon: TrendingUp, label: 'Conversion Rate', value: '18.5%', color: '#0070f3' },
      { icon: DollarSign, label: 'Pipeline Generated', value: '$4.2M', color: '#00f0ff' },
      { icon: Eye, label: 'Brand Awareness', value: '+340%', color: '#bc13fe' },
    ],
    tags: ['Brand Strategy', 'Content Marketing', 'Paid Media'],
  },
  {
    title: 'Luxe Fashion Digital Transformation',
    client: 'Maison Luxe',
    industry: 'Fashion / Retail',
    image: '/images/case-study1.jpg',
    challenge: 'A heritage luxury fashion house struggling to connect with Gen Z consumers and adapt to digital-first shopping behaviors.',
    solution: 'Complete digital transformation including rebranding, social-first content strategy, influencer partnerships, and e-commerce optimization.',
    results: [
      { icon: Users, label: 'Social Followers', value: '2.1M+', color: '#bc13fe' },
      { icon: TrendingUp, label: 'Engagement Rate', value: '8.4%', color: '#0070f3' },
      { icon: DollarSign, label: 'Online Revenue', value: '+280%', color: '#00f0ff' },
      { icon: Eye, label: 'Reach', value: '50M+', color: '#bc13fe' },
    ],
    tags: ['Rebranding', 'Social Media', 'E-commerce'],
  },
  {
    title: 'FinFlow Fintech Growth',
    client: 'FinFlow',
    industry: 'Fintech',
    image: '/images/case-study2.jpg',
    challenge: 'A fintech startup needed rapid user acquisition while building trust in a highly regulated industry.',
    solution: 'Data-driven performance marketing with educational content, SEO dominance, and strategic PR to establish credibility.',
    results: [
      { icon: Users, label: 'App Downloads', value: '850K+', color: '#bc13fe' },
      { icon: TrendingUp, label: 'Organic Traffic', value: '+520%', color: '#0070f3' },
      { icon: DollarSign, label: 'CPA Reduction', value: '-62%', color: '#00f0ff' },
      { icon: Eye, label: 'Media Mentions', value: '1,200+', color: '#bc13fe' },
    ],
    tags: ['Performance Marketing', 'SEO', 'PR'],
  },
  {
    title: 'HealthPlus Mobile Revolution',
    client: 'HealthPlus',
    industry: 'HealthTech',
    image: '/images/case-study4.jpg',
    challenge: 'A healthcare provider needed to increase patient engagement and appointment bookings through digital channels.',
    solution: 'AI-powered marketing automation, localized SEO strategy, and a comprehensive content hub for patient education.',
    results: [
      { icon: Users, label: 'Patient Bookings', value: '45K+', color: '#bc13fe' },
      { icon: TrendingUp, label: 'Local SEO Rank', value: '#1', color: '#0070f3' },
      { icon: DollarSign, label: 'Marketing ROI', value: '12.5x', color: '#00f0ff' },
      { icon: Eye, label: 'Content Views', value: '3.2M+', color: '#bc13fe' },
    ],
    tags: ['AI Marketing', 'Local SEO', 'Content Strategy'],
  },
]

export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-study-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
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
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-void pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <p className="font-teko text-neon-cyan text-xl uppercase tracking-[0.3em] mb-6">
            Proven Results
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-white leading-tight mb-6">
            Case <span className="text-gradient-neon">Studies</span>
          </h1>
          <p className="font-inter text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real stories of transformation. See how we&apos;ve helped brands achieve 
            extraordinary growth through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={sectionRef} className="relative bg-void py-24 md:py-32">
        <div className="section-padding">
          <div className="flex flex-col gap-20 md:gap-32">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`case-study-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden border border-white/10 group ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="font-inter text-xs text-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-pill border border-white/10">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="font-inter text-neon-purple text-sm mb-2">{study.client}</p>
                  <h3 className="font-playfair text-3xl md:text-4xl text-white mb-6">
                    {study.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-inter font-semibold text-white text-sm mb-2 flex items-center gap-2">
                      <BarChart3 size={16} className="text-neon-cyan" />
                      The Challenge
                    </h4>
                    <p className="font-inter text-white/40 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-inter font-semibold text-white text-sm mb-2 flex items-center gap-2">
                      <TrendingUp size={16} className="text-neon-cyan" />
                      Our Solution
                    </h4>
                    <p className="font-inter text-white/40 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {study.results.map((result, ri) => (
                      <div
                        key={ri}
                        className="glass-card p-4 text-center"
                      >
                        <result.icon
                          size={20}
                          style={{ color: result.color }}
                          className="mx-auto mb-2"
                        />
                        <p className="font-teko text-2xl text-white">{result.value}</p>
                        <p className="font-inter text-white/30 text-[10px]">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-inter text-xs text-white/40 bg-white/5 px-3 py-1 rounded-pill border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
