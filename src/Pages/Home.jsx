import React from 'react'
import ThemeToggle from '@/Component/ThemeToggle'
import StarBackground from '@/Component/StarBackground'
import NavBar from '../Component/NavBar'
import HeroSection from '../Component/HeroSection'
import AboutMe from '../Component/AboutMe'
import Skills from '../Component/Skills'
import Projects from '../Component/Projects'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      
      <StarBackground />
      <NavBar />

      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}

export default Home