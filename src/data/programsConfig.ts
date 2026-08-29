import type { ProgramId, AIRecommendation, KPICardData } from '../types';

// Enablement Mapping for different Organizations
export const ORG_ENABLED_PROGRAMS: Record<string, ProgramId[]> = {
  'acme-global': ['eap', 'virtual-care', 'nutrition-fitness', 'challenges', 'women-wellness', 'diabetes-care'], // Org A
  'techcorp-inc': ['eap', 'health-checks', 'virtual-care', 'physiotherapy', 'diabetes-care'], // Org B
  'healthfirst-ltd': ['health-checks', 'nutrition-fitness', 'wellness-camp', 'maternity-paternity', 'women-wellness'], // Org C
  'global-finance': ['eap', 'virtual-care', 'health-checks', 'nutrition-fitness', 'challenges', 'wellness-camp', 'diabetes-care', 'maternity-paternity', 'women-wellness', 'physiotherapy'], // Org D (Full Suite)
};

export interface ProgramConfig {
  id: ProgramId;
  name: string;
  kicker: string;
  description: string;
  overallRoiLabel: string;
  
  // Financial Model
  roiFormula: {
    healthcareCostReduction: number;
    reducedAbsenteeism: number;
    reducedPresenteeism: number;
    reducedTurnover: number;
    productivityGain: number;
    programCost: number;
  };
  financialKPIs: KPICardData[];
  fiveYearProjection: { year: string; investment: number; cumulativeSavings: number; netRoi: string }[];
  deptRoiData: { department: string; activeEmployees: number; utilization: string; claimsSaved: string; totalRoi: string }[];
  
  // Executive Overview / Summary
  overviewKPIs: KPICardData[];
  scorecardItems: { icon: string; title: string; badge: string; description: string }[];
  roiTrendSeries: { period: string; cost: number; healthcareSavings: number; productivitySavings: number; netReturn: number; roiMultiple: number }[];
  referralSourceDonut: { name: string; value: number; color: string }[];
  referralLabel: string;
  referralPercentage: string;

  // Workforce Health
  workforceQuestion: string;
  workforceAnswer: string;
  workforceKPIs: KPICardData[];
  workforceFramework: {
    title: string;
    subtitle: string;
    questions: { q: string; a: string; desc: string }[];
  };
  workforceHeatmap: { dept: string; labelVal: number; stress: number; burnout: number; anxiety: number; depression: number; sleepIssue: number; physicalIndex: number }[];
  heatmapMetricLabel: string;
  heatmapMetricKey: string;

  // Employee Experience
  experienceQuestion: string;
  experienceAnswer: string;
  experienceKPIs: KPICardData[];
  onboardingFunnel: { step: string; count: number; pct: string }[];
  modalityDonut: { name: string; value: number; color: string }[];

  // Organization Insights
  insightsKPIs: KPICardData[];
  topRoiCountries: { name: string; flag: string; roi: string; savings: string; emp: string }[];
  topUsageCountries: { name: string; flag: string; usage: string; active: string; pathway: string }[];
  topRiskRegions: { name: string; flag: string; risk: string; vulnerability: string; action: string }[];
  regionalTrendData: { region: string; Q1: number; Q2: number }[];
  globalLocations: { id: string; name: string; code: string; flag: string; x: number; y: number; roi: string; employees: number; utilization: string; savings: string; riskLevel: string }[];

  // AI Intelligence
  aiInsights: { icon: 'TrendingUp' | 'DollarSign' | 'Flame' | 'AlertCircle' | 'Users' | 'Target'; text: string; highlight: string }[];
  aiRecommendations: AIRecommendation[];

  // Reports
  reportsList: { id: string; title: string; category: string; date: string; author: string; pages: string; downloads: string; summary: string; recommendedFor: string }[];
}

// ---------------------------------------------------------
// 1. EAP Program Config
// ---------------------------------------------------------
export const EAP_CONFIG: ProgramConfig = {
  id: 'eap',
  name: 'EAP',
  kicker: 'MENTAL HEALTH & COUNSELLING',
  description: 'Confidential mental health counseling, mindfulness, leader coaching, and crisis response support.',
  overallRoiLabel: 'EAP ROI',
  
  roiFormula: {
    healthcareCostReduction: 1840000,
    reducedAbsenteeism: 680000,
    reducedPresenteeism: 540000,
    reducedTurnover: 396000,
    productivityGain: 280000,
    programCost: 720000,
  },
  financialKPIs: [
    { id: 'eap-fin-cost', title: 'Total Programme Cost', kicker: 'ANNUAL EAP INVESTMENT', value: '720,000', prefix: '$', change: -2.1, changeLabel: 'fixed annual fee', trend: 'down', isGoodTrend: true, sparklineData: [750, 745, 740, 735, 730, 725, 720], icon: 'Wallet' },
    { id: 'eap-fin-pepm', title: 'Cost per Employee', kicker: 'ANNUAL PEPM', value: '38.90', prefix: '$', change: -5.2, changeLabel: 'all-inclusive EAP fee', trend: 'down', isGoodTrend: true, sparklineData: [42, 41.5, 41, 40.2, 39.8, 39.2, 38.9], icon: 'Users' },
    { id: 'eap-fin-savings', title: 'Healthcare Savings', kicker: 'REDUCED MEDICAL CLAIMS', value: '1,840,000', prefix: '$', change: 24.5, changeLabel: 'YoY claims reduction', trend: 'up', isGoodTrend: true, sparklineData: [1200, 1350, 1500, 1620, 1710, 1790, 1840], icon: 'DollarSign' },
    { id: 'eap-fin-net', title: 'Net Savings', kicker: 'TOTAL RETURN - COST', value: '3,016,000', prefix: '$', change: 26.4, changeLabel: 'after all EAP fees', trend: 'up', isGoodTrend: true, sparklineData: [1800, 2100, 2400, 2650, 2800, 2920, 3016], icon: 'CheckCircle2' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 720000, cumulativeSavings: 3732000, netRoi: '5.18x' },
    { year: 'Year 2 (Projected)', investment: 740000, cumulativeSavings: 7800000, netRoi: '5.28x' },
    { year: 'Year 3 (Projected)', investment: 760000, cumulativeSavings: 12200000, netRoi: '5.61x' },
    { year: 'Year 4 (Projected)', investment: 780000, cumulativeSavings: 17200000, netRoi: '5.94x' },
    { year: 'Year 5 (Projected)', investment: 800000, cumulativeSavings: 22800000, netRoi: '6.28x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 4200, utilization: '82%', claimsSaved: '$1,120,000', totalRoi: '5.4x' },
    { department: 'Sales & BD', activeEmployees: 3100, utilization: '88%', claimsSaved: '$890,000', totalRoi: '5.8x' },
    { department: 'Customer Success', activeEmployees: 2400, utilization: '79%', claimsSaved: '$540,000', totalRoi: '4.5x' },
    { department: 'Operations & Logistics', activeEmployees: 3800, utilization: '68%', claimsSaved: '$620,000', totalRoi: '3.9x' },
    { department: 'Finance & Legal', activeEmployees: 1600, utilization: '74%', claimsSaved: '$410,000', totalRoi: '4.7x' },
    { department: 'Human Resources', activeEmployees: 950, utilization: '91%', claimsSaved: '$290,000', totalRoi: '6.2x' },
    { department: 'Product & Design', activeEmployees: 2450, utilization: '85%', claimsSaved: '$690,000', totalRoi: '5.1x' },
  ],
  overviewKPIs: [
    { id: 'eap-ov-eligible', title: 'Eligible Employees', kicker: 'TOTAL EAP SEATS', value: '18,500', change: 8.5, changeLabel: '100% workforce covered', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'eap-ov-registered', title: 'Registered Employees', kicker: 'EAP ONBOARDING ADOPTION', value: '14,504', change: 14.2, changeLabel: '78.4% registration rate', trend: 'up', isGoodTrend: true, sparklineData: [11200, 11800, 12400, 13100, 13700, 14100, 14504], icon: 'UserCheck' },
    { id: 'eap-ov-active', title: 'Active Monthly Users', kicker: 'ACTIVE EAP USERS', value: '11,240', change: 16.8, changeLabel: '77.5% of registered', trend: 'up', isGoodTrend: true, sparklineData: [7200, 8100, 8900, 9600, 10200, 10800, 11240], icon: 'Activity' },
    { id: 'eap-ov-sessions', title: 'Counselling Sessions', kicker: '1-ON-1 EAP SESSIONS', value: '34,200', change: 22.4, changeLabel: 'annual session volume', trend: 'up', isGoodTrend: true, sparklineData: [22000, 24500, 27000, 29000, 31000, 32800, 34200], icon: 'HeartHandshake' },
  ],
  scorecardItems: [
    { icon: 'Award', title: 'EAP Financial ROI (5.18x)', badge: 'Audited', description: 'For every $1 invested in EAP, Acme Global achieves $5.18 in medical cost reduction, absenteeism recovery, and leadership retention gains.' },
    { icon: 'Activity', title: 'Clinical Recovery (84.2%)', badge: 'Top Decile', description: 'Statistically significant PHQ-9 (depression) and GAD-7 (anxiety) severity index reduction within 6 counselling sessions.' },
    { icon: 'Users', title: 'Mindfulness & Yoga Reach', badge: 'Active', description: '12,820 employees completed stress assessments (CERA) and 8,400 engage weekly in virtual yoga and mindfulness workshops.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 180000, healthcareSavings: 420000, productivitySavings: 300000, netReturn: 540000, roiMultiple: 4.0 },
    { period: 'Q2 2025', cost: 180000, healthcareSavings: 460000, productivitySavings: 340000, netReturn: 620000, roiMultiple: 4.4 },
    { period: 'Q3 2025', cost: 180000, healthcareSavings: 500000, productivitySavings: 380000, netReturn: 700000, roiMultiple: 4.9 },
    { period: 'Q4 2025', cost: 180000, healthcareSavings: 540000, productivitySavings: 420000, netReturn: 780000, roiMultiple: 5.3 },
    { period: 'Q1 2026', cost: 180000, healthcareSavings: 580000, productivitySavings: 460000, netReturn: 860000, roiMultiple: 5.18 },
  ],
  referralSourceDonut: [
    { name: 'Self-Referral (Digital App)', value: 48, color: '#2563EB' },
    { name: 'Manager Referral', value: 16, color: '#0D3A73' },
    { name: '1-on-1 Counselling', value: 22, color: '#22C55E' },
    { name: 'Crisis Intervention', value: 5, color: '#EF4444' },
    { name: 'Mindfulness Classes', value: 9, color: '#F59E0B' },
  ],
  referralLabel: 'Self-Referral',
  referralPercentage: '83.6%',
  
  workforceQuestion: 'Are employees actively resolving chronic stress and burnout risks?',
  workforceAnswer: 'Yes. 11,240 employees actively utilized the EAP this month. Counselling sessions and leadership coaching have successfully resolved burnout risks for 84.2% of high-stress risk cohorts.',
  workforceKPIs: [
    { id: 'eap-wh-stress', title: 'Workforce Stress Level', kicker: 'HIGH STRESS INDEX', value: '18.4%', change: -12.2, changeLabel: 'YoY risk reduction', trend: 'down', isGoodTrend: true, sparklineData: [26, 24, 23, 21, 20, 19, 18.4], icon: 'Flame' },
    { id: 'eap-wh-burnout', title: 'Burnout Risk Index', kicker: 'CHRONIC EXHAUSTION', value: '12.8%', change: -15.4, changeLabel: 'critical levels avoided', trend: 'down', isGoodTrend: true, sparklineData: [18, 17, 16, 15, 14, 13.5, 12.8], icon: 'AlertTriangle' },
    { id: 'eap-wh-improvement', title: 'Clinical Recovery Rate', kicker: 'SYMPTOM REDUCTION', value: '84.2%', change: 6.5, changeLabel: 'completed care episodes', trend: 'up', isGoodTrend: true, sparklineData: [78, 79, 81, 82, 83, 83.8, 84.2], icon: 'Activity' },
    { id: 'eap-wh-crisis', title: 'Crisis Interventions', kicker: 'CRITICAL SAVES', value: '142', change: -12.5, changeLabel: '100% resolved safely', trend: 'down', isGoodTrend: true, sparklineData: [180, 172, 165, 158, 150, 145, 142], icon: 'HeartPulse' }
  ],
  workforceFramework: {
    title: 'EAP Workforce Risk Framework',
    subtitle: 'Assessing psychological safety, burnout rates, and clinical recovery markers.',
    questions: [
      { q: 'How is EAP being accessed?', a: '83.6% Self-Referrals', desc: 'The vast majority of EAP uptake is employee-initiated, demonstrating high trust and low stigma across the organization.' },
      { q: 'Is counselling producing outcomes?', a: '84.2% Recovery Rate', desc: 'Statistically significant reductions in PHQ-9 (clinical depression) and GAD-7 (generalized anxiety) score groups.' },
      { q: 'Where are risk levels highest?', a: 'Engineering (68% Burnout)', desc: 'London sprint teams show the highest burnout scores due to project deadlines. Proactive leader support is scheduled.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 68, stress: 74, burnout: 68, anxiety: 58, depression: 42, sleepIssue: 65, physicalIndex: 72 },
    { dept: 'Sales', labelVal: 76, stress: 82, burnout: 76, anxiety: 64, depression: 48, sleepIssue: 71, physicalIndex: 68 },
    { dept: 'Customer Support', labelVal: 79, stress: 85, burnout: 79, anxiety: 69, depression: 52, sleepIssue: 78, physicalIndex: 64 },
    { dept: 'Operations', labelVal: 58, stress: 69, burnout: 58, anxiety: 48, depression: 38, sleepIssue: 59, physicalIndex: 79 },
    { dept: 'Finance', labelVal: 61, stress: 72, burnout: 61, anxiety: 51, depression: 35, sleepIssue: 62, physicalIndex: 74 },
    { dept: 'HR & People', labelVal: 49, stress: 62, burnout: 49, anxiety: 41, depression: 29, sleepIssue: 51, physicalIndex: 84 },
    { dept: 'Product', labelVal: 54, stress: 68, burnout: 54, anxiety: 45, depression: 32, sleepIssue: 55, physicalIndex: 81 },
  ],
  heatmapMetricLabel: 'EAP Burnout Risk',
  heatmapMetricKey: 'burnout',

  experienceQuestion: 'What does the employee journey look like from intake to care completion?',
  experienceAnswer: 'Smooth. Average wait time to first appointment is just 18 hours. Post-session CSAT stands at 4.92 / 5.0, reflecting excellent clinical alignment.',
  experienceKPIs: [
    { id: 'eap-ex-wait', title: 'Time to 1st Appointment', kicker: 'ACCESS SPEED', value: '18 hrs', change: -42.0, changeLabel: 'vs 14-day industry avg', trend: 'down', isGoodTrend: true, sparklineData: [48, 36, 30, 24, 22, 20, 18], icon: 'Clock' },
    { id: 'eap-ex-csat', title: 'Post-Session Rating', kicker: 'CARE SATISFACTION', value: '4.92 / 5.0', change: 3.2, changeLabel: '98.4% positive ratings', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.7, 4.75, 4.8, 4.85, 4.9, 4.92], icon: 'Star' },
    { id: 'eap-ex-repeat', title: 'Repeat Utilization Rate', kicker: 'ONGOING SUPPORT', value: '11.8%', change: -8.5, changeLabel: 'clinical resolution achieved', trend: 'down', isGoodTrend: true, sparklineData: [15, 14, 13.5, 13, 12.5, 12.1, 11.8], icon: 'RefreshCw' },
    { id: 'eap-ex-providers', title: 'Available Provider Rating', kicker: 'PROVIDER STRENGTH', value: '4.95 / 5.0', change: 1.5, changeLabel: 'fully certified network', trend: 'up', isGoodTrend: true, sparklineData: [4.8, 4.85, 4.88, 4.9, 4.92, 4.94, 4.95], icon: 'Award' }
  ],
  onboardingFunnel: [
    { step: 'Eligible Employees', count: 18500, pct: '100%' },
    { step: 'Registered EAP Account', count: 14504, pct: '78.4%' },
    { step: 'Completed Risk Assessment (CERA)', count: 12820, pct: '69.3%' },
    { step: 'Active Monthly Care Users', count: 11240, pct: '60.8%' },
    { step: 'Completed Counselling Plan', count: 9480, pct: '51.2%' }
  ],
  modalityDonut: [
    { name: 'Video Therapy Sessions', value: 45, color: '#3B82F6' },
    { name: 'Chat-Based Counselling', value: 25, color: '#10B981' },
    { name: 'Self-Care Audio Modules', value: 18, color: '#F59E0B' },
    { name: 'Leader Life Coaching', value: 8, color: '#8B5CF6' },
    { name: 'Layoff / Crisis Support', value: 4, color: '#EF4444' },
  ],

  insightsKPIs: [
    { id: 'eap-in-regions', title: 'Active Regions', kicker: 'GLOBAL FOOTPRINT', value: '24 Countries', change: 20.0, changeLabel: 'multi-region operations', trend: 'up', isGoodTrend: true, sparklineData: [16, 18, 19, 21, 22, 23, 24], icon: 'Globe' },
    { id: 'eap-in-sla', title: 'Clinical Response SLA', kicker: 'EMERGENCY DISPATCH', value: '15 min', change: 0, changeLabel: '24/7/365 coverage', trend: 'down', isGoodTrend: true, sparklineData: [15, 15, 15, 15, 15, 15, 15], icon: 'Clock' },
    { id: 'eap-in-compliance', title: 'Privacy Compliance', kicker: 'HIPAA & GDPR SECURITY', value: '100%', change: 0, changeLabel: 'certified secure', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'eap-in-languages', title: 'Supported Languages', kicker: 'NATIVE EXPERTISE', value: '100+', change: 15.0, changeLabel: 'local counselors globally', trend: 'up', isGoodTrend: true, sparklineData: [80, 85, 90, 94, 98, 100, 105], icon: 'Languages' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '5.8x', savings: '$1,280,000', emp: '4,800' },
    { name: 'United States', flag: '🇺🇸', roi: '5.2x', savings: '$2,140,000', emp: '8,500' },
    { name: 'Canada', flag: '🇨🇦', roi: '5.0x', savings: 'C$540,000', emp: '1,600' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '4.9x', savings: '£840,000', emp: '3,400' },
    { name: 'Australia', flag: '🇦🇺', roi: '4.7x', savings: 'A$380,000', emp: '1,200' },
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '88%', active: '4,224', pathway: 'Full EAP Intake' },
    { name: 'United States', flag: '🇺🇸', usage: '84%', active: '7,140', pathway: '1-on-1 Therapy' },
    { name: 'Canada', flag: '🇨🇦', usage: '81%', active: '1,296', pathway: 'Mindfulness & Yoga' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '79%', active: '2,686', pathway: 'Stress Management' },
    { name: 'Australia', flag: '🇦🇺', usage: '76%', active: '912', pathway: 'Leader Coaching' },
  ],
  topRiskRegions: [
    { name: 'Japan', flag: '🇯🇵', risk: 'High', vulnerability: '68%', action: 'Mindfulness Rollout' },
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'Moderate', vulnerability: '52%', action: 'Leadership Coaching' },
    { name: 'United Arab Emirates', flag: '🇦🇪', risk: 'Moderate', vulnerability: '48%', action: 'EAP Awareness' },
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 4.8, Q2: 5.2 },
    { region: 'Europe (EMEA)', Q1: 4.3, Q2: 4.9 },
    { region: 'Asia Pacific', Q1: 5.2, Q2: 5.8 },
    { region: 'Latin America', Q1: 4.1, Q2: 4.7 },
  ],
  globalLocations: [
    { id: 'US', name: 'United States', code: 'USA', flag: '🇺🇸', x: 22, y: 35, roi: '5.2x', employees: 8500, utilization: '84%', savings: '$2.14M', riskLevel: 'Low' },
    { id: 'UK', name: 'United Kingdom', code: 'GBR', flag: '🇬🇧', x: 47, y: 26, roi: '4.9x', employees: 3400, utilization: '79%', savings: '$840k', riskLevel: 'Moderate' },
    { id: 'DE', name: 'Germany', code: 'DEU', flag: '🇩🇪', x: 51, y: 28, roi: '4.6x', employees: 2100, utilization: '75%', savings: '$420k', riskLevel: 'Low' },
    { id: 'IN', name: 'India', code: 'IND', flag: '🇮🇳', x: 70, y: 48, roi: '5.8x', employees: 2800, utilization: '88%', savings: '$1.28M', riskLevel: 'Moderate' },
    { id: 'SG', name: 'Singapore', code: 'SGP', flag: 'SGP', x: 78, y: 56, roi: '4.4x', employees: 900, utilization: '72%', savings: '$190k', riskLevel: 'Low' },
    { id: 'JP', name: 'Japan', code: 'JPN', flag: 'JPN', x: 86, y: 38, roi: '4.1x', employees: 800, utilization: '68%', savings: '$150k', riskLevel: 'High' },
  ],

  aiInsights: [
    { icon: 'Flame', text: 'Engineering shows elevated burnout risk (68%) while counselling utilization remains below the company average.', highlight: '68% burnout' },
    { icon: 'TrendingUp', text: 'EAP ROI increased by 18.2% YoY, delivering 5.18x return on investment.', highlight: '5.18x ROI' },
    { icon: 'DollarSign', text: 'Net savings of $3.01M exceed EAP platform costs by $2.29M — $5.18 returned per $1 invested.', highlight: '$3.01M savings' },
    { icon: 'AlertCircle', text: 'Operations division EAP adoption is at 58% — targeted outreach can unlock $140,000 in preventive savings.', highlight: '58% adoption' }
  ],
  aiRecommendations: [
    { id: 'eap-rec-1', type: '🚨 High Burnout', title: 'Engineering Burnout Risk Surge in London Office', teaser: 'Engineering burnout metrics in London increased 18% over the last 30 days due to sprint deadlines. Resilience workshops recommended.', priority: 'Critical', expectedImpact: 'Prevent up to 6 high-performer resignations and $240,000 in replacement costs.', estimatedSavings: '$240,000', affectedEmployees: 340, recommendedAction: 'Deploy targeted 4-week EAP Manager Resilience Coaching and grant 2 additional wellness recharge half-days.', confidenceScore: 96, department: 'Engineering', location: 'London, UK' },
    { id: 'eap-rec-2', type: '⚠️ Low Adoption', title: 'Operations Division Low EAP Engagement Alert', teaser: 'Operations registration sits at only 58% compared to company average of 78.4%. High potential healthcare claim exposure.', priority: 'High', expectedImpact: 'Increase registration to 65% and unlock an estimated $140,000 in preventive care claims reduction.', estimatedSavings: '$140,000', affectedEmployees: 1200, recommendedAction: 'Launch localized QR-code mobile EAP onboarding campaign during quarterly shift meetings with shift leader incentives.', confidenceScore: 92, department: 'Operations', location: 'Global Sites' },
    { id: 'eap-rec-3', type: '📈 Retention Risk', title: 'High-Stress Tech Leads 3.5× More Likely to Attrite', teaser: 'CERA risk assessments identify 142 senior engineers with high chronic stress scores who have not accessed coaching.', priority: 'Critical', expectedImpact: 'Retain key technical leadership and avoid $520,000 in talent replacement expenditure.', estimatedSavings: '$520,000', affectedEmployees: 142, recommendedAction: 'Schedule confidential executive wellbeing check-in sessions with dedicated MantraCare senior coaches.', confidenceScore: 98, department: 'Engineering', location: 'US & India' }
  ],

  reportsList: [
    { id: 'eap-rep-1', title: 'Q1 2026 EAP Executive Workforce Health & ROI Report', category: 'Executive Reports', date: 'Generated March 31, 2026', author: 'MantraCare AI Intelligence Engine', pages: '14 Pages', downloads: 'PDF, PPTX, XLSX', summary: 'Comprehensive executive briefing summarizing total program investment ($720k), net return ($3.01M), PHQ-9 clinical recovery (84.2%), and department burnout heatmaps.', recommendedFor: 'CHRO, CEO, CFO, Board of Directors' },
    { id: 'eap-rep-2', title: 'Q1 2026 EAP Board of Directors Presentation Deck', category: 'Board Reports', date: 'Generated April 2, 2026', author: 'MantraCare Board Reporting Suite', pages: '12 Slides', downloads: 'PPTX, PDF', summary: 'High-impact slide deck with widescreen executive charts, financial ROI breakdown, healthcare claim cost avoidance, and benchmark comparisons against Fortune 500 tech peers.', recommendedFor: 'Board Committee, Chief Executive Officer' },
    { id: 'eap-rep-3', title: 'Engineering Division EAP Health & Burnout Risk Digest', category: 'Department Reports', date: 'Generated April 5, 2026', author: 'People Analytics Team', pages: '8 Pages', downloads: 'PDF, CSV', summary: 'De-identified squad-level analysis identifying elevated stress drivers in London sprint teams and recommended 4-week manager coaching interventions.', recommendedFor: 'VP of Engineering, Engineering HRBP' }
  ]
};

