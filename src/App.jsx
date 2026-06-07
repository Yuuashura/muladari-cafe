import { Routes, Route, Navigate } from 'react-router-dom';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import Story from './components/home/Story';
import MenuSection from './components/home/MenuSection';
import Vibes from './components/home/Vibes';
import Gallery from './components/home/Gallery';
import Events from './components/home/Events';
import Location from './components/home/Location';
import Contact from './components/home/Contact';
import Footer from './components/common/Footer';
import FloatingWhatsapp from './components/common/FloatingWhatsapp';

const CoffeeBean = ({ className, style }) => (
  <motion.svg 
    viewBox="0 0 64 64" 
    fill="currentColor" 
    className={`absolute pointer-events-none ${className}`}
    style={style}
  >
    {/* Left half of the coffee bean with organic center curve */}
    <path d="M30 4C20 4 10 12 10 28C10 44 20 60 30 60C31 60 32 58 32 56C30 46 26 38 28 32C30 26 32 18 32 8C32 6 31 4 30 4Z" />
    {/* Right half of the coffee bean with organic center curve */}
    <path d="M34 4C33 4 32 6 32 8C32 18 34 26 36 32C38 38 34 46 32 56C32 58 33 60 34 60C44 60 54 44 54 28C54 12 44 4 34 4Z" />
  </motion.svg>
);

const FloatingCoffeeBean = ({ top, left, right, size, speed, rot, color }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 8000], [0, speed]);
  const rotate = useTransform(scrollY, [0, 8000], [rot, rot + 180]);

  return (
    <CoffeeBean 
      className={`${size} ${color}`} 
      style={{ 
        top, 
        left: left || undefined, 
        right: right || undefined,
        y, 
        rotate 
      }} 
    />
  );
};

