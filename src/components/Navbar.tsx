"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: "Beranda", href: "/" },
    { name: "Menu Roti", href: "/menu" },
    { name: "Tentang Dea", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className={`${playfair.className} text-2xl font-bold text-amber-950`}>
          Dea&apos;s <span className="text-amber-600 italic">Bakery</span>
        </Link>

        {/* Desktop Menu (Muncul di Laptop) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-amber-900/80">
          {menuLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-amber-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Tombol Hamburger (Hanya Muncul di HP) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-900 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Action Button (Desktop Only) */}
        <button className="hidden md:block bg-amber-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-amber-800 transition-all">
          Pesan Online
        </button>
      </div>

      {/* Mobile Menu Overlay (Muncul saat Hamburger diklik) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-amber-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {menuLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} // Tutup menu setelah klik
                  className="text-lg font-medium text-amber-900 hover:text-amber-600"
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-amber-900 text-white w-full py-3 rounded-xl font-bold mt-2">
                Pesan Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}