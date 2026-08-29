import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { GlobalFilterBar } from './components/layout/GlobalFilterBar';
import { DrillDownModal } from './components/layout/DrillDownModal';
import { ExportModal } from './components/layout/ExportModal';
import { WaveDivider } from './components/layout/WaveDivider';

import { ExecutiveSummaryModule } from './components/modules/ExecutiveSummaryModule';
import { FinancialROIModule } from './components/modules/FinancialROIModule';
import { WorkforceHealthModule } from './components/modules/WorkforceHealthModule';
import { EmployeeEngagementModule } from './components/modules/EmployeeEngagementModule';
import { GlobalAnalyticsModule } from './components/modules/GlobalAnalyticsModule';
import { AIRecommendationEngineModule } from './components/modules/AIRecommendationEngineModule';
import { ReportsModule } from './components/modules/ReportsModule';


import type { FilterState, ModuleId, KPICardData, ProgramId } from './types';
import { MODULE_DEFS, ORGANIZATIONS } from './data/mockData';
import * as Icons from 'lucide-react';
import { InfoTooltip } from './components/common/InfoTooltip';
import { dashboardInfo } from './data/dashboardInfo';
import { ORG_ENABLED_PROGRAMS, getProgramConfig, getAllProgramsSummary } from './data/programsConfig';

