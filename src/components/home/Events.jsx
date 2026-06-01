import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { activePromos, districtMuladari } from '../../data/events';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Promo & Info Spesial" 
          subtitle="Events & Promo" 
        />

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {activePromos.map((promo, idx) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-cream rounded-2xl overflow-hidden border-2 border-espresso/15 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.25)] transition-all duration-300 flex flex-col md:flex-row group"
            >
              {/* Promo Image */}
              <div className="md:w-2/5 h-48 md:h-auto relative bg-mocha/20 overflow-hidden shrink-0">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 vintage-photo"
                />
                <span className="absolute top-4 left-4 bg-caramel text-cream font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                  {promo.badge}
                </span>
              </div>

              {/* Promo Details */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-caramel font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{promo.period}</span>
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-bold text-espresso mb-3 group-hover:text-caramel transition-colors duration-300">
                    {promo.title}
                  </h3>
                  <p className="font-dmsans text-sm text-espresso/70 leading-relaxed">
                    {promo.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-mocha/10">
                  <button 
                    onClick={() => {
                      const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
                      const waMessage = encodeURIComponent(`Halo Muladari Coffee, saya ingin info lebih lanjut tentang promo: ${promo.title}`);
                      window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
                    }}
                    className="text-xs font-bold text-caramel hover:text-espresso transition-colors duration-300 uppercase tracking-wider"
                  >
                    Klaim Promo via WhatsApp →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* District Muladari Featured Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border-2 border-espresso/20 shadow-[8px_8px_0px_0px_rgba(19,62,43,0.18)] bg-espresso"
        >
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 hover:scale-105 transition-transform duration-1000 vintage-photo"
            style={{ backgroundImage: `url(${districtMuladari.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 p-8 md:p-16 max-w-2xl text-cream">
            <span className="inline-flex items-center space-x-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full border border-gold/30 mb-6 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 fill-gold animate-pulse" />
              <span>Project Baru</span>
            </span>

            <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {districtMuladari.title}
            </h3>
            
            <p className="font-playfair italic text-gold text-lg md:text-xl mb-4">
              {districtMuladari.subtitle}
            </p>
            
            <p className="font-dmsans text-sm md:text-base text-cream/80 leading-relaxed mb-6">
              {districtMuladari.description}
            </p>

            <div className="flex items-center space-x-2 text-xs text-gold font-semibold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-gold" />
              <span>{districtMuladari.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
