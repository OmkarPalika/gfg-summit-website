import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  { size: 1, pricePerPerson: 799, label: 'Standard', savings: 0 },
  { size: 2, pricePerPerson: 779, label: 'Duo', savings: 40 },
  { size: 3, pricePerPerson: 764, label: 'Triplet', savings: 105 },
  { size: 4, pricePerPerson: 749, label: '4ever', savings: 200 },
  { size: 5, pricePerPerson: 749, label: '5 Stars', savings: 250 },
  { size: 6, pricePerPerson: 749, label: 'Super 6', savings: 300 },
  { size: 7, pricePerPerson: 749, label: '7G', savings: 350 },
  { size: 8, pricePerPerson: 749, label: 'Infin8', savings: 400 },
  { size: 9, pricePerPerson: 749, label: 'Cloud 9', savings: 450 },
  { size: 10, pricePerPerson: 749, label: '10tastic', savings: 500 }
];
