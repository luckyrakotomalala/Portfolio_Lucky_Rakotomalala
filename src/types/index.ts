export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export interface PageInfo {
  id: PageId;
  number: string;
  name: string;
  shortName: string;
  subtitle: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Mobile' | 'Backend' | 'Frontend';
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecture: string;
  objectives?: string[];
}

export type SkillCategory = 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'cloud';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0 to 100
  iconName: string;
  tagline: string;
  popular?: boolean;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: 'education' | 'experience';
  badges: string[];
}

export interface StatItem {
  id: string;
  label: string;
  numericValue: number;
  suffix: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}
