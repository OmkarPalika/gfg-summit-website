import { Clock, Users, Star, UserPlus } from 'lucide-react';
import { GROUP_DISCOUNTS } from '@/lib/utils/pricing';

export const tickets = [
  {
    name: 'Early Bird',
    price: 699,
    description: 'Limited time offer - Only 200 tickets available',
    features: ['All keynote sessions', 'Workshop access', 'Lunch included', 'Event swag'],
    icon: Clock,
    available: 200,
    highlight: true
  },
  {
    name: 'Standard',
    price: GROUP_DISCOUNTS[0].pricePerPerson,
    description: 'Regular individual ticket',
    features: ['All keynote sessions', 'Workshop access', 'Lunch included', 'Event swag'],
    icon: Users,
    available: null,
    highlight: false
  },
  {
    name: 'Group Tickets',
    price: GROUP_DISCOUNTS[1].pricePerPerson,
    description: 'Special rates for groups of 2 or more',
    features: [
      'All standard benefits',
      'Group seating arrangement',
      'Flexible payment options',
    ],
    icon: UserPlus,
    available: null,
    highlight: true
  }
];