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

const MainLayout = () => {
  const { scrollY } = useScroll();

  // Create parallax floating effects for each bean
  const y1 = useTransform(scrollY, [0, 8000], [0, -350]);
  const y2 = useTransform(scrollY, [0, 8000], [0, 450]);
  const y3 = useTransform(scrollY, [0, 8000], [0, -250]);
  const y4 = useTransform(scrollY, [0, 8000], [0, 500]);
  const y5 = useTransform(scrollY, [0, 8000], [0, -200]);
  const y6 = useTransform(scrollY, [0, 8000], [0, 400]);
  const y7 = useTransform(scrollY, [0, 8000], [0, -300]);
  const y8 = useTransform(scrollY, [0, 8000], [0, 250]);

  // Rotations for 3D depth feeling
  const r1 = useTransform(scrollY, [0, 8000], [-25, 90]);
  const r2 = useTransform(scrollY, [0, 8000], [45, -45]);
  const r3 = useTransform(scrollY, [0, 8000], [15, 180]);
  const r4 = useTransform(scrollY, [0, 8000], [-60, 60]);
  const r5 = useTransform(scrollY, [0, 8000], [35, -90]);
  const r6 = useTransform(scrollY, [0, 8000], [-15, 120]);
  const r7 = useTransform(scrollY, [0, 8000], [70, -70]);
  const r8 = useTransform(scrollY, [0, 8000], [-40, 140]);

  return (
    <div className="min-h-screen bg-cream text-espresso overflow-x-hidden relative">
      {/* 90s Film Grain Overlay */}
      <div className="vintage-grain" />

      {/* Floating Coffee Beans Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <CoffeeBean className="top-[6%] left-[-20px] md:left-[4%] w-14 h-14 md:w-16 md:h-16 text-caramel/10" style={{ y: y1, rotate: r1 }} />
        <CoffeeBean className="top-[16%] right-[-30px] md:right-[5%] w-20 h-20 md:w-24 md:h-24 text-espresso/8" style={{ y: y2, rotate: r2 }} />
        <CoffeeBean className="top-[28%] left-[-10px] md:left-[8%] w-16 h-16 md:w-20 md:h-20 text-caramel/8" style={{ y: y3, rotate: r3 }} />
        <CoffeeBean className="top-[42%] right-[-40px] md:right-[6%] w-24 h-24 md:w-28 md:h-28 text-espresso/10" style={{ y: y4, rotate: r4 }} />
        <CoffeeBean className="top-[55%] left-[-15px] md:left-[5%] w-12 h-12 md:w-14 md:h-14 text-caramel/12" style={{ y: y5, rotate: r5 }} />
        <CoffeeBean className="top-[68%] right-[-25px] md:right-[8%] w-20 h-20 md:w-24 md:h-24 text-espresso/8" style={{ y: y6, rotate: r6 }} />
        <CoffeeBean className="top-[80%] left-[-20px] md:left-[6%] w-16 h-16 md:w-20 md:h-20 text-caramel/10" style={{ y: y7, rotate: r7 }} />
        <CoffeeBean className="top-[91%] right-[-15px] md:right-[4%] w-14 h-14 md:w-16 md:h-16 text-espresso/12" style={{ y: y8, rotate: r8 }} />
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
