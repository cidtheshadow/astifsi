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
  image?: string;
  location?: string;
  phone?: string;
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

export interface RegistrationFee {
  category: string;
  amount: string;
  isDiscounted?: boolean;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description: string;
  category: string;
}

export const CONFERENCE_INFO = {
  title: "NATIONAL FOOD CONFERENCE (AFSTINFC-2026)",
  shortCode: "AFSTINFC-2026",
  mode: "Hybrid Mode (In-Person & Virtual)",
  theme: "Innovate Today. Nourish Tomorrow",
  occasion: "World Food Day 2026",
  sponsorship: "AFST(I), Mysuru Sponsored",
  dates: "15–16 October 2026",
  venue: "SLIET, Longowal-148106, Punjab, India",
  abstractFormUrl: "https://forms.gle/bCd8umYgiU5rdjbX9",
  locationDirectionsUrl: "https://share.google/jbFzRwF2DOy83tKvU",
  officialEmail: "afstinfc2026@sliet.ac.in",
  organizers: [
    {
      name: "AFST(I) Longowal Chapter",
      role: "Joint Organizer",
    },
    {
      name: "Department of Food Engineering & Technology",
      role: "Joint Organizer",
      institution: "SLIET Longowal"
    },
    {
      name: "AFST(I), Mysuru",
      role: "Sponsor & Parent Association"
    }
  ]
};

export const ABOUT_CONFERENCE = `Innovate Today. Nourish Tomorrow. The National Food Conference 2026 brings together academia, research, industry, entrepreneurship and policy to exchange knowledge, showcase innovation and foster collaboration for a sustainable, safe, nutritious and resilient food future. The conference focuses on innovative technologies, food processing, engineering, quality assurance, and circular food systems.`;

export const THEME_DESCRIPTION = `The future of food demands innovation that is sustainable, inclusive, safe, nutritious and accessible. The conference will explore how science, engineering, digital technologies and entrepreneurship can transform the food sector while addressing resource constraints, food loss and waste, climate change and changing consumer needs.`;

export const REGISTRATION_FEES: RegistrationFee[] = [
  { category: "Industry", amount: "Rs 1500/-" },
  { category: "Faculty (Non-AFSTI member)", amount: "Rs 1500/-" },
  { category: "Faculty (AFSTI member)", amount: "Rs 1000/-", isDiscounted: true },
  { category: "Students (Non-AFSTI member)", amount: "Rs 750/-" },
  { category: "Students (AFSTI member)", amount: "Rs 500/-", isDiscounted: true }
];

export const BANK_DETAILS = {
  accountName: "AFSTI Longowal",
  bankName: "Central Bank of India, Longowal",
  accountNo: "3401579557",
  ifscCode: "CBIN0283105"
};

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
    rawDate: "2026-10-04",
    date: "October 4, 2026",
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
    description: "Two-day hybrid conference featuring 3 Technical Sessions (Oral) & 1 Poster Session."
  }
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    title: "Keynote & Invited Lectures",
    description: "Distinguished talks by eminent leaders from premier national institutes, CSIR, ICAR, NABI, and food corporations.",
    icon: "Presentation",
    badge: "Plenary"
  },
  {
    title: "3 Oral Technical Sessions",
    description: "Three parallel oral presentation sessions covering 10 core thematic areas of food science and engineering.",
    icon: "Layers",
    badge: "3 Sessions"
  },
  {
    title: "1 Dedicated Poster Session",
    description: "Interactive poster presentation forum for researchers, students, and scholars to exhibit scientific findings.",
    icon: "Sparkles",
    badge: "1 Session"
  },
  {
    title: "Industry–Academia Interaction",
    description: "Networking roundtables designed to accelerate technology transfer, commercialization, and research partnerships.",
    icon: "Users",
    badge: "Networking"
  },
  {
    title: "Best Oral & Poster Awards",
    description: "Prestigious awards and mementos presented for the top oral and poster scientific research presentations.",
    icon: "Trophy",
    badge: "Awards"
  },
  {
    title: "Certificates for Winners & Participants",
    description: "Official certificates of participation awarded to all registered delegates, along with mementos & honors for award winners.",
    icon: "Award",
    badge: "Certificates"
  }
];

export const ABSTRACT_GUIDELINES = {
  maxWords: 300,
  fontFamily: "Times New Roman",
  fontSize: "12 pt",
  requirements: [
    "Original research work relevant to the conference theme.",
    "Concise bold title in 12 pt Times New Roman.",
    "Full author names, institutional affiliations, and 3-5 keywords.",
    "Abstract should be submitted through official Google Form.",
    "Deadline for Abstract Submission: October 4, 2026."
  ]
};

