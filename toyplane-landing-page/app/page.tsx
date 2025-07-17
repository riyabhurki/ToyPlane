import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ScrollNav from '@/components/ScrollNav'

export default function Home() {
  return (
    <main className="overflow-x-hidden relative">
      <ScrollNav />
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  )
}
