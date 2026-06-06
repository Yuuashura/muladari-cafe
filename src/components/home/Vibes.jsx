import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { vibesList } from '../../data/vibes';

const Vibes = () => {
  const [selectedVibe, setSelectedVibe] = useState(null);

  return (
    <section id="vibes" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Temukan Sudut Nyamanmu" 
          subtitle="Suasana & Vibes" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {vibesList.map((vibe, idx) => (
            <motion.div
              key={vibe.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setSelectedVibe(vibe)}
              className="group relative h-[450px] w-full rounded-2xl overflow-hidden border-2 border-espresso/20 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.25)] transition-all duration-300 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 vintage-photo"
                style={{ backgroundImage: `url(${vibe.image})` }}
              />
              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 bg-caramel/90 backdrop-blur-sm text-cream font-semibold text-xs px-3 py-1.5 rounded-full border border-cream/20 uppercase tracking-wider z-10">
                {vibe.tag}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-1/2 text-cream z-10">
                <h3 className="font-playfair text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-gold">
                  {vibe.title}
                </h3>
                <p className="font-dmsans text-sm text-cream/80 leading-relaxed translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 line-clamp-3">
                  {vibe.description}
                </p>
                <span className="mt-4 text-xs font-semibold text-gold underline opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Lihat Detail Suasana
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedVibe && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVibe(null)}
              className="fixed inset-0 z-50 bg-espresso/95 flex justify-center items-start md:items-center overflow-y-auto p-4 md:p-6 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedVibe(null)}
                className="fixed top-6 right-6 z-50 text-cream hover:text-gold bg-mocha/50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
                aria-label="Close details"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-3xl w-full bg-espresso border-2 border-mocha/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default my-auto"
              >
                {/* Image */}
                <div className="md:w-1/2 h-[50vh] md:h-[500px] bg-black/40 overflow-hidden relative flex items-center justify-center">
                  <img 
                    src={selectedVibe.image} 
                    alt={selectedVibe.title} 
                    className="w-full h-full object-contain vintage-photo"
                  />
                </div>
                
                {/* Details */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between text-cream bg-espresso border-t md:border-t-0 md:border-l border-mocha/30">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                      {selectedVibe.tag}
                    </span>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mt-2 mb-4 text-cream">
                      {selectedVibe.title}
                    </h3>
                    <p className="font-dmsans text-sm md:text-base text-cream/70 leading-relaxed mb-6">
                      {selectedVibe.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-mocha/30 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.instagram.com/muladaricoffee/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-5 py-3 bg-caramel hover:bg-gold text-cream hover:text-espresso font-semibold rounded-lg text-center transition-all duration-300 shadow-md text-sm"
                    >
                      Cek Instagram Kita
                    </a>
                    <button
                      onClick={() => setSelectedVibe(null)}
                      className="px-5 py-3 bg-transparent hover:bg-cream/10 border border-cream/30 hover:border-cream/80 text-cream font-semibold rounded-lg text-center transition-all duration-300 text-sm"
                    >
                      Kembali
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Vibes;
