import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { ENGAGEMENT_FUNNEL, SERVICE_USAGE_DONUT } from '../../data/mockData';
import * as Icons from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const EmployeeEngagementModule: React.FC<Props> = ({ onDrillDown }) => {
  const selfCareKPIs: KPICardData[] = [
    {
      id: 'sc-starts',
      title: 'Programme Starts',
      kicker: 'SELF-CARE ADOPTION',
      value: '16,200',
      change: 21.4,
      changeLabel: 'digital modules started',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [9800, 11000, 12400, 13800, 14900, 15600, 16200],
      icon: 'BookOpenCheck',
    },
    {
      id: 'sc-completions',
      title: 'Programme Completion',
      kicker: 'CURRICULUM FINISH',
      value: '74.0%',
      change: 8.5,
      changeLabel: '11,988 modules completed',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [62, 65, 68, 70, 72, 73, 74],
      icon: 'CheckCircle2',
    },
    {
      id: 'sc-content-viewed',
      title: 'Content Viewed',
      kicker: 'LEARNING RESOURCES',
      value: '89,400',
      change: 32.0,
      changeLabel: 'articles & video views',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [52000, 61000, 70000, 78000, 82000, 86000, 89400],
      icon: 'Eye',
    },
    {
      id: 'sc-assessments',
      title: 'Assessments Completed',
      kicker: 'SELF-SCREENING',
      value: '14,200',
      change: 16.2,
      changeLabel: 'self-assessments',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [9100, 10200, 11400, 12300, 13100, 13800, 14200],
      icon: 'ClipboardCheck',
    },
    {
      id: 'sc-mood-tracking',
      title: 'Mood Tracking Usage',
      kicker: 'EMOTIONAL HABITS',
      value: '62.0%',
      change: 14.0,
      changeLabel: 'active mood loggers',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [45, 48, 52, 55, 58, 60, 62],
      icon: 'Smile',
    },
    {
      id: 'sc-dau-wau',
      title: 'DAU / WAU Ratio',
      kicker: 'PLATFORM STICKINESS',
      value: '51.6%',
      change: 6.8,
      changeLabel: '4,850 DAU / 9,400 WAU',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [42, 44, 46, 48, 49, 50, 51.6],
      icon: 'Activity',
    },
    {
      id: 'sc-retention',
      title: '90-Day Retention',
      kicker: 'LONG-TERM ENGAGEMENT',
      value: '81.0%',
      change: 7.2,
      changeLabel: 'active after 90 days',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [71, 73, 75, 77, 79, 80, 81],
      icon: 'UserCheck',
    },
    {
      id: 'sc-streaks',
      title: 'Active Daily Streaks',
      kicker: '7+ DAY STREAKS',
      value: '3,240 Users',
      change: 28.0,
      changeLabel: 'consistent habit builders',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [1800, 2100, 2400, 2700, 2950, 3100, 3240],
      icon: 'Zap',
    },
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
            "Are employees engaging with self-guided care before problems become more serious?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. Over <strong>16,200 self-care programmes</strong> have been started with a <strong>74% completion rate</strong>. 3,240 employees maintain active 7+ day wellness streaks, achieving early preventive intervention before acute clinical care is required.
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA SELF-CARE PLATFORM METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Programme Starts, Content Engagement, Mood Tracking & Streaks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selfCareKPIs.map((kpi) => (
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
              5-Question Executive Decision Framework (Self-Care Platform)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Evaluating self-guided care adoption, content consumption, habit streaks, and early risk prevention.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">16,200 Module Starts & 89.4k Views</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              16,200 self-guided module starts, 89,400 educational resource views, and 14,200 self-assessment screenings completed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">3,240 Daily Habit Streaks</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              74% course completion rate and 3,240 active 7+ day daily habit streaks in stress reduction, mindfulness, and sleep protocols.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Proactive Early Intervention</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Prevents mild stress symptoms from escalating into costly clinical depression or high-risk medical claims.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Sales & Customer Support</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Sales teams indicate high initial module starts but lower completion rates (58%), needing shorter micro-learning formats.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Introduce 3-minute audio micro-lessons for busy sales teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Launch company-wide 14-day Mood Tracker challenge</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Reward 30-day streak builders with company wellness perks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Automate personalized content recommendations based on HRA scores</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Funnel & Modality Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mantra-card p-6 md:p-8 space-y-4">
          <div>
            <div className="mantra-kicker">ONBOARDING CONVERSION</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                Workforce Self-Care Onboarding Funnel
              </h3>
              <InfoTooltip title={dashboardInfo.engagementBreakdown.title} description={dashboardInfo.engagementBreakdown.description} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Conversion stages from total eligible headcount to completed care plans.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {ENGAGEMENT_FUNNEL.map((stage, idx) => (
              <div key={stage.step} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {idx + 1}. {stage.step}
                  </span>
                  <span className="font-bold text-[#2196F3]">
                    {stage.count.toLocaleString()} ({stage.pct})
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2196F3] to-[#60A5FA] rounded-full transition-all duration-500"
                    style={{ width: stage.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="mantra-kicker">PREFERENCE DISTRIBUTION</div>
            <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white">
              Care Modality Preference Mix
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              How employees utilize available MantraCare services.
            </p>
          </div>

          <div className="h-56 w-full relative my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SERVICE_USAGE_DONUT}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {SERVICE_USAGE_DONUT.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0A2E5C',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                  formatter={(v: any) => [`${v}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-100 dark:border-white/10">
            {SERVICE_USAGE_DONUT.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-700 dark:text-slate-300 font-medium truncate">
                  {item.name}: <strong>{item.value}%</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

