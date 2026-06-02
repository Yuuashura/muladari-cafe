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
  { top: '3%', left: '4%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -180, rot: 45, color: 'text-caramel/9' },
  { top: '7%', right: '5%', size: 'w-8 h-8 md:w-10 md:h-10', speed: 220, rot: -60, color: 'text-espresso/8' },
  { top: '11%', left: '80%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -140, rot: 90, color: 'text-caramel/10' },
  { top: '14%', left: '6%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 170, rot: -15, color: 'text-espresso/7' },

  // Section 2: Story (15% - 30%)
  { top: '19%', left: '10%', size: 'w-10 h-10 md:w-12 md:h-12', speed: 300, rot: 120, color: 'text-espresso/6' },
  { top: '23%', right: '8%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -250, rot: -30, color: 'text-caramel/9' },
  { top: '26%', left: '75%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 200, rot: 75, color: 'text-espresso/8' },
  { top: '29%', left: '3%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -190, rot: -45, color: 'text-caramel/10' },

  // Section 3: Menu (30% - 50%)
  { top: '34%', right: '4%', size: 'w-11 h-11 md:w-13 md:h-13', speed: 350, rot: 160, color: 'text-espresso/6' },
  { top: '38%', left: '12%', size: 'w-4 h-4 md:w-6 md:h-6', speed: -160, rot: -90, color: 'text-caramel/11' },
  { top: '42%', right: '10%', size: 'w-9 h-9 md:w-11 md:h-11', speed: 260, rot: 110, color: 'text-espresso/7' },
  { top: '45%', left: '5%', size: 'w-8 h-8 md:w-10 md:h-10', speed: -280, rot: -75, color: 'text-caramel/9' },
  { top: '49%', right: '7%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 190, rot: 45, color: 'text-espresso/8' },

  // Section 4: Vibes (50% - 65%)
  { top: '53%', right: '3%', size: 'w-6 h-6 md:w-8 md:h-8', speed: 180, rot: 40, color: 'text-espresso/8' },
  { top: '57%', left: '8%', size: 'w-10 h-10 md:w-12 md:h-12', speed: -320, rot: -120, color: 'text-caramel/6' },
  { top: '61%', right: '15%', size: 'w-5 h-5 md:w-7 md:h-7', speed: 150, rot: 80, color: 'text-espresso/9' },
  { top: '64%', left: '4%', size: 'w-7 h-7 md:w-9 md:h-9', speed: -210, rot: -65, color: 'text-caramel/10' },

  // Section 5: Gallery (65% - 80%)
  { top: '68%', left: '3%', size: 'w-8 h-8 md:w-10 md:h-10', speed: -220, rot: -50, color: 'text-caramel/8' },
  { top: '72%', right: '6%', size: 'w-11 h-11 md:w-13 md:h-13', speed: 380, rot: 135, color: 'text-espresso/5' },
  { top: '76%', left: '80%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -170, rot: 60, color: 'text-caramel/10' },
  { top: '79%', left: '6%', size: 'w-4 h-4 md:w-6 md:h-6', speed: 190, rot: -80, color: 'text-espresso/11' },

  // Section 6: Events (80% - 90%)
  { top: '83%', right: '4%', size: 'w-9 h-9 md:w-11 md:h-11', speed: -300, rot: 150, color: 'text-caramel/7' },
  { top: '86%', left: '10%', size: 'w-7 h-7 md:w-9 md:h-9', speed: 240, rot: -35, color: 'text-espresso/8' },
  { top: '89%', right: '8%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -150, rot: 110, color: 'text-caramel/9' },

  // Section 7: Location / Contact (90% - 100%)
  { top: '92%', right: '10%', size: 'w-6 h-6 md:w-8 md:h-8', speed: -180, rot: 100, color: 'text-caramel/9' },
  { top: '95%', left: '3%', size: 'w-9 h-9 md:w-11 md:h-11', speed: 210, rot: -110, color: 'text-espresso/8' },
  { top: '98%', right: '5%', size: 'w-5 h-5 md:w-7 md:h-7', speed: -130, rot: 25, color: 'text-caramel/10' }
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
      {/* Redirect root to the canonical Muladari Coffee page */}
      <Route path="/" element={<Navigate to="/muladari-coffee" replace />} />

      {/* Keep the old misspelled URL working while pointing users to the canonical route */}
      <Route path="/muladari-coffe" element={<Navigate to="/muladari-coffee" replace />} />
      
      {/* Index route on /muladari-coffee */}
      <Route path="/muladari-coffee" element={<MainLayout />} />
      
      {/* Fallback to /muladari-coffee */}
      <Route path="*" element={<Navigate to="/muladari-coffee" replace />} />
    </Routes>
  );
}

export default App;
