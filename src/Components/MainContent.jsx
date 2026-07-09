import React from 'react'
import Home from './Home'
import Education from './Edu'
import Experience from './Exp'
import Projects from './Projects'
import SkillsAndCerts from './SkillsAndCerts'
import Contact from './Contacts'
export default function MainContent() {
  return (
    <section id="content" className='overflow-x-hidden' >
      <Home></Home>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <SkillsAndCerts></SkillsAndCerts>
      <Contact></Contact>
    </section>
  )
}
