import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-playfair text-2xl md:text-3xl font-bold text-white tracking-tight"
        >
          Kraph<span className="text-neon-purple">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-inter text-sm tracking-wide transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? 'text-neon-purple'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-neon-purple transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="magnetic-btn bg-white text-black font-inter text-sm font-semibold px-6 py-2.5 rounded-pill hover:bg-neon-purple hover:text-white transition-all duration-300"
          >
            Start Project
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-void/95 backdrop-blur-xl border-b border-white/5 transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-inter text-lg transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-neon-purple'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="magnetic-btn bg-white text-black font-inter text-sm font-semibold px-6 py-3 rounded-pill text-center mt-2"
          >
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  )
}
