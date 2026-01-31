"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  // 1. Fungsi Tambah ke Keranjang
  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 2. Fungsi Hapus Satu Item (berdasarkan ID)
  const removeFromCart = (id: any) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. Fungsi Hapus Semua Isi Keranjang
  const clearCart = () => {
    setCart([]);
  };

  // 4. Hitung Total Jumlah Item (Badge)
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // 5. Hitung Total Harga yang Harus Dibayar
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        cartCount, 
        totalPrice 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);