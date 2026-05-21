import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative bg-void py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-purple/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-neon-purple/10 border border-neon-purple/20 rounded-pill px-4 py-2 mb-8">
            <Sparkles size={16} className="text-neon-purple" />
            <span className="font-inter text-sm text-neon-purple">
              Ready to Dominate?
            </span>
          </div>

          <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Let&apos;s Build Your
            <br />
            <span className="text-gradient-neon">Digital Empire</span>
          </h2>

          <p className="font-inter text-white/40 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Partner with Kraph to unlock unprecedented growth. Our team of 
            strategists, creatives, and technologists is ready to transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="magnetic-btn bg-white text-black font-inter font-semibold px-10 py-4 rounded-pill hover:bg-neon-purple hover:text-white transition-all duration-300 inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="magnetic-btn border border-white/20 text-white font-inter font-medium px-10 py-4 rounded-pill hover:border-neon-purple hover:text-neon-purple transition-all duration-300"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
