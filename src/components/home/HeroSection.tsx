import { useState, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Hook for typewriter effect
const useTypewriter = (words: string[], speed = 150, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? pause : speed, parseInt(Math.random() * 350 + "")));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

// Hook for counting numbers
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

const HeroSection = () => {
  const typewriterText = useTypewriter(["Future", "Infrastructure", "Vision"], 150, 2000);
  const projectCount = useCounter(500);

  // State for 3D Tilt Effect
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10; // Invert Y for natural tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset to flat when mouse leaves
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-background">
      {/* Background Shapes for depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="container mx-auto px-4">
        {/* Promo Banner */}
        <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in">
          <span className="bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 border border-destructive/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            Limited Offer: Free Consultation + 10% Off!
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in relative z-10">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building a Sustainable <br />
              <span className="text-primary min-h-[1.2em] inline-block">
                {typewriterText}
              </span>
              <br />with Steel
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Premier provider of roof ventilation systems, tubular skylights, and steel structure works across UAE & Oman.
            </p>

            {/* Interactive Selector */}
            <div className="bg-card p-4 rounded-xl shadow-lg border border-border mb-8 max-w-md animate-fade-in" style={{ animationDelay: '200ms' }}>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">I am looking for...</label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ventilation">Roof Ventilation</SelectItem>
                    <SelectItem value="skylights">Tubular Skylights</SelectItem>
                    <SelectItem value="steel">Steel Structures</SelectItem>
                  </SelectContent>
                </Select>
                <Link to="/contact">
                  <Button variant="hero">Get Estimate</Button>
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8">
              {["Quality Assured", "Eco-Friendly", "ISO Certified"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm group cursor-pointer">
                  <div className="bg-primary/10 p-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D TILT IMAGE */}
          <div className="relative animate-slide-in-right animation-delay-200 perspective-1000">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-100 ease-out bg-black"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.02, 1.02, 1.02)`,
                transition: "transform 0.1s ease-out" // Smooth movement
              }}
            >
              
              {/* IMAGE */}
              <div className="relative h-[500px] w-full">
                 <img
                  src="src/assets/heroimage.jpg"
                  alt="Construction"
                  className="w-full h-full object-cover opacity-90 pointer-events-none" // prevent image drag
                 />
                 
                 {/* Shine Effect Overlay */}
                 <div 
                   className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300"
                   style={{ opacity: Math.abs(rotate.x) + Math.abs(rotate.y) > 2 ? 0.3 : 0 }} 
                 />
              </div>

              {/* Floating Stats Card - Moves slightly more for parallax depth */}
              <div 
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 pointer-events-none"
                style={{
                  transform: `translateX(${rotate.y * -1.5}px) translateY(${rotate.x * -1.5}px)`, // Parallax: moves opposite to tilt
                  transition: "transform 0.1s ease-out"
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground tabular-nums">
                      {projectCount}+
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;