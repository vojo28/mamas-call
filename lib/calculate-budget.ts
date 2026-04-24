type Input = {
  location: string;
  hospitalType: string;
  hasInsurance: string;
};

export function calculateBudget(input: Input) {
  let baseCost = 0;

  // LOCATION FACTOR
  if (input.location === "lagos") baseCost = 250000;
  else if (input.location === "abuja") baseCost = 220000;
  else baseCost = 180000;

  // HOSPITAL TYPE
  if (input.hospitalType === "private") baseCost += 100000;
  if (input.hospitalType === "public") baseCost += 20000;

  // INSURANCE COVERAGE
  let insuranceCoverage = 0;

  if (input.hasInsurance === "yes") {
    insuranceCoverage = Math.round(baseCost * 0.6); // 60% covered
  }

  const userNeeds = baseCost - insuranceCoverage;

  // SAVINGS PLAN (6 months default)
  const weeks = 24;
  const weeklySavings = Math.ceil(userNeeds / weeks);

  return {
    totalCost: baseCost,
    insuranceCoverage,
    userNeeds,
    weeklySavings,
    durationWeeks: weeks,
  };
}