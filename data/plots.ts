// ─── Types ───────────────────────────────────────────────────────────────────

export type PlotStatus = "sold" | "hold" | "available";

export interface PlotStat {
  label: string;
  value: string;
}

export interface AboutStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface PlotSizeOption {
  size: string;
  label: string;
  price: string;
  rate: string;
  badge?: string;
}

export interface CustomSizeInfo {
  title: string;
  subtitle: string;
  description: string;
}

export interface PaymentPlanOption {
  value: string;
  label: string;
}

export interface LocationAdvantage {
  title: string;
  description: string;
  icon?: string;
}

export interface PlotVenture {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  status: "ongoing" | "completed" | "upcoming";
  badge?: string;
  location?: string;
  priceRange?: string;
  roiHighlight?: string;
  thumbnails?: string[];
  
  // Simple stats/metadata
  stats?: PlotStat[];
  
  // About section
  aboutTitle?: string;
  aboutDescription?: string;
  aboutStats?: AboutStat[];
  
  // Plot sizes & pricing
  pricingTitle?: string;
  plotSizes?: PlotSizeOption[];
  customSize?: CustomSizeInfo;
  paymentPlans?: PaymentPlanOption[];
  
  // Layout plan section
  layoutTitle?: string;
  layoutPlanUrl?: string;
  mapPageUrl?: string;
  mapEmbedUrl?: string;
  
  // Location Advantages section
  locationTitle?: string;
  locationAdvantages?: LocationAdvantage[];
  
  // Quote
  quoteText?: string;

  // Legacy fallback arrays
  amenities?: string[];
  locationHighlights?: string[];
}

export interface VentureListing {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  stats: PlotStat[];
}

export interface CompletedProject {
  id: number;
  title: string;
  description: string;
  location: string;
  year: string;
  status: "Completed";
}

export interface PlotUnit {
  id: number;
  phaseId: string;
  status: PlotStatus;
}

// ─── Status colors (used on interactive map) ─────────────────────────────────

export const PLOT_STATUS_COLORS: Record<PlotStatus, string> = {
  sold: "#F87C63",
  hold: "#EEF863",
  available: "#FFFBDB",
};

// ─── Phase 5 individual plot statuses ────────────────────────────────────────

export const PHASE5_SOLD_PLOT_IDS = [
  1, 3, 5, 7, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57,
  60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 93, 96, 99, 102, 105, 108, 111, 114,
  117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147,
] as const;

export const PHASE5_HOLD_PLOT_IDS = [
  108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147,
] as const;

export function getPhase5PlotStatus(plotId: number): PlotStatus {
  if ((PHASE5_HOLD_PLOT_IDS as readonly number[]).includes(plotId)) return "hold";
  if ((PHASE5_SOLD_PLOT_IDS as readonly number[]).includes(plotId)) return "sold";
  return "available";
}

export function getPhase5PlotColor(plotId: number): string {
  return PLOT_STATUS_COLORS[getPhase5PlotStatus(plotId)];
}

// ─── Venture / phase data ────────────────────────────────────────────────────

