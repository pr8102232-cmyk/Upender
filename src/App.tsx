import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Skills from './pages/Skills'
import Archive from './pages/Archive'
import Projects from './pages/Projects'
import './globals.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function FirstStepPortfolio1() {
  useEffect(() => {
    // Add isolation class to body when this portfolio is active
    document.body.classList.add('funky-portfolio-active')
    
    return () => {
      // Cleanup: remove class when component unmounts
      document.body.classList.remove('funky-portfolio-active')
    }
  }, [])

  return (
    <div className="funky-portfolio-wrapper" style={{ isolation: 'isolate' }}>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="skills" element={<Skills />} />
          <Route path="archive" element={<Archive />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default FirstStepPortfolio1

