import { motion } from 'framer-motion';
import { Coffee, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-espresso overflow-hidden pt-20"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-espresso/95 to-espresso" />

      {/* Decorative Floating Element */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-caramel/10 rounded-full filter blur-3xl" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center -mt-12 md:-mt-16 pb-12 pt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-mocha/40 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30 mb-8"
        >
          <Coffee className="w-4 h-4 text-gold" />
          <span className="text-xs md:text-sm font-semibold tracking-widest text-cream uppercase">
            Selamat Datang di Muladari Coffee
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-cream leading-tight mb-6"
        >
          Berawal dari Cerita <br className="hidden md:inline" />
          Menjadi Sebuah <span className="text-gold italic">Cita-Cita</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-cream/80 font-dmsans leading-relaxed mb-10"
        >
          Menyajikan kopi dengan ketulusan cita rasa, merajut kebersamaan, dan menemani setiap langkah perjuangan ide-ide hebatmu di kota Batusangkar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto px-8 py-4 bg-caramel hover:bg-gold text-cream font-semibold rounded-lg shadow-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>Lihat Menu Kami</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => scrollToSection('story')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-cream/10 text-cream font-semibold rounded-lg border-2 border-cream/30 hover:border-cream/80 flex items-center justify-center transition-all duration-300"
          >
            Tentang Kami
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave/Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.span 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[10px] md:text-xs text-gold tracking-widest uppercase cursor-pointer"
          onClick={() => scrollToSection('story')}
        >
          Scroll Down
        </motion.span>
        <div className="w-[1px] h-6 bg-gold/50 mt-1"></div>
      </div>
    </section>
  );
};

export default Hero;
