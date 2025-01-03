import { TicketCard } from './ticket-card';
import { tickets } from './ticket-data';

export function TicketCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.name} {...ticket} />
      ))}
    </div>
  );
}