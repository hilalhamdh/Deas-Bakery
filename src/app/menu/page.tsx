"use client";

import { motion } from "framer-motion";
import ProductCard from "../../components/ProductCard";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

// Data Menu Dea's Bakery
const ALL_PRODUCTS = [
  { id: 1, name: "Butter Croissant", price: "Rp 18.000", image: "/images/product-1.jpg", category: "Pastry" },
  { id: 2, name: "Pain au Chocolat", price: "Rp 22.000", image: "/images/product-2.jpg", category: "Pastry" },
  { id: 3, name: "Classic Sourdough", price: "Rp 45.000", image: "/images/product-3.jpg", category: "Bread" },
  { id: 4, name: "Japanese Milk Bun", price: "Rp 15.000", image: "/images/about-1.jpg", category: "Bread" },
  { id: 5, name: "Almond Danish", price: "Rp 25.000", image: "/images/about-2.jpg", category: "Pastry" },
  { id: 6, name: "Cheese Cake Slice", price: "Rp 35.000", image: "/images/carousel-2.jpg", category: "Cakes" },
];

const CATEGORIES = ["Semua", "Pastry", "Bread", "Cakes"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Fungsi Filter
  const filteredProducts = activeCategory === "Semua" 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FFFDF5] pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Halaman */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${playfair.className} text-5xl text-amber-950 mb-4`}
          >
            Katalog Menu
          </motion.h1>
          <p className="text-amber-800/60 max-w-lg mx-auto">
            Setiap produk dipanggang dengan cinta oleh Dea Rifdah menggunakan bahan-bahan organik pilihan.
          </p>
        </header>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? "bg-amber-900 text-white shadow-lg shadow-amber-900/20" 
                : "bg-white text-amber-900 hover:bg-amber-100 border border-amber-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Produk */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((item) => (
            <ProductCard 
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </motion.div>

        {/* Pesan Jika Kosong */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-amber-800/40 italic">Maaf, menu untuk kategori ini belum tersedia.</p>
          </div>
        )}

      </div>
    </main>
  );
}