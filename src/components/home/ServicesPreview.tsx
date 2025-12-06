import { Link } from "react-router-dom";
import { ArrowRight, Wind, Sun, Building2, Wrench, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wind,
    title: "Roof Ventilators",
    description: "Industrial roof ventilation systems for warehouses and factories, ensuring optimal airflow and temperature control.",
    features: ["Natural ventilation", "Energy efficient", "Durable design"],
  },
  {
    icon: Sun,
    title: "Tubular Skylights",
    description: "Natural lighting solutions that reduce energy consumption while illuminating your industrial spaces.",
    features: ["UV protection", "Reduced costs", "Eco-friendly"],
  },
  {
    icon: Building2,
    title: "Steel Structures",
    description: "Pre-engineered building solutions for warehouses, factories, and commercial buildings.",
    features: ["Custom design", "Quick install", "Long-lasting"],
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description: "Professional installation services with experienced teams ensuring quality workmanship.",
    features: ["Expert team", "Safe practices", "On-time delivery"],
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Comprehensive maintenance programs to keep your installations running at peak efficiency.",
    features: ["Regular checks", "Quick repairs", "24/7 support"],
  },
  {
    icon: Zap,
    title: "Energy Solutions",
    description: "Eco-friendly solutions to reduce energy costs and environmental impact.",
    features: ["Cost savings", "Green certified", "Smart systems"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decor - Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From ventilation to steel structures, we provide end-to-end solutions for your industrial needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ 
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${index * 100}ms`,
                opacity: 0 // Start hidden for animation
              }}
            >
              {/* Top Gradient Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="flex flex-col h-full">
                {/* Icon Box - Animates color on hover */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">{service.description}</p>
                
                {/* Features Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-xs font-medium bg-secondary px-3 py-1 rounded-full text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link to="/services" className="inline-flex items-center text-primary font-semibold text-sm mt-auto group/link">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Link to="/services">
            <Button variant="hero" size="lg" className="group px-8">
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