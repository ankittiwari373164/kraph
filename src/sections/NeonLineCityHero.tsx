import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Link } from 'react-router-dom'

const vertexShader = `
varying vec2 vUv;
varying vec3 vPos;
void main() {
  vUv = uv;
  vPos = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float time;
uniform vec3 color1;
uniform vec3 color2;
varying vec2 vUv;
varying vec3 vPos;

vec3 palette(in float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.25, 0.41, 0.96);
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float dist = length(vPos);
  float alpha = 1.0 / (dist * dist * 0.1);
  vec3 finalColor = mix(color1, color2, sin(time * 0.1) * 0.5 + 0.5);
  gl_FragColor = vec4(finalColor, alpha * 0.1);
}
`

export default function NeonLineCityHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollProgressRef = useRef(0)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.015)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x0a0a0a, 1)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    // Group and geometry
    const group = new THREE.Group()
    const geometry = new THREE.BoxGeometry(1, 1, 1)

    const shaderMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color('#bc13fe') },
        color2: { value: new THREE.Color('#000000') },
      },
      vertexShader,
      fragmentShader,
    })

    // Grid generation
    const totalTiles = 300
    const gridRange = 100
    const tiles: { mesh: THREE.Mesh; initialY: number }[] = []

    for (let i = 0; i < totalTiles; i++) {
      const tile = new THREE.Mesh(geometry, shaderMaterial)
      tile.position.x = (Math.random() - 0.5) * gridRange
      tile.position.z = (Math.random() - 0.5) * gridRange
      tile.position.y = Math.random() * (gridRange / 2)
      const initialY = tile.position.y

      const dist = Math.sqrt(tile.position.x ** 2 + tile.position.z ** 2)
      tile.scale.setScalar(Math.max(1, 5 * (1 - dist / 70)))

      tile.rotation.x = Math.PI / 2
      group.add(tile)
      tiles.push({ mesh: tile, initialY })
    }

    scene.add(group)

    // Ground grid
    const gridHelper = new THREE.GridHelper(200, 100, 0xbc13fe, 0x1a1a1a)
    gridHelper.position.y = -2
    scene.add(gridHelper)

    // Camera
    camera.position.set(0, -50, 50)
    camera.lookAt(0, 0, 0)

    // Scroll handler
    const scrollProgress = scrollProgressRef
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const newProgress = scrollProgress.current + e.deltaY * 0.0005
      scrollProgress.current = Math.max(0, Math.min(1, newProgress))
    }
    container.addEventListener('wheel', handleWheel, { passive: false })

    // Clock
    const clock = new THREE.Clock()

    // Animation loop
    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()

      shaderMaterial.uniforms.time.value = time * 0.5

      const zoom = 50 + scrollProgress.current * 100
      camera.position.z = 50 + zoom
      camera.position.y = -50 + scrollProgress.current * 50
      camera.lookAt(0, 0, 0)

      tiles.forEach(({ mesh, initialY }) => {
        mesh.position.y = initialY + Math.sin(time + mesh.position.x) * 5
        mesh.rotation.y = Math.atan2(
          camera.position.x - mesh.position.x,
          camera.position.z - mesh.position.z
        )
      })

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      container.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      shaderMaterial.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Three.js canvas container */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ touchAction: 'none' }}
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent z-[5]" />

      {/* Hero UI overlay */}
      <div className="hero-overlay absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
        <div className="glass-card p-8 md:p-12 max-w-xl text-center pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="font-teko text-neon-purple text-lg uppercase tracking-[0.3em] mb-4">
            Premium Digital Agency
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            We Engineer
            <br />
            <span className="text-gradient-neon">Brand Dominance</span>
          </h1>
          <p className="font-inter text-base md:text-lg text-white/60 leading-relaxed mb-8">
            Kraph is a forward-thinking digital marketing agency that transforms brands 
            through AI-powered strategies, data-driven campaigns, and immersive digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="magnetic-btn bg-white text-black font-inter font-semibold px-8 py-3.5 rounded-pill hover:bg-neon-purple hover:text-white transition-all duration-300"
            >
              Start Project
            </Link>
            <Link
              to="/portfolio"
              className="magnetic-btn border border-white/20 text-white font-inter font-medium px-8 py-3.5 rounded-pill hover:border-neon-purple hover:text-neon-purple transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-pulse">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
      </div>
    </section>
  )
}
