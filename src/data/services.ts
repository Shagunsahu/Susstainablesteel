import { Sun, Building2, Fan, Droplets, Hammer, Flame, Layers } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  howItWorksDescription?: string;
  howItWorksImage?: string;
  keyPoints: string[];
  image: string;
  gallery: string[];
  benefits?: {
    title: string;
    description: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "waterproofing",
    icon: Droplets,
    title: "Roof Sheet Water Proofing",
    subtitle: "Leakage Protection & Coating",
    description: "Specialized waterproofing solutions to protect industrial roofing from leaks and weather damage.",
    detailedDescription: "You might be wondering why sloped metal roofs need to be waterproofed. We have the answers to the same.\n\nWater penetration can cost owners big bucks when the seams of metal roofing sheets have not been sealed properly. Even a small leak in your roof can cause serious damage to property. Waterproofing your roof is simpler than a complete roof replacement while still offering many of the same benefits. At the same time, it provides a longer-term solution than a quick-fix repair.",
    benefits: [
      {
        title: "Durability",
        description: "Waterproofing reduces the risk of critical damage. With a Thermilate waterproofing system protecting your roof, you’ll have an additional layer of protection from wear, decay, and leaks caused by rain and condensation. At the same time, a waterproof coating reflects sunlight, reducing the impact of extreme heat and light on your roof. Our waterproofing solutions can last from ten to fifteen years, substantially extending the lifetime of your existing roof."
      },
      {
        title: "Saving Energy",
        description: "Because waterproofing coating reflect heat and sunlight, you’ll save on HVAC costs in the summer by maintaining steadier building temperatures. A one-time repair or complete roof replacement won’t have nearly as much of an impact on your building’s energy efficiency as waterproofing will. Thermilate waterproofing system stops hot air leaking into your property through those roof sheet joints and bolts."
      },
      {
        title: "Saving Money",
        description: "Beyond reducing wear and tear, Thermilate waterproofing system for your roof saves you money in the short-term as well as long term, because it is significantly cheaper than a complete roof overhaul. You’ll also save money because roof repairs won’t be required as frequently, and maintenance costs will be lower. By extending the life of your existing roof, you’ll also experience significant cost-savings in the long run. Thermilate waterproofing and heat reflecting coatings reduces your energy needs and helps you save money on electricity bill."
      },
      {
        title: "Anti-Condensation",
        description: "Thermilate waterproofing coatings seal your building from water leakage. Waterproofing system reduces the humidity levels in your building by sealing all air leak seam joints."
      },
      {
        title: "Low Maintenance",
        description: "Thermilate waterproofing coating is easier to maintain and repair than your existing roof infrastructure. When maintenance and repairs are necessary, they are generally much quicker to perform than on a conventional roof alone. The majority of repairs will simply have to be made to the waterproof coating rather than the roof itself."
      },
      {
        title: "Easy Installation",
        description: "We can waterproof your roof in about a third of the time it takes to replace a roof. Because waterproofing is a spray applied to your roof, it can be done in a short period of time. Our waterproofing solutions are designed to minimize any downtime or disruption to your day-to-day business operations."
      },
      {
        title: "Fire safe & Environment Friendly",
        description: "Today the tide is turning towards water based coatings, Thermilate waterproofing coating is ideal because it is environment friendly, Low VOC, Easy cleanup and fire safe."
      }
    ],
    keyPoints: [
      "Stops active leaks immediately",
      "Heat-reflective coating reduces indoor temp",
      "Cost-effective alternative to roof replacement",
      "10-Year Warranty protection"
    ],
    image: "/assets/se/se1.jpg",
    gallery: [
      "/assets/se/se1.jpg",
      "/assets/se/se2.jpg",
      "/assets/se/se3.jpg"
    ]
  },
  {
    id: "ventilators",
    icon: Fan,
    title: "Roof Turbo Ventilator Fans",
    subtitle: "Zero Energy Ventilation",
    description: "Supply and installation of self-driven turbine ventilators that improve air quality by eliminating heat and dust.",
    detailedDescription: "The positive extraction of the Tornado Turbine ventilation system eliminates dust penetration and a down-draught into the building to improve air quality, ensuring a cleaner and healthier environment. We offer domestic and industrial roof ventilation systems. Our world-class series of Tornado Roof Turbines cost-effectively cool and eliminate the build-up of hot and polluted stale air in most applications to transform the working environment and produce optimum levels of productivity and reduce stress.\n\nOur environmentally friendly Tornado ventilators are water and bird-proof, and our professional installation reduces structural damage. Windmaster International offers an unconditional warranty on the units for a period of not less than five years.",
    howItWorksDescription: "The turbine ventilator operates by utilizing the velocity energy of the wind to induce airflow by centrifugal action. The centrifugal force caused by the spinning vanes creates a region of the low-pressure area which draws air out through the turbine. Air drawn out by the turbine is continuously replaced by fresh air from the outside. The fly-wheel effects of the rotor cage will use its stored energy to continuously remove air even when the slightest breeze has stopped, ensuring suction is maintained even at low wind velocities.",
    howItWorksImage: "/assets/rv/work.jpg",
    benefits: [
      {
        title: "No Operating Cost",
        description: "Runs entirely on wind energy, utilizing natural velocity to induce airflow without using a single unit of electricity."
      },
      {
        title: "Assured 24x7 Ventilation",
        description: "Continuously replaces hot air, humidity, stale air, smoke, and gas fumes with fresh ambient air, day and night."
      },
      {
        title: "Robust Construction",
        description: "Constructed with 80% Stainless Steel and 20% Aluminum. Features Stainless Steel Top Plate & Bottom Ring with Rigid Roll Formed Curved Aluminum Vanes for maximum durability."
      },
      {
        title: "Maintenance Free",
        description: "Equipped with permanently lubricated sealed ZZ Bearings that require no maintenance. The system is completely rust-free."
      },
      {
        title: "Weather & Bird Proof",
        description: "Features a Rain Proof Rugged Spider Design that is also bird-proof, protecting the structural integrity of your building."
      },
      {
        title: "Versatile Installation",
        description: "Can be easily fitted to any type of roofing profile, making it a flexible solution for various industrial needs."
      },
      {
        title: "Enhanced Productivity",
        description: "By lowering indoor temperatures and improving air quality, it significantly improves human comfort levels and boosts workforce productivity."
      }
    ],
    keyPoints: [
      "Zero Operating Cost (Wind Driven)",
      "Removes hot & stale air continuously",
      "Rust-free Stainless Steel / Aluminum body",
      "Maintenance-free operation"
    ],
    image: "/assets/rv/rv1.jpg",
    gallery: [
      "/assets/rv/rv1.jpg",
      "/assets/rv/rv2.jpg",
      "/assets/rv/rv3.jpg"
    ]
  },
  {
    id: "skylights",
    icon: Sun,
    title: "Tubular Roof Skylights",
    subtitle: "Natural Daylighting Systems",
    description: "Advanced tubular skylight systems that capture and diffuse natural sunlight, reducing electricity bills.",
    // Updated Intro Text
    detailedDescription: "The SOLAR DAY TUBE is designed to reduce electric consumption and provide a healthy ambiance. It consists of three key elements: a Light Collector, a Reflective System, and a Light Diffuser, working together to deliver superior daylighting performance.",
    // New Technical Benefits Section
    benefits: [
      {
        title: "Light Collector",
        description: "Redirects low-angle sunlight for maximum light capture and provides consistent daylighting throughout the day. It actively rejects overpowering summer midday sunlight and blocks harmful UV radiation."
      },
      {
        title: "Reflection Tube",
        description: "Delivers 99.7% specular reflectivity for maximum sunlight transfer. The high continuous reflective system provides the purest color rendition and is durable with a long life."
      },
      {
        title: "Light Diffuser",
        description: "Distributes uniform, glare-free light to ensure human comfort. The dome shape allows for wider light distribution."
      },
      {
        title: "Bright Light Diffuser (Option)",
        description: "Offers high light transmission and medium light distribution. Applicable for high-roof industrial buildings, warehouses, and commercial buildings."
      },
      {
        title: "Soft White Diffuser (Option)",
        description: "Provides soft, pleasing light with high lighting distribution. Applicable for low-roof applications such as offices and residences. Available in dome and flat shapes."
      },
      {
        title: "Minimized Heat Transfer",
        description: "The Solar Day Tube is designed to minimize heat transfer. The high-performance light collector partially rejects mid-noon sunlight, and the static air column within the reflection tube further minimizes heat transfer."
      }
    ],
    keyPoints: [
      "Reduces lighting energy costs by up to 40%",
      "Blocks harmful UV rays",
      "Leak-proof installation guarantee",
      "Bright, evenly distributed natural light"
    ],
    image: "/assets/tsl/tsl3.jpg",
    gallery: [
      "/assets/Sky Lights/sk0.jpg",
      "/assets/Sky Lights/sk1.jpg",
      "/assets/Sky Lights/sk2.jpg",
      "/assets/Sky Lights/sk3.jpg",
      "/assets/Sky Lights/sk4.jpg",
      "/assets/Sky Lights/sk5.jpg",
      "/assets/Sky Lights/sk6.jpg",
    ]
  },
  {
    id: "steel-erection",
    icon: Building2,
    title: "Structural Steel Erection",
    subtitle: "Heavy Construction & PEB",
    description: "Expert erection services for warehouses, factories, and high-rise structures, ensuring safety and speed.",
    detailedDescription: "With over a decade of experience and a team of industry experts, H V Muscat is a trusted Steel Erection Company based in Oman. We provide a complete, integrated solution for customers, including erection and construction services. We employ a highly qualified and experienced construction team capable of installing up to 4,000 tonnes of structural steel per month. Our team has extensive field experience and training, allowing us to handle any project, big or small, with professional ease.The H V Muscat team takes the time to plan everything from material delivery, material handling, assembly, and installation. We work hard to be a Steel Erection Company that you can trust. Our team works alongside industry experts to ensure that our design and installation are customized to match your project requirements as well as site structure and conditions, equipment, workforce, etc. Our innovative erection solutions are optimized to reduce cost, time, and safety and are reputed for their stability and appearance.We employ a range of high-tech tools and techniques to ensure the safety and quality of your Steel Erection Projects.",
    howItWorksDescription: "Step 1: Site Preparation\nSite is leveled and reference points are established using surveying instruments.\n\nStep 2: Component Placement\nSteel members are unloaded and positioned according to drawings.\n\nStep 3: Connection & Bolting\nMembers are connected using high-grade bolts with proper torque specifications.\n\nStep 4: Alignment & Verification\nStructural alignment is verified using laser theodolites and testing protocols.",
    howItWorksImage: "/assets/se/se1.jpg",
    keyPoints: [
      "Certified rigging and erection teams",
      "Strict adherence to HSE safety standards",
      "Heavy lifting & crane operations management",
      "Fast-track project delivery"
    ],
    image: "/assets/se/se1.jpg",
    gallery: [
      "/assets/se/se1.jpg",
      "/assets/se/se2.jpg",
      "/assets/se/se3.jpg"
    ]
  },
  {
    id: "fire-painting",
    icon: Flame,
    title: "Fire Painting Works",
    subtitle: "Intumescent Fireproofing",
    description: "Application of intumescent coatings to structural steel to ensure building stability during fire emergencies.",
    detailedDescription: "This critical safety service involves the professional application of passive fire protection materials to structural steel members. We specialize in two commonly used fire resistant coatings: intumescent paints and cementitious coatings. Both can be effective depending on your specific fireproofing needs.\n\nIntumescent coatings swell up when exposed to fire to form a thick char layer that insulates the steel from extreme heat, delaying structural failure and providing crucial time for evacuation. Our intumescent paints (such as Jotun) are usually white but can be painted any colour with an approved topcoat. It is important to adhere to an approved paint system which is backed up by documents that you can show any inspector or building control.\n\nIn the event of a fire, these coatings create a protective barrier that prevents steel from reaching critical temperatures, ensuring structural integrity and life safety compliance.",
    howItWorksDescription: "Step 1: Surface Preparation\nSteel is cleaned, degreased, and primed for coating adhesion.\n\nStep 2: Intumescent Coating Application\nMultiple thin coats of intumescent material are applied carefully.\n\nStep 3: Curing\nCoatings are allowed to cure completely, creating a stable base layer.\n\nStep 4: Expansion Testing\nWhen exposed to heat, the coating expands, forming an insulating char layer.",
    howItWorksImage: "/assets/se/se2.jpg",
    keyPoints: [
      "Compliance with Civil Defense standards",
      "Up to 120-minute fire rating protection",
      "Professional airless spray application",
      "Essential for high-rise safety"
    ],
    image: "/assets/fire/f3.jpg",
    gallery: [
      "/assets/fire/f1.jpg",
      "/assets/fire/f2.jpg",
      "/assets/fire/f3.jpg"
    ]
  },
  {
    id: "cladding",
    icon: Layers,
    title: "Cladding Services",
    subtitle: "Wall & Roof Insulation",
    description: "High-quality installation of sandwich panels and single-skin cladding for thermal insulation and modern aesthetics.",
    detailedDescription: "We offer comprehensive cladding solutions for building envelopes, providing both functional protection and aesthetic finish. Our expertise covers the installation of high-performance sandwich panels (with PU, PIR, or Rockwool insulation cores) that offer superior thermal and acoustic insulation properties, significantly improving building energy efficiency.",
    howItWorksDescription: "Step 1: Design & Material Selection\nWe assess the building structure and select appropriate cladding materials.\n\nStep 2: Substructure Installation\nSteel or aluminum substructure is installed to secure the cladding system.\n\nStep 3: Cladding Panel Application\nPanels are installed from bottom to top with proper overlapping and fastening.\n\nStep 4: Sealing & Finishing\nAll joints are sealed and finished for weather protection and appearance.",
    howItWorksImage: "/assets/se/se3.jpg",
    keyPoints: [
      "Superior thermal & acoustic insulation",
      "Sandwich Panel (PU/PIR/Rockwool)",
      "Weather-tight installation",
      "Aesthetic facade upgrades"
    ],
    image: "/assets/se/se3.jpg",
    gallery: [
      "/assets/se/se3.jpg",
      "/assets/se/se1.jpg",
      "/assets/se/se2.jpg"
    ]
  },
  {
    id: "fabrication",
    icon: Hammer,
    title: "Fabrication Services",
    subtitle: "Custom Steel Manufacturing",
    description: "Precision fabrication of steel components including beams, columns, and trusses in our state-of-the-art workshop.",
    detailedDescription: "Our state-of-the-art workshop is equipped to handle heavy structural steel fabrication requirements. We utilize advanced CNC cutting, drilling, and welding technologies to manufacture high-grade steel components—including primary beams, columns, trusses, and specialized industrial parts—with astonishing precision.",
    howItWorksDescription: "Step 1: Detailed Design & Cutting Lists\nEngineers create precise drawings and cutting specifications from client requirements.\n\nStep 2: CNC Cutting\nHigh-grade steel is cut to exact dimensions using computer-controlled cutting machines.\n\nStep 3: Welding & Assembly\nComponents are carefully welded using certified welders ensuring structural integrity.\n\nStep 4: Quality Inspection\nAll components undergo rigorous inspection before delivery to site.",
    howItWorksImage: "/assets/se/se1.jpg",
    keyPoints: [
      "CNC cutting and drilling precision",
      "Custom fabrication for unique requirements",
      "High-grade steel materials",
      "Quality Control (QC) inspection"
    ],
    image: "/assets/se/se1.jpg",
    gallery: [
      "/assets/se/se1.jpg",
      "/assets/se/se2.jpg",
      "/assets/se/se3.jpg"
    ]
  }
];