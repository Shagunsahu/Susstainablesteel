import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Target, Eye, ShieldCheck, Clock, Award, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- CONSTANTS: Image Pairs for the dynamic layers ---
// Replace these with your actual image paths.
// Each object defines one "slide" containing a large main image and a small detail image.
const imagePairs = [
  {
    large: "/assets/a1.jpg", // Slide 1 Large
    small: "/assets/a2.jpg", // Slide 1 Small
    altMain: "Warehouse Interior Construction",
    altDetail: "Roofing Detail",
  },
  {
    large: "/assets/a3.jpg", // Slide 2 Large
    small: "/assets/a4.jpg", // Slide 2 Small
    altMain: "Completed Steel Structure",
    altDetail: "Engineering Team on Site",
  },
  // Add more pairs here to create a longer loop
  {
      large: "/assets/heroimage.jpg", // Slide 3 Large (reusing hero for demo)
      small: "/assets/a1.jpg",        // Slide 3 Small
      altMain: "Large Scale Industrial Project",
      altDetail: "Structural Beam Close-up",
  }
];

// Reuse the counter hook
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
  const yearsCount = useCounter(20, 1500);
  const navigate = useNavigate();

  // --- STATE FOR DYNAMIC IMAGES ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- TIMER TO CYCLE IMAGES ---
  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle to the next index, looping back to 0 at the end
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup timer on unmount
  }, []);


  const openAboutTop = () => {
    navigate("/about");
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), 50);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      
      {/* 1. Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in">
          <div className="h-1 w-12 bg-[#FF0000] rounded-full"></div>
          <span className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest">About Our Company</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: Dynamic Layered Images Composition --- */}
          {/* We set a specific height container to ensure absolute images stack correctly */}
          <div className="relative animate-fade-in group min-h-[400px] md:min-h-[500px]">
            
            {/* Map through image pairs to create stacked layers */}
            {imagePairs.map((pair, index) => {
               const isActive = index === currentImageIndex;
               // Base classes for smooth fading
               const fadeClasses = `absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`;

               return (
                 <div key={index} className={fadeClasses}>
                    {/* Main Image (Large) */}
                    <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl h-full">
                      <img
                        src={pair.large}
                        alt={pair.altMain}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e40]/80 to-transparent"></div>
                    </div>

                    {/* Secondary Image (Overlapping) */}
                    {/* Note: We use slightly different positioning/sizing for the small image container to ensure it overlaps correctly */}
                    <div className="absolute -bottom-10 -right-10 z-20 w-2/3 h-2/3 rounded-xl overflow-hidden border-4 border-[#0a1e40] shadow-[0_20px_50px_rgba(0,0,0,0.5)] hidden md:block">
                      <img
                        src={pair.small}
                        alt={pair.altDetail}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
                      />
                    </div>
                 </div>
               );
            })}

            {/* Floating "Years" Seal (Must sit on top of all fading layers) */}
            <div className="absolute -top-6 -left-6 z-30 bg-[#FF0000] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)] animate-float border-4 border-[#0a1e40]">
              <span className="text-4xl font-display font-bold tabular-nums">{yearsCount}+</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-center leading-tight">Years of<br/>Excellence</span>
            </div>

            {/* Decorative Dots (Behind everything) */}
            <div className="absolute -bottom-12 -left-12 z-0">
               <div className="w-24 h-24 opacity-20" style={{ backgroundImage: 'radial-gradient(#00AEEF 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>
            </div>
          </div>

          {/* --- RIGHT: Content --- */}
          <div className="animate-slide-in-right space-y-8" style={{ animationDelay: "200ms" }}>
            
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Building the Future with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Sustainable Steel</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-[#00AEEF]/30 pl-6">
                From humble beginnings to becoming one of the leading PEB contractors in UAE & Oman. We combine engineering precision with sustainable practices to deliver structures that last.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#112b5a]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg group/card hover:-translate-y-2 hover:border-[#00AEEF]/50 hover:shadow-[0_10px_30px_rgba(0,174,239,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center mb-4 group-hover/card:bg-[#00AEEF] transition-colors duration-300">
                  <Eye className="w-6 h-6 text-[#00AEEF] group-hover/card:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover/card:text-[#00AEEF] transition-colors">Our Vision</h3>
                <p className="text-sm text-slate-400">To be the region's most trusted partner for complex steel engineering challenges.</p>
              </div>

              <div className="bg-[#112b5a]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg group/card hover:-translate-y-2 hover:border-[#FF0000]/50 hover:shadow-[0_10px_30px_rgba(255,0,0,0.15)] transition-all duration-300">
                 <div className="w-12 h-12 rounded-lg bg-[#FF0000]/10 flex items-center justify-center mb-4 group-hover/card:bg-[#FF0000] transition-colors duration-300">
                  <Target className="w-6 h-6 text-[#FF0000] group-hover/card:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover/card:text-[#FF0000] transition-colors">Our Mission</h3>
                <p className="text-sm text-slate-400">Delivering projects safely, on time, and within budget through innovation.</p>
              </div>
            </div>

            {/* Why Choose Us Pills */}
            <div>
               <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Why Choose Us?</h4>
               <div className="grid grid-cols-2 gap-3">
                 {[
                   { icon: ShieldCheck, text: "Quality First Approach" },
                   { icon: Clock, text: "On-Time Delivery" },
                   { icon: Award, text: "ISO Certified" },
                   { icon: Leaf, text: "Eco-Friendly" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors group/pill">
                      <item.icon className="w-5 h-5 text-[#00AEEF] group-hover/pill:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-slate-300 group-hover/pill:text-white transition-colors">{item.text}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* CTA Button */}
            <Button onClick={openAboutTop} size="xl" className="bg-[#FF0000] hover:bg-red-700 text-white font-bold px-8 shadow-lg shadow-red-900/20 group mt-4">
              Read Our Full Story 
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;