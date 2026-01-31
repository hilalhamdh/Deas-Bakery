import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import { Playfair_Display } from 'next/font/google';
import Link from "next/link";
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function HomePage() {
  const bestSellers = [
    { id: 1, name: "Almond Croissant", price: "Rp 25.000", image: "/images/product-1.jpg" },
    { id: 2, name: "Pain au Chocolat", price: "Rp 22.000", image: "/images/product-2.jpg" },
    { id: 3, name: "Sourdough Rye", price: "Rp 45.000", image: "/images/product-3.jpg" },
    { id: 4, name: "Milk Bun", price: "Rp 15.000", image: "/images/about-2.jpg" },
  ];

  return (
    <main>
      <Hero />
      <Features />
      
      {/* TAMBAHKAN id="produk-kami" DI SINI */}
      <section id="produk-kami" className="py-24 bg-[#FFFDF5] scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className={`${playfair.className} text-4xl text-amber-950 mb-2`}>Favorit Pelanggan</h2>
              <p className="text-amber-800/60">Roti yang paling sering habis dalam sekejap.</p>
            </div>
            {/* Navigasi ke halaman menu penuh */}
            <Link href="/menu" className="text-amber-900 font-bold border-b-2 border-amber-900 pb-1 mt-4 md:mt-0">
              Lihat Semua Menu &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}