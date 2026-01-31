"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function TentangPage() {
  return (
    <main className="bg-[#FFFDF5] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* SECTION 1: PROFIL OWNER */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/dea.jpeg" // Masukkan foto Dea sedang baking di sini
              alt="Dea Rifdah - Founder Dea's Bakery"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              The Heart Behind the Oven
            </span>
            <h1 className={`${playfair.className} text-5xl text-amber-950 mb-6`}>
              Dea Rifdah
            </h1>
            <p className="text-amber-900/70 leading-relaxed mb-6 italic text-lg">
              "Bagi saya, memanggang roti bukan sekadar mencampur tepung dan ragi. Ini adalah tentang memberikan cinta dan kehangatan dalam setiap serat adonan."
            </p>
            <p className="text-amber-900/70 leading-relaxed mb-8">
              Dimulai dari hobi di dapur kecil rumahnya, Dea Rifdah selalu percaya bahwa roti terbaik lahir dari kesabaran. Setiap roti yang Anda nikmati telah melewati proses fermentasi alami yang panjang untuk memastikan rasa yang autentik dan nutrisi yang terjaga.
            </p>
            <div className="grid grid-cols-2 gap-6 border-t border-amber-200 pt-8">
              <div>
                <h4 className="font-bold text-amber-950 text-xl">5+ Tahun</h4>
                <p className="text-amber-700/60 text-sm">Pengalaman Baking</p>
              </div>
              <div>
                <h4 className="font-bold text-amber-950 text-xl">100%</h4>
                <p className="text-amber-700/60 text-sm">Bahan Alami</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: FILOSOFI KAMI */}
        <section className="bg-amber-900 rounded-[4rem] p-12 lg:p-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className={`${playfair.className} text-4xl mb-8`}>Filosofi Kami</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-3xl font-serif text-amber-300">01</div>
                <h3 className="font-bold text-xl">Kualitas Utama</h3>
                <p className="text-amber-100/70 text-sm leading-relaxed">Kami hanya menggunakan butter premium dan ragi alami tanpa campuran bahan kimia.</p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-serif text-amber-300">02</div>
                <h3 className="font-bold text-xl">Tradisi</h3>
                <p className="text-amber-100/70 text-sm leading-relaxed">Metode hand-crafted yang diwariskan untuk menjaga tekstur roti yang sempurna.</p>
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-serif text-amber-300">03</div>
                <h3 className="font-bold text-xl">Komunitas</h3>
                <p className="text-amber-100/70 text-sm leading-relaxed">Dea's Bakery hadir untuk menjadi tempat berbagi kebahagiaan di setiap pagi.</p>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}