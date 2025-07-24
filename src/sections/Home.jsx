import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen px-4 bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Jair Orduña 👋</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Full-Stack Developer • QA Leader • Creative Technologist
        </p>
      </motion.div>
    </section>
  )
}
