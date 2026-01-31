import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingCart from "../components/FloatingCart";
import { CartProvider } from "../context/CartContext"; // Import "otak" keranjang
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Bungkus dengan CartProvider agar data keranjang bisa diakses di semua halaman */}
        <CartProvider>
          <Navbar />
          
          <main>
            {children}
          </main>

          {/* Ikon keranjang melayang yang akan muncul otomatis jika ada isi */}
          <FloatingCart />
          
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}