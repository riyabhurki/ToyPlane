// lib/motionConfig.ts
import type { Variants } from 'framer-motion'

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 15,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}
