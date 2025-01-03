import { useState } from 'react';
import { motion } from 'framer-motion';
import { TicketCard } from './ticket-card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useTickets } from '@/lib/hooks/use-tickets';

interface TicketListProps {
  onSelect: (amount: number, ticketId: string) => void;
}

export function TicketList({ onSelect }: TicketListProps) {
  const { tickets, loading, error } = useTickets();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner className="h-8 w-8 text-emerald-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  const filteredTickets = selectedCategory
    ? tickets.filter(ticket => ticket.category === selectedCategory)
    : tickets;

  return (
    <div className="space-y-8">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {['All', 'Early Bird', 'Regular', 'Group'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category || (category === 'All' && !selectedCategory)
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredTickets.map((ticket) => (
          <motion.div
            key={ticket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TicketCard {...ticket} onSelect={onSelect} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}