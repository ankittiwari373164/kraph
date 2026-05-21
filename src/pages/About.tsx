import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Users, Globe, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Orbital Text Helix component
function OrbitalHelix() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    function generateTextRing(text: string, radius: number) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      canvas.height = 128
      ctx.font = 'bold 100px Inter'
      const metrics = ctx.measureText(text)
      canvas.width = metrics.width + 20
      ctx.font = 'bold 100px Inter'
      ctx.fillStyle = '#ffffff'
      ctx.fillText(text, 10, 100)

      const texture = new THREE.CanvasTexture(canvas)
      const anglePerPixel = 0.005
      let totalAngle = 0
      const planes: THREE.Mesh[] = []

      for (let i = 0; i < text.length; i++) {
        const charW = ctx.measureText(text[i]).width
        const charAngle = charW * anglePerPixel

        const planeGeom = new THREE.PlaneGeometry(charW * 0.05, 6.4)
        const planeMat = new THREE.MeshBasicMaterial({
          transparent: true,
          map: texture,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
        planeMat.map!.offset.x = (ctx.measureText(text.substring(0, i)).width + 2) / canvas.width
        planeMat.map!.repeat.x = (charW - 4) / canvas.width

        const plane = new THREE.Mesh(planeGeom, planeMat)
        plane.position.x = radius * Math.cos(totalAngle + charAngle / 2)
        plane.position.z = radius * Math.sin(totalAngle + charAngle / 2)
        plane.rotation.y = -(totalAngle + charAngle / 2)
        totalAngle += charAngle
        planes.push(plane)
      }

      return planes
    }

    const strings = ['GROWTH', 'ALGORITHMS', 'STRATEGY', 'IMPACT']
    const rings: { planes: THREE.Mesh[]; offsetAngle: number; speed: number }[] = []
    const radius = 80

    strings.forEach((str) => {
      const planes = generateTextRing(str, radius)
      const offsetAngle = Math.PI - (str.length * 0.005 * 10)
      rings.push({
        planes,
        offsetAngle,
        speed: 0.004 + Math.random() * 0.004,
      })
      planes.forEach((p) => scene.add(p))
    })

    camera.position.set(0, 10, 120)
    camera.lookAt(0, 0, 0)

    let globalRotation = 0
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      globalRotation += 0.002

      rings.forEach((ring) => {
        const ringAngle = (globalRotation * ring.speed * 100) + ring.offsetAngle
        ring.planes.forEach((plane, index) => {
          plane.position.x = 80 * Math.cos(ringAngle + index * 0.3)
          plane.position.z = 80 * Math.sin(ringAngle + index * 0.3)
          plane.rotation.y = -(ringAngle + index * 0.3)
        })
      })

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0.4 }}
    />
  )
}

const values = [
  { icon: Award, title: 'Excellence', desc: 'We pursue perfection in every pixel, every campaign, every strategy.' },
  { icon: Users, title: 'Collaboration', desc: 'We partner with our clients, becoming an extension of their team.' },
  { icon: Globe, title: 'Global Vision', desc: 'We think beyond borders, crafting strategies for worldwide impact.' },
  { icon: Rocket, title: 'Innovation', desc: 'We stay ahead of the curve, embracing cutting-edge technologies.' },
]

