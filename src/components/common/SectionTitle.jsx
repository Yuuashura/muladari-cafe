import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center', light = false }) => {
  const isCenter = align === 'center';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <span className={`text-xs uppercase tracking-[0.25em] font-semibold mb-2 ${light ? 'text-gold' : 'text-caramel'}`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight ${light ? 'text-cream' : 'text-espresso'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-[2px] w-20 flex items-center justify-center relative ${light ? 'bg-gold/30' : 'bg-caramel/30'}`}>
        <span className={`absolute w-3 h-3 rotate-45 border-2 ${light ? 'bg-mocha border-gold' : 'bg-cream border-caramel'}`}></span>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
