
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, ChevronRight } from 'lucide-react';
import { DetailedSkill } from '../constants';

interface SkillDetailModalProps {
  skill: DetailedSkill | null;
  onClose: () => void;
}

const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/90 backdrop-blur-lg"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-brand-tech" />
          
          <div className="p-8 pt-10">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                <ShieldCheck size={24} className="text-brand-accent" />
              </div>
              <h2 className="text-2xl font-black text-zinc-50 tracking-tight uppercase">{skill.name}</h2>
            </div>

            <div className="space-y-6">
              
              {/* Description Section */}
              <div className="p-4 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Competencies List */}
              <div>
                <div className="grid grid-cols-1 gap-3">
                  {skill.competencies.map((point, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 cursor-default"
                    >
                      <ChevronRight size={14} className="text-brand-accent" />
                      <span className="text-sm font-sans font-medium text-zinc-300">
                        {point.trim()}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SkillDetailModal;
