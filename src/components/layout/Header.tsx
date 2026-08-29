import React, { useState, useRef, useEffect } from 'react';
import * as Icons from 'lucide-react';
import type { FilterState, ProgramId } from '../../types';
import { ORGANIZATIONS } from '../../data/mockData';
import { MantraCareLogo } from '../common/MantraCareLogo';
import { ORG_ENABLED_PROGRAMS, getProgramConfig } from '../../data/programsConfig';

interface HeaderProps {
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onOpenExport: () => void;
  onOpenGlobalFilters: () => void;
  onToggleSidebar: () => void;
  darkMode: boolean;
  selectedProgram: ProgramId;
  onProgramChange: (p: ProgramId) => void;
}

export const Header: React.FC<HeaderProps> = ({
  filters,
  onFilterChange,
  onOpenExport,
  onOpenGlobalFilters,
  onToggleSidebar,
  darkMode,
  selectedProgram,
  onProgramChange,
}) => {
  const [showOrgDropdown, setShowOrgDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showProgramDropdown, setShowProgramDropdown] = useState(false);

  const programRef = useRef<HTMLDivElement>(null);
  const orgRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (showProgramDropdown && programRef.current && !programRef.current.contains(target)) {
        setShowProgramDropdown(false);
      }
      if (showOrgDropdown && orgRef.current && !orgRef.current.contains(target)) {
        setShowOrgDropdown(false);
      }
      if (showDateDropdown && dateRef.current && !dateRef.current.contains(target)) {
        setShowDateDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [showProgramDropdown, showOrgDropdown, showDateDropdown]);

  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];
  const enabledProgramIds = ORG_ENABLED_PROGRAMS[filters.organizationId] || [];

  const coreEapIds = enabledProgramIds.filter(id => id === 'eap');
  const wellnessProgramIds = enabledProgramIds.filter(id => ['virtual-care', 'health-checks', 'nutrition-fitness', 'challenges', 'wellness-camp'].includes(id));
  const specializedCareIds = enabledProgramIds.filter(id => ['diabetes-care', 'maternity-paternity', 'women-wellness', 'physiotherapy'].includes(id));

  const getProgramName = (id: ProgramId) => {
    if (id === 'all-programs') return 'All Programs';
    return getProgramConfig(id).name;
  };

  const renderProgramButton = (progId: ProgramId) => {
    const isSelected = selectedProgram === progId;
    const config = getProgramConfig(progId);
    return (
      <button
        key={progId}
        type="button"
        onClick={() => {
          onProgramChange(progId);
          setShowProgramDropdown(false);
        }}
        className={`w-full text-left px-3 py-1.5 rounded-xl text-sm flex items-center justify-between transition-colors ${
          isSelected
            ? 'bg-blue-600 text-white font-bold'
            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#15365F]'
        }`}
      >
        <div className="flex items-center space-x-2.5">
          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
            isSelected
              ? 'border-white bg-white'
              : 'border-slate-400 dark:border-slate-500'
          }`}>
            {isSelected && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            )}
          </span>
          <span>{config.name}</span>
        </div>
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#071C36] text-slate-900 dark:text-white shadow-md border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="px-3 sm:px-4 md:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        {/* Official MantraCare Brand Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-[#102A4C] text-slate-700 dark:text-white border border-slate-200 dark:border-white/15"
            aria-label="Open navigation menu"
            title="Open executive navigation drawer"
          >
            <Icons.Menu className="w-5 h-5" />
          </button>
          <div title="MantraCare Enterprise ROI Platform Home">
            <MantraCareLogo isDark={darkMode} size="md" />
          </div>
          <span
            className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-black bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 uppercase tracking-widest border border-blue-200 dark:border-blue-700"
            title="Enterprise level ROI analytics and benchmarking suite"
          >
            ENTERPRISE ROI
          </span>

          {/* Global Wellness Program Selector */}
          <div ref={programRef} className="relative ml-2 sm:ml-4">
            <button
              type="button"
              onClick={() => {
                setShowProgramDropdown(!showProgramDropdown);
                setShowOrgDropdown(false);
                setShowDateDropdown(false);
              }}
              title="Filter dashboard by specific wellness program or select aggregate portfolio view"
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-blue-50 dark:bg-[#102A4C] hover:bg-blue-100 dark:hover:bg-[#15365F] border border-blue-200 dark:border-white/15 text-sm font-bold text-blue-700 dark:text-blue-300 transition-all cursor-pointer"
            >
              <Icons.Activity className="w-3.5 h-3.5" />
              <span>Wellness Program: {getProgramName(selectedProgram)}</span>
              <Icons.ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showProgramDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl z-50 p-2 animate-in fade-in slide-in-from-top-1 duration-150 max-h-96 overflow-y-auto">
                  <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Wellness Program
                  </div>
                  
                  {/* All Programs option */}
                  <button
                    type="button"
                    onClick={() => {
                      onProgramChange('all-programs');
                      setShowProgramDropdown(false);
                    }}
                    title="View aggregate metrics across all active wellness programs"
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm flex items-center justify-between transition-colors ${
                      selectedProgram === 'all-programs'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#15365F]'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedProgram === 'all-programs'
                          ? 'border-white bg-white'
                          : 'border-slate-400 dark:border-slate-500'
                      }`}>
                        {selectedProgram === 'all-programs' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        )}
                      </span>
                      <span>All Programs</span>
                    </div>
                  </button>

                  {/* Core EAP */}
                  {coreEapIds.length > 0 && (
                    <div className="mt-2 border-t border-slate-100 dark:border-white/5 pt-1.5">
                      <div className="px-3 py-1 text-xs font-black text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                        EAP Services
                      </div>
                      {coreEapIds.map((progId) => renderProgramButton(progId))}
                    </div>
                  )}

                  {/* Wellness Programs */}
                  {wellnessProgramIds.length > 0 && (
                    <div className="mt-2 border-t border-slate-100 dark:border-white/5 pt-1.5">
                      <div className="px-3 py-1 text-xs font-black text-emerald-500 dark:text-emerald-400 uppercase tracking-widest">
                        Wellness Programs
                      </div>
                      {wellnessProgramIds.map((progId) => renderProgramButton(progId))}
                    </div>
                  )}

                  {/* Specialized Care */}
                  {specializedCareIds.length > 0 && (
                    <div className="mt-2 border-t border-slate-100 dark:border-white/5 pt-1.5">
                      <div className="px-3 py-1 text-xs font-black text-amber-500 dark:text-amber-400 uppercase tracking-widest">
                        Specialized Care
                      </div>
                      {specializedCareIds.map((progId) => renderProgramButton(progId))}
                    </div>
                  )}
                </div>
            )}
          </div>
        </div>


        {/* Right Controls: Org Selector, Date Range, Filter, Export */}
        <div className="w-full md:w-auto flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mt-2 md:mt-0 pt-2 md:pt-0 border-t border-slate-150 dark:border-white/10 md:border-t-0 justify-between md:justify-end shrink-0 min-w-0">
          {/* Org Selector */}
          <div ref={orgRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setShowOrgDropdown(!showOrgDropdown);
                setShowProgramDropdown(false);
                setShowDateDropdown(false);
              }}
              title="Switch active enterprise organization account"
              className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#102A4C] hover:bg-slate-200 dark:hover:bg-[#15365F] border border-slate-200 dark:border-white/15 text-sm font-bold text-slate-800 dark:text-white transition-colors max-w-[10rem]"
            >
              <Icons.Building2 className="w-4 h-4 text-blue-500" />
              <span className="max-w-[130px] md:max-w-[170px] truncate">{currentOrg.name}</span>
              <Icons.ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showOrgDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl z-50 p-2">
                <div className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Select Enterprise Account
                </div>
                {ORGANIZATIONS.map((org) => (
                  <button
                    key={org.id}
                    type="button"
                    onClick={() => {
                      onFilterChange({ organizationId: org.id });
                      setShowOrgDropdown(false);
                    }}
                    title={`Select ${org.name} (${org.totalEmployees.toLocaleString()} employees)`}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm flex items-center justify-between transition-colors ${
                      org.id === filters.organizationId
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#15365F]'
                    }`}
                  >
                    <div>
                      <div className="truncate">{org.name}</div>
                      <div className="text-xs opacity-75">{org.totalEmployees.toLocaleString()} employees</div>
                    </div>
                    {org.id === filters.organizationId && <Icons.Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Range Selector */}
          <div ref={dateRef} className="relative">
            <button
              type="button"
              onClick={() => {
                setShowDateDropdown(!showDateDropdown);
                setShowProgramDropdown(false);
                setShowOrgDropdown(false);
              }}
              title="Change analytical period and date timeframe"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#102A4C] hover:bg-slate-200 dark:hover:bg-[#15365F] border border-slate-200 dark:border-white/15 text-sm font-bold text-slate-800 dark:text-white transition-colors"
            >
              <Icons.Calendar className="w-4 h-4 text-blue-500" />
              <span>{filters.dateRange}</span>
              <Icons.ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showDateDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl z-50 p-1.5">
                {['Q1 2026', 'Q2 2026', 'YTD 2026', 'Trailing 12 Months', '5-Year Projection'].map(
                  (opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        onFilterChange({ dateRange: opt as any });
                        setShowDateDropdown(false);
                      }}
                      title={`Filter analytics by ${opt}`}
                      className={`w-full text-left px-3 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
                        filters.dateRange === opt
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#15365F]'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Global Filter Drawer Button */}
          <div className="relative group">
            <button
              type="button"
              onClick={onOpenGlobalFilters}
              className="flex items-center space-x-1.5 px-3.5 py-2 mantra-btn-primary text-sm shrink-0"
              title="Advanced filters for demographics, departments, risk levels, and locations"
            >
              <Icons.SlidersHorizontal className="w-4 h-4" />
              <span className="hidden md:inline">Filters</span>
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Advanced filters (Demographics, BUs, Risk)
            </div>
          </div>

          {/* Export Report Button */}
          <div className="relative group">
            <button
              type="button"
              onClick={onOpenExport}
              className="flex items-center space-x-1.5 px-3.5 py-2 mantra-btn-secondary text-sm shrink-0"
              title="Export executive ROI report as board-ready PDF or Excel file"
            >
              <Icons.Download className="w-4 h-4" />
              <span className="hidden lg:inline">Export Board PDF</span>
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              Export as PDF or Excel
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
