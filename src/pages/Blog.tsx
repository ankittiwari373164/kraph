import { useState } from 'react'
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
} from 'lucide-react'

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
    title: 'How Modern Website Design Helps Businesses Grow',
    excerpt:
      'A well-designed website builds trust, improves user experience, and helps businesses attract more customers online.',

    image: '/images/blog1.jpg',

    category: 'Website Design',

    date: 'Jan 15, 2025',

    readTime: '6 min read',

    author: 'Admin',

    featured: true,
  },

  {
    title: 'Social Media Strategies That Actually Work',
    excerpt:
      'Learn how businesses can grow their audience and increase engagement through consistent and creative social media marketing.',

    image: '/images/blog2.jpg',

    category: 'Social Media',

    date: 'Jan 10, 2025',

    readTime: '5 min read',

    author: 'Admin',
  },

  {
    title: 'Why Local SEO Matters For Small Businesses',
    excerpt:
      'Discover how local SEO and Google Business optimization can help customers find your business faster online.',

    image: '/images/blog3.jpg',

    category: 'SEO',

    date: 'Jan 5, 2025',

    readTime: '7 min read',

    author: 'Admin',
  },

  {
    title: 'Tips To Improve Ecommerce Sales',
    excerpt:
      'From product pages to paid advertising, explore simple ecommerce marketing strategies that increase conversions.',

    image: '/images/gallery1.jpg',

    category: 'Ecommerce',

    date: 'Dec 28, 2024',

    readTime: '8 min read',

    author: 'Admin',
  },

  {
    title: 'Building A Strong Brand Identity Online',
    excerpt:
      'Branding is more than just a logo. Learn how visual identity and messaging create long-term customer trust.',

    image: '/images/service-branding.jpg',

    category: 'Branding',

    date: 'Dec 20, 2024',

    readTime: '6 min read',

    author: 'Admin',
  },

  {
    title: 'Content Writing Tips For Better Engagement',
    excerpt:
      'Good content helps businesses connect with customers, improve SEO, and build a stronger online presence.',

    image: '/images/service-content.jpg',

    category: 'Content',

    date: 'Dec 15, 2024',

    readTime: '5 min read',

    author: 'Admin',
  },
]

const categories = [
  'All',
  'Website Design',
  'Social Media',
  'SEO',
  'Ecommerce',
  'Branding',
  'Content',
]

export default function Blog() {
  const [activeCategory, setActiveCategory] =
    useState('All')

  const featured = blogPosts.find(
    (p) => p.featured
  )

  const filtered =
    activeCategory === 'All'
      ? blogPosts.filter((p) => !p.featured)
      : blogPosts.filter(
          (p) =>
            p.category === activeCategory &&
            !p.featured
        )

  return (
    <main className="bg-[#f8fafc]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-24">

        {/* Soft Background Shapes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
            Blog & Insights
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Helpful Articles For
            <span className="text-blue-600"> Growing Businesses</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore insights on website design, social media,
            branding, SEO, ecommerce marketing, and digital growth strategies.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-16 bg-white border-t border-gray-200">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#f8fafc] border border-gray-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden h-full">

                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">

                <div className="flex items-center gap-3 mb-5 flex-wrap">

                  <span className="text-xs bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
                    Featured
                  </span>

                  <span className="text-xs bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium">
                    {featured.category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                  {featured.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-5">

                  <div className="flex items-center gap-5 text-sm text-gray-500">

                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {featured.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {featured.readTime}
                    </span>
                  </div>

                  <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-all duration-300">

                    Read Article

                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* Filter */}
          <div className="flex items-center gap-3 mb-14 flex-wrap">

            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">

              <Tag
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filtered.map((post, index) => (
              <article
                key={index}
                className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >

                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 mb-4">
                    {post.category}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between flex-wrap gap-4">

                    <div className="flex items-center gap-4 text-sm text-gray-500">

                      <span>{post.author}</span>

                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-all duration-300">

                      Read More

                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}