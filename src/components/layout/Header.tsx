import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ChevronDown,
  Linkedin, 
  Check, 
  Copy 
} from "lucide-react";
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
  { name: "PEB Technical", path: "/peb-specifications" },
  { name: "Clients", path: "/clients" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null); 
  const [copied, setCopied] = useState(""); 
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const toggleMobileSubmenu = (name) => {
    setOpenMobileSubmenu(openMobileSubmenu === name ? null : name);
  };

  // --- Dynamic Style Classes based on Scroll State ---
  
  // UPDATED HERE: Changed bg-white/95 to bg-[#E6E8F0]/95
  const headerBgClass = isScrolled 
    ? "bg-[#E6E8F0]/95 backdrop-blur-md shadow-md border-b border-slate-300/50" 
    : "bg-transparent"; 
  
  // Text colors when scrolled vs not scrolled
  const textColorClass = isScrolled 
    ? "text-[#0a1e40] group-hover:text-primary" // Dark blue when scrolled against light bg
    : "text-white hover:text-white/80"; // White when transparent against dark hero bar
    
  const logoTextClass = isScrolled 
    ? "text-[#0a1e40]" 
    : "text-white";

  const subTextClass = isScrolled 
    ? "text-slate-600" 
    : "text-slate-300";

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      
      {/* --- Top Bar: Contact Info --- */}
      {/* Hides on scroll */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-0 overflow-hidden py-0 opacity-0" : "bg-[#0a1e40] text-white py-2 opacity-100"}`}>
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm font-medium">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <button onClick={() => handleCopy("+971 508614171", "phone")} className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group">
              {copied === "phone" ? <Check className="w-4 h-4 text-green-400" /> : <Phone className="w-4 h-4 text-primary" />}
              <span className={copied === "phone" ? "text-green-400" : ""}>{copied === "phone" ? "Copied!" : "+971 508614171"}</span>
            </button>
            <button onClick={() => handleCopy("sales@sustainablesteelllc.com", "email")} className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group">
              {copied === "email" ? <Check className="w-4 h-4 text-green-400" /> : <Mail className="w-4 h-4 text-primary" />}
              <span className={copied === "email" ? "text-green-400" : ""}>{copied === "email" ? "Copied!" : "sales@sustainablesteelllc.com"}</span>
            </button>
             <a href="https://www.linkedin.com/in/mukesh-s-b5ba7457" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110 duration-200">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-slate-300"><Clock className="w-4 h-4 text-primary" /> Sun-Thu: 8AM-6PM</span>
          </div>
        </div>
      </div>

      {/* --- Main Navigation --- */}
      <nav className={`transition-all duration-500 py-3 ${headerBgClass}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
               {/* UPDATED: Logo Image */}
               {/* MAKE SURE TO UPDATE THE SRC PATH TO YOUR ACTUAL LOGO LOCATION */}
               <img 
                 src="/assets/logo.png" 
                 alt="Sustainable Steel Logo" 
                 className={`transition-all duration-300 w-auto object-contain ${isScrolled ? "h-10" : "h-12"}`}
               />
              
              <div className="hidden sm:block">
                <h1 className={`font-display text-xl font-bold transition-colors duration-300 ${logoTextClass} group-hover:text-primary`}>
                  Sustainable Steel
                </h1>
                <p className={`text-xs transition-colors duration-300 ${subTextClass}`}>
                  Industries LLC SP
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link
                    to={link.path}
                    // Text Color Logic: Uses textColorClass unless it's the active link (Primary color)
                    className={`relative text-sm font-medium transition-colors duration-300 py-2 flex items-center gap-1
                      ${location.pathname === link.path ? "text-primary font-bold" : textColorClass}
                    `}
                  >
                    {link.name}
                    {link.dropdown && (
                        <ChevronDown className={`w-3 h-3 transition-all duration-300 group-hover:rotate-180 ${isScrolled ? "text-slate-500" : "text-white/70"}`} />
                    )}
                    
                    {/* Active Underline Indicator */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${location.pathname === link.path ? "scale-x-100" : ""}`}></span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                    {link.dropdown && (
                    <div className="absolute top-full left-0 pt-6 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                       <div className="bg-white border border-[#E6E8F0] shadow-xl rounded-xl overflow-hidden p-2">
                        {link.dropdown.map((dropItem) => (
                            <Link 
                            key={dropItem.name} 
                            to={{ pathname: dropItem.path.split('#')[0], hash: dropItem.path.includes('#') ? `#${dropItem.path.split('#')[1]}` : '' }}
                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-[#E6E8F0] hover:text-[#0a1e40] rounded-lg transition-colors flex items-center justify-between group/item"
                            >
                            {dropItem.name}
                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary" />
                            </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact">
                <Button className={`${isScrolled ? "h-9 px-4" : "h-11 px-6"} bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-primary/25 rounded-full`}>
                  Get Free Quote
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button (Color swap) */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-[#0a1e40]" : "text-white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* --- Mobile Navigation --- */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-[#E6E8F0] border-t border-slate-200 shadow-2xl animate-in slide-in-from-top-5 duration-300 z-40 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-slate-200 last:border-0 pb-2">
                    {link.dropdown ? (
                      <div>
                        <button 
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className={`flex items-center justify-between w-full font-medium py-3 text-left transition-colors ${openMobileSubmenu === link.name ? "text-[#0a1e40]" : "text-slate-700"}`}
                        >
                            {link.name}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMobileSubmenu === link.name ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openMobileSubmenu === link.name ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                            <div className="bg-white/50 rounded-lg p-2 mb-2 flex flex-col gap-1">
                                {link.dropdown.map((subItem) => (
                                    <Link 
                                        key={subItem.name}
                                        to={subItem.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm text-slate-600 py-2 px-3 hover:bg-white hover:text-[#0a1e40] rounded transition-colors flex items-center gap-2"
                                    >
                                        <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`block font-medium py-3 transition-colors hover:text-[#0a1e40] ${
                          location.pathname === link.path ? "text-[#0a1e40]" : "text-slate-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg rounded-xl shadow-lg shadow-primary/20">
                    Get Free Quote
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