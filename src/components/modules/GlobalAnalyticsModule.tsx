import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { InteractiveWorldMap } from '../common/InteractiveWorldMap';
import * as Icons from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const GlobalAnalyticsModule: React.FC<Props> = ({ onDrillDown }) => {
  const globalKPIs: KPICardData[] = [
    {
      id: 'ga-countries',
      title: 'Active Global Regions',
      kicker: 'GLOBAL COVERAGE',
      value: '24 Countries',
      change: 20.0,
      changeLabel: 'across 5 continents',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [16, 18, 19, 21, 22, 23, 24],
      icon: 'Globe',
    },
    {
      id: 'ga-compliance',
      title: 'Global Compliance',
      kicker: 'GDPR / HIPAA / ISO27001',
      value: '100%',
      change: 0,
      changeLabel: 'fully compliant',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [100, 100, 100, 100, 100, 100, 100],
      icon: 'ShieldCheck',
    },
    {
      id: 'ga-languages',
      title: 'Supported Languages',
      kicker: 'CULTURALLY ADAPTED',
      value: '100+ Languages',
      change: 15.0,
      changeLabel: '24/7 global clinical team',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [80, 85, 90, 94, 98, 100, 105],
      icon: 'Languages',
    },
    {
      id: 'ga-timezone',
      title: 'Coverage & SLA',
      kicker: '24/7 AVAILABILITY',
      value: '24 / 7 / 365',
      change: 0,
      changeLabel: '< 15 min response time',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [24, 24, 24, 24, 24, 24, 24],
      icon: 'Clock',
    },
  ];

  // Data for bottom regional analytical breakdown cards
  const topRoiCountries = [
    { name: 'India', flag: '🇮🇳', roi: '5.8×', savings: '$1,280,000', emp: '4,800' },
    { name: 'United States', flag: '🇺🇸', roi: '5.2×', savings: '$2,140,000', emp: '8,500' },
    { name: 'Canada', flag: '🇨🇦', roi: '5.0×', savings: 'C$540,000', emp: '1,600' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '4.9×', savings: '£840,000', emp: '3,400' },
    { name: 'Australia', flag: '🇦🇺', roi: '4.7×', savings: 'A$380,000', emp: '1,200' },
  ];

  const topUsageCountries = [
    { name: 'India', flag: '🇮🇳', usage: '88%', active: '4,224', pathway: 'Full EAP & Mind' },
    { name: 'United States', flag: '🇺🇸', usage: '84%', active: '7,140', pathway: 'Clinical Therapy' },
    { name: 'Canada', flag: '🇨🇦', usage: '81%', active: '1,296', pathway: 'Mindfulness & Physio' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '79%', active: '2,686', pathway: 'Stress Interventions' },
    { name: 'Australia', flag: '🇦🇺', usage: '76%', active: '912', pathway: 'Digital Coaching' },
  ];

  const topRiskRegions = [
    { name: 'United Arab Emirates', flag: '🇦🇪', risk: 'High', vulnerability: '74%', action: 'Manager Intervention' },
    { name: 'Japan', flag: '🇯🇵', risk: 'High', vulnerability: '68%', action: 'Resilience Workshop' },
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'Moderate', vulnerability: '52%', action: 'Stress Assessment' },
    { name: 'Brazil', flag: '🇧🇷', risk: 'Moderate', vulnerability: '48%', action: 'EAP Awareness' },
  ];

  const regionalTrendData = [
    { region: 'North America', Q1: 4.8, Q2: 5.1 },
    { region: 'Europe (EMEA)', Q1: 4.3, Q2: 4.7 },
    { region: 'Asia Pacific', Q1: 5.2, Q2: 5.6 },
    { region: 'Latin America', Q1: 4.1, Q2: 4.5 },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-300">
      {/* 1. Global Overview Header & KPI Cards */}
      <div>
        <div className="mantra-kicker mb-1">GLOBAL REACH & MULTI-REGION INTELLIGENCE</div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Global Operations & Regional ROI Dashboard
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {globalKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>

      {/* 2. Interactive World Map (70%) & Regional Insights Panel (30%) */}
      <InteractiveWorldMap />

      {/* 3. Bottom Regional Performance Breakdown Section */}
      <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-white/10">
        <div>
          <div className="mantra-kicker mb-1">REGIONAL COMPARISON & DRILL-DOWN</div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight">
              Territory Performance & Risk Benchmarks
            </h3>
            <InfoTooltip title={dashboardInfo.regionalBenchmarks.title} description={dashboardInfo.regionalBenchmarks.description} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Top Countries by ROI */}
          <div className="mantra-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="mantra-icon-badge w-8 h-8">
                  <Icons.TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0A2E5C] dark:text-white">
                  Top Countries by ROI
                </h4>
              </div>
              <div className="space-y-3 text-xs">
                {topRoiCountries.map((c, idx) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#15365F]/60 border border-slate-100 dark:border-white/10"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-400 w-4">{idx + 1}.</span>
                      <span className="text-base">{c.flag}</span>
                      <span className="font-bold text-slate-800 dark:text-white">{c.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-[#22C55E] text-sm">{c.roi}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{c.savings}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Countries by Usage */}
          <div className="mantra-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="mantra-icon-badge w-8 h-8">
                  <Icons.Activity className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0A2E5C] dark:text-white">
                  Top Countries by Usage
                </h4>
              </div>
              <div className="space-y-3 text-xs">
                {topUsageCountries.map((c, idx) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-[#15365F]/60 border border-slate-100 dark:border-white/10"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-slate-400 w-4">{idx + 1}.</span>
                      <span className="text-base">{c.flag}</span>
                      <span className="font-bold text-slate-800 dark:text-white">{c.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-[#2196F3] text-sm">{c.usage}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{c.active} lives</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Risk Regions */}
          <div className="mantra-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="mantra-icon-badge w-8 h-8 bg-rose-100 text-rose-600 dark:bg-rose-950/80 dark:text-rose-300">
                  <Icons.AlertTriangle className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0A2E5C] dark:text-white">
                  Top Risk Regions
                </h4>
              </div>
              <div className="space-y-3 text-xs">
                {topRiskRegions.map((r) => (
                  <div
                    key={r.name}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#15365F]/60 border border-slate-100 dark:border-white/10 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-base">{r.flag}</span>
                        <span className="font-bold text-slate-800 dark:text-white">{r.name}</span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                          r.risk === 'High'
                            ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                        }`}
                      >
                        {r.risk}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 dark:text-slate-400">Vulnerability: {r.vulnerability}</span>
                      <span className="font-bold text-[#2196F3]">{r.action}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regional Trend Bar Chart */}
          <div className="mantra-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="mantra-icon-badge w-8 h-8">
                  <Icons.BarChart3 className="w-4 h-4" />
                </div>
                <h4 className="font-extrabold text-sm text-[#0A2E5C] dark:text-white">
                  Regional ROI Trend
                </h4>
              </div>
              <div className="w-full h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="region" tick={{ fontSize: 9, fill: '#94A3B8' }} interval={0} />
                    <YAxis tick={{ fontSize: 10, fill: '#94A3B8' }} domain={[0, 6]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0A2E5C',
                        borderColor: '#2196F3',
                        borderRadius: '12px',
                        color: '#FFF',
                        fontSize: '11px',
                      }}
                    />
                    <Bar dataKey="Q1" name="Q1 ROI" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Q2" name="Q2 ROI" fill="#2196F3" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 text-center mt-2 font-medium">
                Q1 vs Q2 Enterprise ROI Growth across continental hubs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

