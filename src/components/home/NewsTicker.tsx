import { Bell, ChevronRight } from "lucide-react";

const newsItems = [
  "New Contract Awarded: 50,000 sq.ft Warehouse in Dubai Industrial City",
  "ISO 9001:2015 Certification Renewed for 2024-2025",
  "Successfully completed roof ventilation project for Oman Aluminum",
  "Sustainable Steel welcomes new Technical Director to the board",
];

const NewsTicker = () => {
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-3 relative z-40">
      <div className="container mx-auto px-4 flex items-center gap-4">
        {/* Label */}
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-md shadow-sm shrink-0 z-10">
          <span className="icon-chip icon-chip-sm animate-pulse">
            <Bell className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider">Latest News</span>
        </div>

        {/* Scrolling Text */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
            {newsItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm font-medium opacity-90">
                <span className="icon-chip icon-chip-sm">
                  <ChevronRight className="w-3 h-3" />
                </span>
                {item}
              </span>
            ))}
             {/* Duplicate for infinite scroll */}
            {newsItems.map((item, i) => (
              <span key={`dup-${i}`} className="flex items-center gap-2 text-sm font-medium opacity-90">
                <span className="icon-chip icon-chip-sm">
                  <ChevronRight className="w-3 h-3" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
