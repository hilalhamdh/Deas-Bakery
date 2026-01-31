"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);

  const kirimWA = () => {
    const nomor = "6281327632261"; // Isi nomor WA Dea
    const teks = cart.map((i: any) => `${i.name} (${i.quantity}x)`).join(", ");
    window.open(`https://wa.me/${nomor}?text=Halo Dea's Bakery, saya mau pesan: ${teks}. Total: Rp${total}`, "_blank");
  };

  return (
    <div className="p-8 pt-24 max-w-xl mx-auto min-h-screen">
      <h1 className="text-2xl font-serif mb-6 text-amber-900">Pesanan Kamu</h1>
      {cart.map((item: any) => (
        <div key={item.id} className="flex justify-between mb-4 border-b pb-2">
          <span>{item.name} x{item.quantity}</span>
          <span>Rp{(item.price * item.quantity).toLocaleString()}</span>
        </div>
      ))}
      <div className="font-bold text-xl mt-4">Total: Rp{total.toLocaleString()}</div>
      <button onClick={kirimWA} className="w-full bg-green-600 text-white py-3 rounded-xl mt-8 font-bold">
        Pesan Sekarang via WhatsApp
      </button>
    </div>
  );
}