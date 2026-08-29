import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import type { FilterState } from '../../types';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, filters }) => {
  const [format, setFormat] = useState<'pdf' | 'excel' | 'powerpoint'>('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [exportComplete, setExportComplete] = useState(false);

  const [selectedSections, setSelectedSections] = useState({
    execSummary: true,
    financialRoi: true,
    workforceHealth: true,
    clinicalOutcomes: true,
    claimsCosts: true,
    aiRecommendations: true,
  });

  if (!isOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportComplete(true);
      setTimeout(() => {
        setExportComplete(false);
        onClose();
      }, 1500);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#0A2E5C] text-slate-900 dark:text-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-blue-900/60 flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#0A2E5C] text-white flex items-center justify-between border-b border-blue-900">
          <div>
            <div className="mantra-kicker text-blue-300">BOARD & C-SUITE REPORTING</div>
            <h2 className="text-xl font-bold flex items-center space-x-2 mt-1">
              <Icons.FileSpreadsheet className="w-5 h-5 text-emerald-400" />
              <span>Export Executive ROI Report</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            title="Close export dialog"
            className="p-2 rounded-full hover:bg-blue-900/60 text-blue-200 hover:text-white transition-colors"
          >
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Format Selector */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-2">
              Select Output Format
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'pdf', label: 'Executive PDF', icon: 'FileText', desc: 'Board-ready document' },
                { id: 'excel', label: 'Excel Data', icon: 'FileSpreadsheet', desc: 'Raw financial model' },
                { id: 'powerpoint', label: 'PowerPoint Deck', icon: 'Presentation', desc: '16:9 Slide Deck' },
              ].map((fmt) => (
                <button
                  key={fmt.id}
                  type="button"
                  onClick={() => setFormat(fmt.id as any)}
                  title={`Export report format: ${fmt.label} (${fmt.desc})`}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    format === fmt.id
                      ? 'bg-blue-50 dark:bg-blue-900/60 border-blue-600 dark:border-blue-400 ring-2 ring-blue-500/30'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-blue-900/60 opacity-80'
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900 dark:text-white">
                    {fmt.label}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    {fmt.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section Selection */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider block mb-2">
              Include Modules in Report
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(selectedSections).map(([key, val]) => (
                <label
                  key={key}
                  title={`Include ${key.replace(/([A-Z])/g, ' $1')} section in output report`}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-blue-900/60 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={(e) =>
                      setSelectedSections({ ...selectedSections, [key]: e.target.checked })
                    }
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="capitalize font-semibold text-slate-800 dark:text-slate-200">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Filter Scope Preview */}
          <div
            title="Scope parameters applied to this exported document"
            className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/80 text-xs text-blue-900 dark:text-blue-200 flex items-center justify-between cursor-help"
          >
            <span>
              Scope: <strong>{filters.dateRange}</strong> | Org:{' '}
              <strong>{filters.organizationId}</strong>
            </span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              HIPAA Compliant
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-blue-900 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            title="Cancel export"
            className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-blue-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={isExporting || exportComplete}
            onClick={handleExport}
            title="Generate and download selected executive report"
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all flex items-center space-x-2 disabled:opacity-50"
          >
            {isExporting ? (
              <>
                <Icons.Loader2 className="w-4 h-4 animate-spin" />
                <span>Generating {format.toUpperCase()}...</span>
              </>
            ) : exportComplete ? (
              <>
                <Icons.CheckCircle2 className="w-4 h-4 text-white" />
                <span>Downloaded Successfully!</span>
              </>
            ) : (
              <>
                <Icons.Download className="w-4 h-4" />
                <span>Generate & Download</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