export function App() {
  const [activeModule, setActiveModule] = useState<ModuleId>('exec-summary');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode] = useState(false);

  // Wellness Program Selection State
  const [selectedProgram, setSelectedProgram] = useState<ProgramId>('all-programs');

  // Modals & Drawers
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [drillDownCard, setDrillDownCard] = useState<KPICardData | null>(null);

  // Global Filter State
  const [filters, setFilters] = useState<FilterState>({
    organizationId: 'acme-global',
    dateRange: 'Q1 2026',
    country: 'All Countries',
    office: 'All Offices',
    department: 'All Departments',
    businessUnit: 'All BUs',
    ageGroup: 'All Ages',
    gender: 'All',
    employmentType: 'All Types',
    riskLevel: 'All Risk Levels',
    carePathway: 'All Pathways',
    provider: 'All Providers',
    serviceType: 'All Services',
    manager: 'All Managers',
    condition: 'All Conditions',
    compareMode: false,
    compareTarget: 'Previous Period',
  });

  const [aiQueryResult, setAiQueryResult] = useState<string | null>(null);

  // Sync dark class on html root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync program filter based on enabled programs for selected organization
  useEffect(() => {
    const enabled = ORG_ENABLED_PROGRAMS[filters.organizationId] || [];
    if (selectedProgram !== 'all-programs' && !enabled.includes(selectedProgram)) {
      setSelectedProgram('all-programs');
    }
  }, [filters.organizationId]);

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters({
      organizationId: 'acme-global',
      dateRange: 'Q1 2026',
      country: 'All Countries',
      office: 'All Offices',
      department: 'All Departments',
      businessUnit: 'All BUs',
      ageGroup: 'All Ages',
      gender: 'All',
      employmentType: 'All Types',
      riskLevel: 'All Risk Levels',
      carePathway: 'All Pathways',
      provider: 'All Providers',
      serviceType: 'All Services',
      manager: 'All Managers',
      condition: 'All Conditions',
      compareMode: false,
      compareTarget: 'Previous Period',
    });
  };

  const currentModuleDef = MODULE_DEFS.find((m) => m.id === activeModule) || MODULE_DEFS[0];
  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];
  const currentModuleInfo = dashboardInfo.modules[currentModuleDef.id as keyof typeof dashboardInfo.modules];

  // Dynamic Kicker and Title
  const getModuleTitle = () => {
    if (selectedProgram === 'all-programs') {
      return `${currentModuleDef.title} — All Programs`;
    }
    const config = getProgramConfig(selectedProgram);
    return `${currentModuleDef.title} — ${config.name}`;
  };

  const getModuleKicker = () => {
    if (selectedProgram === 'all-programs') {
      return 'WORKFORCE PORTFOLIO SUMMARY';
    }
    const config = getProgramConfig(selectedProgram);
    return config.kicker;
  };

  // Dynamic Overall ROI calculation
  const enabledProgramIds = ORG_ENABLED_PROGRAMS[filters.organizationId] || [];
  const programSummary = getAllProgramsSummary(enabledProgramIds, currentOrg.totalEmployees);
  let currentRoiDisplay = '';
  if (selectedProgram === 'all-programs') {
    currentRoiDisplay = `${programSummary.roiRatio.toFixed(2)}× Portfolio ROI`;
  } else {
    const config = getProgramConfig(selectedProgram);
    const cost = config.roiFormula.programCost;
    const totalReturn = config.roiFormula.healthcareCostReduction + config.roiFormula.reducedAbsenteeism + config.roiFormula.reducedPresenteeism + config.roiFormula.reducedTurnover + config.roiFormula.productivityGain;
    const ratio = cost > 0 ? totalReturn / cost : 0;
    currentRoiDisplay = `${ratio.toFixed(2)}× ROI`;
  }

  const renderModuleContent = () => {
    // 1. Executive Overview
    if (['exec-summary', 'workforce-score', 'exec-insights', 'ai-daily-brief'].includes(activeModule)) {
      return <ExecutiveSummaryModule onDrillDown={(card) => setDrillDownCard(card)} selectedProgram={selectedProgram} filters={filters} />;
    }

    // 2. Business Impact
    if (['business-impact', 'roi-dashboard', 'financial-roi', 'voi-dashboard', 'benchmarks', 'healthcare-savings', 'claims-costs', 'productivity-impact'].includes(activeModule)) {
      return <FinancialROIModule onDrillDown={(card) => setDrillDownCard(card)} selectedProgram={selectedProgram} filters={filters} />;
    }

    // 3. Workforce Health
    if (['workforce-health', 'population-health', 'mental-health', 'physical-wellbeing', 'preventive-health', 'chronic-disease', 'risk-segmentation', 'womens-health', 'clinical-improvements', 'clinical-outcomes', 'assessments', 'recovery-tracking', 'wellness-programs', 'crisis-management'].includes(activeModule)) {
      return <WorkforceHealthModule onDrillDown={(card) => setDrillDownCard(card)} selectedProgram={selectedProgram} filters={filters} />;
    }

    // 4. Employee Experience
    if (['employee-experience', 'eap-adoption', 'employee-engagement', 'employee-journey', 'therapy-coaching', 'care-utilisation', 'teleconsultation', 'digital-resources', 'self-care'].includes(activeModule)) {
      return <EmployeeEngagementModule onDrillDown={(card) => setDrillDownCard(card)} selectedProgram={selectedProgram} filters={filters} />;
    }

    // 5. Organization Insights
    if (['organization-insights', 'global-offices', 'global-analytics', 'manager-effectiveness', 'manager-dashboard', 'dept-analytics', 'demographics', 'population-insights', 'campaigns'].includes(activeModule)) {
      return <GlobalAnalyticsModule onDrillDown={(card) => setDrillDownCard(card)} selectedProgram={selectedProgram} filters={filters} />;
    }

    // 6. AI Intelligence
    if (['ai-intelligence', 'ai-coach', 'ai-insights', 'ai-recommendations', 'predictive-analytics', 'burnout-prediction', 'workforce-alerts'].includes(activeModule)) {
      return <AIRecommendationEngineModule selectedProgram={selectedProgram} filters={filters} />;
    }

    // 7. Reports & Admin
    if (['reports-admin', 'executive-reports', 'board-reports', 'dept-reports', 'scheduled-reports', 'export-center', 'admin-programs', 'admin-users', 'admin-integrations', 'admin-permissions', 'admin-settings'].includes(activeModule)) {
      return <ReportsModule onOpenExport={() => setIsExportOpen(true)} activeSubTab={activeModule} selectedProgram={selectedProgram} filters={filters} />;
    }

    // Fallback
    return <ExecutiveSummaryModule onDrillDown={(card) => setDrillDownCard(card)} selectedProgram={selectedProgram} filters={filters} />;
  };


  return (
    <div className="min-h-screen bg-[#F7FAFD] dark:bg-[#071C36] text-[#0A2E5C] dark:text-white flex flex-col font-sans transition-colors duration-200 mantra-bg-circles relative">
      {/* Mobile Sidebar Overlay Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden cursor-pointer"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Top Header */}
      <Header
        filters={filters}
        onFilterChange={handleFilterChange}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenGlobalFilters={() => setIsFilterBarOpen(true)}
        onToggleSidebar={() => {
          setMobileSidebarOpen((open) => {
            if (!open) setSidebarCollapsed(false);
            return !open;
          });
        }}
        darkMode={darkMode}
        selectedProgram={selectedProgram}
        onProgramChange={setSelectedProgram}
      />

      {/* Compare Mode Banner Overlay */}
      {filters.compareMode && (
        <div className="bg-amber-500 text-slate-950 font-bold px-6 py-2 text-xs flex items-center justify-between border-b border-amber-600 shadow">
          <div className="flex items-center space-x-2">
            <Icons.GitCompare className="w-4 h-4" />
            <span>
              COMPARE MODE ACTIVE: Comparing <strong>{filters.dateRange}</strong> vs{' '}
              <strong>{filters.compareTarget}</strong>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {['Previous Period', 'Industry Benchmark', 'Target Goal'].map((tgt) => (
              <button
                key={tgt}
                onClick={() => handleFilterChange({ compareTarget: tgt as any })}
                className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold transition-colors ${
                  filters.compareTarget === tgt
                    ? 'bg-slate-950 text-white'
                    : 'bg-amber-600 text-slate-950 hover:bg-amber-700'
                }`}
              >
                {tgt}
              </button>
            ))}
            <button
              onClick={() => handleFilterChange({ compareMode: false })}
              className="ml-4 underline hover:text-white"
            >
              Exit Compare
            </button>
          </div>
        </div>
      )}

      {/* Mantra AI Instant Query Toast Notification */}
      {aiQueryResult && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0A2E5C] text-white p-4 rounded-xl shadow-2xl border border-purple-500 max-w-md animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start space-x-3">
            <Icons.Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5 animate-pulse" />
            <div>
              <div className="text-[10px] font-bold text-purple-300 uppercase">Mantra AI Answer</div>
              <p className="text-xs font-semibold mt-1 leading-relaxed">{aiQueryResult}</p>
            </div>
            <button onClick={() => setAiQueryResult(null)} className="text-slate-400 hover:text-white">
              <Icons.X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 relative">
        {/* Sticky Navy Sidebar */}
        <Sidebar
          activeModule={activeModule}
          onSelectModule={(id) => setActiveModule(id)}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* Dynamic Module Workspace Container */}
        <main className="flex-1 overflow-x-hidden min-w-0">
          {/* Top Organic Wave Accent Band */}
          <div className="bg-[#0A2E5C] text-white pb-5 sm:pb-6 pt-3 sm:pt-4 px-4 sm:px-6 md:px-8 relative">
            <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="mantra-kicker text-blue-300">{getModuleKicker()}</div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-1 break-words leading-tight">
                    {getModuleTitle()}
                  </h1>
                  {currentModuleInfo && (
                    <InfoTooltip
                      title={currentModuleInfo.title}
                      description={currentModuleInfo.description}
                      placement="bottom"
                    />
                  )}
                </div>
                <p className="text-sm md:text-base text-blue-200/80 mt-1 max-w-3xl leading-relaxed">
                  {currentModuleDef.description}
                </p>
              </div>

              {/* Quick Status Pill */}
              <div className="flex items-center space-x-3 shrink-0 bg-blue-900/60 p-3 rounded-xl border border-blue-700/60">
                <div className="mantra-icon-badge w-10 h-10">
                  <Icons.Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-300 font-bold uppercase">{currentOrg.name}</div>
                  <div className="text-base font-extrabold text-white">{currentRoiDisplay}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave transition from navy to canvas */}
          <WaveDivider fillColor={darkMode ? '#061B36' : '#F8FAFC'} />

          {/* Module Component Rendering Canvas */}
          <div className="p-3 sm:p-4 md:p-8 max-w-[1600px] mx-auto space-y-5 sm:space-y-8">
            {renderModuleContent()}
          </div>
        </main>
      </div>

      {/* Global Filter Drawer Modal */}
      <GlobalFilterBar
        isOpen={isFilterBarOpen}
        onClose={() => setIsFilterBarOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />

      {/* Multi-Level Drill Down Modal */}
      <DrillDownModal cardData={drillDownCard} onClose={() => setDrillDownCard(null)} />

      {/* Board-Ready PDF & Excel Export Modal */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} filters={filters} />
    </div>
  );
}
export default App;

