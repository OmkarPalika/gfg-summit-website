import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  { size: 1, pricePerPerson: 799, label: 'Standard', savings: 0 },
  { size: 2, pricePerPerson: 779, label: 'Duo', savings: 40 },
  { size: 3, pricePerPerson: 764, label: 'Triplet', savings: 105 },
  { size: 4, pricePerPerson: 749, label: '4ever', savings: 200 }
];