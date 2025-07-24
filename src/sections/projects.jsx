import { motion } from 'framer-motion'

const projects = [
  {
    title: "Aware Super - 3D Leasing Experience",
    desc: "Immersive 3D property web portal.",
    link: "https://stack.inspacexr.com/projects/aware-super/207-pacific-highway"
  },
  {
    title: "Dexus Leasing Portfolio",
    desc: "Interactive map and dashboard.",
    link: "https://map.inspacexr.com/en/dexus/dexus-leasing-portfolio"
  },
  {
    title: "Finance Strategists",
    desc: "SEO-first financial content site.",
    link: "https://www.financestrategists.com/"
  },
  {
    title: "Carbon Collective",
    desc: "Frontend & optimization support.",
    link: "https://www.carboncollective.co/"
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              className="block border border-gray-300 dark:border-gray-700 p-6 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
