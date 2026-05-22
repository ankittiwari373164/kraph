import { useEffect, useState } from 'react'
import {
  Link,
  useLocation,
} from 'react-router-dom'

import {
  House,
  User,
  Briefcase,
  Images,
  Newspaper,
  Phone,
} from 'lucide-react'

const navLinks = [
  {
    label: 'Home',
    path: '/',
    icon: House,
  },

  {
    label: 'About',
    path: '/about',
    icon: User,
  },

  {
    label: 'Services',
    path: '/services',
    icon: Briefcase,
  },

  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: Images,
  },

  {
    label: 'Blog',
    path: '/blog',
    icon: Newspaper,
  },

  {
    label: 'Contact',
    path: '/contact',
    icon: Phone,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] =
    useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >

        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >

            <img
              src="/images/kraph-logo.png"
              alt="Kraph Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname ===
                  link.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >

                {link.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                    location.pathname ===
                    link.path
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >

              Start Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">

        <div className="px-4 py-3 flex items-center justify-between">

          {/* Mobile Logo */}
          <Link
            to="/"
            className="flex items-center"
          >

            <img
              src="/images/kraph-logo.png"
              alt="Kraph Logo"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Get Started Button */}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md"
          >

            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-[28px] px-2 py-2">

        <div className="flex items-center justify-between">

          {navLinks.map((link) => {
            const Icon = link.icon

            const active =
              location.pathname ===
              link.path

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[56px] ${
                  active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >

                <Icon size={20} />

                <span className="text-[11px] font-medium">
                  {link.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}