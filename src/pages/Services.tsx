import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Palette,
  Search,
  Share2,
  Brain,
  ShoppingCart,
  Globe,
  Video,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Globe,
    title: 'Website Designing',
    shortDesc: 'Modern websites built to grow your business.',
    description:
      'We design clean, responsive websites that not only look great but also help your business build trust, attract customers, and generate leads.',
    features: [
      'Custom, responsive, and SEO-friendly websites',
      'User-focused UI/UX for better engagement',
      'Fast-loading, mobile-optimized design',
      'E-commerce & business websites tailored to your needs',
    ],
    image: '/images/service-web.jpg',
    color: '#2563eb',
  },

  {
    icon: Search,
    title: 'Local SEO & Google My Business',
    shortDesc: 'Help local customers find your business easily.',
    description:
      'We improve your local visibility so nearby customers can discover your business on Google Search and Maps.',
    features: [
      'Optimize your Google Business Profile for visibility',
      'Rank higher in local searches & maps',
      'Manage reviews & improve credibility',
      'Drive local traffic and footfall to your business',
    ],
    image: '/images/service-seo.jpg',
    color: '#10b981',
  },

  {
    icon: Share2,
    title: 'Social Media Handling',
    shortDesc: 'Build a strong and engaging online presence.',
    description:
      'From content planning to audience engagement, we handle your social media professionally so your brand stays active and attractive online.',
    features: [
      'End-to-end account management (Instagram, FB, LinkedIn, etc.)',
      'Content calendars & creative post designs',
      'Engagement growth through strategies & campaigns',
      'Regular reporting & performance tracking',
    ],
    image: '/images/service-social.jpg',
    color: '#8b5cf6',
  },

  {
    icon: Palette,
    title: 'Graphic Designing',
    shortDesc: 'Creative visuals that represent your brand.',
    description:
      'We create modern, eye-catching designs that make your business look professional and memorable across every platform.',
    features: [
      'Unique, brand-focused logos that stand out',
      'Professional flyers, brochures & marketing materials',
      'Social media graphics designed for impact',
      'Consistent visual branding across all platforms',
    ],
    image: '/images/service-branding.jpg',
    color: '#f59e0b',
  },

  {
    icon: ShoppingCart,
    title: 'Ecommerce Marketing',
    shortDesc: 'Grow your online store and increase sales.',
    description:
      'We help e-commerce brands attract the right customers, improve conversions, and scale sales through smart digital marketing strategies.',
    features: [
      'Product optimization & catalog management',
      'Paid advertising (Google Ads & Meta Ads)',
      'Conversion-focused marketing strategies',
      'Email marketing & customer retention campaigns',
    ],
    image: '/images/service-performance.jpg',
    color: '#2563eb',
  },

  {
    icon: MessageSquare,
    title: 'Product & Aesthetic Photo Shoot',
    shortDesc: 'Professional visuals that make products stand out.',
    description:
      'We create aesthetic product photography and lifestyle shoots that give your brand a premium and trustworthy look.',
    features: [
      'High-quality product photography for e-commerce & catalogs',
      'Creative aesthetic shoots for Instagram & social media',
      'Lifestyle/product-in-use shots to connect with audience',
      'Editing & retouching for a professional finish',
    ],
    image: '/images/gallery1.jpg',
    color: '#ec4899',
  },

  {
    icon: Video,
    title: 'Content Writing',
    shortDesc: 'Content that connects with your audience.',
    description:
      'We write engaging content for websites, blogs, and social media that helps your business sound professional and trustworthy.',
    features: [
      'Engaging website & landing page copy',
      'SEO-optimized blog writing for better ranking',
      'Captivating social media captions & ad copies',
      'Brand storytelling that connects with customers',
    ],
    image: '/images/service-content.jpg',
    color: '#6366f1',
  },

  {
    icon: Brain,
    title: 'AI Product Photos',
    shortDesc: 'AI-generated visuals for modern brands.',
    description:
      'Get stunning AI-generated product photos quickly and affordably for websites, ads, and social media marketing.',
    features: [
      'AI-powered photoshoots for stunning visuals',
      'Quick delivery with high-quality, realistic results',
      'Affordable alternative to traditional photoshoots',
      'Perfect for branding, products & social media',
    ],
    image: '/images/service-ai.jpg',
    color: '#06b6d4',
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reset',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold mb-4 tracking-wide uppercase">
            Digital Solutions For Growing Businesses
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            We Help Brands Grow Online With
            <span className="text-blue-600"> Creative Digital Solutions</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            From website design and SEO to social media management and ecommerce marketing,
            we help businesses build a strong online presence that attracts customers and drives growth.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Services */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-14 md:gap-20">

            {services.map((service, index) => (
              <div
                key={index}
                className="service-detail-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div
                  className={`rounded-[28px] overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>

                  <p
                    className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
                    style={{ color: service.color }}
                  >
                    {service.shortDesc}
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                    {service.title}
                  </h2>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="flex flex-col gap-4 mb-8">
                    {service.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                      >
                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0"
                          style={{ color: service.color }}
                        />

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold transition-all duration-300"
                    style={{ color: service.color }}
                  >
                    Start Your Project

                    <ArrowRight
                      size={18}
                      className="hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let’s Build Something
            <span className="text-blue-600"> Great Together</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you're starting fresh or growing an existing business,
            we’re here to help you create a strong and professional online presence.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}