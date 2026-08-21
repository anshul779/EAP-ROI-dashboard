import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const ProductivityImpactModule: React.FC<Props> = ({ onDrillDown }) => {
  const prodKPIs: KPICardData[] = [
    {
      id: 'pi-absenteeism',
      title: 'Absenteeism Reduction',
      kicker: 'SICK DAYS RECOVERED',
      value: '3.4 Days / Emp',
      change: -28.4,
      changeLabel: '62,900 sick hours saved',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [5.2, 4.8, 4.4, 4.1, 3.8, 3.6, 3.4],
      icon: 'CalendarX',
    },
    {
      id: 'pi-presenteeism',
      title: 'Presenteeism Recovery',
      kicker: 'WORKPLACE FOCUS GAIN',
      value: '+18.6%',
      change: 15.2,
      changeLabel: 'effective work capacity',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [8, 10, 12, 14, 16, 17.5, 18.6],
      icon: 'Zap',
    },
    {
      id: 'pi-performance',
      title: 'Performance Score Boost',
      kicker: 'ANNUAL REVIEWS',
      value: '+14.2%',
      change: 9.8,
      changeLabel: 'exceeding targets',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [6, 8, 9.5, 11, 12.2, 13.5, 14.2],
      icon: 'TrendingUp',
    },
    {
      id: 'pi-value',
      title: 'Total Productivity Value',
      kicker: 'FINANCIAL BENEFIT',
      value: '$1,220,000',
      change: 22.4,
      changeLabel: 'annual labor value',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [720, 810, 920, 1010, 1100, 1170, 1220],
      icon: 'DollarSign',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <div className="mantra-kicker mb-1">WORKPLACE PRODUCTIVITY & OUTPUT</div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Time Gains & Presenteeism Recovery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {prodKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>
    </div>
  );
};
