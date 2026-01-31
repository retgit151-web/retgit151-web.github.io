
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Power, Cpu, ChevronRight, Activity, RotateCcw } from 'lucide-react';

const INTERFACE_PROJECTS = [
  { 
    id: 'linux-info', 
    name: 'Linux Info Automation', 
    lang: 'bash', 
    desc: 'Prints a clean report about your machine, like ip address, MAC address, memory usage, and top 10 largest files.',
    scriptLines: [
      "==> displaying the user information on kali <==",
      "[=>] system public ip is: 185.191.22.41",
      "[=>] this is the user private ip: 10.0.2.15",
      "[=>] this is the system mac address: 08:00:27:8a:4c:12",
      "[=>] the percentage of CPU usage for the top 5 processes is:",
      "    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND",
      "   1422 root      20   0  354124  42104  28192 S   2.3   1.4   0:12.41 gnome-shell",
      "    912 root      20   0  241288  12140   8120 S   1.1   0.4   0:05.11 Xorg",
      "   2101 kali      20   0   12410   2140   1120 R   0.7   0.1   0:00.04 top",
      "[=>] this is the memory usage statistics:",
      "    Total     Available",
      "    3.9G      2.1G",
      "[=>] ** these are the top 10 largest files in the /home directory",
      "    412M /home/kali/downloads/capture.pcap",
      "    124M /home/kali/.cache/mozilla/firefox/cache2",
      "    82M  /home/kali/tools/wordlist.txt",
      "    ... process complete."
    ]
  },
  { 
    id: 'anon-scan', 
    name: 'Network research anonymous scanning', 
    lang: 'bash', 
    desc: "Perform an anonymous Nmap and Whois network scan using Nipe, against an IP target provided by the user.",
    scriptLines: [
      "(kali㉿kali)-[/var/run/vmblock-fuse/blockdir/MJV816]",
      "$ sudo ./Network\\ research\\ anonymous\\ scanning.sh",
      "[(:] you are root",
      " _ _ _     _                          _                   ",
      "| | | |___| |___ ___ _____ ___    | |_ ___    _____ _ _   ",
      "| | | | -_| |  _| . |     | -_|   |  _| . |  |     | | |  ",
      "|_____|___|_|___|___|_|_|_|___|   |_| |___|  |_|_|_|_  |  ",
      "                                                   |___|  ",
      " ___ ___ ___ _ ___ _   ",
      "|_ -|  _|  _|_| . | |_ ",
      "|___|___|_| |_|  _| _| ",
      "              |_| |_|  ",
      "welcome to my script",
      "--- Checking tools ---",
      "[(:] Nipe directory already exists.it is installed.",
      "[(:] nmap is installed",
      "[(:] geoip-bin is installed",
      "[(:] sshpass is installed",
      "[(:] figlet is installed",
      "you are anonymous Country: FR",
      "you are all set Starting Remote Scan process...",
      "[*] enter remote ssh username: kali",
      "[*] Enter the remote server password: kali",
      "[*] Enter the remote server public IP address: 185.156.72.7",
      "Target ip/domain is : 185.156.72.7",
      "Connection established to 185.156.72.7 port 22...",
      "--- Remote Server Details ---",
      "IP: 185.156.72.7",
      "Country: France",
      "Uptime: 07:16:17 up 42 days, 1:12",
      " ",
      "[*] starting remote Whois scan on target: 185.156.72.7",
      "[*] Whois results saved to local file: whois_data.txt",
      "[*] starting remote Nmap scan on target: 185.156.72.7 (This may take some time...)",
      "[*] Nmap results saved to local file: nmap_data.txt",
      "Scan Complete See scan_log.txt for info",
      "[!] would you like to Display the files you have created ? (y/n)",
      "y",
      "[*] Displaying ALL files...",
      "---[ whois_data.txt ]---",
      "Domain Name: 185.156.72.7",
      "Registry Domain ID: 25892341_AD-RS",
      "Registrar: RIPE NCC",
      "Updated Date: 2026-01-10T00:00:00Z",
      "---[ nmap_data.txt ]---",
      "Nmap scan report for 185.156.72.7",
      "PORT     STATE SERVICE VERSION",
      "22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu 4ubuntu0.5",
      "80/tcp   open  http    Apache httpd 2.4.41 ((Ubuntu))",
      "443/tcp  open  ssl/http Apache httpd 2.4.41 ((Ubuntu))",
      "---[ scan_log.txt ]---",
      "[2026-01-31 07:16:17] - Scan started .",
      "[2026-01-31 07:16:17] - Remote server used: (185.156.72.7)",
      "[2026-01-31 07:16:17] - Target address: 185.156.72.7",
      "[2026-01-31 07:16:17] - remote uptime is: 07:16:17 up 42 days, 1:12",
      "[2026-01-31 07:16:17] - Whois scan finished. Output saved to whois_data.txt.",
      "[2026-01-31 07:16:18] - Nmap scan performed. Output saved to nmap_data.txt.",
      "[2026-01-31 07:16:18] - Scan finished (: .",
      "[SUCCESS] Script execution finished."
    ]
  },
  { 
    id: 'memory-forensics', 
    name: 'Windows Forensics Memory File Analyzer', 
    lang: 'python/volatility', 
    desc: "Automated analyzer for Windows memory dumps. It takes a raw file provided by the user and extracts hidden evidence automatically.",
    scriptLines: [
      "(kali㉿kali)-[~] python3 vol_analyzer.py --file memory.raw",
      "[!] Analyzing memory image: memory.raw",
      "[+] System Profile: Windows 10 x64 (Build 19041)",
      "[+] Scanning for hidden processes (psxview)...",
      "[ALERT] PID 4210 (lsass.exe) - Memory mismatch detected. Potential DLL Injection.",
      "[+] Checking for established network connections...",
      "[!] Suspicious connection to 45.12.8.2 detected from 'svc-host.exe'",
      "[+] Dumping kernel modules for signature analysis...",
      "[SUCCESS] 4 unique malicious artifacts recovered. Report generated."
    ]
  },
  { 
    id: 'log-parser', 
    name: 'Python log_parser', 
    lang: 'python', 
    desc: "Automated Security Log Parser for Linux authentication logs. It specifically targets the /var/log/auth.log file to identify potential security breaches.",
    scriptLines: [
      "(kali㉿kali)-[~] python3 auth_parser.py",
      "[!] Initializing LogSentinel parser...",
      "[+] Accessing /var/log/auth.log system stream...",
      "[+] Scanning for pattern matches: 'Failed password', 'Invalid user'",
      "[ALERT] 42 failed login attempts detected from IP: 185.12.3.4",
      "[!] User 'admin' targeted 12 times in 60 seconds.",
      "[+] Geographical traceback: Moscow, RU",
      "[SUCCESS] Threat identified: Brute-Force Attack.",
      "[+] IP address pushed to local iptables blocklist."
    ]
  },
  { 
    id: 'pt-vuln', 
    name: 'pt vulnerability scanning', 
    lang: 'bash/nmap', 
    desc: "Designed to take an IP range, perform a full or basic scan, find vulnerabilities, and perform credential brute-forcing.",
    scriptLines: [
      "(kali㉿kali)-[~] ./vuln_scan.sh 192.168.1.0/24",
      "[!] Target network range: 192.168.1.0/24",
      "[+] Performing host discovery (ARP scan)...",
      "[+] 12 active nodes discovered.",
      "[+] Launching vulnerability assessment (NSE scripts)...",
      "[ALERT] Host 192.168.1.104: CVE-2024-XXXX (Critical RCE) - Vulnerable.",
      "[!] Initiating credential audit (SSH/SMB)...",
      "[SUCCESS] Credential cracked on 192.168.1.15: 'user:password123'",
      "[+] Analysis complete. High-risk mitigation required on 2 nodes."
    ]
  }
];

