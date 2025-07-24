import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          I'm an experienced Software Developer adept at building modern web
          applications across all stages of development. My work spans
          frontend/backend coding, SEO, QA leadership, and 3D web experience
          integrations.
          <br />
          <br />
          With a background in music, theology, and psychology, I bring
          creativity and empathy to everything I build.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-5 py-2 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900"
        >
          📄 Download Resume
        </a>
      </motion.div>
    </section>
  )
}
