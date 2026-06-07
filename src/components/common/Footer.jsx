import { MapPin, Clock, Phone, Heart } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { scrollToSection } from '../../utils/scrollToSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp number configured for redirection
  const waNumber = '628123456789'; // Dummy default, easy to replace
  const waMessage = encodeURIComponent('Halo Muladari Coffee, saya tertarik berkunjung dan memesan kopi!');
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <footer className="bg-espresso text-cream pt-16 pb-8 border-t border-mocha">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="/images/muladari_logo.jpg" 
                alt="Muladari Coffee Logo" 
                className="w-9 h-9 rounded-full object-cover border border-gold/30" 
              />
              <span className="font-playfair text-xl md:text-2xl font-bold tracking-wider uppercase text-cream">
                Muladari<span className="text-gold"> Coffee</span>
              </span>
            </div>
            <p className="font-playfair italic text-cream/70 text-sm md:text-base leading-relaxed">
              "Berawal dari cerita menjadi sebuah cita-cita"
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/muladaricoffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-mocha flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-gold uppercase tracking-wider mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm text-cream/80">
              {['home', 'story', 'menu', 'vibes', 'events', 'location', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="hover:text-gold transition-colors duration-300 capitalize"
                  >
                    {item === 'events' ? 'Events & Promo' : item === 'location' ? 'Lokasi Kami' : item === 'contact' ? 'Hubungi Kami' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-gold uppercase tracking-wider mb-4">Jam Operasional</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-cream">Setiap Hari</p>
                  <p className="text-xs">12.00 - 00.00 WIB</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-lg font-bold text-gold uppercase tracking-wider mb-4">Hubungi</h3>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>District Muladari Social Bar, Baringin, Lima Kaum, Batusangkar</span>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-mocha/50 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cream/50">
          <p>© {currentYear} Muladari Coffee. Hak Cipta Dilindungi.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Dibuat dengan <Heart className="w-3 h-3 text-rose-500 mx-1 fill-rose-500" /> untuk pecinta kopi Indonesia.
          </p>
          <p>Developer By <a href="https://www.instagram.com/yudis.ashura" target="_blank" rel="noopener noreferrer">@Yudis.Ashura</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
