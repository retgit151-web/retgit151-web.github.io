import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, Github } from 'lucide-react';

interface IdentityHubProps {
  // No props needed anymore
}

const TARGET_NAME = "REUT ABERGEL";
const TARGET_ROLE = "CYBER SECURITY ANALYST";

const IdentityHub: React.FC<IdentityHubProps> = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center p-4 md:p-8 relative overflow-hidden">
      
      <style>{`
        /* 
           CYBER BLOCK GLITCH v6 - RAW STATIC FRAMES
           - Block Glitches: High frequency (kept).
           - Static Line: Raw noise texture, no glow, blocky displacement, 1-frame duration.
        */

        @keyframes glitch-block-fast-1 {
          0% { clip-path: inset(20% 30% 60% 10%); transform: translate(-6px, 3px); }
          5% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          15% { clip-path: inset(10% 10% 70% 40%); transform: translate(6px, -4px); }
          20% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          35% { clip-path: inset(50% 50% 20% 20%); transform: translate(-5px, 5px); }
          40% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          50% { clip-path: inset(0% 60% 80% 0%); transform: translate(5px, 0); }
          55% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          70% { clip-path: inset(60% 20% 10% 40%); transform: translate(-4px, 4px); }
          75% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          85% { clip-path: inset(40% 40% 40% 40%); transform: translate(6px, -3px); } 
          90% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          100% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
        }

        @keyframes glitch-block-fast-2 {
          0% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          10% { clip-path: inset(5% 5% 70% 60%); transform: translate(5px, 3px); }
          15% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          30% { clip-path: inset(70% 10% 5% 50%); transform: translate(-5px, -2px); }
          35% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          50% { clip-path: inset(25% 60% 55% 10%); transform: translate(4px, 5px); }
          55% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          80% { clip-path: inset(40% 10% 40% 70%); transform: translate(-4px, 2px); }
          85% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
          100% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
        }

        @keyframes glitch-rare-snap {
          0%, 85% { opacity: 0; clip-path: inset(100% 0 0 0); transform: translate(0); }
          86% { opacity: 1; clip-path: inset(45% 0 45% 0); transform: translate(-15px, 0) skew(50deg); }
          87% { opacity: 1; clip-path: inset(0 0 0 0); transform: translate(5px, 0) skew(-10deg); filter: blur(1px); }
          88% { opacity: 1; clip-path: inset(10% 0 80% 0); transform: translate(10px, 0); }
          89% { opacity: 0; clip-path: inset(100% 0 0 0); transform: translate(0); }
          100% { opacity: 0; }
        }

        /* 
           RAW STATIC FRAME FLASH 
           - Uses steps(1) to ensure instant changes (no tweening).
           - Only visible for ~1-2% of the timeline.
           - Jumps vertically and horizontally (block distortion).
        */
        @keyframes raw-static-flash {
          0% { opacity: 0; top: 0; height: 0; transform: translateX(0); }
          
          /* Flash 1: Top slice */
          14% { opacity: 0; }
          15% { opacity: 1; top: 15%; height: 4px; transform: translateX(-10px); }
          16% { opacity: 0; }

          /* Flash 2: Middle thick block */
          38% { opacity: 0; }
          39% { opacity: 1; top: 45%; height: 18px; transform: translateX(8px); }
          40% { opacity: 0; }

          /* Flash 3: Bottom thin line */
          72% { opacity: 0; }
          73% { opacity: 1; top: 80%; height: 2px; transform: translateX(-15px); }
          74% { opacity: 0; }

          /* Flash 4: Quick repeat mid-top */
          91% { opacity: 0; }
          92% { opacity: 1; top: 30%; height: 6px; transform: translateX(5px); }
          93% { opacity: 0; }

          100% { opacity: 0; }
        }

        .glitch-blocks {
          position: relative;
          color: #fafafa;
          display: inline-block;
        }

        /* Main Block Layers */
        .glitch-blocks::before,
        .glitch-blocks::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #09090b;
          opacity: 0;
        }

        /* CHANGED: Use .glitch-blocks:hover instead of .group:hover */
        .glitch-blocks:hover::before {
          opacity: 1;
          z-index: 2;
          animation: glitch-block-fast-1 0.7s steps(1) infinite;
        }

        .glitch-blocks:hover::after {
          opacity: 1;
          z-index: 1;
          animation: glitch-block-fast-2 0.8s steps(1) infinite reverse;
        }

        /* Rare Snap Layer */
        .glitch-snap-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
          color: #fafafa;
          z-index: 3;
        }

        .glitch-blocks:hover .glitch-snap-layer {
           animation: glitch-rare-snap 1.5s linear infinite;
        }

        /* 
           STATIC RAW LINE LAYER 
           - High frequency noise (baseFrequency='3')
           - No Glow
           - Hard Mix
        */
        .static-line {
          position: absolute;
          left: 0;
          width: 100%; /* Full width of container */
          
          /* Texture: Raw high-freq noise */
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E");
          mix-blend-mode: hard-light;
          opacity: 0;
          z-index: 5;
          pointer-events: none;
          /* No shadow/glow requested */
        }

        .glitch-blocks:hover .static-line {
          /* 2.5s loop, steps(1) for instant frame cuts */
          animation: raw-static-flash 2.5s steps(1) infinite;
        }
        
      `}</style>
      
      {/* Background Abstract Element - Kept subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-zinc-800/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center"
      >
        {/* Main Name Header */}
        <div className="relative mb-3 cursor-default select-none">
           <h1 
             className="relative text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase drop-shadow-2xl text-zinc-50 glitch-blocks"
             data-text={TARGET_NAME}
           >
            {TARGET_NAME}
            {/* Rare Distortion Layer Overlay */}
            <span className="glitch-snap-layer" aria-hidden="true">{TARGET_NAME}</span>
            {/* Raw Static Frame Line */}
            <div className="static-line" aria-hidden="true"></div>
           </h1>
        </div>

        {/* Role Subtitle */}
        <div className="mb-8 md:mb-10 cursor-default select-none">
            <span className="text-xl md:text-3xl font-mono font-medium text-zinc-500 uppercase tracking-[0.3em]">
                {TARGET_ROLE}
            </span>
        </div>

        {/* Integrated Communication Details */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6 mb-10 md:mb-14 text-zinc-500">
          <div className="flex items-center gap-3 group cursor-default hover:text-white transition-colors">
            <Mail size={24} />
            <span className="text-base md:text-lg font-mono font-medium uppercase tracking-wider">Retgit151@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 group cursor-default hover:text-white transition-colors">
            <Phone size={24} />
            <span className="text-base md:text-lg font-mono font-medium uppercase tracking-wider">052-8570555</span>
          </div>
          <div className="flex items-center gap-3 group cursor-default hover:text-white transition-colors">
            <MapPin size={24} />
            <span className="text-base md:text-lg font-mono font-medium uppercase tracking-wider">Kiryat Ono, Israel</span>
          </div>
        </div>

        {/* Action Dashboard */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
           {/* Status Indicator - Refactored: Removed "Status" label, larger text, green dot only */}
           <div className="flex items-center justify-center gap-3 px-6 h-14 bg-zinc-900/80 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] rounded-xl backdrop-blur-md w-full sm:w-auto">
              <span className="flex h-3 w-3 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm md:text-base text-emerald-500 font-black uppercase tracking-widest">Open to Work</span>
           </div>
           
           <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
               <a 
                 href="/Resume/Resume-Reut Abergel.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center justify-center gap-3 px-8 h-14 bg-zinc-100 hover:bg-white text-zinc-950 hover:text-black rounded-xl transition-all uppercase tracking-widest font-black group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
               >
                 <Download size={22} className="group-hover:-translate-y-0.5 transition-transform" />
                 <span className="text-sm md:text-base">Resume</span>
               </a>

               <a 
                href="https://www.linkedin.com/in/reut-abergel-96753438a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjMGb4F2xRye1e9P57nSRVA%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-14 w-14 rounded-xl bg-zinc-800 hover:bg-[#0077b5] border border-white/5 transition-all text-zinc-400 hover:text-white group"
               >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
               </a>

               <a 
                href="https://github.com/retgit151-web/reut-abergel-projects-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-14 w-14 rounded-xl bg-zinc-800 hover:bg-black border border-white/5 transition-all text-zinc-400 hover:text-white group"
               >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
               </a>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IdentityHub;