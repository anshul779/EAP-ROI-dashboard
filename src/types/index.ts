export type DateRangeOption = 'Q1 2026' | 'Q2 2026' | 'YTD 2026' | 'Trailing 12 Months' | '5-Year Projection';

export type EnterpriseOrg = {
  id: string;
  name: string;
  totalEmployees: number;
  coveredLives: number;
  currency: string;
  currencySymbol: string;
};

export type FilterState = {
  organizationId: string;
  dateRange: DateRangeOption;
  country: string;
  office: string;
  department: string;
  businessUnit: string;
  ageGroup: string;
  gender: string;
  employmentType: string;
  riskLevel: string;
  carePathway: string;
  provider: string;
  serviceType: string;
  manager: string;
  condition: string;
  compareMode: boolean;
  compareTarget: 'Previous Period' | 'Industry Benchmark' | 'Target Goal';
};


export type ExecutiveCategory =
  | 'Executive Overview'
  | 'Business Impact'
  | 'Workforce Health'
  | 'Employee Experience'
  | 'Organization Insights'
  | 'AI Intelligence'
  | 'Reports & Admin';

export type ModuleId =
  // 7 Streamlined Primary Sidebar Pages
  | 'exec-summary'
  | 'business-impact'
  | 'workforce-health'
  | 'employee-experience'
  | 'organization-insights'
  | 'ai-intelligence'
  | 'reports-admin'
  // Legacy / Submodule Aliases for backward compatibility
  | 'workforce-score'
  | 'exec-insights'
  | 'ai-daily-brief'
  | 'roi-dashboard'
  | 'financial-roi'
  | 'healthcare-savings'
  | 'claims-costs'
  | 'productivity-impact'
  | 'voi-dashboard'
  | 'benchmarks'
  | 'population-health'
  | 'mental-health'
  | 'physical-wellbeing'
  | 'preventive-health'
  | 'chronic-disease'
  | 'risk-segmentation'
  | 'womens-health'
  | 'eap-adoption'
  | 'employee-engagement'
  | 'employee-journey'
  | 'therapy-coaching'
  | 'care-utilisation'
  | 'teleconsultation'
  | 'digital-resources'
  | 'self-care'
  | 'clinical-improvements'
  | 'clinical-outcomes'
  | 'assessments'
  | 'recovery-tracking'
  | 'wellness-programs'
  | 'crisis-management'
  | 'dept-analytics'
  | 'manager-effectiveness'
  | 'manager-dashboard'
  | 'global-offices'
  | 'global-analytics'
  | 'demographics'
  | 'population-insights'
  | 'campaigns'
  | 'ai-coach'
  | 'ai-insights'
  | 'ai-recommendations'
  | 'predictive-analytics'
  | 'burnout-prediction'
  | 'workforce-alerts'
  | 'executive-reports'
  | 'board-reports'
  | 'dept-reports'
  | 'scheduled-reports'
  | 'export-center'
  | 'admin-programs'
  | 'admin-users'
  | 'admin-integrations'
  | 'admin-permissions'
  | 'admin-settings';

export type ModuleDef = {
  id: ModuleId;
  title: string;
  kicker: string;
  iconName: string;
  description: string;
  category: ExecutiveCategory;
  emoji?: string;
  badge?: string;
};


export type NavGroupDef = {
  category: ExecutiveCategory;
  icon: string;
  emoji: string;
  items: { id: ModuleId; label: string; kicker?: string }[];
};

export type KPICardData = {
  id: string;
  title: string;
  kicker?: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  change: number; // e.g. +14.2 or -3.1
  changeLabel?: string;
  trend: 'up' | 'down' | 'neutral';
  isGoodTrend: boolean;
  sparklineData: number[];
  description?: string;
  icon: string;
  category?: string;
};

export type DrillDownData = {
  title: string;
  metricKey: string;
  orgLevel: { name: string; value: string | number; change: string }[];
  countryLevel: { country: string; value: string | number; total: number }[];
  officeLevel: { office: string; country: string; value: string | number }[];
  deptLevel: { dept: string; headcount: number; metricValue: string | number; status: 'Optimal' | 'Attention' | 'Critical' }[];
  deidentifiedTeams: { team: string; size: number; utilization: string; outcome: string }[];
};

export type AIRecommendation = {
  id: string;
  type: '🚨 High Burnout' | '⚠️ Low Adoption' | '💰 ROI Opportunity' | '🏥 Claims Alert' | '📈 Retention Risk';
  title: string;
  teaser: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Strategic';
  expectedImpact: string;
  estimatedSavings: string;
  affectedEmployees: number;
  recommendedAction: string;
  confidenceScore: number;
  department?: string;
  location?: string;
};

