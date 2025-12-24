"use client";
import React, { useState } from 'react';
import { ChevronDown, Search, Flame, Beaker, Shield, Activity, Settings, Users, Award, BookOpen, Globe, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA STRUCTURE ---
const menuData = {
  products: [
    "Calorimetry (Heat Release)", "Fire Resistance", "Flammability", 
    "Glow Wire & Needle Flame", "Ignitability & Propagation", "Melt Flow & Viscosity",
    "Oxygen Index (LOI)", "Smoke Density & Opacity", "Thermal Deflection",
    "Thermal Conductivity", "Toxicity & Gas Analysis", "Weathering & Aging"
  ],
  solutions: {
    industries: ["Mobility", "Infrastructure & Construction", "Electrical & Electronics", "Protective & Safety Gear", "Materials Manufacturing", "Research & Compliance"],
    materials: ["Plastics & Polymers", "Textiles & Fabrics", "Cellular Materials (Foams)", "Electrical Cables & Wires", "Composites", "Rubber & Elastomers"],
    standards: ["ASTM", "ISO", "Other Global Standards"],
    types: ["Flammability & Ignitability", "Thermal Properties", "Heat Release", "Smoke & Toxicity", "Fire Resistance"]
  },
  services: ["Installation & Commissioning", "Calibration Services (NABL)", "Remote Software Support"],
  company: ["About Us", "History", "Careers", "Certifications", "Facility Tour", "Contact"]
};

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <nav className="fixed w-full z-50 bg-neutral-950 border-b border-white/10 text-white font-sans" onMouseLeave={() => setActiveTab(null)}>
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center font-bold text-xl">T</div>
          <span className="text-2xl font-black tracking-tighter uppercase">TestOrbit</span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Products', 'Testing Solutions', 'Services', 'Company'].map((item) => (
            <button 
              key={item}
              onMouseEnter={() => setActiveTab(item)}
              className="group flex items-center space-x-1 py-7 text-sm font-semibold uppercase tracking-widest hover:text-red-500 transition"
            >
              <span>{item}</span>
              <ChevronDown size={14} className={`transition-transform ${activeTab === item ? 'rotate-180' : ''}`} />
            </button>
          ))}
          <a href="#" className="text-sm font-semibold uppercase tracking-widest hover:text-red-500">FAQ's</a>
        </div>

        {/* SEARCH BOX */}
        <div className="relative flex items-center">
          <input type="text" placeholder="Search Standards (ASTM, ISO)..." className="bg-white/5 border border-white/20 rounded-full py-2 px-10 text-xs w-64 focus:w-80 transition-all outline-none focus:border-red-600" />
          <Search className="absolute left-3 text-white/40" size={16} />
        </div>
      </div>

      {/* DYNAMIC MEGA MENU PANEL */}
      <AnimatePresence>
        {activeTab && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
            className="absolute left-0 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl"
          >
            <div className="max-w-[1440px] mx-auto p-12">
              
              {/* Products View */}
              {activeTab === 'Products' && (
                <div className="grid grid-cols-4 gap-y-4 gap-x-8">
                  {menuData.products.map(p => (
                    <a key={p} href="#" className="text-neutral-400 hover:text-white text-sm flex items-center space-x-2 group">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition" />
                      <span>{p}</span>
                    </a>
                  ))}
                </div>
              )}

              {/* Testing Solutions View */}
              {activeTab === 'Testing Solutions' && (
                <div className="grid grid-cols-4 gap-10">
                  <div>
                    <h3 className="text-red-600 font-bold text-xs uppercase mb-4 flex items-center"><Globe size={14} className="mr-2"/> By Industry</h3>
                    {menuData.solutions.industries.map(i => <a key={i} href="#" className="block py-1 text-sm text-neutral-400 hover:text-white">{i}</a>)}
                  </div>
                  <div>
                    <h3 className="text-red-600 font-bold text-xs uppercase mb-4 flex items-center"><Beaker size={14} className="mr-2"/> By Material</h3>
                    {menuData.solutions.materials.map(m => <a key={m} href="#" className="block py-1 text-sm text-neutral-400 hover:text-white">{m}</a>)}
                  </div>
                  <div>
                    <h3 className="text-red-600 font-bold text-xs uppercase mb-4 flex items-center"><Award size={14} className="mr-2"/> By Standard</h3>
                    {menuData.solutions.standards.map(s => <a key={s} href="#" className="block py-1 text-sm text-neutral-400 hover:text-white">{s}</a>)}
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-white font-bold text-sm mb-2">Need a Custom Solution?</h3>
                    <p className="text-neutral-400 text-xs mb-4">Our engineers design bespoke fire testing rigs for unique requirements.</p>
                    <button className="bg-red-600 px-4 py-2 text-xs font-bold rounded">Inquire Now</button>
                  </div>
                </div>
              )}

              {/* Company/Services View */}
              {(activeTab === 'Services' || activeTab === 'Company') && (
                <div className="flex space-x-20">
                    {(activeTab === 'Services' ? menuData.services : menuData.company).map(item => (
                        <a key={item} href="#" className="text-xl font-light text-neutral-400 hover:text-white hover:translate-x-2 transition-transform inline-block">
                           {item}
                        </a>
                    ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}