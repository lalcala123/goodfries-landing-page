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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <img 
              src={LOGO_URL} 
              alt="GoodFries Logo" 
              className="h-16 w-auto mb-6 object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicados a proveer la mejor selección de papas peruanas y carbón de alta gama para negocios exigentes.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-brand-gold cursor-pointer transition-colors">Papa Amarilla Tumbay</a></li>
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-brand-gold cursor-pointer transition-colors">Papa Huayro</a></li>
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-brand-gold cursor-pointer transition-colors">Carbón Vegetal Premium</a></li>
              <li><a href="#productos" onClick={scrollToSection('productos')} className="hover:text-brand-gold cursor-pointer transition-colors">Packs para Restaurantes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#beneficios" onClick={scrollToSection('beneficios')} className="hover:text-brand-gold cursor-pointer transition-colors">Nosotros</a></li>
              <li><a href="#testimonios" onClick={scrollToSection('testimonios')} className="hover:text-brand-gold cursor-pointer transition-colors">Testimonios</a></li>
              <li><a href="#faq" onClick={scrollToSection('faq')} className="hover:text-brand-gold cursor-pointer transition-colors">Preguntas Frecuentes</a></li>
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold cursor-pointer transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-violet transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-violet transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-violet transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 GOODFRIES. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;