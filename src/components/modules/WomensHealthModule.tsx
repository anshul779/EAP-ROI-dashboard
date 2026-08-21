import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';


interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const WomensHealthModule: React.FC<Props> = ({ onDrillDown }) => {
  const womensKPIs: KPICardData[] = [
    {
      id: 'wh-maternity',
      title: 'Maternity Participation',
      kicker: 'PRENATAL & POSTNATAL',
      value: '680 Employees',
      change: 18.5,
      changeLabel: 'high retention',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [420, 480, 520, 580, 610, 650, 680],
      icon: 'Heart',
    },
    {
      id: 'wh-fertility',
      title: 'Fertility Support Usage',
      kicker: 'FAMILY PLANNING',
      value: '340 Employees',
      change: 24.2,
      changeLabel: 'consultations & guidance',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [180, 210, 240, 270, 295, 320, 340],
      icon: 'Sparkles',
    },
    {
      id: 'wh-menopause',
      title: 'Menopause Support',
      kicker: 'MID-CAREER WELLBEING',
      value: '490 Employees',
      change: 31.0,
      changeLabel: 'symptom management',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [210, 260, 310, 370, 410, 450, 490],
      icon: 'Shield',
    },
    {
      id: 'wh-consultations',
      title: 'Women Care Consults',
      kicker: 'SPECIALIST SESSIONS',
      value: '2,850',
      change: 22.0,
      changeLabel: 'OB/GYN & specialized care',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [1400, 1650, 1900, 2200, 2450, 2680, 2850],
      icon: 'Stethoscope',
    },
    {
      id: 'wh-return-to-work',
      title: 'Return-to-Work Success',
      kicker: 'POST-MATERNITY RETENTION',
      value: '94.0%',
      change: 8.5,
      changeLabel: 'vs 72% industry avg',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [82, 85, 87, 89, 91, 93, 94],
      icon: 'UserCheck',
    },
    {
      id: 'wh-csat',
      title: 'Women Care CSAT',
      kicker: 'PATIENT RATING',
      value: '4.95 / 5.0',
      change: 2.8,
      changeLabel: '99.1% satisfaction',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.75, 4.81, 4.86, 4.89, 4.91, 4.93, 4.95],
      icon: 'Star',
    },
    {
      id: 'wh-manager-support',
      title: 'Manager Support Score',
      kicker: 'LEADERSHIP EMPATHY',
      value: '89.0%',
      change: 12.0,
      changeLabel: 'trained managers',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [72, 75, 78, 81, 84, 87, 89],
      icon: 'Smile',
    },
    {
      id: 'wh-roi',
      title: 'Women Care ROI',
      kicker: 'TALENT RETENTION SAVINGS',
      value: '6.2×',
      change: 25.0,
      changeLabel: '$380,000 turnover saved',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.2, 4.6, 5.0, 5.4, 5.7, 6.0, 6.2],
      icon: 'TrendingUp',
    },
  ];

  const programBreakdown = [
    { program: 'Maternity & Postnatal Care', users: 680, retention: '94%', roi: '6.5x' },
    { program: 'Menopause & Hormonal Health', users: 490, retention: '91%', roi: '5.8x' },
    { program: 'Fertility & Family Planning', users: 340, retention: '96%', roi: '6.2x' },
    { program: 'Pelvic Health & Physiotherapy', users: 520, retention: '89%', roi: '5.1x' },
    { program: 'Women Mental Resilience', users: 820, retention: '92%', roi: '6.0x' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Executive Question & Insight Banner */}
      <div className="bg-[#0A2E5C] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-400/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 rounded-full bg-pink-500/10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-pink-500/20 text-pink-300 border border-pink-400/40 uppercase tracking-widest">
            <Icons.HelpCircle className="w-3.5 h-3.5" />
            <span>EXECUTIVE SOLUTION QUESTION</span>
          </div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight leading-snug text-white">
            "Is targeted care improving women's wellbeing, retention, and return-to-work success?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. MantraCare Women's & Specialized Care achieves a <strong>94% return-to-work success rate</strong> following maternity leave (vs 72% industry benchmark), preserving high-value female talent and generating a <strong>6.2x ROI</strong> in avoided attrition replacement costs.
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA WOMEN'S CARE METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Maternity, Fertility, Menopause & Specialized Care Performance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {womensKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>

      {/* 5-Question Executive Decision Framework */}
      <div className="mantra-card p-6 md:p-8 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-200 dark:border-white/15 pb-4">
          <div className="mantra-icon-badge w-10 h-10 bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300">
            <Icons.Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#0A2E5C] dark:text-white">
              5-Question Executive Decision Framework (Women's Care)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Measuring utilisation, health outcomes, return-to-work success, and talent retention.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is this service being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">2,850 Specialized Consultations</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              680 active maternity participants, 490 menopause support users, and 340 family planning participants accessing dedicated OB/GYN specialists.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">94% Return-to-Work Success</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              94% of mothers successfully transition back to work. CSAT is rated 4.95/5.0 with 89% manager support empathy ratings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">6.2× Return Multiple</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Saves an estimated $380,000 annually by preventing turnover of experienced female leaders and reducing high-risk pregnancy claims.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Mid-Career Engineering & Sales</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Mid-career women in Engineering indicate high menopause symptom disruption. Menopause support awareness campaigns recommended.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Extend Women's Specialized Care coverage to primary dependents</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Launch targeted Menopause & Hormonal Health awareness webinars</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Integrate return-to-work manager empathy toolkits</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Promote 1-on-1 virtual pelvic health & physiotherapy consultations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Breakdown Table */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker">PROGRAMME UTILISATION</div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                Women's Care Pathways Breakdown
              </h4>
              <InfoTooltip title={dashboardInfo.womenCare.title} description={dashboardInfo.womenCare.description} />
            </div>
          </div>
          <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] dark:bg-[#15365F] px-3 py-1 rounded-full">
            5 Active Pathways
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/15 text-slate-400 font-extrabold uppercase tracking-wider">
                <th className="py-3 px-3">Programme Pathway</th>
                <th className="py-3 px-3">Enrolled Users</th>
                <th className="py-3 px-3">Retention Rate</th>
                <th className="py-3 px-3 text-right">Pathway ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-medium">
              {programBreakdown.map((row) => (
                <tr key={row.program} className="hover:bg-slate-50 dark:hover:bg-[#15365F]/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.program}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-bold">{row.users.toLocaleString()}</td>
                  <td className="py-3 px-3 text-[#22C55E] font-extrabold">{row.retention}</td>
                  <td className="py-3 px-3 text-right font-black text-emerald-600 dark:text-emerald-400">{row.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
