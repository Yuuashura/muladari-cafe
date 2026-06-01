import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

const MenuCard = ({ item }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-cream/20 rounded-xl overflow-hidden border border-mocha/10 hover:border-caramel/30 hover:bg-cream/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col group h-full"
    >
      {/* Image Container with Zoom effect */}
      <div className="relative h-56 w-full overflow-hidden bg-mocha/20">
        <img 
          src={item.image} 
          alt={item.name} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Popular Badge */}
        {item.isPopular && (
          <div className="absolute top-4 right-4 bg-gold text-espresso font-semibold text-xs px-3 py-1.5 rounded-full flex items-center space-x-1 shadow-md border border-cream/20">
            <Sparkles className="w-3 h-3 fill-espresso" />
            <span>Terfavorit</span>
          </div>
        )}
      </div>

      {/* Details Container */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start space-x-2 mb-3">
          <h3 className="font-playfair text-xl font-bold text-espresso group-hover:text-caramel transition-colors duration-300">
            {item.name}
          </h3>
          <span className="font-dmsans font-bold text-base text-caramel whitespace-nowrap pt-0.5">
            {formatCurrency(item.price)}
          </span>
        </div>
        
        <p className="font-dmsans text-sm text-espresso/70 leading-relaxed flex-grow">
          {item.description}
        </p>

        {/* Action / Detail Trigger */}
        <div className="mt-5 pt-4 border-t border-mocha/10 flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-espresso/40 font-semibold">
            {item.category === 'hot' ? 'Kopi Panas' : item.category === 'cold' ? 'Kopi Dingin' : item.category === 'non-kopi' ? 'Non-Kopi' : 'Makanan'}
          </span>
          <button 
            onClick={() => {
              // Direct WA link ordering
              const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
              const waMessage = encodeURIComponent(`Halo Muladari Coffee, saya ingin memesan menu: ${item.name} (${formatCurrency(item.price)})`);
              window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
            }}
            className="text-xs font-semibold text-caramel hover:text-espresso transition-colors duration-300 flex items-center space-x-1"
          >
            <span>Pesan Sekarang</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
