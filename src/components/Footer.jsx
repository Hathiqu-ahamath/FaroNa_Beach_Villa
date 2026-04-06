export default function Footer({ setCurrentPage }) {
  const scrollToSection = (sectionId) => {
    setCurrentPage('home')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const WhatsAppUrl = "https://wa.me/94771234567?text=Hi%20Farona%20Beach%20Villa,%20I'm%20interested%20in%20booking!"

  return (
    <footer id="location" className="bg-surface-container-low w-full py-8 md:py-12 px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 max-w-7xl mx-auto">
        <div className="space-y-4 md:space-y-6">
          <div className="font-headline text-lg md:text-xl text-primary">FARONA</div>
          <p className="font-body text-xs md:text-sm text-secondary max-w-xs leading-relaxed">
            A collection of luxury villas designed for the modern traveler seeking quietude and architectural beauty on the water's edge.
          </p>
          <a 
            href="https://www.google.com/maps/search/294+E+1+Razeek+Fareed+Road+Addalaichanai+Ampara+Sri+Lanka" 
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
          <a href="https://www.google.com/maps/search/294+E+1+Razeek+Fareed+Road+Addalaichanai+Ampara+Sri+Lanka" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Location</a>
          <button className="text-secondary hover:text-primary transition-all text-xs md:text-sm text-left">Contact</button>
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <span className="font-bold text-primary text-sm mb-1 md:mb-2">Legal</span>
          <a className="text-secondary hover:text-primary transition-all text-xs md:text-sm" href="#">Privacy Policy</a>
          <a className="text-secondary hover:text-primary transition-all text-xs md:text-sm" href="#">Terms of Service</a>
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="font-bold text-primary text-sm mb-1 md:mb-2">Contact Us</span>
          <div className="flex bg-surface-container-lowest rounded-full p-1 shadow-sm overflow-hidden">
            <input className="bg-transparent border-none focus:ring-0 px-3 md:px-4 text-xs md:text-sm w-32 md:w-48" placeholder="Your message" type="text"/>
            <a href={WhatsAppUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-1.5 md:p-2 rounded-full material-symbols-outlined text-sm">arrow_forward</a>
          </div>
          <div className="flex gap-3 md:gap-4 mt-1 md:mt-2">
            <span className="material-symbols-outlined text-primary cursor-pointer text-sm md:text-base">social_leaderboard</span>
            <span className="material-symbols-outlined text-primary cursor-pointer text-sm md:text-base">photo_camera</span>
            <a href={WhatsAppUrl} target="_blank" rel="noopener noreferrer" className="material-symbols-outlined text-primary cursor-pointer text-sm md:text-base">alternate_email</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 md:mt-16 pt-6 md:pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        <span className="font-body text-xs md:text-sm text-secondary">© 2024 FARONA Beach Villa. All rights reserved.</span>
        <div className="flex gap-4 md:gap-6">
          <span className="font-body text-[10px] md:text-xs text-secondary uppercase tracking-widest">Designed for Stillness</span>
        </div>
      </div>
    </footer>
  )
}