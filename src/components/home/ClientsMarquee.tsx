import { Building2, Factory, Warehouse, Hammer, HardHat, Cog } from "lucide-react";

const clients = [
  { name: "LNTMFY Sohar", icon: Building2 },
  { name: "Al Anwer Ceramic Sohar", icon: Factory },
  { name: "STS Nizwa", icon: Warehouse },
  { name: "Halliburton", icon: Hammer },
  { name: "Talent Electrical Sumail", icon: HardHat },
  { name: "Oman Chlorine at Sohar", icon: Cog },
  { name: "Sea Pride at Sur", icon: Building2 },
  { name: "Keryas Paper at Sohar", icon: Factory },
  { name: "Al Hajiry at Muscat", icon: Warehouse },
  { name: "Industrial Minerals Company LLY at Salalah", icon: Hammer },
];

const ClientsMarquee = () => {
  return (
    <section className="py-10 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* First Set */}
          {clients.map((client, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-default opacity-70 hover:opacity-100">
              <client.icon className="w-8 h-8" />
              <span className="text-xl font-bold font-display">{client.name}</span>
            </div>
          ))}
          {/* Duplicate Set for Infinite Loop */}
          {clients.map((client, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-default opacity-70 hover:opacity-100">
              <client.icon className="w-8 h-8" />
              <span className="text-xl font-bold font-display">{client.name}</span>
            </div>
          ))}
           {/* Triplicate Set for Safety */}
           {clients.map((client, i) => (
            <div key={`tri-${i}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-default opacity-70 hover:opacity-100">
              <client.icon className="w-8 h-8" />
              <span className="text-xl font-bold font-display">{client.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradients to hide edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
