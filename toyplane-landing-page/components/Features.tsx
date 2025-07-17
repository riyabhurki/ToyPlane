'use client'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionConfig'

export default function Features() {
  const features = [
    'Realistic Design',
    '3D Model Interactivity',
    'Durable Materials',
    'Lightweight & Safe',
    'Collector Friendly',
    'Child Approved'
  ]

  return (
    <motion.section
      id="features"
      className="py-16 bg-gradient-to-br from-blue-100 to-green-100 text-center mx-auto max-w-6xl my-10 px-6 rounded-3xl shadow-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Top Features</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-800">{item}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
