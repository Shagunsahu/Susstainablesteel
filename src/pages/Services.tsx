import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { servicesData } from "@/data/services";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <section className="relative py-28 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-blue-600/10 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border mb-6 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground"> Our Services</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Industrial Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From ventilation to steel structures, we provide end-to-end solutions for your industrial needs.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-32 group grid lg:grid-cols-2 gap-12 items-center mb-32 last:mb-10 px-8 py-12 rounded-2xl transition-all duration-300 ${
                index % 2 === 0 
                  ? "bg-white border border-slate-200 shadow-card text-slate-700" 
                  : "bg-background border border-border text-white shadow-2xl"
              } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 ${
                  index % 2 === 0 
                    ? "bg-cyan-50 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600" 
                    : "bg-gradient-to-br from-cyan-500 to-blue-600"
                }`}>
                  <service.icon className={`w-8 h-8 transition-colors ${
                    index % 2 === 0 
                      ? "text-cyan-600 group-hover:text-white" 
                      : "text-white"
                  }`} />
                </div>
                <h2 className={`font-display text-3xl md:text-4xl font-bold mb-2 ${
                  index % 2 === 0 ? "text-slate-800" : "text-foreground"
                }`}>{service.title}</h2>
                <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  index % 2 === 0 ? "text-primary" : "text-accent"
                }`}>{service.subtitle}</p>
                <p className={`mb-8 text-lg leading-relaxed ${
                  index % 2 === 0 ? "text-slate-600" : "text-foreground/80"
                }`}>{service.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.keyPoints.slice(0, 2).map((point) => (
                    <div key={point} className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                      index % 2 === 0 
                        ? "hover:bg-slate-50" 
                        : "hover:bg-accent/10"
                    }`}>
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        index % 2 === 0 ? "text-primary" : "text-accent"
                      }`} />
                      <span className={`text-sm font-medium ${
                        index % 2 === 0 ? "text-slate-700" : "text-foreground/90"
                      }`}>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to={`/services/${service.id}`}>
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0"
                    >
                      View Details
                    </Button>
                  </Link>

                  <Link to="/contact">
                    <Button 
                      variant={index % 2 === 0 ? "hero" : "outline"} 
                      size="lg" 
                      className={`group/btn ${
                        index % 2 === 0 
                          ? "" 
                          : "border-accent text-accent hover:bg-accent hover:text-background"
                      }`}
                    >
                      Get Quote
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Link
                to={`/services/${service.id}`}
                className={`${index % 2 === 1 ? "lg:order-1" : ""} relative perspective-1000 group-hover:z-10 cursor-pointer block`}
              >
                <div className={`absolute inset-0 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ${
                  index % 2 === 0 ? "bg-accent/20" : "bg-gradient-to-br from-cyan-500/20 to-blue-600/20"
                }`}></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary/30 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">Need a Custom Solution?</h2>
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
