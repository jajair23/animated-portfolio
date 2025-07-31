import OrbBackground from '../components/OrbBackground'
import { motion } from 'framer-motion'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import emailIcon from '../assets/email.png'

export default function Home() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <OrbBackground />
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl text-white font-sans">Hi, I’m Jair Orduña</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-xl mx-auto">
          Full‑Stack Developer • QA Leader • Creative Technologist
        </p>
      </motion.div>
    </section>
  )
}
