import { useState } from 'react'
import { Mail, MapPin, Phone, Send, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', company: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-void pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 text-center section-padding">
          <p className="font-teko text-neon-purple text-xl uppercase tracking-[0.3em] mb-6">
            Get In Touch
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl text-white leading-tight mb-6">
            Let&apos;s <span className="text-gradient-neon">Connect</span>
          </h1>
          <p className="font-inter text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We&apos;re here to help you 
            achieve extraordinary results.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative bg-void py-24 md:py-32 border-t border-white/5">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl text-white mb-6">
                Start a <span className="text-neon-purple">Conversation</span>
              </h2>
              <p className="font-inter text-white/40 text-sm leading-relaxed mb-10">
                Whether you have a specific project in mind or just want to explore 
                possibilities, we&apos;d love to hear from you. Our team typically 
                responds within 24 hours.
              </p>

              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors flex-shrink-0">
                    <Mail size={20} className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/40 mb-1">Email Us</p>
                    <a href="mailto:hello@kraph.agency" className="font-inter text-white hover:text-neon-purple transition-colors">
                      hello@kraph.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors flex-shrink-0">
                    <Phone size={20} className="text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/40 mb-1">Call Us</p>
                    <a href="tel:+1234567890" className="font-inter text-white hover:text-neon-blue transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-colors flex-shrink-0">
                    <MapPin size={20} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="font-inter text-xs text-white/40 mb-1">Visit Us</p>
                    <p className="font-inter text-white">
                      123 Innovation Drive<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="font-inter text-xs text-white/40 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-purple hover:bg-neon-purple/10 transition-all"
                    >
                      <span className="font-inter text-[10px] text-white/50">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-neon-purple/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <CheckCircle2 size={32} className="text-neon-purple" />
                    </div>
                    <h3 className="font-playfair text-2xl text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="font-inter text-white/40 text-sm">
                      We&apos;ll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-inter text-xs text-white/40 mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-purple transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-xs text-white/40 mb-2 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-purple transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-inter text-xs text-white/40 mb-2 block">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-purple transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="font-inter text-xs text-white/40 mb-2 block">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-neon-purple transition-colors appearance-none"
                        >
                          <option value="" className="bg-void">Select a service</option>
                          <option value="branding" className="bg-void">Brand Strategy</option>
                          <option value="seo" className="bg-void">SEO & Organic Growth</option>
                          <option value="social" className="bg-void">Social Media</option>
                          <option value="ai" className="bg-void">AI-Powered Marketing</option>
                          <option value="performance" className="bg-void">Performance Marketing</option>
                          <option value="web" className="bg-void">Web Experiences</option>
                          <option value="other" className="bg-void">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-inter text-xs text-white/40 mb-2 block">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon-purple transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="magnetic-btn bg-white text-black font-inter font-semibold px-8 py-4 rounded-pill hover:bg-neon-purple hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 w-full md:w-auto"
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

      {/* Quick CTA */}
      <section className="relative bg-void py-24 border-t border-white/5">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">
              Prefer a <span className="text-neon-purple">Quick Chat</span>?
            </h2>
            <p className="font-inter text-white/40 text-lg max-w-xl mx-auto mb-8">
              Schedule a free 30-minute consultation with our team to discuss 
              your goals and explore how we can help.
            </p>
            <a
              href="mailto:hello@kraph.agency"
              className="magnetic-btn bg-neon-purple text-white font-inter font-semibold px-10 py-4 rounded-pill hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2"
            >
              Book a Call
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