export const SLIET_DETAILS = {
  established: "1989",
  deemedStatus: "2007",
  campusSize: "451 Acres",
  description: "Established by India's Ministry of Education in 1989, SLIET Longowal is a premier CFTI & Deemed University in Punjab. Spread across 451 acres of lush green campus, SLIET is known for its modular structure and academic excellence, earning NAAC 'A' accreditation, Tier-1 NBA-accredited UG programs, and 79th NIRF Engineering ranking.",
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

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    name: "Banasar Bagh & Heritage Monuments",
    distance: "18 Km (Sangrur)",
    description: "Historic royal gardens, marble pavilions, and heritage architecture of the former Jind kingdom in Sangrur.",
    category: "Heritage Garden"
  },
  {
    name: "Qila Mubarak & Sheesh Mahal",
    distance: "78 Km (Patiala)",
    description: "Magnificent 18th-century grand fort, mirror palace gallery, and museum showcasing rich royal heritage.",
    category: "Royal Fort & Museum"
  },
  {
    name: "Sukhna Lake & Rock Garden",
    distance: "150 Km (Chandigarh)",
    description: "World-famous Nek Chand sculpture park crafted from recycled materials beside the serene foothills lake.",
    category: "Architecture & Lake"
  },
  {
    name: "Sri Harmandir Sahib (Golden Temple)",
    distance: "210 Km (Amritsar)",
    description: "Spiritual center and world-renowned gilded sanctuary surrounded by the sacred Amrit Sarovar.",
    category: "Spiritual Landmark"
  }
];

export const COMMITTEE_MEMBERS: CommitteeMember[] = [
  // Patrons & Chairs
  {
    name: "Prof. M. K. Paswan",
    role: "Patron in Chief",
    designation: "Director",
    institution: "SLIET Longowal",
    category: "Patron",
    avatarInitials: "MP",
    image: "/organizers/mk-paswan.jpeg"
  },
  {
    name: "Prof. A. S. Shahi",
    role: "Patron",
    designation: "Dean (Academic)",
    institution: "SLIET Longowal",
    category: "Patron",
    avatarInitials: "AS",
    image: "/organizers/as-shahi.jpeg"
  },
  {
    name: "Prof. P. S. Panesar",
    role: "Patron",
    designation: "President",
    institution: "AFST(I), Mysuru",
    category: "Patron",
    avatarInitials: "PP",
    image: "/organizers/ps-panesar.jpeg"
  },
  {
    name: "Prof. C. S. Riar",
    role: "Chairman",
    designation: "Head of Department (FET)",
    institution: "SLIET Longowal",
    category: "Chair",
    avatarInitials: "CR",
    phone: "98159-69140",
    image: "/organizers/cs-riar.jpeg"
  },
  {
    name: "Prof. D. C. Saxena",
    role: "Co-chairman",
    designation: "President, AFST(I) Longowal Chapter",
    institution: "SLIET Longowal",
    category: "Chair",
    avatarInitials: "DS",
    image: "/organizers/dc-saxena.jpeg"
  },
  {
    name: "Prof. Sukhcharn Singh",
    role: "Organizing Secretary",
    designation: "Professor, Department of FET",
    institution: "SLIET Longowal",
    category: "Secretary",
    avatarInitials: "SS",
    phone: "98159-80334",
    image: "/organizers/sukhcharn-singh.jpeg"
  },
  {
    name: "Prof. Navdeep Jindal",
    role: "Organizing Secretary",
    designation: "Professor, Department of FET",
    institution: "SLIET Longowal",
    category: "Secretary",
    avatarInitials: "NJ",
    phone: "98159-82026",
    image: "/organizers/navdeep-jindal.jpeg"
  },
  {
    name: "Er. Ashwini Kumar",
    role: "Co-Organizing Secretary",
    designation: "Assistant Professor, Department of FET",
    institution: "SLIET Longowal",
    category: "Secretary",
    avatarInitials: "AK",
    image: "/organizers/ashwini-kumar.jpeg"
  },

  // National Advisory Committee
  {
    name: "Prof. A. S. Bawa",
    role: "National Advisory Committee",
    designation: "Former Director",
    institution: "DFRL Mysuru",
    category: "Advisory",
    avatarInitials: "AB",
    location: "Mysuru",
    image: "/organizers/as-bawa.jpeg"
  },
  {
    name: "Prof. Sudesh Kumar Yadav",
    role: "National Advisory Committee",
    designation: "Director",
    institution: "CSIR-IHBT, Palampur",
    category: "Advisory",
    avatarInitials: "SY",
    location: "Palampur",
    image: "/organizers/sudesh-kumar-yadav.jpeg"
  },
  {
    name: "Prof. Nachiket Kotwaliwale",
    role: "National Advisory Committee",
    designation: "Director",
    institution: "ICAR-CIPHET, Ludhiana",
    category: "Advisory",
    avatarInitials: "NK",
    location: "Ludhiana",
    image: "/organizers/nachiket-kotwaliwale.jpeg"
  },
  {
    name: "Prof. Ashwani Pareek",
    role: "National Advisory Committee",
    designation: "Executive Director",
    institution: "NABI, Mohali",
    category: "Advisory",
    avatarInitials: "AP",
    location: "Mohali",
    image: "/organizers/ashwani-pareek.jpeg"
  },
  {
    name: "Dr. Nilesh Amritkar",
    role: "National Advisory Committee",
    designation: "Managing Director",
    institution: "Envirocare Labs",
    category: "Advisory",
    avatarInitials: "NA",
    location: "Mumbai",
    image: "/organizers/nilesh-amritkar.jpeg"
  },
  {
    name: "Prof. Ashok Kumar",
    role: "National Advisory Committee",
    designation: "Former Dean (CoAET) & Director Extension Education",
    institution: "PAU Ludhiana",
    category: "Advisory",
    avatarInitials: "AK",
    location: "Ludhiana",
    image: "/organizers/ashok-kumar.jpeg"
  },
  {
    name: "Prof. Rakesh Sharda",
    role: "National Advisory Committee",
    designation: "Project Director",
    institution: "ICAR-CIPHET, Ludhiana",
    category: "Advisory",
    avatarInitials: "RS",
    location: "Ludhiana",
    image: "/organizers/rakesh-sharda.jpeg"
  },
  {
    name: "Er. Parmdeep Ghuman",
    role: "National Advisory Committee",
    designation: "Country Manager India",
    institution: "Newly Weds Foods LLC",
    category: "Advisory",
    avatarInitials: "PG",
    location: "India",
    image: "/organizers/parmdeep-ghuman.jpeg"
  },
  {
    name: "Mr. Sartaj Singh Brar",
    role: "National Advisory Committee",
    designation: "Managing Director",
    institution: "Pagro Frozen Foods Pvt. Ltd.",
    category: "Advisory",
    avatarInitials: "SB",
    location: "Punjab",
    image: "/organizers/sartaj-brar.jpeg"
  }
];

