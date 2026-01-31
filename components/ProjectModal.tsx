
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';
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
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col gap-8">
            <header className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-brand-accent/10 border border-brand-accent/20">
                <IconComp className="w-12 h-12 text-brand-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-zinc-50 mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-mono text-brand-tech">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <section>
                  <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-3">Project Overview</h3>
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {project.longDescription}
                  </p>
                </section>

                <section>
                  <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-3">Operational Outcome</h3>
                  <div className="bg-zinc-950 border border-white/5 rounded-2xl p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4 text-emerald-400">
                      <ExternalLink size={16} />
                      <span>{project.visualMetaphor}</span>
                    </div>
                    {project.codeSnippet && (
                      <pre className="text-zinc-400 overflow-x-auto whitespace-pre-wrap">
                        {project.codeSnippet}
                      </pre>
                    )}
                  </div>
                </section>
              </div>

              <aside className="space-y-6">
                <div className="p-6 rounded-2xl bg-zinc-800/30 border border-white/5">
                  <h3 className="text-sm font-semibold text-zinc-100 mb-4">Security Relevance</h3>
                  <ul className="space-y-3 text-xs text-zinc-400">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                      Provides high-fidelity data for threat prioritization.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                      Reduces detection-to-remediation latency.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-brand-accent mt-1.5 shrink-0" />
                      Demonstrates proficiency in Linux auditing frameworks.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
