import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// --- HOOK: Typewriter Effect ---
const useTypewriter = (words: string[], typingSpeed = 100, pauseDuration = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return `${currentText}${blink ? "|" : ""}`;
};

const HeroSection = () => {
  // Updated text for Typer Effect
  const typewriterText = useTypewriter(["Warehouses", "Factories", "Multi-Level Car Parks", "The Future"], 100, 5000);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      
      {/* 1. Full-Width Background Image with Deep Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/heroimage.jpg" // Ensure this image exists in your public/assets folder
          alt="Steel Structure Background" 
          className="w-full h-full object-cover animate-fade-in"
        />
        {/* Gradient Overlay: Deep Navy (#0a1e40) opacity 90% */}
        <div className="absolute inset-0 bg-[#0a1e40]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e40] via-transparent to-transparent"></div>
      </div>

      {/* 2. Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 3. Main Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl animate-fade-in">
          
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            
            {/* 1. LIMITED OFFER BADGE (New) */}
            <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in">

          <span className="bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-destructive/20">

            <span className="relative flex h-3 w-3">

              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>

            </span>

            Limited Offer: Free Consultation + 10% Off!

          </span>

        </div>
            {/* 2. ISO 9001:2015 CERTIFIED BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-secondary mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00AEEF]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-white">ISO 9001:2015 Certified</span>
          </div>
        </div>
          {/* Headline with Typewriter */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF4444]">
              {typewriterText}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-[#00AEEF] pl-6">
            The region's premier provider of PEB steel structures and zero-energy ventilation. 
            We deliver <span className="text-white font-semibold">5-7% cost savings</span> through value-add engineering.
          </p>
          {/* --- INTERACTIVE SELECTOR --- */}
          <div className="bg-secondary/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-10 max-w-lg shadow-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            <label className="text-sm font-bold text-slate-300 mb-3 block uppercase tracking-wider">
              I am looking for...
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Select>
                <SelectTrigger className="w-full h-12 bg-background/50 border-white/10 text-white focus:ring-[#00AEEF]">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent className="bg-[#0a1e40] border-[#1e3a8a] text-slate-300">
                  <SelectItem value="ventilation">Roof Ventilation</SelectItem>
                  <SelectItem value="skylights">Tubular Skylights</SelectItem>
                  <SelectItem value="steel">Steel Structures</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="w-full h-12 px-6 bg-[#FF0000] hover:bg-red-700 text-white font-bold whitespace-nowrap">
                  Get Estimate
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators (Bottom) 
          <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-400">
            {[
                "Turnkey Solutions", 
                "Civil Defense Approved", 
                "20+ Years Experience",
                "500+ Projects Delivered"
            ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-[#00AEEF]/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <span className="uppercase tracking-wide">{item}</span>
                </div>
            ))}
          </div>*/}

        </div>
      </div>

      {/* 4. Decorative Floating Element */}
      <div className="hidden xl:block absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px] animate-[spin_120s_linear_infinite]">
          <path fill="#00AEEF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.9,32.3C59.6,43.1,48.3,51.8,36.5,58.8C24.7,65.8,12.4,71.1,-0.6,72.1C-13.6,73.1,-27.2,69.8,-38.7,62.1C-50.2,54.4,-59.6,42.3,-66.6,29.1C-73.6,15.9,-78.2,1.6,-76.3,-11.8C-74.4,-25.2,-66,-37.7,-55.4,-46.8C-44.8,-55.9,-32,-61.6,-19.1,-64.8C-6.2,-68,-0.9,-68.7,11.8,-76.4L44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;