export const SPONSORS = [
  {
    name: "AFST(I), Mysuru",
    role: "Sponsor & Parent Association",
    description: "Association of Food Scientists and Technologists (India), Mysuru — Apex professional body promoting food science, technology & research.",
    logo: "/logos/afsti-mysuru-logo.jpeg",
    badge: "Parent Association"
  },
  {
    name: "AFST(I) Longowal Chapter",
    role: "Joint Organizer & Host Chapter",
    description: "AFSTI Longowal Chapter — Driving academic innovation, student workshops and industry interaction.",
    logo: "/logos/afsti-longowal-logo.jpeg",
    badge: "Host Chapter"
  },
  {
    name: "SLIET Longowal",
    role: "Host Deemed University",
    description: "Sant Longowal Institute of Engineering & Technology (Govt. of India Deemed University).",
    logo: "/logos/sliet-logo.jpeg",
    badge: "Host Institution"
  }
];

export const WFD_CELEBRATIONS_DATA = {
  title: "World Food Day 2026 Celebrations & Student Workshop",
  theme: "Innovate Today. Nourish Tomorrow",
  dates: "12 & 13 October 2026",
  time: "10:00 AM – 11:00 AM",
  venue: "Food & Chemical Block, SLIET Longowal",
  registrationDeadline: "September 30, 2026",
  categories: ["Diploma Students", "B.Tech / M.Tech / Ph.D. Scholars"],
  overallCoordinators: [
    { name: "Bharat Bhushan", designation: "Ph.D. Scholar", phone: "62975-31362" },
    { name: "Amisha Kaushik", designation: "Ph.D. Scholar", phone: "83073-52267" }
  ],
  events: [
    {
      title: "Student Workshop on Food Innovation",
      tagline: "Practical Hands-On Workshop for Students & Research Scholars",
      highlights: [
        "Hands-On Student Training – Practical demonstration of food processing & preservation",
        "Expert Technical Sessions – Guidance from senior FET faculty & industry mentors",
        "Interactive Modules – Novel food formulation, pilot plant tools & safety protocols",
        "Official Certificate of Participation & skill enhancement badge for all attendees"
      ],
      coordinator: "Overall Student Coordinators",
      overallCoordinators: [
        { name: "Bharat Bhushan", designation: "Ph.D. Scholar", phone: "62975-31362" },
        { name: "Amisha Kaushik", designation: "Ph.D. Scholar", phone: "83073-52267" }
      ],
      iconName: "BookOpen"
    },
    {
      title: "Innovative Food Art",
      tagline: "Transforming Ideas into Creative & Nutritious Products",
      highlights: [
        "Innovative New Product Development – Nutritious food formulations",
        "Best Out of Waste – Upcycling food by-products into high-value products",
        "Creativity Meets Sustainability – Reducing food waste in a circular economy",
        "Student Innovation & Entrepreneurship – Showcase technical & culinary skills"
      ],
      coordinator: "Pallavi Sharma (Ph.D. Research Scholar)",
      members: ["Satyarth Saindhaw", "Sparsh Parmar", "Mohit Nagar", "Jasmine Saini", "Satrudhan (M.Tech)", "Shubhankar (M.Tech)"],
      iconName: "Utensils"
    },
    {
      title: "Creative Oral Presentation",
      tagline: "Innovate, Create, Present — Pitch Your Original Ideas",
      highlights: [
        "Theme Focus – Innovation in Food Science & Technology",
        "10-Minute, 10-Slide Target – High-impact fast-paced presentation",
        "Advanced Topics – 3D food printing, smart digital food systems & sustainable protein",
        "Academic Presentation Stage – Present before expert faculty & peers"
      ],
      coordinator: "Amandeep Singh (Ph.D. Research Scholar)",
      members: ["Riya Goyal", "Ambika Thakur", "Armandeep Kaur", "Rupali (M.Tech)", "Tarunpreet (M.Tech)"],
      iconName: "Presentation"
    },
    {
      title: "Technical Quiz Competition",
      tagline: "Test Your Food Science & Nutrition Knowledge",
      highlights: [
        "Test Your Nutrition Knowledge – Explore food safety, processing & health",
        "Two-Day Quiz Challenge – Qualifier round followed by buzzer final round",
        "Team Up & Compete – Mixed teams of Diploma & B.Tech / M.Tech students",
        "Pass & Buzzer Rounds – Fast-paced strategic team questions & prizes"
      ],
      coordinator: "Tanya Sonker (Ph.D. Research Scholar)",
      phone: "72756-90956",
      email: "tanya.sonker.3@gmail.com",
      members: ["Poonam Patil", "Gunjan Thakur", "Ramanjot Kaur", "Avani Sharma (M.Tech)", "Apurba Mishra (M.Tech)"],
      iconName: "HelpCircle"
    },
    {
      title: "On-the-Spot Poster-Making Competition",
      tagline: "Imagine, Create, Inspire — Sustainable Food Security",
      highlights: [
        "1-Hour On-the-Spot Challenge – Create an impactful visual poster within 60 minutes",
        "Theme Focus – Food innovation, zero food waste, nutrition & technology",
        "Creative Academic Platform – Showcase awareness, design & original ideas",
        "Exciting Awards & Certificates for winners and top presentations"
      ],
      coordinator: "Divyanshi Thakur (Ph.D. Research Scholar)",
      members: ["Heena", "Sunil Kumar", "Ashmita Mittal", "Shubham Thakur (M.Tech)", "Dilpreet (M.Tech)"],
      iconName: "Palette"
    },
    {
      title: "Guess It Right",
      tagline: "Decode Food Tech Clues & Sensory Riddles",
      highlights: [
        "Identify the Unusual – Recognize sensory, equipment & chemical clues",
        "Decode the Clues – Every clue hides an innovative food science answer",
        "Multi-Level Competition – Participation & awards for ICD and UG/PG levels",
        "Put your Knowledge to the Test in an engaging interactive game"
      ],
      coordinator: "Rishabh Thakur (Ph.D. Research Scholar)",
      image: "/wfd/guess-it-right.png",
      members: ["Amisha Gurung", "Nirbhay Kumar", "Shashank Wirutkar", "Anjali (M.Tech)", "Vishal (M.Tech)"],
      iconName: "Sparkles"
    }
  ]
};
