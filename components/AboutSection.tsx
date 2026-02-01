
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import GlassCard from './GlassCard';

const TYPING_SPEED = 25; // ms per char

const BIO_TEXT = "I'm an enthusiastic junior cybersecurity graduate seeking opportunities in both offensive and defensive security. I thrive on investigation, and I have a proven ability to learn and adapt to new complex technologies.  Having worked and studied in teams my whole life, I deeply value collaboration and clear communication. Outside of security, I apply my competitive drive to gaming and find creative focus through music, both of which keep my problem-solving skills sharp and my perspective fresh.";

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
      className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[250px] flex flex-col gap-8 items-start relative group"
    >
        {/* Glow behind */}
        <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-brand-tech/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-tech/10 transition-colors duration-1000" />

        {/* Left: Bio Content */}
        <div className="flex-1 w-full space-y-6 z-10" ref={sectionRef}>
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest">About Me</h3>
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
    </GlassCard>
  );
};

export default AboutSection;
