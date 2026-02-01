
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, User, Github } from 'lucide-react';

interface IdentityHubProps {
  onAboutClick?: () => void;
}

const TARGET_NAME = "REUT ABERGEL";

const IdentityHub: React.FC<IdentityHubProps> = ({ onAboutClick }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center p-4 md:p-8 relative overflow-hidden">
      
      {/* Background Abstract Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center"
      >
        {/* Main Name Header */}
        <div className="relative mb-6 cursor-default select-none group">
           <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase drop-shadow-2xl text-zinc-50 transition-colors duration-300 group-hover:text-zinc-100">
            {TARGET_NAME}
           </h1>
        </div>

        {/* Integrated Communication Details */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-4 mb-8 md:mb-12 text-zinc-500">
          <div className="flex items-center gap-2 group cursor-default hover:text-brand-accent transition-colors">
            <Mail size={14} />
            <span className="text-[10px] md:text-xs font-mono font-medium uppercase tracking-wider">Retgit151@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default hover:text-brand-accent transition-colors">
            <Phone size={14} />
            <span className="text-[10px] md:text-xs font-mono font-medium uppercase tracking-wider">052-8570555</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default hover:text-brand-accent transition-colors">
            <MapPin size={14} />
            <span className="text-[10px] md:text-xs font-mono font-medium uppercase tracking-wider">Kiryat Ono, Israel</span>
          </div>
        </div>

        {/* Action Dashboard */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
           {/* Status Indicator */}
           <div className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900/80 border border-white/5 rounded-xl backdrop-blur-md hover:border-emerald-500/30 transition-colors w-full sm:w-auto">
              <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mr-2">Status</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-emerald-500 font-bold uppercase tracking-tight">Open to Work</span>
           </div>
           
           <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
             <div className="flex gap-3 w-full sm:w-auto">
                 <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 hover:text-brand-accent rounded-xl text-[11px] font-sans transition-all uppercase tracking-widest font-black group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                   <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                   <span>Resume</span>
                 </button>

                 <button 
                  onClick={onAboutClick}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-white/5 rounded-xl text-[11px] font-sans transition-all text-zinc-300 hover:text-brand-accent uppercase tracking-widest font-black group"
                 >
                   <User size={16} className="group-hover:scale-110 transition-transform text-brand-accent" />
                   <span>About Me</span>
                 </button>
             </div>
             
             <div className="flex gap-3 w-full sm:w-auto">
                 <a 
                  href="https://www.linkedin.com/in/reut-abergel-96753438a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjMGb4F2xRye1e9P57nSRVA%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex justify-center items-center p-3 rounded-xl bg-zinc-800 hover:bg-[#0077b5] border border-white/5 transition-all text-zinc-400 hover:text-white group"
                 >
                    <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                 </a>

                 <a 
                  href="https://github.com/retgit151-web/reut-abergel-projects-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex justify-center items-center p-3 rounded-xl bg-zinc-800 hover:bg-black border border-white/5 transition-all text-zinc-400 hover:text-white group"
                 >
                    <Github size={18} className="group-hover:scale-110 transition-transform" />
                 </a>
             </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IdentityHub;
