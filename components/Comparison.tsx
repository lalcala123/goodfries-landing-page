import React from 'react';
import SectionHeading from './SectionHeading';
import { COMPARISON_DATA } from '../constants';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#111]">
      <div className="container mx-auto px-4">
        <SectionHeading title="Goodfries vs Otros" subtitle="La diferencia está en los detalles y la consistencia." />

        <div className="max-w-5xl mx-auto overflow-x-auto shadow-2xl rounded-2xl bg-[#1A1A1A] border border-white/10">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th scope="col" className="p-6 text-left text-xl font-bold text-white bg-black/40 border-b-2 border-brand-violet/20 w-1/3">Característica</th>
                <th scope="col" className="p-6 text-center text-xl font-bold text-white bg-brand-violet w-1/3 shadow-lg relative z-10">GOODFRIES</th>
                <th scope="col" className="p-6 text-center text-xl font-bold text-gray-200 bg-white/10 border-b-2 border-white/10 w-1/3">Otros</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-gray-100 font-semibold text-lg">{row.feature}</td>
                  
                  {/* Goodfries Column - Highlighted */}
                  <td className="p-6 text-center bg-brand-violet/20 border-x border-brand-violet/30 relative">
                    <div className="flex justify-center" aria-label="Sí, incluye esta característica">
                      <div className="w-10 h-10 rounded-full bg-brand-violet flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.5)] transform hover:scale-110 transition-transform">
                        <Check size={24} strokeWidth={3} aria-hidden="true" />
                      </div>
                    </div>
                  </td>
                  
                  {/* Others Column - Dimmed but visible */}
                  <td className="p-6 text-center bg-white/5">
                    <div className="flex justify-center" aria-label={row.others ? "Sí, incluye esta característica" : "No incluye esta característica"}>
                      {row.others ? (
                        <Check size={28} className="text-gray-400" aria-hidden="true" />
                      ) : (
                        <X size={28} className="text-red-500" aria-hidden="true" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;