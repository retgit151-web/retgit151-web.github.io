
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Calendar, CheckCircle2, FileText, Download } from 'lucide-react';
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
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-tech to-brand-accent" />
            
            <div className="p-8 md:p-12 overflow-y-auto">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors z-10"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                  <Award size={28} className="text-brand-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-zinc-50 tracking-tight uppercase">{issuer}</h2>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Certification Authority</p>
                </div>
              </div>

              {/* Certificates List - Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relevantCertificates.map((cert, idx) => (
                  <motion.div 
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex flex-col p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 hover:bg-white/10 transition-all h-full"
                  >
                    <div className="flex justify-between items-start mb-3 gap-3">
                      <h3 className="text-sm font-bold text-zinc-200 group-hover:text-brand-accent transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex gap-2 shrink-0">
                        {cert.pdf && (
                          <a 
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-wider transition-all"
                            title="View Certificate PDF"
                          >
                            <FileText size={12} />
                            <span>PDF</span>
                          </a>
                        )}
                        {cert.url && !cert.pdf && (
                          <a 
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-brand-accent transition-colors"
                            title="Visit Issuer Website"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={10} />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-500">
                        <CheckCircle2 size={10} />
                        <span>Verified</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-3 mt-auto">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}

                {relevantCertificates.length === 0 && (
                   <div className="col-span-full text-center py-10">
                     <p className="text-zinc-500 text-sm italic">No detailed certificate records found for this issuer.</p>
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
