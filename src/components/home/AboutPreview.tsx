import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

// Reuse the counter hook for consistency
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const AboutPreview = () => {
  const yearsCount = useCounter(20, 1500); // Counts to 20 over 1.5 seconds

  const highlights = [
    "Quality-first approach",
    "On-time completion",
    "High-quality standards",
    "Customer satisfaction",
    "Eco-friendly solutions",
    "Competitive pricing",
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-4 animate-fade-in">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
          <div className="h-px bg-primary/20 flex-1 max-w-[100px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Interactive Floating Images Grid */}
          <div className="relative animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <img
                  src="src/assets/a1.jpg"
                  alt="Construction site"
                  className="rounded-2xl shadow-card hover:scale-105 transition-transform duration-500 animate-float"
                  style={{ animationDelay: "0ms" }}
                />
                <img
                  src="/assets/a2.jpg"
                  alt="Steel structure"
                  className="rounded-2xl shadow-card hover:scale-105 transition-transform duration-500 animate-float"
                  style={{ animationDelay: "1000ms" }}
                />
              </div>
              <div className="space-y-4">
                <img
                  src="/assets/a3.jpg"
                  alt="Industrial facility"
                  className="rounded-2xl shadow-card hover:scale-105 transition-transform duration-500 animate-float"
                  style={{ animationDelay: "2000ms" }}
                />
                <img
                  src="/assets/a4.jpg"
                  alt="Workers on site"
                  className="rounded-2xl shadow-card hover:scale-105 transition-transform duration-500 animate-float"
                  style={{ animationDelay: "500ms" }}
                />
              </div>
            </div>
            
            {/* Animated Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-2xl p-6 shadow-2xl animate-fade-in border-4 border-background group hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 rounded-2xl bg-primary opacity-20 animate-ping group-hover:opacity-0"></div>
              <div className="relative text-center">
                <p className="text-4xl font-bold tabular-nums mb-1">{yearsCount}+</p>
                <p className="text-xs font-medium uppercase tracking-wide opacity-90">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-slide-in-right" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Building Excellence <span className="text-primary">Since 2002</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              From humble beginnings to becoming one of the medium-sized construction companies in Oman, we've built our reputation on quality, reliability, and innovation.
            </p>

            {/* Interactive Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Eye className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  To be the most sought-after PEB contractor for challenging projects.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <Target className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300 group-hover:rotate-12" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  To provide project implementations with safety, on time, and within budget.
                </p>
              </div>
            </div>

            {/* Highlights List with Hover Effects */}
            <div className="mb-10">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                Why Choose Us 
                <span className="h-px bg-border flex-1 ml-4"></span>
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 group cursor-default">
                    <CheckCircle className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300 group-hover:scale-110" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/about">
              <Button variant="hero" size="lg" className="group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;