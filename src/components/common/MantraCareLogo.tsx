import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const MantraCareLogo: React.FC<LogoProps> = ({
  className = '',
  isDark = false,
  size = 'md',
}) => {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textClass = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';

  return (
    <div className={`flex items-center space-x-2.5 select-none ${className}`}>
      {/* MantraCare icon */}
      <img src="/mantracare-icon.svg" alt="" className={`${iconSize} shrink-0`} />

      {/* Official MantraCare Typography */}
      <div className={`font-bold tracking-tight ${textClass} font-sans leading-none flex items-center`}>
        <span className={isDark ? 'text-white' : 'text-[#0A2E5C]'}>Mantra</span>
        <span className="text-[#00B2FF]">Care</span>
      </div>
    </div>
  );
};

