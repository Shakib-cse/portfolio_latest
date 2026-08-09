export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email: string;
  phone?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  status: string;
  bio: string;
  location: string;
  socials: SocialLinks;
  topSkillsPills?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  metrics: string[];
  skills: string[];
}

export interface CaseStudyData {
  overview: string;
  challenge: string;
  solution: string;
  keyLearnings: string[];
}

export interface ProjectScreen {
  title: string;
  imageUrl: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  order?: number; // 1, 2, 3... sequence order for landing page and portfolio
  slug: string;
  title: string;
  description: string;
  category: string;
  featured: boolean;
  metrics: string;
  techStack: string[];
  imageUrl?: string;
  screens?: ProjectScreen[];
  githubUrl?: string; // Omit or leave empty if repository is private
  liveUrl?: string;
  caseStudy: CaseStudyData;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0 to 100
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface PortfolioData extends PersonalInfo {
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  languages: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
