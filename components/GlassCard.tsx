
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  // Added id support for anchor navigation
  id?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = true,
  id
}) => {
  return (
    <motion.div
      // Apply the id to the actual DOM element
      id={id}
      whileHover={hoverable ? { 
        scale: 1.01,
        borderColor: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 0 30px rgba(56, 189, 248, 0.05)'
      } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-zinc-900/60 backdrop-blur-xl
        border border-white/5 
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        rounded-2xl
        p-6
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Subtle border gradient effect */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
