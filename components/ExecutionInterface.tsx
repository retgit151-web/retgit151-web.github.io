import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Power, Cpu, RotateCcw, Square } from 'lucide-react';

const INTERFACE_PROJECTS = [
  { 
    id: 'linux-info', 
    name: 'Linux Info Automation', 
    lang: 'bash', 
    desc: 'Prints a clean report about your machine, like ip address, MAC address, memory usage, and top 10 largest files.',
    scriptLines: [
      "(kali㉿kali)-[~] ./linux_automation.sh",
      "=========================================",
      "   LINUX INFO AUTOMATION TOOL   ",
      "=========================================",
      "1. Network Information (IP/MAC)",
      "2. System Statistics (CPU/Mem/Services)",
      "3. File Analysis (Largest Files)",
      "4. Run Full Scan (All)",
      "5. Exit",
      "-----------------------------------------",
      "[*] Select an option [1-5]: 4",
      "==> displaying the user information on kali <==",
      "[*] system public ip is: 185.191.22.41",
      "[*] this is the user private ip: 10.0.2.15",
      "[*] this is the system mac address: 08:00:27:8a:4c:12",
      " ",
      "[=>] the percentage of CPU usage for the top 5 processes is:",
      "    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND",
      "   1422 root      20   0  354124  42104  28192 S   2.3   1.4   0:12.41 gnome-shell",
      "    912 root      20   0  241288  12140   8120 S   1.1   0.4   0:05.11 Xorg",
      "   2101 kali      20   0   12410   2140   1120 R   0.7   0.1   0:00.04 top",
      " ",
      "[=>] this is the memory usage statistics:",
      "    Total      Available",
      "    3.9G       2.1G",
      " ",
      "[=>] active system services (Top 20):",
      "+ ssh.service running",
      "+ apache2.service running",
      "+ cron.service running",
      "+ networking.service running",
      "+ rsyslog.service running",
      " ",
      "[=>] top 10 largest files in the /home directory:",
      "    412M /home/kali/downloads/capture.pcap",
      "    124M /home/kali/.cache/mozilla/firefox/cache2",
      "    82M  /home/kali/tools/wordlist.txt",
      "    45M  /home/kali/Documents/report.pdf",
      "    12M  /home/kali/Pictures/screenshot.png",
      "[SUCCESS] Script execution finished."
    ]
  },
  { 
    id: 'anon-scan', 
    name: 'Network Research Anonymous Enumeration', 
    lang: 'bash', 
    desc: "Perform an anonymous Nmap and Whois network scan using Nipe, against an IP target provided by the user.",
    scriptLines: [
      "(kali㉿kali)-[~] sudo ./anon_scan.sh",
      "[+] User is root",
      "    _                                                         ",
      "   / \\   _ __   ___  _   _ _ __ ___   ___  _   _ ___      ",
      "  / _ \\ | '_ \\ / _ \\| | | | '_ ` _ \\ / _ \\| | | / __|     ",
      " / ___ \\| | | | (_) | |_| | | | | | | (_) | |_| \\__ \\     ",
      "/_/   \\_\\_| |_|\\___/ \\__, |_| |_| |_|\\___/ \\__,_|___/     ",
      "                     |___/                                ",
      ":: Automated Enumeration & Anonymity Tool ::",
      " ",
      "--- Checking Dependencies ---",
      "[+] Nipe directory found.",
      "[+] Package nmap is installed.",
      "[+] Package geoip-bin is installed.",
      "[+] Package sshpass is installed.",
      "[+] Package figlet is installed.",
      " ",
      "--- Network Anonymity Check ---",
      "[+] Status: Anonymous | Country: NL",
      " ",
      "--- Remote Target Configuration ---",
      "[*] Enter remote ssh username: kali",
      "[*] Enter remote server password: ****",
      "[*] Enter remote server IP: 185.156.72.7",
      "[*] Target locked: 185.156.72.7",
      " ",
      "--- Remote Server Recon ---",
      "IP Address : 185.156.72.7",
      "Location   : France",
      "Uptime     : 07:16:17 up 42 days, 1:12",
      " ",
      "[*] Starting Whois scan on 185.156.72.7...",
      "[+] Whois data saved to: whois_data.txt",
      "[*] Starting Nmap scan on 185.156.72.7 (Please wait...)",
      "[+] Nmap results saved to: nmap_data.txt",
      " ",
      "✔ Scan Process Complete. Log updated.",
      " ",
      "[!] Display created files? (y/n)",
      "y",
      " ",
      "=== [ whois_data.txt ] ===",
      "Domain Name: 185.156.72.7",
      "Registry Domain ID: 25892341_AD-RS",
      "Registrar: RIPE NCC",
      "... (output truncated) ...",
      " ",
      "=== [ nmap_data.txt ] ===",
      "PORT     STATE SERVICE VERSION",
      "22/tcp   open  ssh     OpenSSH 8.2p1 Ubuntu",
      "80/tcp   open  http    Apache httpd 2.4.41",
      "443/tcp  open  ssl     Apache httpd 2.4.41",
      " ",
      "=== [ scan_log.txt ] ===",
      "[2026-01-31 07:16:17] - Scan started.",
      "[2026-01-31 07:16:18] - Remote used: 185.156.72.7 (France)",
      "[2026-01-31 07:16:18] - Scan finished.",
      "[SUCCESS] Script execution finished."
    ]
  },
  { 
    id: 'memory-forensics', 
    name: 'Windows Forensics Memory File Analyzer', 
    lang: 'bash/volatility', 
    desc: "Automated analyzer for Windows memory dumps using Volatility and multiple carving tools.",
    scriptLines: [
      "(kali㉿kali)-[~] sudo ./WF_Project.sh",
      "==========================================================================",
      "   WINDOWS FORENSICS",
      "   MEMORY ANALYZER",
      "==========================================================================",
      "                     >> Created By Reut Abergel <<                     ",
      "==========================================================================",
      " ",
      "[+] you are root",
      "[*] please write mem file: memory.raw",
      "[*] the memory file to analyze is: memory.raw",
      "[+] file exists",
      "[+] All results will be saved in: forensics_output_2026-02-15_14-30-00",
      " ",
      "--- Checking tools ---",
      "[+] volatility directory already installed.",
      "[+] foremost is installed",
      "[+] strings is installed",
      "[+] binwalk is installed",
      "[+] scalpel is installed",
      "[+] bulk_extractor is installed",
      "[+] exiftool is installed",
      " ",
      "--- Data Carving Phase ---",
      "[!] Running multiple carvers to gather as much information as possible.",
      "[*] -----------Running Foremost---------",
      "[*] -------------Running Strings---------",
      "[*] -----------Running Binwalk---------",
      "[*] ---------Configuring and Running Scalpel----------",
      "[*] ---------Running Bulk Extractor---------------",
      "[*] ---------------Running Exiftool-------------",
      " ",
      "[+] memory.raw can be analyzed using volatility",
      "[*] getting more information with volatility flags",
      "[*] ----------parsing memmory using volatility pslist-----------",
      "[*] ----------parsing memmory using volatility pstree-----------",
      "[*] ----------parsing memmory using volatility filescan-----------",
      "[*] ----------parsing memmory using volatility connections-----------",
      "[*] ----------parsing memmory using volatility connscan-----------",
      "[*] ----------parsing memmory using volatility sockets-----------",
      "[*] ----------parsing memmory using volatility hivelist-----------",
      " ",
      "--- String Analysis ---",
      "[*] Filtering for: exe",
      "[*] Filtering for: password",
      "[*] Filtering for: username",
      "[*] Filtering for: http",
      "[*] Filtering for: dll",
      " ",
      "--- Network Evidence ---",
      "[+] PCAP found: ./packets.pcap (Size: 42M)",
      " ",
      "--- Analysis Statistics ---",
      "[*] Total Time: 124 seconds",
      "[*] Total Files Found: 852",
      "[+] Report saved to: forensics_output_2026-02-15_14-30-00/main_report.txt",
      " ",
      "[+] Zip successful. Original folder removed: forensics_results_2026-02-15_14-30-00.zip"
    ]
  },
  { 
    id: 'log-parser', 
    name: 'Python Log Parser', 
    lang: 'python', 
    desc: "Automated Security Log Parser for Linux authentication logs. It specifically targets the /var/log/auth.log file to identify potential security breaches.",
    scriptLines: [
      "(kali㉿kali)-[~] python3 auth_parser.py",
      "--- AUTH LOG MONITORING INTERFACE ---",
      "[*] Feb 15 14:02:11 | sudo:session | USER=kali | CMD=/usr/bin/apt update",
      "[!] Feb 15 14:02:11 | SUDO SESSION: : session opened for user root by (uid=0)",
      "[-] Feb 15 14:03:05 | AUTH FAILURE: authentication failure; logname=kali",
      "!! SECURITY ALERT !! Time=[Feb 15 14:04:42] | Pattern: 'etc/shadow'",
      "[*] Feb 15 14:04:42 | sudo:session | USER=kali | CMD=/usr/bin/cat /etc/shadow",
      "!! SECURITY ALERT !! Time=[Feb 15 14:05:15] | Pattern: 'nmap'",
      "[*] Feb 15 14:05:15 | sudo:session | USER=kali | CMD=/usr/bin/nmap -sV 192.168.1.1",
      "[+] Feb 15 14:08:22 | ACCOUNT CREATED: auditing_svc",
      "[*] Feb 15 14:08:55 | CREDENTIAL CHANGE: changed for auditing_svc",
      "[!] Feb 15 14:10:04 | ACCOUNT DELETED: auditing_svc",
      "[!] Feb 15 14:12:48 | SU SESSION: : session opened for user root",
      " ",
      "==================================================",
      "             PARSING SUMMARY",
      "==================================================",
      "Failed Auth Alerts: 1",
      "Total Sudo Sessions: 3",
      "Total Su Sessions:   1",
      "==================================================",
      "[SUCCESS] Script execution finished."
    ]
  },
  { 
    id: 'pt-vuln', 
    name: 'pt vulnerability scanning', 
    lang: 'bash/nmap', 
    desc: "Designed to take an IP range, perform a full or basic scan, find vulnerabilities, and perform credential brute-forcing.",
    scriptLines: [
      "(kali㉿kali)-[~] ./pt_project.sh",
      "[+] SYSTEM ACCESS: GRANTED",
      "[*] INITIALIZING PROJECT PROTOCOL...",
      " ",
      "==========================================================================",
      "   PT  VULNERABILITY",
      "   SCANNING",
      "==========================================================================",
      "                     >> Created By Reut Abergel <<                     ",
      "==========================================================================",
      " ",
      "--- Configuration ---",
      "[*] please specify a directory to save the output in: scan_results",
      "[+] directory is scan_results",
      "[*] please write a valid ip range with cider to scan: 192.168.1.0/24",
      "[+] ip is 192.168.1.0/24",
      "[*] checking if ip is valid, starting to scan...",
      "[+] IP input is valid!",
      " ",
      "--- Network Discovery ---",
      "[*] scanning ip 192.168.1.10",
      "[+] found active host: 192.168.1.10, saving...",
      "[*] scanning ip 192.168.1.15",
      "[+] found active host: 192.168.1.15, saving...",
      "[+] Scan complete. Results saved in scan_results/checkip_results/",
      " ",
      "--- Vulnerability Scan Mode ---",
      "Full: include Nmap Scripting Engine OR Basic: scans the network for TCP and UDP",
      "[!] ---please choose method to scan([B]asic or [F]ull)---: F",
      "[+] you chose F for full scan with nmap scripts",
      "[*] range is 192.168.1.0/24",
      "[*] starting Full scan with nse (nmap script engine) this may take a while...:",
      "[*] you can press space for estimated time",
      "[*] enter a new dirctory to save the data: full_scan",
      "[*] Scanning IP: 192.168.1.10 (Please wait...)",
      "[*] Scanning IP: 192.168.1.15 (Please wait...)",
      "--------------------------------------------------------",
      "           SEARCHSPLOIT FINDINGS                        ",
      "--------------------------------------------------------",
      "[*] ---Results for: 192.168.1.10---",
      "Exploit Title                                 |  Path",
      "vsftpd 2.3.4 - Backdoor Command Execution     | unix/remote/17491.rb",
      "-----------------------------------------------------------",
      "-----------------------------------------------------------",
      "!!!!!!!!!!!!!!!!! IMPORTANT FINDINGS ONLY !!!!!!!!!!!!!!!!!",
      "-----------------------------------------------------------",
      "-----------------------------------------------------------",
      "Nmap scan report for 192.168.1.10",
      "PORT     STATE SERVICE     VERSION",
      "21/tcp   open  ftp         vsftpd 2.3.4",
      "| vuln-exploit: vsftpd 2.3.4 backdoor",
      "80/tcp   open  http        Apache httpd 2.4.41",
      "===========================================================",
      "[+] Full scan complete! details saved in scan_results/full_scan",
      " ",
      "--- Brute Force Attack ---",
      "[*] starting weak passwords check with hydra ",
      "[*] enter a user list or skip and use Default user list: ",
      "[*] enter path to a pass list or press enter and use the default (rockyou.txt): ",
      "[+] pass file found using /usr/share/wordlists/rockyou.txt",
      "[*] checking for open ports on 192.168.1.0/24:",
      "[!] Found open port 22 on 192.168.1.15. Starting Hydra...",
      "[SUCCESS] Password found: user:123456 (Host: 192.168.1.15)",
      "[+] hydra input saved in scan_results/full_scan",
      " ",
      "-----------------------------------------------------------",
      "                   INSPECT RESULTS                         ",
      "-----------------------------------------------------------",
      "[*] Available Scan Reports:",
      "192.168.1.10.txt",
      "192.168.1.15.txt",
      "hydra_192.168.1.15_ssh.txt",
      "[*] Enter the IP you want to inspect (or 'q' to quit): q",
      "[*] Exiting inspection.",
      " ",
      "--- Archiving ---",
      "[!] Do you want to zip the results and delete the original folder? (y/n): y",
      "[+] Zip successful saved as scan_info_2026-02-15.zip. Original folder removed.",
      " ",
      "      .___________________________________________________.",
      "      |                                                   |",
      "      |          Thank you for using this tool!           |",
      "      |___________________________________________________|"
    ]
  }
];

