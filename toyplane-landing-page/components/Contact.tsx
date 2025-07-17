'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motionConfig'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 bg-blue-50 text-center mx-6 my-10 rounded-3xl shadow-xl"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <p className="text-gray-700 mb-6">Reach out to know more about our toy plane!</p>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Message" className="w-full p-3 border rounded-md" rows={4} />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">Send</button>
      </form>
    </motion.section>
  )
}
