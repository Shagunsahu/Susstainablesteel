import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Factory, Warehouse, Hammer, HardHat, Cog, Handshake, ArrowRight, CheckCircle, Globe } from "lucide-react";

const clients = [
  { name: "LNTMFY Sohar", icon: Building2, location: "Sohar, Oman" },
  { name: "Al Anwer Ceramic Sohar", icon: Factory, location: "Sohar, Oman" },
  { name: "STS Nizwa", icon: Warehouse, location: "Nizwa, Oman" },
  { name: "Halliburton", icon: Hammer, location: "Global / Oman" },
  { name: "Talent Electrical Sumail", icon: HardHat, location: "Sumail, Oman" },
  { name: "Oman Chlorine at Sohar", icon: Cog, location: "Sohar, Oman" },
  { name: "Sea Pride at Sur", icon: Building2, location: "Sur, Oman" },
  { name: "Keryas Paper at Sohar", icon: Factory, location: "Sohar, Oman" },
  { name: "Al Hajiry at Muscat", icon: Warehouse, location: "Muscat, Oman" },
  { name: "Industrial Minerals Company LLY", icon: Hammer, location: "Salalah, Oman" },
];

const values = [
  { title: "Long-term Partnerships", desc: "We build relationships that last beyond a single project." },
  { title: "Quality Assurance", desc: "Delivering consistent excellence to every client." },
  { title: "Regional Expertise", desc: "Deep understanding of UAE & Oman industrial needs." },
];

const Clients = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">Our Portfolio</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to have delivered successful projects for some of the most respected names in the region.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((c, i) => {
              const Icon = c.icon;
              return (
                <div 
                  key={i} 
                  className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{c.name}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Globe className="w-3.5 h-3.5" />
                        <span>{c.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Partnership Approach</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">Building Stronger <br />Connections</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Our success is measured by the success of our clients. We approach every project as a partnership, ensuring open communication, transparency, and a shared commitment to quality.
              </p>
              
              <div className="space-y-4">
                {values.map((val, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground">{val.title}</h4>
                      <p className="text-sm text-muted-foreground">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-95 blur-xl"></div>
                <div className="relative bg-card p-8 rounded-3xl border border-border shadow-2xl text-center">
                    <Handshake className="w-20 h-20 text-primary mx-auto mb-6" />
                    <h3 className="font-display text-2xl font-bold mb-4">Ready to collaborate?</h3>
                    <p className="text-muted-foreground mb-8">
                        Join our list of satisfied clients. Let's discuss how we can add value to your next industrial project.
                    </p>
                    <Link to="/contact">
                        <Button variant="hero" size="xl" className="w-full shadow-lg">
                            Become a Client
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;