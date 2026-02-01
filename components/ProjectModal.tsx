
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Zap, FileText } from 'lucide-react';
// Fix: iconMap is exported from constants.tsx, while Project is from types.ts
import { Project } from '../types';
import { iconMap } from '../constants';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const IconComp = iconMap[project.icon] || Code2;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
        />
        
        <motion.div
          layoutId={`project-${project.id}`}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-12"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col gap-6 md:gap-8">
            <header className="flex items-start gap-4 md:gap-6 pr-8">
              <div className="p-3 md:p-4 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 shrink-0">
                <IconComp className="w-8 h-8 md:w-12 md:h-12 text-brand-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-50 mb-2 leading-tight">{project.title}</h2>
              </div>
            </header>

            <div className="space-y-6">
              <section>
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-3">Project Overview</h3>
                <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                  {project.longDescription}
                </p>
              </section>

              {/* PDF Manual Button Section */}
              {project.manualPdf && (
                <section className="pt-4">
                  <a 
                    href={project.manualPdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 md:p-6 rounded-xl bg-zinc-800 border border-white/5 hover:bg-brand-accent/10 hover:border-brand-accent/20 text-zinc-300 hover:text-brand-accent transition-all group"
                  >
                    <FileText size={20} className="md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-bold uppercase tracking-widest text-xs md:text-sm">View Project Manual</span>
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity ml-1 md:w-4 md:h-4" />
                  </a>
                </section>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
