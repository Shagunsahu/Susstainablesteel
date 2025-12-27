import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Wind, Sun, Building2, Droplets, Hammer, 
  Settings, Lightbulb, Check, X, FileText, ChevronRight 
} from "lucide-react";

// --- DATA TYPES ---
type ProductItem = {
  name: string;
  description: string;
  specs: string[]; 
  details?: { label: string; value: string }[];
  image: string;
};

type Category = {
  id: string;
  category: string;
  description: string;
  icon: any;
  items: ProductItem[];
};

// --- DATA ---
const products: Category[] = [
  {
    id: "roof-ventilators",
    category: "Roof Ventilator Fans",
    description: "Zero-energy ventilation systems made with 80% Stainless Steel and 20% Aluminum.",
    icon: Wind,
    items: [
      {
        name: "SS/Al Hybrid Turbine",
        description: "Self-driven centrifugal ventilator. Eliminates hot, stale air with zero running cost.",
        specs: ["No Electric Cost", "Rust Free Materials", "Silent Operation"],
        details: [
          { label: "Top Plate Material", value: "SS304 (0.5mm) Aerodynamic" },
          { label: "Vanes Material", value: "High Grade Aluminum (H-14)" },
          { label: "No. of Vanes", value: "42 Nos. (0.5mm thick)" },
          { label: "Bearings", value: "SKF-6001 ZZ (Sealed)" },
          { label: "Turbine Diameter", value: "760mm" },
          { label: "Total Weight", value: "8.35 KG" },
        ],
        image: "/assets/rv/rv1.jpg",
      },
      {
        name: "Ridge Ventilator",
        description: "Continuous natural ventilation system for large industrial sheds.",
        specs: ["Custom Throat Width", "Weather Proof", "Zero Maintenance"],
        details: [
          { label: "Material", value: "GI / Aluminum / Galvalume" },
          { label: "Throat Width", value: "300mm - 600mm (Customizable)" },
          { label: "Design", value: "Aerodynamic Continuous Ridge" },
          { label: "Application", value: "Warehouses & Factories" }
        ],
        image: "/assets/rv/rv2.jpg",
      },
    ],
  },
  {
    id: "tubular-skylights",
    category: "Tubular Skylights",
    description: "Energy-saving daylighting that reduces electricity costs by 40%.",
    icon: Sun,
    items: [
      {
        name: "Model 400D & 600D",
        description: "Ideal for workshops and warehouses with heights up to 12m.",
        specs: ["Saves 40% Energy", "Lowers Heat Gain", "Prismatic Diffuser"],
        details: [
          { label: "Roof Height Suitability", value: "Up to 12.0 Meters" },
          { label: "Floor Coverage", value: "8.0m - 10.0m Diameter" },
          { label: "Light Output", value: "250 - 350 Lux" },
          { label: "Dome Material", value: "High Impact Acrylic / Polycarbonate" }
        ],
        image: "/assets/tsl/tsl5.jpg",
      },
      {
        name: "Model 800D",
        description: "High-capacity system for massive industrial complexes (12m+ height).",
        specs: ["Max Light Capture", "Impact Resistant", "Zero Carbon"],
        details: [
          { label: "Roof Height Suitability", value: "12.0m - 15.0m" },
          { label: "Floor Coverage", value: "12.0m Diameter per light" },
          { label: "Reflector", value: "High reflectivity aluminum tube" },
          { label: "Warranty", value: "25 Years on Performance" }
        ],
        image: "/assets/tsl/tsl7.jpg",
      },
    ],
  },
  {
    id: "steel-structures",
    category: "Steel Structures",
    description: "Value-engineered PEB solutions optimized to reduce cost by 5-7%.",
    icon: Building2,
    items: [
      {
        name: "Logistic Warehouses",
        description: "High-bay storage facilities with optimized clear spans.",
        specs: ["Value Engineered", "Clear Span", "High Load Capacity"],
        details: [
          { label: "Steel Grade", value: "High Strength (345 MPa)" },
          { label: "Bay Spacing", value: "Optimized (6m - 12m)" },
          { label: "Roofing", value: "Sandwich Panel / Single Skin" },
          { label: "Primary Application", value: "Logistics & Cold Storage" }
        ],
        image: "/assets/se/se1.jpg",
      },
      {
        name: "Food Process Factories",
        description: "Hygienic steel structures for the food industry.",
        specs: ["Food Safety Compliant", "Integrated Venting", "Epoxy Coated"],
        details: [
          { label: "Compliance", value: "HACCP / Food Safety Standards" },
          { label: "Coating", value: "Food Grade Epoxy Paint" },
          { label: "Ventilation", value: "Integrated Turbine / Ridge Vents" },
          { label: "Structure Type", value: "Portal Frame" }
        ],
        image: "/assets/se/se2.jpg",
      },
    ],
  },
  {
    id: "maintenance",
    category: "Roof Maintenance",
    description: "Waterproofing and sheet replacement to extend building life.",
    icon: Droplets,
    items: [
      {
        name: "Roof Water Proofing",
        description: "Seam sealing system simpler than full roof replacement.",
        specs: ["100% Leak Proof", "Cost Effective", "UV Resistant"],
        details: [
          { label: "Method", value: "Liquid Membrane / Tape Sealing" },
          { label: "Application Areas", value: "End Laps, Side Laps, Gutters" },
          { label: "Compatibility", value: "Sandwich & Single Skin Roofs" },
          { label: "Warranty", value: "Up to 10 Years" }
        ],
        image: "/assets/rm1.jpg",
      },
    ],
  },
];

