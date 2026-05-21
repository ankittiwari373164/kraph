import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Filter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Category = 'All' | 'Branding' | 'Digital' | 'Social' | 'Web' | 'AI'

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
    title: 'Quantum Rebrand',
    client: 'TechVision Inc.',
    category: 'Branding',
    image: '/images/gallery2.jpg',
    description: 'Complete brand overhaul for a leading SaaS company, resulting in 340% increase in brand recognition.',
    tags: ['Brand Strategy', 'Visual Identity', 'Guidelines'],
  },
  {
    title: 'Growth Engine',
    client: 'ScaleUp Finance',
    category: 'Digital',
    image: '/images/gallery1.jpg',
    description: 'Multi-channel digital marketing campaign that generated $2.4M in qualified pipeline.',
    tags: ['SEO', 'PPC', 'Content'],
  },
  {
    title: 'Viral Launch',
    client: 'Nova App',
    category: 'Social',
    image: '/images/gallery3.jpg',
    description: 'Social-first product launch that achieved 5M impressions and 200K downloads in 48 hours.',
    tags: ['Social Media', 'Influencers', 'Content'],
  },
  {
    title: 'AI Dashboard',
    client: 'DataFlow Systems',
    category: 'Web',
    image: '/images/service-web.jpg',
    description: 'Immersive web experience featuring real-time data visualization and AI-powered insights.',
    tags: ['Web Design', 'Development', 'UX/UI'],
  },
  {
    title: 'Neural Campaign',
    client: 'Cortex AI',
    category: 'AI',
    image: '/images/service-ai.jpg',
    description: 'First-of-its-kind AI-driven marketing campaign with dynamic personalization at scale.',
    tags: ['AI/ML', 'Personalization', 'Analytics'],
  },
  {
    title: 'Brand Elevation',
    client: 'Luxe Retail',
    category: 'Branding',
    image: '/images/service-branding.jpg',
    description: 'Premium brand identity for luxury retail chain expanding into digital markets.',
    tags: ['Luxury Branding', 'Packaging', 'Digital'],
  },
  {
    title: 'Performance Plus',
    client: 'GameVault',
    category: 'Digital',
    image: '/images/service-performance.jpg',
    description: 'Performance marketing strategy that reduced CAC by 45% while doubling conversion rates.',
    tags: ['Paid Media', 'CRO', 'Analytics'],
  },
  {
    title: 'Content Studio',
    client: 'MediaHive',
    category: 'Social',
    image: '/images/service-content.jpg',
    description: 'End-to-end content production and distribution system for a media startup.',
    tags: ['Video', 'Motion', 'Distribution'],
  },
  {
    title: 'E-commerce Revamp',
    client: 'ShopStream',
    category: 'Web',
    image: '/images/service-seo.jpg',
    description: 'Full e-commerce rebuild with headless architecture and conversion-focused design.',
    tags: ['E-commerce', 'Development', 'CRO'],
  },
]

const categories: Category[] = ['All', 'Branding', 'Digital', 'Social', 'Web', 'AI']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const sectionRef = useRef<HTMLDivElement>(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
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
  }, [activeCategory])

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-void pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <p className="font-teko text-neon-blue text-xl uppercase tracking-[0.3em] mb-6">
            Our Work
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-white leading-tight mb-6">
            <span className="text-gradient-neon">Portfolio</span>
          </h1>
          <p className="font-inter text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A curated selection of our most impactful work. Each project represents 
            a partnership built on trust, creativity, and results.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section ref={sectionRef} className="relative bg-void py-24 md:py-32">
        <div className="section-padding">
          {/* Filter */}
          <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
            <Filter size={18} className="text-white/30 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-sm px-5 py-2 rounded-pill border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-neon-purple border-neon-purple text-white'
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={`${activeCategory}-${index}`}
                className="portfolio-card group relative rounded-2xl overflow-hidden border border-white/10 bg-void-light cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-inter text-xs text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-pill border border-neon-blue/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl text-white mb-1 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-white/50 text-sm mb-3">
                    {project.client}
                  </p>
                  <p className="font-inter text-white/40 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="font-inter text-[10px] text-white/30 bg-white/5 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon-purple transition-colors">
                      <ExternalLink size={16} className="text-white" />
                    </div>
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
