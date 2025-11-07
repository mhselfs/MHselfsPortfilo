import React from 'react'
import ThemeToggle from '@/Component/ThemeToggle'
import StarBackground from '@/Component/StarBackground'
import NavBar from '../Component/NavBar'
import HeroSection from '../Component/HeroSection'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <StarBackground />
      <NavBar />

      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default Home