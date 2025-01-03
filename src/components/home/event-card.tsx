import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function EventCard({ title, description, icon: Icon }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}