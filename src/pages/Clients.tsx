import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, Factory, Warehouse, Hammer, HardHat, 
  Cog, Handshake, ArrowRight, CheckCircle2, Globe, MapPin 
} from "lucide-react";

// Client Data from your list
const clients = [
  { name: "LNTMFY Sohar", icon: Building2, location: "Sohar, Oman", type: "Infrastructure" },
  { name: "Al Anwer Ceramic", icon: Factory, location: "Sohar, Oman", type: "Manufacturing" },
  { name: "STS Nizwa", icon: Warehouse, location: "Nizwa, Oman", type: "Logistics" },
  { name: "Halliburton", icon: Hammer, location: "Global / Oman", type: "Oil & Gas" },
  { name: "Talent Electrical", icon: HardHat, location: "Sumail, Oman", type: "Energy" },
  { name: "Oman Chlorine", icon: Cog, location: "Sohar, Oman", type: "Chemical" },
  { name: "Sea Pride", icon: Building2, location: "Sur, Oman", type: "Marine/Food" },
  { name: "Keryas Paper", icon: Factory, location: "Sohar, Oman", type: "Industrial" },
  { name: "Al Hajiry", icon: Warehouse, location: "Muscat, Oman", type: "Trading" },
  { name: "Industrial Minerals", icon: Hammer, location: "Salalah, Oman", type: "Mining" },
];

const stats = [
  { label: "Repeat Clients", value: "85%" },
  { label: "Key Locations", value: "10+" },
  { label: "Major Projects", value: "500+" },
];

const Clients = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      {/* 1. HERO SECTION (Dark Navy Theme) */}
      <section className="relative py-24 bg-background overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-primary/10"></div>
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Our Clients</span>
            </div>
            
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Building for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Industry Leaders</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't just take contracts; we build relationships. Trusted by the region's biggest names to deliver complex steel engineering solutions.
          </p>
        </div>
      </section>

      {/* 2. IMPACT STATS STRIP */}
      <section className="container mx-auto px-4 relative z-30 -mt-20 mb-20">
        <div className="bg-gradient-to-r from-background via-card to-background rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden group border border-border">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 text-foreground">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:-translate-y-2">
                
                <div className="font-display text-4xl md:text-5xl font-bold mb-2 text-primary">
                  {stat.value} 
                </div>
                <p className="text-sm font-bold uppercase tracking-wider opacity-80 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. CLIENTS GRID (Glassmorphism Cards) */}
      <section className="py-24 bg-muted relative">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Valued Partners</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((c, i) => (
              <div 
                key={i} 
                className="group relative bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Gradient Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors pointer-events-none"></div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                      {c.type}
                    </span>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {c.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{c.location}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Background Blob */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-muted rounded-full group-hover:bg-primary/10 transition-colors z-0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGIONAL EXPERTISE (Map Visualization) */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Regional Reach</span>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  Deep Expertise in <br />
                  <span className="text-primary">UAE & Oman</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our strategic presence in key industrial hubs like Sohar, Nizwa, and Dubai allows us to deploy resources quickly and manage logistics efficiently.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Long-term Partnerships", desc: "We build relationships that last beyond a single project." },
                  { title: "Civil Defense Approved", desc: "Fully compliant with regional safety standards." },
                  { title: "Rapid Mobilization", desc: "Teams ready to deploy across the GCC." },
                ].map((val, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:bg-muted transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{val.title}</h4>
                      <p className="text-sm text-muted-foreground">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Map / Visual */}
            <div className="relative">
               <div className="aspect-square rounded-full border border-border relative animate-[spin_60s_linear_infinite]">
                  {/* Decorative Orbits */}
                  <div className="absolute inset-4 rounded-full border border-border/50 border-dashed"></div>
                  <div className="absolute inset-12 rounded-full border border-border/50"></div>
                  
                  {/* Location Dots (Static relative to container) */}
                  <div className="absolute top-1/4 left-1/4">
                     <div className="relative">
                        <div className="w-3 h-3 bg-primary rounded-full relative z-10"></div>
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-card px-2 py-1 rounded text-[10px] font-bold text-foreground border border-border whitespace-nowrap">Dubai HQ</div>
                     </div>
                  </div>

                  <div className="absolute bottom-1/3 right-1/3">
                     <div className="relative">
                        <div className="w-3 h-3 bg-primary rounded-full relative z-10"></div>
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-card px-2 py-1 rounded text-[10px] font-bold text-foreground border border-border whitespace-nowrap">Sohar Office</div>
                     </div>
                  </div>
               </div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <Globe className="w-16 h-16 text-foreground/10 mx-auto mb-2" />
                  <span className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase">Global<br/>Standards</span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-card text-center border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to become our next success story?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join a network of industry leaders who trust Sustainable Steel for their critical infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="xl" className="bg-primary hover:bg-primary/80 text-white font-bold px-10 shadow-lg group">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Clients;