import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Award,
  Users,
  Globe,
  Rocket,
  CheckCircle2,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* Soft Background Shapes */
function BackgroundShapes() {
  return (
    <>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-40" />
    </>
  )
}

const values = [
  {
    icon: Award,
    title: 'Creative Work',
    desc:
      'We focus on creating clean, modern, and impactful digital experiences for growing businesses.',
  },

  {
    icon: Users,
    title: 'Real Collaboration',
    desc:
      'We work closely with every client to understand their goals and create meaningful solutions.',
  },

  {
    icon: Globe,
    title: 'Digital Presence',
    desc:
      'Helping businesses build strong online presence through websites, branding, and marketing.',
  },

  {
    icon: Rocket,
    title: 'Growing Together',
    desc:
      'We believe in long-term growth, creativity, and building strong client relationships.',
  },
]

const journey = [
  {
    title: 'Started With Creativity',
    desc:
      'Kraph started with a simple vision — helping businesses build better online presence through design, creativity, and digital solutions.',
  },

  {
    title: 'Learning & Building',
    desc:
      'We spent time exploring modern design trends, website experiences, branding, and digital marketing strategies.',
  },

  {
    title: 'Working With Businesses',
    desc:
      'From local brands to growing startups, we started helping businesses improve their websites, social media, and online visibility.',
  },

  {
    title: 'Growing Every Day',
    desc:
      'We continue learning, creating, and building better experiences for businesses that want to grow online.',
  },
]

export default function About() {
  const sectionRef =
    useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions:
              'play none none reset',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-[#f8fafc]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-24">

        <BackgroundShapes />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Helping Businesses Build
            <span className="text-blue-600">
              {' '}
              Strong Digital Presence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a growing creative digital agency focused on website design,
            ecommerce marketing, social media management, branding,
            SEO, and content creation that helps businesses grow online.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        ref={sectionRef}
        className="py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>

              <p className="about-reveal text-blue-600 font-semibold uppercase tracking-wide mb-4">
                Our Mission
              </p>

              <h2 className="about-reveal text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Creative Solutions That
                <span className="text-blue-600">
                  {' '}
                  Help Businesses Grow
                </span>
              </h2>

              <p className="about-reveal text-gray-600 leading-relaxed mb-6">
                We believe every business deserves a strong and professional
                online presence. Our mission is to help brands connect
                with more customers through modern design, creative
                marketing, and impactful digital experiences.
              </p>

              <p className="about-reveal text-gray-600 leading-relaxed mb-8">
                From website design and social media management to ecommerce
                marketing and branding, we create solutions that are simple,
                effective, and focused on real business growth.
              </p>

              <div className="flex flex-col gap-4">

                {[
                  'Modern Website Design',
                  'Social Media & Branding',
                  'SEO & Google Business Optimization',
                  'Ecommerce Marketing Solutions',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-blue-600"
                    />

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="about-reveal rounded-[32px] overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

              <img
                src="/images/about-office.jpg"
                alt="About Agency"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

            {values.map((value, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-[28px] p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-6">

                  <value.icon
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
              Our Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Building & Growing Step By Step
            </h2>
          </div>

          <div className="space-y-8">

            {journey.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-[30px] p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">

                    <Rocket
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 bg-white border-t border-gray-200 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
              Who We Work With
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Growing With Local Businesses & Startups
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We collaborate with startups, creators, ecommerce stores,
              and local businesses to build modern digital experiences
              that help brands grow online.
            </p>
          </div>

          {/* Modern Collaboration Layout */}
          <div className="relative rounded-[40px] bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] border border-blue-100 overflow-hidden shadow-sm">

            {/* Glow Effects */}
            <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-200/40 rounded-full blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-200/40 rounded-full blur-[120px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-14 items-center">

              {/* Left Content */}
              <div>

                <div className="inline-flex items-center gap-2 bg-white border border-blue-100 rounded-full px-5 py-2 shadow-sm mb-8">

                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />

                  <span className="text-sm font-medium text-gray-700">
                    Growing From Gwalior
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">

                  Building Digital Presence
                  <span className="text-blue-600">
                    {' '}
                    For Modern Businesses
                  </span>
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  We help startups, creators, local businesses,
                  and ecommerce brands grow online through
                  modern websites, branding, social media,
                  SEO, and marketing solutions.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-5">

                  {[
                    'Website Designing',
                    'Social Media Handling',
                    'Local SEO & GMB',
                    'Ecommerce Marketing',
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                    >

                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">

                        <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      </div>

                      <span className="font-medium text-gray-800">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">

                {/* Main Card */}
                <div className="relative bg-white border border-gray-200 rounded-[36px] p-8 shadow-xl overflow-hidden">

                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

                  <div className="relative z-10">

                    {/* Top Badge */}
                    <div className="flex items-center justify-between mb-10">

                      <div>

                        <p className="text-sm text-gray-500 mb-1">
                          Creative Agency
                        </p>

                        <h4 className="text-2xl font-bold text-gray-900">
                          Kraph Studio
                        </h4>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

                        <span className="text-white font-bold text-xl">
                          K
                        </span>
                      </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="space-y-5">

                      {[
                        {
                          title: 'Modern Websites',
                          desc: 'Responsive & user-friendly experiences.',
                        },

                        {
                          title: 'Creative Branding',
                          desc: 'Designs that help brands stand out.',
                        },

                        {
                          title: 'Social Media Growth',
                          desc: 'Content & strategies for engagement.',
                        },
                      ].map((card, i) => (
                        <div
                          key={i}
                          className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                        >

                          <h5 className="font-semibold text-gray-900 mb-2">
                            {card.title}
                          </h5>

                          <p className="text-sm text-gray-600 leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-3 mt-8">

                      {[
                        'Design',
                        'Marketing',
                        'SEO',
                        'Branding',
                        'Content',
                      ].map((tag, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium"
                        >

                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-5 -right-5 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-lg">

                  <p className="text-sm text-gray-500 mb-1">
                    Focused On
                  </p>

                  <p className="font-semibold text-gray-900">
                    Real Business Growth
                  </p>
                </div>

                <div className="absolute -bottom-5 -left-5 bg-blue-600 rounded-2xl px-6 py-5 shadow-xl">

                  <p className="text-white text-sm mb-1">
                    Helping Brands
                  </p>

                  <p className="text-white font-semibold text-lg">
                    Grow Online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}