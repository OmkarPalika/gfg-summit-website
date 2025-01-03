import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/utils/animations';
import { GOOGLE_FORMS } from '@/lib/utils/constants';
import { TicketCard } from './ticket-card';
import { PricingCalculator } from './pricing-calculator';
import { ticketTypes } from './data/ticket-types';
import { MetaTags } from '@/components/seo/meta-tags';

export function TicketsPage() {
  const handleTicketSelect = () => {
    window.open(GOOGLE_FORMS.TICKETS, '_blank');
  };

  return (
    <>
      <MetaTags
        title="Tickets | GFG Summit 2025"
        description="Secure your spot at GFG Summit 2025. Choose from early bird, standard, and group tickets. Special discounts available for group bookings."
      />
      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Tickets</h1>
            <p className="text-xl text-gray-600">Join us for three days of learning and networking</p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ticketTypes.map((ticket) => (
              <TicketCard
                key={ticket.id}
                {...ticket}
                onSelect={handleTicketSelect}
              />
            ))}
          </div>
  
          <div className="max-w-2xl mx-auto">
            <PricingCalculator onSelect={handleTicketSelect} />
          </div>
        </div>
      </main>
    </>
  );
}