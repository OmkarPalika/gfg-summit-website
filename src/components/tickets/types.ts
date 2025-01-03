export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface PricingTier {
  size: number;
  pricePerPerson: number;
  label: string;
  savings: number;
}