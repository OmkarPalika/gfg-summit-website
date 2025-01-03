import { motion, AnimatePresence } from 'framer-motion';
import { ScheduleEvent } from '../types';
import { ScheduleEventCard } from './schedule-event-card';

interface SearchResultsProps {
  events: ScheduleEvent[];
  isSearching: boolean;
}

export function SearchResults({ events, isSearching }: SearchResultsProps) {
  if (!isSearching) return null;

  return (
    <AnimatePresence>
      <div className="space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-600"
        >
          Found {events.length} {events.length === 1 ? 'result' : 'results'}
        </motion.p>
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ScheduleEventCard {...event} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}