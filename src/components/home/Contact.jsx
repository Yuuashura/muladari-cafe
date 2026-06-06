import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { MessageCircle, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Mari Berbagi Cerita" 
          subtitle="Hubungi Kami" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-espresso text-cream p-8 rounded-2xl border-2 border-mocha/40 space-y-6 shadow-[6px_6px_0px_0px_rgba(19,62,43,0.18)]">
              <h3 className="font-playfair text-2xl font-bold text-gold">Temukan Kami</h3>
              <p className="font-dmsans text-sm text-cream/70 leading-relaxed">
                Ada pertanyaan, saran, atau ingin berkolaborasi? Hubungi kami langsung lewat Instagram. Kami selalu senang mendengar cerita Anda!
              </p>

              <div className="space-y-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/muladaricoffee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-mocha/50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-espresso transition-colors duration-300">
                    <FaInstagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/50 uppercase tracking-widest font-semibold">Instagram</p>
                    <p className="text-sm font-semibold text-cream">@muladaricoffee</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-4 p-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/50 uppercase tracking-widest font-semibold">Lokasi</p>
                    <p className="text-sm font-semibold text-cream">Baringin, Lima Kaum, Batusangkar</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center space-x-4 p-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/50 uppercase tracking-widest font-semibold">Jam Buka</p>
                    <p className="text-sm font-semibold text-cream">Setiap Hari · 12.00 – 00.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Instagram CTA (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-cream p-8 md:p-12 rounded-2xl border-2 border-espresso/20 shadow-[6px_6px_0px_0px_rgba(19,62,43,0.18)] flex flex-col items-center justify-center text-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-espresso flex items-center justify-center shadow-lg">
              <FaInstagram className="w-10 h-10 text-gold" />
            </div>

            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-espresso mb-3">
                Ikuti Perjalanan Kami
              </h3>
              <p className="font-dmsans text-sm text-espresso/60 leading-relaxed max-w-md">
                Dapatkan update menu terbaru, momen spesial, dan event seru di Muladari Coffee langsung dari Instagram kami.
              </p>
            </div>

            <a
              href="https://www.instagram.com/muladaricoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-espresso hover:bg-mocha text-cream font-semibold rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Kunjungi @muladaricoffee</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-espresso/40 font-dmsans">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>DM kami di Instagram untuk pertanyaan & kolaborasi</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
