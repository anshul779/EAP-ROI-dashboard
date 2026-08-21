export type FinancialFormulaInput = {
  healthcareCostReduction: number;
  reducedAbsenteeism: number;
  reducedPresenteeism: number;
  reducedTurnover: number;
  productivityGain: number;
  programCost: number;
};

export type FinancialFormulaResult = FinancialFormulaInput & {
  totalReturn: number;
  netSavings: number;
  roiRatio: number;
  roiPercent: number;
  returnPerDollar: number;
};

export function computeTotalReturn(input: FinancialFormulaInput): number {
  return (
    input.healthcareCostReduction +
    input.reducedAbsenteeism +
    input.reducedPresenteeism +
    input.reducedTurnover +
    input.productivityGain
  );
}

export function computeNetSavings(totalReturn: number, programCost: number): number {
  return totalReturn - programCost;
}

export function computeROIRatio(totalReturn: number, programCost: number): number {
  if (programCost === 0) return 0;
  return totalReturn / programCost;
}

export function computeROIPercent(roiRatio: number): number {
  return (roiRatio - 1) * 100;
}

export function buildFinancialFormula(input: FinancialFormulaInput): FinancialFormulaResult {
  const totalReturn = computeTotalReturn(input);
  const netSavings = computeNetSavings(totalReturn, input.programCost);
  const roiRatio = computeROIRatio(totalReturn, input.programCost);
  return {
    ...input,
    totalReturn,
    netSavings,
    roiRatio,
    roiPercent: computeROIPercent(roiRatio),
    returnPerDollar: roiRatio,
  };
}

export function formatCurrency(amount: number, symbol = '$'): string {
  return `${symbol}${amount.toLocaleString('en-US')}`;
}

export function formatCompactCurrency(amount: number, symbol = '$'): string {
  if (amount >= 1_000_000) {
    return `${symbol}${(amount / 1_000_000).toFixed(2)}M`;
  }
  if (amount >= 1_000) {
    return `${symbol}${(amount / 1_000).toFixed(0)}k`;
  }
  return formatCurrency(amount, symbol);
}

export function formatROIMultiple(ratio: number): string {
  return `${ratio.toFixed(2)}×`;
}

export function costPerEmployee(programCost: number, employees: number): number {
  if (employees === 0) return 0;
  return programCost / employees;
}

export function costPerActiveUser(programCost: number, mau: number): number {
  if (mau === 0) return 0;
  return programCost / mau;
}

export function registrationRate(registered: number, eligible: number): number {
  if (eligible === 0) return 0;
  return (registered / eligible) * 100;
}

export function avgSessionsPerEmployee(sessions: number, activeUsers: number): number {
  if (activeUsers === 0) return 0;
  return sessions / activeUsers;
}
