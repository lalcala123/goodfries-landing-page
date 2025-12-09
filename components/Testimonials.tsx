import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, Share2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  const handleShare = async (t: typeof TESTIMONIALS[0]) => {
    const shareData = {
      title: 'GoodFries Testimonio',
      text: `"${t.text}" — ${t.name}, ${t.role}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        alert('¡Testimonio copiado al portapapeles!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image: Restaurante VIP */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
          alt="Ambiente restaurante de lujo" 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-black/85"></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-violet/10 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Lo que dicen nuestros clientes" subtitle="La confianza de los mejores chefs y empresarios del país." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-[#111]/90 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-xl relative hover:-translate-y-2 transition-all duration-300 hover:border-brand-gold/50 hover:bg-white/5 hover:shadow-2xl hover:shadow-brand-gold/10 flex flex-col h-full">
              <div className="absolute -top-4 -right-4 bg-brand-gold w-12 h-12 rounded-full flex items-center justify-center text-brand-black shadow-lg shadow-brand-gold/20" aria-hidden="true">
                 <Quote size={20} />
              </div>
              
              <div className="flex gap-1 mb-6" aria-label={`Calificación: ${t.rating} de 5 estrellas`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-brand-gold fill-brand-gold" aria-hidden="true" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 italic leading-relaxed flex-grow">"{t.text}"</p>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-violet to-brand-violetHover flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0" aria-hidden="true">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-tight">{t.name}</h4>
                    <p className="text-sm text-brand-gold font-medium">{t.role}</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => handleShare(t)}
                  className="text-gray-500 hover:text-brand-gold transition-colors p-2 rounded-full hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                  aria-label="Compartir testimonio"
                  title="Compartir"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;