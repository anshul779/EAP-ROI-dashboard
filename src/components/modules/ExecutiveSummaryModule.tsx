import React from 'react';
import { KPICard } from '../common/KPICard';
import { Scorecard3Col } from '../common/Scorecard3Col';
import type { ScorecardItem } from '../common/Scorecard3Col';
import { ExecutiveAISummaryPanel } from '../common/ExecutiveAISummaryPanel';
import {
  EXEC_KPIS,
  ROI_TREND_SERIES,
  REFERRAL_SOURCE_DONUT,
  EAP_PROGRAM,
  FINANCIAL_FORMULA,
} from '../../data/mockData';
import { formatROIMultiple } from '../../data/roiCalculations';
import type { KPICardData } from '../../types';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const ExecutiveSummaryModule: React.FC<Props> = ({ onDrillDown }) => {
  const heroKPIs = EXEC_KPIS.slice(0, 4);

  const scorecardItems: ScorecardItem[] = [
    {
      icon: 'Award',
      title: `EAP Financial ROI (${formatROIMultiple(FINANCIAL_FORMULA.roiRatio)})`,
      badge: 'Validated',
      description: `For every $1 invested in the EAP, your organisation achieves $${FINANCIAL_FORMULA.returnPerDollar.toFixed(2)} in healthcare savings, absenteeism reduction, and productivity gains.`,
    },
    {
      icon: 'Activity',
      title: `Clinical Impact (${EAP_PROGRAM.clinicalImprovementRate}%)`,
      badge: 'Top Decile',
      description: `Statistically significant PHQ-9 (${EAP_PROGRAM.phq9Improvement}%) and GAD-7 (${EAP_PROGRAM.gad7Improvement}%) reduction within 6 EAP counselling sessions.`,
    },
    {
      icon: 'Users',
      title: `EAP Adoption (${((EAP_PROGRAM.registeredEmployees / EAP_PROGRAM.eligibleEmployees) * 100).toFixed(1)}%)`,
      badge: '3.2× EAP Avg',
      description: `${EAP_PROGRAM.registeredEmployees.toLocaleString()} employees registered with ${EAP_PROGRAM.monthlyActiveUsers.toLocaleString()} monthly active EAP users — ${EAP_PROGRAM.counsellingSessions.toLocaleString()} sessions delivered.`,
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      <ExecutiveAISummaryPanel />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="mantra-kicker">EXECUTIVE EAP SCORECARD</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Core EAP ROI & Value Indicators
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Click any hero card for deep drill-down analytics
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} isHero={true} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="mantra-card p-6 md:p-8 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="mantra-kicker">EAP ROI TREND</div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Quarterly EAP Savings vs Programme Cost
                  </h3>
                  <InfoTooltip title={dashboardInfo.roiTrend.title} description={dashboardInfo.roiTrend.description} />
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                +18.2% YoY Net Return
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Is our EAP delivering measurable ROI? Cumulative healthcare savings and productivity gains vs contracted EAP fees.
            </p>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ROI_TREND_SERIES} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="execNetGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2196F3" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#2196F3" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="period" stroke="#94A3B8" fontSize={11} />
                <YAxis stroke="#94A3B8" fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#102A4C',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '16px',
                    color: '#fff',
                    fontSize: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  }}
                  formatter={(val: any, name: any) => [
                    `$${Number(val || 0).toLocaleString()}`,
                    name === 'netReturn' ? 'Net EAP Return' : 'Programme Cost',
                  ]}
                />
                <Area type="monotone" dataKey="netReturn" stroke="#2196F3" strokeWidth={3.5} fill="url(#execNetGrad)" name="Net Return" />
                <Area type="monotone" dataKey="cost" stroke="#F59E0B" strokeWidth={2} fill="none" name="Program Cost" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="mantra-kicker">EAP REFERRAL SOURCE</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Intake Channel Breakdown
              </h3>
              <InfoTooltip title={dashboardInfo.referralSource.title} description={dashboardInfo.referralSource.description} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              How are employees accessing EAP? Self-referral vs manager referral mix across {EAP_PROGRAM.counsellingSessions.toLocaleString()} sessions.
            </p>
          </div>

          <div className="h-60 w-full my-2 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={REFERRAL_SOURCE_DONUT}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {REFERRAL_SOURCE_DONUT.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#102A4C',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                  formatter={(v: any) => [`${v}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black text-slate-900 dark:text-white">83.6%</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">Self-Referral</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-4 border-t border-slate-100 dark:border-white/10">
            {REFERRAL_SOURCE_DONUT.slice(0, 4).map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="truncate text-slate-700 dark:text-slate-300 font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Scorecard3Col items={scorecardItems} />
    </div>
  );
};
