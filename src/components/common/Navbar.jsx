import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'vibes', label: 'Vibes' },
  { id: 'events', label: 'Events & Promo' },
  { id: 'location', label: 'Lokasi' },
  { id: 'contact', label: 'Hubungi Kami' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the middle of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-espresso/95 backdrop-blur-md shadow-lg border-b border-mocha py-3 text-cream'
          : 'bg-transparent py-5 text-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img 
              src="/images/muladari_logo.jpg" 
              alt="Muladari Coffee Logo" 
              className="w-10 h-10 rounded-full object-cover border border-gold/30 transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-playfair text-xl md:text-2xl font-bold tracking-wider uppercase">
              Muladari<span className={isScrolled ? 'text-gold' : 'text-caramel'}> Coffee</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-dmsans text-sm font-medium tracking-wide transition-all duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-current after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  activeSection === link.id
                    ? isScrolled 
                      ? 'text-gold after:scale-x-100' 
                      : 'text-gold after:scale-x-100'
                    : 'opacity-80 hover:opacity-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'hover:bg-mocha text-cream' : 'hover:bg-cream/10 text-cream'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] md:top-[68px] z-40 bg-espresso/98 transition-all duration-500 transform ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6 pb-20">
          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`font-playfair text-2xl font-semibold tracking-wide transition-all duration-300 ${
                activeSection === link.id ? 'text-gold scale-105' : 'text-cream/80 hover:text-cream'
              } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
