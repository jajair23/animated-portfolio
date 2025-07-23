import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="p-4 flex justify-center space-x-6 bg-black text-white fixed top-0 w-full z-50">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={\`hover:underline \${pathname === link.path ? 'underline text-blue-400' : ''}\`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