export const phase5Data: PlotVenture = {
  id: "phase-5",
  slug: "phase-1",
  title: "Deccan Heights Phase 5",
  subtitle: "Invest In A Promising Future..",
  description:
    "DECCAN HEIGHTS HOMES & RESORTS PVT LTD. group presents Deccan Heights, an elegant yet affordable group housing at Shadnagar, Hyderabad. The project \"Deccan Heights\" is located in the frontier of the Shadnagar Mandal of Ramachandrapuram Village that comes under High Rise Promotion Zone. The layout of your premium plots can be reached after a few minutes drive from 300' 6 tracks of NH-7 Bangalore Highway. So take a pleasant drive along the breezy, broad 100, wide road and there you are in terms of sheer commercial value, the prospects are unmatched.",
  image: "/plot1.webp",
  status: "ongoing",
  badge: "New Launch",
  location: "Shadnagar, Hyderabad, Telangana",
  priceRange: "₹8,500/sq.yd",
  roiHighlight: "ROI: High Appreciation",
  thumbnails: ["/plot1.webp", "/plot2.webp", "/plot3.webp"],
  stats: [
    { label: "Plot Size", value: "9 acres" },
    { label: "Starting Price", value: "₹8500 per Sq.yard" },
    { label: "Location", value: "Shadnagar" },
  ],
  aboutTitle: "About This Project",
  aboutDescription:
    "DECCAN HEIGHTS HOMES & RESORTS PVT LTD. group presents Deccan Heights, an elegant yet affordable group housing at Shadnagar, Hyderabad. The project \"Deccan Heights\" is located in the frontier of the Shadnagar Mandal of Ramachandrapuram Village that comes under High Rise Promotion Zone. The layout of your premium plots can be reached after a few minutes drive from 300' 6 tracks of NH-7 Bangalore Highway. So take a pleasant drive along the breezy, broad 100, wide road and there you are in terms of sheer commercial value, the prospects are unmatched.",
  aboutStats: [
    { value: "₹8,500", label: "Outright price per sq.yd", sublabel: "Affordable entry investment" },
    { value: "9 Ac", label: "Total project area", sublabel: "9 Acres 12 Guntas" },
    { value: "EMI", label: "₹10,000/mo.", sublabel: "12-month EMI facility" },
    { value: "100%", label: "Clear Documentation", sublabel: "Passbook eligible, clear title" },
  ],
  pricingTitle: "Plot Sizes & Pricing",
  plotSizes: [
    { size: "100 sq.yd", label: "Total investment", price: "₹8,50,000", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
    { size: "200 sq.yd", label: "Total investment", price: "₹17,00,000", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
    { size: "300 sq.yd", label: "Total investment", price: "₹25,50,000", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
    { size: "603 sq.yd", label: "Total investment", price: "₹51,25,500", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
  ],
  customSize: {
    title: "Custom Size",
    subtitle: "Need a different plot size?",
    description: "Custom plot sizes are available on request. Contact us to discuss your requirement.",
  },
  paymentPlans: [
    { label: "per sq.yd (Outright)", value: "₹8,500" },
    { label: "per sq.yd (EMI Plan)", value: "₹9,000" },
    { label: "Booking Amount", value: "₹50,000" },
    { label: "Down Payment", value: "₹2,00,000" },
    { label: "EMI Duration", value: "12 Months" },
  ],
  layoutTitle: "Project Layout Plan",
  layoutPlanUrl: "/phase5wids.svg",
  mapPageUrl: "/maps/phase5",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3977.412537972301!2d78.06275!3d17.094694399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDA1JzQwLjkiTiA3OMKwMDMnNDUuOSJF!5e1!3m2!1sen!2sin!4v1767023319552!5m2!1sen!2sin",
  locationTitle: "Location Advantages",
  locationAdvantages: [
    { title: "Within HMDA Limits", description: "Pure Residential Zone with proper regulatory approvals." },
    { title: "Near Bangalore Highway", description: "NH-7 Bangalore Highway Facing, offering rapid transit connectivity." },
    { title: "Well Connected", description: "Conveniently connected by MMTS, APSRTC for easy commuting." },
    { title: "Educational Hub", description: "Near Symbiosis International University & TATA Institute of Social Science." },
    { title: "Data Centers Nearby", description: "Adani Connex Data Center is situated in close proximity." },
    { title: "High Growth Potential", description: "Surrounded by mega townships like DLF, My Home, and AP Housing Board." },
  ],
  quoteText: "Deccan Heights Phase 5 is your opportunity to invest in a fast-developing, government-priority zone at an affordable entry point. The land is clear, the growth is real — reserve your plot today.",
  amenities: [
    "Grand Entrance Arch",
    "Gated Community",
    "30 & 25 Feet Black Top Roads",
    "Electricity (with transformer & Street lights)",
    "Curving Stones",
    "Vaastu Compliant",
    "Avenue Plantation",
    "Rain Water Harvesting Pits",
  ],
  locationHighlights: [
    "Within HMDA Limits (Pure Residential Zone)",
    "Near by International Airport, Bangalore Highway Facing",
    "Well Connected by MMTS, APSRTC",
    "Proposed textile Park, Apparel Park, Golf Club & Aero Hub",
    "Near by Symbiosis International University & TATA Institute of Social Science",
    "Near by Shopping Malls, Star Hotels, Golf Courses, Clubs & Resorts",
    "9 Engineering, 2 Medical, Govt. Degree Colleges & many Residential Schools",
    "Recreational Projects are Planned",
    "Near by Industrial Estates",
    "Proposed Super Speciality Hospitals at Mamidipally",
    "Proposed IT Park at Elkatta, SONY Electronics Park",
    "Proposed Govt. Townships Surrounding ORR",
    "Surrounded by Mega Townships of DLF, My Home, AP Housing Board & many Residential Areas",
    "Adani Connex (Data Centers)",
  ],
};

export const phase2Data: PlotVenture = {
  id: "phase-2",
  slug: "phase-2",
  title: "Deccan Heights Phase II",
  subtitle: "Future-ready smart community for the modern investor.",
  description:
    "Phase II elevates the standard of living with enhanced amenities and strategic positioning. Designed as a premium gated community, it offers a secure environment with world-class infrastructure. Whether you are looking for immediate construction or long-term capital appreciation, Phase II stands as a beacon of growth in the Shadnagar region.",
  image: "/plot2.webp",
  status: "completed",
  badge: "Completed",
  location: "Shadnagar, Hyderabad, Telangana",
  priceRange: "₹7,500/sq.yd",
  roiHighlight: "Expected ROI: High Appreciation",
  thumbnails: ["/plot2.webp", "/plot1.webp", "/plot3.webp"],
  stats: [
    { label: "Plot Size", value: "1500 Sq.ft" },
    { label: "Starting Price", value: "₹35L+" },
    { label: "Location", value: "Shadnagar" },
  ],
  aboutTitle: "About This Project",
  aboutDescription:
    "Phase II elevates the standard of living with enhanced amenities and strategic positioning. Designed as a premium gated community, it offers a secure environment with world-class infrastructure. Whether you are looking for immediate construction or long-term capital appreciation, Phase II stands as a beacon of growth in the Shadnagar region.",
  aboutStats: [
    { value: "₹7,500", label: "Outright price per sq.yd", sublabel: "Affordable entry investment" },
    { value: "15 Ac", label: "Total project area", sublabel: "15 Acres (Gated Community)" },
    { value: "EMI", label: "₹8,000/mo.", sublabel: "12-month EMI facility" },
    { value: "100%", label: "Clear Documentation", sublabel: "Passbook eligible, clear title" },
  ],
  pricingTitle: "Plot Sizes & Pricing",
  plotSizes: [
    { size: "150 sq.yd", label: "Total investment", price: "₹11,25,000", rate: "@ ₹7,500/sq.yd", badge: "Premium" },
    { size: "200 sq.yd", label: "Total investment", price: "₹15,00,000", rate: "@ ₹7,500/sq.yd", badge: "Premium" },
    { size: "300 sq.yd", label: "Total investment", price: "₹22,50,000", rate: "@ ₹7,500/sq.yd", badge: "Premium" },
    { size: "500 sq.yd", label: "Total investment", price: "₹37,50,000", rate: "@ ₹7,500/sq.yd", badge: "Premium" },
  ],
  customSize: {
    title: "Custom Size",
    subtitle: "Need a different plot size?",
    description: "Custom plot sizes are available on request. Contact us to discuss your requirement.",
  },
  paymentPlans: [
    { label: "per sq.yd (Outright)", value: "₹7,500" },
    { label: "per sq.yd (EMI Plan)", value: "₹8,000" },
    { label: "Booking Amount", value: "₹50,000" },
    { label: "Down Payment", value: "₹2,00,000" },
    { label: "EMI Duration", value: "12 Months" },
  ],
  layoutTitle: "Project Layout Plan",
  layoutPlanUrl: "/phase5wids.svg",
  locationTitle: "Location Advantages",
  locationAdvantages: [
    { title: "2 Mins from NH-44", description: "Extremely close to National Highway 44 for easy commuting." },
    { title: "Established Residential Zones", description: "Adjacent to thriving neighborhoods with existing residential communities." },
    { title: "Near Microsoft Data Center", description: "Just 15 minutes away from the upcoming Microsoft Data Center." },
    { title: "Corporate Facilities", description: "Close to leading corporate hospitals and international schools." },
    { title: "Quick Access to ORR", description: "Conveniently connected to the Outer Ring Road for citywide access." },
    { title: "High Appreciation Zone", description: "Positioned in a high-demand corridor with continuous infrastructure growth." },
  ],
  quoteText: "Deccan Heights Phase II is a testament to our quality development, offering premium infrastructure and high ROI potential. Secure your investment in Shadnagar today.",
  amenities: [
    "Grand Entrance Arch with Gate",
    "Clubhouse Membership Access",
    "Landscaped Gardens & Gazebos",
    "Children's Play Area",
    "Water Harvesting Pits",
    "Overhead Water Tank",
    "Solar Street Lighting",
    "Curbed Stones for Roads",
  ],
  locationHighlights: [
    "2 Mins from National Highway 44",
    "Adjacent to Established Residential Zones",
    "15 Mins to Microsoft Data Center",
    "Near Corporate Hospitals & Schools",
    "Quick Access to Outer Ring Road (ORR)",
    "High Appreciation Potential Zone",
  ],
};

export const allPlotVentures: PlotVenture[] = [phase5Data, phase2Data];

export const ongoingVentures: VentureListing[] = [
  {
    id: 1,
    title: "Deccan Heights Phase 5",
    description:
      "Experience luxury living in the heart of nature with our premium plots designed for your dream home. A perfect blend of tranquility and modern amenities.",
    image: "/plot1.webp",
    link: "/ventures/phase-1",
    stats: [
      { label: "Area", value: "9 Acres" },
      { label: "Price", value: "₹8500" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
];

export const activeHomeVentures: VentureListing[] = [
  {
    id: 1,
    title: "Deccan Heights Phase 5",
    description:
      "Experience luxury living in the heart of nature with our premium plots designed for your dream home. A perfect blend of tranquility and modern amenities.",
    image: "/plot1.webp",
    link: "/ventures/phase-1",
    stats: [
      { label: "Area", value: "1200 Sq.ft" },
      { label: "Price", value: "₹8500+" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
];

export const completedProjects: CompletedProject[] = [
  {
    id: 1,
    title: "Basheera Bagh",
    description:
      "A premium residential development offering modern amenities and strategic connectivity.",
    location: "Hyderabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 2,
    title: "Clock Tower Colony",
    description:
      "Centrally located residential project with focus on community living and accessibility.",
    location: "Secunderabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 3,
    title: "Shadnagar Venture",
    description:
      "Strategic investment plots in the rapidly developing corridor of Shadnagar.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 4,
    title: "Brindawaan Nagar",
    description:
      "A serene residential layout designed for peaceful living within city reach.",
    location: "Hyderabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 5,
    title: "Empire City Shadnagar",
    description:
      "A landmark development in Shadnagar offering premium infrastructure and high ROI.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 6,
    title: "5th Revenue Qutub",
    description:
      "High-demand plots featuring excellent urban connectivity and essential services.",
    location: "Qutubullapur",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 7,
    title: "Golden Villa Balapur",
    description:
      "Luxury villa plots in the tranquil environment of Balapur, perfect for homeowners.",
    location: "Balapur",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 8,
    title: "Deccan Heights Phase 1",
    description:
      "The foundation of our excellence, Phase 1 set the standard for quality layouts.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 9,
    title: "Deccan Heights Phase 2",
    description:
      "Continuing our legacy of providing secure and premium gated communities.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 10,
    title: "Deccan Heights Phase 3",
    description:
      "A successful expansion of the Deccan Heights family with 100% occupancy.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 11,
    title: "Deccan Heights Phase 4",
    description:
      "Modern living integrated with nature, delivering happiness to hundreds of families.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getPlotVentureBySlug(slug: string): PlotVenture | undefined {
  return allPlotVentures.find((venture) => venture.slug === slug);
}

export function getPlotVentureById(id: string): PlotVenture | undefined {
  return allPlotVentures.find((venture) => venture.id === id);
}

export function getOngoingPlotVentures(): PlotVenture[] {
  return allPlotVentures.filter((venture) => venture.status === "ongoing");
}
