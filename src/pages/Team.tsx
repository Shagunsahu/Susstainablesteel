import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

// Counter Hook
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

const StatItem = ({ value, label, suffix = "" }: { value: string, label: string, suffix?: string }) => {
  // Extract number from string (e.g., "50+" -> 50)
  const numValue = parseInt(value.replace(/\D/g, '')) || 0;
  const count = useCounter(numValue);
  
  return (
    <div className="text-center p-6 bg-card rounded-xl border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <p className="text-4xl font-bold text-primary mb-2">{count}{value.includes('+') ? '+' : ''}</p>
      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
};

const leadership = [
  {
    name: "Ahmed Al-Rashid",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "20+ years of experience in steel construction and industrial solutions across the Middle East. Ahmed founded Sustainable Steel with a vision to transform industrial construction in the region.",
    linkedin: "#",
    email: "ahmed@sustainablesteelind.com",
  },
  {
    name: "Sarah Khan",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in project management with a track record of delivering complex industrial projects on time. Sarah oversees all operational aspects ensuring efficiency and quality.",
    linkedin: "#",
    email: "sarah@sustainablesteelind.com",
  },
  {
    name: "Mohammed Ali",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Specialized in pre-engineered buildings and innovative ventilation solutions. Mohammed leads our technical team in developing cutting-edge construction methodologies.",
    linkedin: "#",
    email: "mohammed@sustainablesteelind.com",
  },
  {
    name: "Fatima Al-Sayed",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Leads the engineering team with expertise in sustainable building practices and energy efficiency. Fatima drives innovation in our design and engineering processes.",
    linkedin: "#",
    email: "fatima@sustainablesteelind.com",
  },
];

const team = [
  { name: "Omar Hassan", role: "Senior Project Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
  { name: "Aisha Patel", role: "Quality Assurance Manager", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face" },
  { name: "Khalid Mahmoud", role: "Site Supervisor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
  { name: "Layla Ibrahim", role: "Design Engineer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
  { name: "Yusuf Rahman", role: "Sales Manager - UAE", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face" },
  { name: "Nadia Ahmed", role: "Customer Relations Manager", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face" },
  { name: "Hassan Zaidi", role: "Procurement Manager", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face" },
  { name: "Maryam Khalil", role: "HR Manager", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face" },
];

const stats = [
  { value: "50+", label: "Team Members" },
  { value: "4", label: "Departments" },
  { value: "15+", label: "Countries Represented" },
  { value: "20+", label: "Years Experience" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-secondary/20 -skew-y-3 origin-top-left scale-110 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">Our Team</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mt-6 mb-6">
              Meet the Experts <br/><span className="text-primary">Behind Our Success</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our experienced team brings decades of combined expertise in steel construction, engineering, and project management.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatItem key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Leadership Team
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, i) => (
              <div
                key={member.name}
                className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border flex flex-col md:flex-row hover:shadow-xl hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="md:w-56 h-72 md:h-auto overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-center">
                  <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2">{member.role}</span>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3 mt-auto">
                    <a href={member.linkedin} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-secondary/30 relative">
         {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Key Team Members
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-bold uppercase tracking-widest bg-primary px-2 py-1 rounded">View Profile</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
            We're always looking for talented individuals to join our team. If you're passionate about construction and innovation, we'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl" className="group h-14 px-8 text-lg shadow-2xl">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Team;