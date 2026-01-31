
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  ChevronRight, 
  Activity, 
  Award, 
  Shield, 
  Search, 
  LayoutDashboard, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Zap 
} from 'lucide-react';
import GlassCard from './components/GlassCard';
import IdentityHub from './components/IdentityHub';
import Timeline from './components/Timeline';
import ProjectModal from './components/ProjectModal';
import SkillDetailModal from './components/SkillDetailModal';
import AboutModal from './components/AboutModal';
import CertificateModal from './components/CertificateModal';
import ExecutionInterface from './components/ExecutionInterface';
import { PROJECTS, iconMap, FULL_SKILLS_DETAILED, DetailedSkill } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<DetailedSkill | null>(null);
  const [selectedIssuer, setSelectedIssuer] = useState<string | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent/30 selection:text-white antialiased">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-zinc-950">
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-brand-accent/5 blur-[140px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-brand-tech/5 blur-[140px] rounded-full" />
      </div>

      <main className="pt-12 pb-20 px-4 md:px-8 max-w-8xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* --- SECTION 1: IDENTITY & FOUNDATION --- */}
          
          {/* Identity Hub (3x1) */}
          <GlassCard id="about" className="lg:col-span-3 min-h-[350px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <IdentityHub onAboutClick={() => setIsAboutOpen(true)} />
          </GlassCard>

          {/* Academic Foundation (1x1) */}
          <GlassCard className="lg:col-span-1 flex flex-col h-full bg-zinc-900/40 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-bold">Education</span>
            </div>
            
            <div className="relative h-full flex flex-col justify-center z-10 px-2 pb-4">
              <div className="flex flex-col h-full justify-around relative">
                {/* Connecting Line */}
                <div className="absolute left-[5px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
                
                {/* Top: Offensive (RTX) */}
                <div className="relative pl-6">
                  {/* Node */}
                  <div className="absolute left-[1px] top-1.5 w-[9px] h-[9px] rounded-full bg-zinc-900 border border-zinc-500 z-20" />
                  
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-zinc-500 mb-0.5">2026 - 2027</span>
                    <h4 className="text-xs font-black text-zinc-100 uppercase leading-tight mb-2">Offensive Security (RTX)</h4>
                    <div className="text-[9px] text-zinc-400 font-medium mb-2">John Bryce Academy</div>
                    
                     {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {['Red Teaming', 'Exploit Dev', 'Adv. PT'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[8px] text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom: Defensive Security */}
                <div className="relative pl-6">
                  {/* Node */}
                  <div className="absolute left-[1px] top-1.5 w-[9px] h-[9px] rounded-full bg-zinc-900 border border-brand-accent shadow-[0_0_8px_rgba(56,189,248,0.4)] z-20" />

                  <div className="flex flex-col">
                     <span className="text-[9px] font-mono text-brand-accent mb-0.5">2025 - 2026</span>
                     <h4 className="text-xs font-black text-zinc-100 uppercase leading-tight mb-2">
                      Defensive Security
                     </h4>
                     <div className="text-[9px] text-zinc-400 font-medium mb-2">John Bryce Academy</div>

                     {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {['SOC Operations', 'Forensics', 'IR'].map(tag => (
                        <span key={tag} className="px-1.5 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/10 text-[8px] text-brand-accent">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* --- SECTION 2: SKILLS AND CERTIFICATES (Moved Up) --- */}
          <div className="lg:col-span-4 mt-8 mb-2">
             <div className="flex items-center gap-3">
               <Shield size={20} className="text-brand-accent" />
               <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Skills and Certificates</h3>
               <div className="h-[1px] flex-1 bg-zinc-800 ml-4" />
             </div>
          </div>

          {/* Competency Matrix (Left Side) */}
          <GlassCard id="skills" className="lg:col-span-2 p-8">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
              <div className="space-y-1">
                <h2 className="text-xl font-black text-zinc-100 uppercase tracking-tight">Skills</h2>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-800/50 border border-white/5">
                <Activity size={20} className="text-brand-accent" />
              </div>
            </div>
            <div className="space-y-10">
              {FULL_SKILLS_DETAILED.map(cat => (
                <div key={cat.category} className="space-y-4">
                  <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-tech uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-brand-tech rounded-full" />
                    {cat.category}
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {cat.items.map(skill => (
                      <li key={skill.name}>
                        <button 
                          onClick={() => setSelectedSkill(skill)}
                          className="w-full group flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 border border-transparent hover:border-white/5 transition-all text-left"
                        >
                          <span className="text-xs font-bold text-zinc-400 group-hover:text-zinc-200 uppercase tracking-wider">{skill.name}</span>
                          <ChevronRight size={12} className="text-zinc-700 group-hover:text-brand-accent transition-colors opacity-0 group-hover:opacity-100" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Certificates (Right Side) */}
          <GlassCard id="certificates" className="lg:col-span-2 min-h-[400px]">
            <div className="flex justify-between items-start mb-8 pb-4 border-b border-white/5">
              <div className="space-y-1">
                <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-bold">Certifications</span>
                <h2 className="text-xl font-black text-zinc-100 uppercase tracking-tight">Professional Certificates</h2>
              </div>
              <Award size={20} className="text-zinc-500" />
            </div>
            <Timeline onIssuerClick={setSelectedIssuer} />
          </GlassCard>

          {/* --- SECTION 3: PROJECTS (Swapped Position) --- */}
          <div className="lg:col-span-4 mt-8 mb-4">
             <div className="flex items-center gap-3">
                <LayoutDashboard size={20} className="text-brand-accent" />
                <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Projects</h3>
                <div className="h-[1px] flex-1 bg-zinc-800 ml-4" />
             </div>
          </div>

          {PROJECTS.map((proj, idx) => {
            const IconComp = iconMap[proj.icon] || Shield;
            const isWide = idx === 0;
            return (
              <GlassCard 
                id={idx === 0 ? "projects" : undefined}
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`flex flex-col justify-between h-full min-h-[220px] group cursor-pointer hover:border-brand-accent/30 transition-colors ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 transition-all">
                    <IconComp size={20} className="text-zinc-400 group-hover:text-brand-accent transition-colors" />
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-black text-zinc-200 group-hover:text-brand-accent transition-colors tracking-wide uppercase mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-[10px] font-sans text-zinc-500 line-clamp-3 leading-relaxed font-medium">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-end opacity-50 group-hover:opacity-100 transition-opacity">
                   <ChevronRight size={14} className="text-brand-accent" />
                </div>
              </GlassCard>
            );
          })}

          {/* --- SECTION 4: LIVE EXECUTION (Swapped Position) --- */}
          <div className="lg:col-span-4 mt-8 mb-2">
             <div className="flex items-center gap-3">
               <Terminal size={20} className="text-brand-accent" />
               <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">Live Terminal Demo</h3>
               <div className="h-[1px] flex-1 bg-zinc-800 ml-4" />
             </div>
             <p className="text-xs text-zinc-500 mt-2 ml-8 font-mono max-w-2xl">
               Select a script from the list below to initialize a live simulation
             </p>
          </div>

          <div className="lg:col-span-4 mb-8">
             <ExecutionInterface />
          </div>

        </motion.div>
      </main>

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <SkillDetailModal 
        skill={selectedSkill} 
        onClose={() => setSelectedSkill(null)} 
      />
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
      <CertificateModal 
        issuer={selectedIssuer}
        onClose={() => setSelectedIssuer(null)}
      />
    </div>
  );
};

export default App;
