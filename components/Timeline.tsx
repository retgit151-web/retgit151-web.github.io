
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { ExternalLink, FileText } from 'lucide-react';

interface TimelineProps {
  onIssuerClick: (issuer: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onIssuerClick }) => {
  return (
    <div className="relative pl-6 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800">
      {CERTIFICATES.map((cert, index) => (
        <motion.div 
          key={cert.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          <div className="absolute -left-[20px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-brand-accent shadow-[0_0_10px_rgba(56,189,248,0.5)] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
          </div>
          <div className="mb-1">
            {cert.pdf ? (
              <a 
                href={cert.pdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 group/title hover:text-brand-accent transition-colors cursor-pointer"
                title="View Certificate PDF"
              >
                <h4 className="text-zinc-50 font-bold text-sm uppercase tracking-wide group-hover/title:text-brand-accent">{cert.title}</h4>
                <FileText size={12} className="text-zinc-500 group-hover/title:text-brand-accent transition-colors" />
              </a>
            ) : (
              <h4 className="text-zinc-50 font-bold text-sm uppercase tracking-wide">{cert.title}</h4>
            )}
            
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mt-1">
              <button 
                onClick={() => onIssuerClick(cert.issuer)}
                className="text-brand-accent/80 font-bold hover:text-brand-accent hover:underline decoration-brand-accent/30 underline-offset-4 transition-all flex items-center gap-1 group cursor-pointer"
              >
                {cert.issuer}
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <span>{cert.date}</span>
            </div>
          </div>
          {cert.description && (
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed border-l-2 border-zinc-800 pl-3">
              {cert.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
