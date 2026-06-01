import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { vibesList } from '../../data/vibes';

const Vibes = () => {
  return (
    <section id="vibes" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Temukan Sudut Nyamanmu" 
          subtitle="Suasana & Vibes" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vibesList.map((vibe, idx) => (
            <motion.div
              key={vibe.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative h-[450px] w-full rounded-2xl overflow-hidden border-2 border-espresso/20 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.25)] transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 vintage-photo"
                style={{ backgroundImage: `url(${vibe.image})` }}
              />
              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 bg-caramel/90 backdrop-blur-sm text-cream font-semibold text-xs px-3 py-1.5 rounded-full border border-cream/20 uppercase tracking-wider">
                {vibe.tag}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-1/2 text-cream">
                <h3 className="font-playfair text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-gold">
                  {vibe.title}
                </h3>
                <p className="font-dmsans text-sm text-cream/80 leading-relaxed translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {vibe.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vibes;
