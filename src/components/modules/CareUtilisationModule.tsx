import React from 'react';
import * as Icons from 'lucide-react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const CareUtilisationModule: React.FC<Props> = ({ onDrillDown }) => {
  const careKPIs: KPICardData[] = [
    {
      id: 'cu-total-consults',
      title: 'Total Consultations',
      kicker: 'VIRTUAL CARE VOLUME',
      value: '18,400',
      change: 24.5,
      changeLabel: 'teleconsults completed',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [11200, 12500, 13800, 15100, 16400, 17500, 18400],
      icon: 'Stethoscope',
    },
    {
      id: 'cu-provider-avail',
      title: 'Provider Availability',
      kicker: 'NETWORK CAPACITY',
      value: '99.4%',
      change: 1.2,
      changeLabel: '24/7 global coverage',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [96, 97, 97.5, 98.2, 98.8, 99.1, 99.4],
      icon: 'CheckCircle2',
    },
    {
      id: 'cu-wait-time',
      title: 'Average Wait Time',
      kicker: 'TIME TO CONSULT',
      value: '4.2 min',
      change: -35.0,
      changeLabel: 'vs 4-hr urgent care avg',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [12, 9.5, 8.1, 6.8, 5.5, 4.8, 4.2],
      icon: 'Clock',
    },
    {
      id: 'cu-[#22C55E]-rate',
      title: 'First Contact Resolution',
      kicker: 'CLINICAL EFFICACY',
      value: '91.5%',
      change: 4.8,
      changeLabel: 'no escalation needed',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [84, 86, 87.5, 88.8, 90.0, 90.8, 91.5],
      icon: 'ShieldCheck',
    },
    {
      id: 'cu-followups',
      title: 'Follow-up Rate',
      kicker: 'CONTINUITY OF CARE',
      value: '12.4%',
      change: -2.1,
      changeLabel: 'structured follow-ups',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [16, 15.2, 14.5, 13.8, 13.2, 12.8, 12.4],
      icon: 'RefreshCw',
    },
    {
      id: 'cu-csat',
      title: 'Teleconsult CSAT',
      kicker: 'PATIENT RATING',
      value: '4.91 / 5.0',
      change: 2.5,
      changeLabel: '98.6% positive',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.72, 4.78, 4.82, 4.85, 4.87, 4.89, 4.91],
      icon: 'Star',
    },
    {
      id: 'cu-cost-avoidance',
      title: 'Cost Avoidance',
      kicker: 'AVOIDED ER & CLINIC VISITS',
      value: '$1,240,000',
      change: 28.4,
      changeLabel: 'direct claims saved',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [750, 840, 920, 1010, 1100, 1180, 1240],
      icon: 'DollarSign',
    },
    {
      id: 'cu-specialist-util',
      title: 'Specialist Utilisation',
      kicker: 'EXPERT CONSULTATIONS',
      value: '38.0%',
      change: 14.0,
      changeLabel: 'dermatology, psych, etc.',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [26, 28, 30, 32, 34, 36, 38],
      icon: 'Award',
    },
  ];

  const consultationTypes = [
    { type: 'General Practice (GP)', count: 8250, wait: '3.2 mins', resolution: '94.2%', costAvoided: '$580,000' },
    { type: 'Mental Health & Teletherapy', count: 5400, wait: '6.5 mins', resolution: '89.5%', costAvoided: '$420,000' },
    { type: 'Specialist Consults', count: 2850, wait: '12.0 mins', resolution: '88.0%', costAvoided: '$180,000' },
    { type: 'Urgent Care & Triage', count: 1900, wait: '1.8 mins', resolution: '96.0%', costAvoided: '$60,000' },
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
            "Is virtual care improving access while reducing healthcare costs?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. <strong>18,400 teleconsultations</strong> delivered an <strong>average wait time of 4.2 minutes</strong> and a <strong>91.5% first-contact resolution rate</strong>. By diverting unnecessary ER visits and clinic appointments, virtual care generated <strong>$1,240,000 in direct cost avoidance</strong>.
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA TELECONSULTATION METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Virtual Care Access, Speed, Resolution & Cost Avoidance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careKPIs.map((kpi) => (
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
              5-Question Executive Decision Framework (Teleconsultation)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Evaluating virtual care adoption, wait times, resolution rates, and financial cost avoidance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">18,400 Total Teleconsults</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              8,250 GP consultations, 5,400 teletherapy visits, and 2,850 specialist appointments across 24 global operating territories.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">91.5% First Contact Resolution</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              91.5% of cases resolved without requiring in-person hospital visits. 4.91/5.0 patient CSAT across 18,000+ appointments.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">$1.24M Direct Cost Avoidance</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Avoids expensive emergency room visits ($1,800/visit avg) and urgent care claims by providing immediate 4.2-minute access.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Remote & International Offices</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              APAC & LatAm international offices show high demand for multi-lingual teleconsultation GP matching during off-peak hours.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Promote 24/7 instant virtual GP care for business travelers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Expand specialist coverage for Dermatology and Endocrinology</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Integrate e-prescriptions directly into mobile employee app</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Establish automated follow-up reminders for chronic patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Types Breakdown Table */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker">CONSULTATION BREAKDOWN</div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                Virtual Care Types & Performance Metrics
              </h4>
              <InfoTooltip title={dashboardInfo.careBreakdown.title} description={dashboardInfo.careBreakdown.description} />
            </div>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] dark:bg-[#15365F] px-3 py-1 rounded-full">
            4 Consultation Modalities
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/15 text-slate-400 font-extrabold uppercase tracking-wider">
                <th className="py-3 px-3">Consultation Type</th>
                <th className="py-3 px-3">Volume</th>
                <th className="py-3 px-3">Avg Wait Time</th>
                <th className="py-3 px-3">Resolution Rate</th>
                <th className="py-3 px-3 text-right">Cost Avoided</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-medium">
              {consultationTypes.map((row) => (
                <tr key={row.type} className="hover:bg-slate-50 dark:hover:bg-[#15365F]/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.type}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-bold">{row.count.toLocaleString()}</td>
                  <td className="py-3 px-3 text-[#2196F3] font-bold">{row.wait}</td>
                  <td className="py-3 px-3 font-bold text-[#22C55E]">{row.resolution}</td>
                  <td className="py-3 px-3 text-right font-black text-emerald-600 dark:text-emerald-400">{row.costAvoided}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

