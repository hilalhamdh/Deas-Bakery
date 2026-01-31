"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { useCart } from '../context/CartContext'; // <--- Tambahkan import ini

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart(); // <--- Ambil jumlah keranjang

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

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-amber-900/80">
          {menuLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-amber-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Area: Keranjang & Button */}
        <div className="flex items-center gap-4">
          {/* IKON KERANJANG (Muncul di HP & Laptop) */}
          <Link href="/cart" className="relative p-2 text-amber-900 hover:text-amber-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>

          {/* Desktop Only Button */}
          <Link href="/menu" className="hidden md:block">
            <button className="bg-amber-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-amber-800 transition-all">
              Menu Kami
            </button>
          </Link>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 focus:outline-none p-1"
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
        </div>
      </div>

      {/* Mobile Menu Overlay */}
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
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-amber-900 hover:text-amber-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/menu" onClick={() => setIsOpen(false)}>
                <button className="bg-amber-900 text-white w-full py-3 rounded-xl font-bold mt-2">
                  Lihat Semua Menu
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}