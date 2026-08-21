import React from 'react';

interface WaveDividerProps {
  fillColor?: string;
  className?: string;
  inverted?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = '#0A2E5C',
  className = '',
  inverted = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className} ${
        inverted ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 md:h-12"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
