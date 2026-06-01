import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import MenuCard from './MenuCard';
import { menuCategories, menuItems } from '../../data/menu';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
