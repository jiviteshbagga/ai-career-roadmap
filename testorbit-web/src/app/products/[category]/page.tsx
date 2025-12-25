import React from 'react';
import Navbar from '@/app/components/Navbar';
import { FileText, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

export default function ProductTemplate() {
  // In Phase 3, these details will come from your Admin Panel (CMS)
  const product = {
    name: "Dual Cone Calorimeter",
    model: "TO-CONE-PRO",
    description: "The definitive instrument for measuring heat release rates and smoke production. Fully compliant with ISO 5660 and ASTM E1354.",
    features: ["Oxygen Consumption Calorimetry", "Laser Smoke Obscuration", "Mass Loss Measurement"],
    specs: [
      { label: "Heat Flux Range", value: "0 - 100 kW/m²" },
      { label: "Oxygen Resolution", value: "0.001%" },
      { label: "Specimen Size", value: "100mm x 100mm" }
    ]
  };

  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      <Navbar />
      
      <div className="max-w-[1440px] mx-auto pt-32 pb-20 px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: Product Visuals */}
          <div className="space-y-6">
            <div className="aspect-square bg-white/5 border border-white/10 rounded-xl flex items-center justify-center relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <span className="text-neutral-700 font-black text-8xl italic">TO-PRO</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-white/5 border border-white/10 rounded-lg hover:border-red-600/50 transition-colors cursor-pointer" />
              ))}
            </div>
          </div>

          {/* RIGHT: Technical Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h1 className="text-5xl font-black uppercase italic leading-none mb-2">{product.name}</h1>
              <p className="text-red-600 font-mono font-bold tracking-widest">{product.model}</p>
            </div>

            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {product.features.map(f => (
                <div key={f} className="flex items-center space-x-2 text-sm text-neutral-300">
                  <CheckCircle size={16} className="text-red-600" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Admin-Driven Specs Table */}
            <div className="border border-white/10 rounded-xl overflow-hidden mb-10">
              <div className="bg-white/5 px-6 py-3 font-bold border-b border-white/10 uppercase text-xs tracking-widest">Technical Specifications</div>
              {product.specs.map((spec, i) => (
                <div key={i} className="px-6 py-4 flex justify-between text-sm border-b border-white/5 last:border-0 hover:bg-white/[0.02]">
                  <span className="text-neutral-500">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-red-600 py-4 font-bold uppercase hover:bg-red-700 transition">Request a Quote</button>
              <button className="px-6 border border-white/10 hover:bg-white/5 transition flex items-center">
                <FileText size={20} className="mr-2" /> PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}