import { Link } from "react-router-dom";
import { ArrowRight, Wind, Sun, Building2, Droplets, Hammer, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data aligned with Company Profile PDF [cite: 3-7, 31, 89, 100]
const services = [
  {
    icon: Wind,
    title: "Roof Ventilator Fans",
    description: "Zero-energy wind driven turbine ventilators that eliminate heat and dust without electricity.",
    features: ["No Electric Cost", "Rust Free (80% SS)", "No Maintenance"],
    link: "/services#roof-ventilators",
  },
  {
    icon: Sun,
    title: "Tubular Skylights",
    description: "Natural daylighting systems that foster a healthier work environment while cutting costs.",
    features: ["Save 40% Electricity", "Lowers Cooling Load", "Zero Carbon Footprint"],
    link: "/services#tubular-skylights",
  },
  {
    icon: Building2,
    title: "Steel Structure Works",
    description: "Turnkey PEB solutions for warehouses, factories, and multi-level car parks.",
    features: ["Custom Fabrication", "Logistic Warehouses", "Rapid Installation"],
    link: "/services#steel-structures",
  },
  {
    icon: Droplets,
    title: "Roof Water Proofing",
    description: "Comprehensive seam sealing and coating to prevent costly water penetration damage.",
    features: ["Simpler than Replacement", "Seals all Leaks", "Long-term Solution"],
    link: "/services#waterproofing",
  },
  {
    icon: Hammer,
    title: "Sheet Replacement",
    description: "Professional replacement of damaged single-skin or sandwich panels to restore integrity.",
    features: ["Sandwich Panels", "Single Skin", "Minimizes Disruption"],
    link: "/services#sheet-replacement",
  },
  {
    icon: TrendingUp,
    title: "Value Engineering",
    description: "Expert structural analysis to optimize designs and reduce material weight without compromising safety.",
    features: ["5-7% Cost Savings", "Material Optimization", "Structural Integrity"],
    link: "/services#steel-structures",
  },
];

type ServicesPreviewProps = {
  variant?: "light" | "dark";
};

const ServicesPreview = ({ variant = "dark" }: ServicesPreviewProps) => {
  const isLight = variant === "light";
  return (
    <section
      className={`py-24 relative overflow-hidden ${
        isLight ? "bg-white text-slate-700" : "bg-background"
      }`}
    >
      
      {/* 1. Background Pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#0EA5E9 1px, transparent 1px), linear-gradient(90deg, #0EA5E9 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span> Our Expertise
           </span>
           <h2
            className={`font-display text-4xl md:text-5xl font-bold mb-6 ${
              isLight ? "text-slate-800" : "text-foreground"
            }`}
           >
             Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Solutions</span>
           </h2>
           <p
            className={`${
              isLight ? "text-slate-600" : "text-muted-foreground"
            } max-w-2xl mx-auto text-lg leading-relaxed`}
           >
             From zero-energy ventilation to heavy steel structures, we provide end-to-end industrial solutions tailored to your needs.
           </p>
        </div>

        {/* 2. Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full hover:shadow-[0_10px_40px_rgba(14,165,233,0.3),0_0_60px_rgba(14,165,233,0.2)] hover:border-accent ${
                isLight
                  ? "bg-card border-border"
                  : "bg-card border-border"
              }`}
              style={{ 
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0 
              }}
            >
              {/* Background Number Watermark */}
              <div className={`absolute -right-4 -top-6 text-[120px] font-display font-bold select-none transition-transform duration-500 group-hover:scale-110 ${
                isLight ? "text-white/5 group-hover:text-white/10" : "text-white/5 group-hover:text-white/10"
              }`}>
                0{index + 1}
              </div>

              {/* Hover Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon */}
              <div className="icon-chip icon-chip-lg mb-6 z-10">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3
                className={`relative font-display text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors z-10 ${
                  isLight ? "text-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`relative text-sm mb-8 leading-relaxed flex-grow z-10 group-hover:text-foreground transition-colors ${
                  isLight ? "text-white" : "text-white"
                }`}
              >
                {service.description}
              </p>
              
              {/* Feature Pills */}
              <div className="relative flex flex-wrap gap-2 mb-8 z-10">
                {service.features.map((feature) => (
                  <span 
                    key={feature} 
                    className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-sm border group-hover:border-accent/40 group-hover:text-foreground transition-all duration-300 ${
                      isLight ? "bg-background text-white border-border" : "bg-background text-muted-foreground border-border"
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <Link to={service.link} className="relative inline-flex items-center text-primary font-bold text-sm mt-auto group/link z-10">
                Explore Service 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-2 text-accent" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Link to="/services">
            <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 shadow-[0_8px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_8px_30px_rgba(220,38,38,0.5)] group">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;