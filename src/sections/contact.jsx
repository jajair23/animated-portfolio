export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-24 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Contact Me</h2>
        <ul className="space-y-2">
          <li><strong>Email:</strong> jajair23@gmail.com</li>
          <li><strong>Phone:</strong> +63 939 461 3244</li>
          <li><strong>GitHub:</strong> <a href="https://github.com/jajair23" target="_blank" className="underline text-blue-600 dark:text-blue-400">github.com/jajair23</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jair-orduña" target="_blank" className="underline text-blue-600 dark:text-blue-400">linkedin.com/in/jair-orduña</a></li>
        </ul>
      </div>
    </section>
  )
}
