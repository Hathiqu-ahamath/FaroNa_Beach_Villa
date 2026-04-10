import { motion } from 'framer-motion'

export default function About() {
  const facilities = [
    { id: "breakfast", name: "Breakfast", icon: "restaurant" },
    { id: "ac", name: "Air conditioning", icon: "ac_unit" },
    { id: "shuttle", name: "Airport shuttle", icon: "flight" },
    { id: "wifi", name: "Free WiFi", icon: "wifi" },
    { id: "family", name: "Family rooms", icon: "group" },
    { id: "parking", name: "Free parking", icon: "local_parking" },
  ]

  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-24 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-headline text-2xl md:text-5xl text-primary mb-4 md:mb-6">Welcome to FaroNa</h2>
            <p className="font-body text-secondary text-sm md:text-base leading-relaxed mb-4">
              Nestled along pristine coastline, Farona Beach Villa offers an unparalleled escape where luxury meets nature. Our meticulously designed villas provide the perfect sanctuary for those seeking tranquility and elegance.
            </p>
            <p className="font-body text-secondary text-sm md:text-base leading-relaxed mb-6">
              With breathtaking ocean views, world-class amenities, and personalized service, we create unforgettable experiences for every guest. Whether you're looking for a romantic getaway or a family vacation, Farona is your home away from home.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">5★</div>
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Rated Excellent</p>
                <p className="text-xs text-secondary">by 100+ happy guests</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <img 
                  src="/Images/Night view 2.png"
                  alt="Pool"
                  className="w-full h-32 md:h-48 object-cover rounded-lg"
                />
                <img 
                  src="/Images/462797465.jpg"
                  alt="Breakfast"
                  className="w-full h-32 md:h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2 pt-4 md:pt-8">
                <img 
                  src="/Images/Night view 1.png"
                  alt="Night view"
                  className="w-full h-32 md:h-48 object-cover rounded-lg"
                />
                <img 
                  src="/Images/462803996.jpg"
                  alt="Yoga"
                  className="w-full h-32 md:h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-headline text-xl md:text-2xl text-primary mb-6 md:mb-8 text-center"
          >
            Property Amenities
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 md:gap-4">
            {facilities.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-container-lowest p-3 md:p-4 rounded-xl flex flex-col items-center gap-2 text-center hover:shadow-md transition-all duration-300"
              >
                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                <span className="text-xs md:text-sm text-secondary">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
