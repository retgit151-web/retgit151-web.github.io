import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Power, Cpu, ChevronRight, Activity, RotateCcw, Minus, Square, X } from 'lucide-react';

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
    name: 'Network Research Anonymous Enumeration', 
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
    lang: 'bash/volatility', 
    desc: "Automated analyzer for Windows memory dumps using Volatility and multiple carving tools.",
    scriptLines: [
      "(kali㉿kali)-[~] sudo ./WF_Project.sh",
      " __      __   _                            _              ",
      " \\ \\    / /  | |                          | |             ",
      "  \\ \\  / /__ | | ___ ___  _ __ ___   ___  | |_ ___        ",
      "   \\ \\/ / _ \\| |/ __/ _ \\| '_ ` _ \\ / _ \\ | __/ _ \\       ",
      "    \\  / (_) | | (_| (_) | | | | | |  __/ | || (_) |      ",
      "     \\/ \\___/|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/       ",
      "                                                          ",
      "                      _      __   ____               _    ",
      "                     | |    / _| |  _ \\             (_)   ",
      " __      _____  _ __ | | __| |_  | |_) |_ __ ___     _    ",
      " \\ \\ /\\ / / _ \\| '__|| |/ _`  _| |  ___/ '__/ _ \\   | |   ",
      "  \\ V  V / (_) | |   | | (_| |   | | | (_) |  | |   ",
      "   \\_/\\_/ \\___/|_|   |_|\\__,_|   |_|   |_|  \\___/   | |   ",
      "                                                   _/ |   ",
      "                                                  |__/    ",
      "welcome to WF proj",
      "[(:]you are root",
      "[(:]please write mem file: memory.raw",
      "[!]the memory file to analyze is: memory.raw",
      "[(:]file exists",
      "All results will be saved in: forensics_output_2026-02-15_14-30-00",
      "--- Checking tools ---",
      "[(:] volatility directory already installed.",
      "[(:] foremost is installed",
      "[(:] strings is installed",
      "[(:] binwalk is installed",
      "[(:] scalpel is installed",
      "[(:] bulk_extractor is installed",
      "[(:] exiftool is installed",
      "[!!]Running multiple carvers to gather as much information as possible.",
      "-----------Running Foremost---------",
      "[*] Extracted 42 images, 12 documents to output directory.",
      "-------------Running Strings---------",
      "[*] Generated 1.2GB strings report.",
      "-----------Running Binwalk---------",
      "[*] Identified nested ZIP archives and PE headers.",
      "---------Configuring and Running Scalpel----------",
      "[*] Carving for jpg, png, pdf, doc, zip, rar...",
      "---------Running Bulk Extractor---------------",
      "[*] Extracting emails, credit card numbers, and PII.",
      "---------------Running Exiftool-------------",
      "[*] Metadata report generated.",
      "[(:] memory.raw can be analyzed using volatility",
      "[*] Running volatility imageinfo...",
      "Suggested Profile(s) : Win7SP1x64, Win7SP0x64, Win2008R2SP0x64",
      "[!] Using profile Win7SP1x64 for analysis.",
      "[!] getting more information with volatility flags",
      "[*]----------parsing memory using volatility pslist-----------",
      "[*] Found 32 running processes (svchost.exe x12, explorer.exe, cmd.exe).",
      "[*]----------parsing memory using volatility pstree-----------",
      "[*] Identified suspicious parent-child relationship: svchost.exe -> powershell.exe",
      "[*]----------parsing memory using volatility filescan-----------",
      "[*] Scanned 4501 objects. Identified access to SAM and SYSTEM registry hives.",
      "[*]----------parsing memory using volatility connections-----------",
      "[*] Active connection to 185.156.72.7:4444 (ESTABLISHED)",
      "[*]----------parsing memory using volatility sockets-----------",
      "[*] Internal listening port 1337 detected.",
      "[*]----------parsing memory using volatility hivelist-----------",
      "[*] Registry hives located: \\SystemRoot\\System32\\Config\\SAM",
      "[*] Scanning for strings: exe password username http dll...",
      "[*] Found potential credential artifacts in strings output.",
      "PCAP found: ./packets.pcap (Size: 42M)",
      "--- Analysis Statistics ---",
      "Total Time: 124 seconds",
      "Total Files Found: 852",
      "Report saved to: forensics_output_.../main_report.txt",
      "[(:] Zip successful. Original folder removed."
    ]
  },
  { 
    id: 'log-parser', 
    name: 'Python Log Parser', 
    lang: 'python', 
    desc: "Automated Security Log Parser for Linux authentication logs. It specifically targets the /var/log/auth.log file to identify potential security breaches.",
    scriptLines: [
      "(kali㉿kali)-[~] python3 auth_parser.py",
      "---auth log parsing resultes---",
      "Time=[Feb 15 14:02:11] | sudo:session | USER=kali | COMMAND=/usr/bin/apt update",
      "Time=[Feb 15 14:02:11] | note!!: session opened for user root by  using sudo",
      "Time=[Feb 15 14:03:05] |!!!!!ALERT!!!!! : authentication failure; logname=kali",
      "!!! RED FLAG DETECTED !!!Time=[Feb 15 14:04:42]| suspicus word detected:'etc/shadow' ",
      "Time=[Feb 15 14:04:42] | sudo:session | USER=kali | COMMAND=/usr/bin/cat /etc/shadow",
      "!!! RED FLAG DETECTED !!!Time=[Feb 15 14:05:15]| suspicus word detected:'nmap' ",
      "Time=[Feb 15 14:05:15] | sudo:session | USER=kali | COMMAND=/usr/bin/nmap -sV 192.168.1.1",
      "Time=[Feb 15 14:08:22] | New User created: New User: auditing_svc",
      "Time=[Feb 15 14:08:55] | password changed for auditing_svc",
      "Time=[Feb 15 14:10:04] | user auditing_svc Deleted ",
      "Time=[Feb 15 14:12:48] | note!!: session opened for user root by  using su",
      "----------------------------------------",
      "summary",
      "----------------------------------------",
      "!!failed login attempt Alerts!!: 1",
      "sudo sessions: 3",
      "su sessions: 1"
    ]
  },
  { 
    id: 'pt-vuln', 
    name: 'pt vulnerability scanning', 
    lang: 'bash/nmap', 
    desc: "Designed to take an IP range, perform a full or basic scan, find vulnerabilities, and perform credential brute-forcing.",
    scriptLines: [
      "(kali㉿kali)-[~] ./pt_project.sh",
      // Matrix Noise
      "00000000  2f 64 65 76 2f 75 72 61  6e 64 6f 6d 0a 2f 64 65  |/dev/urandom./de|",
      "00000010  76 2f 75 72 61 6e 64 6f  6d 0a 2f 64 65 76 2f 75  |v/urandom./dev/u|",
      "...",
      " > SYSTEM ACCESS: GRANTED",
      " > INITIALIZING PROJECT PROTOCOL...",
      " ",
      "      /=======================================================\\",
      "     /                                                       /|",
      "    /           PENETRATION TESTING PROJECT                 / |",
      "   <=======================================================>  |",
      "    \\                                                       \\ |",
      "     \\               By Reut Abergel                         \\|",
      "      \\=======================================================/",
      "                               ||",
      "                             __||__",
      "                             \\    /",
      "                              \\__/",
      " ",
      "please specify a directory to save the output in: scan_results",
      "-----directory is scan_results----",
      "please write a valid ip range with cider to scan: 192.168.1.0/24",
      "---ip is 192.168.1.0/24----",
      "checking if ip is valid, starting to scan",
      "IP input is valid!",
      "scanning ip 192.168.1.10",
      "[(:]found active host: 192.168.1.10, saving...",
      "scanning ip 192.168.1.15",
      "[(:]found active host: 192.168.1.15, saving...",
      "Scan complete. Results saved in scan_results/checkip_results/",
      "Full: include Nmap Scripting Engine OR Basic: scans the network for TCP and UDP",
      "---please choose method to scan([B]asic or [F]ull)---: F",
      "you chose F for full scan with nmap scripts",
      "range is 192.168.1.0/24",
      "starting Full scan with nse (nmap script engine) this may take a while...:",
      "you can press space for estimated time",
      "enter a new dirctory to save the data: full_scan",
      "[(:] Scanning IP: 192.168.1.10 (Please wait...)",
      "[(:] Scanning IP: 192.168.1.15 (Please wait...)",
      "--------------------------------------------------------",
      "           SEARCHSPLOIT FINDINGS                        ",
      "--------------------------------------------------------",
      "---Results for: 192.168.1.10---",
      "Exploit Title                                 |  Path",
      "vsftpd 2.3.4 - Backdoor Command Execution     | unix/remote/17491.rb",
      "-----------------------------------------------------------",
      "!!!!!!!!!!!!!!!!!IMPORTANT FINDINGS ONLY!!!!!!!!!!!!!!!!!!!",
      "-----------------------------------------------------------",
      "Nmap scan report for 192.168.1.10",
      "PORT     STATE SERVICE     VERSION",
      "21/tcp   open  ftp         vsftpd 2.3.4",
      "| vuln-exploit: vsftpd 2.3.4 backdoor",
      "80/tcp   open  http        Apache httpd 2.4.41",
      "===========================================================",
      "Full scan complete! details saved in scan_results/full_scan",
      "starting weak passwords check with hydra ",
      "enter a user list or skip and use Default user list: ",
      "enter path to a pass list or press enter and use the default (rockyou.txt): ",
      "[(:] pass file found using /usr/share/wordlists/rockyou.txt",
      "cheacking for open ports on 192.168.1.0/24:",
      "[*] Found open port 22 on 192.168.1.15. Starting Hydra...",
      "[DATA] 192.168.1.15:22 (ssh) -> login: user password: password123",
      "hydra input saved in scan_results/full_scan ",
      "-----------------------------------------------------------",
      "                   INSPECT RESULTS                         ",
      "-----------------------------------------------------------",
      "Available Scan Reports:",
      "192.168.1.10.txt",
      "192.168.1.15.txt",
      "Enter the IP you want to inspect (or 'q' to quit): q",
      "Exiting inspection.",
      "Do you want to zip the results and delete the original folder? (y/n): y",
      "[(:] Zip successful saved as scan_info_2026.zip. Original folder removed.",
      " ",
      "       (^\\.            .^\\.)",
      "       ((\\^^.        .^^))",
      "         \\ ' \\.-----./   /",
      "          \\              /",
      "          (            )    _ ._ /\\",
      "          ( (o  _  o)  )   \\./       )",
      "          (0   \\^/   0)  \\\\      ___\\",
      "          |            |   .)  \\",
      "          /  \\    /    \\  (). ^",
      "         /  \\ \\  / /    ( .. )",
      "        (      _) (_/    ). ^",
      "        (                )",
      "         \\.            ./",
      "           (__)----(__)",
      " ",
      "      .___________________________________________________.",
      "      |                                                   |",
      "      |          Thank you for using this tool!           |",
      "      |___________________________________________________|"
    ]
  }
];

