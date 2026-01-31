"use client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    const phone = "6281327632261"; 
    const message = cart
      .map((item: any) => `- ${item.name} (${item.quantity}x)`)
      .join("\n");
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      `Halo Dea's Bakery, saya ingin memesan:\n\n${message}\n\nTotal: Rp ${totalPrice.toLocaleString()}`
    )}`;
    window.open(url, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[#fdfcfb]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <span className="text-6xl mb-4 block">🛒</span>
          <h1 className="text-2xl font-serif text-amber-900 mb-2">Keranjangmu Kosong</h1>
          <p className="text-amber-700/60 mb-6">Sepertinya kamu belum memilih roti favoritmu.</p>
          <Link href="/menu" className="bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-all shadow-lg">
            Kembali ke Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 pt-28 max-w-2xl mx-auto min-h-screen bg-[#fdfcfb]">
      <div className="flex justify-between items-end mb-8 border-b border-amber-100 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-amber-950">Keranjang</h1>
          <p className="text-amber-600 text-sm">Dea's Bakery - Freshly Baked</p>
        </div>
        
        {/* TOMBOL HAPUS SEMUA - Menggunakan Hex Merah agar tidak hilang saat deploy */}
        <button 
          onClick={clearCart}
          className="text-[#dc2626] text-xs uppercase tracking-widest font-bold hover:text-red-700 transition-colors flex items-center gap-1"
        >
          <span>Hapus Semua</span>
        </button>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {cart.map((item: any) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex justify-between items-center bg-white p-5 rounded-[1.5rem] shadow-sm border border-amber-50 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center text-xl">
                  🥐
                </div>
                <div>
                  <p className="font-bold text-amber-950">{item.name}</p>
                  <p className="text-sm text-amber-600 font-medium">
                    {item.quantity}x <span className="mx-1">•</span> Rp {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
              
              {/* TOMBOL HAPUS ITEM (Selalu Terlihat di Mobile & Desktop) */}
              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-3 bg-red-50 text-[#dc2626] rounded-2xl hover:bg-[#dc2626] hover:text-white transition-all"
                title="Hapus"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* FOOTER KERANJANG - SEKARANG WARNA HIJAU WHATSAPP */}
      <div className="mt-10 p-6 bg-[#075e54] rounded-[2rem] text-white shadow-xl shadow-green-900/20">
        <div className="flex justify-between items-center mb-6">
          <span className="text-green-100 font-medium text-lg">Total Pesanan</span>
          <span className="text-2xl font-bold">Rp {totalPrice.toLocaleString()}</span>
        </div>
        
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={handleCheckout}
          className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128c7e] transition-all flex items-center justify-center gap-3 shadow-lg"
        >
          <span className="text-lg text-white">Pesan via WhatsApp</span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.236 3.484 8.417 0 6.556-5.338 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.309 1.652zm5.178-3.861c1.559.926 3.414 1.415 5.307 1.416 5.735 0 10.402-4.667 10.402-10.402s-4.667-10.402-10.402-10.402c-5.735 0-10.402 4.667-10.402 10.402 0 2.102.631 4.145 1.82 5.904l-1.066 3.89 3.941-1.034z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}