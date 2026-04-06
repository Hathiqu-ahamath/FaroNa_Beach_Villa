import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Accommodations from './components/Accommodations'
import GalleryPreview from './components/GalleryPreview'
import Gallery from './components/Gallery'
import RoomDetails from './components/RoomDetails'
import CTA from './components/CTA'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRoom, setSelectedRoom] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About />
            <Accommodations setCurrentPage={setCurrentPage} setSelectedRoom={setSelectedRoom} />
            <GalleryPreview setCurrentPage={setCurrentPage} />
            <CTA />
            <Contact />
          </>
        )
      case 'gallery':
        return <Gallery setCurrentPage={setCurrentPage} />
      case 'room-details':
        return <RoomDetails selectedRoom={selectedRoom} setCurrentPage={setCurrentPage} setSelectedRoom={setSelectedRoom} />
      case 'privacy-policy':
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />
      case 'terms-of-service':
        return <TermsOfService setCurrentPage={setCurrentPage} />
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About />
            <Accommodations setCurrentPage={setCurrentPage} setSelectedRoom={setSelectedRoom} />
            <GalleryPreview setCurrentPage={setCurrentPage} />
            <CTA />
            <Contact />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App