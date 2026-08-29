import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import type { KPICardData } from '../../types';

interface DrillDownModalProps {
  cardData: KPICardData | null;
  onClose: () => void;
}

export const DrillDownModal: React.FC<DrillDownModalProps> = ({ cardData, onClose }) => {
  const [activeTab, setActiveTab] = useState<'country' | 'office' | 'department' | 'team'>('department');

  if (!cardData) return null;

  const mockCountryBreakdown = [
    { name: 'United States', value: cardData.value, pct: '46%', status: 'Optimal' },
    { name: 'United Kingdom', value: '82%', pct: '24%', status: 'Optimal' },
    { name: 'Germany', value: '78%', pct: '14%', status: 'Optimal' },
    { name: 'India', value: '88%', pct: '12%', status: 'High Adoption' },
    { name: 'Singapore', value: '74%', pct: '4%', status: 'Moderate' },
  ];

  const mockOfficeBreakdown = [
    { office: 'London HQ', country: 'UK', headcount: 3400, metric: cardData.value, trend: '+14.2%' },
    { office: 'New York Financial Center', country: 'USA', headcount: 5200, metric: cardData.value, trend: '+18.1%' },
    { office: 'San Francisco Innovation Hub', country: 'USA', headcount: 3300, metric: cardData.value, trend: '+12.5%' },
    { office: 'Bangalore Tech Park', country: 'India', headcount: 2800, metric: cardData.value, trend: '+22.4%' },
    { office: 'Berlin Operations', country: 'Germany', headcount: 2100, metric: cardData.value, trend: '+8.9%' },
  ];

  const mockDeptBreakdown = [
    { dept: 'Engineering', headcount: 4200, metric: cardData.value, status: 'Optimal', costSaved: '$1,570,000' },
    { dept: 'Sales & Business Dev', headcount: 3100, metric: '4.9×', status: 'Optimal', costSaved: '$1,270,000' },
    { dept: 'Customer Support', headcount: 2400, metric: '4.2×', status: 'Attention', costSaved: '$750,000' },
    { dept: 'Operations & Supply', headcount: 3800, metric: '3.9×', status: 'Attention', costSaved: '$800,000' },
    { dept: 'Finance & Legal', headcount: 1600, metric: '4.7×', status: 'Optimal', costSaved: '$570,000' },
  ];

  const mockTeamsDeidentified = [
    { id: 'TEAM-ALPHA-842', dept: 'Engineering', size: 24, rate: '92%', outcome: 'High Improvement (PHQ-9 -68%)' },
    { id: 'TEAM-BETA-109', dept: 'Sales', size: 18, rate: '88%', outcome: 'Burnout Recovery +54%' },
    { id: 'TEAM-GAMMA-331', dept: 'Support', size: 32, rate: '71%', outcome: 'Active Coaching' },
    { id: 'TEAM-DELTA-904', dept: 'Ops', size: 40, rate: '65%', outcome: 'Resilience Training' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#0A2E5C] text-slate-900 dark:text-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-blue-900/60 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#0A2E5C] text-white flex items-start justify-between border-b border-blue-900">
          <div>
            <div className="mantra-kicker text-blue-300">EXECUTIVE DRILL-DOWN ANALYTICS</div>
            <div className="flex items-center space-x-3 mt-1">
              <h2 className="text-2xl font-bold">{cardData.title}</h2>
              <span
                className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-500 text-white shadow"
                title={`Current baseline value for ${cardData.title}`}
              >
                Current: {cardData.value}
              </span>
            </div>
            {cardData.description && (
              <p className="text-xs text-blue-200/80 mt-1 max-w-2xl">{cardData.description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            title="Close drill down panel"
            className="p-2 rounded-full hover:bg-blue-900/60 text-blue-200 hover:text-white transition-colors"
          >
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-blue-900/60 flex items-center space-x-2">
          {[
            { id: 'department', label: 'By Department' },
            { id: 'office', label: 'By Office Location' },
            { id: 'country', label: 'By Country' },
            { id: 'team', label: 'De-Identified Teams' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              title={`Switch view to breakdown ${tab.label.toLowerCase()}`}
              className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'department' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Departmental breakdown of {cardData.title} across company business units.
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-blue-900 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                      <th className="pb-3">Department</th>
                      <th className="pb-3">Headcount</th>
                      <th className="pb-3">Metric Value</th>
                      <th className="pb-3">Est. Value Created</th>
                      <th className="pb-3">Health Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {mockDeptBreakdown.map((row) => (
                      <tr key={row.dept} className="hover:bg-blue-50/50 dark:hover:bg-blue-950/40">
                        <td className="py-3 font-semibold text-slate-900 dark:text-white">
                          {row.dept}
                        </td>
                        <td className="py-3 text-slate-600 dark:text-slate-300">
                          {row.headcount.toLocaleString()}
                        </td>
                        <td className="py-3 font-bold text-blue-600 dark:text-blue-400">
                          {row.metric}
                        </td>
                        <td className="py-3 font-semibold text-emerald-600 dark:text-emerald-400">
                          {row.costSaved}
                        </td>
                        <td className="py-3">
                          <span
                            title={`Department health status: ${row.status}`}
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              row.status === 'Optimal'
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                                : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                            }`}
                          >
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'office' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-blue-900 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                      <th className="pb-3">Office Location</th>
                      <th className="pb-3">Country</th>
                      <th className="pb-3">Headcount</th>
                      <th className="pb-3">Value</th>
                      <th className="pb-3">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {mockOfficeBreakdown.map((row) => (
                      <tr key={row.office} className="hover:bg-blue-50/50 dark:hover:bg-blue-950/40">
                        <td className="py-3 font-semibold text-slate-900 dark:text-white">
                          {row.office}
                        </td>
                        <td className="py-3 text-slate-600 dark:text-slate-300">{row.country}</td>
                        <td className="py-3 text-slate-600 dark:text-slate-300">
                          {row.headcount.toLocaleString()}
                        </td>
                        <td className="py-3 font-bold text-blue-600 dark:text-blue-400">
                          {row.metric}
                        </td>
                        <td className="py-3 font-semibold text-emerald-600 dark:text-emerald-400">
                          {row.trend}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'country' && (
            <div className="space-y-3">
              {mockCountryBreakdown.map((c) => (
                <div
                  key={c.name}
                  title={`${c.name}: ${c.value} (${c.pct} of workforce)`}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-blue-900/60 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Icons.Globe className="w-5 h-5 text-blue-500" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{c.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {c.pct} of enterprise workforce
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-base text-blue-600 dark:text-blue-400">
                      {c.value}
                    </div>
                    <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      {c.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'team' && (
            <div className="space-y-4">
              <div
                title="Privacy guarantee: Team IDs are pseudonymous to preserve HIPAA/GDPR rules"
                className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200 flex items-center space-x-2 cursor-help"
              >
                <Icons.Lock className="w-4 h-4 shrink-0" />
                <span>
                  Team-level metrics are de-identified (IDs generated pseudonymously) to guarantee individual privacy compliance.
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockTeamsDeidentified.map((t) => (
                  <div
                    key={t.id}
                    title={`Team ${t.id} (${t.dept}): ${t.outcome}`}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-blue-900/60"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                        {t.id}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                        {t.dept}
                      </span>
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      Size: <strong>{t.size} members</strong> | Utilization Rate:{' '}
                      <strong>{t.rate}</strong>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {t.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-blue-900 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            title="Close drill down panel"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow"
          >
            Close Drill Down
          </button>
        </div>
      </div>
    </div>
  );
};
