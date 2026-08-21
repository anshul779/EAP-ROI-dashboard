import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';
import { dashboardInfo, type DashboardInfoKey } from '../../data/dashboardInfo';

interface AccordionCardProps {
  id: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: string;
  infoKey?: DashboardInfoKey;
}

export const AccordionCard: React.FC<AccordionCardProps> = ({
  title,
  badge,
  badgeColor = 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
  subtitle,
  children,
  defaultExpanded = false,
  icon,
  infoKey,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const IconComp = icon
    ? (Icons as unknown as Record<string, React.ElementType>)[icon] || Icons.Info
    : null;

  return (
    <div className="mantra-card overflow-hidden transition-all duration-200">
      {/* Header Bar */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mantra-accordion-header w-full p-4 md:p-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
      >
        <div className="flex items-center space-x-3 pr-4">
          {IconComp && (
            <div className="mantra-icon-badge w-9 h-9 shrink-0">
              <IconComp className="w-5 h-5 stroke-[1.75]" />
            </div>
          )}
          <div>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg">
                {title}
              </h3>
              {infoKey && (
                <InfoTooltip
                  title={dashboardInfo[infoKey].title}
                  description={dashboardInfo[infoKey].description}
                />
              )}
              {badge && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeColor}`}>
                  {badge}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="mantra-icon-badge w-8 h-8 shrink-0 ml-2">
          {isExpanded ? (
            <Icons.Minus className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <Icons.Plus className="w-4 h-4 stroke-[2.5]" />
          )}
        </div>
      </button>

      {/* Expandable Body */}
      {isExpanded && (
        <div className="p-4 md:p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/80 animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
};
