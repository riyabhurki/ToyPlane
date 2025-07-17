'use client'
import { useState, useEffect } from 'react'

const sections = ['hero','features','about','contact']

export default function ScrollNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      for (const id of sections) {
        const elem = document.getElementById(id)
        if (elem && window.scrollY >= elem.offsetTop - window.innerHeight/2) {
          setActive(id)
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <ul className="fixed top-1/2 right-6 z-50 space-y-4">
      {sections.map(id => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={`block w-3 h-3 rounded-full transition-colors ${
              active === id ? 'bg-blue-500' : 'bg-white'
            }`}
          />
        </li>
      ))}
    </ul>
  )
}
