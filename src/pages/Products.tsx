import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Sun, Building2, CircleDot, Settings, Lightbulb, Check } from "lucide-react";

const products = [
  {
    category: "Roof Ventilators",
    icon: Wind,
    items: [
      {
        name: "Turbo Ventilator",
        description: "Wind-powered roof ventilator for industrial applications",
        specs: ["Sizes: 14\" - 36\"", "Material: Aluminum/SS", "Wind speed: 3-60 km/h"],
        image: "src/assets/s1.jpg",
      },
      {
        name: "Ridge Ventilator",
        description: "Continuous ridge ventilation for maximum airflow",
        specs: ["Length: Custom", "Material: GI/Aluminum", "Opening: 300-600mm"],
        image: "src/assets/s2.jpg",
      },
      {
        name: "Louver Ventilator",
        description: "Gravity-based ventilation with rain protection",
        specs: ["Sizes: 600x600 - 1200x1200mm", "Material: Aluminum", "Blade angle: 45°"],
        image: "src/assets/s3.jpg",
      },
    ],
  },
  {
    category: "Tubular Skylights",
    icon: Sun,
    items: [
      {
        name: "Residential Skylight",
        description: "Natural daylight solution for homes and small spaces",
        specs: ["Diameter: 10\" - 14\"", "Coverage: Up to 200 sq ft", "UV protection: 99%"],
        image: "src/assets/s4.jpg",
      },
      {
        name: "Commercial Skylight",
        description: "High-capacity daylight system for large spaces",
        specs: ["Diameter: 18\" - 24\"", "Coverage: Up to 500 sq ft", "Diffuser: Prismatic"],
        image: "src/assets/s5.jpg",
      },
      {
        name: "Industrial Skylight",
        description: "Heavy-duty skylight for factories and warehouses",
        specs: ["Diameter: 24\" - 36\"", "Coverage: Up to 1000 sq ft", "Impact resistant"],
        image: "src/assets/s6.jpg",
      },
    ],
  },
  {
    category: "Steel Structures",
    icon: Building2,
    items: [
      {
        name: "Warehouse Buildings",
        description: "Pre-engineered steel warehouses with clear span design",
        specs: ["Span: Up to 80m", "Height: Up to 25m", "Bay spacing: 6-12m"],
        image: "src/assets/p1.jpg",
      },
      {
        name: "Factory Buildings",
        description: "Industrial factory structures with crane support",
        specs: ["Crane capacity: Up to 50T", "Multi-span available", "Mezzanine options"],
        image: "src/assets/p1.jpg",
      },
      {
        name: "Commercial Buildings",
        description: "Multi-story steel frame commercial structures",
        specs: ["Floors: Up to 10", "Fast construction", "Customizable facade"],
        image: "src/assets/p1.jpg",
      },
    ],
  },
];

const features = [
  { icon: CircleDot, title: "Premium Quality", description: "All products meet international standards" },
  { icon: Settings, title: "Customizable", description: "Tailored to your specific requirements" },
  { icon: Lightbulb, title: "Energy Efficient", description: "Designed for optimal energy savings" },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">Our Products</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
            Quality Products for <span className="text-primary">Every Need</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our range of high-quality ventilation, lighting, and steel structure products designed for industrial excellence.
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

      {/* Products by Category */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {products.map((category) => (
            <div key={category.category} className="mb-24 last:mb-0 scroll-mt-24" id={category.category.toLowerCase().replace(" ", "-")}>
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 border-b border-border pb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold">{category.category}</h2>
              </div>

              {/* Product Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product) => (
                  <div
                    key={product.name}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  >
                    {/* Image with Zoom */}
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">Premium</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{product.description}</p>
                      
                      {/* Specs */}
                      <div className="space-y-3 mb-6 bg-secondary/30 p-4 rounded-xl">
                        {product.specs.map((spec) => (
                          <div key={spec} className="flex items-start gap-2 text-xs text-muted-foreground font-medium">
                            <Check className="w-3.5 h-3.5 text-primary mt-0.5" />
                            {spec}
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto">
                        <Link to="/contact">
                          <Button variant="heroOutline" size="sm" className="w-full group/btn">
                            Request Quote
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
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

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom solutions tailored to your specific requirements. Contact us to discuss your project needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="shadow-lg">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;