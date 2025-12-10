import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { CheckCircle2, Flame } from 'lucide-react';

interface ProductsProps {
  onOpenModal?: () => void;
}

const Products: React.FC<ProductsProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Nuestros Productos Estrella" 
          subtitle="Descubre la diferencia en cada bocado, desde la tierra hasta tu mesa." 
        />

        {/* Product 1: Potatoes */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-32">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-violet rounded-3xl rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000&auto=format&fit=crop" 
              alt="Papas Nativas Premium Peruanas" 
              className="relative w-full rounded-3xl shadow-2xl z-10 border border-white/10 aspect-[4/3] object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Papas Nativas <span className="text-brand-gold">Seleccionadas</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Trabajamos directamente con agricultores en las alturas de los Andes para traerte papas con la textura perfecta para fritura. Crujientes por fuera, suaves por dentro.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Variedades Tumbay, Huayro y Canchán",
                "Lavadas y listas para procesar",
                "Calibre uniforme para cocción pareja",
                "Mínima merma garantizada"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors">
                  <CheckCircle2 className="text-brand-violet" size={24} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="violet" onClick={onOpenModal}>Pedir Muestras</Button>
          </div>
        </div>

        {/* Product 2: Charcoal */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-brand-gold rounded-3xl -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-500 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=800&auto=format&fit=crop" 
              alt="Carbón Vegetal Premium de Algarrobo" 
              className="relative w-full rounded-3xl shadow-2xl z-10 border border-white/10 aspect-[4/3] object-cover"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Carbón Vegetal <span className="text-brand-gold">Premium</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Carbón de algarrobo y maderas duras certificado. Diseñado para profesionales de la brasa que necesitan alto rendimiento calorífico y larga duración.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "100% Algarrobo y maderas duras",
                "Encendido rápido sin chispas",
                "Poder calorífico superior (+4hrs)",
                "Menos humo, más aroma a leña"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-brand-gold/30 transition-colors">
                  <Flame className="text-brand-gold" size={24} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="gold" onClick={onOpenModal}>Cotizar Carbón</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;