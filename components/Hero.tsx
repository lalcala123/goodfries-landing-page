import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Flame } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Hero: React.FC = () => {
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
          {/* Left Column: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-brand-violet/20 border border-brand-violet/30 rounded-full px-4 py-1.5 mb-6">
              <Flame size={16} className="text-brand-gold animate-pulse" />
              <span className="text-brand-gold text-sm font-bold tracking-wide uppercase">Calidad Premium Garantizada</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight mb-6">
              <span className="text-white">La Mejor Papa Peruana</span><br />
              <span className="gold-gradient-text">para tu Negocio</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Elevamos el estándar de tu pollería o restaurante con papas peruanas seleccionadas y carbón de algarrobo de alto rendimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="gold" onClick={scrollToProducts} className="group">
                Ver Catálogo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button variant="outline">
                Contactar Ventas
              </Button>
            </div>
          </div>

          {/* Right Column: Logo Principal (Reemplaza Mascota) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            
            <img 
              src={LOGO_URL} 
              alt="GoodFries Logo Principal" 
              className="w-full max-w-sm md:max-w-md object-contain animate-float drop-shadow-2xl"
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