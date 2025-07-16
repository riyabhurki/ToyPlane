'use client'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionConfig'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-green-100 to-blue-100 text-center rounded-3xl mx-6 my-10 shadow-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
      <p className="max-w-2xl mx-auto text-gray-700 px-4">
        Our toy plane is built to inspire imagination and spark creativity. With elegant contours,
        immersive interactivity, and durable materials, it’s not just a toy — it’s an experience.
      </p>
    </motion.section>
  )
}
