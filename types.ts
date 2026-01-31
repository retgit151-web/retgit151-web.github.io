
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

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  transferableSkills: string[];
}

export enum SkillCategory {
  OFFENSIVE = 'Offensive',
  DEFENSIVE = 'Defensive',
  AUTOMATION = 'Automation',
  FORENSICS = 'Forensics',
  NETWORK = 'Network'
}
