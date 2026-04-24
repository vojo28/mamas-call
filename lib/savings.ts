export function getSavingsUrgency({
  goal,
  saved,
  weeksRemaining,
}: {
  goal: number;
  saved: number;
  weeksRemaining: number;
}) {
  const remaining = goal - saved;

  if (weeksRemaining <= 0) return null;

  const weeklyNeeded = Math.ceil(remaining / weeksRemaining);

  return {
    remaining,
    weeklyNeeded,
  };
}