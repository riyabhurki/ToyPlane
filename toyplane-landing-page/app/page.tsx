'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PlaneCanvas from '@/components/PlaneCanvas'
import About from '@/components/About'
import Features from '@/components/Features'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <PlaneCanvas />
        <About />
        <Features />
        <Contact />
      </main>
    </>
  )
}
