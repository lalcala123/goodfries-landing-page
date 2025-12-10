import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Flame, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { MASCOT_URL } from '../constants';

interface HeroProps {
  onOpenModal?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Estado para manejar errores de carga de imagen (fallback)
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image - Pollo a la Brasa */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2070&auto=format&fit=crop" 
          alt="Pollo a la Brasa Peruano" 
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-up flex flex-col items-center md:items-start">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-violet/20 border border-brand-violet/30 rounded-full px-4 py-1.5 mb-8">
              <Flame size={16} className="text-brand-gold animate-pulse" />
              <span className="text-brand-gold text-sm font-bold tracking-wide uppercase">Calidad Premium Garantizada</span>
            </div>

            {/* Title - RESTRUCTURED FOR MAX IMPACT & SINGLE LINE FIX */}
            <h1 className="mb-8 flex flex-col items-center md:items-start w-full">
              {/* Brand Name - Massive & Single Line Forced */}
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter gold-gradient-text mb-2 drop-shadow-2xl leading-none transform -ml-1 whitespace-nowrap">
                GOOD FRIES
              </span>
              
              {/* Slogan - Large & White */}
              <span className="block text-2xl sm:text-3xl md:text-5xl font-sans font-bold text-white leading-tight drop-shadow-lg">
                La Mejor Papa Peruana
                <span className="block mt-1 text-white/90">para tu Negocio</span>
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Elevamos el estándar de tu pollería o restaurante con papas peruanas seleccionadas y carbón de algarrobo de alto rendimiento.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
              <Button variant="gold" onClick={scrollToProducts} className="group text-lg px-10">
                Ver Catálogo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline" className="text-lg" onClick={onOpenModal}>
                Contactar Ventas
              </Button>
            </div>

            {/* Redes Sociales - Hero Section */}
            <div className="flex items-center gap-5 mt-10 justify-center md:justify-start w-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://www.facebook.com/people/Goodfries/61584860310302/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Mascota 3D Principal */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-12 md:mt-0">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            
            <img 
              src={MASCOT_URL} 
              alt="GoodFries Mascota Premium" 
              className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain animate-float drop-shadow-2xl filter"
              onError={() => setImgError(true)}
              style={{ display: imgError ? 'none' : 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;