import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "/services", 
    dropdown: [
      { name: "Roof Ventilation", path: "/services#ventilation" },
      { name: "Steel Structures", path: "/services#steel" },
      { name: "Installation", path: "/services#installation" }
    ]
  },
  { 
    name: "Products", 
    path: "/products",
    dropdown: [
      { name: "Roof Ventilators", path: "/products#roof-ventilators" },
      { name: "Tubular Skylights", path: "/products#tubular-skylights" },
      { name: "Steel Structures", path: "/products#steel-structures" }
    ]
  },
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/careers" },
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
      
      <div className="bg-[#0a1e40] text-white py-2 text-xs sm:text-sm font-medium">

        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">

          {/* Left: Contact Info */}

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">

            <a href="tel:+971508614171" className="flex items-center gap-2 hover:text-primary transition-colors">

              <Phone className="w-4 h-4 text-primary" />

              <span>+971 508614171</span>

            </a>

            <a href="mailto:sales@sustainablesteelllc.com" className="flex items-center gap-2 hover:text-primary transition-colors">

              <Mail className="w-4 h-4 text-primary" />

              <span>sales@sustainablesteelllc.com</span>

            </a>
 
             <a 
              href="https://www.linkedin.com/in/mukesh-s-b5ba7457?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >

              <Linkedin className="w-4 h-4" />

            </a>

          </div>



          {/* Right: Social Icons */}

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
              <img src="/assets/logo.png" alt="Sustainable Steel Logo" className={`w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`} />
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">Sustainable Steel</h1>
                <p className={`text-xs text-muted-foreground transition-all ${isScrolled ? "hidden" : "block"}`}>Industries LLC SP</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`relative text-sm font-medium transition-colors hover:text-primary py-4 block
                      ${location.pathname === link.path ? "text-primary" : "text-foreground"}
                    `}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Dropdown Menu */}
                    {link.dropdown && (
                    <div className="absolute top-full left-0 w-48 bg-card border border-border/50 shadow-xl rounded-xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                      {link.dropdown.map((dropItem) => (
                        <Link 
                          key={dropItem.name} 
                          to={{ pathname: dropItem.path.split('#')[0], hash: dropItem.path.includes('#') ? `#${dropItem.path.split('#')[1]}` : '' }}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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