import { LucideIcon } from 'lucide-react';

interface TicketHeaderProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export function TicketHeader({ name, description, icon: Icon }: TicketHeaderProps) {
  return (
    <div className="mb-4">
      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}