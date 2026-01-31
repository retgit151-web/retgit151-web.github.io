
import React from 'react';
import { 
  ShieldCheck, 
  TerminalSquare, 
  Network, 
  Cpu, 
  Bug, 
  Globe, 
  ShieldAlert, 
  Database, 
  Lock, 
  Search,
  Activity,
  Server,
  Microscope,
  Ghost,
  ServerCog
} from 'lucide-react';
import { Project, Certificate } from './types';

// Certificate PDF Paths
// Paths are relative to the public root (index.html).
const introCyberPdf = 'Certificates/INTRO_TO_CYBER_Certificates.pdf';
const linuxFundPdf = 'Certificates/linuxfund_Certificate.pdf';
const netSecPdf = 'Certificates/network_security_Certificate.pdf';
const netResearchPdf = 'Certificates/NR_Certificates.pdf';
const ptPdf = 'Certificates/PT.pdf';
const socPdf = 'Certificates/soc_Certificates.pdf';
const winForensicsPdf = 'Certificates/Wf_Certificates.pdf';

export interface DetailedSkill {
  name: string;
  explanation: string;
}

export interface SkillCategoryDetailed {
  category: string;
  items: DetailedSkill[];
}

export const PROJECTS: Project[] = [
  {
    id: 'linux-info-automation',
    title: 'Linux Info Automation',
    description: 'The script’s job is to print a clean report about your machine, like ip address, MAC address, memory usage, and top 10 largest files.',
    longDescription: 'A custom-built system auditing utility that generates comprehensive situational awareness reports. It captures critical metadata including network configurations (IP/MAC), memory utilization, and local storage state to facilitate rapid security compliance checks.',
    visualMetaphor: 'Compliance Status: 100% Verified',
    skills: ['System Auditing', 'Bash', 'Automation'],
    icon: 'ServerCog',
    codeSnippet: 'system_status: OK\nnetwork_interfaces: 3\nmemory_usage: 14%\ndisk_health: OPTIMAL'
  },
  {
    id: 'network-research-anon',
    title: 'Network research anonymous scanning',
    description: "The script's role is to perform an anonymous Nmap and Whois network scan using Nipe, against an IP target provided by the user.",
    longDescription: 'Anonymized signal flow suite that leverages Nipe to route all reconnaissance traffic through the Tor network. Designed for stealth operations, it allows for secure Nmap and Whois scans while maintaining complete OPSEC integrity.',
    visualMetaphor: 'Anonymized Routing Active',
    skills: ['Network Stealth', 'Nmap', 'Tor'],
    icon: 'Ghost'
  },
  {
    id: 'windows-forensics-analyzer',
    title: 'Windows Forensics Memory File Analyzer',
    description: "The script's role is to act as an automated Analyzer for Windows memory dumps. It takes a raw file provided by the user and extracts hidden evidence automatically.",
    longDescription: 'Automated memory dump analyzer that identifies malicious artifacts within Windows environments. Utilizing the Volatility framework, it uncovers rootkits, hidden processes, and credential exposure that traditional tools miss.',
    visualMetaphor: 'Artifact Analysis: Completed',
    skills: ['Memory Forensics', 'Volatility', 'Threat Hunting'],
    icon: 'Microscope'
  },
  {
    id: 'python-log-parser',
    title: 'Python log_parser',
    description: 'The script’s role is to act as an Automated Security Log Parser for Linux authentication logs. It specifically targets the /var/log/auth.log file to identify potential security breaches.',
    longDescription: 'A proactive SIEM component that monitors Linux authentication logs for anomalies. It identifies patterns of brute-force attempts and unauthorized access, categorizing risk levels based on attempt frequency and IP reputation.',
    visualMetaphor: 'Log Analysis: Monitoring Active',
    skills: ['IDS', 'Python', 'Log Analysis'],
    icon: 'ShieldAlert',
    codeSnippet: 'ALERT: Unauthorized Login Attempt Detected\nSOURCE_IP: 192.168.1.104\nTIMESTAMP: 14:02:55 UTC\nACTION: Logged & Blocked'
  },
  {
    id: 'pt-vulnerability-scanning',
    title: 'pt vulnerability scanning',
    description: 'The tool is designed to take an IP range, perform a full or basic scan, find vulnerabilities, and perform credential brute-forcing.',
    longDescription: 'A penetration testing scanner designed to map attack surfaces. It performs full-scale vulnerability discovery and credential strength assessments across specified IP ranges, providing a prioritized risk report.',
    visualMetaphor: 'Surface Scanning: 82% Discovery',
    skills: ['Pentesting', 'Vulnerability Scan', 'Risk Assessment'],
    icon: 'Bug'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'intro-cyber',
    title: 'Intro to Cyber Security',
    issuer: 'ThinkCyber',
    date: '2025',
    description: 'Comprehensive introduction to cybersecurity fundamentals and core concepts.',
    url: 'https://thinkcyber.co.il',
    pdf: introCyberPdf
  },
  {
    id: 'linux-fund',
    title: 'Linux Fundamentals',
    issuer: 'ThinkCyber',
    date: '2025',
    description: 'Essential Linux system administration, command line usage, and permissions management.',
    url: 'https://thinkcyber.co.il',
    pdf: linuxFundPdf
  },
  {
    id: 'net-sec',
    title: 'Network Security',
    issuer: 'ThinkCyber',
    date: '2025',
    description: 'Deep dive into network protocols, secure architecture, and defense mechanisms.',
    url: 'https://thinkcyber.co.il',
    pdf: netSecPdf
  },
  {
    id: 'net-research',
    title: 'Network Research',
    issuer: 'ThinkCyber',
    date: '2025',
    description: 'Advanced methodologies for network reconnaissance and traffic analysis.',
    url: 'https://thinkcyber.co.il',
    pdf: netResearchPdf
  },
  {
    id: 'pt',
    title: 'Penetration Testing',
    issuer: 'ThinkCyber',
    date: '2026',
    description: 'Practical offensive security techniques, vulnerability assessment, and exploitation.',
    url: 'https://thinkcyber.co.il',
    pdf: ptPdf
  },
  {
    id: 'soc',
    title: 'SOC Analyst',
    issuer: 'ThinkCyber',
    date: '2026',
    description: 'Security Operations Center workflows, incident detection, and response strategies.',
    url: 'https://thinkcyber.co.il',
    pdf: socPdf
  },
  {
    id: 'win-forensics',
    title: 'Windows Forensics',
    issuer: 'ThinkCyber',
    date: '2026',
    description: 'Investigative techniques for Windows systems, memory analysis, and artifact recovery.',
    url: 'https://thinkcyber.co.il',
    pdf: winForensicsPdf
  }
];

