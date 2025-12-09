import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Button from './components/Button';
import VideoSection from './components/VideoSection';
import { Menu, X } from 'lucide-react';
import { LOGO_URL } from './constants';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 50;
      if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: 'PRODUCTOS', href: '#productos' },
    { name: 'BENEFICIOS', href: '#beneficios' },
    { name: 'TESTIMONIOS', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-violet selection:text-white">
      {/* Navbar Fijo */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-brand-violet/5 py-3 border-b border-white/10' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
        aria-label="Navegación principal"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg px-2">
            <img 
              src={LOGO_URL} 
              alt="GoodFries Logo" 
              className="h-12 w-auto md:h-14 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-105" 
            />
            {/* Fallback text hidden if image loads, or kept for SEO if needed, here we rely on img */}
            <span className="sr-only">GOODFRIES</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold tracking-wide text-gray-300 hover:text-brand-gold transition-colors relative group focus:outline-none focus:text-brand-gold"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="gold" className="py-2 px-6 text-sm shadow-brand-gold/20">
              Cotizar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-gold hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] border-t border-white/10 shadow-2xl p-6 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 font-bold py-3 border-b border-white/10 hover:text-brand-gold block focus:outline-none focus:text-brand-gold"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
               <Button variant="gold" fullWidth onClick={() => setMobileMenuOpen(false)}>
                Cotizar Ahora
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Sections with scroll-mt-32 to offset fixed header */}
        <section id="inicio" className="scroll-mt-32">
          <Hero />
        </section>
        
        {/* Nueva sección de video */}
        <section id="video" className="scroll-mt-32">
          <VideoSection />
        </section>

        <section id="beneficios" className="scroll-mt-32">
          <WhyUs />
        </section>
        <section id="productos" className="scroll-mt-32">
          <Products />
        </section>
        <section id="comparativa" className="scroll-mt-32">
          <Comparison />
        </section>
        <section id="testimonios" className="scroll-mt-32">
          <Testimonials />
        </section>
        <CTASection />
        <section id="faq" className="scroll-mt-32">
          <FAQ />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;