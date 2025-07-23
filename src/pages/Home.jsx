import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Jair 👋</h1>
        <p className="text-xl text-gray-300">Web Developer & Creative Technologist</p>
      </motion.div>
    </div>
  )
}
