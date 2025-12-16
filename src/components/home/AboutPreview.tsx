import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Target, Eye, ShieldCheck, Clock, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- CONSTANTS: Image Pairs ---
const imagePairs = [
  {
    large: "/assets/a1.jpg", 
    small: "/assets/a2.jpg", 
    altMain: "Warehouse Interior Construction",
    altDetail: "Roofing Detail",
  },
  {
    large: "/assets/a3.jpg", 
    small: "/assets/a4.jpg", 
    altMain: "Completed Steel Structure",
    altDetail: "Engineering Team on Site",
  },
  {
      large: "/assets/heroimage.jpg", 
      small: "/assets/a1.jpg",        
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
        setCount(Math.ceil(start)); // Changed to ceil for cleaner integers
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const AboutPreview = () => {
  // Updated to 22 years based on "Since 2002" 
  const yearsCount = useCounter(22, 2000);
  const navigate = useNavigate();

  // --- STATE FOR DYNAMIC IMAGES ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- TIMER TO CYCLE IMAGES ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
    }, 5000); 

    return () => clearInterval(interval); 
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
          <span className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest">Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT: Dynamic Layered Images Composition --- */}
          <div className="relative animate-fade-in group min-h-[400px] md:min-h-[500px]">
            
            {imagePairs.map((pair, index) => {
               const isActive = index === currentImageIndex;
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
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e40]/80 to-transparent"></div>
                   </div>

                   {/* Secondary Image (Overlapping) */}
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

            {/* Floating "Years" Seal - Updated Count */}
            <div className="absolute -top-6 -left-6 z-30 bg-[#FF0000] text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)] animate-float border-4 border-[#0a1e40]">
              <span className="text-4xl font-display font-bold tabular-nums">{yearsCount}+</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-center leading-tight">Years of<br/>Success</span>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-12 -left-12 z-0">
               <div className="w-24 h-24 opacity-20" style={{ backgroundImage: 'radial-gradient(#00AEEF 2px, transparent 2px)', backgroundSize: '10px 10px' }}></div>
            </div>
          </div>

          {/* --- RIGHT: Content --- */}
          <div className="animate-slide-in-right space-y-8" style={{ animationDelay: "200ms" }}>
            
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The "First Option" for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Challenging Projects</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-[#00AEEF]/30 pl-6">
                Sustainable Steel (popularly known as <strong>Hurricane Vent Co LLC</strong> in Oman) has earned a reputation for reliability. Many clients give us the "first option" to take up a contract before considering others.
              </p>
            </div>

            {/* Vision & Mission Cards - Text aligned with PDF */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#112b5a]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg group/card hover:-translate-y-2 hover:border-[#00AEEF]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#00AEEF]/10 flex items-center justify-center mb-4 group-hover/card:bg-[#00AEEF] transition-colors duration-300">
                  <Eye className="w-6 h-6 text-[#00AEEF] group-hover/card:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover/card:text-[#00AEEF] transition-colors">Our Vision</h3>
                <p className="text-sm text-slate-400">To be the most sought-after PEB contractor for projects where safety and schedule are critical.</p>
              </div>

              <div className="bg-[#112b5a]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 shadow-lg group/card hover:-translate-y-2 hover:border-[#FF0000]/50 transition-all duration-300">
                 <div className="w-12 h-12 rounded-lg bg-[#FF0000]/10 flex items-center justify-center mb-4 group-hover/card:bg-[#FF0000] transition-colors duration-300">
                  <Target className="w-6 h-6 text-[#FF0000] group-hover/card:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover/card:text-[#FF0000] transition-colors">Our Mission</h3>
                <p className="text-sm text-slate-400">Delivering projects safely, on time, and within budget while adhering to high-quality standards.</p>
              </div>
            </div>

            {/* Why Choose Us Pills - Updated with Value Engineering */}
            <div>
               <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Our Competitive Edge</h4>
               <div className="grid grid-cols-2 gap-3">
                 {[
                   { icon: ShieldCheck, text: "Quality Execution" }, // [cite: 22]
                   { icon: Clock, text: "Timely Completion" }, // [cite: 22]
                   { icon: Award, text: "ISO 9001 Certified" }, // [cite: 52]
                   { icon: TrendingUp, text: "Value Eng. (5-7% Saved)" }, // 
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors group/pill">
                      <item.icon className="w-5 h-5 text-[#00AEEF] group-hover/pill:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-slate-300 group-hover/pill:text-white transition-colors whitespace-nowrap">{item.text}</span>
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