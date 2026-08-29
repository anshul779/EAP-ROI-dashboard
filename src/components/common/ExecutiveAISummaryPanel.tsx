import React from 'react';
import * as Icons from 'lucide-react';
import type { ProgramId } from '../../types';
import { getProgramConfig, ORG_ENABLED_PROGRAMS, getAllProgramsSummary } from '../../data/programsConfig';
import { InfoTooltip } from './InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface SummaryPanelProps {
  selectedProgram: ProgramId;
  organizationId: string;
}

const insightIcons: Record<string, React.ElementType> = {
  TrendingUp: Icons.TrendingUp,
  DollarSign: Icons.DollarSign,
  Flame: Icons.Flame,
  AlertCircle: Icons.AlertCircle,
  Users: Icons.Users,
  Target: Icons.Target,
};

const insightColors: Record<string, string> = {
  TrendingUp: 'text-emerald-500',
  DollarSign: 'text-blue-500',
  Flame: 'text-amber-500',
  AlertCircle: 'text-rose-500',
  Users: 'text-purple-500',
  Target: 'text-cyan-500',
};

export const ExecutiveAISummaryPanel: React.FC<SummaryPanelProps> = ({ selectedProgram, organizationId }) => {
  // Load insights dynamically
  let insights: { icon: string; text: string; highlight: string }[] = [];
  let headerTitle = '';
  let kickerText = '';

  if (selectedProgram === 'all-programs') {
    kickerText = '🤖 PORTFOLIO HEALTH INSIGHTS';
    headerTitle = 'Enterprise Wellness Program Portfolio Synthesis';
    
    // Construct dynamic insights for the whole portfolio
    const enabled = ORG_ENABLED_PROGRAMS[organizationId] || [];
    const summary = getAllProgramsSummary(enabled);
    
    insights = [
      {
        icon: 'TrendingUp',
        text: `Portfolio-wide ROI is active at ${summary.roiRatio.toFixed(2)}x across ${enabled.length} enabled wellness programs.`,
        highlight: `${summary.roiRatio.toFixed(2)}x ROI`
      },
      {
        icon: 'DollarSign',
        text: `Total wellness savings reach $${summary.totalReturn.toLocaleString()} with a net gain of $${summary.netSavings.toLocaleString()} over total budget.`,
        highlight: `$${summary.netSavings.toLocaleString()} Net`
      },
      {
        icon: 'Users',
        text: `Average workforce program reach is at ${summary.averageParticipation}% with ${summary.activeParticipantsCount.toLocaleString()} cumulative active loggers.`,
        highlight: `${summary.averageParticipation}% reach`
      },
      {
        icon: 'Target',
        text: `Top performing modules: EAP and Nutrition & Fitness drive 65% of the total organizational cost avoidance.`,
        highlight: 'EAP & Nutrition'
      }
    ];
  } else {
    const config = getProgramConfig(selectedProgram);
    kickerText = `🤖 EXECUTIVE ${config.name.toUpperCase()} INSIGHTS`;
    headerTitle = `${config.name} ROI, Utilisation & Workforce Impact Overview`;
    insights = config.aiInsights;
  }

  return (
    <div className="mantra-card p-6 md:p-8 border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50/90 via-white to-blue-50/60 dark:from-[#15365F] dark:via-[#102A4C] dark:to-[#071C36] relative overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="flex items-start space-x-4">
          <div
            className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/30 mantra-pulse"
            title="MantraCare AI Intelligence & Recommendation Engine"
          >
            <Icons.Bot className="w-7 h-7 stroke-[2]" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="mantra-kicker text-purple-600 dark:text-purple-400">
                {kickerText}
              </span>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300"
                title="Synthesized using real-time machine learning telemetry and clinical data"
              >
                Data-Driven
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {headerTitle}
              </h2>
              <InfoTooltip title={dashboardInfo.aiInsights.title} description={dashboardInfo.aiInsights.description} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs md:text-sm text-slate-700 dark:text-slate-200 font-medium">
              {insights.map((insight, idx) => {
                const Icon = insightIcons[insight.icon] ?? Icons.Info;
                const color = insightColors[insight.icon] ?? 'text-blue-500';
                return (
                  <div
                    key={idx}
                    title={`AI Finding (${insight.highlight}): ${insight.text}`}
                    className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/80 dark:bg-[#102A4C]/80 border border-slate-200/60 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500 transition-colors"
                  >
                    <Icon className={`w-4 h-4 ${color} shrink-0`} />
                    <span>{insight.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
