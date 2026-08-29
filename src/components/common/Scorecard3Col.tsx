import React from 'react';
import * as Icons from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

export interface ScorecardItem {
  icon: string;
  title: string;
  badge?: string;
  description: string;
}

interface Scorecard3ColProps {
  kicker?: string;
  title?: string;
  items: ScorecardItem[];
  className?: string;
}

export const Scorecard3Col: React.FC<Scorecard3ColProps> = ({
  kicker = 'THE MANTRACARE ADVANTAGE',
  title = 'Executive ROI & Value Scorecard',
  items,
  className = '',
}) => {
  return (
    <div className={`mantra-card p-6 relative overflow-hidden ${className}`}>
      {/* Texture background motif */}
      <div className="absolute top-4 right-4 text-blue-100 dark:text-blue-900/20 text-6xl font-black select-none pointer-events-none opacity-30">
        +
      </div>

      <div className="mb-6">
        {kicker && <div className="mantra-kicker">{kicker}</div>}
        {title && (
          <div className="flex items-center gap-1.5">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {title}
            </h2>
            <InfoTooltip title={dashboardInfo.scorecard.title} description={dashboardInfo.scorecard.description} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const IconComp =
            (Icons as unknown as Record<string, React.ElementType>)[item.icon] || Icons.CheckCircle2;

          return (
            <div
              key={idx}
              className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <div className="mantra-icon-badge w-12 h-12 shrink-0">
                <IconComp className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
