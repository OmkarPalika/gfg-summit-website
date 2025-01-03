import { TicketCard } from './ticket-card';
import { useTicketTypes } from '@/lib/hooks/use-tickets';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorMessage } from '@/components/ui/error-message';

export function TicketTypes() {
  const { tickets, loading, error, retry } = useTicketTypes();

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner className="h-8 w-8 text-emerald-600" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={retry} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}