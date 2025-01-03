export const GROUP_DISCOUNTS = [
  { size: 1, pricePerPerson: 799, label: 'Standard' },
  { size: 2, pricePerPerson: 779, label: 'Duo' },
  { size: 3, pricePerPerson: 764, label: 'Triplet' },
  { size: 4, pricePerPerson: 749, label: '4ever' }
] as const;

export function calculateGroupPrice(groupSize: number): number {
  const discount = GROUP_DISCOUNTS.findLast(d => groupSize >= d.size);
  return discount?.pricePerPerson ?? GROUP_DISCOUNTS[0].pricePerPerson;
}

export function calculateTotalPrice(teamSize: number, accommodationCount: number): {
  ticketPrice: number;
  accommodationPrice: number;
  total: number;
} {
  const pricePerPerson = calculateGroupPrice(teamSize);
  const ticketPrice = teamSize * pricePerPerson;
  const accommodationPrice = accommodationCount * 1499;
  
  return {
    ticketPrice,
    accommodationPrice,
    total: ticketPrice + accommodationPrice
  };
}