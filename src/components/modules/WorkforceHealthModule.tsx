import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData, ProgramId, FilterState } from '../../types';
import { getProgramConfig } from '../../data/programsConfig';
import { WORKFORCE_HEALTH_HEATMAP, ORGANIZATIONS } from '../../data/mockData';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
  selectedProgram: ProgramId;
  filters: FilterState;
}

export const WorkforceHealthModule: React.FC<Props> = ({ onDrillDown, selectedProgram, filters }) => {
  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];

  // 1. Dynamic KPIs and text loaders
  let healthKPIs: KPICardData[] = [];
  let solutionQuestion = '';
  let solutionAnswer = '';
  let frameworkTitle = '';
  let frameworkSteps: { kicker: string; title: string; desc: string }[] = [];
  let actionItems: string[] = [];

  // Mappers for program-specific actions and framework structures
  const getWorkforceProgramDetails = (pId: ProgramId) => {
    switch (pId) {
      case 'eap':
        return {
          actions: [
            'Schedule manager resilience coaching sessions for London sprint squads',
            'Host company-wide mental health awareness webinars',
            'Deploy crisis response team to support high-risk departments',
            'Promote self-care audio modules on Slack / MS Teams channels'
          ]
        };
      case 'virtual-care':
        return {
          actions: [
            'Set up Telehealth Virtual Cabin/Kiosk inside main production warehouses',
            'Roll out chronic symptom push-notifications for remote logistics operators',
            'Incentivize digital prescription renewals with zero-dollar shipping copay',
            'Distribute QR codes during onboarding to accelerate portal download rates'
          ]
        };
      case 'health-checks':
        return {
          actions: [
            'Launch mandatory biometric screening makeups for night-shift employees',
            'Establish onsite cardiac-risk health clinics at main operational centers',
            'Deploy targeted high-cholesterol wellness challenge to logistics staff',
            'Automate HRA screening reminders via internal Slack and email systems'
          ]
        };
      case 'nutrition-fitness':
        return {
          actions: [
            'Revamp company cafeteria options with subsidized healthy macro-bowls',
            'Distribute pedometer wearables to sedentary desk-bound departments',
            'Host weekly live-streamed deskside stretching webinars for remote offices',
            'Incentivize fitness coach chats with localized gym membership discount perks'
          ]
        };
      case 'challenges':
        return {
          actions: [
            'Establish team-based division cups with executive leadership prizes',
            'Send walking-meeting checklist guidelines to department managers',
            'Host weekly mini step-challenge run-ups to incentivize night shifts',
            'Automate group chat push channels inside Microsoft Teams or Slack'
          ]
        };
      case 'wellness-camp':
        return {
          actions: [
            'Schedule quarterly Wellness Camp re-runs targeting high-burnout cohorts',
            'Deliver printed wellness camp materials to regional depot locations',
            'Introduce live chat circles with certified counselors post-webinar',
            'Automate webinar registration links through corporate newsletter feeds'
          ]
        };
      default:
        return {
          actions: [
            'Launch team-based step challenge with shift-leader incentives',
            'Schedule onsite biometric health screenings for remote sites',
            'Deploy targeted Sleep & Shift Work Hygiene coaching',
            'Provide personalized nutrition consultations for high-BMI cohorts'
          ]
        };
    }
  };

  if (selectedProgram === 'all-programs') {
    solutionQuestion = '"Are employees actively improving their overall health and reducing future healthcare risk?"';
    solutionAnswer = `Yes. Across this organization, ${currentOrg.totalEmployees.toLocaleString()} employees are eligible, with an average overall wellness score of 84.0/100 (+12.4 points YoY). Combined wellness campaigns, screenings, and teleconsultations have reduced high-risk segments by 18.2%.`;
    frameworkTitle = '5-Question Executive Decision Framework (Wellness Portfolio)';

    healthKPIs = [
      { id: 'wh-hra', title: 'HRAs Completed', kicker: 'HEALTH RISK ASSESSMENTS', value: '12,820', change: 16.5, changeLabel: '69.3% completion', trend: 'up', isGoodTrend: true, sparklineData: [8200, 9100, 10000, 10800, 11500, 12200, 12820], icon: 'ClipboardCheck' },
      { id: 'wh-challenges', title: 'Wellness Challenges', kicker: 'FITNESS CAMPAIGNS', value: '8,450', change: 22.0, changeLabel: 'active participants', trend: 'up', isGoodTrend: true, sparklineData: [4500, 5200, 6100, 6800, 7400, 7900, 8450], icon: 'Trophy' },
      { id: 'wh-fitness', title: 'Fitness Engagement', kicker: 'MOVEMENT & EXERCISE', value: '72.4 / 100', change: 9.5, changeLabel: '3.4 hrs/wk avg', trend: 'up', isGoodTrend: true, sparklineData: [63, 65, 67, 69, 70, 71, 72.4], icon: 'Dumbbell' },
      { id: 'wh-nutrition', title: 'Nutrition Enrolment', kicker: 'DIET & NUTRITION', value: '4,120', change: 18.2, changeLabel: 'active diet plans', trend: 'up', isGoodTrend: true, sparklineData: [2400, 2800, 3100, 3400, 3700, 3950, 4120], icon: 'Apple' },
      { id: 'wh-sleep', title: 'Sleep Hygiene Usage', kicker: 'RESTORATIVE SLEEP', value: '78.5 / 100', change: 14.2, changeLabel: 'sleep quality up', trend: 'up', isGoodTrend: true, sparklineData: [64, 67, 70, 72, 75, 77, 78.5], icon: 'Moon' },
      { id: 'wh-screenings', title: 'Biometric Screenings', kicker: 'HEALTH CHECKS', value: '6,480', change: 19.5, changeLabel: 'screenings completed', trend: 'up', isGoodTrend: true, sparklineData: [3800, 4300, 4800, 5300, 5800, 6200, 6480], icon: 'Stethoscope' },
      { id: 'wh-score', title: 'Avg Wellness Score', kicker: 'POPULATION INDEX', value: '84.0 / 100', change: 8.5, changeLabel: 'workforce average', trend: 'up', isGoodTrend: true, sparklineData: [72, 74, 76, 78, 80, 82, 84], icon: 'Heart' },
      { id: 'wh-improvement', title: 'Score Improvement', kicker: 'LONG-TERM GAINS', value: '+12.4 pts', change: 15.0, changeLabel: 'YoY score gain', trend: 'up', isGoodTrend: true, sparklineData: [4.2, 5.8, 7.1, 8.9, 10.2, 11.5, 12.4], icon: 'TrendingUp' }
    ];

    frameworkSteps = [
      { kicker: '1. How is this service being used?', title: '8,450 Challenge Participants', desc: '12,820 completed HRAs, 8,450 step & fitness challenge participants, 4,120 nutrition plans, and 6,480 biometric screenings.' },
      { kicker: '2. Is it improving health?', title: '+12.4 Point Health Score Increase', desc: 'Average workforce wellness score rose from 71.6 to 84.0/100, with a 63% improvement in sleep quality scores.' },
      { kicker: '3. Is it delivering ROI?', title: 'Preventive Claims Reduction', desc: 'Reduces long-term medical claims by identifying pre-hypertension and pre-diabetes early, delivering an estimated $1.2M in claims avoidance.' },
      { kicker: '4. Which populations need attention?', title: 'Logistics & Night Shifts', desc: 'Operations & Logistics show lower physical activity scores (64/100) and elevated sleep disturbance scores (78%).' }
    ];

    actionItems = getWorkforceProgramDetails('all-programs').actions;
  } else {
    const config = getProgramConfig(selectedProgram);
    solutionQuestion = `"${config.workforceQuestion}"`;
    solutionAnswer = config.workforceAnswer;
    frameworkTitle = `5-Question Executive Decision Framework (${config.name})`;

    // Generate custom KPIs from the config workforce KPIs
    healthKPIs = config.workforceKPIs;
    if (healthKPIs.length < 8) {
      // Pad with financial/overview KPIs to keep grid beautiful
      healthKPIs = [...healthKPIs, ...config.overviewKPIs.slice(0, 8 - healthKPIs.length)];
    }

    frameworkSteps = config.workforceFramework.questions.map((item, idx) => ({
      kicker: `${idx + 1}. ${item.q}`,
      title: item.a,
      desc: item.desc
    }));

    actionItems = getWorkforceProgramDetails(selectedProgram).actions;
  }

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
            {solutionQuestion}
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> {solutionAnswer}
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA WELLNESS MODULE METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4 font-sans">
          Workforce Health Indicators & Clinical Outcomes
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthKPIs.map((kpi) => (
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
              {frameworkTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Measuring health outcomes, risk-profile transitions, and clinical quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {frameworkSteps.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
              <div className="text-xs font-black text-[#2196F3] uppercase">{step.kicker}</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">{step.title}</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              {actionItems.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Department Heatmap Matrix */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker">DEPARTMENT RISK MATRIX</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                Workplace Stress & Health Risk Distribution
              </h3>
              <InfoTooltip title={dashboardInfo.riskMatrix.title} description={dashboardInfo.riskMatrix.description} />
            </div>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Higher values indicate elevated risk levels
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/15 text-slate-500 dark:text-slate-400 font-bold text-left uppercase tracking-wider">
                <th className="pb-3 pl-2">Department</th>
                <th className="pb-3 text-center">Stress Risk</th>
                <th className="pb-3 text-center">Burnout</th>
                <th className="pb-3 text-center">Anxiety</th>
                <th className="pb-3 text-center">Depression</th>
                <th className="pb-3 text-center">Sleep Issues</th>
                <th className="pb-3 text-center">Physical Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-medium">
              {WORKFORCE_HEALTH_HEATMAP.map((row) => (
                <tr key={row.dept} className="hover:bg-slate-50 dark:hover:bg-[#15365F]/40 transition-colors">
                  <td className="py-3 text-left pl-2 font-bold text-slate-900 dark:text-white">
                    {row.dept}
                  </td>
                  <td className="py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        row.stress > 80
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          : row.stress > 70
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {row.stress}%
                    </span>
                  </td>
                  <td className="py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        row.burnout > 75
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                          : row.burnout > 60
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {row.burnout}%
                    </span>
                  </td>
                  <td className="py-3 font-semibold text-slate-700 dark:text-slate-300">
                    {row.anxiety}%
                  </td>
                  <td className="py-3 font-semibold text-slate-700 dark:text-slate-300">
                    {row.depression}%
                  </td>
                  <td className="py-3 font-semibold text-slate-700 dark:text-slate-300">
                    {row.sleepIssue}%
                  </td>
                  <td className="py-3 font-bold text-[#2196F3]">
                    {row.physicalIndex}/100
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default WorkforceHealthModule;
