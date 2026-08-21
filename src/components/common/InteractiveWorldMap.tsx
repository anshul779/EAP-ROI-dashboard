import React, { useState } from 'react';
import * as Icons from 'lucide-react';

export type MapDataLayer =
  | 'ROI'
  | 'Active Employees'
  | 'Healthcare Savings'
  | 'Programme Utilisation'
  | 'Burnout Risk'
  | 'Clinical Outcomes'
  | 'Claims Cost'
  | 'Employee Satisfaction';

export interface WorldCountryData {
  id: string;
  name: string;
  code: string;
  flag: string;
  x: number; // Percentage coordinate on map canvas (0-100)
  y: number; // Percentage coordinate on map canvas (0-100)
  employees: number;
  roi: string;
  roiNumeric: number;
  savings: string;
  utilization: string;
  burnoutRisk: 'Low' | 'Moderate' | 'High' | 'Severe';
  clinicalImprovement: string;
  claimsCost: string;
  satisfaction: string;
  managerRating: string;
  statusColor: 'green' | 'blue' | 'amber' | 'red';
  topServices: string[];
}

export const WORLD_COUNTRIES: WorldCountryData[] = [
  {
    id: 'US',
    name: 'United States',
    code: 'USA',
    flag: '🇺🇸',
    x: 23,
    y: 35,
    employees: 8500,
    roi: '5.2×',
    roiNumeric: 5.2,
    savings: '$2,140,000',
    utilization: '84%',
    burnoutRisk: 'Low',
    clinicalImprovement: '86.4%',
    claimsCost: '$4.2M baseline',
    satisfaction: '4.94 / 5',
    managerRating: '94%',
    statusColor: 'green',
    topServices: ['Therapy & EAP', 'Executive Coaching', 'Diabetes Care'],
  },
  {
    id: 'CA',
    name: 'Canada',
    code: 'CAN',
    flag: '🇨🇦',
    x: 22,
    y: 22,
    employees: 1600,
    roi: '5.0×',
    roiNumeric: 5.0,
    savings: 'C$540,000',
    utilization: '81%',
    burnoutRisk: 'Low',
    clinicalImprovement: '84.0%',
    claimsCost: 'C$1.1M baseline',
    satisfaction: '4.90 / 5',
    managerRating: '93%',
    statusColor: 'green',
    topServices: ['Mindfulness', 'Physiotherapy', 'EAP Support'],
  },
  {
    id: 'UK',
    name: 'United Kingdom',
    code: 'GBR',
    flag: '🇬🇧',
    x: 47,
    y: 26,
    employees: 3400,
    roi: '4.9×',
    roiNumeric: 4.9,
    savings: '£840,000',
    utilization: '79%',
    burnoutRisk: 'Moderate',
    clinicalImprovement: '82.1%',
    claimsCost: '£1.4M baseline',
    satisfaction: '4.88 / 5',
    managerRating: '89%',
    statusColor: 'blue',
    topServices: ['Mental Health 1-on-1', 'Stress Interventions', 'Women Health'],
  },
  {
    id: 'DE',
    name: 'Germany',
    code: 'DEU',
    flag: '🇩🇪',
    x: 51,
    y: 28,
    employees: 2100,
    roi: '4.6×',
    roiNumeric: 4.6,
    savings: '€420,000',
    utilization: '75%',
    burnoutRisk: 'Low',
    clinicalImprovement: '79.5%',
    claimsCost: '€950k baseline',
    satisfaction: '4.82 / 5',
    managerRating: '91%',
    statusColor: 'blue',
    topServices: ['Workplace Ergonomics', 'Burnout Prevention', 'EAP'],
  },
  {
    id: 'IN',
    name: 'India',
    code: 'IND',
    flag: '🇮🇳',
    x: 70,
    y: 48,
    employees: 4800,
    roi: '5.8×',
    roiNumeric: 5.8,
    savings: '$1,280,000',
    utilization: '88%',
    burnoutRisk: 'Moderate',
    clinicalImprovement: '89.2%',
    claimsCost: '$820k baseline',
    satisfaction: '4.96 / 5',
    managerRating: '96%',
    statusColor: 'green',
    topServices: ['Full Wellness App', 'Psychiatry', 'Nutrition Coaching'],
  },
  {
    id: 'SG',
    name: 'Singapore',
    code: 'SGP',
    flag: '🇸🇬',
    x: 77,
    y: 56,
    employees: 900,
    roi: '4.4×',
    roiNumeric: 4.4,
    savings: '$190,000',
    utilization: '72%',
    burnoutRisk: 'Low',
    clinicalImprovement: '78.0%',
    claimsCost: '$410k baseline',
    satisfaction: '4.79 / 5',
    managerRating: '88%',
    statusColor: 'blue',
    topServices: ['Telehealth Consults', 'Sleep Hygiene', 'Manager Enablement'],
  },
  {
    id: 'JP',
    name: 'Japan',
    code: 'JPN',
    flag: '🇯🇵',
    x: 85,
    y: 38,
    employees: 800,
    roi: '4.1×',
    roiNumeric: 4.1,
    savings: '¥22.5M',
    utilization: '68%',
    burnoutRisk: 'High',
    clinicalImprovement: '74.2%',
    claimsCost: '¥48M baseline',
    satisfaction: '4.68 / 5',
    managerRating: '82%',
    statusColor: 'amber',
    topServices: ['Workplace Resilience', 'Anonymous Counselling', 'Hypertension'],
  },
  {
    id: 'AU',
    name: 'Australia',
    code: 'AUS',
    flag: '🇦🇺',
    x: 84,
    y: 72,
    employees: 1200,
    roi: '4.7×',
    roiNumeric: 4.7,
    savings: 'A$380,000',
    utilization: '76%',
    burnoutRisk: 'Low',
    clinicalImprovement: '81.4%',
    claimsCost: 'A$720k baseline',
    satisfaction: '4.85 / 5',
    managerRating: '90%',
    statusColor: 'blue',
    topServices: ['Outdoor Wellness', 'Digital Therapy', 'Financial Coaching'],
  },
  {
    id: 'BR',
    name: 'Brazil',
    code: 'BRA',
    flag: '🇧🇷',
    x: 32,
    y: 62,
    employees: 1100,
    roi: '4.5×',
    roiNumeric: 4.5,
    savings: 'R$490,000',
    utilization: '74%',
    burnoutRisk: 'Moderate',
    clinicalImprovement: '80.2%',
    claimsCost: 'R$1.2M baseline',
    satisfaction: '4.81 / 5',
    managerRating: '87%',
    statusColor: 'blue',
    topServices: ['Group Interventions', 'Mental Health App', 'EAP'],
  },
  {
    id: 'AE',
    name: 'United Arab Emirates',
    code: 'ARE',
    flag: '🇦🇪',
    x: 62,
    y: 42,
    employees: 450,
    roi: '3.9×',
    roiNumeric: 3.9,
    savings: 'AED 320,000',
    utilization: '64%',
    burnoutRisk: 'High',
    clinicalImprovement: '71.5%',
    claimsCost: 'AED 850k baseline',
    satisfaction: '4.62 / 5',
    managerRating: '81%',
    statusColor: 'red',
    topServices: ['Executive Health', 'Stress Management', 'Telemedicine'],
  },
];

