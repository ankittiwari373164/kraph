import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden border-t border-gray-200">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[200px]" />

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      <div className="section-padding relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8">

            <Sparkles
              size={16}
              className="text-blue-600"
            />

            <span className="text-sm font-medium text-blue-600">
              Ready To Grow?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">

            Let&apos;s Build Your
            <br />

            <span className="text-blue-600">
              Digital Presence
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            We help businesses grow with modern websites,
            branding, ecommerce marketing, SEO, and social
            media strategies designed to create real impact online.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact"
              className="magnetic-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >

              Start Your Project

              <ArrowRight size={18} />
            </Link>

            <Link
              to="/portfolio"
              className="magnetic-btn border border-gray-300 bg-white text-gray-700 font-medium px-10 py-4 rounded-full hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >

              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}