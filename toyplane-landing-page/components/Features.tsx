'use client'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionConfig'

export default function Features() {
  return (
    <motion.section
      id="features"
      className="py-20 bg-gradient-to-br from-blue-100 to-green-100 text-center rounded-3xl mx-6 shadow-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Top Features</h2>
      <div className="grid md:grid-cols-3 gap-6 px-4">
        {['Realistic Design', '3D Model Interactivity', 'Durable Materials'].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-800">{item}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
