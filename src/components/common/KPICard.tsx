import React from 'react';
import * as Icons from 'lucide-react';
import type { KPICardData } from '../../types';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { InfoTooltip } from './InfoTooltip';
import { getKpiInfo } from '../../data/dashboardInfo';

interface KPICardProps {
  data: KPICardData;
  onDrillDown?: (data: KPICardData) => void;
  accentColor?: string;
  isHero?: boolean;
}

export const KPICard: React.FC<KPICardProps> = ({
  data,
  onDrillDown,
  accentColor = '#2196F3',
  isHero = false,
}) => {
  // Dynamically map icon name from Lucide
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[data.icon] || Icons.HelpCircle;
  const info = getKpiInfo(data);

  // Formatted sparkline points for Recharts
  const chartData = data.sparklineData.map((val, idx) => ({ idx, val }));

  return (
    <div
      onClick={() => onDrillDown && onDrillDown(data)}
      className={`mantra-card mantra-card-hover relative flex flex-col justify-between cursor-pointer group overflow-hidden ${
        isHero ? 'px-4 py-5 sm:p-6 md:p-8' : 'px-4 py-5 sm:p-6'
      }`}
    >
      {/* Texture background motif */}
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-blue-50/50 dark:bg-blue-900/10 pointer-events-none group-hover:scale-125 transition-transform duration-300" />

      {/* Header Row */}
      <div className="flex items-start justify-between z-10">
        <div>
          {data.kicker && <div className="mantra-kicker mb-1">{data.kicker}</div>}
          <div className="flex items-center gap-1.5">
            <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-base md:text-lg leading-snug">
              {data.title}
            </h3>
            <InfoTooltip title={info.title} description={info.description} />
          </div>
        </div>

        {/* Signature MantraCare Circular Icon Badge */}
        <div className="mantra-icon-badge w-11 h-11 shrink-0 ml-2 shadow-sm">
          <IconComponent className="w-5 h-5 stroke-[2]" />
        </div>
      </div>

      {/* KPI Value & Trend Badge (Typography: 40–48px as specified in Redesign prompt) */}
      <div className="my-5 z-10">
        <div className="flex items-baseline space-x-1">
          {data.prefix && (
            <span className="text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400">
              {data.prefix}
            </span>
          )}
          <span className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black tracking-tight text-slate-900 dark:text-white font-sans truncate">
            {data.value}
          </span>
          {data.suffix && (
            <span className="text-lg font-bold text-slate-500 dark:text-slate-400">
              {data.suffix}
            </span>
          )}
        </div>

        {/* Trend Indicator Badge & Insight */}
        <div className="flex items-center space-x-2 mt-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
              data.isGoodTrend
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                : 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300'
            }`}
          >
            {data.trend === 'up' ? (
              <Icons.TrendingUp className="w-3.5 h-3.5 mr-1 stroke-[2.5]" />
            ) : (
              <Icons.TrendingDown className="w-3.5 h-3.5 mr-1 stroke-[2.5]" />
            )}
            {data.change > 0 ? `+${data.change}%` : `${data.change}%`}
          </span>
          {data.changeLabel && (
            <span className="text-xs text-slate-500 dark:text-slate-300 font-medium truncate">
              {data.changeLabel}
            </span>
          )}
        </div>
      </div>

      {/* Sparkline & Drill-down Footer */}
      <div className="mt-2 pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between z-10">
        <div className="w-32 h-10 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`grad-${data.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accentColor} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={accentColor} stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="val"
                stroke={accentColor}
                strokeWidth={2.5}
                fillOpacity={1}
                fill={`url(#grad-${data.id})`}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <button
          type="button"
          className="inline-flex items-center text-xs font-extrabold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform"
        >
          <span>Drill down</span>
          <Icons.ChevronRight className="w-3.5 h-3.5 ml-0.5" />
        </button>
      </div>
    </div>
  );
};
