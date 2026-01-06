import React, { useState } from 'react';

// --- Types & Interfaces ---

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  currency: string;
  imageUrl?: string;
  specifications: ProductSpecification[];
  benefits: ProductBenefit[];
  usageSteps: string[];
}

interface ProductDetailProps {
  product?: ProductData;
  onOrderClick?: (productId: string) => void;
}

// --- Default Data (Fallback) ---

const defaultProduct: ProductData = {
  id: 'char-potato-001',
  name: 'TerraChar Potato Booster',
  tagline: 'Premium Biochar Soil Amendment for High-Yield Crops',
  description:
    'TerraChar Potato Booster is a specialized agricultural charcoal blend designed specifically for tuber cultivation. By improving soil aeration, water retention, and nutrient absorption, our biochar ensures your potatoes grow larger, healthier, and more resistant to common soil-borne diseases. Sourced from sustainable organic biomass.',
  price: '24.99',
  currency: '$',
  specifications: [
    { label: 'Carbon Content', value: '> 85%' },
    { label: 'Particle Size', value: '2mm - 5mm (Granular)' },
    { label: 'pH Level', value: '7.5 (Neutralizing)' },
    { label: 'Bag Weight', value: '20kg (44lbs)' },
    { label: 'Certifications', value: 'OMRI Listed, Organic' },
  ],
  benefits: [
    {
      title: 'Water Retention',
      description: 'Acts like a sponge, holding up to 5x its weight in water to reduce irrigation needs.',
    },
    {
      title: 'Nutrient Leeching',
      description: 'Prevents fertilizer runoff by binding nutrients in the root zone for plant uptake.',
    },
    {
      title: 'Soil Aeration',
      description: 'Prevents soil compaction, allowing potato tubers to expand freely and evenly.',
    },
    {
      title: 'Microbial Life',
      description: 'Provides a habitat for beneficial soil fungi and bacteria that protect against blight.',
    },
  ],
  usageSteps: [
    'Prepare the soil by tilling to a depth of 8-10 inches.',
    'Apply 1kg of TerraChar per 10 square meters of planting row.',
    'Mix thoroughly into the top 6 inches of soil before planting.',
    'Plant seed potatoes and water heavily to activate the biochar.',
  ],
};

// --- Sub-components (Icons) ---

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const LeafIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const BagIcon = () => (
  <svg className="w-24 h-24 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

// --- Main Component ---

const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product = defaultProduct, 
  onOrderClick 
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'usage'>('details');

  const handleOrder = () => {
    if (onOrderClick) {
      onOrderClick(product.id);
    } else {
      console.log(`Order initiated for ${product.name}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-stone-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Top Navigation placeholder */}
        <nav className="flex mb-8 text-sm text-stone-500 animate-fade-in-down">
          <span className="hover:text-green-700 cursor-pointer transition-colors">Products</span>
          <span className="mx-2">/</span>
          <span className="hover:text-green-700 cursor-pointer transition-colors">Soil Amendments</span>
          <span className="mx-2">/</span>
          <span className="text-stone-800 font-medium">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          
          {/* Left Column: Image & Highlights */}
          <div className="flex flex-col gap-6 animate-slide-in-left">
            {/* Main Product Image Card */}
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center shadow-lg overflow-hidden relative group">
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <div className="text-center p-8">
                    <div className="mx-auto flex items-center justify-center mb-4">
                        <BagIcon />
                    </div>
                    <span className="text-stone-500 text-lg font-medium tracking-wide">Product Image Placeholder</span>
                </div>
              )}
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-green-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                Organic Certified
              </div>
            </div>

            {/* Key Specs Grid (Small Cards) */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {product.specifications.slice(0, 3).map((spec, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                  <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">{spec.label}</p>
                  <p className="mt-1 text-lg font-bold text-green-800">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="mt-10 px-2 sm:px-0 sm:mt-16 lg:mt-0 animate-slide-in-right">
            
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-green-700 font-medium italic">
                {product.tagline}
              </p>
            </div>

            {/* Pricing & CTA */}
            <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
                <div className="flex items-end gap-2 mb-4">
                    <span className="text-4xl font-bold text-stone-900">{product.currency}{product.price}</span>
                    <span className="text-stone-500 mb-1">/ bag</span>
                </div>
                <div className="flex gap-4 flex-col sm:flex-row">
                    <button 
                        onClick={handleOrder}
                        className="flex-1 bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-xl font-bold text-lg shadow-lg shadow-green-700/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
                    >
                        Request Quote / Order
                    </button>
                    <button className="flex-none px-6 py-3.5 rounded-xl font-semibold text-green-700 border-2 border-green-700 hover:bg-green-50 transition-colors">
                        Download Datasheet
                    </button>
                </div>
            </div>

            {/* Tabs for Details vs Usage */}
            <div className="border-b border-stone-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`
                    whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${activeTab === 'details' 
                      ? 'border-green-600 text-green-700' 
                      : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'}
                  `}
                >
                  Description & Benefits
                </button>
                <button
                  onClick={() => setActiveTab('usage')}
                  className={`
                    whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${activeTab === 'usage' 
                      ? 'border-green-600 text-green-700' 
                      : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'}
                  `}
                >
                  Usage Instructions
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
                {activeTab === 'details' ? (
                    <div className="space-y-6 animate-fade-in">
                        <div className="prose prose-stone text-stone-600">
                            <p className="leading-relaxed">{product.description}</p>
                        </div>
                        
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-stone-900 mb-4">Why use {product.name}?</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-3 items-start">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                            {benefit.icon ? benefit.icon : <LeafIcon />}
                                            <div className="absolute w-4 h-4 text-green-700">
                                              {/* Simple checkmark if no icon provided in data */}
                                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-stone-800 text-sm">{benefit.title}</h4>
                                            <p className="text-sm text-stone-500 leading-snug">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 pt-6 border-t border-stone-200">
                            <h3 className="text-sm font-bold uppercase text-stone-400 mb-3">Technical Specifications</h3>
                            <div className="bg-stone-100 rounded-lg p-4">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                    {product.specifications.map((spec, idx) => (
                                        <div key={idx} className="sm:col-span-1 flex justify-between sm:block border-b sm:border-b-0 border-stone-200 pb-2 sm:pb-0 last:border-0">
                                            <dt className="text-sm font-medium text-stone-500">{spec.label}</dt>
                                            <dd className="mt-1 text-sm text-stone-900 font-semibold">{spec.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-amber-700">
                                        Wear a dust mask and gloves when handling dry charcoal products to prevent inhalation and skin irritation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-stone-900 mb-6">Step-by-Step Application</h3>
                        <div className="relative border-l-2 border-green-200 ml-3 space-y-8 pb-4">
                            {product.usageSteps.map((step, idx) => (
                                <div key={idx} className="relative pl-8">
                                    <span className="absolute -left-[9px] top-0 bg-white ring-4 ring-white rounded-full">
                                         <span className="flex items-center justify-center w-4 h-4 rounded-full bg-green-600 text-[10px] font-bold text-white">
                                             {idx + 1}
                                         </span>
                                    </span>
                                    <p className="text-stone-700 font-medium leading-relaxed bg-white p-3 rounded-lg shadow-sm border border-stone-100">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animations Style Injection (Optional if not in config) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProductDetail;
