import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Ruler, 
  FileCheck, 
  ShieldCheck, 
  Scale, 
  BookOpen, 
  ArrowRight, 
  Download,
  Settings
} from "lucide-react";

const designCodes = [
  { code: "IS 800 : 2007", title: "General Construction in Steel - Code of Practice" },
  { code: "IS 875 : 1987", title: "Code of Practice for Design Loads (Parts 1, 2 & 3)" },
  { code: "IS 1893 : 2002", title: "Criteria for Earthquake Resistant Design of Structures" },
  { code: "MBMA 2006", title: "Metal Building Manufacturers Association Manual" },
  { code: "AISC 360-10", title: "Specification for Structural Steel Buildings" },
  { code: "AWS D1.1", title: "Structural Welding Code - Steel" },
];

const materialSpecs = [
  { component: "Primary Members", material: "High Grade Steel Plate", spec: "ASTM A572 Grade 50 / IS 2062 E350", yield: "345 MPa (50 ksi)" },
  { component: "Secondary Members", material: "Cold Formed Gi/Black", spec: "ASTM A653 / IS 277", yield: "345 MPa (50 ksi)" },
  { component: "Sheeting", material: "Galvalume / Aluzinc", spec: "ASTM A792 AZ150", yield: "550 MPa" },
  { component: "Anchor Bolts", material: "Carbon Steel", spec: "IS 2062 Grade A / ASTM A36", yield: "240 MPa" },
  { component: "High Strength Bolts", material: "Hardened Steel", spec: "ASTM A325 / IS 3757 (8.8 Grade)", yield: "640 MPa" },
];

const PEBSpecs = () => {
  return (
    <Layout>
      {/* Technical Hero */}
      <section className="relative py-20 bg-[#0a1e40] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm bg-white/10 px-3 py-1 rounded-md">Engineering Data</span>
            <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
              Technical Specifications & <span className="text-primary">Design Standards</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              We adhere to strict engineering protocols, utilizing advanced software (STAAD.Pro, MBS) to ensure structural integrity and code compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Design Codes & Standards */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold">Applicable Design Codes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designCodes.map((item, i) => (
              <div key={i} className="bg-card border-l-4 border-primary p-6 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-primary mb-2">{item.code}</h3>
                <p className="text-sm text-muted-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Structural System Explanation */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <Settings className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold">PEB Structural System</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left: Description */}
             <div className="space-y-8">
                <div className="bg-background p-6 rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div> Primary Framing
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rigid frames consisting of built-up tapered columns and rafters. Flanges and webs are joined by continuous automatic submerged arc welding. All connections are field bolted using high-strength Grade 8.8 bolts.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-xl border border-border">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div> Secondary Framing
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cold-formed "Z" and "C" sections (Purlins and Girts) acting as struts for the main frame. Manufactured from high-grade steel (min 345 MPa yield) with G90 galvanization for corrosion resistance.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-xl border border-border">
                   <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div> Sheeting & Cladding
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Profiled steel sheets (Trapezoidal/Standing Seam) with Aluzinc coating (AZ150). Available in various thicknesses (0.47mm to 0.70mm) and custom colors.
                  </p>
                </div>
             </div>

             {/* Right: Placeholder for Technical Drawing */}
             <div className="relative h-full min-h-[400px] bg-white border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-8 text-center">
                <Ruler className="w-16 h-16 text-gray-300 mb-4" />
                <p className="font-bold text-gray-500">Typical Cross Section Drawing</p>
                <p className="text-xs text-gray-400 mt-2 max-w-sm">
                  [Image Placeholder: Insert a CAD drawing here showing Rafter, Column, Haunch connection, Purlin spacing, and Anchor bolt details]
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Load Considerations */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <Scale className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold">Design Load Considerations</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left border-r border-white/20">Load Type</th>
                  <th className="p-4 text-left border-r border-white/20">Standard Value (Customizable)</th>
                  <th className="p-4 text-left">Description / Reference</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border hover:bg-secondary/20">
                  <td className="p-4 font-bold">Dead Load</td>
                  <td className="p-4">Self-weight + 0.10 - 0.15 kN/m²</td>
                  <td className="p-4 text-muted-foreground">Includes weight of framing, sheeting, insulation, and MEP allowances.</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/20">
                  <td className="p-4 font-bold">Live Load (Roof)</td>
                  <td className="p-4">0.57 kN/m² - 0.75 kN/m²</td>
                  <td className="p-4 text-muted-foreground">As per IS 875 Part 2 for inaccessible roofs.</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/20">
                  <td className="p-4 font-bold">Wind Speed</td>
                  <td className="p-4">120 km/h - 160 km/h</td>
                  <td className="p-4 text-muted-foreground">Based on location topography and IS 875 Part 3 Basic Wind Speed map.</td>
                </tr>
                <tr className="border-b border-border hover:bg-secondary/20">
                  <td className="p-4 font-bold">Seismic Zone</td>
                  <td className="p-4">Zone II, III, IV, or V</td>
                  <td className="p-4 text-muted-foreground">Design acceleration spectrum as per IS 1893:2002.</td>
                </tr>
                <tr className="hover:bg-secondary/20">
                  <td className="p-4 font-bold">Collateral Load</td>
                  <td className="p-4">0.05 - 0.25 kN/m²</td>
                  <td className="p-4 text-muted-foreground">Allowance for lighting, sprinklers, and HVAC ducts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Material Specifications */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <FileCheck className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold">Material Specifications</h2>
          </div>

          <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary text-foreground font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Component</th>
                    <th className="p-4">Material / Type</th>
                    <th className="p-4">Standard Spec</th>
                    <th className="p-4">Min. Yield Strength (Fy)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {materialSpecs.map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="p-4 font-semibold">{row.component}</td>
                      <td className="p-4">{row.material}</td>
                      <td className="p-4 text-muted-foreground">{row.spec}</td>
                      <td className="p-4 font-mono text-primary">{row.yield}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quality Assurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
           <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <h2 className="font-display text-3xl font-bold">Quality & Compliance</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Weld Testing", desc: "100% Visual Inspection, MPI & Ultrasonic Testing (UT) on critical joints." },
              { title: "Design Software", desc: "Detailed analysis using STAAD.Pro and MBS for deflection and stress checks." },
              { title: "Surface Prep", desc: "Shot blasting to SA 2.5 standards before painting." },
              { title: "Tolerance", desc: "Fabrication tolerances maintained as per MBMA guidelines." },
            ].map((qa, i) => (
              <div key={i} className="border border-border p-6 rounded-xl hover:bg-secondary/30 transition-colors">
                <div className="w-2 h-8 bg-green-500 rounded-full mb-4"></div>
                <h3 className="font-bold text-lg mb-2">{qa.title}</h3>
                <p className="text-sm text-muted-foreground">{qa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Download */}
      <section className="py-16 bg-[#0a1e40] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Need Detailed Engineering Drawings?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our engineering department for project-specific load reactions and anchor bolt plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="xl" variant="secondary" className="font-bold">
                Contact Engineering Team
              </Button>
            </Link>
            <Button size="xl" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
              <Download className="w-4 h-4 mr-2" /> Download Spec Sheet (PDF)
            </Button>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PEBSpecs;