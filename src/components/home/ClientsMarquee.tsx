import { Building2, Factory, Warehouse, Hammer, HardHat, Cog, Globe } from "lucide-react";

const clients = [
  { name: "LNTMFY Sohar", icon: Building2 },
  { name: "Al Anwer Ceramic", icon: Factory },
  { name: "STS Nizwa", icon: Warehouse },
  { name: "Halliburton", icon: Hammer },
  { name: "Talent Electrical", icon: HardHat },
  { name: "Oman Chlorine", icon: Cog },
  { name: "Sea Pride at Sur", icon: Globe },
  { name: "Keryas Paper", icon: Factory },
  { name: "Al Hajiry Muscat", icon: Warehouse },
  { name: "Industrial Minerals", icon: Hammer },
];

const ClientsMarquee = () => {
  return (
    <section className="py-16 bg-[#0a1e40] border-y border-white/10 relative overflow-hidden">
      
      {/* 1. Background Pattern (The "Track") */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
            Trusted Partners
        </span>
        <h3 className="text-white font-display text-2xl font-bold">
            Powering Industry Leaders
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group z-10">
        
        {/* 2. Scrolling Content */}
        {/* Added pause-on-hover so users can read the cards */}
        <div className="animate-marquee whitespace-nowrap flex gap-6 items-center hover:[animation-play-state:paused]">
          
          {/* Render 3 sets to ensure smooth infinite loop without gaps */}
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="group/card flex items-center gap-4 bg-[#112b5a] border border-white/5 px-8 py-4 rounded-lg min-w-[280px] hover:border-[#00AEEF] hover:bg-[#0a1e40] hover:shadow-[0_0_20px_rgba(0,174,239,0.15)] transition-all duration-300 cursor-default"
            >
              <div className="p-2 bg-[#0a1e40] rounded-md border border-white/5 group-hover/card:border-[#00AEEF]/50 transition-colors">
                 <client.icon className="w-6 h-6 text-[#00AEEF]" />
              </div>
              <span className="text-slate-300 font-bold text-sm uppercase tracking-wide group-hover/card:text-white transition-colors">
                {client.name}
              </span>
            </div>
          ))}
          
        </div>
        
        {/* 3. Gradient Masks (Seamless edges) */}
        {/* Uses the exact Navy background color #0a1e40 */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a1e40] to-transparent z-20"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a1e40] to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default ClientsMarquee;