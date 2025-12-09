import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean; 
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = true // Default to true (light text) for dark theme app
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[align];

  return (
    <div className={`mb-16 ${alignClass} animate-fade-in`}>
      <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-2xl mx-auto ${light ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-brand-gold mt-6 ${align === 'center' ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};

export default SectionHeading;