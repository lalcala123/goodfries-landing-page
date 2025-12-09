import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading title="Preguntas Frecuentes" subtitle="Resolvemos tus dudas para que compres con confianza." />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-[#1A1A1A] rounded-xl border transition-all duration-300 ${
                openIndex === idx ? 'border-brand-gold shadow-lg shadow-brand-gold/5' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-brand-gold/50 rounded-xl"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className={`text-lg font-bold ${openIndex === idx ? 'text-brand-gold' : 'text-white'}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full ${openIndex === idx ? 'bg-brand-gold/20' : 'bg-white/10'}`}>
                    {openIndex === idx ? (
                    <Minus className="text-brand-gold flex-shrink-0" size={20} aria-hidden="true" />
                    ) : (
                    <Plus className="text-gray-400 flex-shrink-0" size={20} aria-hidden="true" />
                    )}
                </div>
              </button>
              
              <div 
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-dashed border-white/10 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;