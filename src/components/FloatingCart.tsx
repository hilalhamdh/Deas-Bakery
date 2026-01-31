"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function FloatingCart() {
  const { cartCount } = useCart();

  if (cartCount === 0) return null;

  return (
    <Link href="/cart" className="fixed bottom-6 right-6 z-50">
      <div className="bg-amber-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 transition-transform">
        <span>🛒</span>
        <span className="font-bold">{cartCount} Item</span>
      </div>
    </Link>
  );
}