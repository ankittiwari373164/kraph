import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Filter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Category =
  | 'All'
  | 'Branding'
  | 'Marketing'
  | 'Social Media'
  | 'Web Design'
  | 'Ecommerce'

interface Project {
  title: string
  client: string
  category: Category
  image: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Modern Business Website',
    client: 'Urban Café',
    category: 'Web Design',
    image: '/images/service-web.jpg',
    description:
      'Designed a modern and mobile-friendly business website focused on improving customer engagement and local visibility.',
    tags: ['Responsive Design', 'SEO', 'UI/UX'],
  },

  {
    title: 'Local SEO Growth',
    client: 'Fresh Mart',
    category: 'Marketing',
    image: '/images/service-seo.jpg',
    description:
      'Improved local search visibility and Google rankings to help the business attract more nearby customers.',
    tags: ['Google Business', 'SEO', 'Local Reach'],
  },

  {
    title: 'Social Media Campaign',
    client: 'Glow Beauty',
    category: 'Social Media',
    image: '/images/service-social.jpg',
    description:
      'Created engaging social media content and campaigns to increase audience interaction and brand awareness.',
    tags: ['Instagram', 'Content', 'Brand Growth'],
  },

  {
    title: 'Creative Brand Identity',
    client: 'Nova Fashion',
    category: 'Branding',
    image: '/images/service-branding.jpg',
    description:
      'Developed a complete visual identity including logo, brand colors, and marketing creatives.',
    tags: ['Branding', 'Logo', 'Design'],
  },

  {
    title: 'Ecommerce Store Marketing',
    client: 'Trend Cart',
    category: 'Ecommerce',
    image: '/images/service-performance.jpg',
    description:
      'Boosted online sales through ecommerce marketing strategies, paid ads, and conversion optimization.',
    tags: ['Meta Ads', 'Google Ads', 'Sales'],
  },

  {
    title: 'Product Photography',
    client: 'Nature Bliss',
    category: 'Branding',
    image: '/images/gallery1.jpg',
    description:
      'Created aesthetic product photography for ecommerce and social media marketing campaigns.',
    tags: ['Photography', 'Editing', 'Creative'],
  },

  {
    title: 'Website Content Strategy',
    client: 'Bright Solutions',
    category: 'Marketing',
    image: '/images/service-content.jpg',
    description:
      'Produced SEO-friendly content and website copy focused on increasing trust and conversions.',
    tags: ['Content Writing', 'SEO', 'Copywriting'],
  },

  {
    title: 'AI Product Visuals',
    client: 'Smart Living',
    category: 'Ecommerce',
    image: '/images/service-ai.jpg',
    description:
      'Generated realistic AI-powered product visuals for social media promotions and online branding.',
    tags: ['AI Photos', 'Branding', 'Social Media'],
  },

  {
    title: 'Business Landing Page',
    client: 'Elite Realty',
    category: 'Web Design',
    image: '/images/gallery3.jpg',
    description:
      'Built a conversion-focused landing page with a clean design and mobile-first experience.',
    tags: ['Landing Page', 'UI Design', 'Lead Generation'],
  },
]

const categories: Category[] = [
  'All',
  'Branding',
  'Marketing',
  'Social Media',
  'Web Design',
  'Ecommerce',
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All')

  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (p) => p.category === activeCategory
        )

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
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
  }, [activeCategory])

  return (
    <main className="bg-[#f8fafc]">

      {/* Hero Section */}
      <section className="bg-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
            Our Recent Work
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Projects That Help Businesses
            <span className="text-blue-600"> Grow Online</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of our recent work in website design,
            branding, ecommerce marketing, SEO, social media,
            and creative content solutions.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section
        ref={sectionRef}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Filters */}
          <div className="flex items-center justify-center gap-3 mb-14 flex-wrap">

            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
              <Filter
                size={18}
                className="text-gray-500"
              />
            </div>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {filteredProjects.map((project, index) => (
              <div
                key={`${activeCategory}-${index}`}
                className="portfolio-card bg-white rounded-[28px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {project.client}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    View Project

                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  )
}