
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
// Note: We use the root-relative path starting with '/'
const introCyberPdf = '/Certificates/INTRO_TO_CYBER_Certificates.pdf';
const linuxFundPdf = '/Certificates/linuxfund_Certificate.pdf';
const netSecPdf = '/Certificates/network_security_Certificate.pdf';
const netResearchPdf = '/Certificates/NR_Certificates.pdf';
const ptPdf = '/Certificates/PT.pdf';
const socPdf = '/Certificates/soc_Certificates.pdf';
const winForensicsPdf = '/Certificates/Wf_Certificates.pdf';
const cityGuildsIntroPdf = '/Certificates/City_Guilds_Intro_Certificate.pdf';

// Project Manual PDF Paths
const linuxInfoManual = '/script_manual/Linux_Info_Automation_Manual.pdf';
const anonScannerManual = '/script_manual/Anonymous_Network_Scanner_Manual.pdf';
const pentestManual = '/script_manual/Automated_Pentest_Suite_Manual.pdf';
const logParserManual = '/script_manual/Python_Security_Log_Parser_Manual.pdf';
const forensicsManual = '/script_manual/Windows_Memory_Forensics_Manual.pdf';

export interface DetailedSkill {
  name: string;
  description: string;
  competencies: string[];
}

export interface SkillCategoryDetailed {
  category: string;
  items: DetailedSkill[];
}

