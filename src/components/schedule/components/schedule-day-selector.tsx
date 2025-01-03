import { motion } from 'framer-motion';

interface ScheduleDaySelectorProps {
  selectedDay: string;
  onDayChange: (day: string) => void;
  days: string[];
}

export function ScheduleDaySelector({ selectedDay, onDayChange, days }: ScheduleDaySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {days.map((day) => (
        <motion.button
          key={day}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onDayChange(day)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${selectedDay === day 
              ? 'bg-emerald-600 text-white' 
              : 'bg-white text-gray-700 hover:bg-emerald-50'}`}
        >
          {day.split(' - ')[0]}
        </motion.button>
      ))}
    </div>
  );
}