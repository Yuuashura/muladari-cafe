import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import MenuCard from './MenuCard';
import { menuCategories, menuItems } from '../../data/menu';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Sajian Cita Rasa Muladari" 
          subtitle="Menu Terfavorit" 
        />

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-dmsans text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 border ${
                activeCategory === category.id
                  ? 'bg-caramel text-espresso border-caramel shadow-md'
                  : 'bg-cream text-espresso/70 border-mocha/10 hover:border-caramel/40 hover:text-espresso'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MenuCard item={item} onSelect={() => setSelectedItem(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-espresso/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-cream hover:text-gold bg-mocha/50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
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
                className="max-w-3xl w-full bg-espresso border-2 border-mocha/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default"
              >
                {/* Image */}
                <div className="md:w-1/2 h-[260px] md:h-[400px] bg-mocha/20 overflow-hidden relative">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover vintage-photo"
                  />
                  {selectedItem.isPopular && (
                    <div className="absolute top-4 left-4 bg-gold text-espresso font-semibold text-xs px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-md border border-cream/20">
                      <Sparkles className="w-3 h-3 fill-espresso" />
                      <span>Terfavorit</span>
                    </div>
                  )}
                </div>
                
                {/* Details */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between text-cream bg-espresso">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                      {selectedItem.category === 'hot' ? 'Kopi Panas' : selectedItem.category === 'cold' ? 'Kopi Dingin' : selectedItem.category === 'non-kopi' ? 'Non-Kopi' : 'Makanan'}
                    </span>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mt-2 mb-4 text-cream">
                      {selectedItem.name}
                    </h3>
                    <p className="font-dmsans text-sm md:text-base text-cream/70 leading-relaxed mb-6">
                      {selectedItem.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-mocha/30 flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => {
                        const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
                        const waMessage = encodeURIComponent(`Halo Muladari Coffee, saya ingin memesan menu: ${selectedItem.name}`);
                        window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
                      }}
                      className="flex-1 px-5 py-3 bg-caramel hover:bg-gold text-cream hover:text-espresso font-semibold rounded-lg text-center transition-all duration-300 shadow-md text-sm"
                    >
                      Pesan via WhatsApp
                    </button>
                    <button
                      onClick={() => setSelectedItem(null)}
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

        {/* PDF Menu Download / WhatsApp Ordering Info */}
        <div className="mt-16 text-center">
          <p className="font-dmsans text-espresso/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Punya request racikan khusus atau ingin memesan catering untuk acara? Hubungi kami langsung via WhatsApp untuk kustomisasi sajian Anda.
          </p>
          <button 
            onClick={() => {
              const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
              window.open(`https://wa.me/${waNumber}?text=Halo%20Muladari%20Coffee%2C%20saya%20ingin%20tanya%20mengenai%20layanan%20katering%20/%20pesanan%20khusus.`, '_blank');
            }}
            className="mt-6 inline-flex items-center space-x-2 px-6 py-3 bg-espresso hover:bg-mocha text-cream font-semibold rounded-lg transition-colors duration-300 shadow-md"
          >
            <span>Tanya Katering / Menu Kustom</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