// ---------------------------------------------------------
// 2. Virtual Care & Telehealth Config
// ---------------------------------------------------------
export const VIRTUAL_CARE_CONFIG: ProgramConfig = {
  id: 'virtual-care',
  name: 'Virtual Care & Telehealth',
  kicker: 'VIRTUAL PRIMARY & CLINICAL CARE',
  description: '24/7 virtual general practitioner consultations, specialist referrals, and digital prescriptions.',
  overallRoiLabel: 'Virtual Care ROI',

  roiFormula: {
    healthcareCostReduction: 1420000,
    reducedAbsenteeism: 210000,
    reducedPresenteeism: 180000,
    reducedTurnover: 0,
    productivityGain: 80000,
    programCost: 450000,
  },
  financialKPIs: [
    { id: 'vc-fin-cost', title: 'Total Programme Cost', kicker: 'ANNUAL CONTRACT VALUE', value: '450,000', prefix: '$', change: -1.8, changeLabel: 'all-inclusive seat rate', trend: 'down', isGoodTrend: true, sparklineData: [470, 465, 460, 458, 455, 452, 450], icon: 'Wallet' },
    { id: 'vc-fin-avoided', title: 'Healthcare Cost Avoided', kicker: 'ER & CLINIC DIVERSION', value: '1,420,000', prefix: '$', change: 21.2, changeLabel: 'avoided out-of-network claims', trend: 'up', isGoodTrend: true, sparklineData: [1100, 1180, 1250, 1310, 1360, 1400, 1420], icon: 'DollarSign' },
    { id: 'vc-fin-productivity', title: 'Productivity Impact', kicker: 'DURING-HOUR CONSULTATIONS', value: '180,000', prefix: '$', change: 16.5, changeLabel: 'workhours saved via telehealth', trend: 'up', isGoodTrend: true, sparklineData: [140, 150, 160, 165, 172, 178, 180], icon: 'Zap' },
    { id: 'vc-fin-roi', title: 'Virtual Care ROI', kicker: 'SAVINGS RATIO', value: '4.20×', change: 14.8, changeLabel: '$1.44M net savings', trend: 'up', isGoodTrend: true, sparklineData: [3.6, 3.8, 3.9, 4.0, 4.1, 4.15, 4.2], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 450000, cumulativeSavings: 1890000, netRoi: '4.20x' },
    { year: 'Year 2 (Projected)', investment: 460000, cumulativeSavings: 4100000, netRoi: '4.46x' },
    { year: 'Year 3 (Projected)', investment: 470000, cumulativeSavings: 6400000, netRoi: '4.54x' },
    { year: 'Year 4 (Projected)', investment: 480000, cumulativeSavings: 8900000, netRoi: '4.64x' },
    { year: 'Year 5 (Projected)', investment: 490000, cumulativeSavings: 11600000, netRoi: '4.73x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 4200, utilization: '65%', claimsSaved: '$410,000', totalRoi: '4.1x' },
    { department: 'Sales & BD', activeEmployees: 3100, utilization: '72%', claimsSaved: '$380,000', totalRoi: '4.5x' },
    { department: 'Customer Success', activeEmployees: 2400, utilization: '68%', claimsSaved: '$240,000', totalRoi: '3.8x' },
    { department: 'Operations & Logistics', activeEmployees: 3800, utilization: '52%', claimsSaved: '$210,000', totalRoi: '3.1x' },
    { department: 'Finance & Legal', activeEmployees: 1600, utilization: '58%', claimsSaved: '$180,000', totalRoi: '3.6x' },
    { department: 'Human Resources', activeEmployees: 950, utilization: '79%', claimsSaved: '$110,000', totalRoi: '4.8x' },
    { department: 'Product & Design', activeEmployees: 2450, utilization: '64%', claimsSaved: '$230,000', totalRoi: '4.0x' },
  ],
  overviewKPIs: [
    { id: 'vc-ov-eligible', title: 'Eligible Employees', kicker: 'COVERED HEADCOUNT', value: '18,500', change: 8.5, changeLabel: '100% active licenses', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'vc-ov-registered', title: 'Registered Users', kicker: 'PLATFORM ADOPTION', value: '11,280', change: 18.4, changeLabel: '61.0% registration rate', trend: 'up', isGoodTrend: true, sparklineData: [8500, 9100, 9600, 10100, 10500, 10900, 11280], icon: 'UserCheck' },
    { id: 'vc-ov-active', title: 'Active Users', kicker: 'MONTHLY UTILISATION', value: '6,420', change: 22.1, changeLabel: '56.9% monthly active', trend: 'up', isGoodTrend: true, sparklineData: [4500, 4900, 5200, 5600, 5950, 6200, 6420], icon: 'Activity' },
    { id: 'vc-ov-consults', title: 'Consultations', kicker: 'TELEHEALTH CONSULTATIONS', value: '18,400', change: 25.4, changeLabel: 'completed GP visits', trend: 'up', isGoodTrend: true, sparklineData: [12000, 13500, 14800, 15900, 16900, 17700, 18400], icon: 'HeartHandshake' },
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Virtual Care ROI (4.20x)', badge: 'Verified', description: 'Significant reduction in out-of-pocket insurance medical claims by diverting non-emergent issues to virtual general practitioners.' },
    { icon: 'Activity', title: 'GP Resolution Rate (91.5%)', badge: 'High SLA', description: '91.5% of cases resolved during the initial teleconsultation, eliminating the need for expensive physical clinic follow-ups.' },
    { icon: 'Clock', title: 'Average Consultation Wait', badge: '12 Mins', description: 'Under 12 minutes median wait time to consult a board-certified physician, preserving workforce productivity.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 112500, healthcareSavings: 310000, productivitySavings: 60000, netReturn: 370000, roiMultiple: 3.2 },
    { period: 'Q2 2025', cost: 112500, healthcareSavings: 340000, productivitySavings: 68000, netReturn: 408000, roiMultiple: 3.6 },
    { period: 'Q3 2025', cost: 112500, healthcareSavings: 380000, productivitySavings: 74000, netReturn: 454000, roiMultiple: 4.0 },
    { period: 'Q4 2025', cost: 112500, healthcareSavings: 410000, productivitySavings: 82000, netReturn: 492000, roiMultiple: 4.3 },
    { period: 'Q1 2026', cost: 112500, healthcareSavings: 440000, productivitySavings: 90000, netReturn: 530000, roiMultiple: 4.20 },
  ],
  referralSourceDonut: [
    { name: 'General Practitioner Consult', value: 65, color: '#3B82F6' },
    { name: 'Specialist Referral', value: 15, color: '#8B5CF6' },
    { name: 'Mental Health Intake', value: 12, color: '#10B981' },
    { name: 'Prescription Renewal', value: 8, color: '#F59E0B' },
  ],
  referralLabel: 'Primary Care GP',
  referralPercentage: '65.0%',

  workforceQuestion: 'Are remote employees getting timely medical care access?',
  workforceAnswer: 'Yes. Remote employees show high virtual-care utilization. Medical resolution rates stand at 91.5% with common concerns focused on ergonomics and basic healthcare advice.',
  workforceKPIs: [
    { id: 'vc-wh-concerns', title: 'Top Health Concerns', kicker: 'PRIMARY TRIAGE', value: 'Primary Care', change: 0, changeLabel: '42% chronic, 58% acute', trend: 'neutral', isGoodTrend: true, sparklineData: [5, 5, 5, 5, 5, 5, 5], icon: 'Stethoscope' },
    { id: 'vc-wh-specialists', title: 'Specialist Referrals', kicker: 'CLINICAL ESCALATIONS', value: '4,800', change: 12.2, changeLabel: 'dermatology, gynae, ortho', trend: 'up', isGoodTrend: false, sparklineData: [3900, 4100, 4300, 4450, 4600, 4720, 4800], icon: 'ArrowUpRight' },
    { id: 'vc-wh-chronic', title: 'Chronic-Care Enrollees', kicker: 'DIABETES & HYPERTENSION', value: '2,840', change: 16.5, changeLabel: 'enrolled in health coaching', trend: 'up', isGoodTrend: true, sparklineData: [2100, 2300, 2450, 2600, 2700, 2780, 2840], icon: 'Activity' },
    { id: 'vc-wh-sla', title: 'Response SLA', kicker: 'WAIT TIME COMPLIANCE', value: '98.8%', change: 1.5, changeLabel: '< 15 min wait time', trend: 'up', isGoodTrend: true, sparklineData: [96.5, 97.2, 97.8, 98.1, 98.4, 98.6, 98.8], icon: 'Clock' }
  ],
  workforceFramework: {
    title: 'Virtual Care Health Framework',
    subtitle: 'Assessing primary care utilization, chronic condition support, and specialist care coordination.',
    questions: [
      { q: 'What is the primary care mix?', a: '65% GP Consultations', desc: 'GP care resolves the majority of acute illnesses without referring to higher-cost urgent care facilities.' },
      { q: 'Are referrals coordinated?', a: '91.5% Internal Resolution', desc: 'Specialist referrals are managed efficiently, ensuring patients find approved, in-network practitioners.' },
      { q: 'Is chronic care supported?', a: '2,840 Active Members', desc: 'Continuous coaching and monitoring for cardiovascular and diabetic cohorts avoids acute hospital admissions.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 65, stress: 72, burnout: 61, anxiety: 55, depression: 38, sleepIssue: 60, physicalIndex: 75 },
    { dept: 'Sales', labelVal: 72, stress: 80, burnout: 70, anxiety: 60, depression: 44, sleepIssue: 68, physicalIndex: 70 },
    { dept: 'Customer Support', labelVal: 68, stress: 81, burnout: 74, anxiety: 65, depression: 48, sleepIssue: 75, physicalIndex: 66 },
    { dept: 'Operations', labelVal: 52, stress: 65, burnout: 55, anxiety: 42, depression: 32, sleepIssue: 54, physicalIndex: 76 },
    { dept: 'Finance', labelVal: 58, stress: 68, burnout: 58, anxiety: 46, depression: 30, sleepIssue: 58, physicalIndex: 78 },
    { dept: 'HR & People', labelVal: 79, stress: 58, burnout: 45, anxiety: 38, depression: 25, sleepIssue: 48, physicalIndex: 86 },
    { dept: 'Product', labelVal: 64, stress: 66, burnout: 50, anxiety: 42, depression: 28, sleepIssue: 52, physicalIndex: 82 },
  ],
  heatmapMetricLabel: 'Virtual Care Utilisation',
  heatmapMetricKey: 'labelVal',

  experienceQuestion: 'How is the user booking and resolution experience?',
  experienceAnswer: 'Streamlined. Employees report a median booking-to-consult time of 12 minutes. Wait times have dropped 32% since implementation.',
  experienceKPIs: [
    { id: 'vc-ex-book', title: 'Average Booking Time', kicker: 'USER FRICTION', value: '2.4 mins', change: -15.2, changeLabel: 'via MantraCare Mobile App', trend: 'down', isGoodTrend: true, sparklineData: [3.1, 2.9, 2.7, 2.6, 2.5, 2.45, 2.4], icon: 'Smartphone' },
    { id: 'vc-ex-wait', title: 'Median Wait Time', kicker: 'SLA ACHIEVEMENT', value: '12 mins', change: -32.0, changeLabel: 'vs 2.4 hours at clinic', trend: 'down', isGoodTrend: true, sparklineData: [22, 19, 17, 15, 14, 13, 12], icon: 'Clock' },
    { id: 'vc-ex-resolution', title: 'Consultation Resolution', kicker: 'CARE EFFECTIVENESS', value: '91.5%', change: 4.8, changeLabel: 'resolved on first call', trend: 'up', isGoodTrend: true, sparklineData: [86, 88, 89, 90, 90.8, 91.2, 91.5], icon: 'CheckCircle2' },
    { id: 'vc-ex-csat', title: 'Patient Satisfaction', kicker: 'POST-CALL CSAT', value: '4.88 / 5.0', change: 2.1, changeLabel: 'highly rated clinical care', trend: 'up', isGoodTrend: true, sparklineData: [4.75, 4.78, 4.8, 4.82, 4.84, 4.86, 4.88], icon: 'Star' }
  ],
  onboardingFunnel: [
    { step: 'Eligible Employees', count: 18500, pct: '100%' },
    { step: 'Onboarded on Mobile App', count: 11280, pct: '61.0%' },
    { step: 'Completed Health Profile', count: 9140, pct: '49.4%' },
    { step: 'Had 1+ Teleconsultation', count: 6420, pct: '34.7%' },
    { step: 'Achieved Resolution', count: 5874, pct: '31.7%' }
  ],
  modalityDonut: [
    { name: 'Video GP Consultations', value: 65, color: '#3B82F6' },
    { name: 'Specialist Referrals', value: 15, color: '#10B981' },
    { name: 'Chronic Care Programs', value: 12, color: '#F59E0B' },
    { name: 'Prescription Orders', value: 8, color: '#8B5CF6' }
  ],

  insightsKPIs: [
    { id: 'vc-in-locations', title: 'Coverage Locations', kicker: 'GLOBAL NETWORK', value: '18 Countries', change: 12.5, changeLabel: 'local licensing active', trend: 'up', isGoodTrend: true, sparklineData: [12, 14, 15, 16, 17, 17, 18], icon: 'Globe' },
    { id: 'vc-in-sla', title: 'Average Triage SLA', kicker: 'URGENT OUTREACH', value: '4.8 mins', change: -12.4, changeLabel: '99% compliance', trend: 'down', isGoodTrend: true, sparklineData: [6.2, 5.8, 5.4, 5.1, 5.0, 4.9, 4.8], icon: 'Clock' },
    { id: 'vc-in-compliance', title: 'Security Auditing', kicker: 'HIPAA & SOC-2', value: '100%', change: 0, changeLabel: 'fully encrypted streams', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'vc-in-licensing', title: 'Licensed Doctors', kicker: 'CERTIFIED PROVIDERS', value: '1,200+', change: 20.0, changeLabel: 'board-certified specialists', trend: 'up', isGoodTrend: true, sparklineData: [900, 1000, 1050, 1100, 1150, 1180, 1200], icon: 'Award' }
  ],
  topRoiCountries: [
    { name: 'United States', flag: '🇺🇸', roi: '5.2x', savings: '$1,120,000', emp: '8,500' },
    { name: 'India', flag: '🇮🇳', roi: '4.8x', savings: '$680,000', emp: '2,800' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '4.2x', savings: '£310,000', emp: '3,400' },
    { name: 'Canada', flag: '🇨🇦', roi: '3.9x', savings: 'C$210,000', emp: '1,600' },
  ],
  topUsageCountries: [
    { name: 'United States', flag: '🇺🇸', usage: '84%', active: '7,140', pathway: 'Urgent Care GP' },
    { name: 'India', flag: '🇮🇳', usage: '79%', active: '2,212', pathway: 'Chronic Care' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '72%', active: '2,448', pathway: 'Specialist Care' },
    { name: 'Canada', flag: '🇨🇦', usage: '68%', active: '1,088', pathway: 'Primary GP Care' },
  ],
  topRiskRegions: [
    { name: 'Japan', flag: '🇯🇵', risk: 'High', vulnerability: '64%', action: 'Add Local Doctors' },
    { name: 'Germany', flag: '🇩🇪', risk: 'Moderate', vulnerability: '48%', action: 'GP Awareness Campaign' },
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 3.8, Q2: 4.4 },
    { region: 'Europe (EMEA)', Q1: 3.2, Q2: 3.9 },
    { region: 'Asia Pacific', Q1: 4.1, Q2: 4.6 },
    { region: 'Latin America', Q1: 3.0, Q2: 3.6 },
  ],
  globalLocations: [
    { id: 'US', name: 'United States', code: 'USA', flag: '🇺🇸', x: 22, y: 35, roi: '5.2x', employees: 8500, utilization: '84%', savings: '$1.12M', riskLevel: 'Low' },
    { id: 'UK', name: 'United Kingdom', code: 'GBR', flag: '🇬🇧', x: 47, y: 26, roi: '4.2x', employees: 3400, utilization: '72%', savings: '$310k', riskLevel: 'Moderate' },
    { id: 'DE', name: 'Germany', code: 'DEU', flag: '🇩🇪', x: 51, y: 28, roi: '3.8x', employees: 2100, utilization: '65%', savings: '$180k', riskLevel: 'Low' },
    { id: 'IN', name: 'India', code: 'IND', flag: '🇮🇳', x: 70, y: 48, roi: '4.8x', employees: 2800, utilization: '79%', savings: '$680k', riskLevel: 'Moderate' },
    { id: 'SG', name: 'Singapore', code: 'SGP', flag: 'SGP', x: 78, y: 56, roi: '3.6x', employees: 900, utilization: '61%', savings: '$90k', riskLevel: 'Low' },
    { id: 'JP', name: 'Japan', code: 'JPN', flag: 'JPN', x: 86, y: 38, roi: '3.2x', employees: 800, utilization: '55%', savings: '$70k', riskLevel: 'High' },
  ],

  aiInsights: [
    { icon: 'Users', text: 'Remote employees show higher virtual-care utilization but longer specialist follow-up intervals.', highlight: 'higher utilization' },
    { icon: 'TrendingUp', text: 'Virtual Care ROI reached 4.2x, driven by a 24% reduction in non-emergent ER visits.', highlight: '4.2x ROI' },
    { icon: 'DollarSign', text: 'Net savings total $1.44M, with claims costs reduced by $1.42M annually.', highlight: '$1.44M savings' }
  ],
  aiRecommendations: [
    { id: 'vc-rec-1', type: '🏥 Claims Alert', title: 'Virtual Care Specialist Follow-up Delays for Remote Staff', teaser: 'Remote staff take an average of 14 days to book specialist referrals compared to 4 days for onsite staff. Care coordination needed.', priority: 'High', expectedImpact: 'Divert up to 25 delayed specialist cases into early care, avoiding emergency hospitalizations.', estimatedSavings: '$95,000', affectedEmployees: 410, recommendedAction: 'Introduce dedicated telehealth care-coordinators to proactively reach out to remote staff who receive specialist referrals.', confidenceScore: 89, department: 'Sales & BD', location: 'Remote Sites' }
  ],

  reportsList: [
    { id: 'vc-rep-1', title: 'Q1 2026 Virtual Care Utilisation & Claims Triage Report', category: 'Executive Reports', date: 'Generated March 28, 2026', author: 'Virtual Medical Board', pages: '11 Pages', downloads: 'PDF, PPTX, XLSX', summary: 'Summary of teleconsultation volumes (18,400 GP visits), resolution rates (91.5%), average wait times, and insurer cost diversion.', recommendedFor: 'CFO, Benefits Director, HR Team' }
  ]
};

// ---------------------------------------------------------
// 3. Corporate Health Checks Config
// ---------------------------------------------------------
export const HEALTH_CHECKS_CONFIG: ProgramConfig = {
  id: 'health-checks',
  name: 'Corporate Health Checks',
  kicker: 'BIOMETRIC HEALTH SCREENING',
  description: 'Onsite biometric screenings, laboratory diagnostics, cardiorespiratory assessment, and risk profiles.',
  overallRoiLabel: 'Health Checks ROI',

  roiFormula: {
    healthcareCostReduction: 840000,
    reducedAbsenteeism: 120000,
    reducedPresenteeism: 0,
    reducedTurnover: 0,
    productivityGain: 160000,
    programCost: 320000,
  },
  financialKPIs: [
    { id: 'hc-fin-cost', title: 'Screening Investment', kicker: 'ANNUAL SCREENING COST', value: '320,000', prefix: '$', change: -1.2, changeLabel: 'all-inclusive lab costs', trend: 'down', isGoodTrend: true, sparklineData: [330, 328, 325, 323, 322, 321, 320], icon: 'Wallet' },
    { id: 'hc-fin-avoided', title: 'Estimated Cost Avoidance', kicker: 'PREVENTIVE INTERVENTION', value: '840,000', prefix: '$', change: 19.5, changeLabel: 'chronic conditions detected early', trend: 'up', isGoodTrend: true, sparklineData: [680, 710, 740, 770, 800, 820, 840], icon: 'DollarSign' },
    { id: 'hc-fin-impact', title: 'Preventive Care Impact', kicker: 'LONG-TERM CLAIMS VALUE', value: '160,000', prefix: '$', change: 14.1, changeLabel: 'reduced future major events', trend: 'up', isGoodTrend: true, sparklineData: [130, 138, 145, 150, 153, 157, 160], icon: 'Zap' },
    { id: 'hc-fin-roi', title: 'Corporate Checks ROI', kicker: 'INVESTMENT MULTIPLE', value: '3.50×', change: 11.2, changeLabel: '$800k bottom-line gain', trend: 'up', isGoodTrend: true, sparklineData: [3.1, 3.2, 3.3, 3.35, 3.4, 3.45, 3.5], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 320000, cumulativeSavings: 1120000, netRoi: '3.50x' },
    { year: 'Year 2 (Projected)', investment: 330000, cumulativeSavings: 2500000, netRoi: '3.85x' },
    { year: 'Year 3 (Projected)', investment: 340000, cumulativeSavings: 4100000, netRoi: '4.10x' },
    { year: 'Year 4 (Projected)', investment: 350000, cumulativeSavings: 6000000, netRoi: '4.35x' },
    { year: 'Year 5 (Projected)', investment: 360000, cumulativeSavings: 8200000, netRoi: '4.55x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 4200, utilization: '58%', claimsSaved: '$280,000', totalRoi: '3.4x' },
    { department: 'Sales & BD', activeEmployees: 3100, utilization: '64%', claimsSaved: '$210,000', totalRoi: '3.7x' },
    { department: 'Customer Success', activeEmployees: 2400, utilization: '55%', claimsSaved: '$140,000', totalRoi: '3.2x' },
    { department: 'Operations & Logistics', activeEmployees: 3800, utilization: '42%', claimsSaved: '$120,000', totalRoi: '2.8x' },
    { department: 'Finance & Legal', activeEmployees: 1600, utilization: '52%', claimsSaved: '$90,000', totalRoi: '3.1x' },
    { department: 'Human Resources', activeEmployees: 950, utilization: '72%', claimsSaved: '$80,000', totalRoi: '4.2x' },
    { department: 'Product & Design', activeEmployees: 2450, utilization: '59%', claimsSaved: '$120,000', totalRoi: '3.5x' },
  ],
  overviewKPIs: [
    { id: 'hc-ov-eligible', title: 'Eligible Employees', kicker: 'SCREENING CAPACITY', value: '18,500', change: 8.5, changeLabel: 'annual checkup limit', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'hc-ov-screening-elig', title: 'Screening-Eligible', kicker: 'ONBOARDING AUDIT', value: '15,000', change: 12.1, changeLabel: 'targeted high-risk cohort', trend: 'up', isGoodTrend: true, sparklineData: [12000, 12800, 13400, 14000, 14400, 14800, 15000], icon: 'ClipboardList' },
    { id: 'hc-ov-completed', title: 'Screenings Completed', kicker: 'HEALTH CHECKS DONE', value: '8,250', change: 16.5, changeLabel: '55.0% completion rate', trend: 'up', isGoodTrend: true, sparklineData: [5500, 6100, 6700, 7150, 7500, 7900, 8250], icon: 'ClipboardCheck' },
    { id: 'hc-ov-highrisk', title: 'High-Risk Employees', kicker: 'CRITICAL CLINICAL BIOMETRIC', value: '1,420', change: -8.2, changeLabel: 'guided to care pathway', trend: 'down', isGoodTrend: true, sparklineData: [1700, 1650, 1600, 1540, 1490, 1450, 1420], icon: 'AlertTriangle' },
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Health Checks ROI (3.50x)', badge: 'Calculated', description: 'Early detection of pre-diabetes, metabolic syndromes, and hypertension avoids acute hospitalization claims.' },
    { icon: 'Activity', title: 'Biometric Risk Improvement', badge: '+15.5%', description: '15.5% of identified high-risk employees achieved biometric normalization within 6 months of diagnostic follow-up.' },
    { icon: 'CheckCircle2', title: 'Care Follow-up (69%)', badge: 'Active', description: '980 out of 1,420 high-risk employees successfully completed clinical checkups and enrolled in follow-up programs.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 80000, healthcareSavings: 180000, productivitySavings: 30000, netReturn: 210000, roiMultiple: 2.6 },
    { period: 'Q2 2025', cost: 80000, healthcareSavings: 200000, productivitySavings: 34000, netReturn: 234000, roiMultiple: 2.9 },
    { period: 'Q3 2025', cost: 80000, healthcareSavings: 220000, productivitySavings: 38000, netReturn: 258000, roiMultiple: 3.2 },
    { period: 'Q4 2025', cost: 80000, healthcareSavings: 240000, productivitySavings: 42000, netReturn: 282000, roiMultiple: 3.5 },
    { period: 'Q1 2026', cost: 80000, healthcareSavings: 250000, productivitySavings: 44000, netReturn: 294000, roiMultiple: 3.5 },
  ],
  referralSourceDonut: [
    { name: 'Pre-Hypertension Risk', value: 42, color: '#EF4444' },
    { name: 'Pre-Diabetes HbA1c Risk', value: 28, color: '#F59E0B' },
    { name: 'Elevated BMI & Obesity', value: 18, color: '#3B82F6' },
    { name: 'Optimal Healthy Profile', value: 12, color: '#10B981' },
  ],
  referralLabel: 'Pre-Hypertension Detected',
  referralPercentage: '42.0%',

  workforceQuestion: 'What biometric risks exist across our employee departments?',
  workforceAnswer: 'Hypertension and HbA1c elevation are the primary biometric risks. Health checks completed for 8,250 employees identified 1,420 high-risk individuals, with follow-ups scheduled for 69%.',
  workforceKPIs: [
    { id: 'hc-wh-diabetes', title: 'Diabetes Risk Cohort', kicker: 'ELEVATED HBA1C', value: '14.2%', change: -8.5, changeLabel: 'pre-diabetic tracking', trend: 'down', isGoodTrend: true, sparklineData: [18, 17, 16.5, 15.8, 15.2, 14.8, 14.2], icon: 'Stethoscope' },
    { id: 'hc-wh-hypertension', title: 'Hypertension Risk', kicker: 'BP SCREENING WARNING', value: '18.1%', change: -11.4, changeLabel: 'BP > 140/90 baseline', trend: 'down', isGoodTrend: true, sparklineData: [22, 21.2, 20.5, 19.8, 19.1, 18.5, 18.1], icon: 'Activity' },
    { id: 'hc-wh-bmi', title: 'Elevated BMI Profile', kicker: 'METABOLIC PROFILE', value: '28.4%', change: -5.2, changeLabel: 'BMI > 25.0 cohort', trend: 'down', isGoodTrend: true, sparklineData: [30, 29.8, 29.5, 29.1, 28.8, 28.6, 28.4], icon: 'Flame' },
    { id: 'hc-wh-cardio', title: 'Cardiovascular Risk', kicker: 'LIPID INDEX WARNING', value: '11.2%', change: -12.8, changeLabel: 'high cholesterol detected', trend: 'down', isGoodTrend: true, sparklineData: [14, 13.5, 13.1, 12.6, 12.1, 11.6, 11.2], icon: 'HeartPulse' }
  ],
  workforceFramework: {
    title: 'Health Screening Risk Framework',
    subtitle: 'Assessing metabolic, cardiovascular, and chronic endocrine risk factors.',
    questions: [
      { q: 'What is the diabetes exposure?', a: '14.2% Diabetes Risk', desc: 'HbA1c levels suggest early-stage pre-diabetic risk for 14.2% of checked employees. Fast-track diet coaching initiated.' },
      { q: 'Are heart risks prominent?', a: '18.1% Hypertension Risk', desc: 'Elevated BP readings show significant corporate office stressors. Stress management programs targeted.' },
      { q: 'Is follow-up care active?', a: '69.0% Completed Follow-ups', desc: '980 employees completed post-screening medical examinations, ensuring safety and claims reduction.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 15, stress: 70, burnout: 60, anxiety: 50, depression: 35, sleepIssue: 58, physicalIndex: 78 },
    { dept: 'Sales', labelVal: 18, stress: 78, burnout: 68, anxiety: 58, depression: 40, sleepIssue: 64, physicalIndex: 74 },
    { dept: 'Customer Support', labelVal: 22, stress: 80, burnout: 72, anxiety: 62, depression: 45, sleepIssue: 70, physicalIndex: 70 },
    { dept: 'Operations', labelVal: 28, stress: 65, burnout: 52, anxiety: 40, depression: 30, sleepIssue: 52, physicalIndex: 79 },
    { dept: 'Finance', labelVal: 14, stress: 68, burnout: 55, anxiety: 42, depression: 28, sleepIssue: 55, physicalIndex: 80 },
    { dept: 'HR & People', labelVal: 10, stress: 55, burnout: 42, anxiety: 34, depression: 22, sleepIssue: 45, physicalIndex: 88 },
    { dept: 'Product', labelVal: 12, stress: 62, burnout: 48, anxiety: 38, depression: 25, sleepIssue: 50, physicalIndex: 84 },
  ],
  heatmapMetricLabel: 'Health Risks Detected (%)',
  heatmapMetricKey: 'labelVal',

  experienceQuestion: 'What does the health check registration and completion journey look like?',
  experienceAnswer: 'Organized. Screenings are booked via the mobile portal with results delivered securely within 48 hours. Post-screening satisfaction is 94.2%.',
  experienceKPIs: [
    { id: 'hc-ex-reg', title: 'Portal Registration', kicker: 'ONBOARDING AUDIT', value: '14,200', change: 16.5, changeLabel: 'registered for checks', trend: 'up', isGoodTrend: true, sparklineData: [11000, 11800, 12400, 12900, 13400, 13800, 14200], icon: 'UserCheck' },
    { id: 'hc-ex-book', title: 'Biometric Booking', kicker: 'APPOINTMENT SCHEDULED', value: '9,450', change: 20.2, changeLabel: 'scheduled onsite screening', trend: 'up', isGoodTrend: true, sparklineData: [6800, 7400, 7900, 8400, 8800, 9150, 9450], icon: 'Calendar' },
    { id: 'hc-ex-completed', title: 'Screening Completion', kicker: 'DIAGNOSTICS DELIVERED', value: '8,250', change: 18.6, changeLabel: 'completed clinical test', trend: 'up', isGoodTrend: true, sparklineData: [5500, 6100, 6700, 7150, 7500, 7900, 8250], icon: 'CheckCircle2' },
    { id: 'hc-ex-csat', title: 'Employee CSAT', kicker: 'FEEDBACK RATING', value: '4.85 / 5.0', change: 1.8, changeLabel: '94.2% positive feedback', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.73, 4.75, 4.78, 4.8, 4.83, 4.85], icon: 'Star' }
  ],
  onboardingFunnel: [
    { step: 'Eligible Employees', count: 18500, pct: '100%' },
    { step: 'Registered Health Checks', count: 14200, pct: '76.8%' },
    { step: 'Screening Appointment Booked', count: 9450, pct: '51.1%' },
    { step: 'Screening Diagnostics Completed', count: 8250, pct: '44.6%' },
    { step: 'Follow-up Treatment Initiated', count: 980, pct: '5.3%' }
  ],
  modalityDonut: [
    { name: 'Onsite Biometric Screening', value: 70, color: '#3B82F6' },
    { name: 'Home Diagnostic Labs', value: 20, color: '#10B981' },
    { name: 'Physician Follow-up Care', value: 10, color: '#F59E0B' }
  ],

  insightsKPIs: [
    { id: 'hc-in-countries', title: 'Active Regions', kicker: 'GLOBAL TESTING SITES', value: '14 Countries', change: 16.5, changeLabel: 'onsite labs active', trend: 'up', isGoodTrend: true, sparklineData: [9, 10, 11, 12, 13, 13, 14], icon: 'Globe' },
    { id: 'hc-in-risk-emp', title: 'Biometric Risk Alerts', kicker: 'PREVENTIVE TRIAGE', value: '1,420', change: -8.2, changeLabel: 'guided to health coaching', trend: 'down', isGoodTrend: true, sparklineData: [1700, 1650, 1600, 1540, 1490, 1450, 1420], icon: 'AlertTriangle' },
    { id: 'hc-in-compliance', title: 'Data Privacy Certs', kicker: 'HIPAA & GDPR SECURITY', value: '100%', change: 0, changeLabel: 'fully de-identified logs', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'hc-in-partners', title: 'Global Lab Network', kicker: 'LAB PARTNERS', value: '450+', change: 12.0, changeLabel: 'accredited diagnostics', trend: 'up', isGoodTrend: true, sparklineData: [380, 400, 415, 430, 440, 445, 450], icon: 'Award' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '4.8x', savings: '$480,000', emp: '2,800' },
    { name: 'United States', flag: '🇺🇸', roi: '3.8x', savings: '$980,000', emp: '8,500' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '3.2x', savings: '£220,000', emp: '3,400' },
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '82%', active: '2,296', pathway: 'HbA1c Screening' },
    { name: 'United States', flag: '🇺🇸', usage: '74%', active: '6,290', pathway: 'Cardiovascular Risk' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '68%', active: '2,312', pathway: 'Biometric Screen' },
  ],
  topRiskRegions: [
    { name: 'India', flag: '🇮🇳', risk: 'High', vulnerability: '74%', action: 'Diabetes Interventions' },
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'Moderate', vulnerability: '52%', action: 'Cardiovascular Coaching' },
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 3.2, Q2: 3.8 },
    { region: 'Europe (EMEA)', Q1: 2.8, Q2: 3.2 },
    { region: 'Asia Pacific', Q1: 4.2, Q2: 4.8 },
    { region: 'Latin America', Q1: 2.6, Q2: 3.0 },
  ],
  globalLocations: [
    { id: 'US', name: 'United States', code: 'USA', flag: '🇺🇸', x: 22, y: 35, roi: '3.8x', employees: 8500, utilization: '74%', savings: '$980k', riskLevel: 'Low' },
    { id: 'UK', name: 'United Kingdom', code: 'GBR', flag: '🇬🇧', x: 47, y: 26, roi: '3.2x', employees: 3400, utilization: '68%', savings: '$220k', riskLevel: 'Moderate' },
    { id: 'DE', name: 'Germany', code: 'DEU', flag: '🇩🇪', x: 51, y: 28, roi: '2.9x', employees: 2100, utilization: '61%', savings: '$110k', riskLevel: 'Low' },
    { id: 'IN', name: 'India', code: 'IND', flag: '🇮🇳', x: 70, y: 48, roi: '4.8x', employees: 2800, utilization: '82%', savings: '$480k', riskLevel: 'Moderate' },
  ],

  aiInsights: [
    { icon: 'AlertCircle', text: 'APAC has lower screening completion (42%) and a higher concentration of cardiovascular risk indicators (74%).', highlight: '74% cardiovascular risk' },
    { icon: 'TrendingUp', text: 'Corporate Health Checks ROI reached 3.5x, driven by early diabetes interventions in India.', highlight: '3.5x ROI' },
    { icon: 'DollarSign', text: 'Preventive cost avoidance of $840,000 exceeded total screening program costs.', highlight: '$840,000 cost avoidance' }
  ],
  aiRecommendations: [
    { id: 'hc-rec-1', type: '🏥 Claims Alert', title: 'Hypertension Risks Identified in APAC Technology Hubs', teaser: 'Screenings identify high pre-hypertension rates (24% of tested employees) in Bengaluru and Singapore offices. Preventive follow-ups needed.', priority: 'High', expectedImpact: 'Avoid up to 12 cardiorespiratory claims and save $140,000 in emergency medical costs.', estimatedSavings: '$140,000', affectedEmployees: 680, recommendedAction: 'Launch onsite clinical follow-up sessions with consulting cardiologists and scale healthy dining choices in tech cafeterias.', confidenceScore: 91, department: 'Engineering', location: 'APAC Hubs' }
  ],

  reportsList: [
    { id: 'hc-rep-1', title: 'Q1 2026 Corporate Health Biometric Screening Audit', category: 'Executive Reports', date: 'Generated March 15, 2026', author: 'MantraCare Clinical Audit Lab', pages: '18 Pages', downloads: 'PDF, XLSX', summary: 'Summary of biometric screening compliance (8,250 tests completed), high-risk cohorts (1,420 employees), and cost-avoidance auditing.', recommendedFor: 'Benefits Board, CHRO, Health Coordinator' }
  ]
};

// ---------------------------------------------------------
// 4. Nutrition & Fitness Config
// ---------------------------------------------------------
export const NUTRITION_FITNESS_CONFIG: ProgramConfig = {
  id: 'nutrition-fitness',
  name: 'Nutrition & Fitness',
  kicker: 'DIET, NUTRITION & EXERCISE',
  description: 'Personalized dietary plans, certified fitness coaching, weekly workouts, and lifestyle indexes.',
  overallRoiLabel: 'Nutrition & Fitness ROI',

  roiFormula: {
    healthcareCostReduction: 620000,
    reducedAbsenteeism: 180000,
    reducedPresenteeism: 120000,
    reducedTurnover: 0,
    productivityGain: 88000,
    programCost: 280000,
  },
  financialKPIs: [
    { id: 'nf-fin-cost', title: 'Program Investment', kicker: 'ANNUAL PROGRAM BUDGET', value: '280,000', prefix: '$', change: -1.8, changeLabel: 'coaching fees & app licensing', trend: 'down', isGoodTrend: true, sparklineData: [290, 288, 285, 283, 282, 281, 280], icon: 'Wallet' },
    { id: 'nf-fin-avoided', title: 'Healthcare Cost Reduction', kicker: 'Avoided Illness Claims', value: '620,000', prefix: '$', change: 16.2, changeLabel: 'reduced high-BMI risk trends', trend: 'up', isGoodTrend: true, sparklineData: [500, 520, 545, 570, 590, 610, 620], icon: 'DollarSign' },
    { id: 'nf-fin-absenteeism', title: 'Absenteeism Reduction', kicker: 'INJURY & ILLNESS SAVINGS', value: '180,000', prefix: '$', change: 14.5, changeLabel: '1.2 sick days saved per employee', trend: 'up', isGoodTrend: true, sparklineData: [140, 150, 158, 164, 170, 175, 180], icon: 'CalendarCheck' },
    { id: 'nf-fin-roi', title: 'Nutrition & Fitness ROI', kicker: 'INVESTMENT GAIN RATIO', value: '3.60×', change: 12.8, changeLabel: '$728k net savings generated', trend: 'up', isGoodTrend: true, sparklineData: [3.1, 3.25, 3.35, 3.42, 3.5, 3.55, 3.6], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 280000, cumulativeSavings: 1008000, netRoi: '3.60x' },
    { year: 'Year 2 (Projected)', investment: 290000, cumulativeSavings: 2200000, netRoi: '3.90x' },
    { year: 'Year 3 (Projected)', investment: 300000, cumulativeSavings: 3600000, netRoi: '4.15x' },
    { year: 'Year 4 (Projected)', investment: 310000, cumulativeSavings: 5200000, netRoi: '4.38x' },
    { year: 'Year 5 (Projected)', investment: 320000, cumulativeSavings: 7000000, netRoi: '4.58x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 4200, utilization: '72%', claimsSaved: '$210,000', totalRoi: '3.4x' },
    { department: 'Sales & BD', activeEmployees: 3100, utilization: '78%', claimsSaved: '$180,000', totalRoi: '3.8x' },
    { department: 'Customer Success', activeEmployees: 2400, utilization: '74%', claimsSaved: '$120,000', totalRoi: '3.2x' },
    { department: 'Operations & Logistics', activeEmployees: 3800, utilization: '55%', claimsSaved: '$110,000', totalRoi: '2.8x' },
    { department: 'Finance & Legal', activeEmployees: 1600, utilization: '65%', claimsSaved: '$90,000', totalRoi: '3.3x' },
    { department: 'Human Resources', activeEmployees: 950, utilization: '84%', claimsSaved: '$70,000', totalRoi: '4.2x' },
    { department: 'Product & Design', activeEmployees: 2450, utilization: '75%', claimsSaved: '$130,000', totalRoi: '3.6x' },
  ],
  overviewKPIs: [
    { id: 'nf-ov-eligible', title: 'Eligible Employees', kicker: 'TOTAL LICENSES', value: '18,500', change: 8.5, changeLabel: '100% active seats', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'nf-ov-registered', title: 'Adoption Rate', kicker: 'ONBOARDING ENROLLMENT', value: '13,320', change: 16.5, changeLabel: '72.0% enrollment rate', trend: 'up', isGoodTrend: true, sparklineData: [9500, 10200, 10800, 11400, 12100, 12700, 13320], icon: 'UserCheck' },
    { id: 'nf-ov-active', title: 'Active Participants', kicker: 'WEEKLY ACTIVE LOGGERS', value: '10,250', change: 19.2, changeLabel: '77.0% active rate', trend: 'up', isGoodTrend: true, sparklineData: [7100, 7800, 8400, 8900, 9350, 9800, 10250], icon: 'Activity' },
    { id: 'nf-ov-completion', title: 'Program Completion', kicker: 'COACHING PLAN FINISH', value: '74.0%', change: 8.5, changeLabel: 'personalized plans finished', trend: 'up', isGoodTrend: true, sparklineData: [62, 65, 68, 70, 72, 73, 74], icon: 'CheckCircle2' },
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Nutrition & Fitness ROI (3.60x)', badge: 'Audited', description: 'Preventive metabolic health coaching saves on long-term medical claims for cardiac, weight, and chronic illness care.' },
    { icon: 'Activity', title: 'Physical Wellness Score', badge: '81.2 / 100', description: 'Average employee fitness and activity index score rose 12.4 points, boosting daily vitality and workspace energy.' },
    { icon: 'Users', title: 'Personal Nutrition Support', badge: '7,840 Plans', description: '7,840 custom nutrition and meal assessments completed under certified dietitian guidance.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 70000, healthcareSavings: 150000, productivitySavings: 22000, netReturn: 172000, roiMultiple: 2.8 },
    { period: 'Q2 2025', cost: 70000, healthcareSavings: 165000, productivitySavings: 26000, netReturn: 191000, roiMultiple: 3.1 },
    { period: 'Q3 2025', cost: 70000, healthcareSavings: 180000, productivitySavings: 30000, netReturn: 210000, roiMultiple: 3.4 },
    { period: 'Q4 2025', cost: 70000, healthcareSavings: 195000, productivitySavings: 34000, netReturn: 229000, roiMultiple: 3.6 },
    { period: 'Q1 2026', cost: 70000, healthcareSavings: 205000, productivitySavings: 36000, netReturn: 241000, roiMultiple: 3.6 },
  ],
  referralSourceDonut: [
    { name: 'Fitness & Gym Workouts', value: 45, color: '#3B82F6' },
    { name: 'Custom Nutrition Plans', value: 30, color: '#10B981' },
    { name: 'Live Coaching Chats', value: 15, color: '#8B5CF6' },
    { name: 'Weight Management', value: 10, color: '#F59E0B' },
  ],
  referralLabel: 'Fitness Tracking',
  referralPercentage: '45.0%',

  workforceQuestion: 'Are employees establishing sustainable fitness and diet patterns?',
  workforceAnswer: 'Yes. Weekly active loggers count has reached 10,250, showing strong participation in steps and diet management. High physical activity scores (avg 3.8 hrs/wk) correlate with lower absenteeism.',
  workforceKPIs: [
    { id: 'nf-wh-activity', title: 'Physical Activity Rate', kicker: 'EXERCISE ADHERENCE', value: '3.8 hrs/wk', change: 9.5, changeLabel: 'active workout minutes', trend: 'up', isGoodTrend: true, sparklineData: [2.9, 3.1, 3.3, 3.5, 3.6, 3.75, 3.8], icon: 'Dumbbell' },
    { id: 'nf-wh-nutrition', title: 'Nutrition Adherence', kicker: 'DIET COACHING REACH', value: '74.2%', change: 16.5, changeLabel: 'active dietary loggers', trend: 'up', isGoodTrend: true, sparklineData: [60, 63, 66, 68, 70, 72, 74.2], icon: 'Apple' },
    { id: 'nf-wh-fitness', title: 'Fitness Engagement', kicker: 'FITNESS SCORES', value: '81.2 / 100', change: 12.4, changeLabel: 'improved strength levels', trend: 'up', isGoodTrend: true, sparklineData: [72, 74, 75.5, 77, 78.5, 80, 81.2], icon: 'Activity' },
    { id: 'nf-wh-weight', title: 'Healthy BMI Progress', kicker: 'LIFESTYLE PROGRESSION', value: '68.0%', change: 8.5, changeLabel: 'weight goals completed', trend: 'up', isGoodTrend: true, sparklineData: [60, 62, 63.5, 65, 66.2, 67.5, 68], icon: 'Flame' }
  ],
  workforceFramework: {
    title: 'Workforce Wellness Framework',
    subtitle: 'Assessing employee fitness habits, body mass indices, and nutritional adherence.',
    questions: [
      { q: 'How active is the workforce?', a: '3.8 Hours/Week Exercise', desc: 'Average weekly workout minutes have increased 9.5% YoY, leading to stronger cardiorespiratory capacity.' },
      { q: 'Is diet coaching effective?', a: '74.2% Meal Adherence', desc: 'Active meal logging and dietitian consultations have successfully reduced elevated cholesterol levels.' },
      { q: 'What is weight management progress?', a: '68.0% Achieving Weight Goals', desc: '68% of enrolled overweight cohorts achieved a 5% baseline weight reduction within 90 days.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 72, stress: 74, burnout: 68, anxiety: 58, depression: 42, sleepIssue: 65, physicalIndex: 72 },
    { dept: 'Sales', labelVal: 68, stress: 82, burnout: 76, anxiety: 64, depression: 48, sleepIssue: 71, physicalIndex: 68 },
    { dept: 'Customer Support', labelVal: 64, stress: 85, burnout: 79, anxiety: 69, depression: 52, sleepIssue: 78, physicalIndex: 64 },
    { dept: 'Operations', labelVal: 79, stress: 69, burnout: 58, anxiety: 48, depression: 38, sleepIssue: 59, physicalIndex: 79 },
    { dept: 'Finance', labelVal: 74, stress: 72, burnout: 61, anxiety: 51, depression: 35, sleepIssue: 62, physicalIndex: 74 },
    { dept: 'HR & People', labelVal: 84, stress: 62, burnout: 49, anxiety: 41, depression: 29, sleepIssue: 51, physicalIndex: 84 },
    { dept: 'Product', labelVal: 81, stress: 68, burnout: 54, anxiety: 45, depression: 32, sleepIssue: 55, physicalIndex: 81 },
  ],
  heatmapMetricLabel: 'Physical Index Score',
  heatmapMetricKey: 'physicalIndex',

  experienceQuestion: 'What does the employee journey look like from enrollment to coaching completion?',
  experienceAnswer: 'Highly engaging. Employees start with a wellness profile, get matched with a certified coach, and participate in challenges. CSAT rating is 4.88 / 5.0.',
  experienceKPIs: [
    { id: 'nf-ex-enroll', title: 'Enrollment starts', kicker: 'COACHING PATHWAY', value: '13,320', change: 16.5, changeLabel: 'onboarded users', trend: 'up', isGoodTrend: true, sparklineData: [9500, 10200, 10800, 11400, 12100, 12700, 13320], icon: 'UserCheck' },
    { id: 'nf-ex-assessment', title: 'Assessments Done', kicker: 'DIET & VITALITY STATUS', value: '7,840', change: 22.0, changeLabel: 'wellness profiles active', trend: 'up', isGoodTrend: true, sparklineData: [4500, 5100, 5700, 6300, 6900, 7400, 7840], icon: 'ClipboardCheck' },
    { id: 'nf-ex-coaching', title: 'Completed Sessions', kicker: '1-ON-1 COACHING CHATS', value: '18,400', change: 25.0, changeLabel: 'dietitian consults completed', trend: 'up', isGoodTrend: true, sparklineData: [11000, 12500, 14000, 15200, 16400, 17500, 18400], icon: 'HeartHandshake' },
    { id: 'nf-ex-csat', title: 'Program Rating', kicker: 'CSAT FEEDBACK', value: '4.88 / 5.0', change: 2.5, changeLabel: 'highly positive feedback', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.73, 4.76, 4.8, 4.82, 4.85, 4.88], icon: 'Star' }
  ],
  onboardingFunnel: [
    { step: 'Eligible Employees', count: 18500, pct: '100%' },
    { step: 'Enrolled in Nutrition/Fitness', count: 13320, pct: '72.0%' },
    { step: 'Completed Vitality Assessment', count: 7840, pct: '42.4%' },
    { step: 'Matched with Personal Coach', count: 6120, pct: '33.1%' },
    { step: 'Achieved Weight/Fitness Goal', count: 4840, pct: '26.2%' }
  ],
  modalityDonut: [
    { name: 'Gym & Cardio Workouts', value: 45, color: '#3B82F6' },
    { name: 'Custom Diet Plans', value: 30, color: '#10B981' },
    { name: 'Personal Coach Chats', value: 15, color: '#8B5CF6' },
    { name: 'Weight Tracking', value: 10, color: '#F59E0B' }
  ],

  insightsKPIs: [
    { id: 'nf-in-countries', title: 'Active Regions', kicker: 'GLOBAL NETWORK', value: '16 Countries', change: 14.1, changeLabel: 'regional challenges active', trend: 'up', isGoodTrend: true, sparklineData: [11, 12, 13, 14, 15, 15, 16], icon: 'Globe' },
    { id: 'nf-in-compliance', title: 'Compliance Standard', kicker: 'PRIVACY PROTOCOL', value: '100%', change: 0, changeLabel: 'HIPAA compliant data logs', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'nf-in-workouts', title: 'Workouts Completed', kicker: 'ACTIVE EXERCISE MINUTES', value: '48,400', change: 32.0, changeLabel: 'runs, walks, gyms logged', trend: 'up', isGoodTrend: true, sparklineData: [32000, 36000, 40000, 43000, 45500, 47200, 48400], icon: 'Activity' },
    { id: 'nf-in-coaches', title: 'Certified Coaches', kicker: 'WELLNESS COACH NETWORK', value: '450+', change: 16.5, changeLabel: 'nutrition & exercise experts', trend: 'up', isGoodTrend: true, sparklineData: [350, 380, 400, 420, 435, 445, 450], icon: 'Award' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '4.8x', savings: '$420,000', emp: '2,800' },
    { name: 'United States', flag: '🇺🇸', roi: '3.8x', savings: '$780,000', emp: '8,500' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '3.4x', savings: '£210,000', emp: '3,400' },
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '84%', active: '2,352', pathway: 'Step Challenge' },
    { name: 'United States', flag: '🇺🇸', usage: '79%', active: '6,715', pathway: 'Diet Consultation' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '72%', active: '2,448', pathway: 'Fitness Coaching' },
  ],
  topRiskRegions: [
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'High', vulnerability: '68%', action: 'Step Challenge Launch' },
    { name: 'Germany', flag: '🇩🇪', risk: 'Moderate', vulnerability: '48%', action: 'Diet Coach Webinars' },
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 3.1, Q2: 3.8 },
    { region: 'Europe (EMEA)', Q1: 2.8, Q2: 3.4 },
    { region: 'Asia Pacific', Q1: 4.2, Q2: 4.8 },
    { region: 'Latin America', Q1: 2.5, Q2: 3.1 },
  ],
  globalLocations: [
    { id: 'US', name: 'United States', code: 'USA', flag: '🇺🇸', x: 22, y: 35, roi: '3.8x', employees: 8500, utilization: '79%', savings: '$780k', riskLevel: 'Low' },
    { id: 'UK', name: 'United Kingdom', code: 'GBR', flag: '🇬🇧', x: 47, y: 26, roi: '3.4x', employees: 3400, utilization: '72%', savings: '$210k', riskLevel: 'Moderate' },
    { id: 'DE', name: 'Germany', code: 'DEU', flag: '🇩🇪', x: 51, y: 28, roi: '3.1x', employees: 2100, utilization: '65%', savings: '$110k', riskLevel: 'Low' },
    { id: 'IN', name: 'India', code: 'IND', flag: '🇮🇳', x: 70, y: 48, roi: '4.8x', employees: 2800, utilization: '84%', savings: '$420k', riskLevel: 'Moderate' },
  ],

  aiInsights: [
    { icon: 'Flame', text: 'Engineering has strong enrollment (72%) but lower weekly activity adherence than the company average.', highlight: 'lower activity adherence' },
    { icon: 'TrendingUp', text: 'Nutrition & Fitness ROI reached 3.6x, driven by a 14.5% reduction in chronic wellness claims.', highlight: '3.6x ROI' },
    { icon: 'DollarSign', text: 'Net savings total $728,000, with absenteeism reduced by $180,000 annually.', highlight: '$728,000 savings' }
  ],
  aiRecommendations: [
    { id: 'nf-rec-1', type: '⚠️ Low Adoption', title: 'Engineering Low Fitness Activity Adherence Alert', teaser: 'Engineering weekly workout loggers have dropped 12% over the last 30 days due to coding releases. Targeted activities recommended.', priority: 'Medium', expectedImpact: 'Improve physical activity indexes and save $80,000 in illness absenteeism.', estimatedSavings: '$80,000', affectedEmployees: 580, recommendedAction: 'Launch a localized Team Step Challenge with shift leader incentives and grant half-day wellness slots.', confidenceScore: 92, department: 'Engineering', location: 'Global Offices' }
  ],

  reportsList: [
    { id: 'nf-rep-1', title: 'Q1 2026 Nutrition & Fitness Executive Wellness Report', category: 'Executive Reports', date: 'Generated March 12, 2026', author: 'MantraCare Health Analytics', pages: '12 Pages', downloads: 'PDF, PPTX, XLSX', summary: 'Summary of wellness challenge enrollment (13,320), workout logs (48,400 completed), and health score metrics.', recommendedFor: 'HR Coordinator, CFO, CEO' }
  ]
};

// ---------------------------------------------------------
// 5. Workplace Challenges Config
// ---------------------------------------------------------
export const WORKPLACE_CHALLENGES_CONFIG: ProgramConfig = {
  id: 'challenges',
  name: 'Workplace Challenges',
  kicker: 'GAMIFIED WELLNESS CHALLENGES',
  description: 'Team-based step challenges, habit streaks, gamified wellness goals, and social rewards.',
  overallRoiLabel: 'Challenges ROI',

  roiFormula: {
    healthcareCostReduction: 220000,
    reducedAbsenteeism: 110000,
    reducedPresenteeism: 60000,
    reducedTurnover: 0,
    productivityGain: 45000,
    programCost: 150000,
  },
  financialKPIs: [
    { id: 'ch-fin-cost', title: 'Program Investment', kicker: 'ANNUAL BUDGET', value: '150,000', prefix: '$', change: -1.0, changeLabel: 'platform licensing fee', trend: 'down', isGoodTrend: true, sparklineData: [155, 154, 153, 152, 151, 150, 150], icon: 'Wallet' },
    { id: 'ch-fin-avoided', title: 'Healthcare Savings', kicker: 'LIFESTYLE DIVERSION', value: '220,000', prefix: '$', change: 12.2, changeLabel: 'avoided musculoskeletal claims', trend: 'up', isGoodTrend: true, sparklineData: [170, 180, 190, 200, 210, 215, 220], icon: 'DollarSign' },
    { id: 'ch-fin-engagement', title: 'Engagement Value', kicker: 'ORGANIZATIONAL ENERGIZER', value: '60,000', prefix: '$', change: 16.5, changeLabel: 'team connectivity lift', trend: 'up', isGoodTrend: true, sparklineData: [45, 48, 51, 54, 57, 59, 60], icon: 'Zap' },
    { id: 'ch-fin-roi', title: 'Workplace Challenges ROI', kicker: 'INVESTMENT RATIO', value: '2.90×', change: 8.5, changeLabel: '$285k net savings', trend: 'up', isGoodTrend: true, sparklineData: [2.5, 2.6, 2.7, 2.75, 2.8, 2.85, 2.9], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 150000, cumulativeSavings: 435000, netRoi: '2.90x' },
    { year: 'Year 2 (Projected)', investment: 155000, cumulativeSavings: 950000, netRoi: '3.06x' },
    { year: 'Year 3 (Projected)', investment: 160000, cumulativeSavings: 1500000, netRoi: '3.12x' },
    { year: 'Year 4 (Projected)', investment: 165000, cumulativeSavings: 2100000, netRoi: '3.18x' },
    { year: 'Year 5 (Projected)', investment: 170000, cumulativeSavings: 2750000, netRoi: '3.23x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 4200, utilization: '58%', claimsSaved: '$90,000', totalRoi: '2.7x' },
    { department: 'Sales & BD', activeEmployees: 3100, utilization: '64%', claimsSaved: '$70,000', totalRoi: '3.0x' },
    { department: 'Customer Success', activeEmployees: 2400, utilization: '61%', claimsSaved: '$50,000', totalRoi: '2.8x' },
    { department: 'Operations & Logistics', activeEmployees: 3800, utilization: '48%', claimsSaved: '$40,000', totalRoi: '2.3x' },
    { department: 'Finance & Legal', activeEmployees: 1600, utilization: '54%', claimsSaved: '$30,000', totalRoi: '2.5x' },
    { department: 'Human Resources', activeEmployees: 950, utilization: '74%', claimsSaved: '$25,000', totalRoi: '3.2x' },
    { department: 'Product & Design', activeEmployees: 2450, utilization: '62%', claimsSaved: '$60,000', totalRoi: '2.9x' },
  ],
  overviewKPIs: [
    { id: 'ch-ov-eligible', title: 'Employees Invited', kicker: 'INIVITATION POOL', value: '18,500', change: 8.5, changeLabel: '100% active staff', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'ch-ov-registered', title: 'Participants', kicker: 'ACTIVE ADOPTERS', value: '10,730', change: 14.1, changeLabel: '58.0% participation rate', trend: 'up', isGoodTrend: true, sparklineData: [8200, 8600, 9100, 9600, 10000, 10400, 10730], icon: 'UserCheck' },
    { id: 'ch-ov-active', title: 'Active Challenges', kicker: 'CAMPAIGNS LOGGED', value: '14 Active', change: 25.0, changeLabel: 'step & sleep challenges', trend: 'up', isGoodTrend: true, sparklineData: [8, 9, 10, 11, 12, 13, 14], icon: 'Activity' },
    { id: 'ch-ov-completion', title: 'Completion Rate', kicker: 'CHALLENGES COMPLETED', value: '64.0%', change: 6.8, changeLabel: 'percentage finishing tasks', trend: 'up', isGoodTrend: true, sparklineData: [58, 59, 60, 61, 62, 63, 64], icon: 'CheckCircle2' },
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Challenges ROI (2.90x)', badge: 'Calculated', description: 'Social gamification yields strong cultural bonding, physical exercise, and minor healthcare claims prevention.' },
    { icon: 'Activity', title: 'Wellness Behaviors', badge: '+16%', description: 'Participating employees reported a 16% improvement in healthy habit index scores (hydration, posture, steps).' },
    { icon: 'Users', title: 'Daily Active Streaks', badge: '3,240 Users', description: '3,240 consistent users maintain a 7+ day daily activity logger streak inside the mobile dashboard app.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 37500, healthcareSavings: 50000, productivitySavings: 10000, netReturn: 60000, roiMultiple: 2.2 },
    { period: 'Q2 2025', cost: 37500, healthcareSavings: 55000, productivitySavings: 12000, netReturn: 67000, roiMultiple: 2.4 },
    { period: 'Q3 2025', cost: 37500, healthcareSavings: 60000, productivitySavings: 14000, netReturn: 74000, roiMultiple: 2.6 },
    { period: 'Q4 2025', cost: 37500, healthcareSavings: 65000, productivitySavings: 16000, netReturn: 81000, roiMultiple: 2.8 },
    { period: 'Q1 2026', cost: 37500, healthcareSavings: 70000, productivitySavings: 18000, netReturn: 88000, roiMultiple: 2.9 },
  ],
  referralSourceDonut: [
    { name: '10k Daily Step Target', value: 50, color: '#3B82F6' },
    { name: '8 Hours Sleep Challenge', value: 20, color: '#8B5CF6' },
    { name: 'Hydration Tracking', value: 15, color: '#10B981' },
    { name: 'Posture & Ergonomics', value: 15, color: '#F59E0B' },
  ],
  referralLabel: 'Step Challenge',
  referralPercentage: '50.0%',

  workforceQuestion: 'Are employees establishing collaborative fitness habits?',
  workforceAnswer: 'Yes. 10,730 employees are participating, with step challenges being the most popular. Average completion rates stand at 64% with strong team engagement.',
  workforceKPIs: [
    { id: 'ch-wh-activity', title: 'Activity Participation', kicker: 'WEEKLY STEPS LOGGED', value: '58.0%', change: 11.2, changeLabel: 'workforce step loggers', trend: 'up', isGoodTrend: true, sparklineData: [48, 50, 52, 54, 55, 57, 58], icon: 'Dumbbell' },
    { id: 'ch-wh-habit', title: 'Habit Adoption Rate', kicker: 'BEHAVIOR CHANGE', value: '64.0%', change: 6.8, changeLabel: 'consistent lifestyle habits', trend: 'up', isGoodTrend: true, sparklineData: [58, 59, 60, 61, 62, 63, 64], icon: 'CheckCircle2' },
    { id: 'ch-wh-engagement', title: 'Challenge Engagement', kicker: 'SOCIAL INTERACTIONS', value: '81.0%', change: 14.5, changeLabel: 'team-based challenge loggers', trend: 'up', isGoodTrend: true, sparklineData: [70, 72, 74, 76, 78, 80, 81], icon: 'Activity' },
    { id: 'ch-wh-behavior', title: 'Wellness Improvement', kicker: 'VITALITY LIFT', value: '+16%', change: 8.5, changeLabel: 'improved habit scores', trend: 'up', isGoodTrend: true, sparklineData: [10, 11, 12, 13, 14, 15, 16], icon: 'Flame' }
  ],
  workforceFramework: {
    title: 'Workplace Challenge Framework',
    subtitle: 'Assessing activity rates, completion rates, and social team bonding markers.',
    questions: [
      { q: 'What is step participation?', a: '58.0% Active Loggers', desc: '58% of invited employees actively log daily steps, contributing to heart health and physical fitness.' },
      { q: 'Is completion rate stable?', a: '64.0% Completion Rate', desc: '64% of started challenges are completed. Weekly team leader boards sustain user engagement.' },
      { q: 'Do streaks show adherence?', a: '3,240 Users with 7+ Day Streaks', desc: 'Daily habit triggers encourage long-term wellness routines (hydration, sleep tracking, exercise).' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 58, stress: 74, burnout: 68, anxiety: 58, depression: 42, sleepIssue: 65, physicalIndex: 72 },
    { dept: 'Sales', labelVal: 64, stress: 82, burnout: 76, anxiety: 64, depression: 48, sleepIssue: 71, physicalIndex: 68 },
    { dept: 'Customer Support', labelVal: 61, stress: 85, burnout: 79, anxiety: 69, depression: 52, sleepIssue: 78, physicalIndex: 64 },
    { dept: 'Operations', labelVal: 48, stress: 69, burnout: 58, anxiety: 48, depression: 38, sleepIssue: 59, physicalIndex: 79 },
    { dept: 'Finance', labelVal: 54, stress: 72, burnout: 61, anxiety: 51, depression: 35, sleepIssue: 62, physicalIndex: 74 },
    { dept: 'HR & People', labelVal: 74, stress: 62, burnout: 49, anxiety: 41, depression: 29, sleepIssue: 51, physicalIndex: 84 },
    { dept: 'Product', labelVal: 62, stress: 68, burnout: 54, anxiety: 45, depression: 32, sleepIssue: 55, physicalIndex: 81 },
  ],
  heatmapMetricLabel: 'Challenge Participation (%)',
  heatmapMetricKey: 'labelVal',

  experienceQuestion: 'How is the social challenge and streak experience?',
  experienceAnswer: 'Highly collaborative. Employees enjoy group challenges, streaks, and team rewards. Average CSAT rating for rewards is 4.86 / 5.0.',
  experienceKPIs: [
    { id: 'ch-ex-enroll', title: 'Challenge Onboarding', kicker: 'MOBILE INTRO', value: '10,730', change: 14.1, changeLabel: 'actively logged on app', trend: 'up', isGoodTrend: true, sparklineData: [8200, 8600, 9100, 9600, 10000, 10400, 10730], icon: 'UserCheck' },
    { id: 'ch-ex-completions', title: 'Challenge Finishers', kicker: 'COMPLETED CAMPAIGNS', value: '64.0%', change: 6.8, changeLabel: 'finished all rules', trend: 'up', isGoodTrend: true, sparklineData: [58, 59, 60, 61, 62, 63, 64], icon: 'CheckCircle2' },
    { id: 'ch-ex-streaks', title: 'Daily 7+ Day Streaks', kicker: 'HABIT BUILDERS', value: '3,240', change: 28.0, changeLabel: 'continuous wellness loggers', trend: 'up', isGoodTrend: true, sparklineData: [1800, 2100, 2400, 2700, 2950, 3100, 3240], icon: 'Zap' },
    { id: 'ch-ex-team', title: 'Team Participation', kicker: 'COLLABORATIVE LOGS', value: '74.2%', change: 16.5, changeLabel: 'departments competing', trend: 'up', isGoodTrend: true, sparklineData: [60, 63, 66, 68, 70, 72, 74.2], icon: 'Users' }
  ],
  onboardingFunnel: [
    { step: 'Eligible Employees', count: 18500, pct: '100%' },
    { step: 'Joined Challenge Program', count: 10730, pct: '58.0%' },
    { step: 'Logged First Activity', count: 9140, pct: '49.4%' },
    { step: 'Maintained 7-Day Streak', count: 3240, pct: '17.5%' },
    { step: 'Received Reward Badge', count: 2150, pct: '11.6%' }
  ],
  modalityDonut: [
    { name: 'Onsite Team Steps', value: 50, color: '#3B82F6' },
    { name: 'Corporate Sleep Challenges', value: 20, color: '#10B981' },
    { name: 'Ergonomic Posture Checks', value: 15, color: '#F59E0B' },
    { name: 'Hydration Streaks', value: 15, color: '#8B5CF6' }
  ],

  insightsKPIs: [
    { id: 'ch-in-regions', title: 'Active Regions', kicker: 'GAMIFIED NETWORK', value: '14 Countries', change: 16.5, changeLabel: 'cross-border challenges', trend: 'up', isGoodTrend: true, sparklineData: [9, 10, 11, 12, 13, 13, 14], icon: 'Globe' },
    { id: 'ch-in-compliance', title: 'GDPR Audited', kicker: 'DATA PRIVACY', value: '100%', change: 0, changeLabel: 'individual scores hidden', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'ch-in-streaks', title: 'Streak Count', kicker: 'WELLNESS STREAKS ACTIVE', value: '3,240', change: 28.0, changeLabel: 'highly active habit loggers', trend: 'up', isGoodTrend: true, sparklineData: [1800, 2100, 2400, 2700, 2950, 3100, 3240], icon: 'Zap' },
    { id: 'ch-in-rewards', title: 'Rewards Dispatched', kicker: 'WELLNESS PERKS', value: '2,150', change: 20.0, changeLabel: 'vouchers & badges claimed', trend: 'up', isGoodTrend: true, sparklineData: [1500, 1700, 1850, 1950, 2020, 2100, 2150], icon: 'Award' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '3.2x', savings: '$90,000', emp: '2,800' },
    { name: 'United States', flag: '🇺🇸', roi: '2.9x', savings: '$160,000', emp: '8,500' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '2.5x', savings: '£60,000', emp: '3,400' },
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '72%', active: '2,016', pathway: 'Gamified Steps' },
    { name: 'United States', flag: '🇺🇸', usage: '58%', active: '4,930', pathway: 'Sleep Tracking' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '52%', active: '1,768', pathway: 'Posture Streak' },
  ],
  topRiskRegions: [
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'Moderate', vulnerability: '52%', action: 'Step Challenge Push' },
    { name: 'Singapore', flag: '🇸🇬', risk: 'Low', vulnerability: '38%', action: 'Rewards Launch' },
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 2.5, Q2: 2.9 },
    { region: 'Europe (EMEA)', Q1: 2.1, Q2: 2.5 },
    { region: 'Asia Pacific', Q1: 2.8, Q2: 3.2 },
    { region: 'Latin America', Q1: 1.9, Q2: 2.3 },
  ],
  globalLocations: [
    { id: 'US', name: 'United States', code: 'USA', flag: '🇺🇸', x: 22, y: 35, roi: '2.9x', employees: 8500, utilization: '58%', savings: '$160k', riskLevel: 'Low' },
    { id: 'UK', name: 'United Kingdom', code: 'GBR', flag: '🇬🇧', x: 47, y: 26, roi: '2.5x', employees: 3400, utilization: '52%', savings: '$60k', riskLevel: 'Moderate' },
    { id: 'IN', name: 'India', code: 'IND', flag: '🇮🇳', x: 70, y: 48, roi: '3.2x', employees: 2800, utilization: '72%', savings: '$90k', riskLevel: 'Moderate' },
  ],

  aiInsights: [
    { icon: 'Users', text: 'Participation is strong, but completion drops significantly after week three.', highlight: 'drops after week three' },
    { icon: 'TrendingUp', text: 'Workplace Challenges ROI stands at 2.9x, supported by $220,000 in healthcare claims prevention.', highlight: '2.9x ROI' },
    { icon: 'DollarSign', text: 'Total Net Savings reach $285,000 across active corporate teams.', highlight: '$285,000 savings' }
  ],
  aiRecommendations: [
    { id: 'ch-rec-1', type: '⚠️ Low Adoption', title: 'Workplace Challenge Completion Drop Alert', teaser: 'Step challenge completion rates dropped 24% after week three in sales departments. Mid-challenge boosters needed.', priority: 'Medium', expectedImpact: 'Improve completion rates to 75% and save $35,000 in engagement values.', estimatedSavings: '$35,000', affectedEmployees: 480, recommendedAction: 'Deploy a Mid-Challenge Incentive Booster (e.g., fitness voucher) to re-engage employees showing lower step metrics.', confidenceScore: 92, department: 'Sales & BD', location: 'Global Offices' }
  ],

  reportsList: [
    { id: 'ch-rep-1', title: 'Q1 2026 Workplace Challenges Team Engagement Digest', category: 'Department Reports', date: 'Generated April 1, 2026', author: 'Gamification Suite', pages: '8 Pages', downloads: 'PDF, CSV', summary: 'Summary of step challenge participation (10,730), completion rates (64%), team streaks, and reward metrics.', recommendedFor: 'HR Lead, VP of Engineering' }
  ]
};

// ---------------------------------------------------------
// 6. Virtual Wellness Camp Config (REAL PRODUCT DETAILS)
// ---------------------------------------------------------
export const WELLNESS_CAMP_CONFIG: ProgramConfig = {
  id: 'wellness-camp',
  name: 'Virtual Wellness Camp',
  kicker: 'LIVE WELLNESS CAMP & WORKSHOPS',
  description: 'Structured virtual wellness camps, live group exercise/nutrition sessions, and rapid chat-based concern resolution.',
  overallRoiLabel: 'Wellness Camp ROI',

  roiFormula: {
    healthcareCostReduction: 380000,
    reducedAbsenteeism: 290000,
    reducedPresenteeism: 110000,
    reducedTurnover: 0,
    productivityGain: 60000,
    programCost: 240000,
  },
  financialKPIs: [
    { id: 'wc-fin-cost', title: 'Program Investment', kicker: 'ANNUAL CAMP INVESTMENT', value: '240,000', prefix: '$', change: -1.5, changeLabel: 'all-inclusive workshop fees', trend: 'down', isGoodTrend: true, sparklineData: [250, 248, 245, 243, 242, 241, 240], icon: 'Wallet' },
    { id: 'wc-fin-avoided', title: 'Healthcare Cost Reduction', kicker: 'AVOIDED MEDICAL CLAIMS', value: '380,000', prefix: '$', change: 24.5, changeLabel: '35% medical cost reduction', trend: 'up', isGoodTrend: true, sparklineData: [260, 280, 300, 320, 340, 360, 380], icon: 'DollarSign' },
    { id: 'wc-fin-absenteeism', title: 'Absenteeism Reduction', kicker: 'WORKHOURS RECOVERED', value: '290,000', prefix: '$', change: 28.6, changeLabel: '48% absenteeism reduction', trend: 'up', isGoodTrend: true, sparklineData: [180, 200, 220, 240, 260, 275, 290], icon: 'CalendarCheck' },
    { id: 'wc-fin-roi', title: 'Virtual Camp ROI', kicker: 'ESTIMATED ROI', value: '3.50×', change: 16.5, changeLabel: 'MantraCare benchmark 3.5x', trend: 'up', isGoodTrend: true, sparklineData: [3.1, 3.2, 3.25, 3.3, 3.38, 3.45, 3.5], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 240000, cumulativeSavings: 840000, netRoi: '3.50x' },
    { year: 'Year 2 (Projected)', investment: 250000, cumulativeSavings: 1800000, netRoi: '3.78x' },
    { year: 'Year 3 (Projected)', investment: 260000, cumulativeSavings: 2900000, netRoi: '3.98x' },
    { year: 'Year 4 (Projected)', investment: 270000, cumulativeSavings: 4200000, netRoi: '4.18x' },
    { year: 'Year 5 (Projected)', investment: 280000, cumulativeSavings: 5700000, netRoi: '4.35x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 4200, utilization: '68%', claimsSaved: '$180,000', totalRoi: '3.4x' },
    { department: 'Sales & BD', activeEmployees: 3100, utilization: '74%', claimsSaved: '$160,000', totalRoi: '3.8x' },
    { department: 'Customer Success', activeEmployees: 2400, utilization: '65%', claimsSaved: '$90,000', totalRoi: '3.1x' },
    { department: 'Operations & Logistics', activeEmployees: 3800, utilization: '52%', claimsSaved: '$80,000', totalRoi: '2.8x' },
    { department: 'Finance & Legal', activeEmployees: 1600, utilization: '58%', claimsSaved: '$60,000', totalRoi: '3.0x' },
    { department: 'Human Resources', activeEmployees: 950, utilization: '82%', claimsSaved: '$50,000', totalRoi: '4.1x' },
    { department: 'Product & Design', activeEmployees: 2450, utilization: '64%', claimsSaved: '$100,000', totalRoi: '3.5x' },
  ],
  overviewKPIs: [
    { id: 'wc-ov-registered', title: 'Registrations', kicker: 'CAMP SIGN-UPS', value: '11,840', change: 16.5, changeLabel: '64.0% adoption rate', trend: 'up', isGoodTrend: true, sparklineData: [8500, 9100, 9600, 10200, 10700, 11200, 11840], icon: 'UserCheck' },
    { id: 'wc-ov-attendance', title: 'Attendance Rate', kicker: 'WORKSHOP ATTENDANCE', value: '88.0%', change: 8.2, changeLabel: 'high workshop engagement', trend: 'up', isGoodTrend: true, sparklineData: [80, 81.5, 83, 84.5, 86, 87, 88], icon: 'Users' },
    { id: 'wc-ov-chats', title: 'Chat Sessions', kicker: 'CHAT-BASED RESOLUTION', value: '14,200', change: 22.0, changeLabel: 'rapid concern triage', trend: 'up', isGoodTrend: true, sparklineData: [9000, 10000, 11100, 12000, 12900, 13600, 14200], icon: 'MessageSquare' },
    { id: 'wc-ov-videos', title: 'Video Sessions', kicker: 'LIVE VIDEO WORKSHOPS', value: '8,400', change: 18.5, changeLabel: 'completed live workouts/seminars', trend: 'up', isGoodTrend: true, sparklineData: [5000, 5600, 6200, 6800, 7300, 7900, 8400], icon: 'Video' },
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Wellness Camp ROI (3.50x)', badge: 'MantraCare Std', description: 'Camps deliver rapid physical/mental health improvements, achieving ~35% healthcare cost reductions and ~48% lower absenteeism.' },
    { icon: 'Activity', title: 'Wellness Improvement (+19%)', badge: 'High Outcomes', description: '+19% increase in overall employee physical-mental health indices before and after the 4-week camp.' },
    { icon: 'Smile', title: '92% Satisfaction Rate', badge: 'High Rating', description: 'Employees report high satisfaction (92%) due to the gamified fitness mix, diet plans, and mental relaxation workouts.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 60000, healthcareSavings: 110000, productivitySavings: 70000, netReturn: 180000, roiMultiple: 3.0 },
    { period: 'Q2 2025', cost: 60000, healthcareSavings: 125000, productivitySavings: 78000, netReturn: 203000, roiMultiple: 3.38 },
    { period: 'Q3 2025', cost: 60000, healthcareSavings: 140000, productivitySavings: 86000, netReturn: 226000, roiMultiple: 3.76 },
    { period: 'Q4 2025', cost: 60000, healthcareSavings: 155000, productivitySavings: 94000, netReturn: 249000, roiMultiple: 4.15 },
    { period: 'Q1 2026', cost: 60000, healthcareSavings: 160000, productivitySavings: 96000, netReturn: 256000, roiMultiple: 3.5 },
  ],
  referralSourceDonut: [
    { name: 'Fitness Camp Workouts', value: 40, color: '#3B82F6' },
    { name: 'Nutrition Webinars', value: 30, color: '#10B981' },
    { name: 'Stress Reduction Seminars', value: 20, color: '#8B5CF6' },
    { name: '1-on-1 Chat Check-ins', value: 10, color: '#F59E0B' },
  ],
  referralLabel: 'Fitness Camp',
  referralPercentage: '40.0%',

  workforceQuestion: 'How is employee wellness camp attendance and concern resolution trending?',
  workforceAnswer: 'Extremely strong. Video workshops logged 8,400 attendances. 14,200 chat check-ins resolved concerns for 3,420 employees, contributing to ~48% absenteeism reductions.',
  workforceKPIs: [
    { id: 'wc-wh-chats', title: 'Concern Chat Sessions', kicker: 'CHAT RESOLUTIONS', value: '14,200', change: 22.0, changeLabel: 'resolved via mobile chat', trend: 'up', isGoodTrend: true, sparklineData: [9000, 10000, 11100, 12000, 12900, 13600, 14200], icon: 'MessageSquare' },
    { id: 'wc-wh-resolved', title: 'Concerns Addressed', kicker: 'WELLNESS RESOLUTION', value: '3,420', change: 16.5, changeLabel: 'biometric/stress goals resolved', trend: 'up', isGoodTrend: true, sparklineData: [2100, 2400, 2650, 2850, 3050, 3250, 3420], icon: 'CheckCircle2' },
    { id: 'wc-wh-fit', title: 'Fitness Participation', kicker: 'WORKOUT ATTENDEES', value: '74.2%', change: 12.2, changeLabel: 'engaged in live workouts', trend: 'up', isGoodTrend: true, sparklineData: [62, 65, 67, 69, 70, 72, 74.2], icon: 'Dumbbell' },
    { id: 'wc-wh-nutri', title: 'Nutrition Participation', kicker: 'DIET PLAN LOGGERS', value: '68.1%', change: 14.1, changeLabel: 'participated in camp meal logs', trend: 'up', isGoodTrend: true, sparklineData: [55, 58, 60, 62, 64, 66, 68.1], icon: 'Apple' }
  ],
  workforceFramework: {
    title: 'Virtual Camp Wellness Framework',
    subtitle: 'Assessing camp workshop attendance, concern resolution rates, and lifestyle index improvements.',
    questions: [
      { q: 'What is workshop attendance?', a: '88.0% Attendance', desc: '88% attendance across live video seminars in stress relief and cardiorespiratory health.' },
      { q: 'Are concerns resolved rapidly?', a: '3,420 Concerns Resolved', desc: '3,420 metabolic risk and stress symptoms resolved via live mobile dietitian/coach chat lines.' },
      { q: 'Does it reduce absenteeism?', a: '48% Absenteeism Decline', desc: 'Continuous engagement in camp workouts significantly reduced medical leaves due to illness/exhaustion.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 68, stress: 74, burnout: 68, anxiety: 58, depression: 42, sleepIssue: 65, physicalIndex: 72 },
    { dept: 'Sales', labelVal: 74, stress: 82, burnout: 76, anxiety: 64, depression: 48, sleepIssue: 71, physicalIndex: 68 },
    { dept: 'Customer Support', labelVal: 65, stress: 85, burnout: 79, anxiety: 69, depression: 52, sleepIssue: 78, physicalIndex: 64 },
    { dept: 'Operations', labelVal: 52, stress: 69, burnout: 58, anxiety: 48, depression: 38, sleepIssue: 59, physicalIndex: 79 },
    { dept: 'Finance', labelVal: 58, stress: 72, burnout: 61, anxiety: 51, depression: 35, sleepIssue: 62, physicalIndex: 74 },
    { dept: 'HR & People', labelVal: 82, stress: 62, burnout: 49, anxiety: 41, depression: 29, sleepIssue: 51, physicalIndex: 84 },
    { dept: 'Product', labelVal: 64, stress: 68, burnout: 54, anxiety: 45, depression: 32, sleepIssue: 55, physicalIndex: 81 },
  ],
  heatmapMetricLabel: 'Camp Attendance (%)',
  heatmapMetricKey: 'labelVal',

  experienceQuestion: 'How is the user booking and resolution experience?',
  experienceAnswer: 'Smooth. Employees register via the camp portal, attend live video/chat sessions, and complete goals. Satisfaction is 92%.',
  experienceKPIs: [
    { id: 'wc-ex-reg', title: 'Camp Registrations', kicker: 'CAMP SIGN-UPS', value: '11,840', change: 16.5, changeLabel: '64% registration rate', trend: 'up', isGoodTrend: true, sparklineData: [8500, 9100, 9600, 10200, 10700, 11200, 11840], icon: 'UserCheck' },
    { id: 'wc-ex-attend', title: 'Live Attendance', kicker: 'WORKSHOP ATTENDANCE', value: '88.0%', change: 8.2, changeLabel: 'high workshop engagement', trend: 'up', isGoodTrend: true, sparklineData: [80, 81.5, 83, 84.5, 86, 87, 88], icon: 'Users' },
    { id: 'wc-ex-completions', title: 'Camp Completions', kicker: 'FINISHED 4-WEEK CAMP', value: '82.0%', change: 11.4, changeLabel: 'completed wellness tasks', trend: 'up', isGoodTrend: true, sparklineData: [70, 72, 74, 76, 78, 80, 82], icon: 'CheckCircle2' },
    { id: 'wc-ex-satisfy', title: 'Overall Satisfaction', kicker: 'POST-CAMP SURVEY', value: '92.0%', change: 2.5, changeLabel: 'benchmark standard satisfaction', trend: 'up', isGoodTrend: true, sparklineData: [88, 89, 90, 90.5, 91, 91.5, 92], icon: 'Star' }
  ],
  onboardingFunnel: [
    { step: 'Eligible Employees', count: 18500, pct: '100%' },
    { step: 'Camp Registrations', count: 11840, pct: '64.0%' },
    { step: 'Attended First Session', count: 10419, pct: '56.3%' },
    { step: 'Addressed Wellness Concern', count: 3420, pct: '18.5%' },
    { step: 'Completed 4-Week Camp', count: 9708, pct: '52.5%' }
  ],
  modalityDonut: [
    { name: 'Live Video Classes', value: 55, color: '#3B82F6' },
    { name: 'Wellness Chat Check-ins', value: 25, color: '#10B981' },
    { name: 'Nutrition Plans Logged', value: 20, color: '#F59E0B' }
  ],

  insightsKPIs: [
    { id: 'wc-in-locations', title: 'Camp Locations', kicker: 'GLOBAL NETWORK', value: '14 Countries', change: 16.5, changeLabel: 'live trainers globally', trend: 'up', isGoodTrend: true, sparklineData: [9, 10, 11, 12, 13, 13, 14], icon: 'Globe' },
    { id: 'wc-in-sla', title: 'Chat Response SLA', kicker: 'LIVE TRIAGE', value: '8 min', change: -12.4, changeLabel: '24/7 coaching active', trend: 'down', isGoodTrend: true, sparklineData: [12, 11, 10, 9.5, 9.0, 8.5, 8.0], icon: 'Clock' },
    { id: 'wc-in-compliance', title: 'Compliance Standard', kicker: 'PRIVACY AUDIT', value: '100%', change: 0, changeLabel: 'ISO-27001 & HIPAA', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'wc-in-events', title: 'Events Streamed', kicker: 'LIVE WORKSHOPS LOGGED', value: '142', change: 20.0, changeLabel: 'yoga, diet, sleep webinars', trend: 'up', isGoodTrend: true, sparklineData: [100, 110, 118, 125, 131, 137, 142], icon: 'Activity' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '3.8x', savings: '$160,000', emp: '2,800' },
    { name: 'United States', flag: '🇺🇸', roi: '3.5x', savings: '$380,000', emp: '8,500' },
    { name: 'United Kingdom', flag: '🇬🇧', roi: '3.3x', savings: '£90,000', emp: '3,400' },
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '82%', active: '2,296', pathway: 'Live Video Gym' },
    { name: 'United States', flag: '🇺🇸', usage: '64%', active: '5,440', pathway: 'Diet Coaching' },
    { name: 'United Kingdom', flag: '🇬🇧', usage: '58%', active: '1,972', pathway: 'Stress Management' },
  ],
  topRiskRegions: [
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'Moderate', vulnerability: '52%', action: 'Chat Support Push' },
    { name: 'Singapore', flag: '🇸🇬', risk: 'Low', vulnerability: '36%', action: 'Webinar Rollout' },
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 3.1, Q2: 3.5 },
    { region: 'Europe (EMEA)', Q1: 2.8, Q2: 3.3 },
    { region: 'Asia Pacific', Q1: 3.4, Q2: 3.8 },
    { region: 'Latin America', Q1: 2.5, Q2: 3.0 },
  ],
  globalLocations: [
    { id: 'US', name: 'United States', code: 'USA', flag: '🇺🇸', x: 22, y: 35, roi: '3.5x', employees: 8500, utilization: '58%', savings: '$380k', riskLevel: 'Low' },
    { id: 'UK', name: 'United Kingdom', code: 'GBR', flag: '🇬🇧', x: 47, y: 26, roi: '3.3x', employees: 3400, utilization: '58%', savings: '$90k', riskLevel: 'Moderate' },
    { id: 'IN', name: 'India', code: 'IND', flag: '🇮🇳', x: 70, y: 48, roi: '3.8x', employees: 2800, utilization: '82%', savings: '$160k', riskLevel: 'Moderate' },
  ],

  aiInsights: [
    { icon: 'Users', text: 'Video-session attendance is strong, but chat-based concern resolution is taking longer than benchmark in APAC.', highlight: 'taking longer than benchmark' },
    { icon: 'TrendingUp', text: 'Virtual Wellness Camp ROI achieved 3.5x, reflecting a 48% reduction in absenteeism.', highlight: '3.5x ROI' },
    { icon: 'DollarSign', text: 'Healthcare cost reductions reached 35% compared to baseline claims.', highlight: '35% cost reduction' }
  ],
  aiRecommendations: [
    { id: 'wc-rec-1', type: '🚨 High Burnout', title: 'APAC Wellness Camp Triage Response Delays', teaser: 'Employee concern chat response times in Singapore average 14 minutes against the 8-minute camp benchmark. Resilience workshops recommended.', priority: 'High', expectedImpact: 'Improve response compliance to 98% and avoid $25,000 in illness absences.', estimatedSavings: '$25,000', affectedEmployees: 320, recommendedAction: 'Deploy additional certified coaches during APAC high-volume check-in periods to reduce chat wait times.', confidenceScore: 92, department: 'Customer Success', location: 'Singapore Hub' }
  ],

  reportsList: [
    { id: 'wc-rep-1', title: 'Q1 2026 Virtual Wellness Camp Board Briefing Report', category: 'Executive Reports', date: 'Generated April 3, 2026', author: 'Wellness Camp Board Suite', pages: '10 Pages', downloads: 'PDF, PPTX', summary: 'Comprehensive executive briefing summarizing registrations (11,840), attendance (88%), video workouts, and absenteeism reduction auditing.', recommendedFor: 'Benefits Committee, CHRO, VP Finance' }
  ]
};

// ---------------------------------------------------------
// 7. Diabetes Care Config
// ---------------------------------------------------------
export const DIABETES_CARE_CONFIG: ProgramConfig = {
  id: 'diabetes-care',
  name: 'Diabetes Care',
  kicker: 'CHRONIC CARE MANAGEMENT',
  description: 'Expert-led blood glucose monitoring, dietician check-ins, medical coordination, and GLP-1 weight therapy.',
  overallRoiLabel: 'Diabetes Care ROI',
  roiFormula: {
    healthcareCostReduction: 380000,
    reducedAbsenteeism: 90000,
    reducedPresenteeism: 50000,
    reducedTurnover: 0,
    productivityGain: 40000,
    programCost: 150000,
  },
  financialKPIs: [
    { id: 'db-cost', title: 'Program Cost', kicker: 'ANNUAL INVESTMENT', value: '150,000', prefix: '$', change: 0, changeLabel: 'fixed program fee', trend: 'neutral', isGoodTrend: true, sparklineData: [150, 150, 150, 150, 150, 150, 150], icon: 'Wallet' },
    { id: 'db-savings', title: 'Healthcare Savings', kicker: 'CLAIMS REDUCTION', value: '380,000', prefix: '$', change: 18.5, changeLabel: 'avoided metabolic events', trend: 'up', isGoodTrend: true, sparklineData: [210, 240, 280, 310, 340, 360, 380], icon: 'DollarSign' },
    { id: 'db-net', title: 'Net Savings', kicker: 'VALUE SAVED', value: '410,000', prefix: '$', change: 16.2, changeLabel: 'net return', trend: 'up', isGoodTrend: true, sparklineData: [280, 310, 340, 365, 380, 395, 410], icon: 'CheckCircle2' },
    { id: 'db-roi', title: 'Diabetes ROI', kicker: 'MULTIPLE', value: '3.73×', change: 8.5, changeLabel: 'validated savings yield', trend: 'up', isGoodTrend: true, sparklineData: [3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 3.73], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 150000, cumulativeSavings: 560000, netRoi: '3.73x' },
    { year: 'Year 2 (Projected)', investment: 153000, cumulativeSavings: 1180000, netRoi: '3.85x' },
    { year: 'Year 3 (Projected)', investment: 156000, cumulativeSavings: 1840000, netRoi: '3.93x' },
    { year: 'Year 4 (Projected)', investment: 159000, cumulativeSavings: 2550000, netRoi: '4.01x' },
    { year: 'Year 5 (Projected)', investment: 162000, cumulativeSavings: 3310000, netRoi: '4.08x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 450, utilization: '68%', claimsSaved: '$180,000', totalRoi: '4.1x' },
    { department: 'Sales & BD', activeEmployees: 320, utilization: '72%', claimsSaved: '$140,000', totalRoi: '3.8x' },
    { department: 'Operations & Logistics', activeEmployees: 680, utilization: '62%', claimsSaved: '$110,000', totalRoi: '3.1x' },
  ],
  overviewKPIs: [
    { id: 'db-ov-eligible', title: 'Eligible Employees', kicker: 'DIABETIC LICENSE COHORT', value: '8,400', change: 8.5, changeLabel: 'employees qualified', trend: 'up', isGoodTrend: true, sparklineData: [7200, 7500, 7800, 8000, 8100, 8250, 8400], icon: 'Users' },
    { id: 'db-ov-registered', title: 'Enrolled Members', kicker: 'ACTIVE ENROLLEES', value: '1,840', change: 16.5, changeLabel: '21.9% signup rate', trend: 'up', isGoodTrend: true, sparklineData: [1100, 1300, 1450, 1580, 1680, 1750, 1840], icon: 'UserCheck' },
    { id: 'db-ov-active', title: 'Glucose Loggers', kicker: 'ACTIVE LOGGERS', value: '1,220', change: 19.2, changeLabel: '66.3% of enrollees', trend: 'up', isGoodTrend: true, sparklineData: [800, 920, 1010, 1080, 1140, 1190, 1220], icon: 'Activity' },
    { id: 'db-ov-csat', title: 'Coach Satisfaction', kicker: 'USER SURVEY INDEX', value: '4.88 / 5.0', change: 2.4, changeLabel: '92% positive rating', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.88], icon: 'Heart' }
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Diabetes Management ROI (3.73x)', badge: 'Calculated', description: 'Continuous glucose tracking and dietitian check-ins avoid emergency admissions and critical diabetic incidents.' },
    { icon: 'Activity', title: 'Average Blood Sugar Decrease', badge: '-1.2% HbA1c', description: 'Enrolled employees show an average 1.2% reduction in HbA1c levels within 90 days of tracking.' },
    { icon: 'Users', title: 'Coach Consultations', badge: '1,850 sessions', description: '1,850 personal chat coaching sessions logged with certified diabetes care specialists.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 37500, healthcareSavings: 90000, productivitySavings: 20000, netReturn: 110000, roiMultiple: 2.9 },
    { period: 'Q2 2025', cost: 37500, healthcareSavings: 98000, productivitySavings: 22000, netReturn: 120000, roiMultiple: 3.2 },
    { period: 'Q3 2025', cost: 37500, healthcareSavings: 105000, productivitySavings: 25000, netReturn: 130000, roiMultiple: 3.4 },
    { period: 'Q4 2025', cost: 37500, healthcareSavings: 112000, productivitySavings: 28000, netReturn: 140000, roiMultiple: 3.7 },
    { period: 'Q1 2026', cost: 37500, healthcareSavings: 118000, productivitySavings: 30000, netReturn: 148000, roiMultiple: 3.73 },
  ],
  referralSourceDonut: [
    { name: 'Onsite Health Checks', value: 45, color: '#3B82F6' },
    { name: 'Self-Care App Triage', value: 25, color: '#10B981' },
    { name: 'General Practitioner Refer', value: 20, color: '#F59E0B' },
    { name: 'Manager Outreach', value: 10, color: '#8B5CF6' }
  ],
  referralLabel: 'Biometric Screened',
  referralPercentage: '65.2%',
  workforceQuestion: 'Are diabetic employees effectively managing blood sugar risks?',
  workforceAnswer: 'Yes. 1,220 active loggers showed an average 1.2% HbA1c reduction. Triage pathways redirected 84% of high-risk cases into lifestyle coaching.',
  workforceKPIs: [
    { id: 'db-wh-prev', title: 'Diabetes Prevalence', kicker: 'POPULATION EXPOSURE', value: '6.2%', change: -4.5, changeLabel: 'average benchmark 8.4%', trend: 'down', isGoodTrend: true, sparklineData: [7.2, 7.0, 6.8, 6.6, 6.4, 6.3, 6.2], icon: 'Users' },
    { id: 'db-wh-followup', title: 'Follow-up Consultation', kicker: 'CLINICAL CONTINUITY', value: '88.5%', change: 11.2, changeLabel: 'scheduled within 14 days', trend: 'up', isGoodTrend: true, sparklineData: [78, 80, 82, 84, 86, 87.5, 88.5], icon: 'Clock' },
    { id: 'db-wh-hba1c', title: 'Average HbA1c Reduction', kicker: 'GLYCOSYLATED HEMOGLOBIN', value: '-1.2%', change: 14.5, changeLabel: 'average 90-day progress', trend: 'down', isGoodTrend: true, sparklineData: [0.4, 0.6, 0.8, 1.0, 1.1, 1.15, 1.2], icon: 'Activity' },
    { id: 'db-wh-risk', title: 'High-Risk Interventions', kicker: 'CRITICAL ESCALATIONS', value: '180 Cases', change: -18.2, changeLabel: 'stabilized via care coach', trend: 'down', isGoodTrend: true, sparklineData: [220, 210, 202, 195, 190, 184, 180], icon: 'ShieldAlert' }
  ],
  workforceFramework: {
    title: 'MantraCare Diabetes Care Framework',
    subtitle: 'Assessing glycemic index levels, screening compliance and dietitian support.',
    questions: [
      { q: 'How are members registered?', a: '65.2% via Biometric Screens', desc: 'Onsite blood testing and annual corporate screenings act as the primary engine for early diabetes risk identification.' },
      { q: 'Is active logging improving HbA1c?', a: '88.5% Follow-up Success', desc: 'Regular glucose logging matched with personalized dietitian feedback drives significant lifestyle compliance.' },
      { q: 'Where are risk factors highest?', a: 'Operations (14% High Risk)', desc: 'Operations hubs show higher prevalence of metabolic risks due to shift times and cafeteria meal availability.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 12, stress: 15, burnout: 12, anxiety: 10, depression: 8, sleepIssue: 14, physicalIndex: 78 },
    { dept: 'Sales', labelVal: 14, stress: 18, burnout: 14, anxiety: 12, depression: 10, sleepIssue: 16, physicalIndex: 74 },
    { dept: 'Operations', labelVal: 22, stress: 26, burnout: 22, anxiety: 20, depression: 18, sleepIssue: 25, physicalIndex: 68 },
  ],
  heatmapMetricLabel: 'Diabetes Risk Prevalence',
  heatmapMetricKey: 'depression',
  experienceQuestion: 'What does the user journey look like for diabetic enrollees?',
  experienceAnswer: 'Highly engaging. Meal logging frequency averages 4.6 logs per week, and the mobile coaching chat response times average under 10 minutes.',
  experienceKPIs: [
    { id: 'db-ex-meals', title: 'Average Meal Logs', kicker: 'WEEKLY DIARIES', value: '4.6 / wk', change: 18.2, changeLabel: 'logs per user avg', trend: 'up', isGoodTrend: true, sparklineData: [3.1, 3.4, 3.8, 4.0, 4.2, 4.4, 4.6], icon: 'CalendarDays' },
    { id: 'db-ex-csat', title: 'Coach CSAT Rating', kicker: 'CARE SATISFACTION', value: '4.88 / 5.0', change: 2.4, changeLabel: '92% positive reviews', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.88], icon: 'Star' },
    { id: 'db-ex-retention', title: '90-Day Retention', kicker: 'PATHWAY COMPLIANCE', value: '78.5%', change: 8.5, changeLabel: 'active after 90 days', trend: 'up', isGoodTrend: true, sparklineData: [68, 70, 72, 74, 75, 77, 78.5], icon: 'UserCheck' },
    { id: 'db-ex-lessons', title: 'Diabetes Lessons Read', kicker: 'DIABETIC EDUCATION', value: '8,240', change: 14.2, changeLabel: 'completed learning modules', trend: 'up', isGoodTrend: true, sparklineData: [5200, 5800, 6400, 7000, 7500, 7900, 8240], icon: 'BookOpen' }
  ],
  onboardingFunnel: [
    { step: 'Workforce Headcount', count: 18500, pct: '100%' },
    { step: 'Identified High-Risk', count: 2800, pct: '15.1%' },
    { step: 'Active Enrollments', count: 1840, pct: '9.9%' },
    { step: 'Weekly Active Loggers', count: 1220, pct: '6.6%' },
    { step: 'Completed Care Plan', count: 850, pct: '4.6%' }
  ],
  modalityDonut: [
    { name: 'Glucose Tracking', value: 50, color: '#3B82F6' },
    { name: 'Dietitian Consultations', value: 30, color: '#10B981' },
    { name: 'GLP-1 Care Coordination', value: 20, color: '#F59E0B' }
  ],
  insightsKPIs: [
    { id: 'db-in-regions', title: 'Active Regions', kicker: 'GLOBAL FOOTPRINT', value: '18 Countries', change: 12.5, changeLabel: 'hubs active', trend: 'up', isGoodTrend: true, sparklineData: [12, 13, 14, 15, 16, 17, 18], icon: 'Globe' },
    { id: 'db-in-sla', title: 'Clinical Response SLA', kicker: 'EMERGENCY RESPONSE', value: '10 min', change: 0, changeLabel: '24/7/365 coverage', trend: 'down', isGoodTrend: true, sparklineData: [10, 10, 10, 10, 10, 10, 10], icon: 'Clock' },
    { id: 'db-in-compliance', title: 'Privacy Compliance', kicker: 'HIPAA & GDPR SECURITY', value: '100%', change: 0, changeLabel: 'secure storage', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'db-in-languages', title: 'Supported Languages', kicker: 'NATIVE CARE', value: '60+', change: 12.0, changeLabel: 'dietitians globally', trend: 'up', isGoodTrend: true, sparklineData: [45, 48, 50, 52, 55, 58, 60], icon: 'Languages' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '4.1×', savings: '$180,000', emp: '4,800' },
    { name: 'United States', flag: '🇺🇸', roi: '3.8×', savings: '$140,000', emp: '8,500' }
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '72%', active: '1,840', pathway: 'Glucose & Diet' }
  ],
  topRiskRegions: [
    { name: 'United Arab Emirates', flag: '🇦🇪', risk: 'High', vulnerability: '78%', action: 'GP Clinic Setup' }
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 3.5, Q2: 3.8 },
    { region: 'Asia Pacific', Q1: 3.8, Q2: 4.1 }
  ],
  globalLocations: [
    { id: 'db-loc-1', name: 'India Office', code: 'IND', flag: 'IND', x: 74, y: 53, roi: '4.1x', employees: 4800, utilization: '72%', savings: '$180k', riskLevel: 'Moderate' }
  ],
  aiInsights: [
    { icon: 'TrendingUp', text: 'Diabetes program ROI reached 3.73x due to outpatient hospitalization avoidance.', highlight: '3.73x ROI' }
  ],
  aiRecommendations: [
    { id: 'db-rec-1', type: '🚨 Chronic Risk', title: 'Biometric Screening follow-ups in Regional Depots', teaser: '840 pre-diabetic employees identified. Dedicated dietitian chat campaigns recommended.', priority: 'High', expectedImpact: 'Prevent metabolic escalation in 120 employees, saving $240k.', estimatedSavings: '$240,000', affectedEmployees: 840, recommendedAction: 'Automate dietitian coaching checkups for all flagged pre-diabetic employees.', confidenceScore: 95, department: 'Operations', location: 'Regional Hubs' }
  ],
  reportsList: [
    { id: 'db-rep-1', title: 'Q1 2026 Diabetes Care Cost Avoidance Audit', category: 'Executive Reports', date: 'Generated April 5, 2026', author: 'Actuarial Analytics Group', pages: '12 Pages', downloads: 'PDF, XLSX', summary: 'Audit validation of $380,000 avoided metabolic hospitalization claims.', recommendedFor: 'CFO, Benefits Director' }
  ]
};

// ---------------------------------------------------------
// 8. Maternity & Paternity Config
// ---------------------------------------------------------
export const MATERNITY_PATERNITY_CONFIG: ProgramConfig = {
  id: 'maternity-paternity',
  name: 'Maternity & Paternity',
  kicker: 'PREGNANCY & PARENTING SUPPORT',
  description: 'Pre-natal guidance, return-to-work coordination, lactation support, pediatric nurse consultations, and parent coaching.',
  overallRoiLabel: 'Parental Care ROI',
  roiFormula: {
    healthcareCostReduction: 180000,
    reducedAbsenteeism: 80000,
    reducedPresenteeism: 40000,
    reducedTurnover: 220000,
    productivityGain: 50000,
    programCost: 120000,
  },
  financialKPIs: [
    { id: 'mat-cost', title: 'Program Cost', kicker: 'ANNUAL INVESTMENT', value: '120,000', prefix: '$', change: 0, changeLabel: 'fixed program fee', trend: 'neutral', isGoodTrend: true, sparklineData: [120, 120, 120, 120, 120, 120, 120], icon: 'Wallet' },
    { id: 'mat-turnover', title: 'Retention Savings', kicker: 'REPLACEMENT AVOIDED', value: '220,000', prefix: '$', change: 24.2, changeLabel: 'avoided staff replacements', trend: 'up', isGoodTrend: true, sparklineData: [140, 160, 180, 195, 205, 212, 220], icon: 'Briefcase' },
    { id: 'mat-net', title: 'Net Savings', kicker: 'TOTAL RETURN - COST', value: '450,000', prefix: '$', change: 21.5, changeLabel: 'net parent care savings', trend: 'up', isGoodTrend: true, sparklineData: [320, 350, 380, 410, 430, 442, 450], icon: 'CheckCircle2' },
    { id: 'mat-roi', title: 'Parental ROI', kicker: 'MULTIPLE', value: '4.75×', change: 11.4, changeLabel: 'staff retention yield', trend: 'up', isGoodTrend: true, sparklineData: [4.1, 4.3, 4.4, 4.5, 4.6, 4.7, 4.75], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 120000, cumulativeSavings: 570000, netRoi: '4.75x' },
    { year: 'Year 2 (Projected)', investment: 122000, cumulativeSavings: 1210000, netRoi: '4.95x' },
    { year: 'Year 3 (Projected)', investment: 124000, cumulativeSavings: 1910000, netRoi: '5.13x' },
    { year: 'Year 4 (Projected)', investment: 126000, cumulativeSavings: 2680000, netRoi: '5.31x' },
    { year: 'Year 5 (Projected)', investment: 128000, cumulativeSavings: 3510000, netRoi: '5.48x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 240, utilization: '88%', claimsSaved: '$90,000', totalRoi: '4.9x' },
    { department: 'Sales & BD', activeEmployees: 180, utilization: '91%', claimsSaved: '$80,000', totalRoi: '5.1x' },
    { department: 'Product & Design', activeEmployees: 140, utilization: '84%', claimsSaved: '$50,000', totalRoi: '4.5x' },
  ],
  overviewKPIs: [
    { id: 'mat-ov-eligible', title: 'Eligible Employees', kicker: 'PARENTAL LICENSE SEATS', value: '18,500', change: 8.5, changeLabel: '100% covered parents', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'mat-ov-registered', title: 'Active Parents Enrolled', kicker: 'MATERNITY INTAKES', value: '820', change: 14.8, changeLabel: 'pre & post-natal signups', trend: 'up', isGoodTrend: true, sparklineData: [500, 580, 640, 700, 750, 790, 820], icon: 'UserCheck' },
    { id: 'mat-ov-active', title: 'Family Consultations', kicker: 'NURSE CHAT VOLUMES', value: '1,450', change: 22.4, changeLabel: 'pediatric & coach chats', trend: 'up', isGoodTrend: true, sparklineData: [800, 950, 1100, 1220, 1310, 1380, 1450], icon: 'HeartHandshake' },
    { id: 'mat-ov-csat', title: 'Parent Satisfaction', kicker: 'SURVEY CSAT INDEX', value: '4.92 / 5.0', change: 3.2, changeLabel: '98% positive reviews', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.75, 4.8, 4.82, 4.86, 4.9, 4.92], icon: 'Smile' }
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Parental Support ROI (4.75x)', badge: 'Audited', description: 'Preventive pre-natal coaching and pediatrician support drops early sick days and retains top parental talent.' },
    { icon: 'Activity', title: 'Return-to-Work Rate', badge: '94.6% Retained', description: '94.6% of parental leave takers return and remain active in their roles after 12 months.' },
    { icon: 'Users', title: 'Lactation & Childcare support', badge: '820 Parents', description: '820 mothers and fathers actively utilizing lactation consultants and parent-coaches.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 30000, healthcareSavings: 42000, productivitySavings: 80000, netReturn: 122000, roiMultiple: 4.0 },
    { period: 'Q2 2025', cost: 30000, healthcareSavings: 45000, productivitySavings: 90000, netReturn: 135000, roiMultiple: 4.5 },
    { period: 'Q3 2025', cost: 30000, healthcareSavings: 48000, productivitySavings: 95000, netReturn: 143000, roiMultiple: 4.7 },
    { period: 'Q4 2025', cost: 30000, healthcareSavings: 50000, productivitySavings: 98000, netReturn: 148000, roiMultiple: 4.9 },
    { period: 'Q1 2026', cost: 30000, healthcareSavings: 52000, productivitySavings: 100000, netReturn: 152000, roiMultiple: 4.75 },
  ],
  referralSourceDonut: [
    { name: 'Self-Referral (Digital App)', value: 55, color: '#3B82F6' },
    { name: 'HR Benefits Advisory', value: 25, color: '#10B981' },
    { name: 'Clinical Pediatric Refer', value: 15, color: '#F59E0B' },
    { name: 'Manager Advisory', value: 5, color: '#8B5CF6' }
  ],
  referralLabel: 'Active Parents',
  referralPercentage: '92.5%',
  workforceQuestion: 'Are parents returning to work and utilizing neonatal support?',
  workforceAnswer: 'Yes. Return-to-work retention rate rose to 94.6% (+11% improvement), avoiding substantial recruiting and onboarding replacement costs.',
  workforceKPIs: [
    { id: 'mat-wh-stress', title: 'Parental Stress Index', kicker: 'FAMILY BALANCE RISK', value: '14.2%', change: -15.4, changeLabel: 'balanced shift returns', trend: 'down', isGoodTrend: true, sparklineData: [22, 20, 19, 17, 16, 15, 14.2], icon: 'Flame' },
    { id: 'mat-wh-pediatric', title: 'Pediatric Check-ups', kicker: 'INFANT HEALTH CARE', value: '680', change: 24.5, changeLabel: 'virtual pediatrician visits', trend: 'up', isGoodTrend: true, sparklineData: [420, 480, 530, 580, 620, 650, 680], icon: 'Activity' },
    { id: 'mat-wh-retention', title: 'Return-To-Work Rate', kicker: 'MATERNAL RETENTION', value: '94.6%', change: 8.5, changeLabel: 'retained post parental leave', trend: 'up', isGoodTrend: true, sparklineData: [84, 86, 88, 90, 92, 93.5, 94.6], icon: 'UserCheck' },
    { id: 'mat-wh-lactation', title: 'Lactation Consults', kicker: 'MATERNAL COALESCENCE', value: '420', change: 16.2, changeLabel: 'virtual lactation specialist', trend: 'up', isGoodTrend: true, sparklineData: [250, 280, 310, 340, 370, 400, 420], icon: 'Award' }
  ],
  workforceFramework: {
    title: 'MantraCare Parental Care Framework',
    subtitle: 'Assessing return-to-work continuity, pre-natal clinical checks and parent CSAT.',
    questions: [
      { q: 'How is parent support initiated?', a: '92.5% Enrollment Rate', desc: 'Pre-natal and neonatal registrations commence early in the pregnancy cycle, maximizing preventive outcomes.' },
      { q: 'Are leave takers returning?', a: '94.6% Retention Success', desc: 'Return-to-work coaching minimizes turnover and shields teams from resource gaps.' },
      { q: 'Where is support most utilized?', a: 'Engineering & Product', desc: 'High-density tech teams represent the largest group of parent-coaching and lactation support seekers.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 10, stress: 14, burnout: 10, anxiety: 8, depression: 6, sleepIssue: 12, physicalIndex: 82 },
    { dept: 'Sales', labelVal: 12, stress: 16, burnout: 12, anxiety: 10, depression: 8, sleepIssue: 14, physicalIndex: 78 },
    { dept: 'Product', labelVal: 16, stress: 20, burnout: 16, anxiety: 14, depression: 12, sleepIssue: 18, physicalIndex: 79 },
  ],
  heatmapMetricLabel: 'Parental Stress Index',
  heatmapMetricKey: 'anxiety',
  experienceQuestion: 'What does the user journey look like for new parent enrollees?',
  experienceAnswer: 'Smooth. Pre-natal education modules and immediate virtual nurse triage result in a 92% survey satisfaction score.',
  experienceKPIs: [
    { id: 'mat-ex-nurse', title: 'Time to Nurse Chat', kicker: 'PEDIATRIC ACCESS', value: '< 8 mins', change: -52.0, changeLabel: 'immediate pediatrician triage', trend: 'down', isGoodTrend: true, sparklineData: [20, 16, 14, 12, 10, 9, 8], icon: 'Clock' },
    { id: 'mat-ex-csat', title: 'Parent CSAT Rating', kicker: 'CARE SATISFACTION', value: '4.92 / 5.0', change: 3.2, changeLabel: '98.2% positive ratings', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.75, 4.8, 4.82, 4.86, 4.9, 4.92], icon: 'Star' },
    { id: 'mat-ex-retention', title: '90-Day Pathway Active', kicker: 'ENGAGEMENT RETENTION', value: '82.4%', change: 7.2, changeLabel: 'active after 90 days', trend: 'up', isGoodTrend: true, sparklineData: [74, 76, 78, 80, 81, 82, 82.4], icon: 'UserCheck' },
    { id: 'mat-ex-lessons', title: 'Parenting Lessons Read', kicker: 'PARENTAL EDUCATION', value: '6,450', change: 18.5, changeLabel: 'pregnancy guides completed', trend: 'up', isGoodTrend: true, sparklineData: [3200, 3800, 4400, 5000, 5500, 6000, 6450], icon: 'BookOpen' }
  ],
  onboardingFunnel: [
    { step: 'Workforce Headcount', count: 18500, pct: '100%' },
    { step: 'Parent Cohort', count: 1200, pct: '6.5%' },
    { step: 'Active Enrollments', count: 820, pct: '4.4%' },
    { step: 'Weekly Active Loggers', count: 680, pct: '3.7%' },
    { step: 'Returned To Work', count: 640, pct: '3.5%' }
  ],
  modalityDonut: [
    { name: 'Pediatric Nurse Chats', value: 45, color: '#3B82F6' },
    { name: 'Lactation Consultation', value: 35, color: '#10B981' },
    { name: 'Parent Coaching', value: 20, color: '#F59E0B' }
  ],
  insightsKPIs: [
    { id: 'mat-in-regions', title: 'Active Regions', kicker: 'GLOBAL FOOTPRINT', value: '12 Countries', change: 16.5, changeLabel: 'active hubs', trend: 'up', isGoodTrend: true, sparklineData: [8, 9, 10, 11, 11, 12, 12], icon: 'Globe' },
    { id: 'mat-in-sla', title: 'Clinical Response SLA', kicker: 'NURSE TRIAGE', value: '8 min', change: 0, changeLabel: '24/7/365 coverage', trend: 'down', isGoodTrend: true, sparklineData: [8, 8, 8, 8, 8, 8, 8], icon: 'Clock' },
    { id: 'mat-in-compliance', title: 'Privacy Compliance', kicker: 'HIPAA SECURE', value: '100%', change: 0, changeLabel: 'certified private', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'mat-in-languages', title: 'Supported Languages', kicker: 'NATIVE CARE', value: '30+', change: 11.5, changeLabel: 'parental coaches globally', trend: 'up', isGoodTrend: true, sparklineData: [20, 22, 25, 27, 28, 29, 30], icon: 'Languages' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '4.9×', savings: '$90,000', emp: '240' },
    { name: 'United States', flag: '🇺🇸', roi: '5.1×', savings: '$80,000', emp: '180' }
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '88%', active: '820', pathway: 'Nurse & Lactation' }
  ],
  topRiskRegions: [
    { name: 'United Kingdom', flag: '🇬🇧', risk: 'Moderate', vulnerability: '52%', action: 'Stress Assessment' }
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 4.8, Q2: 5.1 },
    { region: 'Asia Pacific', Q1: 4.5, Q2: 4.9 }
  ],
  globalLocations: [
    { id: 'mat-loc-1', name: 'India Office', code: 'IND', flag: 'IND', x: 74, y: 53, roi: '4.9x', employees: 240, utilization: '88%', savings: '$90k', riskLevel: 'Moderate' }
  ],
  aiInsights: [
    { icon: 'TrendingUp', text: 'Maternity program ROI reached 4.75x due to physical therapist and lactation consultant interventions.', highlight: '4.75x ROI' }
  ],
  aiRecommendations: [
    { id: 'mat-rec-1', type: '🚨 High Burnout', title: 'Post-natal return to work transitions', teaser: '820 active parents identified. Post-natal parenting coaching recommended.', priority: 'High', expectedImpact: 'Prevent maternal turnover by 34%, saving $220k.', estimatedSavings: '$220,000', affectedEmployees: 820, recommendedAction: 'Automate post-natal care specialist consult booking links for new parental returners.', confidenceScore: 92, department: 'Company-wide', location: 'All Sites' }
  ],
  reportsList: [
    { id: 'mat-rep-1', title: 'Q1 2026 Maternity & Paternity Retention Survey Synthesis', category: 'Executive Reports', date: 'Generated April 1, 2026', author: 'Counselling Operations Group', pages: '8 Pages', downloads: 'PDF, PPTX', summary: 'Audit synthesis of 820 active parent surveys detailing 94.6% return-to-work rates.', recommendedFor: 'CHRO, VP Human Resources' }
  ]
};

// ---------------------------------------------------------
// 9. Women Wellness Config
// ---------------------------------------------------------
export const WOMEN_WELLNESS_CONFIG: ProgramConfig = {
  id: 'women-wellness',
  name: 'Women Wellness',
  kicker: 'GENDER-SPECIFIC PREVENTIVE CARE',
  description: 'Specialized screenings, menopause support workshops, fertility consults, mental wellbeing circles, and hormonal health coaching.',
  overallRoiLabel: 'Women Wellness ROI',
  roiFormula: {
    healthcareCostReduction: 410000,
    reducedAbsenteeism: 110000,
    reducedPresenteeism: 80000,
    reducedTurnover: 120000,
    productivityGain: 60000,
    programCost: 180000,
  },
  financialKPIs: [
    { id: 'ww-cost', title: 'Program Cost', kicker: 'ANNUAL INVESTMENT', value: '180,000', prefix: '$', change: 0, changeLabel: 'fixed program fee', trend: 'neutral', isGoodTrend: true, sparklineData: [180, 180, 180, 180, 180, 180, 180], icon: 'Wallet' },
    { id: 'ww-savings', title: 'Healthcare Savings', kicker: 'CLAIM COST REDUCTION', value: '410,000', prefix: '$', change: 22.4, changeLabel: 'hormonal and screening savings', trend: 'up', isGoodTrend: true, sparklineData: [260, 290, 320, 350, 380, 395, 410], icon: 'DollarSign' },
    { id: 'ww-net', title: 'Net Savings', kicker: 'VALUE GENERATED', value: '600,000', prefix: '$', change: 18.2, changeLabel: 'net claims avoided', trend: 'up', isGoodTrend: true, sparklineData: [450, 480, 510, 540, 565, 582, 600], icon: 'CheckCircle2' },
    { id: 'ww-roi', title: 'Wellness ROI', kicker: 'MULTIPLE', value: '4.33×', change: 9.5, changeLabel: 'preventive yield multiple', trend: 'up', isGoodTrend: true, sparklineData: [3.8, 3.9, 4.0, 4.1, 4.2, 4.25, 4.33], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 180000, cumulativeSavings: 780000, netRoi: '4.33x' },
    { year: 'Year 2 (Projected)', investment: 183000, cumulativeSavings: 1610000, netRoi: '4.45x' },
    { year: 'Year 3 (Projected)', investment: 186000, cumulativeSavings: 2490000, netRoi: '4.57x' },
    { year: 'Year 4 (Projected)', investment: 189000, cumulativeSavings: 3420000, netRoi: '4.68x' },
    { year: 'Year 5 (Projected)', investment: 192000, cumulativeSavings: 4410000, netRoi: '4.78x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 480, utilization: '84%', claimsSaved: '$160,000', totalRoi: '4.3x' },
    { department: 'Sales & BD', activeEmployees: 620, utilization: '88%', claimsSaved: '$210,000', totalRoi: '4.6x' },
    { department: 'Customer Success', activeEmployees: 410, utilization: '82%', claimsSaved: '$110,000', totalRoi: '4.1x' },
  ],
  overviewKPIs: [
    { id: 'ww-ov-eligible', title: 'Eligible Headcount', kicker: 'COVERED FEMALE LIFES', value: '8,500', change: 8.5, changeLabel: 'women covered', trend: 'up', isGoodTrend: true, sparklineData: [7200, 7500, 7800, 8000, 8100, 8300, 8500], icon: 'Users' },
    { id: 'ww-ov-registered', title: 'Active Participants', kicker: 'WELLNESS ENROLLEES', value: '2,400', change: 22.0, changeLabel: '28.2% signup rate', trend: 'up', isGoodTrend: true, sparklineData: [1200, 1500, 1750, 1950, 2100, 2250, 2400], icon: 'UserCheck' },
    { id: 'ww-ov-active', title: 'Menopause Consults', kicker: 'CLINICAL TALKS', value: '620', change: 16.2, changeLabel: 'specialist workshops', trend: 'up', isGoodTrend: true, sparklineData: [300, 380, 440, 500, 550, 590, 620], icon: 'Activity' },
    { id: 'ww-ov-csat', title: 'Survey CSAT Rating', kicker: 'FEEDBACK CSAT INDEX', value: '4.94 / 5.0', change: 2.4, changeLabel: 'excellent program reviews', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.75, 4.8, 4.85, 4.88, 4.92, 4.94], icon: 'Heart' }
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Women Wellness ROI (4.33x)', badge: 'Calculated', description: 'Gender-specific preventive screenings and hormone health coaching drops general absenteeism and claims.' },
    { icon: 'Activity', title: 'Pathway Retention', badge: '88.5% Active', description: '88.5% of women wellness enrollees remain active in program pathways after 90 days.' },
    { icon: 'Users', title: 'Personal Coach Chats', badge: '2,400 Users', description: '2,400 users actively engage in chat consultations with certified health coaches.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 45000, healthcareSavings: 98000, productivitySavings: 30000, netReturn: 128000, roiMultiple: 3.5 },
    { period: 'Q2 2025', cost: 45000, healthcareSavings: 105000, productivitySavings: 32000, netReturn: 137000, roiMultiple: 3.8 },
    { period: 'Q3 2025', cost: 45000, healthcareSavings: 112000, productivitySavings: 35000, netReturn: 147000, roiMultiple: 4.1 },
    { period: 'Q4 2025', cost: 45000, healthcareSavings: 118000, productivitySavings: 38000, netReturn: 156000, roiMultiple: 4.3 },
    { period: 'Q1 2026', cost: 45000, healthcareSavings: 122000, productivitySavings: 40000, netReturn: 162000, roiMultiple: 4.33 },
  ],
  referralSourceDonut: [
    { name: 'Self-Referral (Digital App)', value: 60, color: '#3B82F6' },
    { name: 'Biometric Screening Refer', value: 20, color: '#10B981' },
    { name: 'HR Benefits Advisory', value: 15, color: '#F59E0B' },
    { name: 'Manager Advisory', value: 5, color: '#8B5CF6' }
  ],
  referralLabel: 'Wellness Enrollees',
  referralPercentage: '88.4%',
  workforceQuestion: 'Are female employees actively utilizing gender-specific health tracks?',
  workforceAnswer: 'Yes. 2,400 female employees active in specialized menopause, fertility, and wellness tracks, improving general absenteeism by 24.2%.',
  workforceKPIs: [
    { id: 'ww-wh-score', title: 'Women Wellness Score', kicker: 'HEALTH AND VITALITY INDEX', value: '84 / 100', change: 9.5, changeLabel: 'avg score across cohorts', trend: 'up', isGoodTrend: true, sparklineData: [70, 73, 76, 78, 80, 82, 84], icon: 'Heart' },
    { id: 'ww-wh-screenings', title: 'Preventative Mammograms', kicker: 'EARLY CANCER DETECTIONS', value: '680', change: 22.0, changeLabel: 'completed clinical checks', trend: 'up', isGoodTrend: true, sparklineData: [450, 500, 540, 580, 610, 650, 680], icon: 'Stethoscope' },
    { id: 'ww-wh-interception', title: 'Risk Interceptions', kicker: 'EARLY CLINICAL STABILISATION', value: '142 Cases', change: 16.2, changeLabel: 'referred to health coaches', trend: 'up', isGoodTrend: true, sparklineData: [80, 95, 110, 120, 130, 138, 142], icon: 'AlertTriangle' },
    { id: 'ww-wh-checkups', title: 'Annual Checkups', kicker: 'GENDER DIAGNOSTICS ONSITE', value: '820', change: 18.2, changeLabel: 'screenings onsite camp', trend: 'up', isGoodTrend: true, sparklineData: [500, 580, 640, 700, 750, 790, 820], icon: 'Calendar' }
  ],
  workforceFramework: {
    title: 'MantraCare Women Wellness Framework',
    subtitle: 'Assessing hormonal balance metrics, screening compliance and specialist support.',
    questions: [
      { q: 'How is program access driven?', a: '88.4% Onboarding Rate', desc: 'Self-guided mobile registrations and HRA surveys trigger early personalized wellness pathway referrals.' },
      { q: 'Is coaching improving wellness?', a: '88.5% Pathway Retention', desc: 'Continuous wellness circles and hormonal coaching sessions yield strong long-term health adherence.' },
      { q: 'Which groups benefit most?', a: 'Sales & BD Division', desc: 'High-travel sales groups see high menopause support webinar signups, reporting lower fatigue indicators.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 15, stress: 18, burnout: 15, anxiety: 12, depression: 10, sleepIssue: 16, physicalIndex: 81 },
    { dept: 'Sales', labelVal: 18, stress: 22, burnout: 18, anxiety: 15, depression: 12, sleepIssue: 20, physicalIndex: 78 },
    { dept: 'Product', labelVal: 20, stress: 24, burnout: 20, anxiety: 18, depression: 14, sleepIssue: 22, physicalIndex: 79 },
  ],
  heatmapMetricLabel: 'Women Wellness Score',
  heatmapMetricKey: 'physicalIndex',
  experienceQuestion: 'What does the user journey look like for women wellness enrollees?',
  experienceAnswer: 'Highly customized. Enrollees utilize digital hormonal logs and private wellness circles, reporting a 4.94/5.0 CSAT rating.',
  experienceKPIs: [
    { id: 'ww-ex-wait', title: 'Time to Specialist Chat', kicker: 'SPECIALIST ACCESS', value: '< 10 mins', change: -48.0, changeLabel: 'vs physical clinical waits', trend: 'down', isGoodTrend: true, sparklineData: [24, 20, 18, 15, 12, 11, 10], icon: 'Clock' },
    { id: 'ww-ex-csat', title: 'Survey CSAT Rating', kicker: 'CARE SATISFACTION', value: '4.94 / 5.0', change: 2.4, changeLabel: 'excellent program reviews', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.75, 4.8, 4.85, 4.88, 4.92, 4.94], icon: 'Star' },
    { id: 'ww-ex-retention', title: '90-Day Pathway Retention', kicker: 'ENGAGEMENT RETENTION', value: '88.5%', change: 8.5, changeLabel: 'active after 90 days', trend: 'up', isGoodTrend: true, sparklineData: [78, 80, 82, 84, 85, 87, 88.5], icon: 'UserCheck' },
    { id: 'ww-ex-lessons', title: 'Wellness Lessons Read', kicker: 'HEALTH EDUCATION', value: '9,240', change: 16.2, changeLabel: 'menopause and health guides', trend: 'up', isGoodTrend: true, sparklineData: [5400, 6200, 7000, 7800, 8300, 8800, 9240], icon: 'BookOpen' }
  ],
  onboardingFunnel: [
    { step: 'Workforce Headcount', count: 18500, pct: '100%' },
    { step: 'Women Employee Cohort', count: 8500, pct: '45.9%' },
    { step: 'Active Enrollments', count: 2400, pct: '13.0%' },
    { step: 'Weekly Active Loggers', count: 1850, pct: '10.0%' },
    { step: 'Completed Care Plan', count: 1420, pct: '7.7%' }
  ],
  modalityDonut: [
    { name: 'Hormonal Coaching', value: 40, color: '#3B82F6' },
    { name: 'Menopause Seminars', value: 30, color: '#10B981' },
    { name: 'Fertility Consultations', value: 20, color: '#F59E0B' },
    { name: 'Wellness Circles', value: 10, color: '#8B5CF6' }
  ],
  insightsKPIs: [
    { id: 'ww-in-regions', title: 'Active Regions', kicker: 'GLOBAL FOOTPRINT', value: '22 Countries', change: 25.0, changeLabel: 'hubs active', trend: 'up', isGoodTrend: true, sparklineData: [12, 14, 16, 18, 20, 21, 22], icon: 'Globe' },
    { id: 'ww-in-sla', title: 'Clinical Response SLA', kicker: 'RESPONSE SPEED', value: '10 min', change: 0, changeLabel: '24/7/365 coverage', trend: 'down', isGoodTrend: true, sparklineData: [10, 10, 10, 10, 10, 10, 10], icon: 'Clock' },
    { id: 'ww-in-compliance', title: 'Privacy Compliance', kicker: 'GDPR SECURE', value: '100%', change: 0, changeLabel: 'certified private', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'ww-in-languages', title: 'Supported Languages', kicker: 'NATIVE CARE', value: '60+', change: 12.0, changeLabel: 'dietitians globally', trend: 'up', isGoodTrend: true, sparklineData: [45, 48, 50, 52, 55, 58, 60], icon: 'Languages' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '4.3×', savings: '$160,000', emp: '480' },
    { name: 'United States', flag: '🇺🇸', roi: '4.6×', savings: '$210,000', emp: '620' }
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '84%', active: '2,400', pathway: 'Coach & Circles' }
  ],
  topRiskRegions: [
    { name: 'Japan', flag: '🇯🇵', risk: 'High', vulnerability: '62%', action: 'Virtual Specialist Triage' }
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 4.1, Q2: 4.6 },
    { region: 'Asia Pacific', Q1: 3.9, Q2: 4.3 }
  ],
  globalLocations: [
    { id: 'ww-loc-1', name: 'India Office', code: 'IND', flag: 'IND', x: 74, y: 53, roi: '4.3x', employees: 4800, utilization: '84%', savings: '$160k', riskLevel: 'Moderate' }
  ],
  aiInsights: [
    { icon: 'TrendingUp', text: 'Women Wellness program ROI reached 4.33x due to screening compliance and coaching check-ins.', highlight: '4.33x ROI' }
  ],
  aiRecommendations: [
    { id: 'ww-rec-1', type: '🚨 High Burnout', title: 'Menopause and stress support seminars', teaser: '2,400 active participants identified. Preventative mammograms checks recommended.', priority: 'High', expectedImpact: 'Prevent maternal turnover by 34%, saving $120k.', estimatedSavings: '$120,000', affectedEmployees: 2400, recommendedAction: 'Automate hormonal care coach booking links for all active participants.', confidenceScore: 94, department: 'Company-wide', location: 'All Sites' }
  ],
  reportsList: [
    { id: 'ww-rep-1', title: 'Q1 2026 Women Wellness Coaching Adoption Audit', category: 'Executive Reports', date: 'Generated April 2, 2026', author: 'MantraCare AI Intelligence Engine', pages: '12 Pages', downloads: 'PDF, PPTX', summary: 'Audit validation of $410,000 avoided metabolic and screening claims.', recommendedFor: 'CFO, Benefits Director' }
  ]
};

// ---------------------------------------------------------
// 10. Physiotherapy Config
// ---------------------------------------------------------
export const PHYSIOTHERAPY_CONFIG: ProgramConfig = {
  id: 'physiotherapy',
  name: 'Physiotherapy',
  kicker: 'MSK & PAIN RELIEF COACHING',
  description: 'Musculoskeletal (MSK) joint, muscle and back pain coaching, virtual ergonomic assessments, and physical therapist consults.',
  overallRoiLabel: 'Physiotherapy ROI',
  roiFormula: {
    healthcareCostReduction: 320000,
    reducedAbsenteeism: 120000,
    reducedPresenteeism: 90000,
    reducedTurnover: 0,
    productivityGain: 80000,
    programCost: 140000,
  },
  financialKPIs: [
    { id: 'pt-cost', title: 'Program Cost', kicker: 'ANNUAL INVESTMENT', value: '140,000', prefix: '$', change: 0, changeLabel: 'fixed program fee', trend: 'neutral', isGoodTrend: true, sparklineData: [140, 140, 140, 140, 140, 140, 140], icon: 'Wallet' },
    { id: 'pt-savings', title: 'Healthcare Savings', kicker: 'MSK COST REDUCTION', value: '320,000', prefix: '$', change: 19.5, changeLabel: 'avoided joint and back claims', trend: 'up', isGoodTrend: true, sparklineData: [210, 230, 250, 275, 290, 305, 320], icon: 'DollarSign' },
    { id: 'pt-net', title: 'Net Savings', kicker: 'VALUE CREATED', value: '470,000', prefix: '$', change: 16.5, changeLabel: 'net corporate return', trend: 'up', isGoodTrend: true, sparklineData: [320, 350, 380, 410, 435, 452, 470], icon: 'CheckCircle2' },
    { id: 'pt-roi', title: 'MSK ROI', kicker: 'MULTIPLE', value: '4.36×', change: 9.8, changeLabel: 'MSK savings multiple', trend: 'up', isGoodTrend: true, sparklineData: [3.7, 3.8, 4.0, 4.1, 4.2, 4.3, 4.36], icon: 'TrendingUp' }
  ],
  fiveYearProjection: [
    { year: 'Year 1 (Actual)', investment: 140000, cumulativeSavings: 610000, netRoi: '4.36x' },
    { year: 'Year 2 (Projected)', investment: 142000, cumulativeSavings: 1280000, netRoi: '4.51x' },
    { year: 'Year 3 (Projected)', investment: 144000, cumulativeSavings: 2010000, netRoi: '4.65x' },
    { year: 'Year 4 (Projected)', investment: 146000, cumulativeSavings: 2810000, netRoi: '4.81x' },
    { year: 'Year 5 (Projected)', investment: 148000, cumulativeSavings: 3680000, netRoi: '4.97x' },
  ],
  deptRoiData: [
    { department: 'Engineering', activeEmployees: 480, utilization: '84%', claimsSaved: '$110,000', totalRoi: '4.3x' },
    { department: 'Sales & BD', activeEmployees: 620, utilization: '88%', claimsSaved: '$140,000', totalRoi: '4.6x' },
    { department: 'Customer Success', activeEmployees: 410, utilization: '82%', claimsSaved: '$90,000', totalRoi: '4.1x' },
  ],
  overviewKPIs: [
    { id: 'pt-ov-eligible', title: 'Eligible Headcount', kicker: 'MSK LICENSE SEATS', value: '18,500', change: 8.5, changeLabel: 'employees covered', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
    { id: 'pt-ov-registered', title: 'Posture Reports', kicker: 'ERGONOMIC SCREENINGS', value: '6,240', change: 16.5, changeLabel: 'completed posture evaluations', trend: 'up', isGoodTrend: true, sparklineData: [3200, 3800, 4400, 5000, 5400, 5850, 6240], icon: 'UserCheck' },
    { id: 'pt-ov-active', title: 'Virtual Therapy Sessions', kicker: 'THERAPIST CONSULTATIONS', value: '3,400', change: 19.2, changeLabel: 'MSK exercise sessions completed', trend: 'up', isGoodTrend: true, sparklineData: [2100, 2400, 2700, 2950, 3100, 3250, 3400], icon: 'Activity' },
    { id: 'pt-ov-csat', title: 'Physio Satisfaction', kicker: 'USER FEEDBACK INDEX', value: '4.86 / 5.0', change: 2.4, changeLabel: 'positive rehab ratings', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.65, 4.7, 4.75, 4.8, 4.84, 4.86], icon: 'Heart' }
  ],
  scorecardItems: [
    { icon: 'Award', title: 'Physiotherapy ROI (4.36x)', badge: 'Calculated', description: 'Early MSK screening and exercise guides avoid expensive surgeries and chronic physical worker claims.' },
    { icon: 'Activity', title: 'Pain Reduction Rate', badge: '38.5% Pain Drop', description: 'Enrolled employees show an average 38.5% reduction in chronic pain index scores within 6 sessions.' },
    { icon: 'Users', title: 'Exercises Completed', badge: '12,200 Routines', description: '12,200 personal back and joint physical exercise guides finished inside the app.' }
  ],
  roiTrendSeries: [
    { period: 'Q1 2025', cost: 35000, healthcareSavings: 72000, productivitySavings: 40000, netReturn: 112000, roiMultiple: 3.2 },
    { period: 'Q2 2025', cost: 35000, healthcareSavings: 80000, productivitySavings: 45000, netReturn: 125000, roiMultiple: 3.5 },
    { period: 'Q3 2025', cost: 35000, healthcareSavings: 88000, productivitySavings: 50000, netReturn: 138000, roiMultiple: 3.9 },
    { period: 'Q4 2025', cost: 35000, healthcareSavings: 94000, productivitySavings: 53000, netReturn: 147000, roiMultiple: 4.2 },
    { period: 'Q1 2026', cost: 35000, healthcareSavings: 98000, productivitySavings: 55000, netReturn: 153000, roiMultiple: 4.36 },
  ],
  referralSourceDonut: [
    { name: 'Self-Referral (Digital App)', value: 50, color: '#3B82F6' },
    { name: 'Onsite Health Checks', value: 30, color: '#10B981' },
    { name: 'HR Benefits Advisory', value: 15, color: '#F59E0B' },
    { name: 'Manager Advisory', value: 5, color: '#8B5CF6' }
  ],
  referralLabel: 'MSK Sessions',
  referralPercentage: '72.8%',
  workforceQuestion: 'How is back and joint pain screening progressing?',
  workforceAnswer: '6,240 employees logged physical posture reports. Virtual MSK exercise and stretch challenges have reduced joint pain complaints by 38.5%.',
  workforceKPIs: [
    { id: 'pt-wh-prev', title: 'MSK Risk Prevalence', kicker: 'POPULATION EXPOSURE', value: '8.2%', change: -9.8, changeLabel: 'avoided joint operations', trend: 'down', isGoodTrend: true, sparklineData: [11.2, 10.5, 9.8, 9.2, 8.8, 8.4, 8.2], icon: 'Users' },
    { id: 'pt-wh-posture', title: 'Posture Assessments', kicker: 'ERGONOMIC SCREENINGS', value: '6,240', change: 16.5, changeLabel: 'completed digital screen', trend: 'up', isGoodTrend: true, sparklineData: [3200, 3800, 4400, 5000, 5400, 5850, 6240], icon: 'Activity' },
    { id: 'pt-wh-recovery', title: 'Physical Recovery Rate', kicker: 'CLINICAL CONTINUITY', value: '82.5%', change: 14.2, changeLabel: 'average 6-session recovery', trend: 'up', isGoodTrend: true, sparklineData: [72, 74, 76, 78, 80, 81.5, 82.5], icon: 'CheckCircle' },
    { id: 'pt-wh-resolved', title: 'High-Pain Resolved', kicker: 'CRITICAL RESOLUTIONS', value: '180 Cases', change: -18.2, changeLabel: 'referred to clinic follow-up', trend: 'down', isGoodTrend: true, sparklineData: [220, 210, 202, 195, 190, 184, 180], icon: 'ShieldAlert' }
  ],
  workforceFramework: {
    title: 'MantraCare Physiotherapy Framework',
    subtitle: 'Assessing musculoskeletal joint pain, posture screening and specialist recovery.',
    questions: [
      { q: 'How are posture checks done?', a: '72.8% Completed Screens', desc: 'Mobile webcam-based posture screening algorithms identify desk workers ergonomics early.' },
      { q: 'Is active rehab improving MSK?', a: '82.5% Physical Recovery', desc: 'Regular virtual stretch exercises matched with personal coach calls achieve high recovery adherence.' },
      { q: 'Where are risk levels highest?', a: 'Development & Support', desc: 'Sedentary office-bound squads show elevated lumbar stress, resolved via deskside stretch pop-ups.' }
    ]
  },
  workforceHeatmap: [
    { dept: 'Engineering', labelVal: 15, stress: 18, burnout: 15, anxiety: 12, depression: 10, sleepIssue: 16, physicalIndex: 82 },
    { dept: 'Sales', labelVal: 18, stress: 22, burnout: 18, anxiety: 15, depression: 12, sleepIssue: 20, physicalIndex: 78 },
    { dept: 'Product', labelVal: 20, stress: 24, burnout: 20, anxiety: 18, depression: 14, sleepIssue: 22, physicalIndex: 79 },
  ],
  heatmapMetricLabel: 'Ergonomic Risk Score',
  heatmapMetricKey: 'physicalIndex',
  experienceQuestion: 'What does the user journey look like for joint pain enrollees?',
  experienceAnswer: 'Highly engaged. 12,200 physical routines completed inside the app, yielding a 4.86/5.0 CSAT rating.',
  experienceKPIs: [
    { id: 'pt-ex-wait', title: 'Time to Physical Therapist', kicker: 'THERAPIST ACCESS', value: '< 12 mins', change: -42.0, changeLabel: 'vs 3-week clinic waits', trend: 'down', isGoodTrend: true, sparklineData: [24, 20, 18, 16, 14, 13, 12], icon: 'Clock' },
    { id: 'pt-ex-csat', title: 'Physio CSAT Rating', kicker: 'CARE SATISFACTION', value: '4.86 / 5.0', change: 2.4, changeLabel: 'positive rehab ratings', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.65, 4.7, 4.75, 4.8, 4.84, 4.86], icon: 'Star' },
    { id: 'pt-ex-retention', title: '90-Day Pathway Active', kicker: 'ENGAGEMENT RETENTION', value: '78.5%', change: 8.5, changeLabel: 'active after 90 days', trend: 'up', isGoodTrend: true, sparklineData: [68, 70, 72, 74, 75, 77, 78.5], icon: 'UserCheck' },
    { id: 'pt-ex-lessons', title: 'Posture Modules Read', kicker: 'HEALTH EDUCATION', value: '12,200', change: 16.5, changeLabel: 'completed learning modules', trend: 'up', isGoodTrend: true, sparklineData: [6200, 7500, 8900, 9800, 10500, 11400, 12200], icon: 'BookOpen' }
  ],
  onboardingFunnel: [
    { step: 'Workforce Headcount', count: 18500, pct: '100%' },
    { step: 'MSK Pain Cohort', count: 5200, pct: '28.1%' },
    { step: 'Active Enrollments', count: 3400, pct: '18.4%' },
    { step: 'Weekly Active Loggers', count: 2800, pct: '15.1%' },
    { step: 'Completed Care Plan', count: 1850, pct: '10.0%' }
  ],
  modalityDonut: [
    { name: 'Virtual Physiotherapist', value: 50, color: '#3B82F6' },
    { name: 'Onsite Health Checks', value: 30, color: '#10B981' },
    { name: 'Social Activity Post', value: 15, color: '#F59E0B' },
    { name: 'Manager Advisory', value: 5, color: '#8B5CF6' }
  ],
  insightsKPIs: [
    { id: 'pt-in-regions', title: 'Active Regions', kicker: 'GLOBAL FOOTPRINT', value: '14 Regions', change: 16.6, changeLabel: 'active hubs', trend: 'up', isGoodTrend: true, sparklineData: [8, 9, 10, 11, 12, 13, 14], icon: 'Globe' },
    { id: 'pt-in-sla', title: 'Clinical Response SLA', kicker: 'RESPONSE SPEED', value: '12 min', change: 0, changeLabel: '24/7/365 coverage', trend: 'down', isGoodTrend: true, sparklineData: [12, 12, 12, 12, 12, 12, 12], icon: 'Clock' },
    { id: 'pt-in-compliance', title: 'Privacy Compliance', kicker: 'HIPAA SECURE', value: '100%', change: 0, changeLabel: 'secure storage', trend: 'up', isGoodTrend: true, sparklineData: [100, 100, 100, 100, 100, 100, 100], icon: 'ShieldCheck' },
    { id: 'pt-in-languages', title: 'Supported Languages', kicker: 'NATIVE CARE', value: '30+', change: 11.5, changeLabel: 'therapists globally', trend: 'up', isGoodTrend: true, sparklineData: [20, 22, 25, 27, 28, 29, 30], icon: 'Languages' }
  ],
  topRoiCountries: [
    { name: 'India', flag: '🇮🇳', roi: '4.3×', savings: '$110,000', emp: '480' },
    { name: 'United States', flag: '🇺🇸', roi: '4.6×', savings: '$140,000', emp: '620' }
  ],
  topUsageCountries: [
    { name: 'India', flag: '🇮🇳', usage: '84%', active: '3,400', pathway: 'Therapist & Posture' }
  ],
  topRiskRegions: [
    { name: 'Japan', flag: '🇯🇵', risk: 'High', vulnerability: '62%', action: 'Virtual Specialist Triage' }
  ],
  regionalTrendData: [
    { region: 'North America', Q1: 4.1, Q2: 4.6 },
    { region: 'Asia Pacific', Q1: 3.9, Q2: 4.3 }
  ],
  globalLocations: [
    { id: 'pt-loc-1', name: 'India Office', code: 'IND', flag: 'IND', x: 74, y: 53, roi: '4.3x', employees: 480, utilization: '84%', savings: '$110k', riskLevel: 'Moderate' }
  ],
  aiInsights: [
    { icon: 'TrendingUp', text: 'Physiotherapy program ROI reached 4.36x due to ergonomic adaptations and posture assessments.', highlight: '4.36x ROI' }
  ],
  aiRecommendations: [
    { id: 'pt-rec-1', type: '🚨 High Burnout', title: 'Posture checking and stretch exercises', teaser: '3,400 active participants identified. Posture assessments checks recommended.', priority: 'High', expectedImpact: 'Prevent physical turnover by 34%, saving $120k.', estimatedSavings: '$120,000', affectedEmployees: 3400, recommendedAction: 'Automate posture care coach booking links for all active participants.', confidenceScore: 94, department: 'Company-wide', location: 'All Sites' }
  ],
  reportsList: [
    { id: 'pt-rep-1', title: 'Q1 2026 Physiotherapy Coaching Adoption Audit', category: 'Executive Reports', date: 'Generated April 2, 2026', author: 'MantraCare AI Intelligence Engine', pages: '12 Pages', downloads: 'PDF, PPTX', summary: 'Audit validation of $320,000 avoided physical and ergonomic claims.', recommendedFor: 'CFO, Benefits Director' }
  ]
};

export function getProgramConfig(id: ProgramId): ProgramConfig {
  switch (id) {
    case 'eap':
      return EAP_CONFIG;
    case 'virtual-care':
      return VIRTUAL_CARE_CONFIG;
    case 'health-checks':
      return HEALTH_CHECKS_CONFIG;
    case 'nutrition-fitness':
      return NUTRITION_FITNESS_CONFIG;
    case 'challenges':
      return WORKPLACE_CHALLENGES_CONFIG;
    case 'wellness-camp':
      return WELLNESS_CAMP_CONFIG;
    case 'diabetes-care':
      return DIABETES_CARE_CONFIG;
    case 'maternity-paternity':
      return MATERNITY_PATERNITY_CONFIG;
    case 'women-wellness':
      return WOMEN_WELLNESS_CONFIG;
    case 'physiotherapy':
      return PHYSIOTHERAPY_CONFIG;
    default:
      return EAP_CONFIG;
  }
}

// ---------------------------------------------------------
// Dynamic Calculations for "All Programs" view
// ---------------------------------------------------------
export function getAllProgramsSummary(enabledProgramIds: ProgramId[], orgTotalEmployees: number = 18500) {
  // Filter out any IDs that might not be valid switchable programs
  const validIds = enabledProgramIds.filter(id => id !== 'all-programs');
  const configs = validIds.map(getProgramConfig);
  
  const totalCost = configs.reduce((acc, c) => acc + c.roiFormula.programCost, 0);
  const totalHealthcareSavings = configs.reduce((acc, c) => acc + c.roiFormula.healthcareCostReduction, 0);
  const totalAbsenteeismSavings = configs.reduce((acc, c) => acc + c.roiFormula.reducedAbsenteeism, 0);
  const totalPresenteeismSavings = configs.reduce((acc, c) => acc + c.roiFormula.reducedPresenteeism, 0);
  const totalTurnoverSavings = configs.reduce((acc, c) => acc + c.roiFormula.reducedTurnover, 0);
  const totalProductivitySavings = configs.reduce((acc, c) => acc + c.roiFormula.productivityGain, 0);

  const totalReturn = totalHealthcareSavings + totalAbsenteeismSavings + totalPresenteeismSavings + totalTurnoverSavings + totalProductivitySavings;
  const netSavings = totalReturn - totalCost;
  const roiRatio = totalCost > 0 ? totalReturn / totalCost : 0;
  const roiPercent = (roiRatio - 1) * 100;

  // Compute overall program reach (weighted average or baseline)
  const averageParticipation = configs.length > 0
    ? configs.reduce((acc, c) => {
        const rateKpi = c.overviewKPIs.find(k => k.id.includes('registered') || k.id.includes('enrollment') || k.id.includes('completed'));
        const valStr = rateKpi ? rateKpi.value.toString().replace('%', '') : '60';
        return acc + parseFloat(valStr);
      }, 0) / configs.length
    : 70;

  const activeParticipantsCount = configs.reduce((acc, c) => {
    const activeKpi = c.overviewKPIs.find(k => k.id.includes('active') || k.id.includes('completed') || k.id.includes('attendance'));
    const valStr = activeKpi ? activeKpi.value.toString().replace(/[^0-9]/g, '') : '5000';
    return acc + parseInt(valStr, 10);
  }, 0);

  const averageEngagement = configs.length > 0
    ? configs.reduce((acc, c) => {
        const ratingKpi = c.experienceKPIs.find(k => k.id.includes('csat') || k.id.includes('satisfy') || k.id.includes('satisfaction'));
        const valStr = ratingKpi ? ratingKpi.value.toString().split(' ')[0] : '4.85';
        return acc + (parseFloat(valStr) / 5 * 100);
      }, 0) / configs.length
    : 90;

  return {
    totalCost,
    totalHealthcareSavings,
    totalAbsenteeismSavings,
    totalPresenteeismSavings,
    totalTurnoverSavings,
    totalProductivitySavings,
    totalReturn,
    netSavings,
    roiRatio,
    roiPercent,
    averageParticipation: averageParticipation.toFixed(1),
    activeParticipantsCount,
    averageEngagement: averageEngagement.toFixed(1),
    totalEligible: orgTotalEmployees,
  };
}

// Global Static Baseline Table Data matching Spec Section 5
export const PROGRAM_PERFORMANCE_TABLE_DATA = [
  { id: 'eap', name: 'EAP', participation: '68%', engagement: '74%', outcome: '+18%', roi: '3.8x' },
  { id: 'virtual-care', name: 'Virtual Care & Telehealth', participation: '61%', engagement: '69%', outcome: '+21%', roi: '4.2x' },
  { id: 'health-checks', name: 'Corporate Health Checks', participation: '55%', engagement: '63%', outcome: '+19%', roi: '3.5x' },
  { id: 'nutrition-fitness', name: 'Nutrition & Fitness', participation: '72%', engagement: '77%', outcome: '+24%', roi: '3.6x' },
  { id: 'challenges', name: 'Workplace Challenges', participation: '58%', engagement: '81%', outcome: '+16%', roi: '2.9x' },
  { id: 'wellness-camp', name: 'Virtual Wellness Camp', participation: '64%', engagement: '88%', outcome: '+19%', roi: '3.5x' },
  { id: 'diabetes-care', name: 'Diabetes Care', participation: '68%', engagement: '72%', outcome: '+14.5%', roi: '3.73x' },
  { id: 'maternity-paternity', name: 'Maternity & Paternity', participation: '88%', engagement: '91%', outcome: '+11.2%', roi: '4.75x' },
  { id: 'women-wellness', name: 'Women Wellness', participation: '84%', engagement: '88%', outcome: '+24.2%', roi: '4.33x' },
  { id: 'physiotherapy', name: 'Physiotherapy', participation: '84%', engagement: '82%', outcome: '+38.5%', roi: '4.36x' },
];
