import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'gold' | 'violet' | 'outline';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'gold', 
  className = '', 
  onClick,
  fullWidth = false 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 transform hover:scale-105 rounded-full shadow-lg";
  
  const variants = {
    gold: "bg-brand-gold text-brand-black hover:bg-brand-goldHover shadow-brand-gold/20",
    violet: "bg-brand-violet text-white hover:bg-brand-violetHover shadow-brand-violet/30",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(WHATSAPP_LINK, '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;