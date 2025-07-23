import { motion } from 'framer-motion'

const projects = [
  {
    title: "Aware Super - 3D Leasing Experience",
    desc: "Immersive web portal integrating 3D models of commercial properties for Aware Super in Sydney.",
    link: "https://stack.inspacexr.com/projects/aware-super/207-pacific-highway"
  },
  {
    title: "Dexus Leasing Portfolio",
    desc: "Interactive map and leasing dashboard for real estate management.",
    link: "https://map.inspacexr.com/en/dexus/dexus-leasing-portfolio"
  },
  {
    title: "Finance Strategists",
    desc: "Responsive SEO-optimized site for financial content and lead capture.",
    link: "https://www.financestrategists.com/"
  },
  {
    title: "Carbon Collective",
    desc: "Sustainable investing platform – frontend support and web optimization.",
    link: "https://www.carboncollective.co/"
  },
  {
    title: "KMBC Website",
    desc: "Web and SEO management for Kentucky Mountain Bible College.",
    link: "https://www.kmbc.edu/"
  }
]

export default function Projects() {
  return (
    <div className="p-6 md:p-12 pt-24 min-h-screen bg-black text-white">
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            key={i}
            target="_blank"
            whileHover={{ scale: 1.03 }}
            className="block p-6 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
