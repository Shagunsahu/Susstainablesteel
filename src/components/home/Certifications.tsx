import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, Leaf, Award } from "lucide-react";

const certs = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management System",
    id: "QMS",
    file: "/assets/docs/iso-9001.pdf", 
    icon: Award,
  },
  {
    title: "ISO 14001:2015",
    desc: "Environmental Management System",
    id: "EMS",
    file: "/assets/docs/iso-14001.pdf",
    icon: Leaf,
  },
  {
    title: "ISO 45001:2018",
    desc: "Occupational Health & Safety",
    id: "OHSMS",
    file: "/assets/docs/iso-45001.pdf",
    icon: ShieldCheck,
  }
];

const Certifications = () => {
  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
           <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block opacity-80">
             Accreditations
           </span>
           <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
             Certified Excellence
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
             Our commitment to quality, safety, and the environment is validated by international standards.
           </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl border border-border bg-card hover:border-primary hover:shadow-[0_15px_40px_rgba(255,215,0,0.12)] hover:-translate-y-1 transition-all duration-300 group text-center relative overflow-hidden"
            >
               <div className="relative z-10 flex flex-col h-full items-center">
                 
                 {/* Icon Container */}
                 <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary border border-border group-hover:scale-110 transition-transform">
                    <cert.icon className="w-10 h-10" />
                 </div>
                 
                 {/* Text Content */}
                 <h3 className="text-2xl font-bold text-foreground mb-1">{cert.title}</h3>
                 <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">{cert.id}</p>
                 <p className="text-muted-foreground mb-8 leading-relaxed">{cert.desc}</p>
                 
                 {/* Download Button */}
                 <div className="mt-auto w-full">
                   <a href={cert.file} download target="_blank" rel="noopener noreferrer">
                     <Button 
                       variant="default" 
                       className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold"
                     >
                       <Download className="w-4 h-4 mr-2" /> Download PDF
                     </Button>
                   </a>
                 </div>

               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;