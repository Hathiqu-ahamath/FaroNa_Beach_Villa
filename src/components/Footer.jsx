import { useState } from 'react'

export default function Footer({ setCurrentPage }) {
  const [message, setMessage] = useState('')

  const scrollToSection = (sectionId) => {
    setCurrentPage('home')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleSendMessage = () => {
    if (!message.trim()) return
    const WhatsAppUrl = `https://wa.me/94771234567?text=${encodeURIComponent(message)}`
    window.open(WhatsAppUrl, '_blank')
    setMessage('')
  }

  return (
    <footer id="location" className="bg-surface-container-low w-full py-8 md:py-12 px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 max-w-7xl mx-auto">
        <div className="space-y-4 md:space-y-6">
          <div className="font-headline text-lg md:text-xl text-primary">FaroNa</div>
          <p className="font-body text-xs md:text-sm text-secondary max-w-xs leading-relaxed">
            A collection of luxury villas designed for the modern traveler seeking quietude and architectural beauty on the water's edge.
          </p>
          <a 
            href="https://www.google.com/maps/place/FaroNa+Beach+Villa/@7.2549838,81.8638311,9z/data=!4m13!1m2!2m1!1s294+E+1+Razeek+Fareed+Road+Addalaichanai+Ampara+Sri+Lanka!3m9!1s0x3ae51333cc7baec3:0x6c79f718d7a82243!5m2!4m1!1i2!8m2!3d7.2549842!4d81.8638995!15sCjkyOTQgRSAxIFJhemVlayBGYXJlZWQgUm9hZCBBZGRhbGFpY2hhbmFpIEFtcGFyYSBTcmkgTGFua2FaOyI5Mjk0IGUgMSByYXplZWsgZmFyZWVkIHJvYWQgYWRkYWxhaWNoYW5haSBhbXBhcmEgc3JpIGxhbmthkgEFdmlsbGGaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUndhRFJNUTFwQkVBReABAPoBBQiUARAT!16s%2Fg%2F11khr0k8k7?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-body text-xs md:text-sm text-secondary hover:text-primary max-w-xs block"
          >
            294 E/1, Razeek Fareed Road<br/>
            Addalaichanai-06, Ampara<br/>
            Sri Lanka
          </a>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-bold text-primary text-sm mb-1 md:mb-2">Explore</span>
          <button onClick={() => scrollToSection('accommodations')} className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Rooms</button>
          <button onClick={() => setCurrentPage('gallery')} className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Gallery</button>
          <a href="https://www.google.com/maps/place/FaroNa+Beach+Villa/@7.2549838,81.8638311,9z/data=!4m13!1m2!2m1!1s294+E+1+Razeek+Fareed+Road+Addalaichanai+Ampara+Sri+Lanka!3m9!1s0x3ae51333cc7baec3:0x6c79f718d7a82243!5m2!4m1!1i2!8m2!3d7.2549842!4d81.8638995!15sCjkyOTQgRSAxIFJhemVlayBGYXJlZWQgUm9hZCBBZGRhbGFpY2hhbmFpIEFtcGFyYSBTcmkgTGFua2FaOyI5Mjk0IGUgMSByYXplZWsgZmFyZWVkIHJvYWQgYWRkYWxhaWNoYW5haSBhbXBhcmEgc3JpIGxhbmthkgEFdmlsbGGaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUndhRFJNUTFwQkVBReABAPoBBQiUARAT!16s%2Fg%2F11khr0k8k7?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Location</a>
          <button className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Contact</button>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-bold text-primary text-sm mb-1 md:mb-2">Legal</span>
          <button onClick={() => setCurrentPage('privacy-policy')} className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Privacy Policy</button>
          <button onClick={() => setCurrentPage('terms-of-service')} className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Terms of Service</button>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="font-bold text-primary text-sm mb-1 md:mb-2">Contact Us</span>
          <div className="flex bg-surface-container-lowest rounded-full p-1 shadow-sm overflow-hidden">
            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-transparent border-none focus:ring-0 px-3 md:px-4 text-xs md:text-sm w-32 md:w-48" 
              placeholder="Your message" 
              type="text"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className={`bg-primary text-white p-1.5 md:p-2 rounded-full material-symbols-outlined text-sm ${!message.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >arrow_forward</button>
          </div>
          <div className="flex gap-3 md:gap-4 mt-1 md:mt-2">
            <span className="material-symbols-outlined text-primary cursor-pointer text-sm md:text-base">social_leaderboard</span>
            <span className="material-symbols-outlined text-primary cursor-pointer text-sm md:text-base">photo_camera</span>
            <button onClick={handleSendMessage} disabled={!message.trim()} className={`material-symbols-outlined text-primary cursor-pointer text-sm md:text-base ${!message.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}>alternate_email</button>
          </div>
        </div>
      </div>
    </footer>
  )
}