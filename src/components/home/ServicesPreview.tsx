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

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      
      {/* 1. Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
           <span className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#FF0000] rounded-full"></span> Our Expertise
           </span>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
             Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Solutions</span>
           </h2>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
             From zero-energy ventilation to heavy steel structures, we provide end-to-end industrial solutions tailored to your needs.
           </p>
        </div>

        {/* 2. Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-[#0a1e40] rounded-2xl p-8 border border-white/5 hover:border-[#00AEEF] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,174,239,0.15)] overflow-hidden flex flex-col h-full"
              style={{ 
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0 
              }}
            >
              {/* Background Number Watermark */}
              <div className="absolute -right-4 -top-6 text-[120px] font-display font-bold text-white/5 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/10">
                0{index + 1}
              </div>

              {/* Hover Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00AEEF] via-[#FF0000] to-[#00AEEF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-xl bg-[#112b5a] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00AEEF] group-hover:border-[#00AEEF] transition-all duration-500 group-hover:rotate-6 shadow-lg z-10">
                <service.icon className="w-8 h-8 text-[#00AEEF] group-hover:text-[#0a1e40] transition-colors duration-500" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-2xl font-bold text-white mb-3 group-hover:text-[#00AEEF] transition-colors z-10">
                {service.title}
              </h3>
              <p className="relative text-slate-400 text-sm mb-8 leading-relaxed flex-grow z-10 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
              
              {/* Feature Pills */}
              <div className="relative flex flex-wrap gap-2 mb-8 z-10">
                {service.features.map((feature) => (
                  <span 
                    key={feature} 
                    className="text-[10px] uppercase font-bold px-3 py-1.5 bg-[#112b5a] text-slate-300 rounded-sm border border-white/10 group-hover:border-[#00AEEF]/30 group-hover:text-white transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <Link to={service.link} className="relative inline-flex items-center text-[#00AEEF] font-bold text-sm mt-auto group/link z-10">
                Explore Service 
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-2 text-[#FF0000]" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Link to="/services">
            <Button size="xl" className="bg-[#FF0000] hover:bg-red-700 text-white font-bold px-10 shadow-lg shadow-red-900/20 group">
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