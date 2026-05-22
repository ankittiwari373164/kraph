import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  TrendingUp,
  Users,
  Eye,
  DollarSign,
  BarChart3,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    title: 'Business Website Growth',
    client: 'Urban Café',
    industry: 'Restaurant Business',
    image: '/images/case-study1.jpg',

    challenge:
      'The business needed a modern website and stronger online presence to attract more local customers.',

    solution:
      'We redesigned their website, improved local SEO, and created a social media strategy focused on customer engagement.',

    results: [
      {
        icon: Users,
        label: 'New Customers',
        value: '8,500+',
        color: '#2563eb',
      },
      {
        icon: TrendingUp,
        label: 'Website Traffic',
        value: '+240%',
        color: '#10b981',
      },
      {
        icon: DollarSign,
        label: 'Sales Growth',
        value: '+180%',
        color: '#f59e0b',
      },
      {
        icon: Eye,
        label: 'Online Reach',
        value: '1.2M+',
        color: '#8b5cf6',
      },
    ],

    tags: ['Website Design', 'SEO', 'Social Media'],
  },

  {
    title: 'Ecommerce Brand Expansion',
    client: 'Nova Fashion',
    industry: 'Fashion & Ecommerce',
    image: '/images/case-study2.jpg',

    challenge:
      'The brand wanted to increase online sales and improve customer engagement through digital marketing.',

    solution:
      'We created ecommerce campaigns, optimized product pages, and launched paid ads focused on conversions.',

    results: [
      {
        icon: Users,
        label: 'Store Visitors',
        value: '320K+',
        color: '#2563eb',
      },
      {
        icon: TrendingUp,
        label: 'Conversion Rate',
        value: '+64%',
        color: '#10b981',
      },
      {
        icon: DollarSign,
        label: 'Revenue Growth',
        value: '+210%',
        color: '#f59e0b',
      },
      {
        icon: Eye,
        label: 'Ad Reach',
        value: '5M+',
        color: '#8b5cf6',
      },
    ],

    tags: ['Ecommerce', 'Meta Ads', 'Branding'],
  },

  {
    title: 'Local Business Marketing',
    client: 'Fresh Mart',
    industry: 'Retail Business',
    image: '/images/case-study3.jpg',

    challenge:
      'The business struggled with low online visibility and inconsistent customer traffic.',

    solution:
      'We improved their Google Business profile, optimized local SEO, and created promotional social media content.',

    results: [
      {
        icon: Users,
        label: 'Customer Visits',
        value: '+320%',
        color: '#2563eb',
      },
      {
        icon: TrendingUp,
        label: 'Search Visibility',
        value: '#1 Rank',
        color: '#10b981',
      },
      {
        icon: DollarSign,
        label: 'ROI Growth',
        value: '9.4x',
        color: '#f59e0b',
      },
      {
        icon: Eye,
        label: 'Profile Views',
        value: '850K+',
        color: '#8b5cf6',
      },
    ],

    tags: ['Local SEO', 'Marketing', 'Google Business'],
  },

  {
    title: 'Creative Social Media Campaign',
    client: 'Glow Beauty',
    industry: 'Beauty & Lifestyle',
    image: '/images/case-study4.jpg',

    challenge:
      'The brand needed engaging content and better visibility on Instagram and social platforms.',

    solution:
      'We created creative reels, aesthetic product shoots, and influencer-focused campaigns to improve engagement.',

    results: [
      {
        icon: Users,
        label: 'New Followers',
        value: '150K+',
        color: '#2563eb',
      },
      {
        icon: TrendingUp,
        label: 'Engagement',
        value: '+420%',
        color: '#10b981',
      },
      {
        icon: DollarSign,
        label: 'Sales Increase',
        value: '+170%',
        color: '#f59e0b',
      },
      {
        icon: Eye,
        label: 'Content Views',
        value: '12M+',
        color: '#8b5cf6',
      },
    ],

    tags: ['Instagram Marketing', 'Content Creation', 'Brand Growth'],
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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

      {/* Hero */}
      <section className="bg-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
            Real Results
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Case Studies That Show
            <span className="text-blue-600"> Business Growth</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we help businesses grow online through website design,
            ecommerce marketing, social media management, SEO, and branding strategies.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section
        ref={sectionRef}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col gap-20">

            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >

                {/* Image */}
                <div
                  className={`rounded-[28px] overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>

                  <p className="text-blue-600 font-medium mb-3">
                    {study.client}
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    {study.title}
                  </h2>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                      <BarChart3
                        size={18}
                        className="text-blue-600"
                      />
                      The Challenge
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                      <TrendingUp
                        size={18}
                        className="text-blue-600"
                      />
                      Our Solution
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

                    {study.results.map((result, ri) => (
                      <div
                        key={ri}
                        className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <result.icon
                          size={22}
                          style={{ color: result.color }}
                          className="mx-auto mb-3"
                        />

                        <p className="text-2xl font-bold text-gray-900">
                          {result.value}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-full"
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