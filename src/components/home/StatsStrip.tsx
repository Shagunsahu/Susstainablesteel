import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Award, Building, Users } from "lucide-react";

// --- Custom Hook for Counting Up Animation ---
const useCounter = (end: number, duration: number = 2000, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const stats = [
  {
    id: 1,
    value: 22,
    label: "Years Experience",
    icon: Building,
    suffix: "+",
    subtext: "Since 2002",
    animate: true, // <--- ANIMATION ENABLED
  },
  {
    id: 2,
    value: 500,
    label: "Projects Completed",
    icon: CheckCircle2,
    suffix: "+",
    subtext: "Across UAE & Oman",
    animate: true, // <--- ANIMATION ENABLED
  },
  {
    id: 3,
    value: 9001,
    label: "Certified",
    icon: Award,
    prefix: "ISO ",
    subtext: "Quality Assured",
    animate: false, // <--- STATIC (No Counter)
  },
  {
    id: 4,
    value: 100,
    label: "Client Satisfaction",
    icon: Users,
    suffix: "%",
    subtext: "Repeat Business",
    animate: false, // <--- STATIC (No Counter)
  },
];

const StatsStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-12 bg-secondary border-y border-white/5 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#00AEEF 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} isVisible={isVisible} index={index} total={stats.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-component to handle individual counters ---
const StatItem = ({ stat, isVisible, index, total }: { stat: any, isVisible: boolean, index: number, total: number }) => {
  // Only run the hook if animation is enabled for this ID
  const count = useCounter(stat.value, 2000, isVisible && stat.animate);

  // If animate is true, show 'count', otherwise show the static 'stat.value' immediately
  const displayValue = stat.animate ? count : stat.value;

  return (
    <div 
      className={`group flex flex-col items-center text-center relative ${index !== total - 1 ? 'md:border-r border-white/5' : ''} transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Icon with Hover Glow */}
      <div className="mb-3 p-3 bg-[#0a1e40] rounded-full border border-white/10 shadow-[0_0_0_rgba(0,174,239,0)] group-hover:shadow-[0_0_20px_rgba(0,174,239,0.3)] group-hover:border-[#00AEEF]/50 transition-all duration-500">
        <stat.icon className="w-6 h-6 text-[#00AEEF] group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Number Display */}
      <h3 className="font-display text-4xl md:text-5xl font-bold text-[#00AEEF] mb-1 tabular-nums">
        {stat.prefix}{displayValue}{stat.suffix}
      </h3>

      {/* Label */}
      <p className="font-bold text-white text-lg group-hover:text-[#00AEEF] transition-colors duration-300">
        {stat.label}
      </p>

      {/* Subtext */}
      <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
        {stat.subtext}
      </p>
    </div>
  );
};

export default StatsStrip;