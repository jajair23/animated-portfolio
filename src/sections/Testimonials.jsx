import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Maddison Gabriel",
    role: "Head of Customer Success, Inspace",
    text: "Jair consistently delivered high-quality web solutions with a great mix of creativity and discipline. His technical skills and positive attitude made him a key contributor to our success."
  },
  {
    name: "Michael Villarama",
    role: "Team Lead, QA World",
    text: "As a QA Team Lead, Jair's attention to detail, strong communication, and leadership were instrumental in maintaining high performance across the team."
  }
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 md:px-12 py-24 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-8 text-blue-600 dark:text-blue-400">
          Testimonials
        </h2>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <p className="italic text-gray-700 dark:text-gray-300">"{t.text}"</p>
              <p className="mt-2 font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
