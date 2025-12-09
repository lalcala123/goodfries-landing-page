import React from 'react';
import Button from './Button';
import { Clock } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image: Papas fritas doradas / Apetito */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1573080496987-a199f8cd4058?q=80&w=2070&auto=format&fit=crop" 
          alt="Papas fritas crocantes pollo a la brasa" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradiente violeta/negro para marca sobre la comida */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-violet/90 to-brand-violet/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-4 py-2 rounded-full font-bold mb-8 animate-bounce shadow-lg shadow-brand-gold/30">
          <Clock size={20} />
          <span>¡Stock limitado por alta demanda!</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-xl">
          ¿Listo para elevar el nivel de tu negocio?
        </h2>
        
        <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md font-medium">
          No dejes pasar la oportunidad de trabajar con los mejores insumos del mercado. Agenda tu primer pedido hoy y recibe un descuento especial de bienvenida.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="gold" className="text-lg px-12 py-5 shadow-2xl">
            ¡Quiero mi descuento ahora!
          </Button>
        </div>
        
        <p className="mt-6 text-sm text-white/80 font-medium">
          *Atención inmediata vía WhatsApp. Envíos a todo Lima y provincias.
        </p>
      </div>
    </section>
  );
};

export default CTASection;