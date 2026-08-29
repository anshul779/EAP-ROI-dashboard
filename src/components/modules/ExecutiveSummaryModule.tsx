import React from 'react';
import { KPICard } from '../common/KPICard';
import { Scorecard3Col } from '../common/Scorecard3Col';
import type { ScorecardItem } from '../common/Scorecard3Col';
import { ExecutiveAISummaryPanel } from '../common/ExecutiveAISummaryPanel';
import { getProgramConfig, getAllProgramsSummary, ORG_ENABLED_PROGRAMS, PROGRAM_PERFORMANCE_TABLE_DATA } from '../../data/programsConfig';
import { ORGANIZATIONS } from '../../data/mockData';
import type { KPICardData, ProgramId, FilterState } from '../../types';
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
  selectedProgram: ProgramId;
  filters: FilterState;
}

export const ExecutiveSummaryModule: React.FC<Props> = ({ onDrillDown, selectedProgram, filters }) => {
  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];
  const enabledProgramIds = ORG_ENABLED_PROGRAMS[filters.organizationId] || [];

  if (selectedProgram === 'all-programs') {
    // ---------------------------------------------------------
    // "All Programs" view
    // ---------------------------------------------------------
    const summary = getAllProgramsSummary(enabledProgramIds, currentOrg.totalEmployees);

    const portfolioKPIs: KPICardData[] = [
      {
        id: 'all-roi',
        title: 'Overall Portfolio ROI',
        kicker: 'TOTAL YIELD MULTIPLE',
        value: `${summary.roiRatio.toFixed(2)}×`,
        change: 14.8,
        changeLabel: 'across portfolio',
        trend: 'up',
        isGoodTrend: true,
        sparklineData: [3.4, 3.6, 3.8, 3.9, 4.0, 4.05, summary.roiRatio],
        description: 'Aggregate ROI calculated across all active enabled wellness programs for this organization.',
        icon: 'TrendingUp',
      },
      {
        id: 'all-investment',
        title: 'Total Portfolio Cost',
        kicker: 'ANNUAL INVESTMENT',
        value: summary.totalCost.toLocaleString('en-US'),
        prefix: '$',
        change: -1.2,
        changeLabel: 'optimized budget',
        trend: 'down',
        isGoodTrend: true,
        sparklineData: [1650, 1630, 1610, 1600, 1590, 1580, summary.totalCost / 1000],
        description: 'Sum of all active contracts and program investments.',
        icon: 'Wallet',
      },
      {
        id: 'all-savings',
        title: 'Estimated Return',
        kicker: 'GROSS SAVINGS & IMPACT',
        value: summary.totalReturn.toLocaleString('en-US'),
        prefix: '$',
        change: 18.2,
        changeLabel: 'claims & sick leave saved',
        trend: 'up',
        isGoodTrend: true,
        sparklineData: [5000, 5200, 5500, 5800, 6100, 6300, summary.totalReturn / 1000],
        description: 'Total savings from claims cost avoidance, absenteeism reduction, and productivity recovery.',
        icon: 'DollarSign',
      },
      {
        id: 'all-reach',
        title: 'Overall Program Reach',
        kicker: 'WORKFORCE REGISTERED',
        value: `${summary.averageParticipation}%`,
        change: 9.5,
        changeLabel: 'active enrollees',
        trend: 'up',
        isGoodTrend: true,
        sparklineData: [58, 60, 63, 65, 68, 70, parseFloat(summary.averageParticipation)],
        description: 'Average registration or enrollment rate across all enabled wellness platforms.',
        icon: 'UserCheck',
      },
    ];

    // Secondary row of KPIs
    const secondaryKPIs: KPICardData[] = [
      {
        id: 'all-eligible',
        title: 'Eligible Employees',
        kicker: 'TOTAL ELIGIBLE LIFES',
        value: currentOrg.totalEmployees.toLocaleString('en-US'),
        change: 8.5,
        changeLabel: '100% active licenses',
        trend: 'up',
        isGoodTrend: true,
        sparklineData: [16000, 16500, 17000, 17500, 17800, 18200, currentOrg.totalEmployees],
        icon: 'Users',
      },
      {
        id: 'all-active',
        title: 'Active Participants',
        kicker: 'PORTFOLIO MAU',
        value: summary.activeParticipantsCount.toLocaleString('en-US'),
        change: 16.2,
        changeLabel: 'weekly active loggers',
        trend: 'up',
        isGoodTrend: true,
        sparklineData: [18000, 20000, 22000, 24000, 26000, 27500, summary.activeParticipantsCount],
        icon: 'Activity',
      },
      {
        id: 'all-engagement',
        title: 'Employee Satisfaction',
        kicker: 'AVERAGE CSAT RATING',
        value: `${(parseFloat(summary.averageEngagement) / 20).toFixed(2)} / 5.0`,
        change: 2.4,
        changeLabel: `${summary.averageEngagement}% positive`,
        trend: 'up',
        isGoodTrend: true,
        sparklineData: [4.6, 4.65, 4.7, 4.72, 4.75, 4.78, parseFloat(summary.averageEngagement) / 20],
        icon: 'Star',
      },
    ];

    // Aggregate ROI Trend Series
    const periods = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026'];
    const aggregatedTrend = periods.map((period) => {
      let cost = 0;
      let netReturn = 0;
      enabledProgramIds.forEach((pId) => {
        const config = getProgramConfig(pId);
        const item = config.roiTrendSeries.find((t) => t.period === period);
        if (item) {
          cost += item.cost;
          netReturn += item.netReturn;
        }
      });
      return { period, cost, netReturn };
    });

    // Program Performance Table Data (filtered by enabled programs for this org)
    const enabledTableRows = PROGRAM_PERFORMANCE_TABLE_DATA.filter((row) =>
      enabledProgramIds.includes(row.id as ProgramId)
    );

    const scorecardItems: ScorecardItem[] = [
      {
        icon: 'Award',
        title: `Portfolio Yield (${summary.roiRatio.toFixed(2)}x ROI)`,
        badge: 'Validated',
        description: `Your enterprise achieves $${summary.roiRatio.toFixed(2)} in cost avoidance and productivity gains for every $1 invested.`,
      },
      {
        icon: 'CheckCircle2',
        title: `Reach & Adoption (${summary.averageParticipation}%)`,
        badge: 'On Target',
        description: `${summary.averageParticipation}% of the eligible workforce is enrolled in at least one wellness program.`,
      },
      {
        icon: 'Smile',
        title: `Employee CSAT (${(parseFloat(summary.averageEngagement) / 20).toFixed(2)})`,
        badge: 'Top Tier',
        description: `Average satisfaction score of ${summary.averageEngagement}% across teletherapy, challenges, fitness, and telehealth.`,
      },
    ];

    return (
      <div className="space-y-10 animate-in fade-in duration-300">
        <ExecutiveAISummaryPanel selectedProgram={selectedProgram} organizationId={filters.organizationId} />

        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="mantra-kicker">EXECUTIVE WELLNESS SCORECARD</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Portfolio Core ROI & Value Indicators
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold hidden sm:inline">
              Portfolio aggregates across active programs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {portfolioKPIs.map((kpi) => (
              <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} isHero={true} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {secondaryKPIs.map((kpi) => (
              <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
            ))}
          </div>
        </div>

        {/* Charts & Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="mantra-card p-6 md:p-8 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="mantra-kicker">PORTFOLIO ROI TREND</div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                    Cumulative Wellness Savings vs Budget
                  </h3>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  +{summary.roiPercent.toFixed(1)}% Net Yield
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Total cost avoidance (absenteeism, healthcare claims, and turnover) compared against wellness portfolio budgets.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={aggregatedTrend} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="allNetGrad" x1="0" y1="0" x2="0" y2="1">
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
                      name === 'netReturn' ? 'Portfolio Return' : 'Portfolio Spend',
                    ]}
                  />
                  <Area type="monotone" dataKey="netReturn" stroke="#2196F3" strokeWidth={3.5} fill="url(#allNetGrad)" name="Net Return" />
                  <Area type="monotone" dataKey="cost" stroke="#F59E0B" strokeWidth={2} fill="none" name="Program Cost" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Program Performance Table Card */}
          <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mantra-kicker">WELLNESS PERFORMANCE MATRIX</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Active Program Performance
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Audited participation rates and outcomes across active enabled programs.
              </p>
            </div>

            <div className="overflow-x-auto flex-1 mt-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Program</th>
                    <th className="pb-3 text-right">Participation</th>
                    <th className="pb-3 text-right">Engagement</th>
                    <th className="pb-3 text-right">ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                  {enabledTableRows.map((row) => (
                    <tr key={row.id} className="hover:bg-blue-50/50 dark:hover:bg-[#15365F]/40 transition-colors">
                      <td className="py-3 font-bold text-slate-900 dark:text-white truncate max-w-[100px]">{row.name}</td>
                      <td className="py-3 text-right text-slate-600 dark:text-slate-300 font-medium">{row.participation}</td>
                      <td className="py-3 text-right font-semibold text-[#2196F3]">{row.engagement}</td>
                      <td className="py-3 text-right font-black text-emerald-600 dark:text-emerald-400">{row.roi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[10px] text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-white/10 mt-4">
              * Participation calculated as % of eligible seats registered.
            </div>
          </div>
        </div>

        <Scorecard3Col items={scorecardItems} />
      </div>
    );
  } else {
    // ---------------------------------------------------------
    // Individual Program view
    // ---------------------------------------------------------
    const config = getProgramConfig(selectedProgram);
    const heroKPIs = config.overviewKPIs;

    return (
      <div className="space-y-10 animate-in fade-in duration-300">
        <ExecutiveAISummaryPanel selectedProgram={selectedProgram} organizationId={filters.organizationId} />

        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="mantra-kicker">EXECUTIVE {config.name.toUpperCase()} SCORECARD</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Core {config.name} ROI & Value Indicators
              </h2>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold hidden sm:inline">
              Click any card for deep drill-down analytics
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
                  <div className="mantra-kicker">{config.name.toUpperCase()} ROI TREND</div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                      Quarterly Savings vs Programme Cost
                    </h3>
                  </div>
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  {config.name === 'Virtual Wellness Camp' ? '+16.5% Net Return' : '+18.2% YoY Net Return'}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Measurable value delivered by early wellness interventions compared to platform costs.
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={config.roiTrendSeries} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="programNetGrad" x1="0" y1="0" x2="0" y2="1">
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
                      name === 'netReturn' ? 'Net Return' : 'Programme Cost',
                    ]}
                  />
                  <Area type="monotone" dataKey="netReturn" stroke="#2196F3" strokeWidth={3.5} fill="url(#programNetGrad)" name="Net Return" />
                  <Area type="monotone" dataKey="cost" stroke="#F59E0B" strokeWidth={2} fill="none" name="Program Cost" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mantra-kicker">{config.name.toUpperCase()} CHANNEL MIX</div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Intake Channel Breakdown
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                How employees utilize available services and pathways.
              </p>
            </div>

            <div className="h-60 w-full my-2 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={config.referralSourceDonut}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {config.referralSourceDonut.map((entry, index) => (
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
                <span className="text-3xl font-black text-slate-900 dark:text-white">{config.referralPercentage}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">{config.referralLabel}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-4 border-t border-slate-100 dark:border-white/10">
              {config.referralSourceDonut.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="truncate text-slate-700 dark:text-slate-300 font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Scorecard3Col items={config.scorecardItems} />
      </div>
    );
  }
};
export default ExecutiveSummaryModule;