export const SKILL_DATA = [
  { subject: 'Forensics', A: 85, fullMark: 100 },
  { subject: 'Automation', A: 90, fullMark: 100 },
  { subject: 'Networking', A: 95, fullMark: 100 },
  { subject: 'Pentesting', A: 75, fullMark: 100 },
  { subject: 'SOC Analyst', A: 80, fullMark: 100 },
  { subject: 'Defense', A: 90, fullMark: 100 },
];

export const FULL_SKILLS_DETAILED: SkillCategoryDetailed[] = [
  { 
    category: 'Core Fundamentals', 
    items: [
      { 
        name: 'Cyber Fundamentals', 
        explanation: 'Protocols | Windows Network Tools | Networking Fundamentals | OSI Layer Analysis | Kali Linux Environment | Text Manipulation' 
      },
      { name: 'Automation', explanation: 'Bash Scripting | Python Development for Security' }
    ] 
  },
  { 
    category: 'Offensive Security', 
    items: [
      { name: 'Network Research', explanation: 'Network Services | Network Protocols Analysis | Scanning Tools | Wireshark | TCP/IP | Offline\\Online Brute-force | Trojans | Firewalls' },
      { name: 'Penetration Testing', explanation: 'Enumeration | Exploitation | Post Exploitation | Payloads | Social Engineering | WebApp Security' },
      { name: 'Network Security', explanation: 'Network Attacks | Domain Exploitation | PowerShell | Domain Security | Cryptography' }
    ] 
  },
  { 
    category: 'Defensive Operations', 
    items: [
      { name: 'Windows Forensics', explanation: 'Carving Tools | Steganography | Volatility | Memory Analysis | Malware Analysis | Windows Events' },
      { 
        name: 'SOC Analyst', 
        explanation: 'SIEM System (ELK, Splunk) | IPS/IDS | Log Analysis | Event Analysis | Firewalls | Incident Response Methodologies | Proactive Threat Hunting' 
      }
    ] 
  }
];

export const iconMap: Record<string, any> = {
  ShieldCheck,
  TerminalSquare,
  Network,
  Cpu,
  Bug,
  Globe,
  ShieldAlert,
  Database,
  Lock,
  Search,
  Activity,
  Server,
  Microscope,
  Ghost,
  ServerCog
};
