import { ReactNode, useEffect } from 'react'
import ScanLine from './ScanLine'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Apply funky portfolio styles to body when this layout is mounted
    const root = document.documentElement
    root.style.setProperty('--lime-green', '#cef565')
    root.style.setProperty('--purple', '#6600CC')
    root.style.setProperty('--dark-purple', '#6600CC')
    root.style.setProperty('--text-color', '#6600CC')
    root.style.setProperty('--bg-color', '#cef565')
    
    document.body.classList.add('funky-portfolio')
    
    return () => {
      // Cleanup: restore default styles when unmounting
      root.style.removeProperty('--lime-green')
      root.style.removeProperty('--purple')
      root.style.removeProperty('--dark-purple')
      root.style.removeProperty('--text-color')
      root.style.removeProperty('--bg-color')
      document.body.classList.remove('funky-portfolio')
    }
  }, [])

  return (
    <>
      <ScanLine />
      <div className="min-h-screen frame-border m-2 md:m-4 p-4 md:p-6 main-content flex flex-col" style={{ color: '#6600CC' }}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

