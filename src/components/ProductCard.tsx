"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductProps {
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 border border-amber-50/50 p-3"
    >
      {/* 1. CONTAINER IMAGE */}
      <div className="relative h-64 w-full overflow-hidden rounded-[1.5rem]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Overlay Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/80 backdrop-blur-md text-amber-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            Freshly Baked
          </span>
        </div>
      </div>

      {/* 2. DETAIL PRODUK */}
      <div className="p-5 text-center">
        <h3 className="text-amber-950 font-bold text-xl mb-1 group-hover:text-amber-700 transition-colors">
          {name}
        </h3>
        <p className="text-amber-600 font-medium text-lg mb-5">
          {price}
        </p>

        {/* 3. TOMBOL PESAN */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full bg-amber-900 text-white py-3.5 rounded-2xl text-sm font-bold shadow-lg shadow-amber-900/20 hover:bg-amber-800 transition-all flex items-center justify-center gap-2"
        >
          <span>Tambah Pesanan</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor" 
            className="w-4 h-4"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}