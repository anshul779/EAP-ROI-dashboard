import React from 'react';
import * as Icons from 'lucide-react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const AIInsightsModule: React.FC<Props> = ({ onDrillDown }) => {
  const aiKPIs: KPICardData[] = [
    {
      id: 'ai-conversations',
      title: 'AI Conversations',
      kicker: 'BOT DIALOGUE VOLUME',
      value: '142,000',
      change: 34.2,
      changeLabel: '24/7 instant support',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [85000, 94000, 105000, 118000, 128000, 135000, 142000],
      icon: 'Bot',
    },
    {
      id: 'ai-dau',
      title: 'Daily Active Users',
      kicker: 'DAILY AI COACH USAGE',
      value: '4,850',
      change: 22.4,
      changeLabel: 'active daily users',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [3100, 3400, 3800, 4100, 4400, 4650, 4850],
      icon: 'Users',
    },
    {
      id: 'ai-weekly-eng',
      title: 'Weekly Engagement',
      kicker: 'USER RETENTION',
      value: '68.0%',
      change: 14.5,
      changeLabel: 'weekly repeat check-ins',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [52, 55, 58, 61, 64, 66, 68],
      icon: 'Activity',
    },
    {
      id: 'ai-goals-achieved',
      title: 'Goals Achieved',
      kicker: 'BEHAVIOUR CHANGE',
      value: '21,900 / 28.4k',
      change: 28.1,
      changeLabel: '77.1% goal completion',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [12000, 14200, 16100, 18000, 19500, 20800, 21900],
      icon: 'Target',
    },
    {
      id: 'ai-mood-checkins',
      title: 'Mood Check-ins',
      kicker: 'EMOTIONAL TRACKING',
      value: '89,000',
      change: 31.0,
      changeLabel: 'daily mood entries',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [51000, 58000, 66000, 74000, 80000, 85000, 89000],
      icon: 'Smile',
    },
    {
      id: 'ai-risk-alerts',
      title: 'Risk Alerts Generated',
      kicker: 'AUTOMATED SAFETY',
      value: '340 Alerts',
      change: -14.2,
      changeLabel: 'early risk detection',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [420, 400, 380, 365, 355, 348, 340],
      icon: 'AlertTriangle',
    },
    {
      id: 'ai-escalations',
      title: 'Clinician Escalations',
      kicker: 'WARM HANDOFF TO CLINICIAN',
      value: '124',
      change: -8.5,
      changeLabel: 'fast-tracked to therapy',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [160, 152, 145, 138, 132, 128, 124],
      icon: 'Zap',
    },
    {
      id: 'ai-csat',
      title: 'AI Coach CSAT',
      kicker: 'USER RATING',
      value: '4.88 / 5.0',
      change: 2.1,
      changeLabel: '97.2% user rating',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.65, 4.71, 4.76, 4.80, 4.83, 4.86, 4.88],
      icon: 'Star',
    },
  ];

  const topIntents = [
    { topic: 'Work Stress & Burnout Management', pct: '38%', count: '53,960 dialogues', sentiment: 'Positive (88%)' },
    { topic: 'Insomnia & Sleep Protocol Guidance', pct: '24%', count: '34,080 dialogues', sentiment: 'Positive (92%)' },
    { topic: 'Anxiety Coping & Breathing Exercises', pct: '18%', count: '25,560 dialogues', sentiment: 'Positive (91%)' },
    { topic: 'Financial Stress & Debt Counseling Intake', pct: '12%', count: '17,040 dialogues', sentiment: 'Neutral (84%)' },
    { topic: 'Maternal & Women Health Inquiries', pct: '8%', count: '11,360 dialogues', sentiment: 'Positive (96%)' },
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
            "Is AI increasing engagement and supporting healthier daily behaviours?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. Mantra AI Coach handled <strong>142,000 conversational interactions</strong> with 4,850 daily active users. <strong>21,900 personal health goals</strong> were completed (77.1% success rate), and 124 high-risk stress cases were safely escalated directly to human therapists.
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA AI HEALTH COACH METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Conversational Volume, Daily Engagement & Behavioural Goals
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} accentColor="#8B5CF6" />
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
              5-Question Executive Decision Framework (AI Health Coach)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Measuring conversational engagement, goal achievement, and safety escalation speed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">142,000 Conversations</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              142,000 conversations handled 24/7. Top topics include burnout management (38%), sleep guidance (24%), and anxiety coping exercises (18%).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">21,900 Goals Completed</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              77.1% of employee-created habit goals (mindfulness, hydration, sleep hygiene) are successfully completed. CSAT score is 4.88/5.0.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Zero-Cost Intake Scalability</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Saves an estimated 1,240 HR and triage hours by automating instant intake, symptom triaging, and self-guided micro-coaching.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Finance & Night Shift Engineering</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Night-shift engineering and finance teams show high late-night dialogue volume (11 PM - 3 AM), indicating acute sleep & workload stress.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Deploy automated AI prompt nudges for 21-day sleep challenges</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Configure crisis escalation triggers for financial stress keywords</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Promote multi-lingual AI Coach options across global sites</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Integrate AI daily habit check-ins with Apple Health & Google Fit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogue Topics Table */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker text-[#2196F3]">INTENT CATEGORIZATION</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white mt-1">
                Top Employee Dialogue Topics & Sentiment
              </h3>
              <InfoTooltip title={dashboardInfo.intentCategories.title} description={dashboardInfo.intentCategories.description} />
            </div>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] dark:bg-[#15365F] px-3 py-1 rounded-full">
            5 Primary Intent Categories
          </span>
        </div>

        <div className="space-y-3">
          {topIntents.map((item) => (
            <div
              key={item.topic}
              className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F]/60 border border-slate-100 dark:border-white/10 flex items-center justify-between"
            >
              <div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">{item.topic}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Volume: {item.count} | Sentiment: {item.sentiment}
                </p>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-black bg-blue-100 dark:bg-blue-950 text-[#2196F3] dark:text-[#60A5FA]">
                {item.pct}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

