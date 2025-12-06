import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "-translate-y-[40px]" : "translate-y-0"}`}>
      
      {/* Top Bar - Disappears on Scroll */}
      <div className={`bg-foreground text-background transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-10 py-2 opacity-100"}`}>
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:sales@sustainablesteelind.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">sales@sustainablesteelind.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Sun-Thu: 8AM-6PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Transforms on Scroll */}
      <nav className={`transition-all duration-300 border-b border-transparent ${
        isScrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md py-2 border-border/40" 
        : "bg-card shadow-sm py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={logo} alt="Sustainable Steel Logo" className={`w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`} />
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">Sustainable Steel</h1>
                <p className={`text-xs text-muted-foreground transition-all ${isScrolled ? "hidden" : "block"}`}>Industries LLC SP</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-primary py-2
                    ${location.pathname === link.path ? "text-primary" : "text-foreground"}
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact">
                <Button variant={isScrolled ? "default" : "hero"} size={isScrolled ? "sm" : "lg"} className="group">
                  Get Free Quote
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-card absolute left-0 right-0 shadow-xl p-4 top-full">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-2 transition-colors hover:text-primary ${
                      location.pathname === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="w-full mt-4 justify-between">
                    Get Free Quote <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;