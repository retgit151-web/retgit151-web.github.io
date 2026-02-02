import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Calendar, CheckCircle2, FileText } from 'lucide-react';
import { CERTIFICATES } from '../constants';

interface CertificateModalProps {
  issuer: string | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ issuer, onClose }) => {
  // Filter certificates based on the selected issuer
  const relevantCertificates = issuer 
    ? CERTIFICATES.filter(c => c.issuer === issuer)
    : [];

  return (
    <AnimatePresence>
      {issuer && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] sm:max-h-[90vh] flex flex-col"
          >
            {/* Header Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-tech to-brand-accent" />
            
            {/* Header - Sticky on top */}
            <div className="sticky top-0 z-20 bg-zinc-900/80 backdrop-blur-md px-5 py-4 sm:px-8 sm:py-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                  <Award size={20} className="sm:w-6 sm:h-6 text-brand-accent" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-zinc-50 tracking-tight uppercase line-clamp-1">{issuer}</h2>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest hidden sm:block">Accredited Certifications</p>
                </div>
              </div>
              
              <button 
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 sm:p-8 overflow-y-auto custom-scrollbar">
              {/* Certificates List - Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relevantCertificates.map((cert, idx) => (
                  <motion.div 
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/20 transition-all h-full group"
                  >
                    <div className="flex justify-between items-start mb-3 gap-3">
                      <h3 className="text-sm font-bold text-zinc-200 group-hover:text-brand-accent transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <div className="flex gap-2 shrink-0">
                        {cert.pdf && (
                          <a 
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95"
                            title="View Certificate PDF"
                          >
                            <FileText size={12} />
                            <span className="hidden xs:inline">PDF</span>
                          </a>
                        )}
                        {cert.url && !cert.pdf && (
                          <a 
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-brand-accent transition-colors active:scale-95"
                            title="Visit Issuer Website"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono text-zinc-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={10} className="text-zinc-600" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-500/80">
                        <CheckCircle2 size={10} />
                        <span className="uppercase font-bold tracking-tighter">Verified</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-auto font-sans">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}

                {relevantCertificates.length === 0 && (
                   <div className="col-span-full text-center py-12 flex flex-col items-center gap-3">
                     <Award size={32} className="text-zinc-800" />
                     <p className="text-zinc-500 text-sm italic">No detailed certificate records found for this issuer.</p>
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
        @media (max-width: 400px) {
          .xs\\:inline { display: none; }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default CertificateModal;