import { useState, useEffect } from 'react'
import { getWhatsAppUrl, messages } from '../utils/whatsapp'

const defaultRoom = {
  name: "Villa with Sea View",
  subtitle: "Entire villa",
  description: "Experience the ultimate coastal retreat where the horizon meets your living space. Our signature villa offers an immersive maritime experience with curated artisanal furnishings.",
  size: "79 m²",
  beds: "2 Queen beds",
  view: "Sea View",
  price: "LKR 135,000",
  images: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB2zWeFevvF5zNDYbyi7GzX7PYuujfGXs3hkUEEymKZsfJI-VdHsMNbCGq_4n-dBBZcDQuzbIkL8r2x5r5TnRj2fhb4lQx8wMTTnABR-nnDzscRWYaMkU7ouTXrs67Y1ePadT6r9JTDzDW6-3K89sq-bqf53pyHPZiI9mu4Y3YgB9esC3wMc1rmXtasrAmtIwVFAyXkiO_lcULha6MACIevod-0-YGGBs08ykmL5paOJKTl-ewgAwZDajQHh4k2DGRTZemZVL4ZNJE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkrq9MY7BMvq4DiODJ23pCLN21t4Z_8rREBrQklURA8TO8IIRNTNxbLNHtXechHilfNHdieuQsADxSVyI-ZUliytDHSGBTMpPQ3XuIwePbXWeQ8wFfKxwX8ZOZ-sxRtZn2mv4wJLlgcN_KXl04jBWXFSdU98TUW5Et6Y0UfW-liHtPgRpeHiXdoD7RP5nRnccF2_VPnj0Lbmj-RrMcQsuz0mI4L7zrq3xdpQfwQZjvFmiG3L5ISUXuJ9tRwcLfdmY_-7hLj7U6yiQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCW8Ua-tlMdLcnOZ2llCcEryqSeY7BpiG607xdhoajr-CuoLsEa5XJHdPi_foeILNXITk-6CVExDbMsrn0OQxLUe2fQ3tdYFrWIn6ZiRpYU_j66YxcARiwAeXLgmjrC7RqZSZMSkWdMw6Dk6aFJ5Mu2-CdBUqdS3NafLm3QBFk14tXlTrYokJlYeqOOTaisnM-UnkQj3XsqNAAGT-Ek6Rd8irzL1Cc0JMgWFTCZOTGwzTnLe8HjwYnj3tzOsi1jEm5Lcp3ffeqw8ZI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4MIERYMTy_8ZpqSPzh4fi6L5TiXX8Oo837Hm6m_6AiD7dW4ssDnMbaxZkXP0Th_4TVRUvOoV5cO7jUw2EZivr_CU5Zrps_wMPcucfnq3yPMpt4r9fZ60JMjHMzisWfYQDXk_oyZzb3YE5GiJ20J-NQcl-0WPfO1pl-c4o7BlGJBGPSEvi8sKyJIyTPhu1Gse-E6JuYXPqte1G6X_nU-hYaipAyZU2rMChs1HzoHQyl-6XOnF645f6LcdO-xqRR-EJvqLWNO9X7lo"
  ],
  facilities: [
    { id: "breakfast", name: "Breakfast", icon: "restaurant" },
    { id: "ac", name: "Air conditioning", icon: "ac_unit" },
    { id: "shuttle", name: "Airport shuttle", icon: "flight" },
    { id: "wifi", name: "Free WiFi", icon: "wifi" },
    { id: "beachfront", name: "Beachfront", icon: "beach_access" },
    { id: "family", name: "Family rooms", icon: "group" },
    { id: "parking", name: "Free parking", icon: "local_parking" },
    { id: "balcony", name: "Balcony", icon: "balcony" },
    { id: "terrace", name: "Terrace", icon: "deck" },
    { id: "kitchen", name: "Kitchen", icon: "kitchen" },
    { id: "safe", name: "Safe", icon: "lock" },
    { id: "desk", name: "Desk", icon: "desk" },
    { id: "private-entrance", name: "Private entrance", icon: "door_front" },
    { id: "tv", name: "TV", icon: "tv" },
    { id: "refrigerator", name: "Refrigerator", icon: "kitchen" },
    { id: "tea-coffee", name: "Tea/Coffee maker", icon: "coffee" },
    { id: "flatscreen-tv", name: "Flat-screen TV", icon: "tv" },
    { id: "kitchenette", name: "Kitchenette", icon: "kitchen" },
    { id: "kettle", name: "Electric kettle", icon: "electric_bolt" },
    { id: "outdoor-furniture", name: "Outdoor furniture", icon: "chair" },
    { id: "outdoor-dining", name: "Outdoor dining area", icon: "table_restaurant" },
    { id: "wardrobe", name: "Wardrobe", icon: "door_sliding" },
    { id: "dining-area", name: "Dining area", icon: "dining" },
    { id: "clothes-rack", name: "Clothes rack", icon: "checkroom" },
    { id: "sofa-bed", name: "Sofa bed", icon: "weekend" }
  ]
}

