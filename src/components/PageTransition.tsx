import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()
  const pageRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const overlay = overlayRef.current
    const page = pageRef.current
    if (!overlay || !page) return

    const tl = gsap.timeline()

    // Fade in from black
    tl.set(overlay, { opacity: 1, pointerEvents: 'auto' })
    tl.to(overlay, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(overlay, { pointerEvents: 'none' })
      },
    })

    // Stagger content entrance
    tl.fromTo(
      page,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    )

    return () => {
      tl.kill()
    }
  }, [location.pathname])

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-black pointer-events-none"
        style={{ opacity: 0 }}
      />
      <div ref={pageRef}>{children}</div>
    </>
  )
}
