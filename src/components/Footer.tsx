import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Careers', path: '#' },
  ],
  Resources: [
    { label: 'Blog', path: '/blog' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
  ],
  Services: [
    { label: 'Branding', path: '/services' },
    { label: 'SEO Optimization', path: '/services' },
    { label: 'Social Media', path: '/services' },
    { label: 'AI Marketing', path: '/services' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="font-playfair text-4xl font-bold text-white inline-block mb-6">
              Kraph<span className="text-neon-purple">.</span>
            </Link>
            <p className="text-white/50 font-inter text-sm leading-relaxed mb-6 max-w-sm">
              A premium digital marketing agency specializing in branding, AI-powered marketing, 
              social media growth, and performance campaigns. We engineer brand dominance.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@kraph.agency" className="flex items-center gap-3 text-white/50 hover:text-neon-purple transition-colors text-sm font-inter">
                <Mail size={16} />
                hello@kraph.agency
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-white/50 hover:text-neon-purple transition-colors text-sm font-inter">
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm font-inter">
                <MapPin size={16} />
                New York, NY
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="font-teko text-lg uppercase tracking-wider text-white mb-6">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white transition-colors text-sm font-inter flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="font-teko text-lg uppercase tracking-wider text-white mb-6">Stay Updated</h4>
            <p className="text-white/50 text-sm font-inter mb-4">
              Subscribe to our newsletter for the latest insights on digital marketing trends.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-pill px-4 py-2.5 text-sm font-inter text-white placeholder:text-white/30 focus:outline-none focus:border-neon-purple transition-colors"
              />
              <button className="bg-neon-purple text-white font-inter text-sm font-semibold px-6 py-2.5 rounded-pill hover:bg-neon-purple/80 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            &copy; {new Date().getFullYear()} Kraph Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/30 hover:text-neon-purple transition-colors text-xs font-inter"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
