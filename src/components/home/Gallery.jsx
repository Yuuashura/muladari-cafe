import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronDown } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { galleryList } from '../../data/gallery';

const BATCH = 9;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(BATCH);

  const visibleItems = galleryList.slice(0, visibleCount);
  const hasMore = visibleCount < galleryList.length;

  return (
    <section id="gallery" className="py-24 bg-cream/35 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Galeri Momen Muladari" 
          subtitle="Suasana & Rasa" 
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (idx % BATCH) * 0.06 }}
                onClick={() => setSelectedImage(item)}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border-2 border-espresso/20 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.25)] transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 vintage-photo"
                />
                <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-cream translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="flex items-center space-x-2 text-gold mb-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-semibold">Muladari Moments</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-1">{item.title}</h3>
                  <p className="font-dmsans text-xs text-cream/70 leading-relaxed">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Counter */}
        <p className="text-center text-sm text-espresso/50 font-dmsans mt-8">
          Menampilkan <span className="font-semibold text-espresso">{visibleItems.length}</span> dari <span className="font-semibold text-espresso">{galleryList.length}</span> foto
        </p>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount(v => v + BATCH)}
              className="flex items-center space-x-2 px-8 py-4 bg-espresso hover:bg-mocha text-cream font-semibold rounded-xl shadow-[4px_4px_0px_0px_rgba(19,62,43,0.25)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.35)] transition-all duration-300"
            >
              <span>Lihat Lebih Banyak</span>
              <ChevronDown className="w-4 h-4" />
            </motion.button>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-espresso/95 flex justify-center items-start md:items-center overflow-y-auto p-4 md:p-6 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="fixed top-6 right-6 z-50 text-cream hover:text-gold bg-mocha/50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
                aria-label="Tutup lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-espresso border border-mocha rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default my-auto"
              >
                <div className="md:w-2/3 h-[50vh] md:h-[600px] bg-black/40 flex items-center justify-center">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="md:w-1/3 p-8 flex flex-col justify-center text-cream bg-espresso border-t md:border-t-0 md:border-l border-mocha/30">
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