const milestones = [
  { year: '2018', title: 'Founded', desc: 'Kraph was born with a vision to revolutionize digital marketing.' },
  { year: '2020', title: '100 Clients', desc: 'Reached our first milestone of 100 satisfied clients worldwide.' },
  { year: '2022', title: 'AI Integration', desc: 'Pioneered AI-powered marketing strategies in the industry.' },
  { year: '2024', title: 'Global Expansion', desc: 'Expanded operations to 15+ countries across 4 continents.' },
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
            start: 'top 70%',
            toggleActions: 'play none none reset',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <main>
      {/* Hero with Helix */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-void">
        <OrbitalHelix />
        <div className="relative z-10 text-center section-padding">
          <p className="font-teko text-neon-purple text-xl uppercase tracking-[0.3em] mb-6">
            About Kraph
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
            We Engineer
            <br />
            <span className="text-gradient-neon">Brand Dominance</span>
          </h1>
          <p className="font-inter text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A team of visionary strategists, creative technologists, and data scientists 
            dedicated to transforming how brands connect with the world.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent z-[5]" />
      </section>

      {/* Mission */}
      <section ref={sectionRef} className="relative bg-void py-24 md:py-32">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[200px] pointer-events-none" />

        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="about-reveal font-teko text-neon-cyan text-lg uppercase tracking-[0.2em] mb-4">
                Our Mission
              </p>
              <h2 className="about-reveal font-playfair text-4xl md:text-5xl text-white leading-tight mb-6">
                Redefining What&apos;s
                <br />
                <span className="text-neon-purple">Possible</span>
              </h2>
              <p className="about-reveal font-inter text-white/50 text-base leading-relaxed mb-6">
                At Kraph, we believe every brand has the potential to be extraordinary. 
                Our mission is to unlock that potential through the perfect fusion of 
                creativity, technology, and data-driven strategy.
              </p>
              <p className="about-reveal font-inter text-white/50 text-base leading-relaxed">
                We don&apos;t just run campaigns — we architect digital ecosystems that 
                transform businesses. From AI-powered personalization to immersive web 
                experiences, we push the boundaries of what marketing can achieve.
              </p>
            </div>
            <div className="about-reveal rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/about-office.jpg"
                alt="Kraph Office"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-void py-24 md:py-32 border-t border-white/5">
        <div className="section-padding">
          <div className="text-center mb-16">
            <p className="font-teko text-neon-purple text-lg uppercase tracking-[0.2em] mb-4">
              Our DNA
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Core <span className="text-gradient-neon">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="glass-card p-8 text-center group hover:border-neon-purple/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-neon-purple/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon size={28} className="text-neon-purple" />
                </div>
                <h3 className="font-inter font-semibold text-lg text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-inter text-white/40 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-void py-24 md:py-32">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[200px] -translate-y-1/2 pointer-events-none" />

        <div className="section-padding relative z-10">
          <div className="text-center mb-16">
            <p className="font-teko text-neon-cyan text-lg uppercase tracking-[0.2em] mb-4">
              Our Journey
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Milestones of <span className="text-neon-purple">Growth</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className="flex gap-8 mb-12 last:mb-0 group"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-teko text-3xl text-neon-purple">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 rounded-full bg-neon-purple border-4 border-void group-hover:scale-150 transition-transform duration-300" />
                  {i < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-[60px] bg-gradient-to-b from-neon-purple/50 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-inter font-semibold text-lg text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-inter text-white/40 text-sm leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="relative bg-[#050b14] py-24 md:py-32 overflow-hidden">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="font-teko text-neon-cyan text-lg uppercase tracking-[0.2em] mb-4">
              Global Reach
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-white">
              Our <span className="text-neon-purple">Presence</span>
            </h2>
          </div>

          {/* SVG World Map */}
          <div className="relative w-full max-w-5xl mx-auto">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto filter drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <defs>
                <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f2c2c" />
                  <stop offset="100%" stopColor="#2a8a8a" />
                </linearGradient>
                <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1a2e4c" />
                  <stop offset="100%" stopColor="#3a7bd5" />
                </linearGradient>
                <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2a1a3a" />
                  <stop offset="100%" stopColor="#bc13fe" />
                </linearGradient>
              </defs>

              {/* Simplified world continents */}
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M180,120 Q200,100 230,110 L250,130 Q240,160 220,170 L190,160 Q170,140 180,120Z"
              />
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M450,80 Q500,60 550,80 L580,120 Q570,180 520,200 L460,180 Q430,130 450,80Z"
              />
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M680,100 Q750,80 820,110 L850,160 Q830,220 760,230 L700,200 Q660,150 680,100Z"
              />
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M200,250 Q240,230 280,250 L310,300 Q290,380 240,400 L190,360 Q170,300 200,250Z"
              />
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M480,240 Q560,220 640,250 L670,320 Q640,400 540,410 L470,360 Q440,290 480,240Z"
              />
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M750,280 Q830,260 900,300 L920,370 Q880,420 800,410 L740,360 Q710,320 750,280Z"
              />
              <path
                className="land-mass"
                fill="#111d2e"
                stroke="#1c2e45"
                strokeWidth="0.5"
                d="M820,380 Q870,360 910,390 L920,440 Q890,470 840,460 L800,430 Q790,400 820,380Z"
              />

              {/* Routes */}
              <path
                className="map-route"
                d="M510,140 Q600,100 750,160"
                stroke="url(#grad-teal)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
                style={{ filter: 'drop-shadow(0 0 6px #2a8a8a)' }}
              />
              <path
                className="map-route"
                d="M510,140 Q400,200 250,320"
                stroke="url(#grad-blue)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
                style={{ filter: 'drop-shadow(0 0 6px #3a7bd5)' }}
              />
              <path
                className="map-route"
                d="M750,160 Q780,280 830,400"
                stroke="url(#grad-purple)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
                style={{ filter: 'drop-shadow(0 0 6px #bc13fe)' }}
              />

              {/* Arc connectors */}
              <path
                className="map-arc"
                d="M250,320 Q380,260 510,140"
                stroke="rgba(255,215,0,0.3)"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                className="map-arc"
                d="M830,400 Q790,280 750,160"
                stroke="rgba(255,215,0,0.3)"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
              />

              {/* Destination dots */}
              <circle cx="510" cy="140" r="5" fill="#FFD700" style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }} />
              <circle cx="750" cy="160" r="5" fill="#FFD700" style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }} />
              <circle cx="250" cy="320" r="5" fill="#FFD700" style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }} />
              <circle cx="830" cy="400" r="5" fill="#FFD700" style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }} />

              {/* Rings */}
              <circle cx="510" cy="140" r="12" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />
              <circle cx="750" cy="160" r="12" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />
              <circle cx="250" cy="320" r="12" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />
              <circle cx="830" cy="400" r="12" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />

              {/* Labels */}
              <text x="510" y="125" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" opacity="0.8">London</text>
              <text x="750" y="145" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" opacity="0.8">Dubai</text>
              <text x="250" y="345" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" opacity="0.8">São Paulo</text>
              <text x="830" y="425" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter" opacity="0.8">Sydney</text>
            </svg>
          </div>

          {/* Location cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { city: 'New York', role: 'Headquarters' },
              { city: 'London', role: 'EMEA Hub' },
              { city: 'Dubai', role: 'APAC Hub' },
              { city: 'Sydney', role: 'Oceania Hub' },
            ].map((loc, i) => (
              <div key={i} className="glass-card p-4 text-center">
                <p className="font-inter font-semibold text-white text-sm">{loc.city}</p>
                <p className="font-inter text-white/40 text-xs">{loc.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
