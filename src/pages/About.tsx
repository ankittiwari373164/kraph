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
    title: 'Quality Work',
    desc:
      'We focus on creating clean, modern, and professional digital solutions that help businesses grow.',
  },

  {
    icon: Users,
    title: 'Strong Collaboration',
    desc:
      'We work closely with every client to understand their goals and create strategies that deliver real results.',
  },

  {
    icon: Globe,
    title: 'Modern Presence',
    desc:
      'We help businesses build a strong online presence through websites, branding, and marketing.',
  },

  {
    icon: Rocket,
    title: 'Creative Growth',
    desc:
      'We combine creativity and strategy to help brands grow faster and connect with more customers.',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Started Our Journey',
    desc:
      'We started with a vision to help businesses build stronger digital identities.',
  },

  {
    year: '2021',
    title: 'Growing Client Base',
    desc:
      'Worked with multiple businesses across website design, social media, and branding.',
  },

  {
    year: '2023',
    title: 'Expanded Services',
    desc:
      'Added ecommerce marketing, AI visuals, SEO, and advanced content creation services.',
  },

  {
    year: '2025',
    title: 'Helping Brands Grow',
    desc:
      'Continuing to help businesses scale online with creative digital solutions.',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
            toggleActions: 'play none none reset',
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
            <span className="text-blue-600"> Strong Digital Presence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a creative digital agency focused on website design,
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
                <span className="text-blue-600"> Help Businesses Grow</span>
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

      {/* Timeline */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
              Our Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Growing With Our Clients
            </h2>
          </div>

          <div className="space-y-12">

            {milestones.map((milestone, i) => (
              <div
                key={i}
                className="flex gap-6"
              >

                {/* Year */}
                <div className="w-24 shrink-0">

                  <span className="text-2xl md:text-3xl font-bold text-blue-600">
                    {milestone.year}
                  </span>
                </div>

                {/* Line */}
                <div className="relative flex flex-col items-center">

                  <div className="w-4 h-4 rounded-full bg-blue-600" />

                  {i < milestones.length - 1 && (
                    <div className="w-[2px] h-full bg-blue-100 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white border-t border-gray-200 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
              Our Reach
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Businesses We Work With
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work with startups, local businesses, ecommerce brands,
              and growing companies to create modern digital experiences
              that build trust and drive growth.
            </p>
          </div>

          {/* Modern Map Section */}
          <div className="relative rounded-[36px] bg-[#f8fafc] border border-gray-200 p-10 overflow-hidden shadow-sm">

            {/* Background Shapes */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />

            {/* SVG Map */}
            <div className="relative z-10 max-w-5xl mx-auto">

              <svg
                viewBox="0 0 1000 500"
                className="w-full h-auto opacity-80"
              >

                {/* Continents */}
                <path
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  d="M180,120 Q200,100 230,110 L250,130 Q240,160 220,170 L190,160 Q170,140 180,120Z"
                />

                <path
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  d="M450,80 Q500,60 550,80 L580,120 Q570,180 520,200 L460,180 Q430,130 450,80Z"
                />

                <path
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  d="M680,100 Q750,80 820,110 L850,160 Q830,220 760,230 L700,200 Q660,150 680,100Z"
                />

                <path
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  d="M200,250 Q240,230 280,250 L310,300 Q290,380 240,400 L190,360 Q170,300 200,250Z"
                />

                <path
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth="1"
                  d="M480,240 Q560,220 640,250 L670,320 Q640,400 540,410 L470,360 Q440,290 480,240Z"
                />

                {/* Connection Lines */}
                <path
                  d="M510,140 Q600,100 750,160"
                  stroke="#2563eb"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />

                <path
                  d="M510,140 Q400,200 250,320"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />

                {/* Dots */}
                <circle cx="510" cy="140" r="6" fill="#2563eb" />
                <circle cx="750" cy="160" r="6" fill="#8b5cf6" />
                <circle cx="250" cy="320" r="6" fill="#2563eb" />

                {/* Labels */}
                <text
                  x="510"
                  y="125"
                  textAnchor="middle"
                  fill="#111827"
                  fontSize="12"
                >
                  London
                </text>

                <text
                  x="750"
                  y="145"
                  textAnchor="middle"
                  fill="#111827"
                  fontSize="12"
                >
                  Dubai
                </text>

                <text
                  x="250"
                  y="345"
                  textAnchor="middle"
                  fill="#111827"
                  fontSize="12"
                >
                  New York
                </text>
              </svg>
            </div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            {[
              {
                city: 'New York',
                role: 'Business Hub',
              },

              {
                city: 'London',
                role: 'Creative Projects',
              },

              {
                city: 'Dubai',
                role: 'Marketing Solutions',
              },

              {
                city: 'Sydney',
                role: 'Global Clients',
              },
            ].map((loc, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] border border-gray-200 rounded-[28px] p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {loc.city}
                </h3>

                <p className="text-gray-600 text-sm">
                  {loc.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}