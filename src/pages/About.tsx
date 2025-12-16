import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, Target, Eye, Award, Users, 
  Clock, Shield, ArrowRight, Quote, Linkedin, 
  Mail, Building2, ThumbsUp, Factory, CheckCircle2,
  ArrowUpRight
} from "lucide-react";

// --- INTERNAL HELPER: ANIMATED COUNTER ---
const Counter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const increment = end / (duration / 16); 
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);
      }
    }, { threshold: 0.5 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

// --- DATA ---
const stats = [
  { icon: Clock, label: "Years of Experience", value: 22, suffix: "+" },
  { icon: Building2, label: "Projects Completed", value: 500, suffix: "+" },
  { icon: Users, label: "Skilled Engineers", value: 150, suffix: "" },
  { icon: ThumbsUp, label: "Client Satisfaction", value: 98, suffix: "%" },
];

const highlights = [
  { icon: Award, title: "Quality in Execution", description: "Our core philosophy that has stood the test of time." },
  { icon: Clock, title: "Timely Completion", description: "Meeting strict schedules to set us apart from competition." },
  { icon: Shield, title: "HSE Commitment", description: "Minimizing risks to stakeholders and the community." },
  { icon: Users, title: "Value Engineering", description: "Optimizing steel structures to save 5-7% in costs." },
];

const timeline = [
  { year: "2002", title: "Humble Beginnings", description: "Started as a small manufacturing company in Oman." },
  { year: "2008", title: "Strategic Expansion", description: "Established strong infrastructure and transport divisions." },
  { year: "2012", title: "Regional Recognition", description: "Became popularly known as Hurricane Vent Co LLC." },
  { year: "2018", title: "PEB Leadership", description: "Solidified status as a top PEB contractor for challenging projects." },
  { year: "2023", title: "Sustainable Future", description: "Leading the market in green building and ventilation solutions." },
];

// --- MAIN COMPONENT ---
const About = () => {
  return (
    <Layout>
       <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-[#050f24] overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
            style={{ backgroundImage: 'url("/assets/about1.jpg")' }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050f24] via-transparent to-[#050f24] z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
              
               <span className="text-xs font-bold uppercase tracking-widest text-slate-300">About Our Legacy</span>
            </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Excellence <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Since 2002</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Engineering the skylines of tomorrow with precision, sustainability, and unwavering integrity.
          </p>
        </div>
      </section>

      {/* 2. STATS SECTION (Dark Blue Gradient) */}
      <section className="container mx-auto px-4 relative z-30 -mt-20 mb-20">
        <div className="bg-gradient-to-r from-[#0a1e40] to-[#005f8f] rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden group border border-white/10">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] bg-[size:20px_20px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-white">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:-translate-y-2">
                <div className="mb-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm shadow-inner border border-white/5">
                  <stat.icon className="w-8 h-8 text-blue-200" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-bold uppercase tracking-wider opacity-80 text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="relative py-24 bg-[#0a1e40] overflow-hidden">
        
        
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-red-500 font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-red-500"></span> Our Legacy
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  A Strategic Base in <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                    Construction
                  </span>
                </h2>
              </div>

              <div className="relative pl-8 border-l-2 border-white/10 space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  <strong className="text-white">Sustainable Steel Industries LLC SP</strong> (popularly known as <span className="text-white font-semibold">Hurricane Vent Co LLC</span> in Oman) has risen from humble beginnings as a small manufacturing company to become a leading construction firm.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our philosophy has always been <strong>quality in execution</strong> and <strong>timely completion</strong> of projects. This commitment has stood the test of time, earning us the "first option" status with many prestigious clients before they consider others.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {['Specialized in PEB', 'Roof Ventilation Experts', 'Value-Add Engineering', 'Central Storage & Logistics'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/90 font-medium text-sm">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-red-900/20 group transition-all hover:scale-105">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] block group perspective-1000">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4">
                 <div className="absolute inset-0 bg-[#0a1e40]/20 mix-blend-multiply z-10"></div>
                 <img 
                   src="/assets/a3.jpg" 
                   alt="Industrial Construction" 
                   className="w-full h-full object-cover" 
                 />
              </div>

              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#0a1e40] transition-transform duration-700 group-hover:-translate-x-4 group-hover:translate-y-4 z-20">
                <img 
                  src="/assets/a2.jpg" 
                  alt="Ventilation Systems" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 animate-bounce">
                <div className="bg-red-600 text-white p-4 rounded-full shadow-2xl border-4 border-[#0a1e40] flex flex-col items-center justify-center w-32 h-32 text-center">
                  <Factory className="w-8 h-8 mb-1" />
                  <span className="font-bold text-2xl leading-none">22+</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-90">Years Exp.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-10 shadow-sm border-t-4 border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                   <Eye className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most sought-after <strong>PEB contractor for challenging projects</strong>. We set ourselves apart by meeting the challenges of execution, safety, and strict schedules.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-10 shadow-sm border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-blue-600/10 rounded-xl text-blue-600">
                   <Target className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide our esteemed clients with project implementations that are completed <strong>safely, on time, and within budget</strong>, while adhering to high-quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FOUNDER SECTION (UPDATED) */}
      <section className="py-24 bg-[#0a1e40] overflow-hidden relative">
        
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[400px_1fr] gap-16 items-center">
            
            {/* Left: Interactive Image Card */}
            <div className="relative group mx-auto lg:mx-0 w-full max-w-[350px]">
              {/* Floating Frame */}
              <div className="absolute inset-0 border-2 border-red-500/30 rounded-3xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              {/* Solid BG */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden bg-slate-800">
                  <img 
                    src="/assets/founder.jpg" 
                    alt="Mukesh Singh" 
                    className="w-full h-full group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                  />
                </div>
                {/* Name Plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-6 border-t border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl font-bold text-[#0a1e40]">Mukesh Singh</h3>
                  <p className="text-red-600 font-bold text-xs uppercase tracking-widest mt-1">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Right: Content & Quote */}
            <div className="relative">
              <Quote className="absolute -top-12 -left-8 w-24 h-24 text-white/5 z-0" />
              
              <div className="relative z-10 space-y-8">
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  "Efficiency, Quality, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    and Cost-Effective Management.
                  </span>"
                </h2>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed border-l-2 border-white/10 pl-6">
                  <p>
                    With over 22 years of experience in Steel Structure Engineering, my goal is to position Sustainable Steel at the forefront of the industry.
                  </p>
                  <p>
                    We don't just build; we develop strategic plans to promote revenue, profitability, and growth. My focus is ensuring <span className="text-white font-semibold">optimal resource utilization</span> and delivering projects that exceed client expectations in both quality and service.
                  </p>
                </div>

                {/* Signature & Interactive Buttons */}
                <div className="pt-8 flex flex-col sm:flex-row items-center gap-8 border-t border-white/10 mt-8">
                  
                  {/* Signature */}
                  <div className="flex-1 text-center sm:text-left">
                    <span className="font-serif text-3xl text-white/80 italic transform -rotate-2 inline-block">
                      Mukesh Singh
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/mukesh-s-b5ba7457" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#0077b5] hover:border-transparent hover:text-white text-slate-300 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    <a 
                      href="mailto:mukesh@sustainablesteelind.com"
                      className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-red-600 hover:border-transparent hover:text-white text-slate-300 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="text-sm font-medium">Email</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={item.title} className="group bg-secondary/20 p-8 rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-xl">
                <div className="mb-6 p-4 bg-background rounded-full w-fit group-hover:bg-white/20">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/90 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIMELINE */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-muted-foreground mt-4">Two decades of milestones and memories.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block"></div>

            {timeline.map((item, index) => (
              <div key={item.year} className={`flex flex-col md:flex-row items-center justify-between mb-12 relative group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center z-10 font-bold text-xs shadow-lg hidden md:flex group-hover:scale-110 transition-transform duration-300">
                    {item.year.slice(2)}'
                </div>
                <div className="w-full md:w-[45%] mb-4 md:mb-0">
                  <div className={`bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-2 md:hidden">
                        {item.year}
                    </span>
                    <h3 className="font-display text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 relative overflow-hidden">
        
        {/* 1. Background: Dark Navy Base */}
        <div className="absolute inset-0 bg-[#0a1e40]"></div>

        {/* 2. Texture: Blueprint Grid (Subtle) */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* 3. Lighting: Red & Blue Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          
          {/* Icon Decoration */}
          <div className="inline-flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl mb-8 backdrop-blur-sm animate-bounce-slow">
            <Building2 className="w-8 h-8 text-red-500" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Future?</span>
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Join hundreds of satisfied clients who have trusted <span className="text-white font-semibold">Sustainable Steel</span> with their vision. 
            From concept to completion, we engineer success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="xl" className="h-16 px-10 text-lg font-bold bg-red-600 hover:bg-red-700 text-white shadow-xl shadow-red-900/20 hover:scale-105 transition-all rounded-full group">
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
          </div>

        </div>
      </section>

    </Layout>
  );
};

export default About;