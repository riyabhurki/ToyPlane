'use client'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionConfig'

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 bg-gradient-to-r from-blue-50 to-green-50 text-center mx-auto max-w-4xl my-10 px-6 rounded-3xl shadow-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our toy plane is built to inspire imagination and spark creativity. With elegant contours,
        immersive interactivity, and durable materials, it’s not just a toy — it’s an experience.
      </p>
    </motion.section>
  )
}
