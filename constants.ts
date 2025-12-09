import { Star, Truck, ShieldCheck, Flame, ChefHat, Leaf } from 'lucide-react';

// URL del Logo oficial proporcionado
export const LOGO_URL = "https://i.postimg.cc/JzzybQsf/GOOFIRESl-OGO.png"; 

// URL de la Mascota (Papita Feliz)
export const MASCOT_URL = "https://i.postimg.cc/y8HGsfkm/papita.png";

export const WHATSAPP_LINK = "https://wa.me/51998847900";
export const WHATSAPP_NUMBER = "+51 998 847 900";

export const TESTIMONIALS = [
  {
    name: "Carlos Méndez",
    role: "Chef Ejecutivo, Restaurante El Fuego",
    text: "La calidad de las papas Goodfries es inigualable. La textura crujiente y el sabor auténtico han elevado nuestros platos. Y el carbón dura el doble que otras marcas.",
    rating: 5
  },
  {
    name: "Ana Sotomayor",
    role: "Dueña, Pollería La Brasa Dorada",
    text: "Desde que cambiamos a Goodfries, nuestros clientes no dejan de elogiar las papas fritas. El servicio es puntual y profesional. Un socio estratégico indispensable.",
    rating: 5
  },
  {
    name: "Roberto Campos",
    role: "Maestro Parrillero",
    text: "El carbón premium de Goodfries prende rápido, mantiene el calor estable y deja un aroma increíble en las carnes. No uso otra cosa.",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "¿Cuál es el pedido mínimo para envío gratuito?",
    answer: "Ofrecemos envío gratuito en Lima Metropolitana para pedidos superiores a 50kg de papa o 20 bolsas de carbón. Para pedidos menores o provincias, consulta nuestras tarifas preferenciales."
  },
  {
    question: "¿Qué tipo de papa ofrecen?",
    answer: "Nos especializamos en Papa Amarilla Tumbay y Papa Huayro de selección premium, cultivadas en las mejores tierras altoandinas, garantizando calibre y sabor superior."
  },
  {
    question: "¿El carbón es de madera dura?",
    answer: "Sí, nuestro carbón es 100% vegetal de algarrobo y maderas duras certificadas, lo que asegura una brasa de larga duración y alto poder calorífico sin chispas molestas."
  },
  {
    question: "¿Atienden a restaurantes y negocios?",
    answer: "¡Por supuesto! Somos proveedores principales de cadenas de restaurantes, pollerías y hoteles. Tenemos precios especiales por volumen y programación de entregas semanales."
  },
  {
    question: "¿Cómo puedo realizar un pedido?",
    answer: "Es muy sencillo. Solo haz clic en cualquiera de los botones de WhatsApp en esta página, y nuestro equipo de ventas te atenderá de inmediato para coordinar tu pedido y entrega."
  }
];

export const FEATURES = [
  {
    title: "Calidad Premium Garantizada",
    description: "Selección manual rigurosa para asegurar cero merma y máximo rendimiento en tu cocina.",
    icon: ShieldCheck
  },
  {
    title: "Sabor Auténtico",
    description: "Papas cultivadas en altura y carbón de leña dura que potencian el sabor de tus platillos.",
    icon: ChefHat
  },
  {
    title: "Eco-Amigable",
    description: "Procesos sostenibles y carbón de fuentes responsables que cuidan el medio ambiente.",
    icon: Leaf
  },
  {
    title: "Alto Rendimiento",
    description: "Nuestro carbón dura hasta un 40% más que las marcas convencionales del mercado.",
    icon: Flame
  }
];

export const COMPARISON_DATA = [
  { feature: "Selección Manual", goodfries: true, others: false },
  { feature: "Calibre Uniforme", goodfries: true, others: false },
  { feature: "Duración de Braza (+3hrs)", goodfries: true, others: false },
  { feature: "Lavado y Cepillado", goodfries: true, others: false },
  { feature: "Atención 24/7", goodfries: true, others: false },
  { feature: "Garantía de Satisfacción", goodfries: true, others: false },
];