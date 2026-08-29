import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import type { ModuleId } from '../../types';
import { PRIMARY_NAV_ITEMS } from '../../data/mockData';

interface SidebarProps {
  activeModule: ModuleId;
  onSelectModule: (id: ModuleId) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  onSelectModule,
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onCloseMobile,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = PRIMARY_NAV_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kicker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside
      className={`dashboard-sidebar fixed lg:sticky top-0 lg:top-[61px] bottom-0 left-0 h-full lg:h-[calc(100vh-61px)] bg-[#071C36] text-white border-r border-white/10 flex flex-col transition-all duration-300 z-50 lg:z-30 shrink-0 select-none
        ${collapsed ? 'lg:w-16' : 'lg:w-72'} 
        ${mobileOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0 w-72'}
      `}
    >
      {/* Search Header */}
      {(!collapsed || mobileOpen) && (
        <div className="p-3 border-b border-white/10 bg-[#092345]">
          <div className="relative">
            <Icons.Search className="w-3.5 h-3.5 text-blue-300 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search executive hub..."
              className="w-full pl-8 pr-7 py-1.5 bg-[#0F325E] text-white placeholder-blue-300/60 text-sm rounded-xl border border-blue-400/20 focus:outline-none focus:border-blue-400 font-medium"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2 text-blue-300 hover:text-white"
              >
                <Icons.X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onToggleCollapse}
        className="dashboard-sidebar-toggle hidden lg:flex absolute right-0 translate-x-1/2 w-[26px] h-[26px] min-w-[26px] min-h-[26px] rounded-full bg-white border border-slate-200 shadow-sm text-[#071C36] hover:bg-slate-100 transition-colors items-center justify-center z-[70] shrink-0"
        title={collapsed ? 'Expand Executive Sidebar' : 'Collapse Executive Sidebar'}
        aria-label={collapsed ? 'Expand Executive Sidebar' : 'Collapse Executive Sidebar'}
      >
        {collapsed ? <Icons.ChevronRight className="w-3.5 h-3.5" /> : <Icons.ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* 7 Primary Executive Navigation Items */}
      <div className={`relative z-0 flex-1 overflow-y-auto custom-scrollbar ${collapsed ? 'p-2 space-y-2' : 'p-3 space-y-2'}`}>
        <div className="px-2 py-1">
          {(!collapsed || mobileOpen) && (
            <div className="text-xs font-extrabold text-blue-300/80 uppercase tracking-widest">
              Executive Command Center
            </div>
          )}
        </div>

        {filteredItems.map((item) => {
          // Check if activeModule maps to this primary section or its aliases
          const isSelected =
            activeModule === item.id ||
            (item.id === 'exec-summary' && ['workforce-score', 'exec-insights', 'ai-daily-brief'].includes(activeModule)) ||
            (item.id === 'business-impact' && ['roi-dashboard', 'financial-roi', 'healthcare-savings', 'claims-costs', 'productivity-impact', 'voi-dashboard', 'benchmarks'].includes(activeModule)) ||
            (item.id === 'workforce-health' && ['population-health', 'mental-health', 'physical-wellbeing', 'preventive-health', 'chronic-disease', 'risk-segmentation', 'womens-health'].includes(activeModule)) ||
            (item.id === 'employee-experience' && ['eap-adoption', 'employee-engagement', 'employee-journey', 'therapy-coaching', 'care-utilisation', 'teleconsultation', 'digital-resources', 'self-care'].includes(activeModule)) ||
            (item.id === 'organization-insights' && ['dept-analytics', 'manager-effectiveness', 'manager-dashboard', 'global-offices', 'global-analytics', 'demographics', 'population-insights', 'campaigns'].includes(activeModule)) ||
            (item.id === 'ai-intelligence' && ['ai-coach', 'ai-insights', 'ai-recommendations', 'predictive-analytics', 'burnout-prediction', 'workforce-alerts'].includes(activeModule)) ||
            (item.id === 'reports-admin' && ['executive-reports', 'board-reports', 'dept-reports', 'scheduled-reports', 'export-center', 'admin-programs', 'admin-users', 'admin-integrations', 'admin-permissions', 'admin-settings'].includes(activeModule));

          const ItemIcon =
            (Icons as unknown as Record<string, React.ElementType>)[item.iconName] || Icons.LayoutDashboard;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onSelectModule(item.id);
                onCloseMobile();
              }}
              title={collapsed ? `${item.emoji} ${item.title} — ${item.description}` : undefined}
              className={`${
                (collapsed && !mobileOpen)
                  ? 'w-9 h-9 mx-auto p-0 rounded-xl flex items-center justify-center'
                  : 'w-full flex items-center p-3 rounded-2xl'
              } text-sm font-semibold transition-all group relative overflow-hidden isolate shrink-0 box-border ${
                isSelected
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30'
                  : 'text-slate-200 hover:bg-[#102A4C] hover:text-white'
              }`}
            >
              {/* Icon Badge */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-[#123866] text-blue-300 group-hover:bg-blue-600 group-hover:text-white'
                }`}
              >
                <ItemIcon className="w-4 h-4" />
              </div>

              {(!collapsed || mobileOpen) && (
                <div className="ml-3 text-left truncate flex-1 min-w-0">
                  <div className="truncate text-sm font-bold tracking-tight">{item.title}</div>
                </div>
              )}
            </button>
          );
        })}
      </div>


      {/* Sidebar Footer */}
      <div className="p-3 border-t border-white/10 bg-[#06172E] flex items-center justify-between">
        {(!collapsed || mobileOpen) && (
          <div className="text-[11px] text-blue-200/80 font-bold flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>MantraCare Executive SaaS</span>
          </div>
        )}
      </div>
    </aside>
  );
};
