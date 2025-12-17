import { Button } from "@/components/ui/button";
import { Download, FileCheck, ShieldCheck, Leaf, Award } from "lucide-react";

const certs = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management System",
    id: "QMS",
    file: "/assets/docs/iso-9001.pdf", 
    icon: Award,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hoverBorder: "group-hover:border-blue-200"
  },
  {
    title: "ISO 14001:2015",
    desc: "Environmental Management System",
    id: "EMS",
    file: "/assets/docs/iso-14001.pdf",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    hoverBorder: "group-hover:border-green-200"
  },
  {
    title: "ISO 45001:2018",
    desc: "Occupational Health & Safety",
    id: "OHSMS",
    file: "/assets/docs/iso-45001.pdf",
    icon: ShieldCheck,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    hoverBorder: "group-hover:border-orange-200"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
           <span className="text-[#0a1e40] font-bold tracking-widest uppercase text-sm mb-2 block opacity-60">
             Accreditations
           </span>
           <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0a1e40] mb-4">
             Certified Excellence
           </h2>
           <p className="text-slate-500 max-w-2xl mx-auto text-lg">
             Our commitment to quality, safety, and the environment is validated by international standards.
           </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border ${cert.border} ${cert.bg} ${cert.hoverBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center relative overflow-hidden`}
            >
               <div className="relative z-10 flex flex-col h-full items-center">
                 
                 {/* Icon Container */}
                 <div className={`w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 ${cert.color} group-hover:scale-110 transition-transform`}>
                    <cert.icon className="w-10 h-10" />
                 </div>
                 
                 {/* Text Content */}
                 <h3 className="text-2xl font-bold text-[#0a1e40] mb-1">{cert.title}</h3>
                 <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-4">{cert.id}</p>
                 <p className="text-slate-600 mb-8 leading-relaxed">{cert.desc}</p>
                 
                 {/* Download Button */}
                 <div className="mt-auto w-full">
                   <a href={cert.file} download target="_blank" rel="noopener noreferrer">
                     <Button 
                       variant="outline" 
                       className="w-full h-12 bg-white border-slate-200 hover:bg-[#0a1e40] hover:text-white hover:border-[#0a1e40] transition-all font-semibold"
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