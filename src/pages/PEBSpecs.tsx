import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Ruler, FileCheck, ShieldCheck, Scale, BookOpen, 
  ArrowRight, Download, Settings, TrendingUp, CheckCircle2 
} from "lucide-react";

// Standard Codes (Keep existing accurate data)
const designCodes = [
  { code: "IS 800 : 2007", title: "General Construction in Steel - Code of Practice" },
  { code: "IS 875 : 1987", title: "Code of Practice for Design Loads (Parts 1, 2 & 3)" },
  { code: "IS 1893 : 2002", title: "Criteria for Earthquake Resistant Design" },
  { code: "MBMA 2006", title: "Metal Building Manufacturers Association Manual" },
  { code: "AISC 360-10", title: "Specification for Structural Steel Buildings" },
  { code: "AWS D1.1", title: "Structural Welding Code - Steel" },
];

const materialSpecs = [
  { component: "Primary Members", material: "High Grade Steel Plate", spec: "ASTM A572 Gr 50 / IS 2062 E350", yield: "345 MPa (50 ksi)" },
  { component: "Secondary Members", material: "Cold Formed Gi/Black", spec: "ASTM A653 / IS 277", yield: "345 MPa (50 ksi)" },
  { component: "Sheeting", material: "Galvalume / Aluzinc", spec: "ASTM A792 AZ150", yield: "550 MPa" },
  { component: "Anchor Bolts", material: "Carbon Steel", spec: "IS 2062 Gr A / ASTM A36", yield: "240 MPa" },
  { component: "High Strength Bolts", material: "Hardened Steel", spec: "ASTM A325 / IS 3757 (8.8)", yield: "640 MPa" },
];

const PEBSpecs = () => {
  return (
    <Layout>
      {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      {/* 1. TECHNICAL HERO (Blueprint Style) */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10"></div>
        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Engineering Data 
                 </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Technical <span className="text-primary">Specifications</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed border-l-4 border-primary pl-6">
              We utilize advanced software (STAAD.Pro, MBS) to ensure structural integrity. 
              Our value engineering approach typically yields <span className="text-foreground font-bold">5-7% cost savings</span> without compromising safety.
            </p>
          </div>
        </div>
      </section>

      {/* 2. VALUE ENGINEERING  */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
           <div className="bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden shadow-lg">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-primary/20">
                    <TrendingUp className="w-8 h-8 text-primary" />
                 </div>
                 <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold mb-2 text-foreground">The "Value Engineering" Advantage</h3>
                    <p className="text-muted-foreground">
                      Unlike standard fabricators, we perform rigorous structural analysis to optimize steel weight. 
                      This process directly translates to a <span className="text-primary font-bold">5-7% reduction in project costs</span>  while meeting all safety codes.
                    </p>
                 </div>
                 <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/80 text-white font-bold px-8 h-12">
                      Request Analysis
                    </Button>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 3. DESIGN CODES (Cards Layout) */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">Design Standards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designCodes.map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Code Reference</div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{item.code}</h3>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL SPECS (Datasheet Style) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <FileCheck className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">Material Specifications</h2>
          </div>

          <div className="border border-border rounded-xl overflow-hidden shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-5">Component</th>
                  <th className="p-5">Material Description</th>
                  <th className="p-5 hidden md:table-cell">Standard Spec</th>
                  <th className="p-5">Min. Yield (Fy)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {materialSpecs.map((row, i) => (
                  <tr key={i} className={`hover:bg-muted transition-colors ${i % 2 === 0 ? 'bg-muted' : 'bg-card'}`}>
                    <td className="p-5 font-bold text-foreground">{row.component}</td>
                    <td className="p-5 text-foreground">{row.material}</td>
                    <td className="p-5 text-muted-foreground font-mono text-xs hidden md:table-cell">{row.spec}</td>
                    <td className="p-5 font-bold text-primary">{row.yield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. STRUCTURAL COMPONENTS (Visual Breakdown) */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <Scale className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">PEB Anatomy</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
             {/* Primary Members Card */}
             <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                   <span className="w-3 h-3 bg-primary rounded-full"></span> Primary Framing
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                   The main load-bearing frames. We use built-up "I" sections fabricated from high-grade steel plates (ASTM A572), joined by continuous automatic submerged arc welding.
                </p>
                <ul className="space-y-3">
                   {["Rigid Frames (Columns & Rafters)", "Crane Beams", "Wind Bracing"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                         <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Secondary Members Card */}
             <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                   <span className="w-3 h-3 bg-primary rounded-full"></span> Secondary Framing
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                   Cold-formed "Z" and "C" sections (Purlins & Girts) that support the sheeting. We use G90 galvanized steel (min 345 MPa) for superior corrosion resistance.
                </p>
                <ul className="space-y-3">
                   {["Purlins & Girts", "Eave Struts", "Base Angles"].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                         <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* CTA DOWNLOAD */}
      <section className="py-16 bg-card text-center relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-display font-bold mb-4 text-foreground">Ready to Optimize Your Structure?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get a detailed design proposal including anchor bolt plans and load reaction data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="xl" className="bg-primary hover:bg-primary/80 text-white font-bold shadow-lg">
                Contact Engineering
              </Button>
            </Link>
            <Button size="xl" variant="outline" className="border-border hover:bg-muted">
              <Download className="w-4 h-4 mr-2" /> Download Brochure
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PEBSpecs;