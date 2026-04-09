import { useState, useEffect } from 'react'
import { getWhatsAppUrl, messages } from '../utils/whatsapp'

export default function Navbar({ currentPage = 'home', setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const bookingWhatsappUrl = getWhatsAppUrl(messages.booking)

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home')
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home', page: 'home', section: 'hero' },
    { label: 'About', page: 'home', section: 'about' },
    { label: 'Rooms', page: 'home', section: 'accommodations' },
    { label: 'Gallery', page: 'home', section: 'gallery' },
    { label: 'Contact', page: 'home', section: 'contact' },
  ]

  const handleNavClick = (link) => {
    if (link.page === 'gallery') {
      setCurrentPage('gallery')
      setMobileMenuOpen(false)
    } else {
      scrollToSection(link.section)
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-md">
      <nav className="flex justify-between items-center px-4 py-3 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <button 
            className="md:hidden p-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined text-primary text-2xl">menu</span>
          </button>
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-headline text-lg md:text-2xl font-bold text-primary tracking-wider"
          >
            FaroNa
          </button>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="font-body tracking-tight font-medium text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] md:hidden mobile-menu-overlay transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={() => setMobileMenuOpen(false)}
        />
        {/* Menu */}
        <div className={`mobile-menu-slide p-6 ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="flex justify-between items-center mb-8">
            <span className="font-headline text-xl font-bold text-primary">FaroNa</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2"
            >
              <span className="material-symbols-outlined text-primary">close</span>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-left py-2 text-lg font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}