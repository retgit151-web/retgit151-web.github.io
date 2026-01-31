
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Gamepad2, User, Mic2, Guitar } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
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
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-tech to-brand-accent animate-pulse" />
            
            <div className="p-8 md:p-12">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                  <User size={28} className="text-brand-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-zinc-50 tracking-tight uppercase">Personnel Dossier</h2>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Subject: Reut Abergel</p>
                </div>
              </div>

              <div className="space-y-10">
                <section className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <Music size={18} className="text-brand-tech" />
                    <h3 className="text-xs font-black text-zinc-100 uppercase tracking-widest">Musical Background</h3>
                  </div>
                  <div className="space-y-4 text-zinc-400 leading-relaxed font-sans text-sm">
                    <p>
                      Music plays an important role in my life. I played in a band for several years and led a youth 
                      music ensemble as part of a municipal youth club program.
                    </p>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4">
                      <Guitar size={20} className="text-brand-accent shrink-0 mt-1" />
                      <p className="text-xs italic">
                        Created musical arrangements and performed as a guitarist in opening acts for prominent 
                        Israeli artists, including <span className="text-zinc-200 font-bold">Tuna</span>, 
                        <span className="text-zinc-200 font-bold"> Eden Ben Zaken</span>, 
                        <span className="text-zinc-200 font-bold"> Subliminal</span>, and others.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Gamepad2 size={18} className="text-brand-tech" />
                    <h3 className="text-xs font-black text-zinc-100 uppercase tracking-widest">Digital Interests</h3>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-800/30 border border-white/5">
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Avid gamer with a passion for all kinds of computer and video games. This hobby drives my curiosity 
                      for system architectures, high-performance computing, and interactive digital environments.
                    </p>
                  </div>
                </section>

                <div className="pt-4 flex justify-end">
                   <div className="text-[10px] text-zinc-600 font-mono uppercase">
                     [ FILE_STATUS: UNCLASSIFIED // NON-OPERATIONAL_DATA ]
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
