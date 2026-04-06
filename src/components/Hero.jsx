import { getWhatsAppUrl, messages } from '../utils/whatsapp'
import { motion } from 'framer-motion'

export default function Hero({ setCurrentPage }) {
  const scrollToAbout = () => {
    setCurrentPage('home')
    setTimeout(() => {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  
  return (
    <section id="hero" className="relative h-screen w-full flex items-center md:justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Farona Beach Villa hero image" 
          className="w-full h-full object-cover blur-[2px]"
          src="/Images/hero.png" 
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>
      <div className="relative z-10 px-4 sm:px-8 md:px-24 max-w-4xl pt-16 md:pt-20 w-full text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-headline text-3xl md:text-6xl lg:text-7xl text-primary leading-tight font-bold mb-3 md:mb-6 md:whitespace-nowrap"
        >
          Farona Beach Villa
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body text-sm md:text-xl text-gray-900 max-w-lg mb-4 md:mb-10 leading-relaxed"
        >
          Escape to the sound of waves and golden sunsets. Experience comfort, calm, and unforgettable seaside moments.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex gap-4 justify-start"
        >
          <button 
            onClick={scrollToAbout}
            className="bg-primary text-white text-sm md:text-base px-6 md:px-10 py-2.5 md:py-4 rounded-full font-bold shadow-xl hover:scale-95 transition-transform"
          >
            Explore Villas
          </button>
        </motion.div>
      </div>
    </section>
  )
}