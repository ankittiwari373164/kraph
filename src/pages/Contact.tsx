import { useState } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
} from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] =
    useState(false)

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)

      setFormState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }))
  }

  return (
    <main className="bg-[#f8fafc]">

      {/* Hero */}
      <section className="bg-white pt-24 pb-20 border-b border-gray-200">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Let’s Talk About Your
            <span className="text-blue-600">
              {' '}
              Business Goals
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need a website,
            social media management,
            ecommerce marketing,
            branding, or SEO — we’re here
            to help your business grow
            online with the right digital
            solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Contact Info */}
            <div className="lg:col-span-2">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let’s Start a Conversation
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10">
                Have a project in mind or
                want to know how we can help
                your business grow? Fill out
                the form and our team will
                get back to you as soon as
                possible.
              </p>

              {/* Info Cards */}
              <div className="flex flex-col gap-5 mb-10">

                {/* Email */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">

                    <Mail
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500 mb-1">
                      Email Us
                    </p>

                    <a
                      href="mailto:kraphofficial01@gmail.com"
                      className="text-gray-900 font-medium hover:text-blue-600 transition-colors break-all"
                    >
                      kraphofficial01@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">

                    <Phone
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500 mb-1">
                      Call Us
                    </p>

                    <a
                      href="tel:+919074076735"
                      className="block text-gray-900 font-medium hover:text-green-600 transition-colors"
                    >
                      +91 90740 76735
                    </a>

                    <a
                      href="tel:+919893906887"
                      className="block text-gray-900 font-medium hover:text-green-600 transition-colors"
                    >
                      +91 98939 06887
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">

                    <MapPin
                      size={20}
                      className="text-purple-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm text-gray-500 mb-1">
                      Office Address
                    </p>

                    <p className="text-gray-900 font-medium leading-relaxed">
                      B-1243 Anand Nagar
                      <br />
                      Bahodapur, Gwalior
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>

                <p className="text-sm text-gray-500 mb-4">
                  Follow Us
                </p>

                <div className="flex gap-3">

                  {[
                    {
                      icon: (
                        <Instagram size={18} />
                      ),
                      link: '#',
                    },

                    {
                      icon: (
                        <Facebook size={18} />
                      ),
                      link: '#',
                    },

                    {
                      icon: (
                        <Linkedin size={18} />
                      ),
                      link: '#',
                    },

                    {
                      icon: (
                        <MessageCircle size={18} />
                      ),
                      link:
                        'https://wa.me/919074076735',
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >

                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">

              <div className="bg-white border border-gray-200 rounded-[32px] shadow-sm p-8 md:p-10">

                {submitted ? (
                  <div className="text-center py-12">

                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">

                      <CheckCircle2
                        size={32}
                        className="text-green-600"
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully
                    </h3>

                    <p className="text-gray-600">
                      Thank you for reaching
                      out. We’ll get back to
                      you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={
                            handleChange
                          }
                          required
                          placeholder="John Doe"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={
                            handleChange
                          }
                          required
                          placeholder="john@company.com"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Company + Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>

                        <input
                          type="text"
                          name="company"
                          value={
                            formState.company
                          }
                          onChange={
                            handleChange
                          }
                          placeholder="Your Company"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service Needed
                        </label>

                        <select
                          name="service"
                          value={
                            formState.service
                          }
                          onChange={
                            handleChange
                          }
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >

                          <option value="">
                            Select a service
                          </option>

                          <option value="website">
                            Website Designing
                          </option>

                          <option value="seo">
                            Local SEO &
                            Google Business
                          </option>

                          <option value="social">
                            Social Media
                            Handling
                          </option>

                          <option value="branding">
                            Graphic Designing
                          </option>

                          <option value="ecommerce">
                            Ecommerce
                            Marketing
                          </option>

                          <option value="content">
                            Content Writing
                          </option>

                          <option value="photoshoot">
                            Product Photo Shoot
                          </option>

                          <option value="ai">
                            AI Product Photos
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>

                      <textarea
                        name="message"
                        value={
                          formState.message
                        }
                        onChange={
                          handleChange
                        }
                        required
                        rows={6}
                        placeholder="Tell us about your project, goals, or business requirements..."
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg w-full md:w-auto"
                    >

                      Send Message

                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-white border-t border-gray-200">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">

            Prefer a Quick
            <span className="text-blue-600">
              {' '}
              Consultation Call?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Let’s discuss your business
            goals and explore how we can
            help you build a stronger
            online presence.
          </p>

          <a
            href="mailto:kraphofficial01@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >

            Book a Free Call

            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}