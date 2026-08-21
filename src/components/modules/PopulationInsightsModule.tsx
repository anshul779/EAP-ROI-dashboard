import React from 'react';
import * as Icons from 'lucide-react';
import { KPICard } from '../common/KPICard';
import type { KPICardData, FilterState } from '../../types';

interface Props {
  filters: FilterState;
  onDrillDown: (card: KPICardData) => void;
}

export const PopulationInsightsModule: React.FC<Props> = ({ filters, onDrillDown }) => {
  const populationKPIs: KPICardData[] = [
    {
      id: 'pop-high-risk',
      title: 'High-Risk Population',
      kicker: 'CERA SCORE ALERT',
      value: '8.4%',
      change: -12.2,
      changeLabel: '1,554 high-stress lives',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [14, 13, 12, 11, 10, 9.2, 8.4],
      icon: 'AlertTriangle',
    },
    {
      id: 'pop-chronic',
      title: 'Chronic Risk Managed',
      kicker: 'PREVENTIVE CARE',
      value: '2,420 Lives',
      change: 18.5,
      changeLabel: 'diabetes & cardio care',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [1600, 1800, 1950, 2100, 2250, 2350, 2420],
      icon: 'HeartPulse',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <div className="mantra-kicker mb-1">DEMOGRAPHIC & POPULATION HEALTH</div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Multi-Dimensional Demographic Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {populationKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>

      <div className="mantra-card p-6 border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/40">
        <div className="flex items-center space-x-3 text-blue-900 dark:text-blue-200">
          <Icons.Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <p className="text-xs font-medium leading-relaxed">
            Currently displaying population data scoped to: <strong>{filters.organizationId}</strong> | Date Range: <strong>{filters.dateRange}</strong> | Country: <strong>{filters.country}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
