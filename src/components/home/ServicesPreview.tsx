import { Link } from "react-router-dom";
import { ArrowRight, Sun, Droplets, Hammer, Fan, Construction, Flame, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Droplets,
    title: "Roof Sheet Water Proofing",
    description: "Specialized waterproofing solutions to protect industrial roofing from leaks and weather damage.",
    features: ["Leak Protection", "Weather Resistant", "Long Lasting"],
    link: "/services/waterproofing",
  },
  {
    icon: Fan,
    title: "Roof Turbo Ventilator Fans",
    description: "Supply & installation of energy-efficient ventilation systems to improve air circulation in warehouses.",
    features: ["Energy Efficient", "No Electricity", "Improved Air Quality"],
    link: "/services/ventilators",
  },
  {
    icon: Sun,
    title: "Tubular Roof Skylights",
    description: "Natural lighting solutions that reduce energy costs and improve indoor visibility.",
    features: ["Natural Light", "Energy Savings", "Better Visibility"],
    link: "/services/skylights",
  },
  {
    icon: Construction,
    title: "Structural Steel Erection",
    description: "Heavy-duty steel erection for warehouses, factories, and high-rise structures.",
    features: ["Heavy Duty", "Custom Design", "Fast Installation"],
    link: "/services/steel-erection",
  },
  {
    icon: Flame,
    title: "Fire Painting Works",
    description: "Intumescent fireproofing coatings to ensure structural integrity during fire emergencies.",
    features: ["Fire Protection", "Safety Compliance", "Structural Integrity"],
    link: "/services/fire-painting",
  },
  {
    icon: Layers,
    title: "Cladding Services",
    description: "High-quality wall and roof cladding for thermal insulation and aesthetic finishing.",
    features: ["Thermal Insulation", "Aesthetic Finish", "Weather Protection"],
    link: "/services/cladding",
  },
  {
    icon: Hammer,
    title: "Fabrication Services",
    description: "Custom steel fabrication for beams, columns, and specialized industrial components.",
    features: ["Custom Fabrication", "Precision Work", "Quality Materials"],
    link: "/services/fabrication",
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