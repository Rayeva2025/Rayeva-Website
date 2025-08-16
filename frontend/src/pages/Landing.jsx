import React from 'react'
import HeroSection from '../components/landing/Hero'
import Impact from '../components/landing/Impact'
import Content from '../components/landing/Content'

const Landing = () => {
  return (
    <div className="relative overflow-hidden">
        <HeroSection />
        <Content />
        {/* <Impact /> */}
    </div>
  )
}

export default Landing