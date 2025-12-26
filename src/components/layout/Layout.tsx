import { ReactNode, useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* --- Floating Call Button (above WhatsApp) --- */}
      <a
        href="tel:+971566538609"
        className="fixed bottom-40 right-8 z-65 p-3 rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call us
        </span>
      </a>

      {/* --- Floating WhatsApp Button (Bottom Right) --- */}
      <a
        href={"https://wa.me/+971566538609?text=" + encodeURIComponent("Hello Sustainable Steel, I would like a quote.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-60 p-3 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 flex items-center justify-center group"
        aria-label="Message us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor" aria-hidden>
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .001 5.373 0 12c0 2.11.553 4.172 1.6 6.005L0 24l6.234-1.586A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.198-3.48-8.52zM12 22.2c-1.53 0-3.03-.406-4.34-1.17l-.31-.18-3.7.94.99-3.6-.2-.37A9.82 9.82 0 012.2 12c0-5.42 4.38-9.8 9.8-9.8 2.62 0 5.08 1.02 6.92 2.88A9.76 9.76 0 0121.8 12c0 5.42-4.38 9.8-9.8 9.8z" />
          <path d="M17.2 14.1c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.36.22-.66.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.46.1-.18.05-.34-.02-.49-.07-.15-.68-1.64-.93-2.25-.24-.59-.48-.51-.66-.52-.17-.01-.37-.01-.56-.01-.18 0-.46.06-.7.34-.24.28-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.85 2.94 4.49 4.02 2.64 1.08 2.64.72 3.11.68.47-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.07-.11-.28-.17-.58-.32z" />
        </svg>

        <span className="absolute right-16 bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Message us on WhatsApp
        </span>
      </a>

      {/* Floating Scroll-to-Top Button (Bottom Right) */}
      <button
        onClick={scrollToTop}
        className={`group fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-500 hover:bg-primary/90 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
          showScrollTop 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-10 scale-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 animate-bounce" style={{ animationDuration: '3s' }} />

        <span className="absolute right-16 bg-white text-black text-sm font-semibold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none" aria-hidden>
          Scroll to top
        </span>
      </button>
    </div>
  );
};

export default Layout;