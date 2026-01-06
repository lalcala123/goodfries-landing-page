import React, { useState, useMemo } from 'react';
import { ChevronDown, Plus, Minus, Send } from 'lucide-react';

const PRODUCTS = [
  { id: 'papas', name: 'Papas Nativas Seleccionadas', price: 2500, unit: 'kg' },
  { id: 'carbon', name: 'Carbón Vegetal Premium', price: 1800, unit: 'bolsa' }
];

const TAX_RATE = 0.18;

const QuoteCalculator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>(PRODUCTS[0].id);
  const [quantity, setQuantity] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [businessName, setBusinessName] = useState<string>('');

  const currentProduct = useMemo(() => 
    PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0],
    [selectedProductId]
  );

  const subtotal = currentProduct.price * quantity;
  const taxAmount = subtotal * TAX_RATE;
  const total = subtotal + taxAmount;

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Quote requested: ${quantity} ${currentProduct.unit}s of ${currentProduct.name}\nTotal: S/. ${total.toFixed(2)}`);
  };

  const handleClear = () => {
    setQuantity(1);
    setEmail('');
    setBusinessName('');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#000000] mb-8">Cotizador Interactivo</h1>
        
        <form onSubmit={handleRequestQuote} className="bg-gray-50 p-8 rounded-lg">
          {/* Product Selector */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-[#000000] mb-2">Producto</label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
            >
              {PRODUCTS.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-[#000000] mb-2">
              Cantidad ({currentProduct.unit})
            </label>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 bg-[#D4AF37] text-white rounded hover:bg-[#C49B2E]"
              >
                <Minus size={20} />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="flex-1 p-3 border border-gray-300 rounded-lg text-center"
              />
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 bg-[#D4AF37] text-white rounded hover:bg-[#C49B2E]"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Nombre del negocio"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B35]"
            />
          </div>

          {/* Price Summary */}
          <div className="bg-white p-6 rounded-lg mb-6 border-2 border-[#D4AF37]">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>S/. {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>IGV (18%):</span>
              <span>S/. {taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span className="text-[#FF6B35]">S/. {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-[#FF6B35] text-white py-3 rounded-lg font-bold hover:bg-[#E55A24] flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Solicitar Cotización
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 bg-gray-300 text-[#000000] py-3 rounded-lg font-bold hover:bg-gray-400"
            >
              Limpiar
            </button>
          </div>
        </form>

        {/* Product Specs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-[#000000] mb-4">{product.name}</h3>
              <p className="text-gray-600 text-sm">Premium quality product from Peru. Perfect for restaurants and commercial use.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;
