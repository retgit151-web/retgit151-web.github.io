
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Timeline: React.FC = () => {
  return (
    <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800">
      {EXPERIENCES.map((exp, index) => (
        <motion.div 
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="absolute -left-[20px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-brand-accent shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          <div className="mb-1">
            <h4 className="text-zinc-50 font-semibold">{exp.role}</h4>
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>{exp.company}</span>
              <span>{exp.period}</span>
            </div>
          </div>
          <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.transferableSkills.map(skill => (
              <span key={skill} className="px-2 py-0.5 rounded bg-zinc-800/50 text-[10px] text-brand-tech font-mono border border-white/5">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
