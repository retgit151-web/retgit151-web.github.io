
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  ChevronRight, 
  Activity,
  Award,
  BookOpen,
  Shield,
  Search,
  LayoutDashboard,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import GlassCard from './components/GlassCard';
import IdentityHub from './components/IdentityHub';
import Timeline from './components/Timeline';
import ProjectModal from './components/ProjectModal';
import SkillDetailModal from './components/SkillDetailModal';
import AboutModal from './components/AboutModal';
import ExecutionInterface from './components/ExecutionInterface';
import { PROJECTS, iconMap, FULL_SKILLS_DETAILED, DetailedSkill } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<DetailedSkill | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05 
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

      <main className="pt-12 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Identity Hub (3x1) */}
          <GlassCard id="about" className="lg:col-span-3 min-h-[350px]">
            <IdentityHub onAboutClick={() => setIsAboutOpen(true)} />
          </GlassCard>

          {/* Academic Foundation (1x1) - Precision Timeline Graphics */}
          <GlassCard className="lg:col-span-1 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-bold">Academic Foundation</span>
              <BookOpen size={18} className="text-zinc-500" />
            </div>
            
            <div className="relative pl-8 h-full">
              <div className="space-y-12 pb-14 relative">
                
                {/* Top: Offensive (RTX) - WHITE Node with short descending line */}
                <div className="relative">
                  {/* The White Node */}
                  <div className="absolute -left-[27.5px] top-[1.5px] w-[13px] h-[13px] rounded-full bg-white z-20 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  
                  {/* Short blue descending line */}
                  <div className="absolute -left-[22.25px] top-[10px] w-[2.5px] h-[25px] bg-brand-accent rounded-b-full z-10" />

                  <h4 className="text-[10px] font-black text-zinc-100 uppercase leading-tight">John Bryce Academy • Offensive Security (RTX)</h4>
                  <div className="flex justify-between text-[8px] font-sans text-zinc-500 mt-1 uppercase tracking-widest font-bold">
                    <span>Tel Aviv</span>
                    <span>2026 - 2027</span>
                  </div>
                </div>
                
                {/* Bottom: Defensive Security - Course Completed Status */}
                <div className="relative pt-2">
                  {/* Descending blue line - Mirroring top style, but longer */}
                  <div className="absolute -left-[22.25px] top-[10px] w-[2.5px] h-[55px] bg-brand-accent rounded-b-full z-10" />

                  {/* The Blue Glowing Node - Start of the line */}
                  <div className="absolute -left-[27.5px] top-[1.5px] w-[13px] h-[13px] rounded-full bg-brand-accent shadow-[0_0_15px_rgba(56,189,248,0.7)] z-20" />

                  <h4 className="text-[10px] font-black text-zinc-100 uppercase leading-none">
                    John Bryce Academy • Defensive<br />
                    Security
                  </h4>
                  <div className="flex justify-between text-[8px] font-sans text-zinc-500 mt-2 uppercase tracking-widest font-bold">
                    <span>Tel Aviv</span>
                    <span>2025 - 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Interactive Skill Matrix (4x2) */}
          <GlassCard id="skills" className="lg:col-span-4 lg:row-span-2 p-10">
            <div className="flex justify-between items-center mb-10">
              <div className="space-y-1">
                <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-[0.3em] font-black">Competency Matrix</span>
                <h2 className="text-xl font-black text-zinc-100 uppercase tracking-tight">Click for Skill Details</h2>
              </div>
              <div className="p-3 rounded-full bg-zinc-800/50 border border-white/5">
                <Search size={20} className="text-zinc-500" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {FULL_SKILLS_DETAILED.map(cat => (
                <div key={cat.category} className="space-y-6">
                  <h4 className="text-xs font-black text-zinc-100 uppercase tracking-widest border-b border-white/10 pb-3">{cat.category}</h4>
                  <ul className="space-y-3">
                    {cat.items.map(skill => (
                      <li key={skill.name}>
                        <button 
                          onClick={() => setSelectedSkill(skill)}
                          className="group flex items-center gap-4 text-zinc-400 hover:text-brand-accent transition-all text-left"
                        >
                          <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-brand-accent group-hover:shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all" />
                          <span className="text-sm font-sans font-bold uppercase tracking-wider">{skill.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* My Projects Label */}
          <div className="lg:col-span-4 mt-8 mb-2">
             <div className="flex items-center gap-3">
                <LayoutDashboard size={20} className="text-zinc-500" />
                <h3 className="text-xs font-sans font-black text-zinc-500 uppercase tracking-[0.3em]">My Projects</h3>
                <div className="h-[1px] flex-1 bg-zinc-900 ml-4" />
             </div>
          </div>

          {/* Project Grid */}
          {PROJECTS.map((proj, idx) => {
            const IconComp = iconMap[proj.icon] || Shield;
            const isWide = idx === 0 || idx === 1;
            return (
              <GlassCard 
                id={idx === 0 ? "projects" : undefined}
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`flex flex-col justify-between h-full group ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-2xl bg-zinc-800/50 group-hover:bg-brand-accent/10 transition-all border border-white/5 group-hover:border-brand-accent/30 group-hover:shadow-lg group-hover:shadow-brand-accent/5">
                    <IconComp size={22} className="text-zinc-300 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <ChevronRight size={16} className="text-zinc-700 group-hover:translate-x-1 group-hover:text-brand-accent transition-all" />
                </div>
                <div className="mt-8">
                  <h4 className="text-base font-black text-zinc-100 group-hover:text-brand-accent transition-colors tracking-tight uppercase">{proj.title}</h4>
                  <p className="text-[10px] font-sans text-zinc-500 mt-2 line-clamp-2 leading-relaxed font-bold uppercase tracking-widest opacity-80">
                    {proj.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}

          {/* Execution Interface Section */}
          <div className="lg:col-span-4 mt-8 mb-4">
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 pl-2">
                 <Cpu size={14} className="text-brand-accent/60" />
                 <span className="text-[10px] font-sans font-black text-zinc-500 uppercase tracking-[0.4em]">try my projects</span>
               </div>
               <ExecutionInterface />
             </div>
          </div>

          {/* History / Experience - Expanded to full width for balance */}
          <GlassCard id="experience" className="lg:col-span-4 overflow-y-auto min-h-[400px]">
            <div className="flex justify-between items-start mb-8">
              <span className="text-[10px] font-sans text-zinc-500 uppercase tracking-widest font-bold">Career Trajectory</span>
              <Activity size={18} className="text-zinc-500" />
            </div>
            <Timeline />
          </GlassCard>
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
    </div>
  );
};

export default App;
