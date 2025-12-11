import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter, ArrowRight, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern - subtle grid for depth */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Company Info */}
          <div className="animate-fade-in space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/assets/logo.png" alt="Sustainable Steel Logo" className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div>
                <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">Sustainable Steel</h3>
                <p className="text-sm text-muted-foreground">Industries LLC SP</p>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Premier provider of roof ventilation systems, tubular skylights, and steel structure works across UAE & Oman.
            </p>
            
            {/* Social Icons with Glow Effect */}
            <div className="flex gap-4">
              {[
                { 
                  Icon: Mail, 
                  link: "mailto:Mukesh@sustainablesteelllc.com" 
                },
                { 
                  Icon: Linkedin, 
                  link: "https://www.linkedin.com/in/mukesh-s-b5ba7457?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  target={social.Icon === Linkedin ? "_blank" : undefined}
                  rel={social.Icon === Linkedin ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <social.Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h4 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Products", path: "/products" },
                //{ name: "Our Team", path: "/team" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Services */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h4 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Roof Ventilators",
                "Tubular Skylights",
                "Steel Structures",
                "Installation Services",
                "Maintenance",
                "Energy Solutions"
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Us */}
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h4 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors -ml-2">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Phone</p>
                  <a href="tel:+971508614171" className="text-lg hover:text-primary transition-colors font-medium">971508614171</a>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors -ml-2">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</p>
                  <a href="mailto:Mukesh@sustainablesteelllc.com" className="hover:text-primary transition-colors text-sm sm:text-base">Mukesh@sustainablesteelind.com</a>
                </div>
              </li>

              <li className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors -ml-2">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Location</p>
                  <p>UAE & Oman</p>
                </div>
              </li>

              <li className="flex items-start gap-4 group hover:bg-white/5 p-2 rounded-lg transition-colors -ml-2">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="w-5 h-5 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Working Hours</p>
                  <p>Sun - Thu: 8AM - 6PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sustainable Steel Industries LLC SP. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;