import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Wind, Sun, Building2, Wrench, Settings, Zap, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Roof Ventilators",
    description: "Industrial roof ventilation systems designed for warehouses, factories, and industrial facilities. Our ventilators ensure optimal airflow and temperature control.",
    features: ["Natural ventilation without electricity", "Energy efficient operation", "Durable weather-resistant design", "Low maintenance requirements", "Custom sizes available", "Quick installation"],
    image: "/assets/s1.jpg",
  },
  {
    icon: Sun,
    title: "Tubular Skylights",
    description: "Innovative natural lighting solutions that capture and distribute sunlight throughout your industrial spaces. Reduce energy consumption while creating a brighter workspace.",
    features: ["UV protection coating", "Significant energy cost reduction", "Eco-friendly design", "Leak-proof installation", "Various diameter options", "Diffuser lens technology"],
    image: "/assets/s5.jpg",
  },
  {
    icon: Building2,
    title: "Steel Structures",
    description: "Pre-engineered building solutions for warehouses, factories, commercial buildings, and more. Our steel structures are designed for durability and efficiency.",
    features: ["Custom design solutions", "Quick construction time", "Long-lasting durability", "Cost-effective pricing", "Seismic resistant designs", "Expandable structures"],
    image: "/assets/s4.jpg",
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description: "Professional installation services executed by experienced teams. We ensure quality workmanship, adherence to safety standards, and timely project completion.",
    features: ["Expert installation team", "Safe work practices", "On-time project delivery", "Quality assurance checks", "Minimal site disruption", "Post-installation support"],
    image: "/assets/s7.jpg",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Comprehensive maintenance programs designed to keep your installations running at peak efficiency. Regular inspections and timely repairs extend the life of your equipment.",
    features: ["Regular inspection schedules", "Quick repair services", "24/7 emergency support", "Preventive maintenance", "Performance optimization", "Annual service contracts"],
    image: "/assets/s1.jpg",
  },
  {
    icon: Zap,
    title: "Energy Solutions",
    description: "Eco-friendly energy solutions designed to reduce costs and minimize environmental impact. Smart systems that optimize energy usage.",
    features: ["Significant cost savings", "Green certified solutions", "Smart monitoring systems", "Renewable energy integration", "Carbon footprint reduction", "Energy audit services"],
    image: "/assets/s2.jpg",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary rounded-full blur-xl animate-float"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="text-primary text-sm font-bold uppercase tracking-widest border border-primary/20 px-4 py-1.5 rounded-full">Our Services</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
              Comprehensive <br /><span className="text-primary">Industrial Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From ventilation to steel structures, we provide end-to-end solutions for your industrial needs with quality and reliability you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in`}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="group/btn">
                    Get Quote for {service.title}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Image Content - With Tilt Effect */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative perspective-1000 group-hover:z-10`}>
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Our team of experts can design and deliver tailored solutions to meet your specific industrial requirements.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group shadow-xl">
              Contact Our Experts
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;