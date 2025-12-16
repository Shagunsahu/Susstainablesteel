import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, ArrowRight, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    // Updated colors to match the Dark Theme (bg-background instead of bg-foreground)
    <footer className="bg-background text-foreground relative overflow-hidden border-t border-white/5">
      {/* 1. Top Gradient Border (The "Energy Line") */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00AEEF] via-[#FF0000] to-[#00AEEF]"></div>

      {/* 2. Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* RESPONSIVE GRID: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (laptop) -> 5 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-4">
          
          {/* 1. Company Info */}
          <div className="animate-fade-in space-y-6 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/assets/logo.png" alt="Sustainable Steel Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div>
                <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">Sustainable Steel</h3>
                <p className="text-xs text-muted-foreground">Industries LLC SP</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Premier provider of roof ventilation systems, tubular skylights, and steel structure works across UAE & Oman.
            </p>
            
            <div className="flex gap-3">
              <a href="mailto:Mukesh@sustainablesteelllc.com" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                 <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/mukesh-s-b5ba7457" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                 <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="animate-fade-in">
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Products", path: "/products" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Products (New Section) */}
          <div className="animate-fade-in">
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Products
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Roof Ventilator Fans", path: "/products#roof-ventilators" },
                { name: "Tubular Skylights", path: "/products#tubular-skylights" },
                { name: "Steel Structures", path: "/products#steel-structures" },
                { name: "Roof Maintenance", path: "/products#maintenance" },
              ].map((prod) => (
                <li key={prod.name}>
                  <Link to={prod.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Services */}
          <div className="animate-fade-in">
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Services
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Steel Structure Works", path: "/services#steel" },
                { name: "Roof Ventilator Fans", path: "/services#ventilators" },
                { name: "Tubular Skylights", path: "/services#skylights" },
                { name: "Roof Water Proofing", path: "/services#waterproofing" },
                { name: "Sheet Replacement", path: "/services#sheet-replacement" },
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Contact Us */}
          <div className="animate-fade-in sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full"></span> Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 h-fit rounded-lg"><Phone className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Phone</p>
                  <a href="tel:+971508614171" className="text-sm font-medium hover:text-primary whitespace-nowrap">+971 508614171</a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 h-fit rounded-lg"><Mail className="w-4 h-4 text-primary" /></div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Email</p>
                  <a href="mailto:sales@sustainablesteelllc.com" className="hover:text-primary break-all text-xs">sales@sustainablesteelllc.com</a>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-primary/10 p-1.5 h-fit rounded-lg"><MapPin className="w-4 h-4 text-primary" /></div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm">UAE & Oman</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10 bg-black/20">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sustainable Steel Industries LLC SP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;