interface Props {
  isDark?: boolean;
}

export const InteractiveWorldMap: React.FC<Props> = ({ isDark = false }) => {
  const [activeLayer, setActiveLayer] = useState<MapDataLayer>('ROI');
  const [selectedCountry, setSelectedCountry] = useState<WorldCountryData>(WORLD_COUNTRIES[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);

  const layers: MapDataLayer[] = [
    'ROI',
    'Active Employees',
    'Healthcare Savings',
    'Programme Utilisation',
    'Burnout Risk',
    'Clinical Outcomes',
    'Claims Cost',
    'Employee Satisfaction',
  ];

  // Helper to determine marker size based on headcount (<500 Small, 500-3000 Medium, 3000+ Large)
  const getMarkerSizeClass = (emp: number) => {
    if (emp >= 3000) return 'w-8 h-8 text-sm';
    if (emp >= 500) return 'w-6 h-6 text-xs';
    return 'w-5 h-5 text-[10px]';
  };

  // Helper to determine marker bg color based on status or layer
  const getMarkerBgColor = (country: WorldCountryData) => {
    if (activeLayer === 'Burnout Risk') {
      if (country.burnoutRisk === 'High' || country.burnoutRisk === 'Severe')
        return 'bg-[#EF4444] text-white ring-2 ring-red-400';
      if (country.burnoutRisk === 'Moderate')
        return 'bg-[#F59E0B] text-slate-950 ring-2 ring-amber-300';
      return 'bg-[#22C55E] text-white ring-2 ring-emerald-300';
    }

    if (country.statusColor === 'green') return 'bg-[#22C55E] text-white shadow-emerald-500/40';
    if (country.statusColor === 'blue') return 'bg-[#2196F3] text-white shadow-blue-500/40';
    if (country.statusColor === 'amber') return 'bg-[#F59E0B] text-slate-950 shadow-amber-500/40';
    return 'bg-[#EF4444] text-white shadow-rose-500/40';
  };

  // Dynamic layer metric value retriever
  const getLayerDisplayValue = (c: WorldCountryData) => {
    switch (activeLayer) {
      case 'ROI':
        return `ROI: ${c.roi}`;
      case 'Active Employees':
        return `${c.employees.toLocaleString()} employees`;
      case 'Healthcare Savings':
        return `Savings: ${c.savings}`;
      case 'Programme Utilisation':
        return `Utilisation: ${c.utilization}`;
      case 'Burnout Risk':
        return `Burnout: ${c.burnoutRisk}`;
      case 'Clinical Outcomes':
        return `Recovery: ${c.clinicalImprovement}`;
      case 'Claims Cost':
        return `Claims: ${c.claimsCost}`;
      case 'Employee Satisfaction':
        return `CSAT: ${c.satisfaction}`;
    }
  };

  return (
    <div className="mantra-card p-6 md:p-8 space-y-6 relative overflow-hidden bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 shadow-xl">
      {/* Header & Zoom Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="mantra-kicker">GLOBAL HEALTHCARE GEOGRAPHY</div>
          <h2 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white mt-1 tracking-tight">
            Global Enterprise ROI & Population Intelligence Map
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-[#C8D3E6] mt-1">
            Real-time interactive geographic analysis across 24 enterprise operating territories.
          </p>
        </div>

        {/* Zoom Controls Bar */}
        <div className="flex items-center space-x-2 shrink-0">
          <div className="flex items-center bg-slate-100 dark:bg-[#15365F] p-1.5 rounded-xl border border-slate-200 dark:border-white/15 text-xs">
            <button
              onClick={() => setZoomLevel(Math.min(1.45, zoomLevel + 0.15))}
              className="p-1.5 hover:bg-slate-200 dark:hover:bg-[#102A4C] rounded-lg text-slate-700 dark:text-white transition-colors"
              title="Zoom In"
            >
              <Icons.ZoomIn className="w-4 h-4" />
            </button>
            <span className="px-3 font-mono font-bold text-slate-700 dark:text-[#C8D3E6]">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(Math.max(0.85, zoomLevel - 0.15))}
              className="p-1.5 hover:bg-slate-200 dark:hover:bg-[#102A4C] rounded-lg text-slate-700 dark:text-white transition-colors"
              title="Zoom Out"
            >
              <Icons.ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1.0)}
              className="p-1.5 hover:bg-slate-200 dark:hover:bg-[#102A4C] rounded-lg text-slate-700 dark:text-white transition-colors border-l border-slate-300 dark:border-white/15 ml-1"
              title="Reset View"
            >
              <Icons.RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Layer Switching Chips Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-white/15 scrollbar-none">
        <span className="text-[10px] font-extrabold text-slate-400 dark:text-[#94A3B8] uppercase tracking-wider shrink-0 mr-1">
          Active Layer:
        </span>
        {layers.map((layer) => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
              activeLayer === layer
                ? 'bg-[#2196F3] text-white shadow-md'
                : 'bg-slate-100 dark:bg-[#15365F] text-slate-700 dark:text-[#C8D3E6] hover:bg-slate-200 dark:hover:bg-blue-900/60'
            }`}
          >
            {layer}
          </button>
        ))}
      </div>

      {/* Main Map & Insights Grid (70% Map / 30% Insights Panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-stretch">
        {/* World Map Vector Canvas (70% width on large screens) */}
        <div className="lg:col-span-7 relative min-h-[440px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-white/15 bg-[#EAF5FF] dark:bg-[#0F2748] transition-colors">
          <div
            className="w-full h-full relative transition-transform duration-300 origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* SVG Vector World Map with High Detail Continent Paths */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-cover select-none"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="worldOceanGridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(33, 150, 243, 0.1)'}
                    strokeWidth="0.75"
                  />
                </pattern>
              </defs>

              {/* Map Ocean Background Texture */}
              <rect width="1000" height="500" fill="url(#worldOceanGridPattern)" />

              {/* Continent Landmass Vectors with Precise Boundaries */}
              <g
                fill={isDark ? '#173D69' : '#CBE2FC'}
                stroke={isDark ? 'rgba(255,255,255,0.15)' : '#93C5FD'}
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                {/* North America */}
                <path d="M 80 50 L 140 40 L 220 35 L 290 55 L 305 90 L 295 140 L 265 185 L 220 235 L 180 250 L 165 210 L 130 180 L 95 130 L 75 85 Z M 205 245 L 230 260 L 225 295 L 195 265 Z M 270 45 L 310 40 L 300 65 Z" />
                {/* Greenland */}
                <path d="M 340 20 L 410 15 L 430 45 L 390 75 L 350 60 Z" />
                {/* South America */}
                <path d="M 230 300 L 295 305 L 355 365 L 340 435 L 285 480 L 245 425 L 225 355 Z" />
                {/* Europe */}
                <path d="M 445 65 L 535 45 L 580 95 L 530 155 L 465 145 L 435 105 Z M 450 105 L 468 115 L 450 135 Z M 480 50 L 510 35 L 500 65 Z" />
                {/* Africa */}
                <path d="M 435 170 L 555 155 L 605 225 L 575 340 L 520 380 L 465 345 L 425 255 Z M 590 320 L 610 310 L 600 350 Z" />
                {/* Asia & Middle East */}
                <path d="M 570 45 L 870 35 L 940 115 L 900 225 L 800 260 L 715 245 L 645 185 L 575 145 Z M 680 250 L 730 270 L 705 315 L 670 290 Z M 760 260 L 810 285 L 780 320 Z" />
                {/* Australia & New Zealand */}
                <path d="M 775 340 L 885 330 L 915 400 L 855 445 L 765 405 Z M 915 420 L 935 430 L 925 455 Z" />
                {/* Japan Islands */}
                <path d="M 870 120 L 890 135 L 875 180 L 855 160 Z" />
              </g>
            </svg>

            {/* Interactive Data-Driven Country Pins */}
            {WORLD_COUNTRIES.map((country) => {
              const isSelected = selectedCountry.id === country.id;
              const sizeClass = getMarkerSizeClass(country.employees);
              const bgClass = getMarkerBgColor(country);

              return (
                <div
                  key={country.id}
                  onClick={() => setSelectedCountry(country)}
                  style={{ left: `${country.x}%`, top: `${country.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                >
                  {/* Outer Pulsing Aura when selected or hovered */}
                  <div
                    className={`rounded-full flex items-center justify-center font-extrabold shadow-lg transition-all duration-300 ${sizeClass} ${bgClass} ${
                      isSelected
                        ? 'ring-4 ring-white dark:ring-[#3B82F6] scale-125 z-30 mantra-pulse'
                        : 'hover:scale-115 hover:ring-2 hover:ring-white'
                    }`}
                  >
                    <span className="select-none">{country.flag}</span>
                  </div>

                  {/* Dynamic Tooltip on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#0A2E5C] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-2xl pointer-events-none whitespace-nowrap z-40 border border-white/20">
                    <div className="flex items-center space-x-1.5">
                      <span>{country.name}:</span>
                      <span className="text-[#00B2FF] font-extrabold">
                        {getLayerDisplayValue(country)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Legend Bar */}
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 dark:bg-[#102A4C]/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 dark:border-white/15 text-[11px] flex flex-wrap items-center gap-3 shadow-lg z-30">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
              <span className="text-slate-700 dark:text-[#C8D3E6] font-bold">Excellent ROI (5.0x+)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#2196F3]" />
              <span className="text-slate-700 dark:text-[#C8D3E6] font-bold">Healthy (4.4x-4.9x)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <span className="text-slate-700 dark:text-[#C8D3E6] font-bold">Needs Attention</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="text-slate-700 dark:text-[#C8D3E6] font-bold">High Risk</span>
            </div>
          </div>
        </div>

        {/* Dynamic Regional Insights Panel (30% width on large screens) */}
        <div className="lg:col-span-3 mantra-card p-6 bg-slate-50 dark:bg-[#15365F] border border-slate-200 dark:border-white/15 flex flex-col justify-between shadow-lg">
          <div>
            {/* Header: Selected Country Info */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4 mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{selectedCountry.flag}</span>
                <div>
                  <h3 className="font-extrabold text-lg text-[#0A2E5C] dark:text-white leading-tight">
                    {selectedCountry.name}
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-[#C8D3E6] font-semibold mt-0.5">
                    ISO Territory: {selectedCountry.code}
                  </div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  selectedCountry.statusColor === 'green'
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300'
                    : selectedCountry.statusColor === 'blue'
                    ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-300'
                    : selectedCountry.statusColor === 'amber'
                    ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300'
                    : 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border border-rose-300'
                }`}
              >
                {selectedCountry.statusColor}
              </span>
            </div>

            {/* Key Metrics Breakdown Grid */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Financial ROI</span>
                <span className="font-extrabold text-base text-[#22C55E]">
                  {selectedCountry.roi}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Covered Employees</span>
                <span className="font-black text-slate-900 dark:text-white">
                  {selectedCountry.employees.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Healthcare Savings</span>
                <span className="font-extrabold text-[#2196F3] dark:text-[#60A5FA]">
                  {selectedCountry.savings}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Programme Utilisation</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {selectedCountry.utilization}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Clinical Recovery Rate</span>
                <span className="font-bold text-[#22C55E]">
                  {selectedCountry.clinicalImprovement}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Burnout Vulnerability</span>
                <span
                  className={`font-black ${
                    selectedCountry.burnoutRisk === 'High' || selectedCountry.burnoutRisk === 'Severe'
                      ? 'text-[#EF4444]'
                      : selectedCountry.burnoutRisk === 'Moderate'
                      ? 'text-[#F59E0B]'
                      : 'text-[#22C55E]'
                  }`}
                >
                  {selectedCountry.burnoutRisk}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#102A4C] border border-slate-100 dark:border-white/10">
                <span className="text-slate-600 dark:text-[#C8D3E6] font-semibold">Manager Rating</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {selectedCountry.managerRating}
                </span>
              </div>
            </div>

            {/* Top Utilised Services */}
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/15">
              <div className="text-[10px] font-black text-slate-400 dark:text-[#94A3B8] uppercase tracking-wider mb-2">
                Top Regional Healthcare Pathways
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCountry.topServices.map((srv) => (
                  <span
                    key={srv}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#EAF5FF] dark:bg-[#102A4C] text-[#2196F3] dark:text-[#60A5FA] border border-blue-200 dark:border-blue-800"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-5 py-3 mantra-btn-primary flex items-center justify-center space-x-2 text-xs"
          >
            <span>Generate Territory Deep-Dive PDF</span>
            <Icons.ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

