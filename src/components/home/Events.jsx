import { motion } from 'framer-motion';
import { Music, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { pastEvents, districtMuladari } from '../../data/events';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Kenangan Panggung Kita" 
          subtitle="Event" 
        />

        {/* Past Events List */}
        <div className="flex flex-col gap-8">
          {pastEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-cream rounded-2xl overflow-hidden border-2 border-espresso/15 shadow-[4px_4px_0px_0px_rgba(19,62,43,0.12)] hover:shadow-[6px_6px_0px_0px_rgba(19,62,43,0.22)] transition-all duration-300 flex flex-col md:flex-row group"
            >
              {/* Event Thumbnail */}
              <div className="md:w-1/3 h-52 md:h-auto relative overflow-hidden shrink-0">
                <img 
                  src={event.image} 
                  alt={event.performer} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 vintage-photo"
                />
                {/* Overlay gradient on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-caramel text-cream font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm">
                  {event.badge}
                </span>
                {/* Performer name on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-playfair text-cream text-lg font-bold leading-tight drop-shadow-md">
                    {event.performer}
                  </p>
                  <p className="font-dmsans text-cream/80 text-xs mt-0.5">{event.type}</p>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 md:p-8 flex flex-col justify-center gap-4 flex-1">
                {/* Date & Time */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-caramel font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-espresso/50 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Performer & Type */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Music className="w-4 h-4 text-caramel shrink-0" />
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-espresso group-hover:text-caramel transition-colors duration-300">
                      {event.performer}
                    </h3>
                  </div>
                  <span className="inline-block font-dmsans text-xs text-espresso/50 uppercase tracking-wider border border-espresso/15 px-2 py-0.5 rounded-full">
                    {event.type}
                  </span>
                </div>

                {/* Description */}
                <p className="font-dmsans text-sm text-espresso/70 leading-relaxed border-l-2 border-caramel/30 pl-4">
                  {event.description}
                </p>

                {/* Footer Tag */}
                <div className="pt-3 border-t border-mocha/10">
                  <span className="text-xs font-semibold text-espresso/30 uppercase tracking-widest">
                    Sudah Berlangsung
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
