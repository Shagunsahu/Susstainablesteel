import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, Leaf, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const certs = [
  {
    title: "ISO 9001:2015",
    desc: "Quality Management System",
    id: "QMS",
    file: "/assets/docs/iso-9001.pdf", 
    icon: Award,
    features: [
      "Consistent quality standards",
      "Customer satisfaction focus",
      "Continuous improvement processes"
    ]
  },
  {
    title: "ISO 14001:2015",
    desc: "Environmental Management System",
    id: "EMS",
    file: "/assets/docs/iso-14001.pdf",
    icon: Leaf,
    features: [
      "Reduced environmental impact",
      "Sustainable practices",
      "Regulatory compliance"
    ]
  },
  {
    title: "ISO 45001:2018",
    desc: "Occupational Health & Safety",
    id: "OHSMS",
    file: "/assets/docs/iso-45001.pdf",
    icon: ShieldCheck,
    features: [
      "Worker safety protocols",
      "Risk prevention systems",
      "Accident reduction measures"
    ]
  }
];

const IsoCertifications = () => {
  return (
    <Layout>
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-background overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
          style={{ backgroundImage: 'url("/assets/se/se1.jpg")' }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Quality Assurance</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            ISO Certified <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our commitment to quality, safety, and environmental responsibility validated by international standards.
          </p>
        </div>
      </section>

      {/* 2. CERTIFICATIONS GRID SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Accreditations
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Internationally Recognized Standards
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Our certifications demonstrate our dedication to maintaining the highest standards across all operations.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {certs.map((cert, i) => (
              <div 
                key={i} 
                className="bg-white border border-slate-200 shadow-card p-8 rounded-3xl transition-all duration-300 group text-center relative overflow-hidden hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_15px_40px_rgba(6,182,212,0.2)]"
              >
                <div className="relative z-10 flex flex-col h-full items-center">
                  
                  {/* Icon Container */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mb-6 text-cyan-600 border border-cyan-100 bg-cyan-50 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:border-0 transition-all">
                    <cert.icon className="w-10 h-10" />
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-2xl font-bold mb-1 text-slate-800">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider mb-4 text-cyan-600">
                    {cert.id}
                  </p>
                  <p className="mb-6 leading-relaxed text-slate-600">
                    {cert.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-8 w-full text-left">
                    {cert.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Download Button */}
                  <div className="mt-auto w-full">
                    <a href={cert.file} download target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="default" 
                        className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 transition-all font-semibold"
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

      {/* 3. WHY CERTIFICATIONS MATTER */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <span className="text-accent font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> Our Commitment
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Why ISO Certifications <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Matter
                </span>
              </h2>
              
              <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                <p>
                  ISO certifications are not just badges on our website—they represent our unwavering commitment to delivering projects that meet international benchmarks for quality, safety, and environmental stewardship.
                </p>
                <p>
                  Each certification requires rigorous audits, continuous improvement, and strict adherence to processes that protect our workers, clients, and the environment.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Third-party verified',
                  'Annual audits',
                  'Continuous improvement',
                  'Global recognition'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border group">
              <img 
                src="/assets/se/se2.jpg" 
                alt="Quality Standards" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-slate-800">
            Ready to Work with a Certified Partner?
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
            Partner with a company that prioritizes quality, safety, and sustainability at every step.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 h-14 px-8 text-lg font-bold shadow-lg group">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 h-14 px-8 text-lg font-bold">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IsoCertifications;
