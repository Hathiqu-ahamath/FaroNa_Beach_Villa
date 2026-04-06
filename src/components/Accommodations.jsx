
import { getWhatsAppUrl, messages } from '../utils/whatsapp'
import { motion } from 'framer-motion'

const rooms = [
  {
    id: "sea-view",
    title: "Villa with Sea View",
    image: "/Images/Villa with Sea View.png",
    subtitle: "Entire villa",
    size: "79 m²",
    beds: "2 Queen beds",
    view: "Sea View",
    price: "LKR 8,000",
    description: "Experience the ultimate coastal retreat where the horizon meets your living space. Our signature villa offers an immersive maritime experience with curated artisanal furnishings.",
    images: [
      "/Images/Villa with Sea View.png",
      "/Images/Villa with Garden View.png"
    ],
    facilities: [
      { id: "balcony", name: "Balcony", icon: "balcony" },
      { id: "terrace", name: "Terrace", icon: "deck" },
      { id: "ac", name: "Air conditioning", icon: "ac_unit" },
      { id: "kitchen", name: "Kitchen", icon: "kitchen" },
      { id: "safe", name: "Safe", icon: "lock" },
      { id: "desk", name: "Desk", icon: "desk" },
      { id: "private-entrance", name: "Private entrance", icon: "door_front" },
      { id: "tv", name: "TV", icon: "tv" },
      { id: "refrigerator", name: "Refrigerator", icon: "kitchen" },
      { id: "ironing", name: "Ironing facilities", icon: "iron" },
      { id: "tea-coffee", name: "Tea/Coffee maker", icon: "coffee" },
      { id: "iron", name: "Iron", icon: "iron" },
      { id: "flatscreen-tv", name: "Flat-screen TV", icon: "tv" },
      { id: "kitchenette", name: "Kitchenette", icon: "kitchen" },
      { id: "fan", name: "Fan", icon: "air" },
      { id: "kettle", name: "Electric kettle", icon: "electric_bolt" },
      { id: "outdoor-furniture", name: "Outdoor furniture", icon: "chair" },
      { id: "outdoor-dining", name: "Outdoor dining area", icon: "table_restaurant" },
      { id: "wardrobe", name: "Wardrobe", icon: "door_sliding" },
      { id: "dining-area", name: "Dining area", icon: "dining" },
      { id: "dining-table", name: "Dining table", icon: "table_restaurant" },
      { id: "clothes-rack", name: "Clothes rack", icon: "checkroom" },
      { id: "sofa-bed", name: "Sofa bed", icon: "weekend" }
    ],
    message: messages.seaViewSuite
  },
  {
    id: "garden-view",
    title: "Villa with Garden View",
    image: "/Images/Villa with Garden View.png",
    subtitle: "Entire villa",
    size: "79 m²",
    beds: "1 Sofa bed & 1 Queen bed",
    view: "Garden View",
    price: "LKR 8,000",
    description: "Nestled amidst lush tropical gardens, this villa offers a serene retreat surrounded by nature. Wake up to birdsong and enjoy the peaceful atmosphere of our garden sanctuary.",
    images: [
      "/Images/Villa with Garden View.png",
      "/Images/Villa with Sea View.png"
    ],
    facilities: [
      { id: "balcony", name: "Balcony", icon: "balcony" },
      { id: "terrace", name: "Terrace", icon: "deck" },
      { id: "ac", name: "Air conditioning", icon: "ac_unit" },
      { id: "kitchen", name: "Kitchen", icon: "kitchen" },
      { id: "safe", name: "Safe", icon: "lock" },
      { id: "desk", name: "Desk", icon: "desk" },
      { id: "private-entrance", name: "Private entrance", icon: "door_front" },
      { id: "tv", name: "TV", icon: "tv" },
      { id: "refrigerator", name: "Refrigerator", icon: "kitchen" },
      { id: "ironing", name: "Ironing facilities", icon: "iron" },
      { id: "tea-coffee", name: "Tea/Coffee maker", icon: "coffee" },
      { id: "iron", name: "Iron", icon: "iron" },
      { id: "flatscreen-tv", name: "Flat-screen TV", icon: "tv" },
      { id: "kitchenette", name: "Kitchenette", icon: "kitchen" },
      { id: "fan", name: "Fan", icon: "air" },
      { id: "kettle", name: "Electric kettle", icon: "electric_bolt" },
      { id: "outdoor-furniture", name: "Outdoor furniture", icon: "chair" },
      { id: "outdoor-dining", name: "Outdoor dining area", icon: "table_restaurant" },
      { id: "wardrobe", name: "Wardrobe", icon: "door_sliding" },
      { id: "dining-area", name: "Dining area", icon: "dining" },
      { id: "dining-table", name: "Dining table", icon: "table_restaurant" },
      { id: "clothes-rack", name: "Clothes rack", icon: "checkroom" },
      { id: "sofa-bed", name: "Sofa bed", icon: "weekend" }
    ],
    message: messages.gardenView
  }
]

export default function Accommodations({ setCurrentPage, setSelectedRoom }) {
  return (
    <section id="accommodations" className="py-10 md:py-24 px-6 md:px-24 bg-surface">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 max-w-7xl mx-auto gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl md:text-5xl text-primary mb-2 md:mb-4">Our Accommodations</h2>
          <p className="font-body text-secondary max-w-xl text-sm md:text-base">Each suite is a curated experience of light, air, and texture.</p>
        </motion.div>
        <button 
          onClick={() => setCurrentPage('room-details')}
          className="hidden md:flex items-center gap-2 text-primary font-bold group"
        >
          View All 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-full md:max-w-7xl mx-auto px-0 md:px-0">
        {rooms.map((room, index) => (
          <motion.div
            key={room.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group bg-surface-container-lowest rounded-lg md:rounded-xl overflow-hidden hover:scale-[1.02] transition-all shadow-sm"
          >
            <div className="h-48 md:h-80 overflow-hidden">
              <img 
                alt={room.title} 
                className="w-full h-full object-contain group-hover:scale-105 md:hover:scale-110 transition-transform duration-700 md:duration-1000" 
                src={room.image} 
              />
            </div>
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-headline text-lg md:text-2xl text-primary">{room.title}</h3>
                <span className="text-xs text-secondary">{room.subtitle}</span>
              </div>
              <p className="text-xs text-secondary mb-3">{room.size} • {room.beds}</p>
              <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-secondary font-medium mb-4 md:mb-6">
                <span className="flex items-center gap-1 md:gap-2">
                  <span className="material-symbols-outlined text-xs md:text-sm">{room.view === 'Sea View' ? 'waves' : 'park'}</span> {room.view}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => {
                    setSelectedRoom(room)
                    setCurrentPage('room-details')
                  }}
                  className="text-secondary text-xs md:text-sm font-bold border border-secondary/30 px-4 md:px-4 py-2 md:py-2.5 rounded-full hover:bg-secondary/5 transition-all"
                >
                  More Details
                </button>
                <a 
                  href={getWhatsAppUrl(room.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-primary to-primary-container text-white px-5 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-semibold hover:scale-95 transition-transform"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}