interface ExecutionInterfaceProps {
  onSelect?: () => void;
}

const ExecutionInterface: React.FC<ExecutionInterfaceProps> = ({ onSelect }) => {
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

  const handleExecute = async () => {
    if (isRunning || isInitializing) return;

    if (!isReady) {
      setIsInitializing(true);
      setTerminalLines(prev => [...prev, `# Initializing system environment for ${selectedProject.name}...`]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsInitializing(false);
      setIsReady(true);
      setTerminalLines(prev => [...prev, `[SUCCESS] Environment initialized.`, `[READY] System ready.`]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    setIsRunning(true);
    const linesToProcess = selectedProject.scriptLines;

    for (const line of linesToProcess) {
      let delay = 350 + Math.random() * 500;
      
      if (
        line.includes("Running Foremost") || 
        line.includes("Configuring and Running Scalpel") || 
        line.includes("parsing memory using volatility") || 
        line.includes("Running volatility imageinfo") ||
        line.includes("Running Bulk Extractor") ||
        line.includes("---auth log parsing resultes---") ||
        line.includes("starting Full scan with nse") ||
        line.includes("Starting Hydra")
      ) {
        delay = 4000;
      }

      if (
        line.includes("Starting installation") || 
        line.includes("Analyzing memory image") || 
        line.includes("Initiating credential audit") || 
        line.includes("Scanning for strings") ||
        line.includes("Running Binwalk") ||
        line.includes("summary") ||
        line.includes("Scan complete")
      ) {
        delay = 5000;
      }

      if (line.startsWith("(kali㉿kali)") || line.startsWith("$") || line.startsWith("welcome to WF proj")) {
        delay = 1000;
      }

      if (line.includes("[(:] Zip successful") || line.includes("[SUCCESS] Script execution finished") || line.startsWith("----------------")) {
        delay = 3000;
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
    <div className="flex flex-col rounded-xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 h-auto md:h-[500px]">
      <div className="flex flex-col md:grid md:grid-cols-4 gap-0 h-full">
        {/* Navigation Sidebar (Desktop) / Tab Bar (Mobile) */}
        <div className="w-full md:col-span-1 border-b md:border-b-0 md:border-r border-white/5 bg-zinc-900/20 flex flex-col md:h-auto shrink-0">
          <div className="hidden md:block p-4 border-b border-white/5 bg-zinc-900/40 shrink-0">
            <span className="text-[10px] font-sans font-black text-zinc-500 uppercase tracking-widest">Select Script</span>
          </div>
          
          {/* Scrollable List of Tabs - Optimized for Mobile Readability */}
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
                {/* Removed the language indicator span here */}
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
                LOADED: <span className="text-zinc-300">{selectedProject.name}</span>
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
                  line.startsWith('[SUCCESS]') || line.includes("Zip successful") || line.includes("Scan complete") ? 'text-emerald-500' :
                  line.startsWith(' >') || line.includes("PENETRATION TESTING PROJECT") || line.includes("By Reut Abergel") || line.includes("Thank you for using this tool") ? 'text-blue-400 font-bold' :
                  line.startsWith('[READY]') || line.includes("SYSTEM ACCESS: GRANTED") || line.includes("INITIALIZING PROJECT PROTOCOL") ? 'text-green-500' :
                  line.startsWith('(kali㉿kali)') || line.startsWith('$') ? 'text-brand-accent font-bold' :
                  line.startsWith('[ALERT]') || line.startsWith('[!]') || line.startsWith('[!!!]') || line.includes('!!! RED FLAG DETECTED !!!') || line.includes('!!!!!ALERT!!!!!') || line.includes('IMPORTANT FINDINGS ONLY') ? 'text-amber-500' :
                  line.startsWith('[=>]') || line.startsWith('==>') || line.startsWith('[(:]') || line.includes('---auth log parsing resultes---') ? 'text-zinc-100 drop-shadow-[0_0_5px_rgba(56,189,248,0.1)]' :
                  line.includes("000000") ? 'text-green-500/50' :
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
              <button 
                onClick={handleExecute}
                disabled={isRunning || isInitializing}
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
                      <Play size={14} className={`${isRunning ? "animate-pulse" : ""} text-brand-accent`} />
                      <span className="text-brand-accent">{isRunning ? "Running Script..." : "Re-Execute Script"}</span>
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