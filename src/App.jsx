import { Routes, Route, Navigate } from 'react-router-dom';
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

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-cream text-espresso overflow-x-hidden relative">
      {/* 90s Film Grain Overlay */}
      <div className="vintage-grain" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
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
