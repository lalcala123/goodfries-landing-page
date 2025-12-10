import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  phone: string;
  businessName: string;
  businessType: string;
  monthlyQuantity: string;
  products: string[];
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  monthlyQuantity?: string;
  products?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    businessName: '',
    businessType: '',
    monthlyQuantity: '',
    products: [],
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Animation handling
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200); // Wait for animation
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.phone.trim() || formData.phone.length < 9) {
      newErrors.phone = 'Teléfono válido requerido';
      isValid = false;
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Nombre del negocio requerido';
      isValid = false;
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Selecciona un tipo';
      isValid = false;
    }

    if (!formData.monthlyQuantity) {
      newErrors.monthlyQuantity = 'Selecciona una cantidad';
      isValid = false;
    }

    if (formData.products.length === 0) {
      newErrors.products = 'Selecciona al menos un producto';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckbox = (value: string) => {
    setFormData(prev => {
      const newProducts = prev.products.includes(value)
        ? prev.products.filter(p => p !== value)
        : [...prev.products, value];
      return { ...prev, products: newProducts };
    });
    if (errors.products) setErrors(prev => ({ ...prev, products: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call / Processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Save to LocalStorage
    localStorage.setItem('goodfries_lead', JSON.stringify({
      ...formData,
      date: new Date().toISOString()
    }));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Prepare WhatsApp Message
    const text = `Hola GoodFries, soy *${formData.fullName}* de *${formData.businessName}* (${formData.businessType}).
    
Estoy interesado en: ${formData.products.join(', ')}.
Consumo aproximado: ${formData.monthlyQuantity}.
    
${formData.message ? `Mensaje: ${formData.message}` : ''}
    
Teléfono: ${formData.phone}`;

    const whatsappUrl = `https://wa.me/51998847900?text=${encodeURIComponent(text)}`;

    // Redirect after short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      handleClose();
      setShowSuccess(false);
      setFormData({
        fullName: '', phone: '', businessName: '', businessType: '', monthlyQuantity: '', products: [], message: ''
      });
    }, 2000);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      aria-labelledby="modal-title" 
      role="dialog" 
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className={`relative w-full max-w-[500px] bg-[#0A0A0A] border border-brand-gold/20 rounded-2xl shadow-[0_0_50px_-12px_rgba(212,175,55,0.3)] transform transition-all duration-300 flex flex-col max-h-[90vh] ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 id="modal-title" className="text-2xl font-serif font-bold text-brand-gold">Cotizar Pedido</h2>
            <p className="text-gray-400 text-sm mt-1">Eleva el nivel de tu negocio hoy.</p>
          </div>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 custom-scrollbar">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={48} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Gracias por tu interés!</h3>
              <p className="text-gray-300 mb-6">Te estamos redirigiendo a WhatsApp para finalizar tu atención...</p>
              <Loader2 size={24} className="text-brand-gold animate-spin" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Nombre */}
              <div className="space-y-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Nombre Completo <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`w-full bg-[#1A1A1A] border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all`}
                  />
                  {errors.fullName && <AlertCircle size={18} className="absolute right-3 top-3.5 text-red-500" />}
                </div>
                {errors.fullName && <p className="text-xs text-red-400">{errors.fullName}</p>}
              </div>

              {/* Teléfono */}
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">WhatsApp / Teléfono <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                    className={`w-full bg-[#1A1A1A] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
              </div>

              {/* Empresa */}
              <div className="space-y-1">
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300">Nombre de Empresa <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Tu restaurante o pollería"
                  className={`w-full bg-[#1A1A1A] border ${errors.businessName ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-all`}
                />
                {errors.businessName && <p className="text-xs text-red-400">{errors.businessName}</p>}
              </div>

              {/* Tipo y Cantidad (Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-300">Tipo de Negocio <span className="text-red-500">*</span></label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full bg-[#1A1A1A] border ${errors.businessType ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-all appearance-none`}
                  >
                    <option value="">Seleccionar</option>
                    <option value="Pollería">Pollería</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Parrilla">Parrilla</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Distribuidora">Distribuidora</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="monthlyQuantity" className="block text-sm font-medium text-gray-300">Consumo Mensual <span className="text-red-500">*</span></label>
                  <select
                    id="monthlyQuantity"
                    name="monthlyQuantity"
                    value={formData.monthlyQuantity}
                    onChange={handleChange}
                    className={`w-full bg-[#1A1A1A] border ${errors.monthlyQuantity ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold transition-all appearance-none`}
                  >
                    <option value="">Seleccionar</option>
                    <option value="Menos de 50 kg">Menos de 50 kg</option>
                    <option value="50 - 100 kg">50 - 100 kg</option>
                    <option value="100 - 250 kg">100 - 250 kg</option>
                    <option value="250 - 500 kg">250 - 500 kg</option>
                    <option value="+500 kg">+500 kg</option>
                  </select>
                </div>
              </div>

              {/* Productos de Interés */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Interesado en <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-4">
                  {['Papas Nativas', 'Carbón Vegetal', 'Ambos'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.products.includes(option) ? 'bg-brand-gold border-brand-gold' : 'border-gray-500 group-hover:border-brand-gold'}`}>
                        {formData.products.includes(option) && <CheckCircle2 size={14} className="text-black" />}
                      </div>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={formData.products.includes(option)}
                        onChange={() => handleCheckbox(option)}
                      />
                      <span className={`text-sm ${formData.products.includes(option) ? 'text-white' : 'text-gray-400'}`}>{option}</span>
                    </label>
                  ))}
                </div>
                {errors.products && <p className="text-xs text-red-400">{errors.products}</p>}
              </div>

              {/* Mensaje */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje Adicional</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos detalles específicos de tu pedido..."
                  rows={3}
                  className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-lg shadow-lg hover:bg-brand-goldHover hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Procesando...
                  </>
                ) : (
                  'ENVIAR SOLICITUD'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
