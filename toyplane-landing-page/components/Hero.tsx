'use client'
import { motion } from 'framer-motion'
import PlaneCanvas from './PlaneCanvas'
import BackgroundEffects from './BackgroundEffects'
import { fadeInUp } from '@/lib/motionConfig'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-gradient-to-br from-green-100 to-blue-200 text-center flex flex-col justify-center items-center"
    >
      <BackgroundEffects />

      {/* Text Content */}
      <motion.div
        className="absolute z-10 text-center px-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-gray-800">
          Fly High with Our Toy Plane
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl mt-4 text-gray-700 max-w-2xl mx-auto">
          A realistic, interactive 3D model experience made for fun, learning, and creativity.
        </motion.p>
      </motion.div>

      {/* 3D Plane Canvas */}
      <div className="absolute inset-0 z-0">
        <PlaneCanvas />
      </div>
    </section>
  )
}
