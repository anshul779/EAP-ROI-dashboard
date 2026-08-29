import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData, ProgramId, FilterState } from '../../types';
import { getProgramConfig, getAllProgramsSummary, ORG_ENABLED_PROGRAMS } from '../../data/programsConfig';
import { ORGANIZATIONS } from '../../data/mockData';
import { formatROIMultiple, formatCompactCurrency } from '../../data/roiCalculations';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts';

interface Props {
  onDrillDown: (card: KPICardData) => void;
  selectedProgram: ProgramId;
  filters: FilterState;
}

export const FinancialROIModule: React.FC<Props> = ({ onDrillDown, selectedProgram, filters }) => {
  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];
  const enabledProgramIds = ORG_ENABLED_PROGRAMS[filters.organizationId] || [];

  if (selectedProgram === 'all-programs') {
    // ---------------------------------------------------------
    // "All Programs" view - Portfolio financial model
    // ---------------------------------------------------------
    const summary = getAllProgramsSummary(enabledProgramIds, currentOrg.totalEmployees);

    const portfolioFinancialKPIs: KPICardData[] = [
      { id: 'all-fin-cost', title: 'Total Portfolio Spend', kicker: 'ANNUAL BUDGET', value: summary.totalCost.toLocaleString('en-US'), prefix: '$', change: -1.2, changeLabel: 'optimized across suite', trend: 'down', isGoodTrend: true, sparklineData: [1650, 1630, 1610, 1600, 1590, 1580, summary.totalCost / 1000], icon: 'Wallet' },
      { id: 'all-fin-savings', title: 'Healthcare Savings', kicker: 'MEDICAL CLAIMS AVOIDED', value: summary.totalHealthcareSavings.toLocaleString('en-US'), prefix: '$', change: 22.4, changeLabel: 'proactive care triage', trend: 'up', isGoodTrend: true, sparklineData: [2100, 2300, 2480, 2600, 2750, 2820, summary.totalHealthcareSavings / 1000], icon: 'DollarSign' },
      { id: 'all-fin-absenteeism', title: 'Absenteeism Saved', kicker: 'WORKHOURS RECOVERED', value: summary.totalAbsenteeismSavings.toLocaleString('en-US'), prefix: '$', change: 16.5, changeLabel: 'reduced medical leave', trend: 'up', isGoodTrend: true, sparklineData: [800, 920, 1050, 1140, 1220, 1260, summary.totalAbsenteeismSavings / 1000], icon: 'CalendarX' },
      { id: 'all-fin-roi', title: 'Portfolio ROI', kicker: 'SAVINGS RATIO', value: `${summary.roiRatio.toFixed(2)}×`, change: 14.8, changeLabel: `$${summary.netSavings.toLocaleString()} net return`, trend: 'up', isGoodTrend: true, sparklineData: [3.4, 3.6, 3.8, 3.9, 4.0, 4.05, summary.roiRatio], icon: 'TrendingUp' }
    ];

    // Combine 5-Year projections from enabled programs
    const fiveYearProjection = [
      { year: 'Year 1 (Actual)', investment: summary.totalCost, cumulativeSavings: summary.totalReturn, netRoi: `${summary.roiRatio.toFixed(2)}x` },
      { year: 'Year 2 (Projected)', investment: summary.totalCost * 1.02, cumulativeSavings: summary.totalReturn * 2.1, netRoi: `${( (summary.totalReturn * 2.1) / (summary.totalCost * 1.02) ).toFixed(2)}x` },
      { year: 'Year 3 (Projected)', investment: summary.totalCost * 1.04, cumulativeSavings: summary.totalReturn * 3.3, netRoi: `${( (summary.totalReturn * 3.3) / (summary.totalCost * 1.04) ).toFixed(2)}x` },
      { year: 'Year 4 (Projected)', investment: summary.totalCost * 1.06, cumulativeSavings: summary.totalReturn * 4.6, netRoi: `${( (summary.totalReturn * 4.6) / (summary.totalCost * 1.06) ).toFixed(2)}x` },
      { year: 'Year 5 (Projected)', investment: summary.totalCost * 1.08, cumulativeSavings: summary.totalReturn * 6.0, netRoi: `${( (summary.totalReturn * 6.0) / (summary.totalCost * 1.08) ).toFixed(2)}x` },
    ];

    // Combine department ROI data
    const deptMap: Record<string, { activeEmployees: number; claimsSaved: number; totalCost: number; returnVal: number }> = {};
    enabledProgramIds.forEach((pId) => {
      const config = getProgramConfig(pId);
      config.deptRoiData.forEach((row) => {
        if (!deptMap[row.department]) {
          deptMap[row.department] = { activeEmployees: 0, claimsSaved: 0, totalCost: 0, returnVal: 0 };
        }
        deptMap[row.department].activeEmployees = Math.max(deptMap[row.department].activeEmployees, row.activeEmployees);
        // parse claimsSaved (e.g. "$1,120,000" -> 1120000)
        const clm = parseInt(row.claimsSaved.replace(/[^0-9]/g, ''), 10) || 0;
        deptMap[row.department].claimsSaved += clm;
        deptMap[row.department].totalCost += config.roiFormula.programCost / 7; // distributed cost
        const roiRatioVal = parseFloat(row.totalRoi.replace('x', '')) || 3.5;
        deptMap[row.department].returnVal += (config.roiFormula.programCost / 7) * roiRatioVal;
      });
    });

    const deptRoiData = Object.keys(deptMap).map((dept) => {
      const item = deptMap[dept];
      const roiRatioVal = item.totalCost > 0 ? item.returnVal / item.totalCost : 0;
      return {
        department: dept,
        activeEmployees: item.activeEmployees,
        utilization: 'Active',
        claimsSaved: `$${item.claimsSaved.toLocaleString('en-US')}`,
        totalRoi: `${roiRatioVal.toFixed(1)}x`,
      };
    });

    return (
      <div className="space-y-10 animate-in fade-in duration-300">
        {/* Portfolio Value Equation Banner */}
        <div className="mantra-card p-6 md:p-8 border-t-4 border-t-blue-500 bg-gradient-to-br from-[#0A2E5C] via-[#102A4C] to-[#071C36] text-white relative overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="mantra-kicker text-blue-300">PORTFOLIO FINANCIAL MODEL</div>
              <h2 className="text-xl md:text-2xl font-extrabold mt-1">
                Enterprise Wellness Portfolio Financial Equation
              </h2>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950 shadow">
              {summary.roiRatio.toFixed(2)}x Return Ratio
            </span>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-3 lg:gap-4 text-center my-4">
            <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
              <div className="text-[10px] text-blue-300 uppercase font-bold">Healthcare Savings</div>
              <div className="text-lg font-black text-white mt-1">${summary.totalHealthcareSavings.toLocaleString('en-US')}</div>
            </div>
            <div className="text-xl font-bold text-blue-300 shrink-0">+</div>
            <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
              <div className="text-[10px] text-blue-300 uppercase font-bold">Absenteeism Saved</div>
              <div className="text-lg font-black text-white mt-1">${summary.totalAbsenteeismSavings.toLocaleString('en-US')}</div>
            </div>
            <div className="text-xl font-bold text-blue-300 shrink-0">+</div>
            <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
              <div className="text-[10px] text-blue-300 uppercase font-bold">Productivity Gains</div>
              <div className="text-lg font-black text-white mt-1">${(summary.totalPresenteeismSavings + summary.totalProductivitySavings).toLocaleString('en-US')}</div>
            </div>
            <div className="text-xl font-bold text-blue-300 shrink-0">+</div>
            <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
              <div className="text-[10px] text-blue-300 uppercase font-bold">Retention Saved</div>
              <div className="text-lg font-black text-white mt-1">${summary.totalTurnoverSavings.toLocaleString('en-US')}</div>
            </div>
            <div className="text-2xl font-black text-emerald-400 font-mono shrink-0">=</div>
            <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 w-full lg:w-auto min-w-[200px] shadow-2xl shrink-0">
              <div className="text-[10px] text-emerald-300 uppercase font-extrabold">Total Gross return</div>
              <div className="text-2xl font-black text-emerald-400 mt-1">${summary.totalReturn.toLocaleString('en-US')}</div>
              <div className="text-[11px] text-emerald-200 mt-0.5">
                Net: {formatCompactCurrency(summary.netSavings)} on {formatCompactCurrency(summary.totalCost)} spend · ${summary.roiRatio.toFixed(2)} per $1 invested
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mantra-kicker mb-1">PORTFOLIO FINANCIAL ROI INDICATORS</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Core Portfolio Financial Performance Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioFinancialKPIs.map((kpi) => (
              <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mantra-card p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="mantra-kicker">DEPARTMENTAL PORTFOLIO RETURN</div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Which Business Units Benefit Most?
                </h3>
              </div>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">7 Departments</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Department</th>
                    <th className="pb-3">Active Emp</th>
                    <th className="pb-3">Portfolio Utilisation</th>
                    <th className="pb-3">Claims Saved</th>
                    <th className="pb-3">Total ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                  {deptRoiData.map((row) => (
                    <tr key={row.department} className="hover:bg-blue-50/50 dark:hover:bg-[#15365F]/40 transition-colors">
                      <td className="py-3.5 font-bold text-slate-900 dark:text-white">{row.department}</td>
                      <td className="py-3.5 text-slate-600 dark:text-slate-300 font-medium">{row.activeEmployees.toLocaleString()}</td>
                      <td className="py-3.5 font-semibold text-[#2196F3]">{row.utilization}</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">{row.claimsSaved}</td>
                      <td className="py-3.5 font-black text-slate-900 dark:text-white">{row.totalRoi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mantra-kicker">PORTFOLIO ROI PROJECTION</div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                5-Year Cumulative Savings Forecast
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Forecasted savings based on combined platform adoption and outcomes.
              </p>
            </div>

            <div className="h-72 w-full my-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fiveYearProjection} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="year" stroke="#94A3B8" fontSize={11} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickFormatter={(v) => `$${v / 1000000}M`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#102A4C',
                      borderColor: 'rgba(255,255,255,0.15)',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                    formatter={(val: any) => [`$${(Number(val || 0) / 1000000).toFixed(2)}M`, 'Cumulative Savings']}
                  />
                  <Line type="monotone" dataKey="cumulativeSavings" stroke="#22C55E" strokeWidth={4} dot={{ r: 6 }} name="Cumulative Savings" />
                  <Line type="monotone" dataKey="investment" stroke="#2196F3" strokeWidth={2.5} strokeDasharray="5 5" name="Annual Investment" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // ---------------------------------------------------------
    // Individual Program view
    // ---------------------------------------------------------
    const config = getProgramConfig(selectedProgram);
    const cost = config.roiFormula.programCost;
    const totalReturn = config.roiFormula.healthcareCostReduction + config.roiFormula.reducedAbsenteeism + config.roiFormula.reducedPresenteeism + config.roiFormula.reducedTurnover + config.roiFormula.productivityGain;
    const ratio = cost > 0 ? totalReturn / cost : 0;

    // Define program-specific equation box details
    let term1Name = 'Healthcare Savings';
    let term1Val = config.roiFormula.healthcareCostReduction;
    let term2Name = 'Absenteeism Saved';
    let term2Val = config.roiFormula.reducedAbsenteeism;
    let term3Name = 'Productivity Gain';
    let term3Val = config.roiFormula.reducedPresenteeism + config.roiFormula.productivityGain;
    let term4Name = 'Retention Saved';
    let term4Val = config.roiFormula.reducedTurnover;

    let bannerTitle = `${config.name} Executive Financial Value Equation`;
    let kickerText = `AUDITED ${config.name.toUpperCase()} FINANCIAL MODEL`;

    if (selectedProgram === 'virtual-care') {
      term1Name = 'Healthcare Cost Avoided';
      term2Name = 'Reduced Unnecessary Visits';
      term2Val = config.roiFormula.reducedAbsenteeism; // matching spec mapping values
      term3Name = 'Productivity Impact';
      term3Val = config.roiFormula.reducedPresenteeism;
      term4Name = 'Utilization Savings';
      term4Val = config.roiFormula.productivityGain;
      bannerTitle = `Virtual Care & Telehealth Value Equation`;
    } else if (selectedProgram === 'health-checks') {
      term1Name = 'Early Risk Detection';
      term2Name = 'Preventive-Care Impact';
      term2Val = config.roiFormula.reducedAbsenteeism;
      term3Name = 'Follow-up Impact';
      term3Val = config.roiFormula.productivityGain;
      term4Name = 'Healthcare Savings';
      term4Val = 0; // only 3 terms practically needed or mapping to 0
      bannerTitle = `Corporate Health Checks Prevention Equation`;
    } else if (selectedProgram === 'nutrition-fitness') {
      term1Name = 'Healthcare Cost Reduction';
      term2Name = 'Productivity Impact';
      term2Val = config.roiFormula.reducedAbsenteeism;
      term3Name = 'Absenteeism Reduction';
      term3Val = config.roiFormula.reducedPresenteeism;
      term4Name = 'Wellness Impact';
      term4Val = config.roiFormula.productivityGain;
      bannerTitle = `Nutrition & Fitness Health Equation`;
    } else if (selectedProgram === 'challenges') {
      term1Name = 'Participation Value';
      term2Name = 'Productivity Impact';
      term2Val = config.roiFormula.reducedAbsenteeism;
      term3Name = 'Absenteeism Impact';
      term3Val = config.roiFormula.reducedPresenteeism;
      term4Name = 'Engagement Value';
      term4Val = config.roiFormula.productivityGain;
      bannerTitle = `Workplace Challenges Engagement Equation`;
    } else if (selectedProgram === 'wellness-camp') {
      term1Name = 'Participation Impact';
      term2Name = 'Engagement Value';
      term2Val = config.roiFormula.reducedAbsenteeism; // absenteeism savings (~48% reduction)
      term3Name = 'Productivity Impact';
      term3Val = config.roiFormula.reducedPresenteeism;
      term4Name = 'Healthcare cost reduction';
      term4Val = config.roiFormula.healthcareCostReduction; // ~35% reduction
      bannerTitle = `Virtual Wellness Camp Cost Triage Equation`;
    }

    return (
      <div className="space-y-10 animate-in fade-in duration-300">
        <div className="mantra-card p-6 md:p-8 border-t-4 border-t-blue-500 bg-gradient-to-br from-[#0A2E5C] via-[#102A4C] to-[#071C36] text-white relative overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="mantra-kicker text-blue-300">{kickerText}</div>
              <h2 className="text-xl md:text-2xl font-extrabold mt-1">
                {bannerTitle}
              </h2>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950 shadow">
              {formatROIMultiple(ratio)} Return Ratio
            </span>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-3 lg:gap-4 text-center my-4">
            <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
              <div className="text-[10px] text-blue-300 uppercase font-bold">{term1Name}</div>
              <div className="text-lg font-black text-white mt-1">${term1Val.toLocaleString('en-US')}</div>
            </div>
            {term2Val > 0 && <div className="text-xl font-bold text-blue-300 shrink-0">+</div>}
            {term2Val > 0 && (
              <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
                <div className="text-[10px] text-blue-300 uppercase font-bold">{term2Name}</div>
                <div className="text-lg font-black text-white mt-1">${term2Val.toLocaleString('en-US')}</div>
              </div>
            )}
            {term3Val > 0 && <div className="text-xl font-bold text-blue-300 shrink-0">+</div>}
            {term3Val > 0 && (
              <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
                <div className="text-[10px] text-blue-300 uppercase font-bold">{term3Name}</div>
                <div className="text-lg font-black text-white mt-1">${term3Val.toLocaleString('en-US')}</div>
              </div>
            )}
            {term4Val > 0 && <div className="text-xl font-bold text-blue-300 shrink-0">+</div>}
            {term4Val > 0 && (
              <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10 w-full lg:w-auto min-w-[150px] shrink-0">
                <div className="text-[10px] text-blue-300 uppercase font-bold">{term4Name}</div>
                <div className="text-lg font-black text-white mt-1">${term4Val.toLocaleString('en-US')}</div>
              </div>
            )}
            <div className="text-2xl font-black text-emerald-400 font-mono shrink-0">=</div>
            <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 w-full lg:w-auto min-w-[200px] shadow-2xl shrink-0">
              <div className="text-[10px] text-emerald-300 uppercase font-extrabold">Total return</div>
              <div className="text-2xl font-black text-emerald-400 mt-1">${totalReturn.toLocaleString('en-US')}</div>
              <div className="text-[11px] text-emerald-200 mt-0.5">
                Net: {formatCompactCurrency(totalReturn - cost)} on {formatCompactCurrency(cost)} spend · ${ratio.toFixed(2)} per $1 invested
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mantra-kicker mb-1">{config.name.toUpperCase()} ROI INDICATORS</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Core {config.name} Financial Performance Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.financialKPIs.map((kpi) => (
              <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mantra-card p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="mantra-kicker">DEPARTMENTAL {config.name.toUpperCase()} ROI</div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Which Business Units Benefit Most?
                </h3>
              </div>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">7 Departments</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                    <th className="pb-3">Department</th>
                    <th className="pb-3">Active Emp</th>
                    <th className="pb-3">{config.name} Utilisation</th>
                    <th className="pb-3">Savings / Cost Avoided</th>
                    <th className="pb-3">Total ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                  {config.deptRoiData.map((row) => (
                    <tr key={row.department} className="hover:bg-blue-50/50 dark:hover:bg-[#15365F]/40 transition-colors">
                      <td className="py-3.5 font-bold text-slate-900 dark:text-white">{row.department}</td>
                      <td className="py-3.5 text-slate-600 dark:text-slate-300 font-medium">{row.activeEmployees.toLocaleString()}</td>
                      <td className="py-3.5 font-semibold text-[#2196F3]">{row.utilization}</td>
                      <td className="py-3.5 font-extrabold text-emerald-600 dark:text-emerald-400">{row.claimsSaved}</td>
                      <td className="py-3.5 font-black text-slate-900 dark:text-white">{row.totalRoi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="mantra-kicker">{config.name.toUpperCase()} ROI PROJECTION</div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                5-Year Cumulative Savings Forecast
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Predicted ROI trend based on current adoption and outcomes.
              </p>
            </div>

            <div className="h-72 w-full my-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={config.fiveYearProjection} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis dataKey="year" stroke="#94A3B8" fontSize={11} />
                  <YAxis stroke="#94A3B8" fontSize={11} tickFormatter={(v) => `$${v / 1000000}M`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#102A4C',
                      borderColor: 'rgba(255,255,255,0.15)',
                      borderRadius: '16px',
                      color: '#fff',
                      fontSize: '12px',
                    }}
                    formatter={(val: any) => [`$${(Number(val || 0) / 1000000).toFixed(2)}M`, 'Cumulative Savings']}
                  />
                  <Line type="monotone" dataKey="cumulativeSavings" stroke="#22C55E" strokeWidth={4} dot={{ r: 6 }} name="Cumulative Savings" />
                  <Line type="monotone" dataKey="investment" stroke="#2196F3" strokeWidth={2.5} strokeDasharray="5 5" name="Annual Investment" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default FinancialROIModule;
