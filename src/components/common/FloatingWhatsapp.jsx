import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const FloatingInstagram = () => {
  return (
    <motion.a
      href="https://www.instagram.com/muladaricoffee/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-espresso hover:bg-mocha text-cream p-4 rounded-full shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { delay: 1, type: 'spring' }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Follow us on Instagram"
    >
      <span className="absolute inset-0 rounded-full bg-gold opacity-20 animate-pulse" />
      <FaInstagram className="w-7 h-7 relative z-10 text-gold" />
      <span className="absolute right-16 bg-espresso text-cream text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-mocha">
        Follow Muladari
      </span>
    </motion.a>
  );
};

export default FloatingInstagram;
