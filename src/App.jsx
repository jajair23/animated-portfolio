import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
    // Default to dark if nothing is saved
    return true
  })


  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white scroll-smooth">
      <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <main className="scroll-pt-16">
        <Home />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
