import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { WHATSAPP_LINK, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Grid de 3 columnas para mejor distribución */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Marca y Redes Sociales */}
          <div className="col-span-1 flex flex-col items-start">
            <img 
              src={LOGO_URL} 
              alt="GoodFries Logo" 
              className="h-16 w-auto mb-6 object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Dedicados a proveer la mejor selección de papas peruanas y carbón de alta gama para negocios exigentes.
            </p>
            
            {/* Redes Sociales - Estilo Premium Dorado */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Goodfries/61584860310302/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                aria-label="Síguenos en Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Productos */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg tracking-wide border-b border-brand-gold/30 pb-2 inline-block">Productos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Papa Amarilla Tumbay</a></li>
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Papa Huayro</a></li>
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Carbón Vegetal Premium</a></li>
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Packs para Restaurantes</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Empresa */}
          <div>
            <h4 className="font-bold text-white mb-6 text-lg tracking-wide border-b border-brand-gold/30 pb-2 inline-block">Empresa</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#beneficios" onClick={scrollToSection('beneficios')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Nosotros</a></li>
              <li><a href="#testimonios" onClick={scrollToSection('testimonios')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Testimonios</a></li>
              <li><a href="#faq" onClick={scrollToSection('faq')} className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Preguntas Frecuentes</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] cursor-pointer transition-colors block py-1 transform hover:translate-x-1 duration-200">Contacto</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 GOODFRIES. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;