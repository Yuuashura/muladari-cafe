import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Calendar, Clock, MapPin, Sparkles, X, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { pastEvents, districtMuladari } from '../../data/events';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const displayedEvents = pastEvents.slice(0, visibleCount);
  const hasMore = visibleCount < pastEvents.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, pastEvents.length));
  };

  return (
    <section id="events" className="py-24 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Kenangan Panggung Kita" 
          subtitle="Event" 
        />

        {/* Past Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedEvent(event)}
              className="bg-cream rounded-2xl overflow-hidden border-2 border-espresso/15 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.1)] hover:shadow-[8px_8px_0px_0px_rgba(19,62,43,0.2)] hover:border-caramel/50 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Event Poster Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-espresso/5 border-b border-espresso/10 shrink-0">
                <img 
                  src={event.image} 
                  alt={event.performer} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 vintage-photo"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent opacity-60" />
                
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-caramel/90 backdrop-blur-sm text-cream font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm z-10">
                  {event.badge}
                </span>
              </div>

              {/* Event Excerpt Details */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-3 bg-cream">
                <div>
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-caramel font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>

                  {/* Title & Type */}
                  <h3 className="font-playfair text-lg md:text-xl font-bold text-espresso group-hover:text-caramel transition-colors duration-300 line-clamp-1 mb-1">
                    {event.performer}
                  </h3>
                  <span className="inline-block font-dmsans text-[10px] text-espresso/60 uppercase tracking-widest border border-espresso/15 px-2.5 py-0.5 rounded-full mb-3">
                    {event.type}
                  </span>

                  {/* Short Description */}
                  <p className="font-dmsans text-xs text-espresso/70 leading-relaxed line-clamp-2 pl-3 border-l-2 border-caramel/20">
                    {event.description}
                  </p>
                </div>

                {/* Read More trigger */}
                <div className="flex items-center gap-1 text-xs font-semibold text-caramel group-hover:translate-x-1.5 transition-transform duration-300 mt-2">
                  <span>Lihat Detail</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="flex justify-center mb-20">
            <button
              onClick={handleShowMore}
              className="px-8 py-3 rounded-full border-2 border-caramel text-caramel hover:bg-caramel hover:text-cream font-dmsans font-semibold text-sm transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(196,140,93,0.15)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}

        {/* Event Detail Modal (Popup) */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-espresso/70 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-cream border-2 border-espresso/20 w-full max-w-4xl max-h-[85vh] sm:max-h-[80vh] md:max-h-none rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 z-30 p-2 rounded-full bg-cream/95 text-espresso border border-espresso/10 hover:bg-caramel hover:text-cream shadow-md transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Large Poster */}
                <div className="w-full md:w-1/2 h-[280px] sm:h-[350px] md:h-[550px] relative overflow-hidden bg-espresso/10 shrink-0">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.performer}
                    className="w-full h-full object-cover vintage-photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-caramel text-cream font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-md">
                    {selectedEvent.badge}
                  </span>
                </div>

                {/* Right Side: Detailed Info */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    {/* Date and Time badge */}
                    <div className="flex flex-wrap gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5 text-caramel">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-espresso/60">
                        <Clock className="w-4 h-4" />
                        <span>{selectedEvent.time}</span>
                      </div>
                    </div>

                    {/* Performer Name & Type */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Music className="w-5 h-5 text-caramel shrink-0" />
                        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-espresso leading-tight">
                          {selectedEvent.performer}
                        </h2>
                      </div>
                      <span className="inline-block font-dmsans text-[10px] sm:text-xs text-espresso/50 uppercase tracking-widest border border-espresso/15 px-3 py-1 rounded-full">
                        {selectedEvent.type}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="pt-2 border-t border-espresso/10">
                      <p className="font-dmsans text-sm sm:text-base text-espresso/80 leading-relaxed pl-4 border-l-4 border-caramel">
                        {selectedEvent.description}
                      </p>
                    </div>
                  </div>

                  {/* Already Happened Badge */}
                  <div className="pt-4 border-t border-espresso/10 flex items-center justify-between text-xs font-semibold text-espresso/40">
                    <span className="uppercase tracking-widest">Sudah Berlangsung</span>
                    <span className="bg-espresso/5 px-2.5 py-1 rounded-md text-[10px]">District Muladari</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* District Muladari Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 relative rounded-3xl overflow-hidden border-2 border-espresso/20 shadow-[8px_8px_0px_0px_rgba(19,62,43,0.18)] min-h-[260px] flex items-center"
        >
          {/* Background image */}
          <img
            src={districtMuladari.image}
            alt={districtMuladari.title}
            className="absolute inset-0 w-full h-full object-cover vintage-photo"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-espresso/75" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 max-w-2xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 bg-caramel/90 text-cream text-xs font-semibold px-3 py-1.5 rounded-full mb-5 shadow-sm">
              <Sparkles className="w-3 h-3" />
              Sudah Buka
            </span>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-2">
              {districtMuladari.title}
            </h2>
            <p className="font-playfair italic text-gold text-base md:text-lg mb-4">
              {districtMuladari.subtitle}
            </p>
            <p className="font-dmsans text-sm text-cream/80 leading-relaxed mb-6">
              {districtMuladari.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-caramel uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>{districtMuladari.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
