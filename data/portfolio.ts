// Type definitions
export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  category?: string;
  image?: string;
  achievements?: string[];
  techStack?: string[];
  features?: string[];
  projects?: string[];
  links?: ProjectLink[];
  tech?: string[];
}

export const personalInfo = {
  name: "M. Luthfi Al Ghifari",
  title: "Senior WordPress Developer & Team Lead",
  email: "alghifarimuh1@gmail.com",
  linkedin: "linkedin.com/in/alghifariml",
  github: "github.com/alghifariml",
  summary: "Senior WordPress Developer & Team Lead with 5+ years of experience in full-stack development, specializing in custom theme/plugin development, technical SEO, and performance optimization. Proven track record leading cross-functional teams to deliver high-impact web solutions that drive measurable results (20% user engagement increase, 15% conversion rate improvement). Strong background in data-driven decision making with expertise in Laravel, React, and modern CSS frameworks."
};

export const workExperience = [
  {
    role: "Team Lead - Web Developer",
    company: "Juara Holding Group",
    period: "Nov 2024 - Present",
    achievements: [
      "Led development of responsive WordPress websites for travel agency and yacht services, achieving 20% increase in user engagement",
      "Collaborated with design and marketing teams to optimize user journey, improving conversion rates by 15%",
      "Developed custom WordPress themes and plugins using TailwindCSS, improving site performance and maintainability",
      "Managed technical SEO initiatives including Google Tag Manager, Search Console, and Analytics implementation"
    ]
  },
  {
    role: "WordPress Developer",
    company: "Juara Holding Group",
    period: "Nov 2023 - Nov 2024",
    achievements: [
      "Designed, developed, and maintained responsive websites for travel agency and yacht services division",
      "Built custom WordPress themes with TailwindCSS framework and developed plugins for specific business requirements",
      "Troubleshot and resolved website functionality, performance, and security issues"
    ]
  },
  {
    role: "Full Stack WordPress Developer",
    company: "Drago Indonesia",
    period: "Jun 2023 - Nov 2023",
    achievements: [
      "Developed custom WordPress themes and plugins to meet client requirements",
      "Managed server-side development with PHP and MySQL, ensuring seamless front-end/back-end integration"
    ]
  },
  {
    role: "Data Analytics Intern",
    company: "Incorp Indonesia & Vietnam",
    period: "Jun 2023 - Sep 2023",
    achievements: [
      "Migrated Google Universal Analytics data (2018-2023) and performed ETL processes for company data",
      "Created data visualizations with Looker Studio and built landing pages for company website"
    ]
  }
];

