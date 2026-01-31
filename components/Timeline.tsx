
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { Folder, ChevronRight, FileText } from 'lucide-react';

interface TimelineProps {
  onIssuerClick: (issuer: string) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onIssuerClick }) => {
  // Group certificates by issuer
  const groupedCertificates = CERTIFICATES.reduce((acc, cert) => {
    (acc[cert.issuer] = acc[cert.issuer] || []).push(cert);
    return acc;
  }, {} as Record<string, typeof CERTIFICATES>);

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(groupedCertificates).map(([issuer, certs], index) => (
        <motion.div
          key={issuer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onIssuerClick(issuer)}
          className="group relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/80 hover:border-brand-accent/30 transition-all cursor-pointer p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Folder Icon container */}
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Folder size={24} className="text-brand-accent fill-brand-accent/20" />
              </div>
              
              <div>
                <h4 className="text-zinc-100 font-bold text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                  {issuer}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                    {certs.length} Files
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    Latest: {certs.reduce((latest, c) => (c.date > latest ? c.date : latest), '')}
                  </span>
                </div>
              </div>
            </div>

            <ChevronRight className="text-zinc-700 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" size={18} />
          </div>

          {/* Decorative file previews behind the folder logic */}
          <div className="mt-4 flex gap-1 px-1 opacity-40 group-hover:opacity-60 transition-opacity">
            {certs.slice(0, 5).map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-full bg-zinc-700 group-hover:bg-brand-accent transition-colors" />
            ))}
          </div>
        </motion.div>
      ))}
      
      {Object.keys(groupedCertificates).length === 0 && (
        <div className="text-center p-8 text-zinc-600 italic text-xs">
          No certificate folders found.
        </div>
      )}
    </div>
  );
};

export default Timeline;