export default function RoomDetails({ selectedRoom, setCurrentPage, setSelectedRoom }) {
  const [activeImage, setActiveImage] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(true)
  
  const roomData = selectedRoom || defaultRoom
  const bookingMessage = selectedRoom?.id === 'garden-view' ? messages.gardenSanctuary : messages.seaViewSuite
  const bookingUrl = getWhatsAppUrl(bookingMessage)

  const handleImageChange = (index) => {
    setImageLoaded(false)
    setActiveImage(index)
    setTimeout(() => setImageLoaded(true), 50)
  }

  return (
    <div className="pt-20 pb-32">
      {/* Back Button */}
      <section className="px-4 md:px-6 mb-4">
        <button 
          onClick={() => {
            setSelectedRoom(null)
            setCurrentPage('home')
          }}
          className="flex items-center gap-2 text-primary hover:text-primary/70 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-sm font-medium">Back to Rooms</span>
        </button>
      </section>

      {/* Image Gallery */}
      <section className="px-4 md:px-6 mb-8 md:mb-12">
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
          <div className={`w-full h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img 
              className="w-full h-full object-cover" 
              alt={roomData.name}
              src={roomData.images[activeImage]}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Image Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {roomData.images.map((_, i) => (
              <button 
                key={i}
                onClick={() => handleImageChange(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeImage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`}
              />
            ))}
          </div>

          {/* View Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">visibility</span>
            <span className="text-xs font-medium text-primary">{roomData.view}</span>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mt-3 md:mt-4 h-20 md:h-28">
          {roomData.images.map((img, i) => (
            <button 
              key={i}
              onClick={() => handleImageChange(i)}
              className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${i === activeImage ? 'ring-4 ring-primary ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
            >
              <img className="w-full h-full object-cover" alt="" src={img}/>
            </button>
          ))}
        </div>
      </section>

      {/* Room Header */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full font-medium">{roomData.subtitle}</span>
              <span className="text-xs text-secondary">{roomData.size}</span>
            </div>
            <h2 className="font-headline text-3xl md:text-5xl text-primary font-bold tracking-tight mb-3">{roomData.name}</h2>
            <p className="text-base md:text-lg text-secondary mb-6">{roomData.beds}</p>
            
            {/* Stats Cards */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="bg-surface-container-lowest px-4 py-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">square_foot</span>
                </div>
                <div>
                  <span className="text-[10px] text-secondary block uppercase tracking-wider">Space</span>
                  <span className="font-headline text-lg text-primary">{roomData.size}</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest px-4 py-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">bed</span>
                </div>
                <div>
                  <span className="text-[10px] text-secondary block uppercase tracking-wider">Bedding</span>
                  <span className="font-headline text-lg text-primary">2 Queen</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest px-4 py-3 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">waves</span>
                </div>
                <div>
                  <span className="text-[10px] text-secondary block uppercase tracking-wider">View</span>
                  <span className="font-headline text-lg text-primary">Sea View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="w-full lg:w-72 bg-gradient-to-br from-primary to-primary-container p-6 md:p-8 rounded-2xl shadow-xl">
            <span className="text-white/70 text-xs uppercase tracking-widest block mb-1">From</span>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="font-headline text-4xl text-white">{roomData.price}</span>
            </div>
            <p className="text-white/60 text-xs mb-5">Best price guaranteed</p>
            <a 
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-primary text-center py-3.5 rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
        <h3 className="font-headline text-xl md:text-2xl text-primary mb-4">About this villa</h3>
        <p className="text-secondary text-sm md:text-base leading-relaxed max-w-4xl">{roomData.description}</p>
      </section>

      {/* Facilities */}
      <section className="bg-surface-container-low py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-headline text-xl md:text-2xl text-primary mb-6 md:mb-8">Villa Amenities</h3>
          
          {/* All Facilities */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
            {roomData.facilities.map((item) => (
              <div key={item.name} className="bg-white p-3 md:p-4 rounded-xl flex items-center gap-2 hover:shadow-md transition-all duration-300 cursor-default">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                </div>
                <span className="text-xs md:text-sm text-secondary truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-3 md:hidden bg-white/95 backdrop-blur-lg z-50 border-t border-gray-100">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-xs text-secondary">From</span>
            <span className="font-headline text-xl text-primary">{roomData.price}</span>
          </div>
          <a 
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}