export const projects: Project[] = [
  {
    name: "PlayByTurn - Main Website",
    description: "Marketing and landing page for the sports match tracking platform. Showcases features, pricing, and guides for racquet sports enthusiasts.",
    category: "Landing Page",
    image: "/projects/playbyturn-landing.png",
    achievements: [
      "Responsive marketing website with modern design",
      "SEO-optimized content for sports tracking keywords",
      "Integration with app and API ecosystem"
    ],
    links: [
      { label: "Visit Site", url: "https://playbyturn.com" }
    ],
    tech: ["Next.js", "TailwindCSS", "SEO", "Responsive Design"]
  },
  {
    name: "PlayByTurn - Web Application",
    description: "Interactive web application for tracking live scores and rankings for racquet sports (Tennis, Padel, Pickleball, Table Tennis, Badminton & Squash). Real-time match tracking with comprehensive statistics.",
    category: "Web Application",
    image: "/projects/playbyturn-app.png",
    achievements: [
      "Refactored frontend with ReactJS for improved performance and user experience",
      "Real-time score tracking with WebSocket integration",
      "Comprehensive player statistics and leaderboards",
      "Mobile-responsive interface for on-court usage"
    ],
    links: [
      { label: "Launch App", url: "https://app.playbyturn.com" }
    ],
    tech: ["ReactJS", "Redux", "WebSocket", "Chart.js", "TailwindCSS"]
  },
  {
    name: "PlayByTurn - Backend API",
    description: "Robust RESTful API and admin dashboard powering the PlayByTurn ecosystem. Handles match data, player statistics, rankings, and real-time updates.",
    category: "Backend API",
    image: "/projects/playbyturn-api.png",
    achievements: [
      "Built scalable Backend API using Laravel with RESTful architecture",
      "Migrated database from Supabase to PostgreSQL for enhanced scalability and performance",
      "Comprehensive API documentation with authentication and rate limiting",
      "Real-time data synchronization across all platforms"
    ],
    links: [
      { label: "API Docs", url: "https://api.playbyturn.com" }
    ],
    tech: ["Laravel", "PostgreSQL", "RESTful API", "JWT Auth", "Redis"]
  },
  {
    name: "BPV Storage - Image Management System",
    description: "Enterprise-grade image storage and management system built for Bali Premium Villa, designed to streamline digital asset management for property marketing with AI-powered features and SEO optimization.",
    category: "Web Application",
    image: "/projects/bpv-storage.png",
    techStack: [
      "Laravel 12.x and PHP 8.2+",
      "TailwindCSS 4.x, Flowbite Components, Vite 6.x",
      "MariaDB with Intervention Image Laravel"
    ],
    features: [
      "Automated image compression and optimization for web performance",
      "Gallery management system organized by villa/property with multi-language metadata support",
      "Secure REST API with Laravel Sanctum authentication",
      "SEO Tools and AI integration for automated content optimization",
      "Image scraper functionality for bulk importing from external URLs",
      "Role-Based Access Control (RBAC) for enterprise-level security"
    ],
    links: [
      { label: "Live Site", url: "https://storage.balipremiumvilla.com" }
    ],
    tech: ["Laravel", "PHP", "TailwindCSS", "MariaDB", "AI Integration"]
  },
  {
    name: "Bali Premium Trip - Website Revamp & Migration",
    description: "Complete website revamp and migration project focused on technical SEO and performance optimization.",
    category: "Landing Page",
    image: "/projects/bpt-id.png",
    achievements: [
      "Directed technical SEO during site migration; deployed GTM, GSC, and GA4 for comprehensive tracking",
      "Optimized images and minified JS/CSS, achieving faster load times and improved Core Web Vitals"
    ],
    links: [
      { label: "Visit Site", url: "https://balipremiumtrip.com" }
    ],
    tech: ["WordPress", "TailwindCSS", "Google Analytics", "SEO"]
  },
  {
    name: "Custom WordPress Themes",
    description: "Developed custom themes with TailwindCSS for multiple clients across various industries.",
    projects: [
      "indonesiajuara.asia",
      "juaraholding.com",
      "balipremiumtrip.com",
      "wbsglobalsupport.com (Law firm - SEO-optimized)",
      "kalimasadapapers.com",
      "availabledev.com",
      "gotravisa.com",
      "ardefabrics.com",
      "cakramotor11.com/blog",
      "komodoluxury.com"
    ],
    tech: ["WordPress", "TailwindCSS", "Yoast SEO", "Custom Theme Development"]
  }
];

export const skills = {
  "WordPress": [
    "Custom Theme Development",
    "Plugin Development",
    "Elementor Pro",
    "Gutenberg",
    "Yoast SEO",
    "WooCommerce"
  ],
  "Languages": [
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SQL",
    "R",
    "Python"
  ],
  "Frameworks & Tools": [
    "Laravel",
    "ReactJS",
    "TailwindCSS",
    "Bootstrap 5",
    "Git",
    "GitHub",
    "GitLab",
    "Docker",
    "Vite"
  ],
  "Databases": [
    "MySQL",
    "MariaDB",
    "PostgreSQL"
  ],
  "Image Processing": [
    "Intervention Image Laravel",
    "Automated Compression",
    "Multi-format Optimization"
  ],
  "SEO & Analytics": [
    "Google Analytics 4",
    "Google Tag Manager",
    "Google Search Console",
    "Looker Studio",
    "Technical SEO"
  ],
  "Other CMS/Builders": [
    "Wix",
    "Zyro Builder"
  ]
};

export const education = [
  {
    degree: "Software Engineering",
    institution: "Kirklareli University, Turkey",
    period: "2018 - 2021"
  },
  {
    degree: "Google Data Analytics Professional Certificate",
    institution: "Coursera",
    period: "2022 - 2023"
  },
  {
    degree: "Data Scientist",
    institution: "Digital Talent Scholarship",
    period: "2023"
  }
];

export const languages = [
  { language: "Indonesian", level: "Native" },
  { language: "English", level: "Professional" },
  { language: "Turkish", level: "Professional" }
];
