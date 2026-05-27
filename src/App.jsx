import { Routes, Route } from 'react-router-dom'

import './App.css'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Experience from './Exp'
import Projects from './Projects'
import Contact from './contact'
import Messages from './Messages'
import Layout from './Layout'

function Home() {
  return (
    <>

      <Layout>  {/*syntax to include component in other file*/}

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Contact />

      </Layout>
      
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  )
}

export default App