const ExecutionInterface: React.FC = () => {
  const [selectedId, setSelectedId] = useState(INTERFACE_PROJECTS[0].id);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedProject = INTERFACE_PROJECTS.find(p => p.id === selectedId) || INTERFACE_PROJECTS[0];

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [terminalLines]);

  const handleInitialize = () => {
    setIsInitializing(true);
    setTerminalLines(prev => [...prev, `# Initializing system environment for ${selectedProject.name}...`]);
    
    setTimeout(() => {
      setIsInitializing(false);
      setIsReady(true);
      setTerminalLines(prev => [...prev, `[SUCCESS] Virtualization layer established.`, `[READY] System environment stable.`]);
    }, 1500);
  };

  const handleRun = async () => {
    if (!isReady || isRunning) return;
    
    setIsRunning(true);
    const linesToProcess = selectedProject.scriptLines;

    for (const line of linesToProcess) {
      let delay = 100 + Math.random() * 200;
      
      // Add extra pause for significant actions to feel more real
      if (line.includes("Whois results") || line.includes("Nmap results") || line.includes("Displaying ALL files") || line.includes(" established to ")) {
        delay = 1200;
      }
      if (line.includes("Starting installation") || line.includes("Scanning for hidden") || line.includes("Initiating credential audit")) {
        delay = 2000;
      }
      if (line.startsWith("(kali㉿kali)") || line.startsWith("$")) {
        delay = 50; // Quick prompt display
      }
      
      await new Promise(resolve => setTimeout(resolve, delay));
      setTerminalLines(prev => [...prev, line]);
    }
    
    setIsRunning(false);
  };

  const handleReset = () => {
    setTerminalLines([]);
    setIsReady(false);
    setIsRunning(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 bg-zinc-950/40 rounded-2xl border border-white/5 overflow-hidden h-[500px]">
      {/* Left Sidebar Navigation */}
      <div className="md:col-span-1 border-r border-white/5 bg-zinc-900/20 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-white/5 bg-zinc-900/40 shrink-0">
          <span className="text-[10px] font-sans font-black text-zinc-500 uppercase tracking-widest">Navigation</span>
        </div>
        <div className="p-2 flex flex-col gap-1 overflow-y-auto flex-1 scrollbar-hide">
          {INTERFACE_PROJECTS.map((proj) => (
            <button
              key={proj.id}
              disabled={isRunning || isInitializing}
              onClick={() => {
                setSelectedId(proj.id);
                handleReset();
              }}
              className={`flex flex-col items-start p-3 rounded-xl transition-all text-left shrink-0 ${
                selectedId === proj.id 
                  ? 'bg-brand-accent/10 border border-brand-accent/20' 
                  : 'hover:bg-white/5 border border-transparent disabled:opacity-50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[10px] font-bold uppercase tracking-tight ${selectedId === proj.id ? 'text-brand-accent' : 'text-zinc-400'}`}>
                  {proj.name}
                </span>
                {selectedId === proj.id && <ChevronRight size={10} className="text-brand-accent" />}
              </div>
              <span className="text-[8px] text-zinc-600 mt-1 uppercase font-mono">{proj.lang}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Main Terminal Panel */}
      <div className="md:col-span-3 flex flex-col bg-zinc-950 overflow-hidden relative">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/20 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              EXECUTION: <span className="text-zinc-300">{selectedProject.name}</span>
            </span>
          </div>
          <button 
            onClick={handleReset}
            className="p-1 text-zinc-600 hover:text-zinc-400 transition-colors"
            title="Clear Terminal"
          >
            <RotateCcw size={14} />
          </button>
        </div>

        {/* Terminal Content Area */}
        <div 
          ref={scrollRef}
          className="flex-1 p-6 font-mono text-xs overflow-y-auto scrollbar-hide bg-zinc-950 scroll-smooth"
        >
          <span className="text-brand-accent/40 block mb-2 opacity-50 font-mono"># Execution environment only</span>
          
          {terminalLines.length === 0 && (
            <div className="mt-4 space-y-4">
              <p className="text-zinc-600 italic">
                Waiting for project initialization...
              </p>
              <div className="text-[10px] text-zinc-700 border-l border-zinc-800 pl-4 py-2">
                 PROJECT: {selectedProject.name}<br/>
                 DESCRIPTION: {selectedProject.desc}
              </div>
            </div>
          )}

          {terminalLines.map((line, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              className={`mb-1 whitespace-pre-wrap ${
                line.startsWith('[SUCCESS]') ? 'text-emerald-500' :
                line.startsWith('[READY]') ? 'text-brand-tech' :
                line.startsWith('(kali㉿kali)') || line.startsWith('$') ? 'text-brand-accent font-bold' :
                line.startsWith('[ALERT]') || line.startsWith('[!]') || line.startsWith('[!!!]') ? 'text-amber-500' :
                line.startsWith('[=>]') || line.startsWith('==>') || line.startsWith('[(:]') ? 'text-zinc-100 drop-shadow-[0_0_5px_rgba(56,189,248,0.1)]' :
                'text-zinc-400'
              }`}
            >
              {line}
            </motion.div>
          ))}
          {isRunning && (
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-brand-accent ml-1 align-middle"
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 border-t border-white/5 bg-zinc-900/10 shrink-0">
          <div className="flex flex-wrap gap-4">
            {!isReady ? (
              <button 
                onClick={handleInitialize}
                disabled={isInitializing}
                className="flex items-center gap-3 px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-lg text-[10px] font-sans font-black uppercase tracking-widest transition-all hover:border-brand-accent/30 group disabled:opacity-50"
              >
                <Power size={14} className={isInitializing ? "animate-spin text-brand-accent" : "text-zinc-500 group-hover:text-brand-accent"} />
                <span>{isInitializing ? "Establishing..." : "Initialize System"}</span>
              </button>
            ) : (
              <button 
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-3 px-8 py-2.5 bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 rounded-lg text-[10px] font-sans font-black uppercase tracking-widest transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] group disabled:opacity-50"
              >
                <Play size={14} className={`${isRunning ? "animate-pulse" : ""} text-brand-accent`} />
                <span className="text-brand-accent">{isRunning ? "Running Script..." : "Run Script"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Status Bar */}
        <div className="px-6 py-2 border-t border-white/5 bg-zinc-900/40 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
             <span className={`text-[9px] font-mono uppercase tracking-tighter ${isReady ? 'text-emerald-500' : 'text-amber-500'}`}>
               [SYSTEM: {isInitializing ? 'INITIALIZING' : isRunning ? 'BUSY' : isReady ? 'READY' : 'WAITING'}]
             </span>
             <div className="h-3 w-[1px] bg-zinc-800" />
             <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-tighter">NODE: RA-KALI-SOC-01</span>
          </div>
          <Cpu size={12} className={isRunning ? "text-brand-accent animate-spin-slow" : "text-zinc-700"} />
        </div>
      </div>
    </div>
  );
};

export default ExecutionInterface;
