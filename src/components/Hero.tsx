"use client"; // Wajib ditambahkan karena animasi butuh interaksi di browser

import { motion } from "framer-motion";
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#FFFDF5] overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* SISI KIRI DENGAN ANIMASI */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} // Mulai dari transparan dan agak ke bawah
          animate={{ opacity: 1, y: 0 }}   // Berakhir di posisi asli
          transition={{ duration: 0.8, ease: "easeOut" }} // Durasi 0.8 detik
        >
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-widest mb-6">
            EST. 2027 • Dea Rifdah
          </span>
          <h1 className={`${playfair.className} text-6xl lg:text-8xl text-amber-950 mb-6`}>
            Roti <br /> <span className="italic text-amber-700">Artisan</span> <br /> Premium
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }} // Muncul telat sedikit (delay)
            className="text-amber-900/70 text-lg mb-10 max-w-md leading-relaxed"
          >
            Dibuat secara tradisional dengan ragi alami dan bahan organik untuk tekstur yang sempurna di setiap gigitan.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-amber-900 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Mulai Pesan
            </button>
          </div>
        </motion.div>

        {/* SISI KANAN: GAMBAR MUNCUL PERLAHAN */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[500px] w-full"
        >
           <Image 
            src="/images/about-1.jpg" 
            alt="Premium Bread"
            fill
            className="object-contain drop-shadow-2xl"
           />
        </motion.div>
      </div>
    </section>
  );
}