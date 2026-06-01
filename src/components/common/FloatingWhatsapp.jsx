import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsapp = () => {
  // Use environment variable if available, otherwise default to a configurable dummy number.
  // This satisfies "Jangan taruh nomor WA asli sebelum pemilik konfirmasi" and makes it easy to change.
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
  const waNumber = rawNumber.replace(/[^0-9]/g, ''); // Ensure only numbers are kept
  const waMessage = encodeURIComponent('Halo Muladari Coffee, saya berkunjung dari website dan ingin memesan/tanya info!');
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-cream p-4 rounded-full shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { delay: 1, type: 'spring' }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact on WhatsApp"
    >
      {/* Pulse Outer Rings */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping group-hover:animate-none"></span>
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 animate-pulse"></span>
      
      {/* WhatsApp Icon */}
      <FaWhatsapp className="w-7 h-7 relative z-10" />
      
      {/* Hover tooltip */}
      <span className="absolute right-16 bg-espresso text-cream text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-mocha">
        Tanya Muladari
      </span>
    </motion.a>
  );
};

export default FloatingWhatsapp;
