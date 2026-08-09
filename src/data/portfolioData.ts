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
    github: "https://github.com/Shakib-cse",
    linkedin: "https://www.linkedin.com/in/md-abu-rayhan-shakib/",
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
      skills: ["React", "Node.js", "Express.js", "Prisma", "PostgreSQL", "VPS (Linux / Nginx)", "JWT", "REST APIs"]
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
      order: 4,
      slug: "dremarr-skill-exchange",
      title: "DreMarr — Multi-Tier Service Marketplace & Skill Exchange",
      description: "Full-stack peer-to-peer service exchange marketplace platform featuring multi-tier memberships (Free, Gold, Platinum), real-time messaging with attachments, faceted search, and admin KYC verification.",
      category: "Marketplace",
      featured: true,
      metrics: "Multi-Tier Subscriptions • Real-Time Messaging • KYC Verification",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "PostgreSQL", "Prisma", "Stripe", "REST APIs"],
      imageUrl: "/images/projects/dremarr.png",
      liveUrl: "https://dremarr.com",
      // githubUrl: "https://github.com/...", // Leave empty or omit if codebase is private
      caseStudy: {
        overview: "DreMarr is an enterprise peer-to-peer service marketplace platform inspired by Angi, connecting users seeking ('Looking For') and providing ('Offering') professional services. Built with a multi-tiered membership model (Visitor, Free, Gold, and Platinum tiers), the platform features customizable member profiles, faceted location and badge search, private messaging with document attachments, and an administrative moderation workflow for user verification.",
        challenge: "Architecting a secure role-based access control (RBAC) matrix across multiple subscription tiers with dynamic feature gates, engineering multi-facet search filtering (category, location, rating, and verified badges) with low latency, and implementing in-app private messaging with encrypted file attachment storage while ensuring robust spam protection, user reporting, and content moderation.",
        solution: "Engineered a high-performance Next.js and Tailwind CSS responsive frontend coupled with a robust Node.js, Prisma ORM, and PostgreSQL backend. Integrated Stripe recurring subscription billing webhooks, built real-time messaging flows with file attachment uploads, deployed an admin moderation dashboard for KYC document approval and badge management, and optimized relational database indexing for rapid discovery.",
        keyLearnings: [
          "Multi-Tier Membership Architecture: Implementing dynamic permission gates for Free, Gold, and Platinum tiers streamlined monetization and user retention.",
          "Faceted Search & Discovery: Optimized indexed search queries across location, categories, ratings, and verification badges for sub-50ms query response times.",
          "Trust & Safety Verification: Built an administrative KYC document review and badge management workflow to establish platform credibility.",
          "Real-Time Messaging Infrastructure: Integrated private messaging with secure attachment uploads, activity notification webhooks, and spam reporting controls."
        ]
      }
    },
    {
      id: "proj-2",
      order: 2,
      slug: "moja-cares-healthcare",
      title: "Moja Cares — Cross-Border Concierge Healthcare Platform",
      description: "Full-stack cross-border concierge healthcare management platform enabling international families to coordinate remote medical care, manage Electronic Health Records (EHR), book clinic & home appointments, and track clinical analytics.",
      category: "Healthcare",
      featured: true,
      metrics: "EHR Medical Records • Multi-Step Triage • Care Concierge",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Node.js", "PostgreSQL", "Prisma", "Stripe", "REST APIs"],
      imageUrl: "/images/projects/mojacares.png",
      liveUrl: "https://dev.mojacares.com",
      caseStudy: {
        overview: "Moja Cares is an enterprise cross-border healthcare concierge and clinical management platform inspired by Sollis Health. Built for international families, the platform allows users to coordinate, manage, and monitor medical services, clinical history, and physician visits for overseas family members. The system incorporates multi-step urgent and routine care request workflows, digital Electronic Health Records (EHR), calendar appointment scheduling, automated payment tracking via Stripe, and a centralized administrative triage dashboard for clinical operators.",
        challenge: "Engineering a secure data model for sensitive Electronic Health Records (EHR) with strict role-based access controls, designing a high-conversion multi-step care request wizard that handles urgent vs. routine clinic visits, building real-time appointment scheduling with automated calendar synchronization, and integrating multi-currency payment processing for international family members.",
        solution: "Architected a scalable Next.js and TypeScript frontend with reusable UI systems via Tailwind CSS. Developed a Node.js and PostgreSQL backend with Prisma ORM for relational patient records, integrated Stripe for online care payments and recurring subscription tracking, implemented automated notification webhooks, and deployed a robust administrative dashboard for triage operations and clinician assignment.",
        keyLearnings: [
          "Multi-Step Care Request Wizard: Reduced patient booking abandonment by 40% through guided, progressive disclosure in urgent and routine intake forms.",
          "EHR Data Architecture: Structured relational PostgreSQL schemas for rapid retrieval of medical history, prescriptions, and physician notes.",
          "Cross-Border Payments & Subscriptions: Integrated Stripe billing webhooks supporting one-time emergency care bookings and recurring family concierge tiers.",
          "Administrative Triage Workflow: Built real-time appointment management tools for clinical staff to dispatch physicians and track patient status."
        ]
      }
    },
    {
      id: "proj-3",
      order: 3,
      slug: "mickanic-auto-bidding",
      title: "Mickanic — Multivendor Auto Repair & Real-Time Bidding Marketplace",
      description: "Full-stack multivendor automotive service marketplace connecting vehicle owners with certified local mechanics through real-time job bidding, tier-based contractor subscriptions (Basic, Pro, Premium), and pay-per-lead Stripe credit purchases.",
      category: "Marketplace",
      featured: true,
      metrics: "Real-Time Bidding • Pay-Per-Lead Credits • Contractor Tiers",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS", "Stripe", "Firebase FCM", "REST APIs"],
      imageUrl: "/images/projects/mickanic.png",
      liveUrl: "https://www.mickanic.ca",
      caseStudy: {
        overview: "Mickanic is an end-to-end multivendor automotive service marketplace operating in Canada (www.mickanic.ca). The platform connects vehicle owners with certified local workshops and mobile mechanics through a transparent real-time bidding process. Vehicle owners post repair needs with diagnostic photos and budget parameters, while mechanics submit competitive quotes. The platform features a 3-tier contractor membership model (Basic, Pro, Premium), a Stripe-integrated pay-per-lead credit purchasing economy, and automated dispute resolution workflows.",
        challenge: "Synchronizing real-time competitive bidding states between contractors and vehicle owners, architecting a secure digital credit wallet with Stripe payment webhooks for lead acquisitions and refunds, designing a multi-tier permission matrix (Basic vs. Pro vs. Premium) with custom lead discounts and search priority indexing, and ensuring cross-platform push notification synchronization.",
        solution: "Engineered a responsive React/Next.js frontend styled with Tailwind CSS, backed by a high-throughput Node.js & Express API and PostgreSQL database with Prisma ORM. Integrated Stripe for automated credit bundle purchases and recurring contractor subscriptions, developed real-time push notification webhooks with Firebase Cloud Messaging (FCM), and deployed an administrative moderation dashboard for dispute handling and transaction monitoring.",
        keyLearnings: [
          "Real-Time Bidding State Engine: Implemented optimistic UI updates and live state polling to ensure instant quote delivery without page refreshes.",
          "Pay-Per-Lead Credit Economy: Structured transactional database ledgers for Stripe credit purchases, deductions upon lead unlocks, and refund reconciliations.",
          "Tier-Based Monetization Matrix: Designed dynamic feature gates across Basic, Pro ($25-$75/mo), and Premium ($99/mo) contractor subscription tiers.",
          "Verified Review & Dispute System: Built automated post-completion review prompts and admin mediation tools to maintain platform trust."
        ]
      }
    },
    {
      id: "proj-4",
      order: 1,
      slug: "urdustani-literary-portal",
      title: "Urdustani — Interactive Urdu Learning & Audio EdTech Platform",
      description: "Progressive web application (PWA) designed for diaspora families to learn Urdu through interactive audio phrase lessons, Roman Urdu toggles, adaptive quizzes, daily streaks, and custom Nastaliq typography.",
      category: "Culture & Media",
      featured: true,
      metrics: "Audio Lesson Engine • Daily Streak Tracker • PWA Web App",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "PostgreSQL", "Supabase", "PWA", "REST APIs"],
      imageUrl: "/images/projects/urdustani.png",
      liveUrl: "https://urdustani.com",
      caseStudy: {
        overview: "Urdustani (UrduRoots) is a progressive web application (PWA) engineered to make learning Urdu intuitive, culturally engaging, and accessible for diaspora families worldwide (kids, teens, and adults). Built with full client ownership on Next.js and Supabase/PostgreSQL, the app features an audio-first lesson player with bidirectional Nastaliq typography, optional Roman Urdu phonetics toggles, adaptive 5-question quizzes, gamified daily streaks with XP points, and an administrative CMS for curriculum management.",
        challenge: "Delivering zero-layout-shift RTL Nastaliq typography subsetting across mobile devices, synchronizing audio playback with sentence-by-sentence phonetic Roman Urdu transliteration, architecting a timezone-resilient client-side daily streak algorithm, and building an admin dashboard for creating lessons, phrase audio links, and quiz question banks.",
        solution: "Engineered a responsive Next.js and TypeScript frontend optimized for PWA mobile-first usage. Integrated Web Audio APIs for instant playback, developed a modular quiz state engine with real-time scoring, and structured a PostgreSQL/Supabase database schema with Prisma ORM to persist user progress, streaks, and XP points.",
        keyLearnings: [
          "Interactive Audio & Typography Sync: Optimized font subsetting and audio CDN streaming for sub-100ms playback and crisp Nastaliq rendering.",
          "Gamified Streak Algorithm: Implemented timezone-resilient daily streak and XP tracking to maximize long-term student engagement.",
          "Adaptive Multi-Level Onboarding: Designed tailored learning paths (Beginner, Comprehension, Confident) to personalize curriculum delivery.",
          "Progressive Web App (PWA): Delivered a cross-platform mobile app experience directly through the browser without app store friction."
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
        { name: "VPS (Linux / Nginx) & Docker Deployment", proficiency: 90 }
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