// Helper to determine delay for processing
const getHeavyTaskDuration = (line: string): number => {
  if (line.includes("Starting Nmap scan")) return 12000;
  if (line.includes("Full scan with nse")) return 20000;
  if (line.includes("Starting Hydra")) return 15000;
  if (line.includes("Running Foremost") || 
      line.includes("Running Strings") || 
      line.includes("Running Binwalk") || 
      line.includes("Running Scalpel") || 
      line.includes("Running Bulk Extractor") ||
      line.includes("parsing memmory using volatility")) return 10000;
  return 0;
};

interface ProgressBarProps {
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newPercent = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(newPercent);
      if (newPercent >= 100) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [duration]);

  const filledChars = Math.floor(percent / 5); // 20 chars total
  const emptyChars = 20 - filledChars;
  const bar = `[${'#'.repeat(filledChars)}${'.'.repeat(emptyChars)}]`;

  return (
    <div className="text-emerald-500 font-bold animate-pulse mt-1">
      {bar} {percent}%
    </div>
  );
};

interface ExecutionInterfaceProps {
  onSelect?: () => void;
}

const ExecutionInterface: React.FC<ExecutionInterfaceProps> = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState(INTERFACE_PROJECTS[0].id);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [activeTypingLine, setActiveTypingLine] = useState<string | null>(null);
  const [progressDuration, setProgressDuration] = useState<number | null>(null);
  
  const [isInitializing, setIsInitializing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  
  const isCancelledRef = useRef(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const selectedProject = INTERFACE_PROJECTS.find(p => p.id === selectedId) || INTERFACE_PROJECTS[0];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [terminalLines, activeTypingLine, progressDuration]);

  // interruptible delay
  const smartDelay = async (ms: number) => {
    const steps = Math.ceil(ms / 100);
    for (let i = 0; i < steps; i++) {
        if (isCancelledRef.current) return;
        await new Promise(r => setTimeout(r, 100));
    }
  };

  const typeText = async (fullLine: string) => {
    if (isCancelledRef.current) return;

    // Heuristic to split prompt and input
    let prompt = "";
    let toType = "";

    if (fullLine.startsWith("(kali㉿kali)")) {
      const splitIdx = fullLine.indexOf("] ./") + 2; 
      if (splitIdx > 2) {
         prompt = fullLine.substring(0, splitIdx);
         toType = fullLine.substring(splitIdx);
      } else {
         // Fallback
         prompt = "(kali㉿kali)-[~] ";
         toType = fullLine.replace(prompt, "");
      }
    } else if (fullLine.includes(": ")) {
      // Like "Enter remote ssh username: kali"
      // or "Select an option [1-5]: 4"
      const lastColon = fullLine.lastIndexOf(": ");
      prompt = fullLine.substring(0, lastColon + 2);
      toType = fullLine.substring(lastColon + 2);
    } else if (fullLine.endsWith("? (y/n)") || fullLine.endsWith("? y") || fullLine === "y") {
        // Handle "Display created files? (y/n)" next line "y"
        prompt = "> ";
        toType = fullLine;
    } else {
        // Just print it fast if we can't detect split
        setTerminalLines(prev => [...prev, fullLine]);
        return;
    }

    // Determine typing speed (human like)
    setActiveTypingLine(prompt);
    await smartDelay(300); // Wait before typing
    if (isCancelledRef.current) return;

    for (let i = 0; i < toType.length; i++) {
      if (isCancelledRef.current) return;
      setActiveTypingLine(prompt + toType.substring(0, i + 1));
      await smartDelay(50 + Math.random() * 100); // Random typing delay
    }
    
    await smartDelay(400); // Pause after typing
    if (isCancelledRef.current) return;
    
    setTerminalLines(prev => [...prev, prompt + toType]);
    setActiveTypingLine(null);
  };

  const handleExecute = async () => {
    if (isInitializing) return; // Wait for init

    if (isRunning) {
        // Stop functionality
        isCancelledRef.current = true;
        return;
    }

    // Start functionality
    isCancelledRef.current = false;

    if (!isReady) {
      setIsInitializing(true);
      setTerminalLines([]);
      
      const bootLines = [
        "Initializing system environment...",
        "Allocating virtual memory...",
        "Loading kernel modules...",
        "[OK] System integrity verified."
      ];

      for (const line of bootLines) {
        if (isCancelledRef.current) break;
        setTerminalLines(prev => [...prev, line]);
        await new Promise(r => setTimeout(r, 400));
      }
      
      setIsInitializing(false);
      
      if (isCancelledRef.current) {
         setTerminalLines(prev => [...prev, "^C [Init Aborted]"]);
         return; 
      }
      
      setIsReady(true);
      await new Promise(r => setTimeout(r, 500));
    }

    setIsRunning(true);
    setTerminalLines([]); // Clear previous run
    
    const lines = selectedProject.scriptLines;

    for (const line of lines) {
      if (isCancelledRef.current) {
          setTerminalLines(prev => [...prev, "^C", "[!] Script execution stopped by user."]);
          break;
      }

      const heavyDuration = getHeavyTaskDuration(line);
      
      // Check if it's a user command/input
      const isUserCmd = line.startsWith("(kali㉿kali)") || 
                        (line.includes(": ") && line.length < 50 && !line.startsWith("Port") && !line.startsWith("IP Address")) || 
                        line === "y" || 
                        line === "F" || 
                        line === "q";

      if (isUserCmd) {
        await typeText(line);
      } else {
        // Output line
        setTerminalLines(prev => [...prev, line]);
        
        if (heavyDuration > 0) {
          setProgressDuration(heavyDuration);
          await smartDelay(heavyDuration);
          setProgressDuration(null);
        } else {
          // Normal output scrolling
          await smartDelay(20 + Math.random() * 30);
        }
      }
    }
    
    setIsRunning(false);
    setActiveTypingLine(null);
    setProgressDuration(null);
  };

  const handleReset = () => {
    isCancelledRef.current = true;
    setIsRunning(false);
    setIsInitializing(false);
    setTerminalLines([]);
    setIsReady(false);
    setActiveTypingLine(null);
    setProgressDuration(null);
  };

  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 h-auto md:h-[600px]">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-0 h-full">
        {/* Navigation Sidebar (Desktop) / Tab Bar (Mobile) */}
        <div className="w-full md:col-span-1 border-b md:border-b-0 md:border-r border-white/5 bg-zinc-900/20 flex flex-col md:h-auto shrink-0">
          <div className="hidden md:block p-4 border-b border-white/5 bg-zinc-900/40 shrink-0">
            <span className="text-[10px] font-sans font-black text-zinc-500 uppercase tracking-widest">Select Script</span>
          </div>
          
          <div className="p-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto scrollbar-hide">
            {INTERFACE_PROJECTS.map((proj) => (
              <button
                key={proj.id}
                disabled={isRunning || isInitializing}
                onClick={() => {
                  setSelectedId(proj.id);
                  handleReset();
                  if (onSelect) onSelect();
                }}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-full md:rounded-lg transition-all text-left shrink-0 w-auto md:w-full border whitespace-nowrap
                  ${selectedId === proj.id 
                    ? 'bg-brand-accent text-zinc-950 border-brand-accent shadow-[0_0_15px_rgba(56,189,248,0.3)]' 
                    : 'bg-zinc-900/40 border-white/5 text-zinc-400 hover:bg-zinc-800 hover:border-white/10'
                  }
                  disabled:opacity-50
                `}
              >
                <span className={`text-[10px] font-black uppercase tracking-tight`}>
                  {proj.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Main Terminal Panel */}
        <div className="w-full md:col-span-3 flex flex-col bg-zinc-950 overflow-hidden relative h-[450px] md:h-auto">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/20 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                SESSION: <span className="text-zinc-300">{selectedProject.name}</span>
              </span>
            </div>
            <button 
              onClick={handleReset}
              className="p-1 text-zinc-600 hover:text-brand-accent transition-all hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
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
            {terminalLines.length === 0 && !activeTypingLine && !isInitializing && (
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mb-1 whitespace-pre-wrap ${
                  line.startsWith('[SUCCESS]') || line.includes("Zip successful") || line.includes("Scan complete") || line.startsWith('[+]') || line.includes('✔') || line.includes("ACCOUNT CREATED") ? 'text-emerald-500' :
                  line.startsWith(' >') || line.includes("PENETRATION TESTING PROJECT") || line.includes("By Reut Abergel") || line.includes("Thank you for using this tool") || line.startsWith('[*]') || line.includes('::') || line.startsWith('===') || line.includes("AUTH LOG") ? 'text-blue-400 font-bold' :
                  line.startsWith('[READY]') || line.includes("SYSTEM ACCESS: GRANTED") || line.includes("INITIALIZING PROJECT PROTOCOL") || line.includes("System integrity verified") ? 'text-green-500' :
                  line.startsWith('(kali㉿kali)') || line.startsWith('$') ? 'text-brand-accent font-bold' :
                  line.startsWith('[ALERT]') || line.startsWith('[!]') || line.startsWith('[!!!]') || line.includes('!!! RED FLAG DETECTED !!!') || line.includes('!!!!!ALERT!!!!!') || line.includes("IMPORTANT FINDINGS ONLY") || line.includes("SU SESSION") || line.includes("SUDO SESSION") ? 'text-amber-500' :
                  line.startsWith('[-]') || line.includes("!! SECURITY ALERT !!") || line.includes("AUTH FAILURE") || line.includes("ACCOUNT DELETED") || line.startsWith("Failed Auth Alerts") ? 'text-rose-500 font-bold' :
                  line.startsWith('[=>]') || line.startsWith('==>') || line.startsWith('[(:]') || line.includes('---auth log parsing resultes---') ? 'text-zinc-100 drop-shadow-[0_0_5px_rgba(56,189,248,0.1)]' :
                  line.includes("PARSING SUMMARY") ? 'text-white font-bold' :
                  line.includes("000000") ? 'text-green-500/50' :
                  'text-zinc-400'
                }`}
              >
                {line}
              </motion.div>
            ))}

            {activeTypingLine && (
               <div className="text-brand-accent font-bold mb-1">
                 {activeTypingLine}
                 <span className="inline-block w-2 h-4 bg-brand-accent ml-1 align-middle animate-pulse" />
               </div>
            )}

            {progressDuration && (
               <ProgressBar duration={progressDuration} />
            )}
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 border-t border-white/5 bg-zinc-900/10 shrink-0">
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleExecute}
                disabled={isInitializing}
                className={`
                  flex items-center gap-3 px-6 py-2.5 rounded-lg text-[10px] font-sans font-black uppercase tracking-widest transition-all w-full sm:w-auto justify-center group disabled:opacity-50
                  ${!isReady 
                    ? 'bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                    : 'bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                  }
                `}
              >
                {!isReady ? (
                    <>
                      <Power size={14} className={isInitializing ? "animate-spin text-emerald-500" : "text-zinc-500 group-hover:text-emerald-500"} />
                      <span>{isInitializing ? "Initializing..." : "Initialize & Run"}</span>
                    </>
                ) : (
                    <>
                      {isRunning ? (
                          <Square size={14} className="text-brand-accent fill-brand-accent animate-pulse" />
                      ) : (
                          <Play size={14} className={`${isRunning ? "animate-pulse" : ""} text-brand-accent`} />
                      )}
                      <span className="text-brand-accent">{isRunning ? "Stop Process" : "Re-Execute Script"}</span>
                    </>
                )}
              </button>
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-6 py-2 border-t border-white/5 bg-zinc-900/40 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-4">
               <span className={`text-[9px] font-mono uppercase tracking-tighter ${isReady ? 'text-emerald-500' : 'text-amber-500'}`}>
                 [SYSTEM: {isInitializing ? 'INITIALIZING' : isRunning ? 'BUSY' : isReady ? 'READY' : 'WAITING'}]
               </span>
            </div>
            <Cpu size={12} className={isRunning ? "text-brand-accent animate-spin-slow" : "text-zinc-700"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionInterface;