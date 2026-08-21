import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';
import * as Icons from 'lucide-react';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const ClaimsHealthcareCostsModule: React.FC<Props> = ({ onDrillDown }) => {
  const chronicKPIs: KPICardData[] = [
    {
      id: 'cc-diabetes-enrolment',
      title: 'Diabetes Enrolment',
      kicker: 'CHRONIC CARE PATHWAY',
      value: '1,240',
      change: 18.2,
      changeLabel: 'active participants',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [780, 890, 980, 1060, 1140, 1200, 1240],
      icon: 'Activity',
    },
    {
      id: 'cc-hypertension-enrolment',
      title: 'Hypertension Enrolment',
      kicker: 'BLOOD PRESSURE CARE',
      value: '1,850',
      change: 21.0,
      changeLabel: 'monitored employees',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [1100, 1280, 1420, 1550, 1680, 1780, 1850],
      icon: 'HeartPulse',
    },
    {
      id: 'cc-completion',
      title: 'Programme Completion',
      kicker: 'CARE COMPLIANCE',
      value: '88.0%',
      change: 9.5,
      changeLabel: '12-month completion rate',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [72, 75, 78, 81, 84, 86, 88],
      icon: 'CheckCircle2',
    },
    {
      id: 'cc-med-adherence',
      title: 'Medication Adherence',
      kicker: 'PRESCRIPTION COMPLIANCE',
      value: '92.0%',
      change: 6.8,
      changeLabel: 'refill & daily tracking',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [81, 83, 85, 87, 89, 91, 92],
      icon: 'ShieldCheck',
    },
    {
      id: 'cc-hba1c-improvement',
      title: 'HbA1c Reduction',
      kicker: 'DIABETIC CONTROL',
      value: '-1.4%',
      change: -18.5,
      changeLabel: 'glycemic improvement',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [8.8, 8.4, 8.1, 7.8, 7.6, 7.5, 7.4],
      icon: 'TrendingDown',
    },
    {
      id: 'cc-bp-improvement',
      title: 'BP Reduction',
      kicker: 'SYSTOLIC IMPROVEMENT',
      value: '-14 mmHg',
      change: -15.2,
      changeLabel: 'systolic reduction',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [148, 144, 141, 138, 136, 135, 134],
      icon: 'ArrowDownRight',
    },
    {
      id: 'cc-hosp-reduction',
      title: 'Hospitalisation Drop',
      kicker: 'INPATIENT DIVERSION',
      value: '42.0%',
      change: -28.4,
      changeLabel: '$510,000 cost saved',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [68, 62, 56, 51, 47, 44, 42],
      icon: 'Building2',
    },
    {
      id: 'cc-medical-reduction',
      title: 'Healthcare Savings',
      kicker: 'CLAIMS REDUCTION',
      value: '$1,840,000',
      change: 22.5,
      changeLabel: '5.4x ROI returned',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [1200, 1350, 1500, 1620, 1710, 1790, 1840],
      icon: 'DollarSign',
    },
  ];

  const chronicDiseaseTable = [
    { condition: 'Type 2 Diabetes & GLP-1 Care', enrolled: 1240, adherence: '92.4%', improvement: '-1.4% HbA1c', hospitalAvoided: 18, savings: '$780,000' },
    { condition: 'Hypertension & Cardiac Care', enrolled: 1850, adherence: '94.1%', improvement: '-14 mmHg Systolic', hospitalAvoided: 24, savings: '$620,000' },
    { condition: 'Physiotherapy & MSK Care', enrolled: 1420, adherence: '89.5%', improvement: '64% Pain Drop', hospitalAvoided: 12, savings: '$290,000' },
    { condition: 'Asthma & Respiratory Care', enrolled: 680, adherence: '91.0%', improvement: '72% ER Drop', hospitalAvoided: 8, savings: '$150,000' },
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
            "Are chronic disease programmes improving employee health while lowering long-term medical costs?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. Enrolment across <strong>3,090 chronic condition participants</strong> achieved an <strong>average -1.4% HbA1c drop</strong> in diabetes and <strong>-14 mmHg systolic BP drop</strong> in hypertension, delivering a <strong>42% reduction in hospitalizations</strong> and <strong>$1,840,000 in direct healthcare savings</strong> (5.4x ROI).
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA CHRONIC DISEASE PROGRAMMES METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Diabetes, Hypertension, Medication Adherence & Hospitalisation Reduction
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chronicKPIs.map((kpi) => (
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
              5-Question Executive Decision Framework (Chronic Disease Programmes)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Measuring long-term clinical biomarker control, hospitalisation avoidance, and claims reduction.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">3,090 Active Enrolled Patients</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              1,240 diabetes management participants and 1,850 hypertension participants receiving 1-on-1 coaching & connected monitoring devices.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Biomarker & Clinical Control</div>
            <p className="text-xs text-slate-600 dark:text-slate-[#C8D3E6]">
              HbA1c levels dropped by an average of -1.4% and systolic blood pressure fell by -14 mmHg with 92% medication adherence.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">5.4× Return Multiple</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Delivers $1,840,000 in direct medical claim reductions by averting 62 expensive inpatient emergency hospitalizations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Employees Aged 45+ in Manufacturing</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Manufacturing & Field Operations cohorts present elevated unmanaged hypertension risk (22% prevalence).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Distribute cellular-connected blood pressure cuffs to field staff</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Integrate GLP-1 & Diabetes continuous glucose monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Launch 90-day medication adherence reward incentives</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Schedule quarterly virtual endocrinologist consultations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chronic Care Breakdown Table */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker">CHRONIC CARE PATHWAYS</div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                Condition Performance & Claims Savings
              </h4>
              <InfoTooltip title={dashboardInfo.chronicPathways.title} description={dashboardInfo.chronicPathways.description} />
            </div>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] dark:bg-[#15365F] px-3 py-1 rounded-full">
            4 Condition Pathways
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/15 text-slate-400 font-extrabold uppercase tracking-wider">
                <th className="py-3 px-3">Condition Programme</th>
                <th className="py-3 px-3">Enrolled</th>
                <th className="py-3 px-3">Adherence</th>
                <th className="py-3 px-3">Clinical Improvement</th>
                <th className="py-3 px-3">Hospital Avoided</th>
                <th className="py-3 px-3 text-right">Claims Savings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-medium">
              {chronicDiseaseTable.map((row) => (
                <tr key={row.condition} className="hover:bg-slate-50 dark:hover:bg-[#15365F]/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.condition}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-bold">{row.enrolled.toLocaleString()}</td>
                  <td className="py-3 px-3 text-[#2196F3] font-bold">{row.adherence}</td>
                  <td className="py-3 px-3 font-bold text-[#22C55E]">{row.improvement}</td>
                  <td className="py-3 px-3 text-slate-700 dark:text-slate-200">{row.hospitalAvoided} admissions</td>
                  <td className="py-3 px-3 text-right font-black text-emerald-600 dark:text-emerald-400">{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

