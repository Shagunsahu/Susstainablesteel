import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Wind, Sun, Building2, Wrench, Settings, Zap, ArrowRight, CheckCircle, Fan, Droplets, Hammer } from "lucide-react";

const services = [
  {
    id: "steel",
    icon: Building2,
    title: "Steel Structure Works",
    subtitle: "PEB & Structural Engineering",
    description: "We provide customized design, fabrication, and erection of steel structures. Our innovative solutions are optimized to reduce cost, time, and safety risks.",
    keyPoints: [
      "Value-add engineering saving 5-7% on costs",
      "Logistic Warehouses & Food Process Factories",
      "Multistory Buildings & Car Parks",
      "Customized design to match site conditions"
    ],
    image: "/assets/se/se1.jpg"
  },
  {
    id: "ventilators",
    icon: Fan,
    title: "Roof Ventilator Fans",
    subtitle: "Zero Energy Ventilation Systems",
    description: "Self-driven turbine ventilators that improve air quality by eliminating dust and heat without using electricity.",
    keyPoints: [
      "No Electric Cost & No Noise",
      "Rust Free: 80% SS & 20% Aluminum",
      "Eliminates hot & polluted stale air",
      "Maintenance-free operation"
    ],
    image: "/assets/rv/rv1.jpg" 
  },
  {
    id: "skylights",
    icon: Sun,
    title: "Tubular Skylights",
    subtitle: "Natural Daylighting Systems",
    description: "Energy-saving skylights that deliver natural daylight for up to 10 hours daily, fostering a healthier work environment.",
    keyPoints: [
      "Reduces lighting electricity costs by 40%",
      "Lowers HVAC/Cooling demand",
      "Zero carbon footprint impact",
      "Enhances employee productivity"
    ],
    image: "/assets/tsl/tsl3.jpg"
  },
  {
    id: "waterproofing",
    icon: Droplets,
    title: "Roof Water Proofing",
    subtitle: "Leakage Protection & Coating",
    description: "Comprehensive waterproofing solutions to prevent costly water penetration damage and extend roof life.",
    keyPoints: [
      "Cost-effective alternative to replacement",
      "Seals seams to prevent water penetration",
      "Customized material for Sandwich/Single Skin",
      "Long-term solution vs quick-fix repairs"
    ],
    image: "/assets/rm1.jpg"
  },
  {
    id: "sheet-replacement",
    icon: Hammer,
    title: "Sheet Replacement",
    subtitle: "Roof Maintenance & Upgrades",
    description: "Professional replacement of damaged or aged roof sheets to restore structural integrity and aesthetics.",
    keyPoints: [
      "Sandwich Panel & Single Skin replacement",
      "Minimizes disruption to operations",
      "Enhanced weather resistance",
      "Restores building appearance"
    ],
    image: "/assets/s5.jpg"
  }
];

const Services = () => {
  const location = useLocation();

  // Handle scrolling when URL has a hash (e.g. #roof-ventilators)
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Wait slightly for layout to settle
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      {/* Hero Section */}
      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300"> Our Services</span>
            </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
              Comprehensive <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FF4444]">Industrial Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From ventilation to steel structures, we provide end-to-end solutions for your industrial needs with quality and reliability you can trust.
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              id={service.id} // Binds the ID for scrolling
              className={`scroll-mt-32 group grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-10 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in`}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.keyPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80 font-medium">{point}</span>
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

              {/* Image Content */}
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