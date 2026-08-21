import React from 'react';
import * as Icons from 'lucide-react';
import type { FilterState } from '../../types';

interface GlobalFilterBarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (updated: Partial<FilterState>) => void;
  onResetFilters: () => void;
}

export const GlobalFilterBar: React.FC<GlobalFilterBarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onResetFilters,
}) => {
  if (!isOpen) return null;

  const filterOptions = [
    { label: 'Country', key: 'country', options: ['All Countries', 'United States', 'United Kingdom', 'Germany', 'India', 'Singapore', 'Japan', 'Australia', 'Canada'] },
    { label: 'Office / Campus', key: 'office', options: ['All Offices', 'London HQ', 'New York Center', 'San Francisco Hub', 'Berlin Office', 'Bangalore Tech Park', 'Tokyo Branch', 'Sydney Office'] },
    { label: 'Department', key: 'department', options: ['All Departments', 'Engineering', 'Sales & BD', 'Customer Success', 'Operations & Logistics', 'Finance & Legal', 'Human Resources', 'Product & Design'] },
    { label: 'Business Unit', key: 'businessUnit', options: ['All BUs', 'Enterprise Products', 'Consumer Services', 'Global Ops', 'Cloud Infrastructure'] },
    { label: 'Age Demographic', key: 'ageGroup', options: ['All Ages', '18-25', '26-35', '36-45', '46-55', '56+'] },
    { label: 'Gender Identity', key: 'gender', options: ['All', 'Female', 'Male', 'Non-Binary / Self-Described', 'Undisclosed'] },
    { label: 'Employment Type', key: 'employmentType', options: ['All Types', 'Full-time Salaried', 'Part-time', 'Contractor', 'Executive'] },
    { label: 'Risk Level', key: 'riskLevel', options: ['All Risk Levels', 'Low Risk', 'Moderate Risk', 'High Stress Risk', 'Severe Burnout Risk'] },
    { label: 'Care Pathway', key: 'carePathway', options: ['All Pathways', 'Preventive Wellness', 'Acute Teletherapy', 'Manager Support', 'Chronic Care Management'] },
    { label: 'Provider Network', key: 'provider', options: ['All Providers', 'MantraCare Clinical Network', 'In-Network Specialists', 'Digital AI Coaching'] },
    { label: 'Service Type', key: 'serviceType', options: ['All Services', 'Therapy', 'Coaching', 'Mindfulness', 'Yoga', 'Virtual Primary Care', 'Women Care'] },
    { label: 'Health Condition', key: 'condition', options: ['All Conditions', 'Workplace Stress', 'Anxiety & Panic', 'Depression', 'Insomnia / Sleep', 'Work-Life Balance', 'Burnout'] },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-white dark:bg-[#0A2E5C] text-slate-900 dark:text-white h-full shadow-2xl overflow-y-auto flex flex-col border-l border-blue-900/40">
        {/* Drawer Header */}
        <div className="p-6 bg-[#0A2E5C] text-white flex items-center justify-between border-b border-blue-900">
          <div>
            <div className="mantra-kicker text-blue-300">MULTI-DIMENSIONAL POPULATION FILTERING</div>
            <h2 className="text-xl font-bold flex items-center space-x-2 mt-1">
              <Icons.Filter className="w-5 h-5 text-blue-400" />
              <span>Global Enterprise Filters</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-900/60 text-blue-200 hover:text-white transition-colors"
          >
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Controls Grid */}
        <div className="p-6 space-y-6 flex-1">
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/60 text-xs text-blue-800 dark:text-blue-200 flex items-center space-x-3">
            <Icons.ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              All filtered outputs strictly preserve HIPAA / GDPR employee anonymity. Minimum group size threshold (n ≥ 10) enforced.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filterOptions.map((item) => (
              <div key={item.key} className="space-y-1">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {item.label}
                </label>
                <select
                  value={(filters as any)[item.key] || item.options[0]}
                  onChange={(e) => onFilterChange({ [item.key]: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-blue-900 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  {item.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-blue-900 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetFilters}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors flex items-center space-x-1"
          >
            <Icons.RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg transition-colors flex items-center space-x-2"
          >
            <Icons.Check className="w-4 h-4" />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};