const floatingBeansData = [
  // Section 1: Hero / Top (0% - 15%)
  { top: '1%', left: '3%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -120, rot: 30, color: 'text-caramel/8' },
  { top: '2.5%', right: '4%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 180, rot: -45, color: 'text-espresso/8' },
  { top: '4%', left: '12%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -200, rot: 60, color: 'text-caramel/10' },
  { top: '6%', right: '15%', size: 'w-4 h-4 md:w-5 md:h-5', speed: 150, rot: -15, color: 'text-espresso/7' },
  { top: '7.5%', left: '82%', size: 'w-8 h-8 md:w-10 md:h-10', speed: -250, rot: 90, color: 'text-caramel/9' },
  { top: '9%', left: '8%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 210, rot: -30, color: 'text-espresso/9' },
  { top: '11%', right: '8%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -170, rot: 120, color: 'text-caramel/8' },
  { top: '13%', left: '78%', size: 'w-4 h-4 md:w-6 md:h-6', speed: 140, rot: -60, color: 'text-espresso/7' },
  { top: '15%', left: '4%', size: 'w-7 h-7 md:w-9 md:h-9', speed: -220, rot: 15, color: 'text-caramel/10' },

  // Section 2: Story (15% - 30%)
  { top: '17%', right: '6%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 160, rot: 80, color: 'text-espresso/8' },
  { top: '18.5%', left: '14%', size: 'w-9 h-9 md:w-11 md:h-11', speed: -300, rot: -45, color: 'text-caramel/9' },
  { top: '20%', right: '12%', size: 'w-4 h-4 md:w-5 md:h-5', speed: 250, rot: 135, color: 'text-espresso/7' },
  { top: '22%', left: '85%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -180, rot: -90, color: 'text-caramel/11' },
  { top: '23.5%', left: '5%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 190, rot: 40, color: 'text-espresso/8' },
  { top: '25%', right: '18%', size: 'w-8 h-8 md:w-10 md:h-10', speed: -260, rot: -110, color: 'text-caramel/8' },
  { top: '26.5%', left: '74%', size: 'w-4 h-4 md:w-6 md:h-6', speed: 220, rot: 75, color: 'text-espresso/9' },
  { top: '28%', right: '4%', size: 'w-7 h-7 md:w-9 md:h-9', speed: -210, rot: -30, color: 'text-caramel/9' },
  { top: '29.5%', left: '10%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 170, rot: 160, color: 'text-espresso/8' },

  // Section 3: Menu (30% - 50%)
  { top: '31%', right: '10%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -140, rot: -50, color: 'text-caramel/10' },
  { top: '32.5%', left: '6%', size: 'w-8 h-8 md:w-10 md:h-10', speed: 280, rot: 90, color: 'text-espresso/6' },
  { top: '34%', right: '5%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -190, rot: -15, color: 'text-caramel/9' },
  { top: '35.5%', left: '88%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 230, rot: 110, color: 'text-espresso/8' },
  { top: '37%', left: '12%', size: 'w-4 h-4 md:w-5 md:h-5', speed: -250, rot: -75, color: 'text-caramel/11' },
  { top: '38.5%', right: '15%', size: 'w-9 h-9 md:w-11 md:h-11', speed: 320, rot: 145, color: 'text-espresso/7' },
  { top: '40%', left: '4%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -180, rot: -40, color: 'text-caramel/9' },
  { top: '41.5%', right: '8%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 200, rot: 65, color: 'text-espresso/8' },
  { top: '43%', left: '82%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -150, rot: -120, color: 'text-caramel/10' },
  { top: '44.5%', right: '12%', size: 'w-8 h-8 md:w-10 md:h-10', speed: 270, rot: 80, color: 'text-espresso/7' },
  { top: '46%', left: '8%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -210, rot: -15, color: 'text-caramel/9' },
  { top: '47.5%', right: '4%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 190, rot: 130, color: 'text-espresso/8' },
  { top: '49%', left: '85%', size: 'w-4 h-4 md:w-5 md:h-5', speed: -130, rot: -60, color: 'text-caramel/11' },

  // Section 4: Vibes (50% - 65%)
  { top: '51%', left: '5%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 240, rot: 45, color: 'text-espresso/8' },
  { top: '52.5%', right: '6%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -170, rot: -90, color: 'text-caramel/10' },
  { top: '54%', left: '78%', size: 'w-8 h-8 md:w-10 md:h-10', speed: 200, rot: 115, color: 'text-espresso/6' },
  { top: '55.5%', right: '14%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -220, rot: -30, color: 'text-caramel/9' },
  { top: '57%', left: '10%', size: 'w-9 h-9 md:w-11 md:h-11', speed: 300, rot: 150, color: 'text-espresso/7' },
  { top: '58.5%', right: '3%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -150, rot: -75, color: 'text-caramel/8' },
  { top: '60%', left: '84%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 180, rot: 60, color: 'text-espresso/9' },
  { top: '61.5%', right: '18%', size: 'w-4 h-4 md:w-5 md:h-5', speed: -130, rot: -45, color: 'text-caramel/10' },
  { top: '63%', left: '3%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 250, rot: 100, color: 'text-espresso/8' },
  { top: '64.5%', right: '8%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -190, rot: -60, color: 'text-caramel/9' },

  // Section 5: Gallery (65% - 80%)
  { top: '66%', left: '80%', size: 'w-4 h-4 md:w-6 md:h-6', speed: 160, rot: 35, color: 'text-espresso/8' },
  { top: '67.5%', left: '6%', size: 'w-8 h-8 md:w-10 md:h-10', speed: -230, rot: -110, color: 'text-caramel/8' },
  { top: '69%', right: '5%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 210, rot: 125, color: 'text-espresso/7' },
  { top: '70.5%', left: '12%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -180, rot: -40, color: 'text-caramel/10' },
  { top: '72%', right: '10%', size: 'w-9 h-9 md:w-11 md:h-11', speed: 350, rot: 80, color: 'text-espresso/5' },
  { top: '73.5%', left: '86%', size: 'w-4 h-4 md:w-5 md:h-5', speed: -150, rot: -95, color: 'text-caramel/9' },
  { top: '75%', left: '4%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 200, rot: 150, color: 'text-espresso/8' },
  { top: '76.5%', right: '15%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -240, rot: -30, color: 'text-caramel/10' },
  { top: '78%', left: '78%', size: 'w-8 h-8 md:w-10 md:h-10', speed: 190, rot: 60, color: 'text-espresso/9' },
  { top: '79.5%', right: '6%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -170, rot: -85, color: 'text-caramel/11' },

  // Section 6: Events (80% - 90%)
  { top: '81%', left: '8%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 220, rot: 110, color: 'text-espresso/8' },
  { top: '82.5%', right: '4%', size: 'w-8 h-8 md:w-10 md:h-10', speed: -280, rot: -50, color: 'text-caramel/7' },
  { top: '84%', left: '82%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 180, rot: 135, color: 'text-espresso/8' },
  { top: '85.5%', left: '3%', size: 'w-7 h-7 md:w-9 md:h-9', speed: -210, rot: -35, color: 'text-caramel/9' },
  { top: '87%', right: '12%', size: 'w-4 h-4 md:w-5 md:h-5', speed: 260, rot: 90, color: 'text-espresso/7' },
  { top: '88.5%', left: '14%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -150, rot: -65, color: 'text-caramel/10' },
  { top: '90%', right: '6%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 170, rot: 120, color: 'text-espresso/9' },

  // Section 7: Location / Contact / Footer (90% - 100%)
  { top: '91.5%', left: '85%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -130, rot: -45, color: 'text-caramel/11' },
  { top: '93%', left: '4%', size: 'w-8 h-8 md:w-10 md:h-10', speed: 230, rot: 75, color: 'text-espresso/8' },
  { top: '94.5%', right: '8%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -190, rot: -100, color: 'text-caramel/9' },
  { top: '96%', left: '80%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 200, rot: 140, color: 'text-espresso/7' },
  { top: '97.5%', left: '3%', size: 'w-4 h-4 md:w-5 md:h-5', speed: -160, rot: -30, color: 'text-caramel/10' },
  { top: '99%', right: '5%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 150, rot: 110, color: 'text-espresso/8' }
];

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-cream text-espresso overflow-x-hidden relative">
      {/* 90s Film Grain Overlay */}
      <div className="vintage-grain" />

      {/* Floating Coffee Beans Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingBeansData.map((bean, idx) => (
          <FloatingCoffeeBean key={idx} {...bean} />
        ))}
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Brand Story & Value Cards */}
        <Story />

        {/* Menu Grid and Filters */}
        <MenuSection />

        {/* Shop Vibes & Ambiance Cards */}
        <Vibes />

        {/* Moments Gallery & Lightbox */}
        <Gallery />

        {/* Active Promos & Future Projects */}
        <Events />

        {/* Outlet Locations & Interactive Map */}
        <Location />

        {/* Contact Form & WhatsApp Routing */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Action Trigger */}
      <FloatingWhatsapp />
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Index route on root / */}
      <Route path="/" element={<MainLayout />} />
      
      {/* Fallback to root / */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
