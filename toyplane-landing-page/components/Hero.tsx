'use client'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-blue-200 overflow-hidden text-center">
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: ['#00d2ff', '#3a7bd5'] },
            shape: { type: 'circle' },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: true, speed: 4, size_min: 0.3, sync: false },
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              out_mode: 'bounce',
            },
          },
        }}
      />
      <motion.h1
        className="text-5xl md:text-7xl font-bold z-10 text-gray-800"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Fly High with Our Toy Plane
      </motion.h1>
      <motion.p
        className="text-lg max-w-xl mt-4 text-gray-700 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        A realistic, interactive 3D model experience made for fun, learning, and creativity.
      </motion.p>
    </section>
  )
}