export const PROJECTS: Project[] = [
  {
    id: 'linux-info-automation',
    title: 'Linux System Info Automation',
    description: 'A "System info for everyone" script that generates an instant, clean report of critical machine data (IPs, MAC, CPU, Memory) for quick troubleshooting.',
    longDescription: 'This project is a friendly, automated guide designed to provide instant visibility into a Linux system. It aggregates scattered system facts into a single, compact report. Key features include extracting Public/Private IPs, identifying the MAC address, analyzing the top 5 CPU-consuming processes, calculating memory usage in a human-readable format, and listing the top 10 largest files in the /home directory. It demonstrates proficiency in combining small Linux commands (awk, sed, sort, uniq, curl) into a practical, repeatable auditing tool.',
    visualMetaphor: 'System Status: Optimized',
    skills: ['Bash Scripting', 'System Administration', 'Resource Monitoring', 'Process Management'],
    icon: 'ServerCog',
    manualPdf: linuxInfoManual,
    codeSnippet: 'Public IP: 185.x.x.x\nPrivate IP: 10.0.x.x\nMemory: Total 3.9G, Available 2.1G\nTop Process: gnome-shell (2.3%)'
  },
  {
    id: 'network-research-anon',
    title: 'Network Research Anonymous Enumeration',
    description: 'An automated Nmap and Whois scanner that strictly enforces OPSEC by validating anonymity and routing traffic through Tor via Nipe.',
    longDescription: 'A security-focused network research tool designed to perform reconnaissance while maintaining strict attacker anonymity. The script operates in two critical security stages: 1) Anonymity Check, verifying the IP is not local (e.g., IL) and activating Nipe (Tor) if exposed, and 2) Root Validation. It automates the installation of dependencies (sshpass, geoip-bin), connects to remote servers via SSH, performs Whois and Nmap scans, and generates a timestamped "Audit Trail" log (scan_log.txt) for reporting.',
    visualMetaphor: 'Anonymity: Active (Tor)',
    skills: ['Network Security', 'Tor/Nipe', 'SSH Automation', 'Audit Logging', 'Bash'],
    icon: 'Ghost',
    manualPdf: anonScannerManual,
    codeSnippet: '[*] Starting remote Nmap scan on target: 185.156.72.7\n[!] You are anonymous. Country: NL\n[SUCCESS] Log saved to scan_log.txt'
  },
  {
    id: 'pt-vulnerability-scanning',
    title: 'PT Vulnerability Scanning',
    description: 'A modular penetration testing framework that automates IP range validation, vulnerability mapping (Nmap to SearchSploit), and credential brute-forcing with Hydra.',
    longDescription: 'This tool automates the tedious phases of a penetration test to map attack surfaces efficiently. It features dynamic IP range validation using Nmap List Scan (-sL) and a "Full Scan" mode that converts Nmap XML outputs directly into SearchSploit queries to find relevant CVEs. Additionally, it includes an intelligent Hydra module that identifies open authentication services (SSH, FTP, RDP) and initiates targeted brute-force attacks using custom or default wordlists (rockyou.txt), exporting all findings to a structured workspace.',
    visualMetaphor: 'Vulnerabilities: Mapped',
    skills: ['Penetration Testing', 'Hydra', 'SearchSploit', 'Nmap NSE', 'Bash'],
    icon: 'Bug',
    manualPdf: pentestManual,
    codeSnippet: '[ALERT] Host 192.168.80.134: Vulnerable to CVE-2024-XXXX\n[+] Hydra: Cracking SSH on port 22...\n[SUCCESS] Password found: user:123456'
  },
  {
    id: 'python-log-parser',
    title: 'Python Security Log Parser',
    description: 'An automated log auditor for /var/log/auth.log that detects Red Flags, tracks user lifecycle events, and monitors privilege escalation attempts.',
    longDescription: 'A lightweight SIEM-like utility built in Python to audit Linux authentication logs. It parses /var/log/auth.log to identify potential security breaches, such as brute-force attempts and unauthorized access. The script uses a "Red Flag" detection logic to spot high-risk keywords (e.g., nmap, nc, /etc/shadow) and tracks user lifecycle events (creation/deletion/password changes). It provides a statistical summary of sudo/su usage and failed login alerts, sanitizing raw log data into a readable security report.',
    visualMetaphor: 'Threats Detected: 3 High',
    skills: ['Python', 'Log Analysis', 'Regex', 'Threat Detection', 'Data Sanitization'],
    icon: 'ShieldAlert',
    manualPdf: logParserManual,
    codeSnippet: '!!! RED FLAG DETECTED !!! Time=[14:04:42] | Suspicious word: \'/etc/shadow\'\nTime=[14:05:15] | sudo:session | USER=kali | COMMAND=/usr/bin/nmap'
  },
  {
    id: 'windows-forensics-analyzer',
    title: 'Windows Memory Forensics',
    description: 'An automated forensic artifact extractor for Windows memory dumps, integrating Volatility for RAM analysis and carvers like Binwalk and Foremost.',
    longDescription: 'A comprehensive forensic automation tool that streamlines the analysis of raw Windows memory dumps. It eliminates manual setup by dynamically configuring tools like Scalpel (via sed) and installing missing dependencies (Volatility, Bulk Extractor). The script performs deep artifact recovery using file carvers (Foremost, Strings, Binwalk) to extract hidden files and network packets (PCAP). It leverages Volatility to identify OS profiles, running processes, and active network connections, wrapping all evidence in a timestamped, zipped case folder.',
    visualMetaphor: 'Evidence: Extracted',
    skills: ['Memory Forensics', 'Volatility', 'File Carving', 'Malware Analysis', 'Bash'],
    icon: 'Microscope',
    manualPdf: forensicsManual,
    codeSnippet: '[*] Identified suspicious parent-child: svchost.exe -> powershell.exe\n[*] Registry hives located: \\SystemRoot\\System32\\Config\\SAM\n[*] PCAP found: packets.pcap (42M)'
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
  },
  {
    id: 'city-guilds-intro',
    title: 'Intro to Cyber Security',
    issuer: 'City & Guilds',
    date: '2026',
    description: 'Accredited qualification covering fundamental cybersecurity concepts, threats, and defensive strategies.',
    url: 'https://www.cityandguilds.com',
    pdf: cityGuildsIntroPdf
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
        description: 'Establishing a strong core in networking protocols, OS fundamentals, and essential security tools.',
        competencies: [
            'Protocols', 
            'Windows Network Tools', 
            'Networking Fundamentals', 
            'OSI', 
            'Kali Linux', 
            'Text Manipulation'
        ]
      },
      { 
        name: 'Automation', 
        description: 'Developing scripts for automation, testing, and operational security tasks using Bash and Python.',
        competencies: [
            'Bash', 
            'Python'
        ]
      }
    ] 
  },
  { 
    category: 'Offensive Security', 
    items: [
      { 
        name: 'Network Research', 
        description: 'Deep diving into network traffic, protocols, and services to identify vulnerabilities.',
        competencies: [
            'Network Services', 
            'Network Protocols Analysis', 
            'Scanning Tools', 
            'Wireshark', 
            'TCP/IP', 
            'Offline/Online Brute-force',
            'Trojans',
            'Firewalls'
        ]
      },
      { 
        name: 'Penetration Testing', 
        description: 'Practical offensive security techniques, vulnerability assessment, and exploitation.',
        competencies: [
            'Enumeration', 
            'Exploitation', 
            'Post Exploitation', 
            'Payloads', 
            'Social Engineering', 
            'WebApp Security'
        ]
      },
      { 
        name: 'Network Security', 
        description: 'Implementing domain security, hardening infrastructures, and analyzing network attacks.',
        competencies: [
            'Network Attacks', 
            'Domain Exploitation', 
            'PowerShell', 
            'Domain Security', 
            'Cryptography'
        ]
      }
    ] 
  },
  { 
    category: 'Defensive Operations', 
    items: [
      { 
        name: 'Windows Forensics', 
        description: 'Investigative techniques for Windows systems, memory analysis, and artifact recovery.',
        competencies: [
            'Carving Tools', 
            'Steganography', 
            'Volatility', 
            'Memory Analysis', 
            'Malware Analysis', 
            'Windows Events'
        ]
      },
      { 
        name: 'SOC Analyst', 
        description: 'Security Operations Center workflows, incident detection, and response strategies.',
        competencies: [
            'SIEM System (ELK, Splunk)', 
            'IPS/IDS', 
            'Log Analysis', 
            'Event Analysis', 
            'Firewalls',
            'Threat Hunting', 
            'Incident Response'
        ]
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
