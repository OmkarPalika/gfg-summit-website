export const GROUP_DISCOUNTS = [
  { size: 1, pricePerPerson: 799, label: 'Standard' },
  { size: 2, pricePerPerson: 779, label: 'Duo' },
  { size: 3, pricePerPerson: 764, label: 'Triplet' },
  { size: 4, pricePerPerson: 749, label: '4ever' },
  { size: 5, pricePerPerson: 749, label: '5 Stars' },
  { size: 6, pricePerPerson: 749, label: 'Super 6' },
  { size: 7, pricePerPerson: 749, label: '7G' },
  { size: 8, pricePerPerson: 749, label: 'Infin8' },
  { size: 9, pricePerPerson: 749, label: 'Cloud 9' },
  { size: 10, pricePerPerson: 749, label: '10tastic' },
] as const;

type GroupDiscount = (typeof GROUP_DISCOUNTS)[number];

export function calculateGroupPrice(groupSize: number): number {
  // Use a loop to find the last matching discount
  let selectedDiscount: GroupDiscount | undefined;

  for (const discount of GROUP_DISCOUNTS) {
    if (groupSize >= discount.size) {
      selectedDiscount = discount;
    } else {
      break;
    }
  }

  return selectedDiscount?.pricePerPerson ?? GROUP_DISCOUNTS[0].pricePerPerson;
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
    total: ticketPrice + accommodationPrice,
  };
}
