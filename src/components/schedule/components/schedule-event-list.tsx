import { motion, AnimatePresence } from 'framer-motion';
import { ScheduleEventCard } from './schedule-event-card';
import type { ScheduleEvent } from '../types';

interface ScheduleEventListProps {
  events: ScheduleEvent[];
}

export function ScheduleEventList({ events }: ScheduleEventListProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg">
        <p className="text-gray-500">No sessions found matching your criteria</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <div className="space-y-4">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <ScheduleEventCard {...event} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}