const features = [
  { icon: Lightbulb, title: "Energy Saving", description: "Save up to 40% on electricity costs with our skylights." },
  { icon: Settings, title: "Value Engineering", description: "Optimized designs that save 5-7% on structural steel costs." },
  { icon: Check, title: "Rust Free", description: "Ventilators made of 80% SS and 20% Aluminum." },
];

const Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(products[0].id);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Scroll Spy / Tab Switcher
  useEffect(() => {
    const handleScroll = () => {
      const sections = products.map(p => document.getElementById(p.id));
      const scrollPosition = window.scrollY + 200; 

      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
          setActiveTab(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial Hash Scroll
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* 1. HERO SECTION */}
      <section className="relative py-28 bg-background overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-primary/10"></div>
           <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border mb-6 backdrop-blur-md">
             <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our Products</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Performance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            High-performance ventilation, daylighting, and steel structure solutions designed for the harsh Middle East climate.
          </p>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={feature.title} className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors animate-fade-in" style={{ animationDelay: `${i*100}ms`}}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. STICKY CATEGORY NAVIGATION */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 py-4 min-w-max">
            {products.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveTab(cat.id);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                <cat.icon className={`w-4 h-4 ${activeTab === cat.id ? "text-white" : "text-foreground/60"}`} />
                {cat.category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PRODUCT LISTING */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {products.map((category) => (
            <div key={category.id} id={category.id} className="mb-24 scroll-mt-32">
              
              {/* Category Heading */}
              <div className="flex flex-col md:flex-row md:items-end gap-6 mb-10 border-b border-border pb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-sm text-primary">
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{category.category}</h2>
                  <p className="text-muted-foreground max-w-2xl">{category.description}</p>
                </div>
              </div>

              {/* Product Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product) => (
                  <div
                    key={product.name}
                    // FIX: Changed from <button> to <div> to allow nested interactive elements
                    className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full text-left cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    
                    {/* Image Area */}
                    <div className="relative h-60 overflow-hidden bg-muted">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-10"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                          backgroundSize: "22px 22px",
                        }}
                      ></div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Quick Specs List */}
                      <div className="space-y-3 mb-6 bg-muted p-4 rounded-xl border border-border flex-grow">
                        {product.specs.map((spec) => (
                          <div key={spec} className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                            {spec}
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto">
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(product);
                          }}
                          className="flex-1 px-3 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2 z-20 relative"
                        >
                          <FileText className="w-4 h-4" />
                          Specs
                        </button>
                        <Link to="/contact" className="flex-1 z-20 relative" onClick={(e) => e.stopPropagation()}>
                          <Button type="button" className="w-full bg-primary hover:bg-primary/80 text-white transition-colors">
                            Quote
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TECH SPECS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          
          <div className="relative bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-display text-2xl font-bold text-foreground">{selectedProduct.name}</h3>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/3 h-40 object-cover rounded-xl" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">Product Overview</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{selectedProduct.description}</p>
                </div>
              </div>

              {/* Technical Table */}
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" /> Technical Specifications
              </h4>
              <div className="border border-border rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-border/60">
                    {selectedProduct.details?.map((detail, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-muted" : "bg-card"}>
                        <td className="px-4 py-3 font-semibold text-foreground w-1/3">{detail.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{detail.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border bg-muted flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedProduct(null)}>Close</Button>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/80 text-white">
                  Request Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Products;