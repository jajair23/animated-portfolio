import { motion } from 'framer-motion'

const projects = [
  { title: "Project 1", desc: "Cool app", link: "#" },
  { title: "Project 2", desc: "Another cool app", link: "#" },
]

export default function Projects() {
  return (
    <div className="p-8 pt-20 min-h-screen">
      <h2 className="text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 border border-gray-600 rounded-xl hover:bg-gray-800"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
