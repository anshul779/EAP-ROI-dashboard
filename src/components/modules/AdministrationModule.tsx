import React from 'react';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface AdministrationModuleProps {
  activeSubTab?: string;
}

export const AdministrationModule: React.FC<AdministrationModuleProps> = ({ activeSubTab = 'admin-programs' }) => {
  const adminSections = [
    {
      id: 'admin-programs',
      title: 'Global Benefit Programs',
      icon: 'ShieldCheck',
      badge: 'Active (18,500 Seats)',
      description: 'Configure corporate EAP session limits (8 free sessions/employee), dependent coverage rules, and specialized clinical network access.',
    },
    {
      id: 'admin-users',
      title: 'User Roles & Governance',
      icon: 'Users',
      badge: '4 Roles Configured',
      description: 'Manage executive access roles (CHRO Full Access, HRBP Department View, Manager Aggregated View, External Auditor Read-Only).',
    },
    {
      id: 'admin-integrations',
      title: 'Enterprise Data Connectors',
      icon: 'Database',
      badge: '4 Active Connectors',
      description: 'Automated bi-directional synchronization with Workday HRIS, SAP SuccessFactors, ADP Payroll, and BlueCross Healthcare Claims.',
    },
    {
      id: 'admin-permissions',
      title: 'HIPAA & GDPR Privacy Controls',
      icon: 'Lock',
      badge: 'Compliance Enforced',
      description: 'De-identification minimum threshold (N≥5), automated PII scrubbing, audit trail logging, and encryption settings.',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="mantra-card p-6 md:p-8 bg-gradient-to-br from-[#071C36] to-[#0A2E5C] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-blue-300 text-xs font-extrabold uppercase tracking-widest">
            <Icons.Settings className="w-4 h-4" />
            <span>PLATFORM GOVERNANCE & SETTINGS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <h2 className="text-2xl md:text-3xl font-extrabold mt-1">Enterprise Administration & Security Command</h2>
            <InfoTooltip title={dashboardInfo.administration.title} description={dashboardInfo.administration.description} placement="bottom" />
          </div>
          <p className="text-xs md:text-sm text-blue-200/80 mt-1 max-w-2xl">
            Configure global EAP benefits, user permissions, HRIS integrations, HIPAA/GDPR privacy rules, and platform settings.
          </p>
        </div>
        <div className="flex items-center space-x-3 shrink-0 bg-blue-900/60 p-3 rounded-xl border border-blue-700/60">
          <Icons.Shield className="w-6 h-6 text-emerald-400" />
          <div>
            <div className="text-[10px] text-blue-300 font-bold uppercase">Security Status</div>
            <div className="text-xs font-extrabold text-white">SOC 2 Type II Certified</div>
          </div>
        </div>
      </div>

      {/* Active SubTab Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Active Section</div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white capitalize">
            {activeSubTab.replace('admin-', '').replace('-', ' ')} Settings
          </h3>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center space-x-2">
          <Icons.Plus className="w-4 h-4" />
          <span>Add New Config</span>
        </button>
      </div>

      {/* Admin Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminSections.map((sec) => {
          const IconComp = (Icons as unknown as Record<string, React.ElementType>)[sec.icon] || Icons.Settings;
          const isCurrent = activeSubTab === sec.id;

          return (
            <div
              key={sec.id}
              className={`mantra-card p-6 flex flex-col justify-between transition-all ${
                isCurrent
                  ? 'border-2 border-blue-500 shadow-xl'
                  : 'hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    {sec.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-4">{sec.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{sec.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-semibold">Status: Configured & Active</span>
                <button className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#102A4C] hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-200 font-bold text-xs rounded-lg transition-colors flex items-center space-x-1 cursor-pointer">
                  <span>Manage</span>
                  <Icons.ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
