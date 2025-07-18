'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function BackgroundEffects() {
  const shapeRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / -40
      const y = (e.clientY - window.innerHeight / 2) / -40

      gsap.to(shapeRefs.current, {
        xPercent: x,
        yPercent: y,
        ease: 'power1.out',
        stagger: { each: 0.1 },
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={el => {
            if (el) shapeRefs.current[i] = el
          }}
          className="absolute w-32 h-32 rounded-full bg-blue-300 opacity-30 blur-3xl"
          style={{ top: `${20 + i * 50}px`, left: `${30 + i * 100}px` }}
        />
      ))}
    </div>
  )
}
