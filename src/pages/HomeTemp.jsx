import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Jair Orduña 👋</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          Full-Stack Software Developer • Creative Technologist • QA Team Lead • Musician
        </p>
      </motion.div>
    </div>
  )
}
