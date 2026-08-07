import { PortfolioData } from '@/types';

/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH - PORTFOLIO DATA CONFIGURATION
 * ============================================================================
 * 
 * Instructions for updating your portfolio:
 * 1. Personal Details & Bio: Edit Section 1 below.
 * 2. Work Experience: Add/edit objects in SECTION 2 (experiences array).
 * 3. Portfolio Projects: Add/edit objects in SECTION 3 (projects array).
 *    - Note: If `githubUrl` is omitted or left empty, the site will automatically
 *      show the "Private Codebase (Restricted per Client NDA)" badge.
 *    - Filter category tabs on the homepage are generated automatically!
 * 4. Technical Skills: Edit proficiency percentages in SECTION 4.
 * 5. Education & Languages: Edit SECTION 5 and SECTION 6.
 * ============================================================================
 */

export const portfolioData: PortfolioData = {
  // ==========================================================================
  // SECTION 1: PERSONAL INFORMATION & CONTACT DETAILS
  // ==========================================================================
  name: "Md. Abu Rayhan (Shakib)",
  title: "Full Stack Developer",
  status: "Available for Full Stack & Next.js Engineering Roles",
  bio: "Results-driven Full Stack Developer specializing in building high-performance, scalable web applications with Next.js, React.js, and Node.js ecosystem. Experienced in architecting end-to-end digital platforms, peer-to-peer marketplaces, international healthcare portals, and automated bidding systems.",
  location: "Dhaka, Bangladesh",
  
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "shakibcse333@gmail.com",
    phone: "+8801775584107",
  },

  // Highlight pills displayed below the main hero headline
  topSkillsPills: [
    "Next.js App Router",
    "React.js",
    "Node.js & Express",
    "PostgreSQL & Prisma",
    "Tailwind CSS & shadcn/ui",
    "JWT Authentication"
  ],

  // ==========================================================================
  // SECTION 2: WORK EXPERIENCES
  // ==========================================================================
  experiences: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      company: "Softvence Alpha",
      location: "Dhaka, Bangladesh",
      period: "Sep 2025 – Present",
      summary: "Architecting, building, and maintaining high-availability full-stack web applications using React, Node.js, Express, Prisma, and PostgreSQL.",
      highlights: [
        "Architect, build, and maintain high-availability full-stack web applications using React, Node.js, Express, Prisma, and PostgreSQL.",
        "Implement robust, role-based user authentication using JSON Web Tokens (JWT) and integrate RESTful APIs with Prisma ORM for secure data exchange.",
        "Optimize client-side rendering speed, database queries, state updates, cross-browser compatibility, and overall application accessibility.",
        "Work closely with UI/UX designers and product team members to translate wireframes into interactive, production-ready modules."
      ],
      metrics: ["High-Availability Systems", "JWT Role-Based Auth", "Optimized Speed"],
      skills: ["React", "Node.js", "Express.js", "Prisma", "PostgreSQL", "JWT", "REST APIs"]
    },
    {
      id: "exp-2",
      role: "Frontend Developer",
      company: "Softvence Omega",
      location: "Dhaka, Bangladesh",
      period: "Jun 2025 – Aug 2025",
      summary: "Developed scalable, responsive user interfaces leveraging Next.js, Tailwind CSS, and reusable UI components via shadcn/ui.",
      highlights: [
        "Developed scalable, responsive user interfaces leveraging Next.js, Tailwind CSS, and reusable UI components via shadcn/ui.",
        "Collaborated with backend engineers to integrate complex REST APIs, ensuring clean data hydration and seamless state management.",
        "Managed Git branching workflows, performed code reviews, and configured automated deployment pipelines on Vercel."
      ],
      metrics: ["Next.js & Tailwind CSS", "shadcn/ui Systems", "Vercel Deployment"],
      skills: ["Next.js", "Tailwind CSS", "shadcn/ui", "REST APIs", "Vercel", "Git"]
    }
  ],

  // ==========================================================================
  // SECTION 3: FEATURED PROJECTS & CASE STUDIES
  // ==========================================================================
  projects: [
    {
      id: "proj-1",
      slug: "dremarr-skill-exchange",
      title: "DreMarr — Skill Exchange Marketplace Platform",
      description: "Engineered a peer-to-peer service marketplace platform enabling users to trade professional skills without monetary transactions serving 50K+ users.",
      category: "Marketplace",
      featured: true,
      metrics: "50K+ Active Users • Peer-to-Peer Barter",
      techStack: ["Next.js", "Tailwind CSS", "React", "Node.js", "PostgreSQL", "Prisma"],
      imageUrl: "/images/projects/dremarr.png",
      liveUrl: "https://dremarr.com",
      // githubUrl: "https://github.com/...", // Leave empty or omit if codebase is private
      caseStudy: {
        overview: "DreMarr is a peer-to-peer service marketplace platform that enables users to exchange professional skills seamlessly without monetary transactions.",
        challenge: "Building intuitive end-to-end user flows for service listing creation, member profile management, direct messaging, and community review systems serving 50K+ users.",
        solution: "Engineered a responsive Next.js frontend styled with Tailwind CSS, built real-time messaging flows, and integrated dynamic rating/review modules.",
        keyLearnings: [
          "Optimized community rating & review rendering for large active user bases.",
          "Streamlined skill search indexing to cut discovery latency."
        ]
      }
    },
    {
      id: "proj-2",
      slug: "moja-cares-healthcare",
      title: "Moja Cares — Healthcare Management Platform",
      description: "Developed a cross-border healthcare portal allowing international families to manage and monitor healthcare services for family members remotely.",
      category: "Healthcare",
      featured: true,
      metrics: "EHR System • Dynamic AI Insights",
      techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "AI Insights"],
      imageUrl: "/images/projects/mojacares.png",
      liveUrl: "https://dev.mojacares.com",
      caseStudy: {
        overview: "Moja Cares empowers international families to coordinate, manage, and track healthcare services for loved ones across borders.",
        challenge: "Synchronizing Electronic Health Record (EHR) features, dynamic AI health summary insights, and multi-step scheduling workflows for urgent and routine visits.",
        solution: "Implemented Electronic Health Record (EHR) modules, dynamic AI health summary insights, and multi-step scheduling forms with PostgreSQL database persistence.",
        keyLearnings: [
          "AI-driven health summary models simplify complex patient medical history.",
          "Robust multi-step scheduling forms improve conversion for urgent care bookings."
        ]
      }
    },
    {
      id: "proj-3",
      slug: "mickanic-auto-bidding",
      title: "Mickanic — Auto Service Bidding Marketplace",
      description: "Created an automotive service marketplace connecting vehicle owners directly with verified local mechanics and workshops.",
      category: "Marketplace",
      featured: true,
      metrics: "Real-Time Bids • Mobile-First Design",
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS", "REST APIs"],
      imageUrl: "/images/projects/mickanic.png",
      liveUrl: "https://mickanic.ca",
      caseStudy: {
        overview: "Mickanic bridges vehicle owners with certified local workshops and mechanics through transparent real-time bidding.",
        challenge: "Designing real-time job posting modules, mechanic bidding comparison features, and user rating systems with a mobile-first responsive design.",
        solution: "Built real-time job posting modules, mechanic bidding comparison features, and user rating systems with a mobile-first responsive design.",
        keyLearnings: [
          "Real-time bid state synchronization improves marketplace user engagement.",
          "Mobile-first UI design ensures effortless job postings on mobile devices."
        ]
      }
    },
    {
      id: "proj-4",
      slug: "urdustani-literary-portal",
      title: "Urdustani — Cultural & Literary Digital Portal",
      description: "Built a digital literary archive dedicated to preserving and sharing Urdu literature and poetry with a global audience.",
      category: "Culture & Media",
      featured: true,
      metrics: "Global Audience • Custom Typography",
      techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "REST APIs"],
      imageUrl: "/images/projects/urdustani.png",
      liveUrl: "https://urdustani.com",
      caseStudy: {
        overview: "Urdustani is a digital archive preserving classical and modern Urdu literature and poetry for readers worldwide.",
        challenge: "Delivering fast page performance, custom typography rendering, clean content navigation, and structured search capabilities across large literary collections.",
        solution: "Engineered high-performance page layouts, custom typography subsetting, clean content navigation, and structured search capabilities.",
        keyLearnings: [
          "Optimized font subsetting drastically speeds up custom RTL typography rendering.",
          "Structured search indexing provides instant literary discovery."
        ]
      }
    }
  ],

  // ==========================================================================
  // SECTION 4: TECHNICAL SKILLS MATRIX
  // ==========================================================================
  skillCategories: [
    {
      category: "Languages & Core Frameworks",
      skills: [
        { name: "Next.js / React.js", proficiency: 96 },
        { name: "JavaScript (ES6+) / TypeScript", proficiency: 95 },
        { name: "HTML5 / CSS3 / Web Standards", proficiency: 98 },
        { name: "PHP", proficiency: 80 }
      ]
    },
    {
      category: "Front-End & UI Styling",
      skills: [
        { name: "Tailwind CSS / shadcn/ui", proficiency: 96 },
        { name: "Redux Toolkit / Context API / TanStack Query", proficiency: 92 },
        { name: "Framer Motion & Responsive Design", proficiency: 92 },
        { name: "React Hook Form / Zod Validation", proficiency: 90 }
      ]
    },
    {
      category: "Back-End, Databases & DevOps",
      skills: [
        { name: "Node.js & Express.js REST APIs", proficiency: 94 },
        { name: "PostgreSQL & Prisma ORM", proficiency: 96 },
        { name: "SQL & Database Schema Design", proficiency: 92 },
        { name: "Docker / Vercel / Git / Postman", proficiency: 88 }
      ]
    }
  ],

  // ==========================================================================
  // SECTION 5: EDUCATION
  // ==========================================================================
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      year: "Graduated: 2024"
    }
  ],

  // ==========================================================================
  // SECTION 6: LANGUAGES SPOKEN
  // ==========================================================================
  languages: [
    "English (Professional Working)",
    "Bengali (Native)",
    "Hindi (Conversational)"
  ]
};
