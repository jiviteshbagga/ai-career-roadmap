"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Shield, Activity, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-industrial-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Animated Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-industrial-accent/10 blur-[120px] rounded-full -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <span className="text-industrial-accent font-mono tracking-widest uppercase text-sm mb-4 block">
            Next-Gen Fire Testing Solutions
          </span>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
            Precision for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-accent to-orange-500">
              Thermal Excellence
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building on the 30-year legacy of <strong>Asian Test Equipment</strong>, Testorbit 
            delivers advanced instrumentation for the most demanding fire safety standards.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-industrial-accent hover:bg-rose-700 px-8 py-4 rounded-md font-bold transition flex items-center gap-2">
              Explore Products <ArrowRight size={20} />
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-md font-bold transition">
              Technical Standards
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. QUICK STATS / TRUST BAR */}
      <section className="py-12 border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">30+ Years</h3>
            <p className="text-white/50 text-sm uppercase tracking-wider">Engineering Legacy</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">ASTM/ISO</h3>
            <p className="text-white/50 text-sm uppercase tracking-wider">Global Compliance</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-white/50 text-sm uppercase tracking-wider">Remote Support</p>
          </div>
        </div>
      </section>

      {/* 3. CORE CATEGORIES PREVIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Core Competencies</h2>
            <p className="text-white/50">Specialized equipment for flammability and heat release analysis.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard title="Calorimetry" icon={<Flame className="text-industrial-accent" size={32} />} />
          <CategoryCard title="Smoke Density" icon={<Shield className="text-industrial-accent" size={32} />} />
          <CategoryCard title="Flammability" icon={<Activity className="text-industrial-accent" size={32} />} />
        </div>
      </section>
    </main>
  );
}

// Sub-component for clean code
function CategoryCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="p-8 bg-white/5 border border-white/10 rounded-xl hover:border-industrial-accent/50 transition cursor-pointer"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/50 text-sm">Advanced instrumentation for precision testing in {title.toLowerCase()}.</p>
    </motion.div>
  );
}