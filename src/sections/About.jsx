export default function About() {
  return (
    <section id="about" className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-3xl mx-auto text-lg mb-6">
        I'm Jair, a passionate software developer with experience in 3D web apps, front-end frameworks,
        API integrations, and QA automation. I bring creativity and precision to every build — especially
        in modern React and Vite environments.
      </p>

      <a
        href="/resume_jair_orduna.pdf"
        download
        className="inline-block px-6 py-3 border border-black dark:border-white rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
      >
        Download Resume
      </a>
    </section>
  )
}
