"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from 'lucide-react';

// Using 'export default' ensures layout.tsx can find this component
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8 text-white/70">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Brand & Legacy */}
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tighter text-white uppercase">
            TESTORBIT<span className="text-red-600">.</span>
          </div>
          <p className="text-sm leading-relaxed">
            Advanced fire and heat testing instrumentation for global safety standards. 
            An innovation-driven venture by <strong>Asian Test Equipment</strong>.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-red-600 transition"><Linkedin size={20}/></Link>
            <Link href="#" className="hover:text-red-600 transition"><Twitter size={20}/></Link>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/products" className="hover:text-white transition">Product Catalog</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition">Industry Solutions</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Calibration Services</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">Technical FAQs</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/certifications" className="hover:text-white transition">Certifications</Link></li>
            <li className="pt-2">
              <Link href="http://asiantestequipment.com" target="_blank" className="text-red-600 flex items-center gap-1 hover:underline">
                Asian Test Equipment <ExternalLink size={14} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Global Support */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Global Support</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-red-600 shrink-0" />
              <span>Office, Industrial Area, <br />New Delhi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-red-600 shrink-0" />
              <span>+91 11 2345 6789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-red-600 shrink-0" />
              <span>support@testorbit.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
        <p>© {currentYear} Testorbit Pvt. Ltd. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}