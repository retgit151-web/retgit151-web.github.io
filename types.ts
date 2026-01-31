export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  visualMetaphor: string;
  skills: string[];
  icon: string;
  metrics?: { label: string; value: string }[];
  codeSnippet?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;     // URL for the issuer's website
  pdf?: string;     // Path to the local PDF file
}

export enum SkillCategory {
  OFFENSIVE = 'Offensive',
  DEFENSIVE = 'Defensive',
  AUTOMATION = 'Automation',
  FORENSICS = 'Forensics',
  NETWORK = 'Network'
}