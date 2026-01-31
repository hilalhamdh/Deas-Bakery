"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function KontakPage() {
  return (
    <main className="bg-[#FFFDF5] min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${playfair.className} text-5xl text-amber-950 mb-4`}
          >
            Hubungi Kami
          </motion.h1>
          <p className="text-amber-800/60 max-w-md mx-auto">
            Punya pertanyaan tentang menu kami atau ingin memesan untuk acara spesial? Dea siap membantu Anda.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          
          {/* BAGIAN 1: INFORMASI KONTAK */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-amber-100">
              <h3 className="text-amber-900 font-bold text-xl mb-6">Detail Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-2xl text-amber-800">📍</div>
                  <div>
                    <p className="font-bold text-amber-950">Alamat Toko</p>
                    <p className="text-amber-800/60 text-sm">Jl. Yogyakarta - Solo, Roti No. 123, Jakarta Selatan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-2xl text-amber-800">📞</div>
                  <div>
                    <p className="font-bold text-amber-950">WhatsApp</p>
                    <p className="text-amber-800/60 text-sm">+62 813-2763-2261</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-2xl text-amber-800">✉️</div>
                  <div>
                    <p className="font-bold text-amber-950">Email</p>
                    <p className="text-amber-800/60 text-sm">halo@deasbakery.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="h-64 bg-amber-200 rounded-[2.5rem] overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center text-amber-800/40 font-medium italic">
                 Peta Lokasi Toko Dea's Bakery
               </div>
            </div>
          </motion.div>

          {/* BAGIAN 2: FORMULIR PESAN */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-amber-900/5 border border-amber-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-900 ml-1">Nama Lengkap</label>
                  <input type="text" className="w-full px-5 py-3 rounded-2xl border border-amber-100 bg-amber-50/30 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Dea Rifdah" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-900 ml-1">Email</label>
                  <input type="email" className="w-full px-5 py-3 rounded-2xl border border-amber-100 bg-amber-50/30 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="dea@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-amber-900 ml-1">Subjek</label>
                <select className="w-full px-5 py-3 rounded-2xl border border-amber-100 bg-amber-50/30 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all">
                  <option>Tanya Menu</option>
                  <option>Pemesanan Custom</option>
                  <option>Kemitraan/Event</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-amber-900 ml-1">Pesan Anda</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-2xl border border-amber-100 bg-amber-50/30 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>

              <button className="w-full bg-amber-950 text-white py-4 rounded-2xl font-bold hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/20">
                Kirim Pesan
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}