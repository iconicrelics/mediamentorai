import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '', 
  animated = true 
}) => {
  return (
    <span 
      className={`bg-gradient-to-r from-electric-purple via-electric-blue to-electric-cyan text-transparent bg-clip-text ${
        animated ? 'animate-gradient-shift' : ''
      } ${className}`}
      style={{ backgroundSize: '200% auto' }}
    >
      {children}
    </span>
  );
};

export default GradientText;
