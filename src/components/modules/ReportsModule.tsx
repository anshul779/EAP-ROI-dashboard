import React from 'react';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface ReportsModuleProps {
  onOpenExport: () => void;
  activeSubTab?: string;
}

export const ReportsModule: React.FC<ReportsModuleProps> = ({ onOpenExport, activeSubTab = 'executive-reports' }) => {
  const reportsList = [
    {
      id: 'exec-q1',
      title: 'Q1 2026 Executive Workforce Health & ROI Report',
      category: 'Executive Reports',
      date: 'Generated March 31, 2026',
      author: 'MantraCare AI Intelligence Engine',
      pages: '14 Pages',
      downloads: 'PDF, PPTX, XLSX',
      summary: 'Comprehensive executive briefing summarizing total program investment ($720k), net return ($3.01M), PHQ-9 clinical recovery (84.2%), and department burnout heatmaps.',
      recommendedFor: 'CHRO, CEO, CFO, Board of Directors',
    },
    {
      id: 'board-deck',
      title: 'Q1 2026 Board of Directors Presentation Deck',
      category: 'Board Reports',
      date: 'Generated April 2, 2026',
      author: 'MantraCare Board Reporting Suite',
      pages: '12 Slides',
      downloads: 'PPTX, PDF',
      summary: 'High-impact slide deck with widescreen executive charts, financial ROI breakdown, healthcare claim cost avoidance, and benchmark comparisons against Fortune 500 tech peers.',
      recommendedFor: 'Board Committee, Chief Executive Officer',
    },
    {
      id: 'dept-eng',
      title: 'Engineering Division Health & Burnout Risk Digest',
      category: 'Department Reports',
      date: 'Generated April 5, 2026',
      author: 'People Analytics Team',
      pages: '8 Pages',
      downloads: 'PDF, CSV',
      summary: 'De-identified squad-level analysis identifying elevated stress drivers in London sprint teams and recommended 4-week manager coaching interventions.',
      recommendedFor: 'VP of Engineering, Engineering HRBP',
    },
    {
      id: 'claims-audit',
      title: 'Annual Healthcare Claims & Cost Avoidance Audit',
      category: 'Executive Reports',
      date: 'Generated January 15, 2026',
      author: 'Actuarial Analytics Group',
      pages: '22 Pages',
      downloads: 'PDF, XLSX',
      summary: 'Actuarial validation of $1,840,000 in avoided outpatient mental health claims and emergency room diversion fees.',
      recommendedFor: 'Chief Financial Officer, Benefits Director',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="mantra-card p-6 md:p-8 bg-gradient-to-br from-[#0A2E5C] to-[#0F3B75] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-blue-300 text-xs font-extrabold uppercase tracking-widest">
            <Icons.FileText className="w-4 h-4" />
            <span>EXECUTIVE REPORTING CENTER</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-1">Board-Ready Executive Reports & Automated Exports</h2>
          <p className="text-xs md:text-sm text-blue-200/80 mt-1 max-w-2xl">
            Generate, schedule, and export compliance-certified workforce health decks, ROI audits, and department digests in PDF, PowerPoint, Excel, and CSV formats.
          </p>
        </div>
        <button
          onClick={onOpenExport}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-extrabold text-xs rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
        >
          <Icons.Download className="w-4 h-4" />
          <span>Launch Export Center</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mantra-card p-5">
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase">Generated Reports</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">48 Reports</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">↑ 12 new this quarter</div>
        </div>
        <div className="mantra-card p-5">
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase">Scheduled Subscriptions</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">14 Active</div>
          <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-1">Weekly & Monthly automated dispatch</div>
        </div>
        <div className="mantra-card p-5">
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase">Data Privacy Protocol</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">HIPAA & GDPR</div>
          <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">Min. group threshold (N≥5)</div>
        </div>
        <div className="mantra-card p-5">
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-extrabold uppercase">Board Deck Generator</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">1-Click PPTX</div>
          <div className="text-xs text-purple-600 dark:text-purple-400 font-bold mt-1">Widescreen 16:9 executive templates</div>
        </div>
      </div>

      {/* Report Library Cards */}
      <div className="space-y-4">
        <div className="flex items-center gap-1.5">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Featured Executive Reports ({activeSubTab})</h3>
          <InfoTooltip title={dashboardInfo.reportsLibrary.title} description={dashboardInfo.reportsLibrary.description} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportsList.map((rep) => (
            <div key={rep.id} className="mantra-card p-6 flex flex-col justify-between hover:border-blue-500 transition-all group">
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {rep.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">{rep.date}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-3 group-hover:text-blue-600 transition-colors">
                  {rep.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {rep.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Format: <strong>{rep.downloads}</strong></span> • <span>{rep.pages}</span>
                </div>
                <button
                  onClick={onOpenExport}
                  className="px-3.5 py-1.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <Icons.Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
