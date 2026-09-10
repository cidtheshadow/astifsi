export interface FocusArea {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface ImportantDate {
  date: string;
  rawDate: string; // YYYY-MM-DD for countdown logic
  title: string;
  description: string;
  isPassed?: boolean;
  isUrgent?: boolean;
}

export interface CommitteeMember {
  name: string;
  role: string;
  designation: string;
  institution: string;
  category: 'Patron' | 'Chair' | 'Secretary' | 'Advisory';
  avatarInitials: string;
  location?: string;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface DistanceInfo {
  place: string;
  distance: string;
  type: 'road' | 'rail' | 'air';
}

export const CONFERENCE_INFO = {
  title: "NATIONAL FOOD CONFERENCE 2026",
  mode: "Hybrid Mode (In-Person & Virtual)",
  theme: "Innovate Today. Nourish Tomorrow",
  occasion: "World Food Day 2026",
  dates: "15–16 October 2026",
  venue: "Sant Longowal Institute of Engineering & Technology (SLIET), Longowal, Punjab",
  abstractFormUrl: "https://forms.google.com", // Google Form link placeholder
  organizers: [
    {
      name: "AFST(I) Longowal Chapter",
      role: "Co-Organizer",
    },
    {
      name: "Department of Food Engineering & Technology",
      role: "Organizer",
      institution: "SLIET Longowal"
    },
    {
      name: "AFST(I), Mysuru",
      role: "Parent Association"
    }
  ]
};

export const ABOUT_CONFERENCE = `The National Food Conference 2026 brings together food scientists, technologists, engineers, academicians, researchers, industry professionals, entrepreneurs, policymakers and students to deliberate on emerging challenges and opportunities across the food value chain. With the theme "Innovate Today. Nourish Tomorrow," the conference will focus on innovative technologies, sustainable food systems, nutrition, food safety, processing, preservation, value addition and emerging solutions that can contribute to a resilient and secure food future. The conference aims to provide a vibrant platform for knowledge exchange, scientific discussion, networking, technology transfer and industry–academia collaboration.`;

export const THEME_DESCRIPTION = `The future of food demands innovation that is sustainable, inclusive, safe, nutritious and accessible. The conference will explore how science, engineering, digital technologies and entrepreneurship can transform the food sector while addressing resource constraints, food loss and waste, climate change and changing consumer needs.`;

export const KEY_FOCUS_AREAS: FocusArea[] = [
  {
    id: "processing",
    number: "01",
    title: "Emerging Food Processing & Preservation Technologies",
    description: "Novel non-thermal processing, high-pressure processing, pulsed electric fields, cold plasma, ultrasonic extraction, and advanced thermal technologies.",
    iconName: "Zap",
    tag: "Processing Tech"
  },
  {
    id: "engineering",
    number: "02",
    title: "Food Engineering, Process Design & Automation",
    description: "Process optimization, equipment design, heat & mass transfer modeling, sensor integration, and smart automated processing lines.",
    iconName: "Cpu",
    tag: "Engineering & Automation"
  },
  {
    id: "ai-digital",
    number: "03",
    title: "Artificial Intelligence, Digitalization & Smart Food Systems",
    description: "AI-driven quality control, computer vision sorting, predictive modeling, Internet of Things (IoT) in food supply chains, and digital twins.",
    iconName: "Bot",
    tag: "AI & Digitalization"
  },
  {
    id: "safety-quality",
    number: "04",
    title: "Food Safety, Quality Assurance & Traceability",
    description: "Rapid pathogen detection kits, chemical contaminant testing, blockchain-enabled supply chain traceability, and global food compliance standards.",
    iconName: "ShieldCheck",
    tag: "Safety & Traceability"
  },
  {
    id: "functional-foods",
    number: "05",
    title: "Functional Foods, Nutraceuticals & Health",
    description: "Bioactive compound extraction, gut microbiome modulation, clinical nutrition, bio-fortification, and personalized nutrition delivery systems.",
    iconName: "HeartPulse",
    tag: "Nutraceuticals & Health"
  },
  {
    id: "sustainable-systems",
    number: "06",
    title: "Sustainable & Circular Food Systems",
    description: "Life cycle assessment, eco-friendly food manufacturing, energy efficiency, regenerative agriculture models, and water footprint reduction.",
    iconName: "Leaf",
    tag: "Sustainability"
  },
  {
    id: "waste-valorization",
    number: "07",
    title: "Food Loss, Waste Reduction & By-product Valorization",
    description: "Upcycling agro-industrial side streams, bioconversion of agricultural waste into high-value biochemicals, and zero-waste processing plants.",
    iconName: "Recycle",
    tag: "Waste Valorization"
  },
  {
    id: "novel-proteins",
    number: "08",
    title: "Novel Foods & Alternative Proteins",
    description: "Plant-based meat analogues, precision fermentation, cultivated proteins, insect nutrition, microalgae, and cellular agriculture.",
    iconName: "Dna",
    tag: "Novel Foods"
  },
  {
    id: "startups",
    number: "09",
    title: "Entrepreneurship, Start-ups & Technology Commercialization",
    description: "Incubation models, venture funding for foodtech startups, IP strategy, commercial scaling, and product launch dynamics.",
    iconName: "Rocket",
    tag: "Entrepreneurship"
  },
  {
    id: "industry-academia",
    number: "10",
    title: "Industry–Academia Collaboration & Technology Transfer",
    description: "Bridging bench-scale innovation to industrial adoption, joint research ventures, pilot-plant trials, and policy frameworks.",
    iconName: "Handshake",
    tag: "Tech Transfer"
  }
];

export const IMPORTANT_DATES: ImportantDate[] = [
  {
    rawDate: "2026-09-30",
    date: "September 30, 2026",
    title: "Submission of Abstract",
    description: "Deadline for submitting original research abstracts (Max 300 words) via Google Form.",
    isUrgent: true
  },
  {
    rawDate: "2026-10-05",
    date: "October 5, 2026",
    title: "Intimation of Acceptance",
    description: "Notification sent to corresponding authors regarding abstract evaluation outcome."
  },
  {
    rawDate: "2026-10-10",
    date: "October 10, 2026",
    title: "Submission of Full-Length Paper",
    description: "Deadline for accepted authors to submit full manuscripts for conference proceedings."
  },
  {
    rawDate: "2026-10-15",
    date: "October 15–16, 2026",
    title: "National Food Conference 2026",
    description: "Two-day hybrid conference with Keynote lectures, technical sessions, and award presentations."
  }
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Keynote & Invited Lectures",
    description: "Distinguished talks by eminent leaders from premier national institutes, research laboratories, and global food corporations.",
    icon: "Presentation",
    badge: "Plenary"
  },
  {
    title: "Technical Sessions",
    description: "In-depth parallel sessions covering 10 core thematic areas of food science, engineering, and digital agriculture.",
    icon: "Layers",
    badge: "Scientific"
  },
  {
    title: "Oral & Poster Presentations",
    description: "Vibrant forums for scientists, scholars, and students to showcase novel research findings both physically and virtually.",
    icon: "Sparkles",
    badge: "Hybrid"
  },
  {
    title: "Industry–Academia Interaction",
    description: "Networking roundtables designed to accelerate technology transfer, commercialization, and research partnerships.",
    icon: "Users",
    badge: "Networking"
  },
  {
    title: "Best Presentation Awards",
    description: "Prestigious recognition and monetary/certificate awards for the best oral and poster scientific presentations.",
    icon: "Trophy",
    badge: "Awards"
  }
];

export const ABSTRACT_GUIDELINES = {
  maxWords: 300,
  fontFamily: "Times New Roman",
  fontSize: "12 pt",
  requirements: [
    "Original research work relevant to the conference theme.",
    "Concise bold title in 12 pt Times New Roman.",
    "Full author names, institutional affiliations, and corresponding author email.",
    "3 to 5 relevant keywords.",
    "Submission exclusively via official Google Form submission portal."
  ]
};

export const SLIET_DETAILS = {
  established: "1989",
  deemedStatus: "2007",
  campusSize: "451 Acres",
  description: "Sant Longowal Institute of Engineering & Technology (SLIET), Longowal, was established in 1989 by the Government of India with the vision of imparting quality technical education and fostering excellence in emerging areas of engineering and technology. An autonomous, fully Government of India-funded institution, SLIET was accorded Deemed-to-be-University status in 2007. Located in a sprawling 451 acres of lush green land of Punjab, about 7 km from the Chandigarh-Bathinda highway in District Sangrur.",
  distances: [
    { place: "Sangrur", distance: "18 Km", type: "road" },
    { place: "Barnala", distance: "30 Km", type: "road" },
    { place: "Dhuri Railway Station", distance: "38 Km", type: "rail" },
    { place: "Patiala", distance: "78 Km", type: "road" },
    { place: "Ludhiana", distance: "110 Km", type: "road" },
    { place: "Chandigarh", distance: "150 Km", type: "road" },
    { place: "Delhi", distance: "360 Km", type: "road" }
  ] as DistanceInfo[],
  airports: ["Chandigarh Airport (IXC)", "Halwara Airport Ludhiana"],
  railways: ["Sangrur (18 Km)", "Barnala (30 Km)", "Dhuri (38 Km)"]
};

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  // Patrons & Chairs
  {
    name: "Prof. M. K. Paswan",
    role: "Patron in Chief",
    designation: "Director",
    institution: "SLIET Longowal",
    category: "Patron",
    avatarInitials: "MP"
  },
  {
    name: "Prof. A. S. Shahi",
    role: "Patron",
    designation: "Dean (Academic)",
    institution: "SLIET Longowal",
    category: "Patron",
    avatarInitials: "AS"
  },
  {
    name: "Prof. P. S. Panesar",
    role: "Patron",
    designation: "President",
    institution: "AFST(I), Mysuru",
    category: "Patron",
    avatarInitials: "PP"
  },
  {
    name: "Prof. C. S. Riar",
    role: "Chairman",
    designation: "Head of Department (FET)",
    institution: "SLIET Longowal",
    category: "Chair",
    avatarInitials: "CR"
  },
  {
    name: "Prof. D. C. Saxena",
    role: "Co-chairman",
    designation: "President, AFST(I) Longowal Chapter",
    institution: "SLIET Longowal",
    category: "Chair",
    avatarInitials: "DS"
  },
  {
    name: "Prof. Sukhcharn Singh",
    role: "Organizing Secretary",
    designation: "Professor, Department of FET",
    institution: "SLIET Longowal",
    category: "Secretary",
    avatarInitials: "SS"
  },
  {
    name: "Prof. Navdeep Jindal",
    role: "Organizing Secretary",
    designation: "Professor, Department of FET",
    institution: "SLIET Longowal",
    category: "Secretary",
    avatarInitials: "NJ"
  },

  // National Advisory Committee
  {
    name: "Prof. A. S. Bawa",
    role: "National Advisory Committee",
    designation: "Former Director",
    institution: "DFRL Mysuru",
    category: "Advisory",
    avatarInitials: "AB",
    location: "Mysuru"
  },
  {
    name: "Prof. Sudesh Kumar Yadav",
    role: "National Advisory Committee",
    designation: "Director",
    institution: "CSIR-IHBT, Palampur",
    category: "Advisory",
    avatarInitials: "SY",
    location: "Palampur"
  },
  {
    name: "Prof. Nachiket Kotwaliwale",
    role: "National Advisory Committee",
    designation: "Director",
    institution: "ICAR-CIPHET, Ludhiana",
    category: "Advisory",
    avatarInitials: "NK",
    location: "Ludhiana"
  },
  {
    name: "Prof. Ashwani Pareek",
    role: "National Advisory Committee",
    designation: "Executive Director",
    institution: "NABI, Mohali",
    category: "Advisory",
    avatarInitials: "AP",
    location: "Mohali"
  },
  {
    name: "Dr. Nilesh Amritkar",
    role: "National Advisory Committee",
    designation: "Managing Director",
    institution: "Envirocare Labs",
    category: "Advisory",
    avatarInitials: "NA",
    location: "Mumbai"
  },
  {
    name: "Prof. Ashok Kumar",
    role: "National Advisory Committee",
    designation: "Former Dean (CoAET) & Director Extension Education",
    institution: "PAU Ludhiana",
    category: "Advisory",
    avatarInitials: "AK",
    location: "Ludhiana"
  },
  {
    name: "Prof. Rakesh Sharda",
    role: "National Advisory Committee",
    designation: "Project Director",
    institution: "ICAR-CIPHET, Ludhiana",
    category: "Advisory",
    avatarInitials: "RS",
    location: "Ludhiana"
  },
  {
    name: "Er. Parmdeep Ghuman",
    role: "National Advisory Committee",
    designation: "Country Manager India",
    institution: "Newly Weds Foods LLC",
    category: "Advisory",
    avatarInitials: "PG",
    location: "India"
  }
];
