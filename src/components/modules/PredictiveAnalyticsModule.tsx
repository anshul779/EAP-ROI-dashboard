import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const PredictiveAnalyticsModule: React.FC<Props> = ({ onDrillDown }) => {
  const predKPIs: KPICardData[] = [
    {
      id: 'pa-future-roi',
      title: 'Projected 12-Month ROI',
      kicker: 'ML FORECAST MODEL',
      value: '5.8×',
      change: 20.8,
      changeLabel: 'projected growth',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.8, 5.0, 5.2, 5.4, 5.5, 5.7, 5.8],
      icon: 'LineChart',
    },
    {
      id: 'pa-savings-forecast',
      title: '12-Month Expected Savings',
      kicker: 'FINANCIAL PROJECTION',
      value: '$4,180,000',
      change: 21.0,
      changeLabel: 'projected gross return',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [3450, 3600, 3750, 3900, 4000, 4100, 4180],
      icon: 'TrendingUp',
    },
    {
      id: 'pa-burnout-prevented',
      title: 'Predicted Attrition Risk',
      kicker: 'PREDICTIVE RESIGNATIONS',
      value: '142 Tech Leads',
      change: -18.4,
      changeLabel: 'early intervention target',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [190, 180, 170, 160, 152, 146, 142],
      icon: 'AlertTriangle',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <div className="mantra-kicker mb-1">PREDICTIVE MACHINE LEARNING</div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          12-Month Future Value & Attrition Risk Forecasts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {predKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>
    </div>
  );
};
