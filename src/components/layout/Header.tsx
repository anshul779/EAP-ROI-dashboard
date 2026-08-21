import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import type { FilterState } from '../../types';
import { ORGANIZATIONS } from '../../data/mockData';
import { MantraCareLogo } from '../common/MantraCareLogo';

interface HeaderProps {
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onOpenExport: () => void;
  onOpenGlobalFilters: () => void;
  onToggleSidebar: () => void;
  darkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  filters,
  onFilterChange,
  onOpenExport,
  onOpenGlobalFilters,
  onToggleSidebar,
  darkMode,
}) => {
  const [showOrgDropdown, setShowOrgDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#071C36] text-slate-900 dark:text-white shadow-md border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-[1700px] mx-auto px-3 sm:px-4 md:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 flex-wrap">
        {/* Official MantraCare Brand Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0 min-w-0">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-[#102A4C] text-slate-700 dark:text-white border border-slate-200 dark:border-white/15"
            aria-label="Open navigation menu"
          >
            <Icons.Menu className="w-5 h-5" />
          </button>
          <MantraCareLogo isDark={darkMode} size="md" />
          <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-black bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 uppercase tracking-widest border border-blue-200 dark:border-blue-700">
            ENTERPRISE ROI
          </span>
        </div>


        {/* Right Controls: Org Selector, Date Range, Filter, Export, Dark Mode */}
        <div className="flex items-center justify-end gap-1.5 sm:gap-2 md:gap-3 shrink-0 ml-auto min-w-0">
          {/* Org Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowOrgDropdown(!showOrgDropdown)}
              className="flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#102A4C] hover:bg-slate-200 dark:hover:bg-[#15365F] border border-slate-200 dark:border-white/15 text-xs font-bold text-slate-800 dark:text-white transition-colors max-w-[10rem]"
            >
              <Icons.Building2 className="w-4 h-4 text-blue-500" />
              <span className="max-w-[130px] md:max-w-[170px] truncate">{currentOrg.name}</span>
              <Icons.ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showOrgDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl z-50 p-2">
                <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
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
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                      org.id === filters.organizationId
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#15365F]'
                    }`}
                  >
                    <div>
                      <div className="truncate">{org.name}</div>
                      <div className="text-[10px] opacity-75">{org.totalEmployees.toLocaleString()} employees</div>
                    </div>
                    {org.id === filters.organizationId && <Icons.Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Range Selector */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setShowDateDropdown(!showDateDropdown)}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#102A4C] hover:bg-slate-200 dark:hover:bg-[#15365F] border border-slate-200 dark:border-white/15 text-xs font-bold text-slate-800 dark:text-white transition-colors"
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
                      className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
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
          <button
            type="button"
            onClick={onOpenGlobalFilters}
            className="flex items-center space-x-1.5 px-3.5 py-2 mantra-btn-primary text-xs shrink-0"
          >
            <Icons.SlidersHorizontal className="w-4 h-4" />
            <span className="hidden md:inline">Filters</span>
          </button>

          {/* Export Report Button */}
          <button
            type="button"
            onClick={onOpenExport}
            className="flex items-center space-x-1.5 px-3.5 py-2 mantra-btn-secondary text-xs shrink-0"
          >
            <Icons.Download className="w-4 h-4" />
            <span className="hidden lg:inline">Export Board PDF</span>
          </button>


        </div>
      </div>
    </header>
  );
};
