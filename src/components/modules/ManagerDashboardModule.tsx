import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const ManagerDashboardModule: React.FC<Props> = ({ onDrillDown }) => {
  const managerKPIs: KPICardData[] = [
    {
      id: 'mgr-consultations',
      title: 'Manager Consultations',
      kicker: '1-ON-1 ADVISORY',
      value: '1,840',
      change: 18.2,
      changeLabel: 'leadership consults',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [1100, 1250, 1400, 1550, 1680, 1780, 1840],
      icon: 'Headphones',
    },
    {
      id: 'mgr-training-comp',
      title: 'Leadership Training',
      kicker: 'RESILIENCE CERTIFICATION',
      value: '86.0%',
      change: 12.5,
      changeLabel: 'managers certified',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [68, 72, 76, 79, 82, 84, 86],
      icon: 'GraduationCap',
    },
    {
      id: 'mgr-team-referrals',
      title: 'Team EAP Referrals',
      kicker: 'PROACTIVE INTAKE',
      value: '1,420',
      change: 24.0,
      changeLabel: 'manager-guided referrals',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [850, 960, 1080, 1190, 1280, 1360, 1420],
      icon: 'UserPlus',
    },
    {
      id: 'mgr-burnout-risk',
      title: 'Team Burnout Risk',
      kicker: 'TEAM VULNERABILITY',
      value: '14.6%',
      change: -18.2,
      changeLabel: 'risk reduced YoY',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [32, 28, 25, 22, 19, 16, 14.6],
      icon: 'Flame',
    },
    {
      id: 'mgr-engagement',
      title: 'Manager Engagement',
      kicker: 'LEADERSHIP ADOPTION',
      value: '91.0%',
      change: 8.4,
      changeLabel: 'active in health tools',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [79, 81, 84, 86, 88, 90, 91],
      icon: 'Briefcase',
    },
    {
      id: 'mgr-wellbeing-score',
      title: 'Team Wellbeing Score',
      kicker: 'CLIMATE INDEX',
      value: '82.0 / 100',
      change: 11.5,
      changeLabel: 'team health rating',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [70, 72, 74, 77, 79, 81, 82],
      icon: 'Smile',
    },
    {
      id: 'mgr-turnover-saved',
      title: 'Attrited Talent Saved',
      kicker: 'RETENTION VALUE',
      value: '$450,000',
      change: 22.0,
      changeLabel: 'turnover cost saved',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [240, 280, 320, 360, 390, 420, 450],
      icon: 'DollarSign',
    },
    {
      id: 'mgr-csat',
      title: 'Manager CSAT',
      kicker: 'ADVISORY RATING',
      value: '4.94 / 5.0',
      change: 2.1,
      changeLabel: '98.8% positive',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.75, 4.80, 4.85, 4.88, 4.90, 4.92, 4.94],
      icon: 'Star',
    },
  ];

  const managerTeamTable = [
    { team: 'Frontend Engineering', lead: 'Sarah Jenkins', trained: 'Yes', referrals: 42, burnoutRisk: 'Low (12%)', wellbeingScore: '86/100' },
    { team: 'Enterprise Sales US', lead: 'Mark Miller', trained: 'Yes', referrals: 38, burnoutRisk: 'Moderate (28%)', wellbeingScore: '78/100' },
    { team: 'Global Customer Support', lead: 'Alex Wong', trained: 'In Progress', referrals: 29, burnoutRisk: 'High (42%)', wellbeingScore: '69/100' },
    { team: 'Core Operations', lead: 'David Vance', trained: 'Yes', referrals: 18, burnoutRisk: 'Low (14%)', wellbeingScore: '84/100' },
    { team: 'Product Design & Research', lead: 'Elena Rostova', trained: 'Yes', referrals: 22, burnoutRisk: 'Low (10%)', wellbeingScore: '89/100' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Executive Question & Insight Banner */}
      <div className="bg-[#0A2E5C] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-400/20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-[#00B2FF]/20 text-[#00B2FF] border border-[#00B2FF]/40 uppercase tracking-widest">
            <Icons.HelpCircle className="w-3.5 h-3.5" />
            <span>EXECUTIVE SOLUTION QUESTION</span>
          </div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight leading-snug text-white">
            "Are managers actively supporting employee wellbeing and reducing burnout within their teams?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. <strong>86% of managers</strong> completed MantraCare resilience certification, guiding <strong>1,420 proactive team EAP referrals</strong> and achieving a <strong>4.94/5.0 CSAT rating</strong> for leadership support.
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA MANAGER SUPPORT METRICS</div>
        <div className="flex items-center gap-1.5">
          <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
            Leadership Enablement, Consultations, Referrals & Team Climate
          </h3>
          <InfoTooltip title={dashboardInfo.teamClimate.title} description={dashboardInfo.teamClimate.description} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {managerKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>

      {/* 5-Question Executive Decision Framework */}
      <div className="mantra-card p-6 md:p-8 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-200 dark:border-white/15 pb-4">
          <div className="mantra-icon-badge w-10 h-10">
            <Icons.Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#0A2E5C] dark:text-white">
              5-Question Executive Decision Framework (Manager Support)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Evaluating manager training completion, team referrals, and burnout risk mitigation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">1,840 Manager Consultations</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              1,840 1-on-1 consultations with senior care advisors and 86% completion of Manager Resilience & Mental Health Training.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">1,420 Proactive EAP Referrals</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Trained managers identified early stress indicators, referring 1,420 struggling employees before burnout led to disability leave.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">$450,000 Turnover Saved</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Reduces manager-driven voluntary attrition by 34%, saving an estimated $450,000 in executive replacement costs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Customer Support Team Leads</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Customer Support leads report high team burnout risk (42%), requiring dedicated 1-on-1 manager debriefing sessions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Mandate Manager Resilience Training for newly promoted leads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Schedule monthly confidential manager support roundtables</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Provide automated team burnout alert digest for HR business partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Distribute manager empathy & referral toolkits before performance reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Lead Performance Breakdown Table */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker">TEAM CLIMATE BREAKDOWN</div>
            <h4 className="text-lg font-black text-[#0A2E5C] dark:text-white">
              Manager Training, Referrals & Team Risk
            </h4>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] dark:bg-[#15365F] px-3 py-1 rounded-full">
            5 Key Teams
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/15 text-slate-400 font-extrabold uppercase tracking-wider">
                <th className="py-3 px-3">Team Name</th>
                <th className="py-3 px-3">Team Lead</th>
                <th className="py-3 px-3">Training Status</th>
                <th className="py-3 px-3">EAP Referrals</th>
                <th className="py-3 px-3">Team Burnout Risk</th>
                <th className="py-3 px-3 text-right">Team Health Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-medium">
              {managerTeamTable.map((row) => (
                <tr key={row.team} className="hover:bg-slate-50 dark:hover:bg-[#15365F]/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.team}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-semibold">{row.lead}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded font-extrabold text-[11px] ${row.trained === 'Yes' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}`}>
                      {row.trained}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-[#2196F3] font-bold">{row.referrals} referrals</td>
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.burnoutRisk}</td>
                  <td className="py-3 px-3 text-right font-black text-emerald-600 dark:text-emerald-400">{row.wellbeingScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

