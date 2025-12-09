import React from 'react';
import { FEATURES } from '../constants';
import SectionHeading from './SectionHeading';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image: Origen / Tierra */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop" 
          alt="Tierras de cultivo de papa premium" 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="¿Por qué Goodfries?" 
          subtitle="No solo vendemos insumos, entregamos la base del éxito de tu negocio gastronómico."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-[#111]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-black hover:shadow-brand-gold/20 hover:bg-white/5"
              >
                <div className="w-16 h-16 bg-brand-violet/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                  <Icon size={32} className="text-brand-gold group-hover:text-brand-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-brand-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;