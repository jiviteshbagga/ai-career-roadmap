"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, Flame, Shield, Activity, Beaker } from 'lucide-react';

const categories = [
  { name: "Calorimetry", icon: <Flame size={18} /> },
  { name: "Fire Resistance", icon: <Shield size={18} /> },
  { name: "Flammability", icon: <Activity size={18} /> },
  { name: "Glow Wire", icon: <Beaker size={18} /> },
  { name: "Smoke Density", icon: <Shield size={18} /> },
  { name: "Toxicity Analysis", icon: <Activity size={18} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-industrial-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          TESTORBIT<span className="text-industrial-accent">.</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/70">
          <div 
            className="relative group"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-white transition py-8">
              <span>Products</span>
              <ChevronDown size={14} />
            </button>

            {/* MEGA MENU DROP DOWN */}
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full -left-20 w-[600px] bg-industrial-800 border border-white/10 p-8 grid grid-cols-2 gap-6 rounded-xl shadow-2xl"
                >
                  {categories.map((cat) => (
                    <Link key={cat.name} href={`/products/${cat.name.toLowerCase().replace(/ /g, '-')}`} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 group transition">
                      <div className="text-industrial-accent group-hover:scale-110 transition">{cat.icon}</div>
                      <span className="text-white group-hover:text-industrial-accent">{cat.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/solutions" className="hover:text-white transition">Testing Solutions</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
        </div>

        {/* SEARCH & MOBILE TOGGLE */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
            <Search size={16} className="text-white/40 mr-2" />
            <input type="text" placeholder="Search Standards..." className="bg-transparent outline-none text-xs w-32 focus:w-48 transition-all" />
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}