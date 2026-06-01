import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { galleryList } from '../../data/gallery';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-cream/35 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Galeri Momen Muladari" 
          subtitle="Suasana & Rasa" 
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border-2 border-espresso/20 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.25)] transition-all duration-300"
            >
              {/* Photo */}
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 vintage-photo"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Hover Text Details */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-cream translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                <div className="flex items-center space-x-2 text-gold mb-2">
                  <Camera className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-semibold">Muladari Moments</span>
                </div>
                <h3 className="font-playfair text-xl font-bold mb-1">
                  {item.title}
                </h3>
                <p className="font-dmsans text-xs text-cream/70 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Zoom Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-espresso/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-cream hover:text-gold bg-mocha/50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                className="max-w-4xl w-full bg-espresso border border-mocha rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default"
              >
                {/* Image */}
                <div className="md:w-2/3 h-[300px] md:h-[500px] bg-mocha/20">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Details */}
                <div className="md:w-1/3 p-8 flex flex-col justify-center text-cream bg-espresso">
                  <span className="text-xs uppercase tracking-widest font-semibold text-gold mb-3">Muladari Moments</span>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">{selectedImage.title}</h3>
                  <p className="font-dmsans text-sm md:text-base text-cream/80 leading-relaxed">{selectedImage.caption}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
