import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className={`${playfair.className} text-2xl mb-4 font-bold`}>Dea&apos;s Bakery</h2>
            <p className="text-amber-200/60 text-sm leading-relaxed">
              Membawa kehangatan dapur Dea Rifdah langsung ke meja makan Anda dengan bahan pilihan terbaik.
            </p>
          </div>

          {/* Kolom 2: Jam Operasional */}
          <div>
            <h3 className="font-bold mb-4 text-white uppercase text-xs tracking-widest">Jam Operasional</h3>
            <ul className="text-sm text-amber-200/60 space-y-2">
              <li>Senin - Jumat: 07:00 - 20:00</li>
              <li>Sabtu - Minggu: 08:00 - 21:00</li>
            </ul>
          </div>

          {/* Kolom 3: Lokasi */}
          <div>
            <h3 className="font-bold mb-4 text-white uppercase text-xs tracking-widest">Lokasi Kami</h3>
            <p className="text-sm text-amber-200/60">
              Jl. Yogyakarta - Solo Roti No. 123<br />
              Yogyakarta Selatan, Indonesia
            </p>
          </div>

          {/* Kolom 4: Social Media */}
          <div>
            <h3 className="font-bold mb-4 text-white uppercase text-xs tracking-widest">Ikuti Dea</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center hover:bg-amber-800 cursor-pointer transition-all">IG</div>
              <div className="w-10 h-10 rounded-full bg-amber-900 flex items-center justify-center hover:bg-amber-800 cursor-pointer transition-all">WA</div>
            </div>
          </div>

        </div>

        {/* Garis Bawah & Copyright */}
        <div className="border-t border-amber-900 pt-8 text-center text-xs text-amber-200/40">
          <p>&copy; 2027 Dea&apos;s Bakery. Crafted by Dea Rifdah with ❤️</p>
        </div>
      </div>
    </footer>
  );
}