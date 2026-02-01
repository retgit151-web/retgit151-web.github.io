
import React, { useState, useEffect, useRef } from 'react';
import { User, Music, Gamepad2, Sparkles, Terminal } from 'lucide-react';
import GlassCard from './GlassCard';

const TYPING_SPEED = 25; // ms per char

const BIO_TEXT = "I am a Cybersecurity Specialist with a unique background in the arts. My journey began in music, leading ensembles and performing with top artists, which honed my creativity and discipline. Now, I channel that same passion into securing digital architectures, solving complex problems, and exploring new technologies.";

const AboutSection: React.FC = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      setText(BIO_TEXT.slice(0, index));
      index++;
      if (index > BIO_TEXT.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <GlassCard 
      id="about-me"
      className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[300px] flex flex-col md:flex-row gap-8 items-start relative group"
    >
        {/* Glow behind */}
        <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-brand-tech/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-tech/10 transition-colors duration-1000" />

        {/* Left: Terminal / Bio */}
        <div className="flex-1 w-full space-y-6 z-10" ref={sectionRef}>
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Terminal className="text-brand-accent" size={20} />
                <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">User Profile</h3>
                <div className="ml-auto flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
            </div>
            
            <div className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed min-h-[100px]">
                <span className="text-brand-accent mr-3 select-none">{'>'}</span>
                {text}
                <span className="animate-pulse inline-block w-2.5 h-5 bg-brand-accent align-middle ml-1 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            </div>

            {/* Traits */}
            <div className={`transition-all duration-1000 ${isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={14} className="text-brand-tech" />
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Core Traits</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['Creative', 'Team Player', 'Problem Solver', 'High Work Ethic'].map((trait, i) => (
                    <span 
                        key={trait} 
                        className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-white/5 text-[10px] font-bold text-zinc-300 uppercase tracking-wide hover:border-brand-accent/30 transition-colors cursor-default"
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        {trait}
                    </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Right: Interests Cards */}
        <div className={`w-full md:w-1/3 flex flex-col gap-4 transition-all duration-1000 delay-500 z-10 ${isTypingComplete ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             {/* Music */}
             <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-brand-accent/30 transition-colors group/card">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-800 text-brand-accent group-hover/card:bg-brand-accent group-hover/card:text-zinc-900 transition-colors">
                        <Music size={16} />
                    </div>
                    <h4 className="text-xs font-black text-zinc-200 uppercase">Musician</h4>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                    Former guitarist & ensemble leader. Performed with <span className="text-zinc-300">Tuna</span>, <span className="text-zinc-300">Eden Ben Zaken</span>, and <span className="text-zinc-300">Subliminal</span>.
                </p>
             </div>

             {/* Gaming */}
             <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-brand-tech/30 transition-colors group/card">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-zinc-800 text-brand-tech group-hover/card:bg-brand-tech group-hover/card:text-zinc-900 transition-colors">
                        <Gamepad2 size={16} />
                    </div>
                    <h4 className="text-xs font-black text-zinc-200 uppercase">Gamer</h4>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                    Avid gamer passionate about system performance, hardware, and immersive tech.
                </p>
             </div>
        </div>
    </GlassCard>
  );
};

export default AboutSection;
