import { motion } from 'framer-motion'

const images = [
  {
    alt: "Night view",
    src: "/Images/Night view 1.png",
    cols: "col-span-1 md:col-span-2 md:row-span-2"
  },
  {
    alt: "Villa",
    src: "/Images/Villa with Sea View.png",
    cols: "col-span-1"
  },
  {
    alt: "Garden",
    src: "/Images/Villa with Garden View.png",
    cols: "col-span-1"
  },
  {
    alt: "Interior",
    src: "/Images/462798664.jpg",
    cols: "col-span-1"
  },
  {
    alt: "Beach",
    src: "/Images/462804046.jpg",
    cols: "col-span-1"
  }
]

export default function GalleryPreview({ setCurrentPage }) {
  return (
    <section id="gallery" className="py-12 md:py-12 px-4 md:px-24 bg-surface">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 max-w-7xl mx-auto gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl md:text-5xl text-primary mb-2 md:mb-4">Gallery Preview</h2>
          <p className="font-body text-secondary max-w-xl text-sm md:text-base">A visual journey through the textures and moments that define Farona.</p>
        </motion.div>
        <button 
          onClick={() => setCurrentPage('gallery')}
          className="flex items-center gap-2 text-primary font-bold group text-sm md:text-base"
        >
          View Full Gallery 
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 md:gap-4 h-[500px] md:h-[500px] max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`${img.cols} rounded-lg md:rounded-xl overflow-hidden shadow-sm`}
          >
            <img 
              alt={img.alt} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" 
              src={img.src} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}