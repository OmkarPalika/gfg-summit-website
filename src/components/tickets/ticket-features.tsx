import { motion } from 'framer-motion';

interface TicketFeaturesProps {
  features: string[];
}

export function TicketFeatures({ features }: TicketFeaturesProps) {
  return (
    <ul className="space-y-3 mb-8">
      {features.map((feature) => (
        <motion.li
          key={feature}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center text-gray-600"
        >
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2" />
          {feature}
        </motion.li>
      ))}
    </ul>
  );
}