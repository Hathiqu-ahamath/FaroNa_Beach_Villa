import './App.css'
import { useState } from 'react'
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

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRoom, setSelectedRoom] = useState(null)

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
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
      default:
        return (
          <>
            <Hero />
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