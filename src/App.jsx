import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = e.target.getAttribute('href').substring(1)
        const element = document.getElementById(id)
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleScroll)
    return () => document.removeEventListener('click', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App