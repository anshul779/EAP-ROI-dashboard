import React from 'react';
import { KPICard } from '../common/KPICard';
import type { KPICardData, ProgramId, FilterState } from '../../types';
import { ORGANIZATIONS } from '../../data/mockData';
import * as Icons from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { InfoTooltip } from '../common/InfoTooltip';
import { dashboardInfo } from '../../data/dashboardInfo';

interface Props {
  onDrillDown: (card: KPICardData) => void;
  selectedProgram: ProgramId;
  filters: FilterState;
}

export const EmployeeEngagementModule: React.FC<Props> = ({ onDrillDown, selectedProgram, filters }) => {
  const currentOrg = ORGANIZATIONS.find((o) => o.id === filters.organizationId) || ORGANIZATIONS[0];

  // Mappers for program-specific experience/engagement metrics
  const getExperienceData = (pId: ProgramId): {
    question: string;
    answer: string;
    kicker: string;
    title: string;
    kpiLabel: string;
    kpis: KPICardData[];
    funnel: { step: string; count: number; pct: string }[];
    donut: { name: string; value: number; color: string }[];
    framework: { title: string; desc: string }[];
    actions: string[];
  } => {
    switch (pId) {
      case 'eap':
      case 'all-programs':
      default:
        return {
          question: '"Are employees engaging with self-guided care before problems become more serious?"',
          answer: 'Yes. Over 16,200 self-care programmes have been started with a 74% completion rate. 3,240 employees maintain active 7+ day wellness streaks, achieving early preventive intervention.',
          kicker: 'MANTRA SELF-CARE PLATFORM METRICS',
          title: 'Programme Starts, Content Engagement, Mood Tracking & Streaks',
          kpiLabel: 'Self-Care Platform',
          kpis: [
            { id: 'sc-starts', title: 'Programme Starts', kicker: 'SELF-CARE ADOPTION', value: '16,200', change: 21.4, changeLabel: 'digital modules started', trend: 'up', isGoodTrend: true, sparklineData: [9800, 11000, 12400, 13800, 14900, 15600, 16200], icon: 'BookOpenCheck' },
            { id: 'sc-completions', title: 'Programme Completion', kicker: 'CURRICULUM FINISH', value: '74.0%', change: 8.5, changeLabel: '11,988 completed', trend: 'up', isGoodTrend: true, sparklineData: [62, 65, 68, 70, 72, 73, 74], icon: 'CheckCircle2' },
            { id: 'sc-content', title: 'Content Viewed', kicker: 'LEARNING RESOURCES', value: '89,400', change: 32.0, changeLabel: 'articles & video views', trend: 'up', isGoodTrend: true, sparklineData: [52000, 61000, 70000, 78000, 82000, 86000, 89400], icon: 'Eye' },
            { id: 'sc-assessments', title: 'Assessments Done', kicker: 'SELF-SCREENING', value: '14,200', change: 16.2, changeLabel: 'self-assessments', trend: 'up', isGoodTrend: true, sparklineData: [9100, 10200, 11400, 12300, 13100, 13800, 14200], icon: 'ClipboardCheck' },
            { id: 'sc-mood', title: 'Mood Loggers', kicker: 'EMOTIONAL HABITS', value: '62.0%', change: 14.0, changeLabel: 'active mood loggers', trend: 'up', isGoodTrend: true, sparklineData: [45, 48, 52, 55, 58, 60, 62], icon: 'Smile' },
            { id: 'sc-dau', title: 'DAU / WAU Ratio', kicker: 'PLATFORM STICKINESS', value: '51.6%', change: 6.8, changeLabel: '4,850 DAU / 9,400 WAU', trend: 'up', isGoodTrend: true, sparklineData: [42, 44, 46, 48, 49, 50, 51.6], icon: 'Activity' },
            { id: 'sc-retention', title: '90-Day Retention', kicker: 'LONG-TERM ENGAGEMENT', value: '81.0%', change: 7.2, changeLabel: 'active after 90 days', trend: 'up', isGoodTrend: true, sparklineData: [71, 73, 75, 77, 79, 80, 81], icon: 'UserCheck' },
            { id: 'sc-streaks', title: 'Active Streaks', kicker: '7+ DAY STREAKS', value: '3,240 Users', change: 28.0, changeLabel: 'habit builders', trend: 'up', isGoodTrend: true, sparklineData: [1800, 2100, 2400, 2700, 2950, 3100, 3240], icon: 'Zap' }
          ],
          funnel: [
            { step: 'Eligible Workforce', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Account Activation', count: Math.round(currentOrg.totalEmployees * 0.72), pct: '72%' },
            { step: 'HRA Completed', count: 12820, pct: '69.3%' },
            { step: 'Daily Self-Care Logger', count: 4850, pct: '37.8%' },
            { step: 'Active Counselling Case', count: 2450, pct: '19.1%' }
          ],
          donut: [
            { name: 'Self-Care Modules', value: 45, color: '#3B82F6' },
            { name: '1-on-1 Counselling', value: 25, color: '#10B981' },
            { name: 'Biometric Tracking', value: 18, color: '#F59E0B' },
            { name: 'Wellness Webinars', value: 12, color: '#8B5CF6' }
          ],
          framework: [
            { title: '16,200 Module Starts & 89.4k Views', desc: '16,200 self-guided module starts, 89,400 educational resource views, and 14,200 self-assessment screenings completed.' },
            { title: '3,240 Daily Habit Streaks', desc: '74% course completion rate and 3,240 active 7+ day daily habit streaks in stress reduction, mindfulness, and sleep protocols.' },
            { title: 'Proactive Early Intervention', desc: 'Prevents mild stress symptoms from escalating into costly clinical depression or high-risk medical claims.' },
            { title: 'Sales & Customer Support', desc: 'Sales teams indicate high initial module starts but lower completion rates (58%), needing shorter micro-learning formats.' }
          ],
          actions: [
            'Introduce 3-minute audio micro-lessons for busy sales teams',
            'Launch company-wide 14-day Mood Tracker challenge',
            'Reward 30-day streak builders with company wellness perks',
            'Automate personalized content recommendations based on HRA scores'
          ]
        };

      case 'virtual-care':
        return {
          question: '"Are employees adopting telemedicine pathways to resolve acute clinical needs?"',
          answer: 'Yes. 11,840 consultations were booked with an 88.5% primary care resolution rate, avoiding expensive emergency room visits and physical clinic wait times.',
          kicker: 'MANTRA TELEHEALTH PORTAL METRICS',
          title: 'Consultations, Referral Rates, Care Coordination & App Ratings',
          kpiLabel: 'Virtual Care Portal',
          kpis: [
            { id: 'vc-consults', title: 'Consultations Booked', kicker: 'CLINICAL INTAKES', value: '11,840', change: 24.8, changeLabel: 'gp & specialist video calls', trend: 'up', isGoodTrend: true, sparklineData: [6200, 7100, 8000, 9200, 10200, 11000, 11840], icon: 'Video' },
            { id: 'vc-resolution', title: 'Primary Care Resolution', kicker: 'FIRST CONTACT CARE', value: '88.5%', change: 4.2, changeLabel: 'resolved without referral', trend: 'up', isGoodTrend: true, sparklineData: [84, 85, 86, 87, 87.5, 88, 88.5], icon: 'Activity' },
            { id: 'vc-referrals', title: 'Specialist Referrals', kicker: 'ADVANCED CARE TRIAGE', value: '1,450', change: -8.5, changeLabel: 'referred to physical clinics', trend: 'down', isGoodTrend: true, sparklineData: [1800, 1750, 1680, 1600, 1550, 1500, 1450], icon: 'FileSymlink' },
            { id: 'vc-coord', title: 'Care Coordination Rate', kicker: 'TRANSITION OF CARE', value: '92.0%', change: 11.5, changeLabel: 'active follow-ups', trend: 'up', isGoodTrend: true, sparklineData: [78, 81, 84, 86, 88, 90, 92], icon: 'CheckCircle2' },
            { id: 'vc-reviews', title: 'App Reviews', kicker: 'PATIENT FEEDBACK', value: '4.8 / 5.0', change: 3.6, changeLabel: '94% satisfaction rate', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.65, 4.7, 4.72, 4.75, 4.78, 4.8], icon: 'Star' },
            { id: 'vc-prescriptions', title: 'Prescriptions Filled', kicker: 'DIGITAL PHARMACY', value: '8,240', change: 18.5, changeLabel: 'home delivery orders', trend: 'up', isGoodTrend: true, sparklineData: [4500, 5200, 6000, 6800, 7200, 7800, 8240], icon: 'Pills' },
            { id: 'vc-users', title: 'Registered Users', kicker: 'PORTAL REACH', value: '14,250', change: 16.8, changeLabel: 'registered enrollees', trend: 'up', isGoodTrend: true, sparklineData: [9000, 10000, 11200, 12000, 13100, 13800, 14250], icon: 'Users' },
            { id: 'vc-retention', title: 'Repeat Utilisation', kicker: 'PATIENT RETENTION', value: '64.0%', change: 5.2, changeLabel: 'return care users', trend: 'up', isGoodTrend: true, sparklineData: [58, 59, 60, 61, 62, 63, 64], icon: 'RefreshCw' }
          ],
          funnel: [
            { step: 'Eligible Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Portal Activations', count: 14250, pct: '77.0%' },
            { step: 'Symptom Triage Logged', count: 12100, pct: '65.4%' },
            { step: 'Consultation Completed', count: 11840, pct: '64.0%' },
            { step: 'Prescription/Referral Issued', count: 9690, pct: '52.4%' }
          ],
          donut: [
            { name: 'GP Video Consultation', value: 50, color: '#3B82F6' },
            { name: 'Specialist Triage', value: 25, color: '#10B981' },
            { name: 'Mental Health Coaching', value: 15, color: '#F59E0B' },
            { name: 'Prescription Refills', value: 10, color: '#8B5CF6' }
          ],
          framework: [
            { title: '11,840 Teleconsultations Logged', desc: 'GP video calls, mental health chats, and specialist escalations fully coordinated within the app.' },
            { title: '88.5% Primary Care Resolution', desc: 'Resolved acute queries within the first virtual session, eliminating physical doctor office overhead.' },
            { title: '$1.4M Claims Costs Avoided', desc: 'Triage redirects minor acute cases away from ER and expensive local outpatient clinics.' },
            { title: 'Field Workers & Logistics', desc: 'Mobile-first staff benefit most due to shift constraints, seeing a 22% usage increase.' }
          ],
          actions: [
            'Set up Telehealth Virtual Cabin/Kiosk inside main production warehouses',
            'Roll out chronic symptom push-notifications for remote logistics operators',
            'Incentivize digital prescription renewals with zero-dollar shipping copay',
            'Distribute QR codes during onboarding to accelerate portal download rates'
          ]
        };

      case 'health-checks':
        return {
          question: '"Are we screening employees early to intercept chronic conditions and health risks?"',
          answer: 'Yes. 6,480 health checks completed. Biometric screenings identified elevated metrics in 1,220 staff, transferring 84% directly to wellness pathways.',
          kicker: 'MANTRA SCREENING & DIAGNOSTIC METRICS',
          title: 'Biometric Screenings, Results Access, Referrals & Follow-ups',
          kpiLabel: 'Screening Portal',
          kpis: [
            { id: 'hc-scheduled', title: 'Screenings Scheduled', kicker: 'HEALTH CHECKS BOOKED', value: '6,800', change: 14.8, changeLabel: 'scheduled onsite or clinic', trend: 'up', isGoodTrend: true, sparklineData: [4200, 4800, 5200, 5600, 6000, 6400, 6800], icon: 'Calendar' },
            { id: 'hc-completed', title: 'Screenings Completed', kicker: 'DIAGNOSTICS DONE', value: '6,480', change: 19.5, changeLabel: '91.7% screening completion', trend: 'up', isGoodTrend: true, sparklineData: [3800, 4300, 4800, 5300, 5800, 6200, 6480], icon: 'Stethoscope' },
            { id: 'hc-results', title: 'Results Accessed', kicker: 'BIOMETRIC EXPOSURE', value: '6,240', change: 22.0, changeLabel: 'accessed online report', trend: 'up', isGoodTrend: true, sparklineData: [3200, 3800, 4200, 4800, 5300, 5800, 6240], icon: 'Unlock' },
            { id: 'hc-referrals', title: 'Care Referrals', kicker: 'CLINICAL TRIAGE', value: '840', change: 16.2, changeLabel: 'referred to health coaches', trend: 'up', isGoodTrend: true, sparklineData: [400, 510, 600, 680, 740, 800, 840], icon: 'UserPlus' },
            { id: 'hc-rating', title: 'Screening Feedback', kicker: 'PATIENT EXPERIENCE', value: '4.7 / 5.0', change: 2.4, changeLabel: 'clean clinic operations', trend: 'up', isGoodTrend: true, sparklineData: [4.5, 4.55, 4.6, 4.62, 4.65, 4.68, 4.7], icon: 'Smile' },
            { id: 'hc-detection', title: 'Risks Intercepted', kicker: 'EARLY WARNINGS', value: '1,220 Cases', change: 12.5, changeLabel: 'hypertension & lipid risks', trend: 'up', isGoodTrend: false, sparklineData: [600, 720, 840, 950, 1050, 1140, 1220], icon: 'AlertTriangle' },
            { id: 'hc-eligible', title: 'Eligible Headcount', kicker: 'TOTAL SEATS', value: '18,500', change: 8.5, changeLabel: 'preventive contract active', trend: 'up', isGoodTrend: true, sparklineData: [16000, 16500, 17000, 17500, 17800, 18200, 18500], icon: 'Users' },
            { id: 'hc-followup', title: 'Follow-up Success', kicker: 'CLINICAL CONTINUITY', value: '78.4%', change: 9.8, changeLabel: 'within 30 days of screen', trend: 'up', isGoodTrend: true, sparklineData: [68, 71, 73, 75, 76, 77, 78.4], icon: 'CheckCircle' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Checkup Bookings', count: 6800, pct: '36.8%' },
            { step: 'Biometrics Screened', count: 6480, pct: '35.0%' },
            { step: 'Results Delivered', count: 6240, pct: '33.7%' },
            { step: 'Active Follow-ups', count: 5080, pct: '27.5%' }
          ],
          donut: [
            { name: 'Normal / Healthy', value: 70, color: '#10B981' },
            { name: 'Borderline Risk', value: 20, color: '#F59E0B' },
            { name: 'High Risk Alert', value: 10, color: '#EF4444' }
          ],
          framework: [
            { title: '6,480 Completed Screenings', desc: 'Onsite corporate wellness camps and clinic vouchers utilized across seven regional offices.' },
            { title: '1,220 Early Risks Intercepted', desc: 'Identified chronic indicators (pre-hypertension, elevated HbA1c) prior to severe event triggers.' },
            { title: 'Significant Claims Avoided', desc: 'Early clinical interception prevents future stroke, cardiac, and chronic complications, yielding $840k in cost avoidance.' },
            { title: 'Logistics Operations Hubs', desc: 'Operations depots show elevated cholesterol risk profiles due to cafeteria and diet challenges.' }
          ],
          actions: [
            'Launch mandatory biometric screening makeups for night-shift employees',
            'Establish onsite cardiac-risk health clinics at main operational centers',
            'Deploy targeted high-cholesterol wellness challenge to logistics staff',
            'Automate HRA screening reminders via internal Slack and email systems'
          ]
        };

      case 'nutrition-fitness':
        return {
          question: '"Are employees logging meals, workouts, and consulting lifestyle coaches?"',
          answer: 'Yes. 4,120 active nutrition plans and meal logs. Average workout frequency is 4.6 logs per week, reducing baseline BMI index averages by 14.5%.',
          kicker: 'MANTRA NUTRITION & FITNESS PORTAL',
          title: 'Habit Logging, Coach Check-ins, Workouts & BMI Improvements',
          kpiLabel: 'Nutrition & Fitness Portal',
          kpis: [
            { id: 'nf-logging', title: 'Habit Logging Freq', kicker: 'WEEKLY ENGAGEMENT', value: '4.6 / wk', change: 18.2, changeLabel: 'logs per user avg', trend: 'up', isGoodTrend: true, sparklineData: [3.1, 3.4, 3.8, 4.0, 4.2, 4.4, 4.6], icon: 'CalendarDays' },
            { id: 'nf-meals', title: 'Meal Logs Count', kicker: 'CALORIE DIARIES', value: '24,800', change: 32.0, changeLabel: 'registered meal items', trend: 'up', isGoodTrend: true, sparklineData: [12000, 15000, 18000, 20000, 22000, 23500, 24800], icon: 'Apple' },
            { id: 'nf-workouts', title: 'Workouts Completed', kicker: 'EXERCISE LOGS', value: '12,200', change: 28.0, changeLabel: 'video & gym routines', trend: 'up', isGoodTrend: true, sparklineData: [6200, 7500, 8900, 9800, 10500, 11400, 12200], icon: 'Dumbbell' },
            { id: 'nf-coaches', title: 'Coach Check-ins', kicker: 'LIFESTYLE COUNSELLING', value: '1,850 sessions', change: 16.2, changeLabel: 'chat with dieticians', trend: 'up', isGoodTrend: true, sparklineData: [900, 1100, 1300, 1450, 1600, 1750, 1850], icon: 'MessageCircle' },
            { id: 'nf-bmi', title: 'BMI Improvements', kicker: 'METABOLIC CHANGE', value: '-14.5%', change: 9.5, changeLabel: 'workforce weight loss', trend: 'down', isGoodTrend: true, sparklineData: [4, 6, 8, 10, 12, 13, 14.5], icon: 'TrendingDown' },
            { id: 'nf-community', title: 'Community Posts', kicker: 'SOCIAL WELLNESS', value: '840 shares', change: 11.5, changeLabel: 'team motivation board', trend: 'up', isGoodTrend: true, sparklineData: [450, 520, 600, 680, 740, 800, 840], icon: 'Share2' },
            { id: 'nf-active', title: 'Active Participants', kicker: 'FITNESS PORTAL MAU', value: '4,120', change: 22.0, changeLabel: 'active enrollees', trend: 'up', isGoodTrend: true, sparklineData: [2400, 2800, 3100, 3400, 3700, 3950, 4120], icon: 'Users' },
            { id: 'nf-csat', title: 'Diet Satisfaction', kicker: 'LIFESTYLE SATISFACTION', value: '91.2%', change: 2.4, changeLabel: 'positive diet reviews', trend: 'up', isGoodTrend: true, sparklineData: [88, 89, 89.5, 90, 90.5, 91, 91.2], icon: 'Heart' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Fitness Registrants', count: 5200, pct: '28.1%' },
            { step: 'Workout Completed', count: 4120, pct: '22.3%' },
            { step: 'Weekly Active Loggers', count: 3200, pct: '17.3%' },
            { step: 'Coach Goal Reached', count: 1850, pct: '10.0%' }
          ],
          donut: [
            { name: 'Cardio / Running', value: 40, color: '#3B82F6' },
            { name: 'Strength Training', value: 30, color: '#10B981' },
            { name: 'Yoga & Stretch', value: 20, color: '#F59E0B' },
            { name: 'Custom Lifestyle', value: 10, color: '#8B5CF6' }
          ],
          framework: [
            { title: '4.6 Logs per User Weekly', desc: 'High habitual logging frequency across caloric, physical, and hydration modules in the app.' },
            { title: 'Significant Weight Reduction', desc: 'Average BMI decrease of 14.5% in high-risk categories, recovering active workforce capacity.' },
            { title: 'Productivity Value Recovered', desc: 'Active physical health improvements cut afternoon fatigue, leading to a calculated $620k return.' },
            { title: 'Office & Desk Workers', desc: 'Development and Administration departments show highly sedentary profiles but excel in hydration challenges.' }
          ],
          actions: [
            'Revamp company cafeteria options with subsidized healthy macro-bowls',
            'Distribute pedometer wearables to sedentary desk-bound departments',
            'Host weekly live-streamed deskside stretching webinars for remote offices',
            'Incentivize fitness coach chats with localized gym membership discount perks'
          ]
        };

      case 'challenges':
        return {
          question: '"Are team challenges fostering peer-to-peer motivation and daily movement?"',
          answer: 'Yes. 8,450 employees participated in step and health campaigns. 12,240 milestones were reached with a 78% challenge completion rate.',
          kicker: 'MANTRA WORKPLACE CAMPAIGNS',
          title: 'Enrollments, Milestones, Team Chat Activity & Active Streaks',
          kpiLabel: 'Campaign Portal',
          kpis: [
            { id: 'ch-enroll', title: 'Challenge Enrollments', kicker: 'CAMPAIGN PARTICIPANTS', value: '8,450', change: 22.0, changeLabel: 'active participants', trend: 'up', isGoodTrend: true, sparklineData: [4500, 5200, 6100, 6800, 7400, 7900, 8450], icon: 'Trophy' },
            { id: 'ch-milestones', title: 'Milestones Reached', kicker: 'STEP & DISTANCE GOALS', value: '12,240', change: 16.5, changeLabel: 'individual goals hit', trend: 'up', isGoodTrend: true, sparklineData: [8200, 9100, 10000, 10800, 11500, 12200, 12240], icon: 'Flag' },
            { id: 'ch-chat', title: 'Team Chat Messages', kicker: 'SOCIAL CONVERSATION', value: '4,120', change: 32.0, changeLabel: 'peer support threads', trend: 'up', isGoodTrend: true, sparklineData: [2400, 2800, 3100, 3400, 3700, 3950, 4120], icon: 'MessageSquare' },
            { id: 'ch-streak', title: 'Avg Active Streak', kicker: 'HABIT RETENTION', value: '14.2 days', change: 9.8, changeLabel: 'continuous daily logs', trend: 'up', isGoodTrend: true, sparklineData: [9.1, 10.2, 11.4, 12.3, 13.1, 13.8, 14.2], icon: 'Zap' },
            { id: 'ch-reactions', title: 'Reactions Sent', kicker: 'PEER SUPPORT', value: '18,400', change: 28.0, changeLabel: 'high-fives & emojis', trend: 'up', isGoodTrend: true, sparklineData: [9800, 11000, 12400, 13800, 14900, 16200, 18400], icon: 'ThumbsUp' },
            { id: 'ch-completion', title: 'Completion Rate', kicker: 'CAMPAIGN PERSISTENCE', value: '78.0%', change: 8.5, changeLabel: '78% of starters finished', trend: 'up', isGoodTrend: true, sparklineData: [68, 70, 72, 74, 75, 77, 78], icon: 'Award' },
            { id: 'ch-photos', title: 'Photos Shared', kicker: 'ACTIVITY PROOF', value: '840 photos', change: 11.5, changeLabel: 'activity photo uploads', trend: 'up', isGoodTrend: true, sparklineData: [450, 520, 600, 680, 740, 800, 840], icon: 'Camera' },
            { id: 'ch-csat', title: 'Challenge CSAT', kicker: 'USER RATINGS', value: '95.5%', change: 2.4, changeLabel: 'excellent program reviews', trend: 'up', isGoodTrend: true, sparklineData: [92, 93, 93.5, 94, 94.5, 95, 95.5], icon: 'Heart' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Campaign Registrations', count: 8450, pct: '45.7%' },
            { step: 'Milestone Completed', count: 7240, pct: '39.1%' },
            { step: 'Social Activity Post', count: 4850, pct: '26.2%' },
            { step: 'Campaign Finisher', count: 3240, pct: '17.5%' }
          ],
          donut: [
            { name: '10k Daily Step Challenge', value: 45, color: '#3B82F6' },
            { name: 'Hydration Intake Campaign', value: 25, color: '#10B981' },
            { name: 'Postural Ergonomics', value: 18, color: '#F59E0B' },
            { name: 'Restorative Sleep Tracking', value: 12, color: '#8B5CF6' }
          ],
          framework: [
            { title: '8,450 Step Challenge Loggers', desc: 'Over 8,400 active employees logging step milestones and participating in regional team divisions.' },
            { title: 'Increased Daily Activity Levels', desc: 'Average daily step count of participants rose from 5,200 to 8,900, significantly boosting cardiovascular fitness.' },
            { title: 'Reduced Sick Leave Avoidance', desc: 'Active team competitions drop general absenteeism, delivering an estimated $220k in value.' },
            { title: 'Administration & Finance Teams', desc: 'Administrative staff saw the highest step increases (+42%) through desktop walk-meeting reminders.' }
          ],
          actions: [
            'Establish team-based division cups with executive leadership prizes',
            'Send walking-meeting checklist guidelines to department managers',
            'Host weekly mini step-challenge run-ups to incentivize night shifts',
            'Automate group chat push channels inside Microsoft Teams or Slack'
          ]
        };

      case 'wellness-camp':
        return {
          question: '"Is the Virtual Wellness Camp driving immediate engagement and resolving employee concerns?"',
          answer: 'Yes. 5,820 camp log-ins registered, yielding a 92% employee satisfaction rate. 4,120 webinar attendees directly addressed physical and mental wellness queries.',
          kicker: 'MANTRA VIRTUAL WELLNESS CAMP METRICS',
          title: 'Log-ins, Attendance, Live Chat Interactions & Survey Ratings',
          kpiLabel: 'Camp Portal',
          kpis: [
            { id: 'wc-logins', title: 'Camp Log-ins', kicker: 'PLATFORM ACCESS', value: '5,820', change: 28.0, changeLabel: 'camp platform sessions', trend: 'up', isGoodTrend: true, sparklineData: [3200, 3800, 4200, 4800, 5200, 5500, 5820], icon: 'LogIn' },
            { id: 'wc-attendance', title: 'Webinar Attendance', kicker: 'HEALTH EDUCATION', value: '4,120', change: 16.5, changeLabel: 'live webinar attendees', trend: 'up', isGoodTrend: true, sparklineData: [2400, 2800, 3100, 3400, 3700, 3950, 4120], icon: 'Users' },
            { id: 'wc-polls', title: 'Live Poll Answers', kicker: 'AUDIENCE INTERACTION', value: '18,400', change: 32.0, changeLabel: 'poll answers logged', trend: 'up', isGoodTrend: true, sparklineData: [9800, 11000, 12400, 13800, 14900, 16200, 18400], icon: 'BarChart2' },
            { id: 'wc-downloads', title: 'Downloads', kicker: 'RESOURCE COLLECTIONS', value: '8,240 docs', change: 18.2, changeLabel: 'wellness materials saved', trend: 'up', isGoodTrend: true, sparklineData: [4500, 5200, 6000, 6800, 7200, 7800, 8240], icon: 'Download' },
            { id: 'wc-surveys', title: 'Survey Responses', kicker: 'PARTICIPATION SURVEYS', value: '3,240', change: 14.0, changeLabel: 'completed feedback surveys', trend: 'up', isGoodTrend: true, sparklineData: [1800, 2100, 2400, 2700, 2950, 3100, 3240], icon: 'ClipboardList' },
            { id: 'wc-satisfaction', title: 'Camp Satisfaction', kicker: 'FEEDBACK RATING', value: '92.0%', change: 2.4, changeLabel: 'highly satisfied surveys', trend: 'up', isGoodTrend: true, sparklineData: [88, 89, 89.5, 90, 90.5, 91, 92], icon: 'Heart' },
            { id: 'wc-engaged', title: 'Engaged Participants', kicker: 'ACTIVE AUDIENCE', value: '4,850', change: 22.0, changeLabel: 'live camp interactors', trend: 'up', isGoodTrend: true, sparklineData: [2400, 2900, 3300, 3800, 4200, 4600, 4850], icon: 'Smile' },
            { id: 'wc-completion', title: 'Camp Completion', kicker: 'CURRICULUM FINISHED', value: '85.0%', change: 8.5, changeLabel: 'finished all live webinars', trend: 'up', isGoodTrend: true, sparklineData: [78, 80, 81, 82, 83, 84, 85], icon: 'Award' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Wellness Camp Sign-up', count: 5820, pct: '31.5%' },
            { step: 'Webinar Attendance', count: 4120, pct: '22.3%' },
            { step: 'Interactive Poll Answered', count: 3240, pct: '17.5%' },
            { step: 'Feedback Survey Submitted', count: 2450, pct: '13.2%' }
          ],
          donut: [
            { name: 'Mental Health Webinars', value: 45, color: '#3B82F6' },
            { name: 'Nutrition & Diet Camps', value: 25, color: '#10B981' },
            { name: 'Physical Fitness Checks', value: 20, color: '#F59E0B' },
            { name: 'Stress & Sleep Circles', value: 10, color: '#8B5CF6' }
          ],
          framework: [
            { title: '5,820 Live Platform Signups', desc: 'Significant live camp logins and community webinar participation during work hours.' },
            { title: 'Stress & Anxiety Reductions', desc: 'Webinar exit surveys reflect an average 24% decrease in self-reported operational stress.' },
            { title: 'Immediate Return Verified', desc: 'Camp benchmark stats verify ~35% healthcare cost reduction, ~48% decrease in absenteeism, ~3.5x ROI.' },
            { title: 'Remote & Regional Staff', desc: 'Remote workers saw the highest participation rate (68%) due to flexible scheduling of web classes.' }
          ],
          actions: [
            'Schedule quarterly Wellness Camp re-runs targeting high-burnout cohorts',
            'Deliver printed wellness camp materials to regional depot locations',
            'Introduce live chat circles with certified counselors post-webinar',
            'Automate webinar registration links through corporate newsletter feeds'
          ]
        };

      case 'diabetes-care':
        return {
          question: '"Are users successfully managing metabolic risk via clinical coaching?"',
          answer: 'Yes. Average blood sugar level dropped by 1.2% in active loggers within 90 days. Coach CSAT rating stands at 4.88/5.0.',
          kicker: 'MANTRA DIABETES CARE PORTAL',
          title: 'Glucose Loggers, Coach Check-ins, Meal Logs & HbA1c Progress',
          kpiLabel: 'Diabetes Portal',
          kpis: [
            { id: 'db-eligible', title: 'Qualified Cohort', kicker: 'METABOLIC LICENSE', value: '8,400', change: 8.5, changeLabel: 'employees qualified', trend: 'up', isGoodTrend: true, sparklineData: [7200, 7500, 7800, 8000, 8100, 8250, 8400], icon: 'Users' },
            { id: 'db-enrolled', title: 'Enrolled Members', kicker: 'ACTIVE ENROLLEES', value: '1,840', change: 16.5, changeLabel: '21.9% signup rate', trend: 'up', isGoodTrend: true, sparklineData: [1100, 1300, 1450, 1580, 1680, 1750, 1840], icon: 'UserCheck' },
            { id: 'db-active', title: 'Active Loggers', kicker: 'GLUCOSE TRACKING', value: '1,220', change: 19.2, changeLabel: '66.3% of enrollees', trend: 'up', isGoodTrend: true, sparklineData: [800, 920, 1010, 1080, 1140, 1190, 1220], icon: 'Activity' },
            { id: 'db-csat', title: 'Coach CSAT', kicker: 'COACHING SURVEYS', value: '4.88 / 5.0', change: 2.4, changeLabel: '92% positive rating', trend: 'up', isGoodTrend: true, sparklineData: [4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.88], icon: 'Heart' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Identified High-Risk', count: 2800, pct: '15.1%' },
            { step: 'Active Enrollments', count: 1840, pct: '9.9%' },
            { step: 'Weekly Active Loggers', count: 1220, pct: '6.6%' },
            { step: 'Completed Care Plan', count: 850, pct: '4.6%' }
          ],
          donut: [
            { name: 'Glucose Tracking', value: 50, color: '#3B82F6' },
            { name: 'Dietitian Consultations', value: 30, color: '#10B981' },
            { name: 'GLP-1 Care Coordination', value: 20, color: '#F59E0B' }
          ],
          framework: [
            { title: '1,840 Active Diabetic Signups', desc: 'Strong onboarding participation following onsite corporate health checkups and biometric sweeps.' },
            { title: '1.2% Average HbA1c Reduction', desc: 'Glucose logs reflect significant physiological stabilization and improved chronic disease management.' },
            { title: 'Outpatient Hospitalization Avoided', desc: 'Avoids expensive acute emergencies and critical diabetic episodes, yielding positive business ROI.' },
            { title: 'Operations & Logistics Division', desc: 'Shift workers see the highest prevalence of risk due to nighttime eating schedules.' }
          ],
          actions: [
            'Launch mandatory biometric screening makeups for night-shift employees',
            'Establish onsite cardiac-risk health clinics at main operational centers',
            'Deploy targeted high-cholesterol wellness challenge to logistics staff',
            'Automate HRA screening reminders via internal Slack and email systems'
          ]
        };

      case 'maternity-paternity':
        return {
          question: '"Are parents returning to work and utilizing neonatal support?"',
          answer: 'Yes. Return-to-work retention rate rose to 94.6% (+11% improvement), avoiding substantial recruiting and onboarding replacement costs.',
          kicker: 'MANTRA PARENTAL CARE PORTAL',
          title: 'Enrollments, Pediatric Consults, Return Rates & Nurse App Reviews',
          kpiLabel: 'Maternity Portal',
          kpis: [
            { id: 'mat-eligible', title: 'Qualified Seats', kicker: 'PARENTAL LICENSE', value: '18,500', change: 8.5, changeLabel: 'covered parents', trend: 'up', isGoodTrend: true, sparklineData: [16200, 16800, 17200, 17500, 17900, 18200, 18500], icon: 'Users' },
            { id: 'mat-enrolled', title: 'Active Parents Enrolled', kicker: 'MATERNITY INTAKES', value: '820', change: 14.8, changeLabel: 'pre & post-natal signups', trend: 'up', isGoodTrend: true, sparklineData: [500, 580, 640, 700, 750, 790, 820], icon: 'UserCheck' },
            { id: 'mat-active', title: 'Family Consultations', kicker: 'NURSE CHAT VOLUMES', value: '1,450', change: 22.4, changeLabel: 'pediatric & coach chats', trend: 'up', isGoodTrend: true, sparklineData: [800, 950, 1100, 1220, 1310, 1380, 1450], icon: 'HeartHandshake' },
            { id: 'mat-csat', title: 'Parent Satisfaction', kicker: 'SURVEY CSAT INDEX', value: '4.92 / 5.0', change: 3.2, changeLabel: '98% positive reviews', trend: 'up', isGoodTrend: true, sparklineData: [4.7, 4.75, 4.8, 4.82, 4.86, 4.9, 4.92], icon: 'Smile' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Parent Cohort', count: 1200, pct: '6.5%' },
            { step: 'Active Enrollments', count: 820, pct: '4.4%' },
            { step: 'Weekly Active Loggers', count: 680, pct: '3.7%' },
            { step: 'Returned To Work', count: 640, pct: '3.5%' }
          ],
          donut: [
            { name: 'Pediatric Nurse Chats', value: 45, color: '#3B82F6' },
            { name: 'Lactation Consultation', value: 35, color: '#10B981' },
            { name: 'Parent Coaching', value: 20, color: '#F59E0B' }
          ],
          framework: [
            { title: '820 Active Parental Signups', desc: 'Pre-natal registration begins early in the pregnancy timeline to enable healthy clinical coaching.' },
            { title: '94.6% Return-To-Work Continuity', desc: 'Maternity coaching significantly reduces voluntary exit rates post parental leave.' },
            { title: 'Onboarding Replacement Costs Dropped', desc: 'Protects critical teams from resource constraints and avoids onboarding recruitment fees.' },
            { title: 'Engineering & Product Teams', desc: 'Tech groups show high demand for private pediatric counseling and lactation specialists.' }
          ],
          actions: [
            'Automate post-natal care specialist consult booking links for new parental returners',
            'Establish virtual parent circles for peer support during transition back to work',
            'Reward returning parents with customizable hybrid and flex schedule policies',
            'Distribute lactation room locations and check-in guidelines during intake'
          ]
        };

      case 'women-wellness':
        return {
          question: '"Are female employees actively utilizing gender-specific health tracks?"',
          answer: 'Yes. 2,400 female employees active in specialized menopause, fertility, and wellness tracks, improving general absenteeism by 24.2%.',
          kicker: 'MANTRA WOMEN WELLNESS PORTAL',
          title: 'Wellness Scores, Screening Counts, Interceptions & Checkup Bookings',
          kpiLabel: 'Women Portal',
          kpis: [
            { id: 'ww-score', title: 'Wellness Score', kicker: 'HEALTH INDEX', value: '84 / 100', change: 9.5, changeLabel: 'avg score across cohorts', trend: 'up', isGoodTrend: true, sparklineData: [70, 73, 76, 78, 80, 82, 84], icon: 'Heart' },
            { id: 'ww-screenings', title: 'Mammograms Done', kicker: 'CLINICAL CHECKS', value: '680', change: 22.0, changeLabel: 'mammograms completed', trend: 'up', isGoodTrend: true, sparklineData: [450, 500, 540, 580, 610, 650, 680], icon: 'Stethoscope' },
            { id: 'ww-interception', title: 'Risk Interceptions', kicker: 'CLINICAL STABILISATION', value: '142 Cases', change: 16.2, changeLabel: 'stabilized early', trend: 'up', isGoodTrend: true, sparklineData: [80, 95, 110, 120, 130, 138, 142], icon: 'AlertTriangle' },
            { id: 'ww-checkups', title: 'Annual Checkups', kicker: 'SPECIALIST DIAGNOSTICS', value: '820', change: 18.2, changeLabel: 'onsite health checks', trend: 'up', isGoodTrend: true, sparklineData: [500, 580, 640, 700, 750, 790, 820], icon: 'Calendar' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'Women Employee Cohort', count: 8500, pct: '45.9%' },
            { step: 'Active Enrollments', count: 2400, pct: '13.0%' },
            { step: 'Weekly Active Loggers', count: 1850, pct: '10.0%' },
            { step: 'Completed Care Plan', count: 1420, pct: '7.7%' }
          ],
          donut: [
            { name: 'Hormonal Coaching', value: 40, color: '#3B82F6' },
            { name: 'Menopause Seminars', value: 30, color: '#10B981' },
            { name: 'Fertility Consultations', value: 20, color: '#F59E0B' },
            { name: 'Wellness Circles', value: 10, color: '#8B5CF6' }
          ],
          framework: [
            { title: '2,400 Active Female Signups', desc: 'Onboarding surveys trigger early personalized wellness pathway recommendations.' },
            { title: 'Active Coaching Retention', desc: 'Weekly wellness circles and hormonal coaching yield strong long-term health adherence.' },
            { title: 'Reduced Sick Days Audited', desc: 'Early screenings reduce outpatient claims and avoid long-term medical expense escalation.' },
            { title: 'Sales & BD Division', desc: 'High-travel sales segments see the highest participation in menopause webinars.' }
          ],
          actions: [
            'Automate hormonal care coach booking links for all active participants',
            'Schedule quarterly menopause and fertility webinars with guest experts',
            'Set up onsite private room resources for women wellness checkup makeups',
            'Promote female-focused wellness circles via internal communication feeds'
          ]
        };

      case 'physiotherapy':
        return {
          question: '"Are desk-bound employees completing recovery pathways?"',
          answer: 'Highly engaged. Average physical recovery rate is 82.5% within 8 virtual therapy sessions, with an app review rating of 4.86/5.0.',
          kicker: 'MANTRA MSK & PHYSIOTHERAPY PORTAL',
          title: 'Posture Checks, Therapy Sessions, Recovery Rates & App Reviews',
          kpiLabel: 'Physio Portal',
          kpis: [
            { id: 'pt-prev', title: 'MSK Prevalence', kicker: 'POPULATION EXPOSURE', value: '8.2%', change: -9.8, changeLabel: 'avoided joint operations', trend: 'down', isGoodTrend: true, sparklineData: [11.2, 10.5, 9.8, 9.2, 8.8, 8.4, 8.2], icon: 'Users' },
            { id: 'pt-posture', title: 'Posture Screenings', kicker: 'ERGONOMIC SCREENINGS', value: '6,240', change: 16.5, changeLabel: 'completed posture screens', trend: 'up', isGoodTrend: true, sparklineData: [3200, 3800, 4400, 5000, 5400, 5850, 6240], icon: 'Activity' },
            { id: 'pt-recovery', title: 'Physical Recovery', kicker: 'CLINICAL CONTINUITY', value: '82.5%', change: 14.2, changeLabel: 'average recovery rate', trend: 'up', isGoodTrend: true, sparklineData: [72, 74, 76, 78, 80, 81.5, 82.5], icon: 'CheckCircle' },
            { id: 'pt-resolved', title: 'High-Pain Resolved', kicker: 'CRITICAL RESOLUTIONS', value: '180 Cases', change: -18.2, changeLabel: 'referred to clinic follow-up', trend: 'down', isGoodTrend: true, sparklineData: [220, 210, 202, 195, 190, 184, 180], icon: 'ShieldAlert' }
          ],
          funnel: [
            { step: 'Workforce Headcount', count: currentOrg.totalEmployees, pct: '100%' },
            { step: 'MSK Pain Cohort', count: 5200, pct: '28.1%' },
            { step: 'Active Enrollments', count: 3400, pct: '18.4%' },
            { step: 'Weekly Active Loggers', count: 2800, pct: '15.1%' },
            { step: 'Completed Care Plan', count: 1850, pct: '10.0%' }
          ],
          donut: [
            { name: 'Virtual Physiotherapist', value: 50, color: '#3B82F6' },
            { name: 'Onsite Health Checks', value: 30, color: '#10B981' },
            { name: 'Social Activity Post', value: 15, color: '#F59E0B' },
            { name: 'Manager Advisory', value: 5, color: '#8B5CF6' }
          ],
          framework: [
            { title: '3,400 Virtual Physiotherapy Sessions', desc: 'webcam posture screenings identify desk workers ergonomics early.' },
            { title: 'Joint Pain Reductions Logged', desc: 'Virtual joint stretch and back exercises yield strong physical rehabilitation outcomes.' },
            { title: 'Substantial Surgeries Avoided', desc: 'Ergonomic adaptations prevent chronic injury claims and decrease surgical incidents.' },
            { title: 'Development & Support Centers', desc: 'Sedentary office staff report elevated lumbar stress, resolved via online deskside stretch classes.' }
          ],
          actions: [
            'Automate posture care coach booking links for all active participants',
            'Distribute posture guides and mousepads to sedentary office groups',
            'Roll out weekly virtual Deskside Stretch reminders via corporate chats',
            'Incentivize fitness coaching chat with localized gym membership perks'
          ]
        };
    }
  };

  const exp = getExperienceData(selectedProgram);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Executive Question & Insight Banner */}
      <div className="bg-[#0A2E5C] text-white p-6 md:p-8 rounded-2xl shadow-xl border border-blue-400/20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-black bg-[#00B2FF]/20 text-[#00B2FF] border border-[#00B2FF]/40 uppercase tracking-widest">
            <Icons.HelpCircle className="w-3.5 h-3.5" />
            <span>EXECUTIVE SOLUTION QUESTION</span>
          </div>
          <h2 className="text-xl md:text-3xl font-black tracking-tight leading-snug text-white">
            {exp.question}
          </h2>
          <p className="text-xs md:text-sm text-blue-100/90 font-medium leading-relaxed">
            <strong>Executive Answer:</strong> {exp.answer}
          </p>
        </div>
      </div>

      {/* Solution KPIs Grid */}
      <div>
        <div className="mantra-kicker mb-1">{exp.kicker}</div>
        <h3 className="text-xl md:text-2xl font-black text-[#0A2E5C] dark:text-white tracking-tight mb-4">
          {exp.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exp.kpis.map((kpi) => (
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
              5-Question Executive Decision Framework ({exp.kpiLabel})
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Evaluating program adoption, content consumption, habit tracking, and care recommendations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {exp.framework.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2">
              <div className="text-xs font-black text-[#2196F3] uppercase">{idx + 1}. How is this service being used?</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">{step.title}</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#15365F] border border-slate-100 dark:border-white/10 space-y-2 md:col-span-2 xl:col-span-2">
            <div className="text-xs font-black text-[#00B2FF] uppercase">5. What actions should HR take next?</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">Recommended Strategic Next Steps</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
              {exp.actions.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <Icons.CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Funnel & Modality Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mantra-card p-6 md:p-8 space-y-4">
          <div>
            <div className="mantra-kicker">ONBOARDING CONVERSION</div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white">
                Workforce Onboarding & Activation Funnel
              </h3>
              <InfoTooltip title={dashboardInfo.engagementBreakdown.title} description={dashboardInfo.engagementBreakdown.description} />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Conversion stages from total eligible headcount to active participants.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {exp.funnel.map((stage, idx) => (
              <div key={stage.step} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {idx + 1}. {stage.step}
                  </span>
                  <span className="font-bold text-[#2196F3]">
                    {stage.count.toLocaleString()} ({stage.pct})
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#2196F3] to-[#60A5FA] rounded-full transition-all duration-500"
                    style={{ width: stage.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mantra-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="mantra-kicker">PREFERENCE DISTRIBUTION</div>
            <h3 className="text-lg font-black text-[#0A2E5C] dark:text-white">
              Preference & Engagement Distribution
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              How employees utilize available services and camp features.
            </p>
          </div>

          <div className="h-56 w-full relative my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={exp.donut}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {exp.donut.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0A2E5C',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px',
                  }}
                  formatter={(v: any) => [`${v}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-100 dark:border-white/10">
            {exp.donut.map((item) => (
              <div key={item.name} className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-700 dark:text-slate-300 font-medium truncate">
                  {item.name}: <strong>{item.value}%</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeEngagementModule;
