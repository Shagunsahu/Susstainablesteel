import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Reuse counter hook for consistency
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

// Separate component for Stat Card to handle individual counters
const StatCard = ({ value, label, suffix = "", index }: { value: number, label: string, suffix?: string, index: number }) => {
  const count = useCounter(value);
  
  return (
    <div 
      className="bg-card rounded-2xl p-6 text-center hover:bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border hover:border-primary/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <p className="text-3xl font-bold text-primary mb-1">
        {count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "20+ years of experience in steel construction and industrial solutions across the Middle East.",
  },
  {
    name: "Sarah Khan",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in project management with a track record of delivering complex industrial projects on time.",
  },
  {
    name: "Mohammed Ali",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Specialized in pre-engineered buildings and innovative ventilation solutions.",
  },
  {
    name: "Fatima Al-Sayed",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Leads the engineering team with expertise in sustainable building practices and energy efficiency.",
  },
];

const TeamPreview = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            Meet the Experts Behind Our Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our experienced team brings decades of combined expertise in steel construction, engineering, and project management.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-primary/40">
                    {member.role}
                  </span>
                </div>
                
                {/* Image with Zoom Effect */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Social Icons Overlay - Slides up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <a href="#" className="icon-chip icon-chip-sm">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="icon-chip icon-chip-sm">
                      <Mail className="w-5 h-5" />
                    </a>
                    <a href="#" className="icon-chip icon-chip-sm">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 relative">
                {/* Decorative Line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-border group-hover:bg-primary/50 transition-colors duration-500" />
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard value={50} label="Team Members" suffix="+" index={0} />
          <StatCard value={4} label="Departments" index={1} />
          <StatCard value={15} label="Countries Represented" suffix="+" index={2} />
          <StatCard value={100} label="Commitment" suffix="%" index={3} />
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in delay-500">
          <Link to="/team">
            <Button variant="heroOutline" size="lg" className="group px-8">
              Meet Full Team
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;