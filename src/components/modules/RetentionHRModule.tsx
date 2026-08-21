import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const RetentionHRModule: React.FC<Props> = ({ onDrillDown }) => {
  const hrKPIs: KPICardData[] = [
    {
      id: 'hr-retention',
      title: 'Employee Retention Rate',
      kicker: 'TALENT PRESERVATION',
      value: '94.2%',
      change: 4.8,
      changeLabel: 'high-performer retention',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [88, 89.5, 91, 92, 93, 93.8, 94.2],
      icon: 'UserCheck',
    },
    {
      id: 'hr-attrition',
      title: 'Voluntary Attrition Drop',
      kicker: 'TURNOVER REDUCTION',
      value: '-24.5%',
      change: -24.5,
      changeLabel: '18 resignations prevented',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [14.2, 13.0, 12.1, 11.2, 10.4, 9.8, 9.2],
      icon: 'UserX',
    },
    {
      id: 'hr-enps',
      title: 'Wellness eNPS Score',
      kicker: 'EMPLOYEE ADVOCACY',
      value: '+62',
      change: 14.0,
      changeLabel: 'world-class advocacy',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [38, 43, 48, 52, 56, 59, 62],
      icon: 'Heart',
    },
    {
      id: 'hr-turnover-cost',
      title: 'Turnover Replacement Saved',
      kicker: 'RECRUITMENT COST SAVING',
      value: '$396,000',
      change: 18.9,
      changeLabel: 'hiring & onboarding saved',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [220, 260, 300, 330, 360, 380, 396],
      icon: 'DollarSign',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <div className="mantra-kicker mb-1">HUMAN RESOURCES & ATTRITION</div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Talent Retention & Turnover Cost Avoidance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hrKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>
    </div>
  );
};
