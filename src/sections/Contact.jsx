import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'

export default function Contact() {
  const socialLinks = [
    {
      href: 'https://github.com/jajair23',
      src: github,
      alt: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/jairorduna/',
      src: linkedin,
      alt: 'LinkedIn',
    },
    {
      href: 'mailto:jairorduna.tech@gmail.com',
      src: email,
      alt: 'Email',
    },
  ]

  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <p className="mb-6">Let’s connect through any of the platforms below:</p>
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.src}
              alt={link.alt}
              className="w-10 h-10 hover:scale-110 transition-transform duration-200 dark:invert"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
