"use client";
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [flyingItem, setFlyingItem] = useState<{ x: number; y: number } | null>(null);

  // Trigger Notifikasi Pop-up
  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // 1. Fungsi Tambah ke Keranjang + Animasi Terbang
  const addToCart = (product: any, event?: React.MouseEvent) => {
    // Jalankan animasi terbang jika ada event klik
    if (event) {
      setFlyingItem({ x: event.clientX, y: event.clientY });
      setTimeout(() => setFlyingItem(null), 800);
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    triggerToast(`${product.name} berhasil ditambah!`);
  };

  // 2. Fungsi Kurangi Quantity (Tanpa hapus item kecuali 0)
  const decreaseQuantity = (id: any) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 3. Fungsi Hapus Satu Item (Total)
  const removeFromCart = (id: any) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    triggerToast("Item dihapus dari keranjang");
  };

  // 4. Fungsi Hapus Semua
  const clearCart = () => {
    if (confirm("Kosongkan semua jemuran roti di keranjang?")) {
      setCart([]);
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartCount,
        totalPrice,
      }}
    >
      {children}

      {/* ANIMASI TERBANG (PARTIKEL) */}
      <AnimatePresence>
        {flyingItem && (
          <motion.div
            initial={{ left: flyingItem.x, top: flyingItem.y, opacity: 1, scale: 1 }}
            animate={{ 
              left: "calc(100vw - 80px)", // Mengarah ke posisi keranjang di Navbar
              top: 20, 
              opacity: 0, 
              scale: 0.2,
              rotate: 360 
            }}
            transition={{ duration: 0.8, ease: "backIn" }}
            className="fixed z-[9999] pointer-events-none text-3xl"
          >
            🥐
          </motion.div>
        )}
      </AnimatePresence>

      {/* NOTIFIKASI TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-amber-900 text-white px-6 py-3 rounded-2xl shadow-2xl font-bold flex items-center gap-2 border border-amber-700"
          >
            <span className="bg-amber-100 rounded-full p-1 text-[10px]">✅</span>
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);