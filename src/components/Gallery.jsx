import { useState } from 'react'

const galleryItems = [
  { src: "/Images/454257382.jpg", title: "Pool", height: "h-64" },
  { src: "/Images/454257396.jpg", title: "Living Room", height: "h-56" },
  { src: "/Images/454257449.jpg", title: "Bedroom", height: "h-72" },
  { src: "/Images/454257452.jpg", title: "Dining", height: "h-52" },
  { src: "/Images/454257462.jpg", title: "Garden", height: "h-60" },
  { src: "/Images/454257464.jpg", title: "Beach", height: "h-48" },
  { src: "/Images/454789437.jpg", title: "Interior", height: "h-64" },
  { src: "/Images/456976925.jpg", title: "Balcony", height: "h-56" },
  { src: "/Images/462796975.jpg", title: "Kitchen", height: "h-72" },
  { src: "/Images/462796995.jpg", title: "Pool", height: "h-48" },
  { src: "/Images/462797465.jpg", title: "Exterior", height: "h-64" },
  { src: "/Images/462798603.jpg", title: "Living Room", height: "h-56" },
  { src: "/Images/462798664.jpg", title: "Bedroom", height: "h-72" },
  { src: "/Images/462803996.jpg", title: "Dining", height: "h-52" },
  { src: "/Images/462804046.jpg", title: "Garden", height: "h-60" },
  { src: "/Images/496549081.jpg", title: "Beach", height: "h-48" },
  { src: "/Images/496549133.jpg", title: "Interior", height: "h-64" },
  { src: "/Images/496592300.jpg", title: "Balcony", height: "h-56" }
]

export default function Gallery({ setCurrentPage }) {
  const [selectedImage, setSelectedImage] = useState(null)

  const leftColumn = galleryItems.filter((_, i) => i % 2 === 0)
  const rightColumn = galleryItems.filter((_, i) => i % 2 !== 0)

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 className="font-headline text-xl font-bold text-primary">Gallery</h1>
          </div>
          <button className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">account_circle</span>
          </button>
        </div>
      </header>

      {/* Masonry Gallery - 2 columns with small gap */}
      <main className="pt-24 pb-8 px-4 max-w-4xl mx-auto">
        <div className="flex gap-1.5">
          {/* Left Column */}
          <div className="w-1/2">
            {leftColumn.map((item, index) => (
              <div 
                key={index} 
                className={`relative group cursor-pointer overflow-hidden ${item.height} mb-1.5`}
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={item.src}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          {/* Right Column */}
          <div className="w-1/2">
            {rightColumn.map((item, index) => (
              <div 
                key={index} 
                className={`relative group cursor-pointer overflow-hidden ${item.height} mb-1.5`}
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={item.src}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <img 
            alt={selectedImage.title}
            src={selectedImage.src}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}