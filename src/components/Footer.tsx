import { Link } from 'react-router-dom'
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react'

const companyLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  {
    label: 'Website Designing',
    path: '/services',
  },

  {
    label: 'Social Media Handling',
    path: '/services',
  },

  {
    label: 'Local SEO',
    path: '/services',
  },

  {
    label: 'Ecommerce Marketing',
    path: '/services',
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#f1f5f9] border-t border-gray-200 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-padding relative z-10 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - Brand */}
          <div>

            {/* Logo */}
            <Link
              to="/"
              className="inline-block mb-5"
            >

              <img
                src="/images/kraph-logo.png"
                alt="Kraph Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We help businesses grow with modern
              websites, social media marketing,
              branding, local SEO, and ecommerce
              marketing solutions.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">

              {[
                Instagram,
                Facebook,
                Linkedin,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 shadow-sm"
                >

                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>

            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Company
            </h4>

            <ul className="space-y-4">

              {companyLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >

                    <span>
                      {link.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>

            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Services
            </h4>

            <ul className="space-y-4">

              {serviceLinks.map((link) => (
                <li key={link.label}>

                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >

                    <span>
                      {link.label}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>

            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Contact
            </h4>

            <div className="space-y-4">

              {/* Phone Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition-all duration-300 shadow-sm">

                <div className="flex items-start gap-3">

                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">

                    <Phone
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Call Us
                    </p>

                    <a
                      href="tel:+919074076735"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      9074076735
                    </a>

                    <a
                      href="tel:+919893906887"
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      9893906887
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition-all duration-300 shadow-sm">

                <div className="flex items-start gap-3">

                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">

                    <Mail
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Email
                    </p>

                    <a
                      href="mailto:hello@kraph.in"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      hello@kraph.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 hover:border-blue-200 hover:shadow-md transition-all duration-300 shadow-sm">

                <div className="flex items-start gap-3">

                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">

                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Address
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      B-1243 Anand Nagar
                      <br />
                      Bahodapur, Gwalior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kraph Agency.
            All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with creativity in India
          </p>
        </div>
      </div>
    </footer>
  )
}