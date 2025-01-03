import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { TicketType } from './types';

interface TicketCardProps extends TicketType {
  onSelect: () => void;
}

export function TicketCard({
  name,
  price,
  description,
  features,
  highlight,
  onSelect
}: TicketCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`
        relative bg-white rounded-2xl shadow-lg overflow-hidden
        ${highlight ? 'ring-2 ring-emerald-500' : ''}
      `}
    >
      {highlight && (
        <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 text-sm rounded-bl-lg">
          Popular
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-6">
          <p className="text-3xl font-bold text-gray-900">
            ₹{price}
            <span className="text-base font-normal text-gray-500">/person</span>
            {name === 'Group Tickets' && <span className="text-sm text-gray-500">*</span>}
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-600">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <Button
          onClick={onSelect}
          className="w-full"
          variant={highlight ? 'primary' : 'outline'}
        >
          Get Ticket
        </Button>
      </div>
    </motion.div>
  );
}