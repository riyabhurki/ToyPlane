'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const titleRef = useRef(null)
  const paraRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
    gsap.fromTo(paraRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5 })
  }, [])

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200">
      <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-4">Fly High with Our Toy Plane</h1>
      <p ref={paraRef} className="text-lg max-w-xl text-center">Experience smooth flight and high-quality design with our latest 3D modeled toy plane.</p>
    </section>
  )
}
