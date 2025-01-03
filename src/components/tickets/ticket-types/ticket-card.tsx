import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth/auth-context';
import { useNavigate } from 'react-router-dom';

interface TicketCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  available: number | null;
  highlight: boolean;
  icon?: LucideIcon;
}

export function TicketCard({
  id,
  name,
  price,
  description,
  features,
  available,
  highlight,
  icon: Icon
}: TicketCardProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    // Handle purchase logic
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
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
        {Icon && (
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-emerald-600" />
          </div>
        )}

        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="mb-6">
          <p className="text-3xl font-bold text-gray-900">
            ₹{price}
            <span className="text-base font-normal text-gray-500">/person</span>
          </p>
          {available !== null && (
            <p className="text-sm text-gray-500 mt-1">
              {available} tickets remaining
            </p>
          )}
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
          onClick={handlePurchase}
          className="w-full"
          variant={highlight ? 'primary' : 'outline'}
        >
          Get Ticket
        </Button>
      </div>
    </motion.div>
  );
}