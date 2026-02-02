import React, { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import GlassCard from './GlassCard';

const TYPING_SPEED = 10; // ms per char

const BIO_TEXT = "Enthusiastic junior cybersecurity graduate seeking opportunities in both offensive and defensive security. I thrive on investigation and adapt quickly to complex technologies. A collaborative team player, I'm also enthusiastic about gaming and music.";

const AboutSection: React.FC = () => {
  const [text, setText] = useState('');
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
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <GlassCard 
      id="about-me"
      hoverable={false}
      className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[200px] flex flex-col gap-6 items-start relative"
    >
        {/* Glow behind */}
        <div className="absolute -left-10 -top-10 w-[200px] h-[200px] bg-brand-tech/5 rounded-full blur-[80px] pointer-events-none transition-colors duration-1000" />

        {/* Left: Bio Content */}
        <div className="flex-1 w-full space-y-4 z-10" ref={sectionRef}>
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/50 border border-white/5 transition-colors">
                   <User size={20} className="text-brand-accent transition-transform" />
                </div>
                <h3 className="text-sm font-black text-zinc-100 uppercase tracking-widest transition-colors">About Me</h3>
            </div>
            
            <div className="font-mono text-sm md:text-base text-zinc-400 leading-relaxed min-h-[60px]">
                <span className="text-brand-accent mr-3 select-none">{'>'}</span>
                {text}
                <span className="animate-pulse inline-block w-2.5 h-5 bg-brand-accent align-middle ml-1 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            </div>
        </div>
    </GlassCard>
  );
};

export default AboutSection;