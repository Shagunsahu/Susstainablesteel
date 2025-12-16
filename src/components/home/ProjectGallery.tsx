import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

type Project = {
  id: number;
  anchor?: string;
  title: string;
  category: string; // Matches specific PDF services
  image: string;
  location: string;
  year: string;
  description: string; // Added for modal details
};

// Data aligned with Company Profile PDF  & Services [cite: 3-7]
const projects: Project[] = [
  { 
    id: 1, 
    anchor: "logistic-warehouse", 
    title: "Logistic Warehouse Complex", 
    category: "Steel Structures", 
    image: "/assets/s1.jpg", 
    location: "Dubai Industrial City, UAE", 
    year: "2023",
    description: "A large-scale pre-engineered steel structure designed for high-capacity logistics. Features optimized bay spacing and value-added engineering to reduce steel weight by 7%." 
  },
  { 
    id: 2, 
    anchor: "food-factory", 
    title: "Food Process Factory", 
    category: "Steel Structures", 
    image: "/assets/s4.jpg", 
    location: "Barka, Oman", 
    year: "2022",
    description: "Hygienic steel facility construction with specialized coatings and integrated ventilation systems, meeting strict food safety compliance standards."
  },
  { 
    id: 3, 
    anchor: "ventilation-unit", 
    title: "Industrial Roof Ventilation", 
    category: "Roof Ventilators", 
    image: "/assets/s7.jpg", 
    location: "Jebel Ali, UAE", 
    year: "2024",
    description: "Installation of zero-energy wind-driven turbine ventilators (80% SS / 20% Aluminum) to eliminate hot, stale air and reduce internal temperatures without electricity."
  },
  { 
    id: 4, 
    anchor: "skylight-system", 
    title: "Tubular Skylight System", 
    category: "Tubular Skylights", 
    image: "/assets/s5.jpg", 
    location: "Sharjah, UAE", 
    year: "2021",
    description: "Energy-saving daylighting solution delivering natural light for 10 hours daily, reducing artificial lighting electricity costs by 40%."
  },
  { 
    id: 5, 
    anchor: "car-park", 
    title: "Multi-Level Car Park", 
    category: "Steel Structures", 
    image: "/assets/s2.jpg", 
    location: "Abu Dhabi, UAE", 
    year: "2023",
    description: "Structural steel erection for a multi-story parking facility, prioritizing rapid assembly and high load-bearing capacity."
  },
  { 
    id: 6, 
    anchor: "waterproofing", 
    title: "Roof Waterproofing", 
    category: "Waterproofing", 
    image: "/assets/s6.jpg", // Ensure image exists
    location: "Sohar, Oman", 
    year: "2022",
    description: "Comprehensive seam sealing and coating application to prevent water penetration, offering a cost-effective alternative to full roof replacement."
  },
  { 
    id: 7, 
    anchor: "sheet-replacement", 
    title: "Industrial Sheet Replacement", 
    category: "Sheet Replacement", 
    image: "/assets/s3.jpg", // Ensure image exists
    location: "Maliha, Sharjah", 
    year: "2023",
    description: "Replacement of damaged single-skin and sandwich panels to restore building aesthetics and structural integrity with minimal operational disruption."
  }
];

// Categories match PDF Services exactly [cite: 3-7]
const categories = ["All", "Steel Structures", "Roof Ventilators", "Tubular Skylights", "Waterproofing", "Sheet Replacement"];

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle Hash Scrolling
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => window.scrollBy({ top: -88, left: 0, behavior: 'smooth' }), 60);
    }
  }, [location]);

  // Handle Horizontal Scrolling
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-background relative" aria-labelledby="projects-heading">
      
      {/* 1. Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
           <span className="text-[#00AEEF] text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#FF0000] rounded-full"></span> Our Portfolio
           </span>
           <h2 id="projects-heading" className="font-display text-4xl md:text-5xl font-bold text-white">
             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-white">Projects</span>
           </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider border transition-all duration-300 rounded-sm ${
                activeCategory === cat 
                  ? 'bg-[#00AEEF] text-[#0a1e40] border-[#00AEEF] shadow-[0_0_15px_rgba(0,174,239,0.4)]' 
                  : 'bg-transparent text-slate-400 border-white/10 hover:border-[#00AEEF] hover:text-[#00AEEF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Row */}
        <div className="relative group/container">
          
          {/* Scroll Left Button */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#0a1e40]/80 backdrop-blur-sm border border-[#00AEEF]/30 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] text-white transition-all opacity-0 group-hover/container:opacity-100 -translate-x-1/2 md:translate-x-0 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          {/* Scroll Right Button */}
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#0a1e40]/80 backdrop-blur-sm border border-[#00AEEF]/30 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] text-white transition-all opacity-0 group-hover/container:opacity-100 translate-x-1/2 md:translate-x-0 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filtered.map((project, index) => (
              <article 
                id={project.anchor} 
                key={project.id} 
                className="group relative h-[450px] min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center overflow-hidden border border-white/5 bg-[#0a1e40] cursor-pointer hover:border-[#00AEEF] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,174,239,0.15)]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e40] via-[#0a1e40]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Top Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                      <span className="bg-[#00AEEF] text-[#0a1e40] text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                        {project.year}
                      </span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[#00AEEF] text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000]"></span> {project.category}
                      </p>
                      <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight group-hover:text-[#00AEEF] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <span className="text-slate-300 text-sm flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#FF0000]" /> {project.location}
                          </span>
                          <span className="text-sm font-bold text-white flex items-center gap-1 border-b border-[#00AEEF]">
                             View Details <ArrowUpRight className="w-4 h-4" />
                          </span>
                      </div>
                    </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#0a1e40]/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />
            
            <div className="relative bg-[#112b5a] border border-white/10 overflow-hidden max-w-5xl w-full shadow-2xl z-10 animate-fade-in flex flex-col md:flex-row max-h-[90vh]">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-[#FF0000] text-white z-20 transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                 <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#112b5a] to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#00AEEF] text-xs font-bold uppercase tracking-widest border border-[#00AEEF] px-3 py-1 rounded-sm">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {selectedProject.location}
                    </span>
                 </div>

                 <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                   {selectedProject.title}
                 </h3>

                 <div className="space-y-4 mb-8 text-slate-300 leading-relaxed">
                   <p>
                     {selectedProject.description}
                   </p>
                   <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0000]"></span> Expert Execution</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0000]"></span> Safety First Approach</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#FF0000]"></span> Completed on schedule ({selectedProject.year})</li>
                   </ul>
                 </div>

                 <div className="flex gap-4 mt-auto">
                   <a href="/contact" className="px-8 py-3 bg-[#FF0000] hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm transition-colors shadow-lg">
                     Request Similar Project
                   </a>
                   <button onClick={() => setSelectedProject(null)} className="px-8 py-3 border border-white/20 hover:border-white text-white font-bold uppercase tracking-wider text-sm transition-colors">
                     Close
                   </button>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;