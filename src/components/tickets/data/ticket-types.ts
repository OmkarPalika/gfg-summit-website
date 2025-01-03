import { TicketType } from '../types';

export const ticketTypes: TicketType[] = [
  {
    id: 'early-bird',
    name: 'Early Bird',
    price: 699,
    description: 'Limited time offer - Only 200 tickets available',
    features: [
      'All keynote sessions',
      'Workshop access',
      'Lunch included',
      'Event swag'
    ],
    highlight: true
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 799,
    description: 'Regular individual ticket',
    features: [
      'All keynote sessions',
      'Workshop access',
      'Lunch included',
      'Event swag'
    ]
  },
  {
    id: 'group',
    name: 'Group Tickets',
    price: 749,
    description: 'Special rates for groups of 2 or more',
    features: [
      'All standard benefits',
      'Group seating arrangement',
      'Flexible payment options'
    ],
    highlight: true
  }
];