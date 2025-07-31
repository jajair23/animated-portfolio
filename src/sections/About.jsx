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
        href="/public/resume_jair_orduna.pdf"
        download
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        >
          Download Resume
      </a>
    </section>
  )
}
