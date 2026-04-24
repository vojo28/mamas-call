export function getPregnancyData(edd: string) {
  if (!edd) return null;

  const today = new Date();
  const deliveryDate = new Date(edd);

  // Pregnancy is ~40 weeks
  const totalDays = 280;

  const timeDiff = deliveryDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  const weeksRemaining = Math.ceil(daysRemaining / 7);
  const weeksPassed = 40 - weeksRemaining;

  return {
    weeksPassed,
    weeksRemaining,
  };
}