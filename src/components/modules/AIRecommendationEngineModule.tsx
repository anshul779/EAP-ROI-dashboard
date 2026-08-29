import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { AccordionCard } from '../common/AccordionCard';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';
import type { ProgramId, FilterState, AIRecommendation } from '../../types';

interface Props {
  selectedProgram: ProgramId;
  filters: FilterState;
}

export const AIRecommendationEngineModule: React.FC<Props> = ({ selectedProgram }) => {
  const [filterPriority, setFilterPriority] = useState<string>('All');
  const [executedActions, setExecutedActions] = useState<Record<string, boolean>>({});

  const handleExecuteAction = (id: string) => {
    setExecutedActions((prev) => ({ ...prev, [id]: true }));
  };

  // Define recommendations list dynamically per program
  const getRecommendations = (pId: ProgramId): AIRecommendation[] => {
    const eapRecommendations: AIRecommendation[] = [
      {
        id: 'rec-eap-1',
        type: '🚨 High Burnout',
        title: 'Engineering Burnout Risk Surge in London Office',
        teaser: 'Engineering burnout metrics in London increased 18% over the last 30 days due to sprint deadlines. Immediate resilience workshops recommended.',
        priority: 'Critical',
        expectedImpact: 'Prevent up to 6 high-performer resignations and $240,000 in replacement costs.',
        estimatedSavings: '$240,000',
        affectedEmployees: 340,
        recommendedAction: 'Deploy targeted 4-week MantraCare Manager Resilience Coaching and grant 2 additional wellness recharge half-days.',
        confidenceScore: 96,
        department: 'Engineering',
        location: 'London, UK',
      },
      {
        id: 'rec-eap-2',
        type: '🏥 Claims Alert',
        title: 'Anxiety-Related Outpatient Claims Spike in NYC',
        teaser: 'Anxiety-related clinical claims rose 24% in the Northeast sales cohort. Deploy specialized Cognitive Behavioral Therapy (CBT) coaching.',
        priority: 'High',
        expectedImpact: 'Resolve 35 severe anxiety cases early, avoiding $180,000 in chronic psychiatric claims.',
        estimatedSavings: '$180,000',
        affectedEmployees: 820,
        recommendedAction: 'Roll out automated Cognitive Behavioral Therapy (CBT) onboarding vouchers to Northeast sales division.',
        confidenceScore: 91,
        department: 'Sales',
        location: 'New York, US',
      },
      {
        id: 'rec-eap-3',
        type: '💰 ROI Opportunity',
        title: 'Expand Women’s Care & Maternal Support Program',
        teaser: 'Women’s Care modules show 94% retention rate and 6.2x ROI. Expanding coverage to dependents can double net savings.',
        priority: 'Strategic',
        expectedImpact: 'Reduce maternity leave turnover by 34% and save $380,000 in retention costs.',
        estimatedSavings: '$380,000',
        affectedEmployees: 2400,
        recommendedAction: 'Enable MantraCare Specialized Maternal & Menopause Care Pathway for all eligible primary dependents.',
        confidenceScore: 95,
        department: 'Company-wide',
        location: 'All Locations',
      }
    ];

    const vcRecommendations: AIRecommendation[] = [
      {
        id: 'rec-vc-1',
        type: '🏥 Claims Alert',
        title: 'Teleconsultation Campaign for Logistics Depots',
        teaser: 'Outpatient ER visits for minor acute symptoms are 35% higher in Logistics depots. Redirecting to video GP consults will reduce claim costs.',
        priority: 'Critical',
        expectedImpact: 'Redirect 450 minor emergency visits to virtual doctors, saving $180,000 in outpatient claims.',
        estimatedSavings: '$180,000',
        affectedEmployees: 3400,
        recommendedAction: 'Deploy localized Virtual Doctor QR codes and posters directly on main warehouse bulletin boards.',
        confidenceScore: 94,
        department: 'Operations & Logistics',
        location: 'Regional Hubs',
      },
      {
        id: 'rec-vc-2',
        type: '🚨 Chronic Risk',
        title: 'Chronic Care Telehealth Coordination Triage',
        teaser: 'Biometric screening data flags high metabolic risks in shift workers. Direct virtual nurse triage intervention is recommended.',
        priority: 'High',
        expectedImpact: 'Reduce cardiovascular claim risk by 22% and save $320,000 in long-term critical hospitalizations.',
        estimatedSavings: '$320,000',
        affectedEmployees: 1800,
        recommendedAction: 'Assign a dedicated MantraCare telehealth nurse to coordinate monthly virtual vitals checkups.',
        confidenceScore: 92,
        department: 'Operations',
        location: 'Global Sites',
      }
    ];

    const hcRecommendations: AIRecommendation[] = [
      {
        id: 'rec-hc-1',
        type: '⚠️ Screening Gap',
        title: 'Biometric Screening Truck Scheduling for Operations',
        teaser: 'Biometric health check completion sits at only 18% in Operations depots compared to 69% company-wide. Elevated risk of undetected chronic markers.',
        priority: 'Critical',
        expectedImpact: 'Screen 850 additional operations employees and identify estimated 110 high-risk individuals.',
        estimatedSavings: '$240,000',
        affectedEmployees: 2500,
        recommendedAction: 'Schedule biometrics screening trucks to visit regional Operations hubs during shift changes.',
        confidenceScore: 95,
        department: 'Operations',
        location: 'Regional Hubs',
      },
      {
        id: 'rec-hc-2',
        type: '🚨 Heart Risk Alert',
        title: 'Borderline Hypertension Clinical Follow-up',
        teaser: 'Biometric results flag 14% of screened workforce with stage 1 or 2 hypertension. Clinical follow-ups are needed to prevent acute events.',
        priority: 'High',
        expectedImpact: 'Intercept cardiovascular escalation in 150 employees, preventing stroke events and saving $420,000.',
        estimatedSavings: '$420,000',
        affectedEmployees: 820,
        recommendedAction: 'Trigger automated telehealth follow-up consultation scheduling loops with nurse practitioners.',
        confidenceScore: 93,
        department: 'Company-wide',
        location: 'All Sites',
      }
    ];

    const nfRecommendations: AIRecommendation[] = [
      {
        id: 'rec-nf-1',
        type: '🚨 Metabolic Risk',
        title: 'Healthy Meal Subsidization & Dietician Triage',
        teaser: 'HRA logs flag elevated BMI and poor dietary habits in Admin and Finance groups. Targeted dietician consultation campaign recommended.',
        priority: 'High',
        expectedImpact: 'Average BMI decrease of 5% in targeted cohorts, avoiding $160,000 in metabolic claims.',
        estimatedSavings: '$160,000',
        affectedEmployees: 1400,
        recommendedAction: 'Introduce healthy cafeteria menu choices and distribute dietician chat consultation vouchers.',
        confidenceScore: 90,
        department: 'Administration & Finance',
        location: 'HQ Offices',
      },
      {
        id: 'rec-nf-2',
        type: '🏃 Physical Inactivity',
        title: 'Corporate Step Challenges & Wearables Distribution',
        teaser: 'HRA reports show 62% of desk-bound office workers average under 4,500 daily steps. High physical inactivity risk.',
        priority: 'Strategic',
        expectedImpact: 'Increase daily step count by 3,500 steps/employee, recovering $210,000 in active capacity.',
        estimatedSavings: '$210,000',
        affectedEmployees: 4500,
        recommendedAction: 'Deploy team-based pedometer step challenge with cafeteria meal voucher rewards.',
        confidenceScore: 94,
        department: 'Development & Support',
        location: 'Global Offices',
      }
    ];

    const chRecommendations: AIRecommendation[] = [
      {
        id: 'rec-ch-1',
        type: '⚠️ Low Adoption',
        title: 'Warehouse Step Campaign Division Kickoff',
        teaser: 'Step challenge participation is 45% lower in regional warehouses compared to HQ. Launch team division battle.',
        priority: 'High',
        expectedImpact: 'Boost warehouse participation rate to 68% and save $95,000 in absenteeism costs.',
        estimatedSavings: '$95,000',
        affectedEmployees: 1200,
        recommendedAction: 'Create localized team step challenge divisions with supervisor incentive gift cards.',
        confidenceScore: 91,
        department: 'Operations',
        location: 'Warehouses',
      },
      {
        id: 'rec-ch-2',
        type: '🚨 Sleep Disturbances',
        title: 'Restorative Sleep Tracking and Night Shift Coaching',
        teaser: 'HRA logs report sleep issues in 42% of night shift workers, leading to safety and focus concerns.',
        priority: 'Critical',
        expectedImpact: 'Improve safety focus metrics and avoid $180,000 in potential workplace accident claims.',
        estimatedSavings: '$180,000',
        affectedEmployees: 850,
        recommendedAction: 'Deploy sleep hygiene tracking challenges and night shift focus webinars.',
        confidenceScore: 93,
        department: 'Operations',
        location: 'Regional Hubs',
      }
    ];

    const campRecommendations: AIRecommendation[] = [
      {
        id: 'rec-camp-1',
        type: '⚠️ Low Adoption',
        title: 'Marketing Lunchtime Wellness Camp Re-runs',
        teaser: 'Webinar signups and camp attendance is only 14% in the Marketing department, citing deadline constraints.',
        priority: 'Strategic',
        expectedImpact: 'Increase camp enrollment to 45% and save $60,000 in stress-related workhour losses.',
        estimatedSavings: '$60,000',
        affectedEmployees: 450,
        recommendedAction: 'Schedule lunchtime Wellness Camp webinar re-runs and send calendar invitations.',
        confidenceScore: 89,
        department: 'Marketing',
        location: 'HQ Offices',
      },
      {
        id: 'rec-camp-2',
        type: '🚨 High Stress',
        title: 'Post-Camp Counselor Check-in Channels',
        teaser: 'Exit surveys for the Virtual Wellness Camp flag elevated work stress in 24% of attendees. Triage to counsellors is needed.',
        priority: 'High',
        expectedImpact: 'Directly intercept 80 borderline burnout cases, avoiding $140,000 in long-term EAP cases.',
        estimatedSavings: '$140,000',
        affectedEmployees: 650,
        recommendedAction: 'Automatically establish private chat counseling follow-up links for camp survey responders.',
        confidenceScore: 92,
        department: 'Company-wide',
        location: 'All Sites',
      }
    ];

    switch (pId) {
      case 'eap':
        return eapRecommendations;
      case 'virtual-care':
        return vcRecommendations;
      case 'health-checks':
        return hcRecommendations;
      case 'nutrition-fitness':
        return nfRecommendations;
      case 'challenges':
        return chRecommendations;
      case 'wellness-camp':
        return campRecommendations;
      case 'all-programs':
      default:
        // Aggregate representative list for the entire portfolio
        return [
          eapRecommendations[0],
          vcRecommendations[0],
          hcRecommendations[0],
          nfRecommendations[1]
        ];
    }
  };

  const currentRecs = getRecommendations(selectedProgram);
  const filteredRecs = currentRecs.filter((rec) =>
    filterPriority === 'All' ? true : rec.priority === filterPriority
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Module Banner */}
      <div className="mantra-card p-6 border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-900 via-[#0A2E5C] to-slate-900 text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30 shrink-0">
              <Icons.Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="mantra-kicker text-purple-300">PREDICTIVE PRESCRIPTIVE INTELLIGENCE</div>
              <h2 className="text-xl md:text-2xl font-bold">MantraCare AI Recommendation Engine</h2>
              <p className="text-xs text-blue-200/80 mt-1">
                Real-time prescriptive action feed generated by continuous ML modeling of workforce health & financial claims.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1.5 rounded-full text-xs font-extrabold bg-purple-500 text-white shadow">
              {currentRecs.length} Active Prescriptions
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between">
        <div>
          <div className="mantra-kicker">STRATEGIC ACTION FEED</div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Prioritized Enterprise Interventions
            </h3>
            <InfoTooltip title={dashboardInfo.aiRecommendations.title} description={dashboardInfo.aiRecommendations.description} />
          </div>
        </div>

        <div className="flex items-center space-x-1 p-1 bg-slate-200 dark:bg-slate-800 rounded-xl text-xs">
          {['All', 'Critical', 'High', 'Strategic'].map((prio) => (
            <button
              key={prio}
              onClick={() => setFilterPriority(prio)}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                filterPriority === prio
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {prio}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Insight Feed List */}
      <div className="space-y-4">
        {filteredRecs.length === 0 ? (
          <div className="mantra-card p-8 text-center text-slate-500 dark:text-slate-400 font-bold">
            No recommendations active for priority filter "{filterPriority}" under this program context.
          </div>
        ) : (
          filteredRecs.map((rec, index) => {
            const isExecuted = executedActions[rec.id];

            return (
              <AccordionCard
                key={rec.id}
                id={rec.id}
                title={`${rec.type} — ${rec.title}`}
                badge={rec.priority}
                badgeColor={
                  rec.priority === 'Critical'
                    ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                    : rec.priority === 'High'
                    ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                    : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                }
                subtitle={rec.teaser}
                defaultExpanded={index === 0}
                icon={
                  rec.type.includes('Burnout') || rec.type.includes('Stress')
                    ? 'Flame'
                    : rec.type.includes('Adoption') || rec.type.includes('Screening')
                    ? 'Users'
                    : rec.type.includes('ROI') || rec.type.includes('Inactivity')
                    ? 'TrendingUp'
                    : rec.type.includes('Claims') || rec.type.includes('Risk')
                    ? 'Stethoscope'
                    : 'ShieldAlert'
                }
              >
                <div className="space-y-5">
                  {/* Metrics Breakdown Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Est. Annual Savings
                      </div>
                      <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                        {rec.estimatedSavings}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Affected Population
                      </div>
                      <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400 mt-1">
                        {rec.affectedEmployees.toLocaleString()} Employees
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Location / Scope
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                        {rec.location || 'Global'} ({rec.department || 'All'})
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900">
                      <div className="text-[10px] font-bold text-purple-700 dark:text-purple-300 uppercase">
                        AI Model Confidence
                      </div>
                      <div className="text-lg font-black text-purple-600 dark:text-purple-400 mt-1">
                        {rec.confidenceScore}% Confidence
                      </div>
                    </div>
                  </div>

                  {/* Expected Business Impact */}
                  <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-xs">
                    <div className="font-bold text-blue-900 dark:text-blue-200 uppercase tracking-wider mb-1">
                      EXPECTED BUSINESS IMPACT
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {rec.expectedImpact}
                    </p>
                  </div>

                  {/* Recommended Action & Trigger Button */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start space-x-3">
                      <Icons.CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Prescribed Action Step:
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          {rec.recommendedAction}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={isExecuted}
                      onClick={() => handleExecuteAction(rec.id)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-lg transition-all shrink-0 flex items-center space-x-2 w-full md:w-auto justify-center ${
                        isExecuted
                          ? 'bg-emerald-600 text-white cursor-default'
                          : 'bg-purple-600 hover:bg-purple-500 text-white'
                      }`}
                    >
                      {isExecuted ? (
                        <>
                          <Icons.Check className="w-4 h-4" />
                          <span>Action Triggered & Queued</span>
                        </>
                      ) : (
                        <>
                          <Icons.Play className="w-4 h-4 fill-white" />
                          <span>Deploy Prescription</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </AccordionCard>
            );
          })
        )}
      </div>
    </div>
  );
};
export default AIRecommendationEngineModule;
