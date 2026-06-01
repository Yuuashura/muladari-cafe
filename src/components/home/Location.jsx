import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const outlets = [
  {
    name: 'Outlet Utama (Jl. Minang)',
    address: 'Jl. Minang, depan Hotel Emerone, Batusangkar',
    isPrimary: true,
    mapsLink: 'https://maps.google.com/?q=Hotel+Emerone+Batusangkar'
  },
  {
    name: 'Outlet Gedung Nasional',
    address: 'Depan Gedung Nasional Batusangkar',
    isPrimary: false,
    mapsLink: 'https://maps.google.com/?q=Gedung+Nasional+Batusangkar'
  },
  {
    name: 'Outlet Kampus UIN',
    address: 'Kampus 2 UIN Mahmud Yunus, Batusangkar',
    isPrimary: false,
    mapsLink: 'https://maps.google.com/?q=UIN+Mahmud+Yunus+Batusangkar+Kampus+2'
  }
];

const Location = () => {
  return (
    <section id="location" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Kunjungi Coffee Shop Kami" 
          subtitle="Lokasi & Outlet" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Address Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Google Rating Card */}
              <div className="bg-espresso text-cream p-5 rounded-2xl border border-mocha flex items-center space-x-4 shadow-md">
                <div className="bg-gold/15 p-3 rounded-xl border border-gold/30">
                  <Star className="w-8 h-8 text-gold fill-gold" />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-playfair text-2xl font-bold text-gold">4.8</span>
                    <span className="text-sm text-cream/70">/ 5.0</span>
                  </div>
                  <p className="font-dmsans text-xs text-cream/80">
                    Berdasarkan 23 ulasan Google Maps
                  </p>
                </div>
              </div>

              {/* Outlets List */}
              <div className="space-y-4">
                {outlets.map((outlet, idx) => (
                  <div 
                    key={idx}
                    className={`p-5 rounded-xl border transition-all duration-300 ${
                      outlet.isPrimary 
                        ? 'bg-cream border-caramel/40 shadow-md' 
                        : 'bg-cream/40 border-mocha/10 hover:border-caramel/20'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <MapPin className={`w-5 h-5 mt-0.5 shrink-0 ${outlet.isPrimary ? 'text-caramel' : 'text-mocha'}`} />
                      <div className="space-y-1">
                        <h4 className="font-playfair font-bold text-espresso">
                          {outlet.name}
                        </h4>
                        <p className="font-dmsans text-sm text-espresso/70 leading-relaxed">
                          {outlet.address}
                        </p>
                        <a 
                          href={outlet.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs font-semibold text-caramel hover:text-espresso transition-colors duration-300 pt-1"
                        >
                          <span>Rute Google Maps</span>
                          <span>→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="pt-4">
              <button 
                onClick={() => {
                  const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
                  const waMessage = encodeURIComponent('Halo Muladari Coffee, saya mencari rute ke outlet utama Jl. Minang. Boleh dibantu petunjuk jalannya?');
                  window.open(`https://wa.me/${waNumber}?text=${waMessage}`, '_blank');
                }}
                className="w-full px-6 py-4 bg-caramel hover:bg-gold text-espresso font-semibold rounded-lg shadow-md flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi Kami untuk Petunjuk Arah</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive Map (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 h-[450px] lg:h-auto rounded-3xl overflow-hidden border-4 border-cream shadow-2xl bg-mocha/10"
          >
            <iframe 
              title="Peta Lokasi Muladari Coffee"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.697426868846!2d100.59368167448834!3d-0.4578148352601955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2ab1765c92c575%3A0xe54e60cf0b62e49d!2sHotel%20Emerone%20Batusangkar!5e0!3m2!1sid!2sid!4v1717200000000!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
