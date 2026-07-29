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
    "DECCAN HEIGHTS HOMES & RESORTS PVT LTD. group presents Deccan Heights Phase 5, an elegant yet affordable group housing at Shadnagar, Hyderabad. The project \"Deccan Heights\" is located in the frontier of the Shadnagar Mandal of Ramachandrapuram Village that comes under High Rise Promotion Zone. The layout of your premium plots can be reached after a few minutes drive from 300' 6 tracks of NH-7 Bangalore Highway. So take a pleasant drive along the breezy, broad 100, wide road and there you are in terms of sheer commercial value, the prospects are unmatched.",
  image: "/deccan_heights_phase_5.PNG",
  status: "ongoing",
  badge: "New Launch",
  location: "Shadnagar, Hyderabad, Telangana",
  priceRange: "₹8,500/sq.yd",
  roiHighlight: "ROI: High Appreciation",
  thumbnails: ["/deccan_heights_phase_5.PNG"],
  stats: [
    { label: "Plot Size", value: "9 acres" },
    { label: "Starting Price", value: "₹8500 per Sq.yard" },
    { label: "Location", value: "Shadnagar" },
  ],
  aboutTitle: "About This Project",
  aboutDescription:
    "DECCAN HEIGHTS HOMES & RESORTS PVT LTD. group presents Deccan Heights Phase 5, an elegant yet affordable group housing at Shadnagar, Hyderabad. The project \"Deccan Heights Phase 5\" is located in the frontier of the Farooq Nagar Mandal of Ramachandrapuram Village that comes under High Rise Promotion Zone. The layout of your premium plots can be reached after a few minutes drive from 300 feet' 6 tracks of NH-7 Bangalore Highway. So take a pleasant drive along the breezy, broad 100 feet wide road and there you are in terms of sheer commercial value, the prospects are unmatched.",
  aboutStats: [
    { value: "₹8,500", label: "Outright price per sq.yd", sublabel: "Affordable entry investment" },
    { value: "9 Acres", label: "Total project area", sublabel: "9 Acres 12 Guntas" },
    { value: "EMI", label: "₹35,000/mo.", sublabel: "24-month EMI facility" },
    { value: "100%", label: "Clear Documentation", sublabel: "Passbook eligible, clear title" },
  ],
  pricingTitle: "Plot Sizes & Pricing",
  plotSizes: [
    { size: "121 sq.yd", label: "Total investment", price: "₹10,28,500", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
    { size: "242 sq.yd", label: "Total investment", price: "₹20,57,000", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
    // { size: "300 sq.yd", label: "Total investment", price: "₹25,50,000", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
    // { size: "603 sq.yd", label: "Total investment", price: "₹51,25,500", rate: "@ ₹8,500/sq.yd", badge: "New Launch" },
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
    { label: "EMI Duration", value: "24 Months" },
  ],
  layoutTitle: "Project Layout Plan",
  layoutPlanUrl: "/deccan_heights_phase_5.pdf",
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



export const phase4Data: PlotVenture = {
  id: "phase-4",
  slug: "phase-4",
  title: "Deccan Heights Phase 4",
  subtitle: "Premium open plots with world-class amenities.",
  description:
    "Deccan Heights Phase 4 is a premium residential layout located in the high-growth corridor of Farooq Nagar, Hyderabad. Connected via a 100' wide road just minutes from the NH-7 Bangalore Highway, Phase 4 is designed for exceptional living and high returns. Spanning a prime area with clear documentation and excellent infrastructure, it stands as an outstanding opportunity for investors and homeowners alike.",
  image: "/deccan_heights_phase_4.PNG",
  status: "ongoing",
  badge: "95% Sold Out",
  location: "Farooq Nagar, Hyderabad, Telangana",
  priceRange: "₹9,000/sq.yd",
  roiHighlight: "ROI: High Appreciation",
  thumbnails: ["/deccan_heights_phase_4.PNG"],
  stats: [
    { label: "Plot Size", value: "12 acres" },
    { label: "Starting Price", value: "₹8000 per Sq.yard" },
    { label: "Location", value: "Shadnagar" },
  ],
  aboutTitle: "About This Project",
  aboutDescription:
    "Deccan Heights Phase 4 offers beautifully developed premium plots at Shadnagar. The project is situated at the frontier of Farooq Nagar Mandal, coming under the High Rise Promotion Zone. The layout has excellent connectivity, located a short drive from the 300 Feet' 6-track NH-7 Bangalore Highway. With high commercial value and rapid infrastructure growth in the vicinity, this venture is perfect for immediate investment.",
  aboutStats: [
    { value: "₹10,89,000", label: "Outright starting price", sublabel: "Affordable entry investment" },
    { value: "4 Acres", label: "Total project area", sublabel: "Mahadevpur Village" },
    { value: "EMI", label: "₹35,000/mo.", sublabel: "Flexible payment options" },
    { value: "100%", label: "Clear Documentation", sublabel: "Passbook eligible, clear title" },
  ],
  pricingTitle: "Plot Sizes & Pricing",
  plotSizes: [
    { size: "121 sq.yd", label: "Total investment", price: "₹10,89,000", rate: "@ ₹9,000/sq.yd", badge: "New Launch" },
    { size: "242 sq.yd", label: "Total investment", price: "₹21,78,000", rate: "@ ₹9,000/sq.yd", badge: "New Launch" },
    // { size: "300 sq.yd", label: "Total investment", price: "₹24,00,000", rate: "@ ₹9,000/sq.yd", badge: "New Launch" },
    // { size: "500 sq.yd", label: "Total investment", price: "₹40,00,000", rate: "@ ₹9,000/sq.yd", badge: "New Launch" },
  ],
  customSize: {
    title: "Custom Size",
    subtitle: "Need a different plot size?",
    description: "Custom plot sizes are available on request. Contact us to discuss your requirement.",
  },
  paymentPlans: [
    { label: "per sq.yd (Outright)", value: "₹9,000" },
    // { label: "per sq.yd (EMI Plan)", value: "₹8,500" },
    { label: "Booking Amount", value: "₹50,000" },
    { label: "Down Payment", value: "₹2,00,000" },
    { label: "EMI Duration", value: "12 Months" },
  ],
  layoutTitle: "Project Layout Plan",
  layoutPlanUrl: "/DH P4 FINAL.pdf",
  locationTitle: "Location Advantages",
  locationAdvantages: [
    { title: "Borders 150' Link Road", description: "Strategic road-facing property for high future commercial valuation." },
    { title: "Near Bangalore Highway", description: "NH-7 Bangalore Highway Facing, offering rapid transit connectivity." },
    { title: "Education Hub", description: "Near Symbiosis International University & TATA Institute of Social Science." },
    { title: "Upcoming IT Corridors", description: "Close to Microsoft Data Center, SONY Electronics Park, and Elikatta IT Park." },
    { title: "Industrial Parks", description: "Borders Apparel Park, Textile Park, and Aero Hub developments." },
    { title: "Approved & Secure", description: "100% clear title property with registration eligibility." },
  ],
  quoteText: "Deccan Heights Phase 4 represents our continuous promise of delivering high-appreciation properties. Located in a high-demand, high-growth sector of Shadnagar, it is the perfect destination for your hard-earned capital.",
  amenities: [
    "Cricket Net Facility",
    "Tennis Court",
    "Open Park & Children's Play Area",
    "Hospital & Shopping Mall Proximity",
    "ICICI Bank & School Access",
    "Electricity (with transformer & Street lights)",
    "Grand Entrance Arch",
    "Gated Community Infrastructure",
    "Vaastu Compliant Plots",
    "Avenue Plantation & Rain Water Pits",
  ],
  locationHighlights: [
    "Within HMDA Limits (Pure Residential Zone)",
    "Mahadevpur Village, Shadnagar (Survey Nos. 203, 206, 207, 209, 345-350)",
    "Borders 150' Peripheral Ring Road",
    "Near Symbiosis International University & TATA Institute of Social Science",
    "Close to proposed IT Park at Elikatta & SONY Electronics Park",
    "Adjacent to proposed Textile Park & Apparel Park",
    "Near DLF, My Home, and AP Housing Board Mega Townships",
    "Easy MMTS and APSRTC connectivity",
  ],
};

export const balapurBandraData: PlotVenture = {
  id: "balapur-bandra",
  slug: "balapur-bandra",
  title: "Balapur Bandra",
  subtitle: "A Reasonable Lavish Life",
  description:
    "Balapur Bandra is our premium gated community project, offering both luxurious villa plots and residential open plots. Located in Mallapur, near the Rajiv Gandhi International Airport, the project offers a serene, pollution-free living environment while maintaining close proximity to key commercial hubs and highways. Designed with 100% Vaastu compliance, clear titles, and premium amenities like underground drainage, water supply, and beautifully landscaped parks, it represents a golden investment opportunity with a special buy back policy.",
  image: "/Balapur_Bandra.PNG",
  status: "ongoing",
  badge: "Just 15% Left",
  location: "Mallapur, Near RGI Airport, Hyderabad, Telangana",
  priceRange: "₹25,000/sq.yd",
  roiHighlight: "ROI: High Appreciation",
  thumbnails: ["/Balapur_Bandra.PNG"],
  stats: [
    { label: "Plot Size", value: "150 - 400 sq.yds" },
    { label: "Starting Price", value: "₹25,000 per Sq.yard" },
    { label: "Location", value: "Mallapur" },
  ],
  aboutTitle: "About This Project",
  aboutDescription:
    "Balapur Bandra is our premium gated community project, offering both luxurious villa plots and residential open plots. Located in Mallapur, near the Rajiv Gandhi International Airport, the project offers a serene, pollution-free living environment while maintaining close proximity to key commercial hubs and highways. Designed with 100% Vaastu compliance, clear titles, and premium amenities like underground drainage, water supply, and beautifully landscaped parks, it represents a golden investment opportunity with a special buy back policy.",
  aboutStats: [
    { value: "₹25,000", label: "Outright price per sq.yd", sublabel: "Premium airport-zone pricing" },
    { value: "Survey 144", label: "Land survey number", sublabel: "Clear title & registration ready" },
    { value: "Buy Back", label: "Investment protection", sublabel: "100% secure buy back policy" },
    { value: "100%", label: "Vaastu Compliant", sublabel: "Harmonious layout design" },
  ],
  pricingTitle: "Plot Sizes & Pricing",
  plotSizes: [
    { size: "150 sq.yd", label: "Total investment", price: "₹37,50,000", rate: "@ ₹25,000/sq.yd", badge: "Premium" },
    { size: "200 sq.yd", label: "Total investment", price: "₹50,00,000", rate: "@ ₹25,000/sq.yd", badge: "Premium" },
    { size: "300 sq.yd", label: "Total investment", price: "₹75,00,000", rate: "@ ₹25,000/sq.yd", badge: "Most Popular" },
    { size: "400 sq.yd", label: "Total investment", price: "₹1,00,00,000", rate: "@ ₹25,000/sq.yd", badge: "Luxury" },
  ],
  customSize: {
    title: "Custom Plot Sizes",
    subtitle: "Need a custom layout size?",
    description: "We offer custom villa plot sizes to suit your specific architectural plans. Get in touch with our team to discuss your customized plot requirements.",
  },
  paymentPlans: [
    { label: "per sq.yd (Outright)", value: "₹25,000" },
    // { label: "per sq.yd (EMI Plan)", value: "₹13,000" },
    { label: "Booking Amount", value: "₹5,00,000" },
    { label: "Down Payment", value: "₹10,00,000" },
    { label: "EMI Duration", value: "6 Months" },
  ],
  layoutTitle: "Project Layout Plan",
  layoutPlanUrl: "/Balapur Bandra.pdf",
  locationTitle: "Location Advantages",
  locationAdvantages: [
    { title: "Very Close to ORR", description: "Very close to the Outer Ring Road (ORR) exit for seamless connectivity." },
    { title: "Near RGI Airport", description: "Strategically located very close to Rajiv Gandhi International Airport, Shamshabad." },
    { title: "TCS & IT Hubs", description: "Just a 20-minute drive to TCS, Cognizant, and TATA Aerospace SEZ." },
    { title: "Financial District", description: "Just 30 minutes drive from Financial District and 40 minutes from Hi-Tech City." },
    { title: "Wonderla Nearby", description: "Very close to Wonderla Amusement Park, leisure zones, and premium restaurants." },
    { title: "Educational Hub", description: "Surrounded by reputed engineering and management colleges, and international schools." },
  ],
  quoteText: "Balapur Bandra combines premium location advantages near the international airport with a secure buy-back policy, making it the perfect destination for both luxury living and high-return investments.",
  amenities: [
    "Aesthetically designed Main Entrance",
    "50, 36 & 30 feet wide Black Top Roads",
    "Underground Water supply for each plot",
    "Underground Drainage System",
    "Rain Water harvesting pits",
    "Landscaped Parks with Avenue plantation",
    "Designer Street Lights",
    "Clear Title with 100% Vaastu compliance",
    "Children play area & footpaths with curving stones",
  ],
  locationHighlights: [
    "Very Close to the Outer Ring Road (ORR)",
    "Very close to Rajiv Gandhi International Airport",
    "Just 20 Minutes drive to TCS, Cognizant & TATA Aerospace",
    "Just 30 Minutes drive from Financial District",
    "Just 40 Minutes drive from Hi-Tech City",
    "Adjacent to Sri Sailam State Highway and NH-7",
    "Near Infosys, Jewellery SEZ, Fab City & RCI",
  ],
};

export const phase123Data: PlotVenture = {
  id: "phase-1-2-3",
  slug: "phase-3",
  title: "Deccan Heights Phase 1, 2 & 3",
  subtitle: "Nature in your home..",
  description:
    "Deccan Heights Phase 1, 2 & 3 is a premium gated community layout at Shadnagar, Hyderabad, located in the frontier of Farooq Nagar Mandal of Ramachandrapuram Village. Developed as an elegant yet affordable group housing project, it is just a few minutes drive from the NH-7 Bangalore Highway. The project spans 65 acres of open plots  with excellent infrastructure, including blacktop roads, landscaped parks, overhead water tanks, and underground drainage. With 95% of plots sold out and 100% development completed, it is a highly appreciated investment destination.",
  image: "/deccan_heights_phase 1,2&3.PNG",
  status: "ongoing",
  badge: "Sold Out",
  location: "Shadnagar, Hyderabad, Telangana",
  priceRange: "₹10,000/sq.yd",
  roiHighlight: "100% Developed",
  thumbnails: ["/deccan_heights_phase 1,2&3.PNG"],
  stats: [
    { label: "Plot Size", value: "121 - 1000 sq.yds" },
    { label: "Starting Price", value: "₹10,000 per Sq.yard" },
    { label: "Location", value: "Shadnagar" },
  ],
  aboutTitle: "About This Project",
  aboutDescription:
    "Deccan Heights Phase 1, 2 & 3 is a premium gated community layout at Shadnagar, Hyderabad, located in the frontier of Farooq Nagar Mandal of Ramachandrapuram Village. Developed as an elegant yet affordable group housing project, it is just a few minutes drive from the NH-7 Bangalore Highway. The project spans 65 acres of open plots  with excellent infrastructure, including blacktop roads, landscaped parks, overhead water tanks, and underground drainage. With 95% of plots sold out and 100% development completed, it is a highly appreciated investment destination.",
  aboutStats: [
    { value: "₹10,000", label: "Price per sq.yd", sublabel: "Affordable farm plot entry" },
    { value: "65 Acres", label: "Total project area", sublabel: "Large open plot development" },
    { value: "95%", label: "Plots Sold Out", sublabel: "High demand community" },
    { value: "100%", label: "Development Done", sublabel: "Ready for immediate registry" },
  ],
  pricingTitle: "Plot Sizes & Pricing",
  plotSizes: [
    { size: "100 sq.yd", label: "Starting investment", price: "₹10,00,000", rate: "@ ₹10,000/sq.yd", badge: "Best Value" },
    { size: "200 sq.yd", label: "Standard plot size", price: "₹20,00,000", rate: "@ ₹10,000/sq.yd", badge: "Popular" },
    { size: "500 sq.yd", label: "Premium farm plot", price: "₹50,00,000", rate: "@ ₹10,000/sq.yd", badge: "Farm Plot" },
    { size: "1000 sq.yd", label: "Large estate plot", price: "₹1,00,00,000", rate: "@ ₹10,000/sq.yd", badge: "Executive" },
  ],
  customSize: {
    title: "Custom Sizes",
    subtitle: "Need a custom farm plot layout?",
    description: "Custom plot sizes ranging up to 1000 sq.yds are available on request to fit your farmhouse designs. Contact us to reserve your custom plot.",
  },
  paymentPlans: [
    { label: "per sq.yd (Outright)", value: "₹10,000" },
    // { label: "per sq.yd (EMI Plan)", value: "₹9,500" },
    { label: "Booking Amount", value: "₹1,00,000" },
    { label: "Down Payment", value: "₹2,00,000" },
    { label: "EMI Duration", value: "12 Months" },
  ],
  layoutTitle: "Project Layout Plan",
  layoutPlanUrl: "/DH_LAYOUT.pdf",
  locationTitle: "Location Advantages",
  locationAdvantages: [
    { title: "10 min to RRR", description: "Located just a 10-minute drive from the proposed Regional Ring Road (RRR)." },
    { title: "Bangalore Highway", description: "Excellent connectivity, facing/near the NH-7 Bangalore Highway corridor." },
    { title: "Education Hub", description: "Near Symbiosis International University and TATA Institute of Social Sciences (TISS)." },
    { title: "Airport Zone", description: "Very close to Rajiv Gandhi International Airport and corporate developments." },
    { title: "Mega Townships", description: "Surrounded by major developers like DLF, My Home, and AP Housing Board." },
    { title: "Industrial Growth", description: "Proximity to Apparel Park, Textile Park, SONY Electronics Park, and Elkatta IT Park." },
  ],
  quoteText: "Deccan Heights Phase 1, 2 & 3 is a completed proof-of-concept of our high-quality development standards, offering immediate registration and strong growth potential near the Bangalore Highway.",
  amenities: [
    "Grand Entrance Arch",
    "30 Feet Black Top Roads",
    "Over Head Water Tank",
    "Landscaped Park",
    "Underground Drainage System",
    "Gated Community Infrastructure",
    "Electricity (with transformer & Street lights)",
    "Vaastu Compliant Plots",
    "Avenue Plantation & Rain Water Harvesting Pits",
  ],
  locationHighlights: [
    "10 min drive from Proposed Regional Ring Road(RRR)",
    "Within HMDA Limits (Pure Residential Zone)",
    "Near by Symbiosis International University & TATA Institute of Social Science",
    "Proposed IT Park at Elkatta, SONY Electronics Park",
    "Surrounded by Mega Townships of DLF, My Home, AP Housing Board",
    "Easy connectivity by MMTS and APSRTC",
  ],
};

export const allPlotVentures: PlotVenture[] = [phase5Data, phase123Data, phase4Data, balapurBandraData,];

export const ongoingVentures: VentureListing[] = [
  {
    id: 1,
    title: "Deccan Heights Phase 5",
    description:
      "Experience luxury living in the heart of nature with our premium plots designed for your dream home. A perfect blend of tranquility and modern amenities.",
    image: "/deccan_heights_phase_5.PNG",
    link: "/ventures/phase-1",
    stats: [
      { label: "Area", value: "9 Acres" },
      { label: "Price", value: "₹8500" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
  {
    id: 2,
    title: "Deccan Heights Phase 4",
    description:
      "A premium residential gated community layout offering highly appreciated plots with world-class amenities and high ROI potential.",
    image: "/deccan_heights_phase_4.PNG",
    link: "/ventures/phase-4",
    stats: [
      { label: "Area", value: "12 Acres" },
      { label: "Price", value: "₹8000" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
  {
    id: 3,
    title: "Balapur Bandra",
    description:
      "A premium gated community offering luxury villa plots and residential open plots in Mallapur, near Rajiv Gandhi International Airport.",
    image: "/Balapur_Bandra.PNG",
    link: "/ventures/balapur-bandra",
    stats: [
      { label: "Area", value: "Survey 144" },
      { label: "Price", value: "₹25,000" },
      { label: "Location", value: "Balapur" },
    ],
  },
  {
    id: 4,
    title: "Deccan Heights Phase 1, 2 & 3",
    description:
      "A premium 65-acre gated community offering farm plots and residential plots in Shadnagar with 100% completed infrastructure.",
    image: "/deccan_heights_phase 1,2&3.PNG",
    link: "/ventures/phase-3",
    stats: [
      { label: "Area", value: "65 Acres" },
      { label: "Price", value: "₹9000" },
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
    image: "/deccan_heights_phase_5.PNG",
    link: "/ventures/phase-1",
    stats: [
      { label: "Area", value: "1200 Sq.ft" },
      { label: "Price", value: "₹8500+" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
  {
    id: 2,
    title: "Deccan Heights Phase 4",
    description:
      "A premium residential gated community layout offering highly appreciated plots with world-class amenities and high ROI potential.",
    image: "/deccan_heights_phase_4.PNG",
    link: "/ventures/phase-4",
    stats: [
      { label: "Area", value: "12 Acres" },
      { label: "Price", value: "₹8000+" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
  {
    id: 3,
    title: "Balapur Bandra",
    description:
      "A premium gated community offering luxury villa plots and residential open plots in Mallapur, near Rajiv Gandhi International Airport.",
    image: "/Balapur_Bandra.PNG",
    link: "/ventures/balapur-bandra",
    stats: [
      { label: "Area", value: "Survey 144" },
      { label: "Price", value: "₹25000+" },
      { label: "Location", value: "Balapur" },
    ],
  },
  {
    id: 4,
    title: "Deccan Heights Phase 1, 2 & 3",
    description:
      "A premium 65-acre gated community offering farm plots and residential plots in Shadnagar with 90% completed infrastructure.",
    image: "/deccan_heights_phase 1,2&3.PNG",
    link: "/ventures/phase-3",
    stats: [
      { label: "Area", value: "65 Acres" },
      { label: "Price", value: "₹9000+" },
      { label: "Location", value: "Shadnagar" },
    ],
  },
];

export const completedProjects: CompletedProject[] = [
  {
    id: 1,
    title: "Basheer Bagh",
    description:
      "A premium residential development offering modern amenities and strategic connectivity.",
    location: "Moinabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 2,
    title: "Clock Tower Colony",
    description:
      "Centrally located residential project with focus on community living and accessibility.",
    location: "Shadnagar",
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
    title: "Brindawan Colony",
    description:
      "A serene residential layout designed for peaceful living within city reach.",
    location: "Mogiligidda , Shadnagar",
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
    title: "5th Avenue Kottur",
    description:
      "High-demand plots featuring excellent urban connectivity and essential services.",
    location: "Kottur",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 7,
    title: "Golden Villas Balapur",
    description:
      "Luxury villa plots in the tranquil environment of Balapur, perfect for homeowners.",
    location: "Balapur",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 11,
    title: "Deccan Heights Phase 1, 2 ,3 & 4",
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
