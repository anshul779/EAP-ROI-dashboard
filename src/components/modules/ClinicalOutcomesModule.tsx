import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { CLINICAL_IMPROVEMENT_DATA } from '../../data/mockData';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const ClinicalOutcomesModule: React.FC<Props> = ({ onDrillDown }) => {
  const clinicalKPIs: KPICardData[] = [
    {
      id: 'co-therapy-sessions',
      title: 'Therapy Sessions',
      kicker: '1-ON-1 LICENSED THERAPY',
      value: '28,500',
      change: 18.5,
      changeLabel: 'sessions completed',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [18000, 20000, 22000, 24000, 26000, 27500, 28500],
      icon: 'Stethoscope',
    },
    {
      id: 'co-psychiatry-consults',
      title: 'Psychiatry Consults',
      kicker: 'MD PSYCHIATRIC CARE',
      value: '5,700',
      change: 22.0,
      changeLabel: 'medical consultations',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [3200, 3700, 4200, 4700, 5100, 5450, 5700],
      icon: 'HeartPulse',
    },
    {
      id: 'co-phq9',
      title: 'PHQ-9 Depression Drop',
      kicker: 'DEPRESSION REMISSION',
      value: '71.2%',
      change: 8.4,
      changeLabel: 'moderate -> mild/remission',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [52, 58, 62, 65, 68, 70, 71.2],
      icon: 'Activity',
    },
    {
      id: 'co-gad7',
      title: 'GAD-7 Anxiety Drop',
      kicker: 'ANXIETY REMISSION',
      value: '74.5%',
      change: 9.1,
      changeLabel: 'minimal anxiety reached',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [55, 60, 64, 68, 71, 73, 74.5],
      icon: 'Brain',
    },
    {
      id: 'co-med-adherence',
      title: 'Medication Adherence',
      kicker: 'PSYCHIATRIC ADHERENCE',
      value: '89.0%',
      change: 6.2,
      changeLabel: 'prescribed regimen adherence',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [78, 80, 82, 84, 86, 88, 89],
      icon: 'ShieldCheck',
    },
    {
      id: 'co-recovery-rate',
      title: 'Clinical Recovery Rate',
      kicker: 'THERAPEUTIC SUCCESS',
      value: '84.2%',
      change: 6.5,
      changeLabel: 'statistically significant',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [72, 75, 78, 80, 82, 83, 84.2],
      icon: 'CheckCircle2',
    },
    {
      id: 'co-attendance',
      title: 'Appointment Attendance',
      kicker: 'COMPLIANCE & SHOW-UP',
      value: '96.5%',
      change: 3.8,
      changeLabel: '< 3.5% no-show rate',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [90, 91.5, 93, 94.2, 95.1, 95.8, 96.5],
      icon: 'CalendarCheck',
    },
    {
      id: 'co-avg-duration',
      title: 'Avg Treatment Duration',
      kicker: 'EPISODE LENGTH',
      value: '6.2 Weeks',
      change: -14.0,
      changeLabel: 'vs 16-wk traditional avg',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [8.5, 8.0, 7.5, 7.1, 6.8, 6.4, 6.2],
      icon: 'Clock',
    },
  ];

  const beforeAfterChart = [
    { metric: 'PHQ-9 Depression', Initial: 14.8, PostCare: 5.2 },
    { metric: 'GAD-7 Anxiety', Initial: 15.2, PostCare: 4.8 },
    { metric: 'Burnout Score', Initial: 48.4, PostCare: 18.6 },
    { metric: 'Sleep Disturbance', Initial: 11.4, PostCare: 4.2 },
    { metric: 'Work Impairment', Initial: 22.1, PostCare: 7.4 },
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
            "Are employees achieving measurable improvements in their mental health?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. <strong>28,500 therapy sessions</strong> and <strong>5,700 psychiatric consults</strong> achieved a <strong>71.2% reduction in PHQ-9 depression scores</strong> and a <strong>74.5% drop in GAD-7 anxiety scores</strong>, with an overall <strong>84.2% clinical recovery rate</strong> in an average of 6.2 weeks.
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA THERAPY & PSYCHIATRY METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Clinical Recovery, Symptom Reduction & Treatment Efficacy
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicalKPIs.map((kpi) => (
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
              5-Question Executive Decision Framework (Therapy & Psychiatry)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Measuring evidence-based clinical instruments (PHQ-9, GAD-7) and therapeutic recovery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">34,200 Total Clinical Sessions</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              28,500 licensed teletherapy sessions and 5,700 psychiatric consultations with an outstanding 96.5% appointment attendance rate.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">84.2% Clinical Recovery Rate</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              PHQ-9 scores drop from 14.8 to 5.2 (71% drop), and GAD-7 anxiety drops from 15.2 to 4.8 (74% drop) into full clinical remission.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Shortened Treatment Episode</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Achieves remission in 6.2 weeks (vs 16 weeks traditional outpatient care), reducing overall treatment cost and disability claims.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">High-Stress Engineering Leads</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Senior engineering leads present higher baseline GAD-7 anxiety scores (16.4 avg), requiring fast-track psychiatric matching.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Fast-track 24-hr psychiatric matching for high GAD-7 scores</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Provide continuous medication management check-ins</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Enable automated PHQ-9 progress tracking in employee app</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Offer confidential evening teletherapy slots for busy managers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinical Before / After Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mantra-card p-6 md:p-8 space-y-4">
          <div>
            <div className="mantra-kicker">BEFORE VS AFTER CARE</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white mt-1">
                Clinical Score Improvement (Baseline vs Post-Care)
              </h3>
              <InfoTooltip title={dashboardInfo.clinicalOutcomes.title} description={dashboardInfo.clinicalOutcomes.description} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Comparison of initial intake scores vs 6-week post-care evaluation.
            </p>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={beforeAfterChart} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                <XAxis dataKey="metric" stroke="#94A3B8" fontSize={10} />
                <YAxis stroke="#94A3B8" fontSize={10} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0A2E5C',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="Initial" fill="#EF4444" radius={[6, 6, 0, 0]} name="Baseline Intake" />
                <Bar dataKey="PostCare" fill="#22C55E" radius={[6, 6, 0, 0]} name="Post MantraCare" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="mantra-kicker">CLINICAL SCALES</div>
            <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white mt-1">
              Validated Metric Details
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Standardized mental health clinical instruments.
            </p>
          </div>

          <div className="space-y-3.5 my-4">
            {CLINICAL_IMPROVEMENT_DATA.map((item) => (
              <div
                key={item.metric}
                className="p-3 rounded-xl bg-slate-50 dark:bg-[#15365F]/60 border border-slate-100 dark:border-white/10 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                    {item.metric}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Intake: {item.initialAvg} → Current: {item.currentAvg}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

