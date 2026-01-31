
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, User } from 'lucide-react';

interface IdentityHubProps {
  onAboutClick?: () => void;
}

const IdentityHub: React.FC<IdentityHubProps> = ({ onAboutClick }) => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center p-6 relative overflow-hidden">
      {/* Background Abstract Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-zinc-50 mb-2 leading-none uppercase">
          REUT ABERGEL
        </h1>
        <p className="text-[10px] font-sans font-bold text-zinc-600 uppercase tracking-[0.6em] mb-8">
          Security Operations Portfolio
        </p>

        {/* Integrated Communication Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-zinc-400">
          <div className="flex items-center gap-2 group cursor-default">
            <Mail size={14} className="text-brand-accent group-hover:scale-110 transition-transform" />
            <span className="text-xs font-sans font-bold uppercase tracking-widest transition-colors group-hover:text-zinc-200">Retgit151@gmail.com</span>
          </div>
          <div className="hidden md:block w-[1px] h-3 bg-zinc-800" />
          <div className="flex items-center gap-2 group cursor-default">
            <Phone size={14} className="text-brand-accent group-hover:scale-110 transition-transform" />
            <span className="text-xs font-sans font-bold uppercase tracking-widest transition-colors group-hover:text-zinc-200">052-8570555</span>
          </div>
          <div className="hidden md:block w-[1px] h-3 bg-zinc-800" />
          <div className="flex items-center gap-2 group cursor-default">
            <MapPin size={14} className="text-brand-accent group-hover:scale-110 transition-transform" />
            <span className="text-xs font-sans font-bold uppercase tracking-widest transition-colors group-hover:text-zinc-200">Kiryat Ono, Israel</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md mb-8 transition-all hover:border-white/10">
           <div className="flex flex-col items-center min-w-[120px]">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest opacity-50 mb-1">Status</span>
              <span className="text-xs text-brand-accent font-bold uppercase tracking-tighter">SEARCHING FOR A JOB</span>
           </div>
           
           <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block" />
           
           <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 rounded-xl text-[10px] font-sans transition-all text-brand-accent uppercase tracking-widest font-black group">
               <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
               <span>Executive CV</span>
             </button>

             <button 
              onClick={onAboutClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-white/5 rounded-xl text-[10px] font-sans transition-all text-zinc-300 uppercase tracking-widest font-black group"
             >
               <User size={16} className="group-hover:scale-110 transition-transform text-brand-tech" />
               <span>About Me</span>
             </button>
           </div>

           <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block" />
           
           <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-800 hover:bg-brand-accent/10 border border-white/5 transition-all text-zinc-300 hover:text-brand-accent group"
           >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
           </a>
        </div>
      </motion.div>
    </div>
  );
};

export default IdentityHub;
