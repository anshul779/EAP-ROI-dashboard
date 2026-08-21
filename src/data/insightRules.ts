import {
  DEPT_ROI_DATA,
  WORKFORCE_HEALTH_HEATMAP,
  ENGAGEMENT_FUNNEL,
  EAP_DEPARTMENT_DATA,
  FINANCIAL_FORMULA,
} from './mockData';
import { formatCompactCurrency, formatROIMultiple } from './roiCalculations';

export type ExecutiveInsight = {
  icon: 'TrendingUp' | 'DollarSign' | 'Flame' | 'AlertCircle' | 'Users' | 'Target';
  text: string;
  highlight: string;
};

export type RecommendedAction = {
  title: string;
  buttonLabel: string;
};

export function generateExecutiveInsights(): ExecutiveInsight[] {
  const insights: ExecutiveInsight[] = [];

  const roiYoYChange = 18.2;
  insights.push({
    icon: 'TrendingUp',
    text: `EAP ROI increased by ${roiYoYChange}% YoY, delivering ${formatROIMultiple(FINANCIAL_FORMULA.roiRatio)} return on investment.`,
    highlight: `${formatROIMultiple(FINANCIAL_FORMULA.roiRatio)} ROI`,
  });

  insights.push({
    icon: 'DollarSign',
    text: `Net savings of ${formatCompactCurrency(FINANCIAL_FORMULA.netSavings)} exceed programme cost by ${formatROIMultiple(FINANCIAL_FORMULA.roiRatio)} — ${formatCompactCurrency(FINANCIAL_FORMULA.returnPerDollar)} returned per $1 invested.`,
    highlight: formatCompactCurrency(FINANCIAL_FORMULA.netSavings),
  });

  const highestBurnout = [...WORKFORCE_HEALTH_HEATMAP].sort((a, b) => b.burnout - a.burnout)[0];
  if (highestBurnout) {
    insights.push({
      icon: 'Flame',
      text: `${highestBurnout.dept} shows the highest burnout risk at ${highestBurnout.burnout}% — targeted EAP promotion recommended to prevent absenteeism costs.`,
      highlight: `${highestBurnout.burnout}% burnout`,
    });
  }

  const lowestAdoption = [...EAP_DEPARTMENT_DATA].sort(
    (a, b) => a.registered / a.eligible - b.registered / b.eligible
  )[0];
  if (lowestAdoption) {
    const adoptionPct = ((lowestAdoption.registered / lowestAdoption.eligible) * 100).toFixed(1);
    insights.push({
      icon: 'AlertCircle',
      text: `${lowestAdoption.dept} EAP adoption at ${adoptionPct}% is below the ${ENGAGEMENT_FUNNEL[1].pct} company average — estimated ${formatCompactCurrency(140000)} in unrealised savings.`,
      highlight: `${adoptionPct}% adoption`,
    });
  }

  return insights.slice(0, 4);
}

export function generateRecommendedAction(): RecommendedAction {
  const lowestAdoption = [...EAP_DEPARTMENT_DATA].sort(
    (a, b) => a.registered / a.eligible - b.registered / b.eligible
  )[0];

  if (lowestAdoption) {
    return {
      title: `Launch targeted EAP awareness campaign for ${lowestAdoption.dept} to capture an estimated ${formatCompactCurrency(140000)} in preventive savings.`,
      buttonLabel: `Deploy ${lowestAdoption.dept.split(' ')[0]} Campaign`,
    };
  }

  const topDept = [...DEPT_ROI_DATA].sort(
    (a, b) => parseFloat(b.totalRoi) - parseFloat(a.totalRoi)
  )[0];

  return {
    title: `Replicate ${topDept?.department ?? 'HR'} EAP engagement playbook across underperforming departments to lift ROI above ${topDept?.totalRoi ?? '5.0x'}.`,
    buttonLabel: 'View EAP Playbook',
  };
}
