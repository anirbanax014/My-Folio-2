'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogSection } from '@/components/sections/BlogSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about" data-aos="fade-up">
        <AboutSection />
      </section>
      
      <section id="skills" data-aos="fade-up">
        <SkillsSection />
      </section>
      
      <section id="projects" data-aos="fade-up">
        <ProjectsSection />
      </section>
      
      <section id="experience" data-aos="fade-up">
        <ExperienceSection />
      </section>
      
      <section id="certifications" data-aos="fade-up">
        <CertificationsSection />
      </section>
      
      <section id="testimonials" data-aos="fade-up">
        <TestimonialsSection />
      </section>
      
      <section id="blog" data-aos="fade-up">
        <BlogSection />
      </section>
      
      <section id="contact" data-aos="fade-up">
        <ContactSection />
      </section>
      
      <Footer />
    </div>
  )
}