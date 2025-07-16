'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
  <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow backdrop-blur-sm' : 'bg-transparent'}`}>
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-gray-800">Toy Plane</h1>
    <ul className="flex space-x-6 text-gray-700">
      <li><a href="#about" className="hover:text-blue-500">About</a></li>
      <li><a href="#features" className="hover:text-blue-500">Features</a></li>
      <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
    </ul>
  </div>
</nav>

  )
}
