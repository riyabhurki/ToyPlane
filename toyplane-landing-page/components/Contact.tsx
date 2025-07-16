'use client'
import { motion } from 'framer-motion'
import { containerVariants } from '@/lib/motionConfig'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-100 to-green-100 text-center rounded-3xl mx-6 my-10 shadow-xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <p className="text-gray-700 px-4">
        Have questions or feedback? Reach out to us at{' '}
        <a
          href="mailto:info@toyplane.com"
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          info@toyplane.com
        </a>
      </p>
    </motion.section>
  )
}
