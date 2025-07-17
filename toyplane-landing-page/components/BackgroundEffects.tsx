'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function BackgroundEffects() {
  const shapeRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    gsap.to(shapeRefs.current, {
      xPercent: mouse => (mouse.x - window.innerWidth/2) / -40,
      yPercent: mouse => (mouse.y - window.innerHeight/2) / -40,
      ease: 'power1.out',
      stagger: { each: 0.1 },
      repeat: -1,
      duration: 3,
    })

    window.addEventListener('mousemove', e => {
      gsap.to(shapeRefs.current, {
        xPercent: (e.clientX - window.innerWidth/2) / -40,
        yPercent: (e.clientY - window.innerHeight/2) / -40,
        ease: 'power1.out',
      })
    })

    return () => gsap.killTweensOf(shapeRefs.current)
  }, [])

  return (
    <>
      {[-1, 1, -0.5].map((scale, i) => (
        <div
          key={i}
          ref={el => (shapeRefs.current[i] = el)}
          className="absolute z-0 rounded-full bg-blue-300 opacity-20 blur-2xl"
          style={{
            width: `${400 * Math.abs(scale)}px`,
            height: `${400 * Math.abs(scale)}px`,
            top: `${40 + i * 20}%`,
            left: `${30 + i * 30}%`,
          }}
        />
      ))}
    </>
  )
}
