"use client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, addToCart, clearCart, totalPrice } = useCart();

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
            Lihat Menu Roti
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 pt-28 max-w-2xl mx-auto min-h-screen bg-[#fdfcfb]">
      {/* HEADER KERANJANG */}
      <div className="flex justify-between items-end mb-4 border-b border-amber-100 pb-4">
        <div>
          <h1 className="text-3xl font-serif text-amber-950">Keranjang</h1>
          <p className="text-amber-600 text-sm italic">Dea's Bakery - Freshly Baked</p>
        </div>
        <button 
          onClick={clearCart}
          className="text-[#dc2626] text-xs uppercase tracking-widest font-bold hover:text-red-700 transition-colors"
        >
          Hapus Semua
        </button>
      </div>

      {/* TOMBOL TAMBAH MENU LAIN (Baru Ditambahkan) */}
      <div className="mb-6">
        <Link href="/menu">
          <motion.div 
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-amber-800 font-bold text-sm bg-amber-100/50 px-4 py-2 rounded-full border border-amber-200 hover:bg-amber-100 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Tambah Menu Lain</span>
          </motion.div>
        </Link>
      </div>

      {/* LIST ITEM */}
      <div className="space-y-4 mb-10">
        <AnimatePresence mode="popLayout">
          {cart.map((item: any) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex justify-between items-center bg-white p-4 rounded-[1.5rem] shadow-sm border border-amber-50"
            >
              <div className="flex items-center gap-4">
                <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-inner">
                  🥐
                </div>
                <div>
                  <p className="font-bold text-amber-950 leading-tight">{item.name}</p>
                  <p className="text-xs text-amber-500 font-bold uppercase tracking-tighter">
                    Rp {item.price.toLocaleString()} / pcs
                  </p>
                </div>
              </div>

              {/* KONTROL QUANTITY */}
              <div className="flex items-center gap-3 bg-amber-50/50 p-1 rounded-xl border border-amber-100">
                <button 
                  onClick={() => addToCart(item)}
                  className="w-8 h-8 flex items-center justify-center bg-amber-900 rounded-lg text-white shadow-md hover:bg-amber-800 transition-colors"
                >
                  +
                </button>
                <span className="font-bold text-amber-950 min-w-[20px] text-center">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-[#dc2626] border border-red-100 shadow-sm hover:bg-red-50 transition-colors"
                  title="Hapus"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* FOOTER TOTAL & WA */}
      <div className="p-6 bg-[#075e54] rounded-[2rem] text-white shadow-xl">
        <div className="flex justify-between items-center mb-6 border-b border-green-800/50 pb-4">
          <span className="text-green-100 font-medium">Ringkasan Pesanan</span>
          <span className="text-2xl font-bold font-serif">Rp {totalPrice.toLocaleString()}</span>
        </div>
        
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={handleCheckout}
          className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128c7e] transition-all flex items-center justify-center gap-3 shadow-lg"
        >
          <span className="text-lg">Kirim Pesanan ke WhatsApp</span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.236 3.484 8.417 0 6.556-5.338 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.309 1.652zm5.178-3.861c1.559.926 3.414 1.415 5.307 1.416 5.735 0 10.402-4.667 10.402-10.402s-4.667-10.402-10.402-10.402c-5.735 0-10.402 4.667-10.402 10.402 0 2.102.631 4.145 1.82 5.904l-1.066 3.89 3.941-1.034z" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}