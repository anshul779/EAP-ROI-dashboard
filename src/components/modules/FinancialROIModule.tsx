import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { FIVE_YEAR_PROJECTION, DEPT_ROI_DATA, FINANCIAL_FORMULA, FINANCIAL_KPIS } from '../../data/mockData';
import { formatROIMultiple, formatCompactCurrency } from '../../data/roiCalculations';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';
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
}

export const FinancialROIModule: React.FC<Props> = ({ onDrillDown }) => {
  const f = FINANCIAL_FORMULA;

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      <div className="mantra-card p-6 md:p-8 border-t-4 border-t-blue-500 bg-gradient-to-br from-[#0A2E5C] via-[#102A4C] to-[#071C36] text-white relative overflow-hidden shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="mantra-kicker text-blue-300">AUDITED EAP FINANCIAL MODEL</div>
            <h2 className="text-xl md:text-2xl font-extrabold mt-1">
              EAP Executive Financial Value Equation
            </h2>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950 shadow">
            {formatROIMultiple(f.roiRatio)} Return Ratio
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-center items-center my-4">
          <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10">
            <div className="text-[10px] text-blue-300 uppercase font-bold">Healthcare Savings</div>
            <div className="text-lg font-black text-white mt-1">${f.healthcareCostReduction.toLocaleString('en-US')}</div>
          </div>
          <div className="text-xl font-bold text-blue-300 hidden md:block">+</div>
          <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10">
            <div className="text-[10px] text-blue-300 uppercase font-bold">Absenteeism Saved</div>
            <div className="text-lg font-black text-white mt-1">${f.reducedAbsenteeism.toLocaleString('en-US')}</div>
          </div>
          <div className="text-xl font-bold text-blue-300 hidden md:block">+</div>
          <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10">
            <div className="text-[10px] text-blue-300 uppercase font-bold">Presenteeism Gain</div>
            <div className="text-lg font-black text-white mt-1">${f.reducedPresenteeism.toLocaleString('en-US')}</div>
          </div>
          <div className="text-xl font-bold text-blue-300 hidden md:block">+</div>
          <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10">
            <div className="text-[10px] text-blue-300 uppercase font-bold">Turnover Saved</div>
            <div className="text-lg font-black text-white mt-1">${f.reducedTurnover.toLocaleString('en-US')}</div>
          </div>
          <div className="text-xl font-bold text-blue-300 hidden md:block">+</div>
          <div className="p-4 rounded-2xl bg-[#15365F]/80 border border-white/10">
            <div className="text-[10px] text-blue-300 uppercase font-bold">Productivity Gain</div>
            <div className="text-lg font-black text-white mt-1">${f.productivityGain.toLocaleString('en-US')}</div>
          </div>
          <div className="text-2xl font-black text-emerald-400 font-mono hidden md:block">=</div>
          <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500 md:col-span-2 shadow-2xl">
            <div className="text-[10px] text-emerald-300 uppercase font-extrabold">Total Gross EAP Return</div>
            <div className="text-2xl font-black text-emerald-400 mt-1">${f.totalReturn.toLocaleString('en-US')}</div>
            <div className="text-[11px] text-emerald-200 mt-0.5">
              Net: {formatCompactCurrency(f.netSavings)} on {formatCompactCurrency(f.programCost)} EAP spend · ${f.returnPerDollar.toFixed(2)} per $1 invested
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mantra-kicker mb-1">EAP FINANCIAL ROI INDICATORS</div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Core EAP Financial Performance Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FINANCIAL_KPIS.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="mantra-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="mantra-kicker">DEPARTMENT EAP ROI</div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Which Business Units Benefit Most?
                </h3>
                <InfoTooltip title={dashboardInfo.departmentRoi.title} description={dashboardInfo.departmentRoi.description} />
              </div>
            </div>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">7 Departments</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3">Department</th>
                  <th className="pb-3">Active Emp</th>
                  <th className="pb-3">EAP Utilisation</th>
                  <th className="pb-3">Claims Saved</th>
                  <th className="pb-3">Total ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                {DEPT_ROI_DATA.map((row) => (
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
            <div className="mantra-kicker">EAP ROI PROJECTION</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                5-Year Cumulative EAP Savings Forecast
              </h3>
              <InfoTooltip title={dashboardInfo.roiProjection.title} description={dashboardInfo.roiProjection.description} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Predicted ROI trend based on current EAP adoption and clinical outcome trajectories.
            </p>
          </div>

          <div className="h-72 w-full my-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={FIVE_YEAR_PROJECTION} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
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
};
