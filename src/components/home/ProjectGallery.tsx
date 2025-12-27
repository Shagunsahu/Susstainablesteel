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
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-primary text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> Our Portfolio
          </span>
          <h2 id="projects-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const base = 'px-5 py-2 text-xs font-bold uppercase tracking-wider border transition-all duration-300 rounded-sm';
            const activeClasses = 'bg-gradient-to-r from-accent via-accent to-primary text-white shadow-[0_0_15px_rgba(230,57,70,0.3)]';
            const inactiveClasses = 'border-border hover:border-transparent hover:bg-gradient-to-r hover:from-accent hover:via-accent hover:to-primary hover:text-white';
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${base} ${isActive ? activeClasses : inactiveClasses}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Horizontal Scrolling Row */}
        <div className="relative group/container">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-accent via-accent to-primary backdrop-blur-sm border border-transparent flex items-center justify-center hover:brightness-110 text-white transition-all opacity-0 group-hover/container:opacity-100 -translate-x-1/2 md:translate-x-0 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gradient-to-r from-accent via-accent to-primary backdrop-blur-sm border border-transparent flex items-center justify-center hover:brightness-110 text-white transition-all opacity-0 group-hover/container:opacity-100 translate-x-1/2 md:translate-x-0 shadow-lg"
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
                className="group relative h-[450px] min-w-[320px] md:min-w-[400px] flex-shrink-0 snap-center overflow-hidden border border-border bg-card cursor-pointer hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Top Badge */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-[-10px] group-hover:translate-y-0">
                      <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                        {project.year}
                      </span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> {project.category}
                      </p>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between border-t border-border pt-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          <span className="text-muted-foreground text-sm flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" /> {project.location}
                          </span>
                          <span className="text-sm font-bold text-foreground flex items-center gap-1 border-b border-primary">
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
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setSelectedProject(null)} />

            <div className="relative bg-card border border-border overflow-hidden max-w-5xl w-full shadow-2xl z-10 animate-fade-in flex flex-col md:flex-row max-h-[90vh]">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/70 hover:bg-gradient-to-r hover:from-accent hover:via-accent hover:to-primary text-foreground hover:text-white z-20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:bg-gradient-to-r"></div>
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest border border-primary px-3 py-1 rounded-sm bg-primary/10">
                    {selectedProject.category}
                  </span>
                  <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-accent" /> {selectedProject.location}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  {selectedProject.title}
                </h3>

                <div className="space-y-4 mb-8 text-muted-foreground leading-relaxed">
                  <p>{selectedProject.description}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent"></span> Expert Execution</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent"></span> Safety First Approach</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent"></span> Completed on schedule ({selectedProject.year})</li>
                  </ul>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-accent via-accent to-primary text-white font-bold uppercase tracking-wider text-sm transition-colors hover:brightness-110 shadow-lg"
                  >
                    Request Similar Project
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-3 border border-border hover:border-white text-foreground hover:text-white font-bold uppercase tracking-wider text-sm transition-colors"
                  >
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