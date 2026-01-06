import React, { useState } from 'react';
import { Star, CheckCircle, MapPin, Phone, Mail, Instagram, Facebook, Menu, X } from 'lucide-react';

const EnhancedHomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote requested:', formData);
    alert('Thank you! Our representative will contact your restaurant shortly.');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* --- Navigation --- */}
      <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Andean<span className="text-[#D4AF37]">Ember</span></span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#products" className="hover:text-[#D4AF37] transition-colors">Products</a>
            <a href="#testimonials" className="hover:text-[#D4AF37] transition-colors">Chef Community</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
        {/* Background Overlay (Add your image URL here) */}
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80" 
            alt="Peruvian Potatoes" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase mb-4 block">Premium B2B Supply</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              The Soul of the Andes, <br />
              <span className="text-[#D4AF37]">Delivered to Your Kitchen.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Sourcing rare native potatoes and artisanal charcoal for world-class restaurants. Elevate your menu with authentic Peruvian heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF6B35] hover:bg-[#e85a2a] text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105">
                Ready to upgrade your menu?
              </button>
              <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold text-lg transition-all">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
      <section id="testimonials" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by the Chef Community</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Ricardo Lira",
                restaurant: "Mistura Heights, Lima",
                quote: "The consistency of the charcoal heat is unmatched. It gives our 'Pollo a la Brasa' that authentic smokiness we couldn't find elsewhere.",
                image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80"
              },
              {
                name: "Chef Elena Santoro",
                restaurant: "Andean Soul, NYC",
                quote: "Our patrons noticed the difference immediately. The Huayro and Amarilla varieties arrive fresh, perfectly sized, and packed with flavor.",
                image: "https://images.unsplash.com/photo-1577214459173-9c8a586230cc?auto=format&fit=crop&q=80"
              },
              {
                name: "Chef Marco Valdivia",
                restaurant: "Summit Grill, Cusco",
                quote: "Finally, a supplier that understands the technical needs of a high-volume kitchen. Reliable logistics and superior product quality.",
                image: "https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&q=80"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 shadow-xl rounded-xl hover:border-[#D4AF37] transition-all">
                <div className="flex text-[#D4AF37] mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#D4AF37" />)}
                </div>
                <p className="italic text-gray-700 mb-6 font-medium">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover grayscale" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-[#D4AF37] uppercase tracking-tighter">{testimonial.restaurant}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Inline Quote Form Section --- */}
      <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#D4AF37]/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-2xl border border-[#D4AF37]/20">
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2">Request Wholesale Pricing</h3>
              <p className="text-gray-400">Complete the form below and receive our seasonal catalog within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-4 gap-6 items-end">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Restaurant Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Gaston's Bistro"
                  className="w-full bg-white text-black p-4 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="chef@restaurant.com"
                  className="w-full bg-white text-black p-4 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+51 987 654 321"
                  className="w-full bg-white text-black p-4 rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <button 
                  type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#e85a2a] text-white font-bold py-4 rounded uppercase tracking-widest transition-colors shadow-lg"
                >
                  Get Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* --- Optimized Footer --- */}
      <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">P</span>
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">Andean<span className="text-[#D4AF37]">Ember</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium wholesale suppliers of native Peruvian potatoes and artisanal charcoal. Serving the culinary elite since 2015.
            </p>
            <div className="flex gap-4">
              <Instagram className="cursor-pointer hover:text-[#D4AF37]" size={20} />
              <Facebook className="cursor-pointer hover:text-[#D4AF37]" size={20} />
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Products</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Native Potatoes (Papas Nativas)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisanal Quebracho Charcoal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hardwood Leña</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seasonal Andean Tubers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability Practice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Farming Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics & Delivery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-[#D4AF37]" /> Lima, Peru | Miami, FL</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-[#D4AF37]" /> +51 (1) 455-8920</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#D4AF37]" /> b2b@andeanember.com</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Andean Ember S.A.C. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <
