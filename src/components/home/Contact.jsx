import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    topic: 'Tanya Menu',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const waText = `Halo Muladari Coffee!\n\nNama: ${formData.name}\nTopik: ${formData.topic}\nPesan:\n${formData.message}`;
    const encodedText = encodeURIComponent(waText);
    
    const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-cream/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Mari Berbagi Cerita" 
          subtitle="Hubungi Kami" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-espresso text-cream p-8 rounded-2xl border-2 border-mocha/40 space-y-6 shadow-[6px_6px_0px_0px_rgba(19,62,43,0.18)]">
              <h3 className="font-playfair text-2xl font-bold text-gold">Hubungi Kami</h3>
              <p className="font-dmsans text-sm text-cream/70 leading-relaxed">
                Ada pertanyaan, kritik, saran, atau ingin berkolaborasi? Tim kami siap menyambut cerita Anda kapan saja.
              </p>

              <div className="space-y-4">
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

                <a 
                  href="https://wa.me/628123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-mocha/50 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-espresso transition-colors duration-300">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/50 uppercase tracking-widest font-semibold">WhatsApp</p>
                    <p className="text-sm font-semibold text-cream">+62 812-3456-789</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-3">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/50 uppercase tracking-widest font-semibold">Email</p>
                    <p className="text-sm font-semibold text-cream">contact@muladaricoffee.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-cream p-8 md:p-10 rounded-2xl border-2 border-espresso/20 shadow-[6px_6px_0px_0px_rgba(19,62,43,0.18)]"
          >
            <h3 className="font-playfair text-2xl font-bold text-espresso mb-6">Kirim Pesan</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 font-dmsans">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-espresso/70 mb-2">Nama Anda</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Masukkan nama lengkap Anda"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-mocha/20 bg-cream focus:border-caramel focus:ring-1 focus:ring-caramel outline-none transition-colors duration-300 text-espresso placeholder:text-espresso/45"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-xs uppercase tracking-wider font-semibold text-espresso/70 mb-2">Topik Pesan</label>
                <select 
                  id="topic" 
                  name="topic" 
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-mocha/20 bg-cream focus:border-caramel focus:ring-1 focus:ring-caramel outline-none transition-colors duration-300 text-espresso"
                >
                  <option value="Tanya Menu">Tanya Menu & Sajian</option>
                  <option value="Reservasi Tempat">Reservasi Tempat</option>
                  <option value="Saran & Kritik">Saran & Kritik</option>
                  <option value="Kolaborasi / Katering">Kolaborasi / Katering</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-espresso/70 mb-2">Isi Pesan</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="4"
                  placeholder="Bagikan cerita atau pertanyaan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-mocha/20 bg-cream focus:border-caramel focus:ring-1 focus:ring-caramel outline-none transition-colors duration-300 text-espresso placeholder:text-espresso/45 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-6 py-4 bg-espresso hover:bg-mocha text-cream font-semibold rounded-lg shadow-md flex items-center justify-center space-x-2 transition-colors duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Kirim via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
