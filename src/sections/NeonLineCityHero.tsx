import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Link } from 'react-router-dom'

const vertexShader = `
varying vec2 vUv;
varying vec3 vPos;

void main() {
  vUv = uv;
  vPos = position;

  gl_Position =
    projectionMatrix *
    modelViewMatrix *
    vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float time;
uniform vec3 color1;
uniform vec3 color2;

varying vec2 vUv;
varying vec3 vPos;

void main() {

  float dist = length(vPos);

  float alpha = 1.0 / (dist * dist * 0.1);

  vec3 finalColor =
    mix(
      color1,
      color2,
      sin(time * 0.1) * 0.5 + 0.5
    );

  gl_FragColor =
    vec4(finalColor, alpha * 0.1);
}
`

export default function ModernLineCityHero() {
  const containerRef =
    useRef<HTMLDivElement>(null)

  const scrollProgressRef = useRef(0)

  const rendererRef =
    useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    /* Scene */
    const scene = new THREE.Scene()

    scene.fog = new THREE.FogExp2(
      0xf8fafc,
      0.008
    )

    /* Camera */
    const camera =
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth /
          window.innerHeight,
        0.1,
        1000
      )

    /* Renderer */
    const renderer =
      new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    )

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    )

    renderer.setClearColor(0xf8fafc, 1)

    rendererRef.current = renderer

    container.appendChild(renderer.domElement)

    /* Group */
    const group = new THREE.Group()

    const geometry =
      new THREE.BoxGeometry(1, 1, 1)

    const shaderMaterial =
      new THREE.ShaderMaterial({
        transparent: true,

        side: THREE.DoubleSide,

        uniforms: {
          time: { value: 0 },

          color1: {
            value: new THREE.Color(
              '#2563eb'
            ),
          },

          color2: {
            value: new THREE.Color(
              '#93c5fd'
            ),
          },
        },

        vertexShader,

        fragmentShader,
      })

    /* Grid Generation */
    const totalTiles = 300

    const gridRange = 100

    const tiles: {
      mesh: THREE.Mesh
      initialY: number
    }[] = []

    for (let i = 0; i < totalTiles; i++) {
      const tile = new THREE.Mesh(
        geometry,
        shaderMaterial
      )

      tile.position.x =
        (Math.random() - 0.5) *
        gridRange

      tile.position.z =
        (Math.random() - 0.5) *
        gridRange

      tile.position.y =
        Math.random() *
        (gridRange / 2)

      const initialY =
        tile.position.y

      const dist = Math.sqrt(
        tile.position.x ** 2 +
          tile.position.z ** 2
      )

      tile.scale.setScalar(
        Math.max(1, 5 * (1 - dist / 70))
      )

      tile.rotation.x = Math.PI / 2

      group.add(tile)

      tiles.push({
        mesh: tile,
        initialY,
      })
    }

    scene.add(group)

    /* Ground Grid */
    const gridHelper =
      new THREE.GridHelper(
        200,
        100,
        0xdbeafe,
        0xe5e7eb
      )

    gridHelper.position.y = -2

    scene.add(gridHelper)

    /* Camera Position */
    camera.position.set(0, -50, 50)

    camera.lookAt(0, 0, 0)

    /* Scroll */
    const scrollProgress =
      scrollProgressRef

    const handleWheel = (
      e: WheelEvent
    ) => {
      e.preventDefault()

      const newProgress =
        scrollProgress.current +
        e.deltaY * 0.0005

      scrollProgress.current =
        Math.max(
          0,
          Math.min(1, newProgress)
        )
    }

    container.addEventListener(
      'wheel',
      handleWheel,
      { passive: false }
    )

    /* Clock */
    const clock = new THREE.Clock()

    /* Animation */
    let animId: number

    const animate = () => {
      animId =
        requestAnimationFrame(animate)

      const time =
        clock.getElapsedTime()

      shaderMaterial.uniforms.time.value =
        time * 0.5

      const zoom =
        50 +
        scrollProgress.current * 100

      camera.position.z = 50 + zoom

      camera.position.y =
        -50 +
        scrollProgress.current * 50

      camera.lookAt(0, 0, 0)

      tiles.forEach(
        ({ mesh, initialY }) => {
          mesh.position.y =
            initialY +
            Math.sin(
              time + mesh.position.x
            ) *
              5

          mesh.rotation.y = Math.atan2(
            camera.position.x -
              mesh.position.x,

            camera.position.z -
              mesh.position.z
          )
        }
      )

      renderer.render(scene, camera)
    }

    animate()

    /* Resize */
    const handleResize = () => {
      camera.aspect =
        window.innerWidth /
        window.innerHeight

      camera.updateProjectionMatrix()

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      )
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      cancelAnimationFrame(animId)

      container.removeEventListener(
        'wheel',
        handleWheel
      )

      window.removeEventListener(
        'resize',
        handleResize
      )

      renderer.dispose()

      geometry.dispose()

      shaderMaterial.dispose()

      if (
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        )
      }
    }
  }, [])

  return (
    <section className="relative w-full pt-30 md:pt-30 h-screen overflow-hidden bg-[#f8fafc]">

      {/* Three.js Canvas */}
      <div
        ref={containerRef}
        className="absolute inset-0 z-0"
        style={{ touchAction: 'none' }}
      />

      {/* Soft Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f8fafc] to-transparent z-[5]" />

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40 z-[1]" />

      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-40 z-[1]" />

      {/* Hero Content */}
      <div className="hero-overlay absolute inset-0 z-10 flex items-center justify-center px-4">

        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 shadow-xl rounded-[32px] p-8 md:p-12 max-w-xl text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <p className="text-blue-600 text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
            Creative Digital Agency
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">

            We Help Businesses
            <br />

            <span className="text-blue-600">
              Grow Online
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            We create modern websites, branding,
            social media strategies, and ecommerce
            marketing solutions that help businesses
            build a strong online presence.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg"
            >
              Start Project
            </Link>

            <Link
              to="/portfolio"
              className="border border-gray-300 text-gray-700 font-medium px-8 py-3.5 rounded-xl hover:border-blue-400 hover:text-blue-600 bg-white/80 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-pulse">

        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
    </section>
  )
}