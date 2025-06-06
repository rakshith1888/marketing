
import { ReactNode } from 'react';

interface FuturisticCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'neon' | 'hologram';
  hover?: boolean;
}

const FuturisticCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true 
}: FuturisticCardProps) => {
  const baseClasses = "glass-card p-6 transition-all duration-300";
  
  const variantClasses = {
    default: "",
    neon: "neon-glow",
    hologram: "hologram-effect"
  };
  
  const hoverClasses = hover ? "hover:bg-white/10 hover:border-brand-purple/30 hover:scale-105" : "";
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;
