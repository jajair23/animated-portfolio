import { Link as ScrollLink } from 'react-scroll'

export default function Header({ toggleTheme, darkMode }) {
  const navLinks = ['home', 'about', 'projects', 'testimonials', 'contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur border-b border-gray-300 dark:border-gray-700 flex justify-between items-center px-6 py-4">
      <div className="font-bold text-lg">Jair Orduña</div>
      <div className="flex items-center space-x-4">
        {navLinks.map(link => (
          <ScrollLink
            key={link}
            to={link}
            smooth={true}
            duration={500}
            className="capitalize cursor-pointer hover:underline text-sm sm:text-base"
          >
            {link}
          </ScrollLink>
        ))}
        <button onClick={toggleTheme} className="text-sm border px-2 py-1 rounded">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  )
}
