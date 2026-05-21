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
  Video,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Palette,
    title: 'Brand Strategy & Identity',
    shortDesc: 'Craft compelling brand narratives and visual identities.',
    description: 'We build brands that resonate. From comprehensive brand audits to visual identity systems, we create cohesive brand experiences that capture your essence and differentiate you in the market.',
    features: ['Brand Strategy & Positioning', 'Visual Identity Design', 'Brand Guidelines', 'Logo Design & Refresh', 'Market Research & Analysis'],
    image: '/images/service-branding.jpg',
    color: '#bc13fe',
  },
  {
    icon: Search,
    title: 'SEO & Organic Growth',
    shortDesc: 'Dominate search rankings with data-driven SEO.',
    description: 'Our SEO strategies go beyond keywords. We leverage technical optimization, content strategy, and link building to drive sustainable organic growth that compounds over time.',
    features: ['Technical SEO Audit', 'Content Strategy', 'Link Building', 'Local SEO', 'Performance Tracking'],
    image: '/images/service-seo.jpg',
    color: '#0070f3',
  },
  {
    icon: Share2,
    title: 'Social Media Mastery',
    shortDesc: 'Build engaged communities across platforms.',
    description: 'We transform social media from a checkbox into a growth engine. Our strategies combine creative content with data-driven insights to build communities that convert.',
    features: ['Platform Strategy', 'Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Analytics'],
    image: '/images/service-social.jpg',
    color: '#00f0ff',
  },
  {
    icon: Brain,
    title: 'AI-Powered Marketing',
    shortDesc: 'Harness machine learning for marketing excellence.',
    description: 'Stay ahead with AI-driven marketing. From predictive analytics to automated personalization, we leverage cutting-edge technology to deliver unprecedented results.',
    features: ['Predictive Analytics', 'Automated Personalization', 'Chatbot Integration', 'Dynamic Pricing', 'Audience Intelligence'],
    image: '/images/service-ai.jpg',
    color: '#bc13fe',
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    shortDesc: 'Maximize ROI with precision-targeted campaigns.',
    description: 'Every dollar counts. Our performance marketing team optimizes campaigns across all major platforms to ensure maximum return on your advertising investment.',
    features: ['PPC Management', 'Display Advertising', 'Retargeting', 'Conversion Optimization', 'Attribution Modeling'],
    image: '/images/service-performance.jpg',
    color: '#0070f3',
  },
  {
    icon: Globe,
    title: 'Web Experiences',
    shortDesc: 'Create immersive digital experiences.',
    description: 'Your website is your digital flagship. We design and develop immersive web experiences that captivate visitors and drive conversions through exceptional UX.',
    features: ['UX/UI Design', 'Web Development', 'E-commerce', 'Landing Pages', 'Conversion Rate Optimization'],
    image: '/images/service-web.jpg',
    color: '#00f0ff',
  },
  {
    icon: Video,
    title: 'Content Production',
    shortDesc: 'Tell your story with compelling content.',
    description: 'Content is king, but quality is the crown. Our production team creates video, photography, and written content that captures attention and drives engagement.',
    features: ['Video Production', 'Photography', 'Copywriting', 'Motion Graphics', 'Podcast Production'],
    image: '/images/service-content.jpg',
    color: '#bc13fe',
  },
  {
    icon: MessageSquare,
    title: 'CRM & Email Marketing',
    shortDesc: 'Nurture leads with precision communication.',
    description: 'Turn prospects into customers and customers into advocates. Our CRM and email strategies deliver the right message at the right time for maximum impact.',
    features: ['Email Campaigns', 'Marketing Automation', 'Lead Nurturing', 'CRM Integration', 'A/B Testing'],
    image: '/images/gallery1.jpg',
    color: '#0070f3',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-detail-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
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
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-void pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <p className="font-teko text-neon-purple text-xl uppercase tracking-[0.3em] mb-6">
            What We Offer
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-white leading-tight mb-6">
            Our <span className="text-gradient-neon">Services</span>
          </h1>
          <p className="font-inter text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions powered by cutting-edge technology 
            and creative excellence. Every service is designed to drive measurable growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={sectionRef} className="relative bg-void py-24 md:py-32">
        <div className="section-padding">
          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-detail-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden border border-white/10 group ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                  <div
                    className="absolute bottom-6 left-6 w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
                  >
                    <service.icon size={26} style={{ color: service.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-playfair text-3xl md:text-4xl text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-white/50 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-8">
                    {service.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-3 font-inter text-sm text-white/70"
                      >
                        <CheckCircle2 size={16} style={{ color: service.color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-inter font-semibold transition-colors group"
                    style={{ color: service.color }}
                  >
                    Get Started
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-void py-24 border-t border-white/5">
        <div className="section-padding text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
            Need a <span className="text-neon-purple">Custom Solution</span>?
          </h2>
          <p className="font-inter text-white/40 text-lg max-w-xl mx-auto mb-8">
            Every business is unique. Let&apos;s discuss how we can tailor our services 
            to meet your specific goals and challenges.
          </p>
          <a
            href="/contact"
            className="magnetic-btn bg-white text-black font-inter font-semibold px-10 py-4 rounded-pill hover:bg-neon-purple hover:text-white transition-all duration-300 inline-flex items-center gap-2"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}
