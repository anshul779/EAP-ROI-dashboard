import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData } from '../../types';
import * as Icons from 'lucide-react';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';

interface Props {
  onDrillDown: (card: KPICardData) => void;
}

export const EAPSolutionModule: React.FC<Props> = ({ onDrillDown }) => {
  const eapKPIs: KPICardData[] = [
    {
      id: 'eap-eligible',
      title: 'Eligible Employees',
      kicker: 'TOTAL SEATS COVERED',
      value: '18,500',
      change: 8.5,
      changeLabel: '100% covered',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500],
      icon: 'Users',
    },
    {
      id: 'eap-reg-rate',
      title: 'Registration Rate',
      kicker: 'ONBOARDING ADOPTION',
      value: '78.4%',
      change: 14.2,
      changeLabel: 'vs 45% EAP avg',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [52, 58, 63, 69, 72, 75, 78.4],
      icon: 'UserCheck',
    },
    {
      id: 'eap-mau',
      title: 'Monthly Active Users',
      kicker: 'ACTIVE CARE USERS',
      value: '11,240',
      change: 16.8,
      changeLabel: '77.5% active',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [7200, 8100, 8900, 9600, 10200, 10800, 11240],
      icon: 'Activity',
    },
    {
      id: 'eap-sessions',
      title: 'Counselling Sessions',
      kicker: '1-ON-1 SESSIONS',
      value: '34,200',
      change: 22.4,
      changeLabel: 'annual session volume',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [22000, 24500, 27000, 29000, 31000, 32800, 34200],
      icon: 'HeartHandshake',
    },
    {
      id: 'eap-avg-sessions',
      title: 'Avg Sessions / Emp',
      kicker: 'CARE INTENSITY',
      value: '3.4',
      change: 4.1,
      changeLabel: 'optimal episode length',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4],
      icon: 'Clock',
    },
    {
      id: 'eap-time-to-first',
      title: 'Time to 1st Appt',
      kicker: 'CLINICAL SPEED',
      value: '18 hrs',
      change: -42.0,
      changeLabel: 'vs 14-day industry avg',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [48, 36, 30, 24, 22, 20, 18],
      icon: 'Zap',
    },
    {
      id: 'eap-crisis-cases',
      title: 'Crisis Interventions',
      kicker: 'CRITICAL INCIDENTS',
      value: '142',
      change: -12.5,
      changeLabel: '100% resolved safely',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [180, 172, 165, 158, 150, 145, 142],
      icon: 'AlertTriangle',
    },
    {
      id: 'eap-referrals',
      title: 'Self vs Mgr Referrals',
      kicker: 'INTAKE BREAKDOWN',
      value: '83.6%',
      change: 9.1,
      changeLabel: '9,400 self / 1,840 mgr',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [71, 73, 76, 78, 80, 82, 83.6],
      icon: 'GitPullRequest',
    },
    {
      id: 'eap-clinical-imp',
      title: 'Clinical Improvement',
      kicker: 'PHQ-9 / GAD-7 REDUCTION',
      value: '84.2%',
      change: 6.5,
      changeLabel: 'statistically significant',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [71, 74, 76, 79, 81, 83, 84.2],
      icon: 'TrendingUp',
    },
    {
      id: 'eap-csat',
      title: 'Employee CSAT',
      kicker: 'CARE RATING',
      value: '4.92 / 5.0',
      change: 3.2,
      changeLabel: '98.4% satisfaction',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [4.65, 4.72, 4.78, 4.82, 4.86, 4.89, 4.92],
      icon: 'Star',
    },
    {
      id: 'eap-cost-per-emp',
      title: 'Cost per Employee',
      kicker: 'ANNUAL PEPM COST',
      value: '$38.90',
      change: -5.2,
      changeLabel: 'all-inclusive fixed fee',
      trend: 'down',
      isGoodTrend: true,
      sparklineData: [42, 41.5, 41, 40.2, 39.8, 39.2, 38.9],
      icon: 'Wallet',
    },
    {
      id: 'eap-savings-roi',
      title: 'EAP Financial ROI',
      kicker: 'RETURN MULTIPLE',
      value: '4.8×',
      change: 18.2,
      changeLabel: '$3,456,000 net savings',
      trend: 'up',
      isGoodTrend: true,
      sparklineData: [3.2, 3.6, 3.9, 4.1, 4.4, 4.6, 4.8],
      icon: 'DollarSign',
    },
  ];

  const trendData = [
    { month: 'Jan', sessions: 2400, crisis: 18, recovery: 78 },
    { month: 'Feb', sessions: 2600, crisis: 15, recovery: 80 },
    { month: 'Mar', sessions: 2800, crisis: 14, recovery: 81 },
    { month: 'Apr', sessions: 2950, crisis: 12, recovery: 83 },
    { month: 'May', sessions: 3100, crisis: 11, recovery: 84 },
    { month: 'Jun', sessions: 3250, crisis: 10, recovery: 85 },
  ];

  const departmentEAPTable = [
    { dept: 'Engineering', eligible: 4200, registered: 3444, mau: 2750, sessions: 9350, crisis: 42, clinicalImp: '85.4%', roi: '5.2x' },
    { dept: 'Sales & BD', eligible: 3100, registered: 2728, mau: 2240, sessions: 7610, crisis: 38, clinicalImp: '82.1%', roi: '5.6x' },
    { dept: 'Customer Support', eligible: 2400, registered: 1896, mau: 1510, sessions: 5130, crisis: 29, clinicalImp: '79.8%', roi: '4.4x' },
    { dept: 'Operations & Logistics', eligible: 3800, registered: 2584, mau: 1980, sessions: 6730, crisis: 18, clinicalImp: '81.0%', roi: '3.9x' },
    { dept: 'Finance & Legal', eligible: 1600, registered: 1184, mau: 920, sessions: 3125, crisis: 8, clinicalImp: '86.2%', roi: '4.6x' },
    { dept: 'Product & Design', eligible: 2450, registered: 2082, mau: 1680, sessions: 5715, crisis: 7, clinicalImp: '88.5%', roi: '5.0x' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Executive Question & Insight Banner */}
      <div className="bg-[#0A2E5C] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-400/20 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 rounded-full bg-blue-500/10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-[#00B2FF]/20 text-[#00B2FF] border border-[#00B2FF]/40 uppercase tracking-widest">
            <Icons.HelpCircle className="w-3.5 h-3.5" />
            <span>EXECUTIVE SOLUTION QUESTION</span>
          </div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight leading-snug text-white">
            "Is our EAP reducing stress, improving mental health, and delivering measurable business value?"
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> Yes. MantraCare EAP reaches <strong>78.4% registration</strong> (vs 45% industry avg) with 11,240 monthly active users. Clinical outcomes show an <strong>84.2% recovery rate</strong> on PHQ-9/GAD-7 scales, yielding <strong>$3,456,000 in healthcare & productivity savings</strong> (4.8x ROI).
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">MANTRA EAP SOLUTION METRICS</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          Core EAP Utilisation, Intake & Clinical Performance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eapKPIs.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} onDrillDown={onDrillDown} />
          ))}
        </div>
      </div>

      {/* 5-Question Executive Decision Framework */}
      <div className="mantra-card p-6 md:p-8 bg-white dark:bg-[#102A4C] border border-slate-200 dark:border-white/15 space-y-6">
        <div className="flex items-center space-x-3 border-b border-slate-200 dark:border-white/15 pb-4">
          <div className="mantra-icon-badge w-10 h-10">
            <Icons.Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#0A2E5C] dark:text-white">
              5-Question Executive Decision Framework (EAP Solution)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Transforming raw platform usage into clear business intelligence for HR & Finance leaders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">1. How is EAP being used?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">High Digital Intake & 1-on-1 Sessions</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              34,200 total sessions completed. 83.6% are self-referrals via mobile app, with 1,840 manager referrals for high-stress roles.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#22C55E] uppercase">2. Is it improving health?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">84.2% Measurable Recovery</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Depression and anxiety scores drop by 71% and 74% within 6 sessions. CSAT is rated 4.92/5.0 across 34,000+ sessions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#2196F3] uppercase">3. Is it delivering ROI?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">4.8× Return Multiple</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Delivers $3,456,000 in validated medical claim reductions and avoided absenteeism against a fixed annual cost of $720,000.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
            <div className="text-xs font-black text-[#F59E0B] uppercase">4. Which populations need attention?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Customer Support & Operations</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Customer Support shows higher crisis incidents (29 cases). Operations adoption sits lower at 68%, needing targeted outreach.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Deploy Support Team 1-on-1 resilience coaching</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Promote mobile QR onboarding for Operations shifts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Expand manager EAP referral sensitization workshops</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>Fast-track 18-hr appointment intake to cover dependents</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Session Volume & Recovery Trend Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mantra-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="mantra-kicker">MONTHLY SESSION VOLUME</div>
                <h4 className="font-extrabold text-base text-[#0A2E5C] dark:text-white">
                  Counselling & Therapy Volume Trend
                </h4>
              </div>
              <span className="text-xs font-bold text-[#2196F3] bg-[#EAF5FF] dark:bg-[#15365F] px-2.5 py-1 rounded-full">
                +22.4% YoY
              </span>
            </div>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="eapSessGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2196F3" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#2196F3" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A2E5C',
                      borderColor: '#2196F3',
                      borderRadius: '12px',
                      color: '#FFF',
                      fontSize: '11px',
                    }}
                  />
                  <Area type="monotone" dataKey="sessions" stroke="#2196F3" strokeWidth={3} fill="url(#eapSessGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mantra-card p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="mantra-kicker">CLINICAL SCORE RECOVERY</div>
                <h4 className="font-extrabold text-base text-[#0A2E5C] dark:text-white">
                  Monthly Recovery Rate (%)
                </h4>
              </div>
              <span className="text-xs font-bold text-[#22C55E] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-full">
                84.2% Avg Recovery
              </span>
            </div>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trendData}>
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8' }} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0A2E5C',
                      borderColor: '#22C55E',
                      borderRadius: '12px',
                      color: '#FFF',
                      fontSize: '11px',
                    }}
                  />
                  <Bar dataKey="recovery" fill="#22C55E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Department Breakdown Table */}
      <div className="mantra-card p-6 md:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/15 pb-4">
          <div>
            <div className="mantra-kicker">DEPARTMENT BREAKDOWN</div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                EAP Adoption, Sessions & ROI by Department
              </h4>
              <InfoTooltip title={dashboardInfo.eapDepartmentBreakdown.title} description={dashboardInfo.eapDepartmentBreakdown.description} />
            </div>
          </div>
          <button className="mantra-btn-secondary px-3 py-1.5 text-xs flex items-center space-x-1 self-start sm:self-auto">
            <Icons.Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/15 text-slate-400 font-extrabold uppercase tracking-wider">
                <th className="py-3 px-3">Department</th>
                <th className="py-3 px-3">Eligible</th>
                <th className="py-3 px-3">Registered</th>
                <th className="py-3 px-3">MAU</th>
                <th className="py-3 px-3">Total Sessions</th>
                <th className="py-3 px-3">Crisis Cases</th>
                <th className="py-3 px-3">Clinical Recovery</th>
                <th className="py-3 px-3 text-right">EAP ROI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/10 font-medium">
              {departmentEAPTable.map((row) => (
                <tr key={row.dept} className="hover:bg-slate-50 dark:hover:bg-[#15365F]/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{row.dept}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300">{row.eligible.toLocaleString()}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-300">{row.registered.toLocaleString()}</td>
                  <td className="py-3 px-3 font-semibold text-[#2196F3]">{row.mau.toLocaleString()}</td>
                  <td className="py-3 px-3 text-slate-900 dark:text-white font-bold">{row.sessions.toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded font-extrabold ${row.crisis > 25 ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
                      {row.crisis} cases
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-[#22C55E]">{row.clinicalImp}</td>
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
