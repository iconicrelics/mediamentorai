import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  tilt = false
}) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 ${
        hover ? 'hover:border-electric-purple/30 hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] hover:-translate-y-1' : ''
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d',
      } : undefined}
    >
      <div style={tilt ? { transform: 'translateZ(40px)' } : undefined}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
