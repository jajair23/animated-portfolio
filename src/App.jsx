import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main>
        <Home />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
