import { useState } from 'react'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Future of AI in Digital Marketing: 2025 and Beyond',
    excerpt: 'Explore how artificial intelligence is reshaping the marketing landscape, from predictive analytics to automated content creation and hyper-personalization at scale.',
    image: '/images/blog1.jpg',
    category: 'AI & Technology',
    date: 'Jan 15, 2025',
    readTime: '8 min read',
    author: 'Sarah Chen',
    featured: true,
  },
  {
    title: '10 Branding Trends That Will Define 2025',
    excerpt: 'From immersive experiences to purpose-driven design, discover the branding trends that will shape how companies connect with audiences this year.',
    image: '/images/blog2.jpg',
    category: 'Branding',
    date: 'Jan 10, 2025',
    readTime: '6 min read',
    author: 'Marcus Rivera',
  },
  {
    title: 'Social Media Algorithms: How to Win in 2025',
    excerpt: 'A deep dive into the latest algorithm changes across major platforms and strategies to maximize organic reach and engagement.',
    image: '/images/blog3.jpg',
    category: 'Social Media',
    date: 'Jan 5, 2025',
    readTime: '10 min read',
    author: 'Emily Watson',
  },
  {
    title: 'Building a Performance Marketing Machine',
    excerpt: 'Learn the frameworks and methodologies that top-performing marketing teams use to drive predictable, scalable revenue growth.',
    image: '/images/gallery1.jpg',
    category: 'Performance',
    date: 'Dec 28, 2024',
    readTime: '7 min read',
    author: 'David Kim',
  },
  {
    title: 'The Complete Guide to SEO in the AI Era',
    excerpt: 'How search engine optimization is evolving with AI-powered search and what marketers need to know to stay ahead of the curve.',
    image: '/images/service-seo.jpg',
    category: 'SEO',
    date: 'Dec 20, 2024',
    readTime: '12 min read',
    author: 'Lisa Park',
  },
  {
    title: 'Content Strategy for B2B SaaS Companies',
    excerpt: 'A comprehensive playbook for creating content that drives qualified leads and establishes thought leadership in competitive markets.',
    image: '/images/service-content.jpg',
    category: 'Content',
    date: 'Dec 15, 2024',
    readTime: '9 min read',
    author: 'James Mitchell',
  },
]

const categories = ['All', 'AI & Technology', 'Branding', 'Social Media', 'Performance', 'SEO', 'Content']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const featured = blogPosts.find((p) => p.featured)
  const filtered = activeCategory === 'All'
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory && !p.featured)

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-void pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <p className="font-teko text-neon-purple text-xl uppercase tracking-[0.3em] mb-6">
            Insights & Updates
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-white leading-tight mb-6">
            The <span className="text-gradient-neon">Blog</span>
          </h1>
          <p className="font-inter text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights on digital marketing, 
            branding, AI, and industry trends.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="relative bg-void py-12 border-b border-white/5">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-card overflow-hidden">
              <div className="aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-inter text-xs text-neon-purple bg-neon-purple/10 px-3 py-1 rounded-pill border border-neon-purple/20">
                    Featured
                  </span>
                  <span className="font-inter text-xs text-white/40 bg-white/5 px-3 py-1 rounded-pill">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl text-white mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="font-inter text-white/40 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/30 text-xs font-inter">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {featured.readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-2 font-inter text-sm text-neon-purple hover:text-white transition-colors group">
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="relative bg-void py-24 md:py-32">
        <div className="section-padding">
          {/* Filter */}
          <div className="flex items-center gap-3 mb-12 flex-wrap">
            <Tag size={18} className="text-white/30 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-inter text-sm px-4 py-2 rounded-pill border transition-all duration-300 ${
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
            {filtered.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-5">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-void/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-inter text-xs text-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-pill border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-playfair text-xl text-white mb-2 group-hover:text-neon-purple transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="font-inter text-white/40 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/30 text-xs font-inter">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-white/20 group-hover:text-neon-purple group-hover:translate-x-1 transition-all"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
