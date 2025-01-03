import { ScheduleDaySelector } from './schedule-day-selector';
import { ScheduleTrackFilter } from './schedule-track-filter';
import type { ScheduleFilters } from '../types';

interface ScheduleFiltersProps {
  filters: ScheduleFilters;
  onFilterChange: (key: keyof ScheduleFilters, value: string) => void;
}

const DAYS = ['All Days', 'Day 1 - February 14', 'Day 2 - February 15', 'Day 3 - February 16'];
const TRACKS = ['All Tracks', 'Workshop', 'Competition', 'Special', 'Entertainment'];

export function ScheduleFilters({ filters, onFilterChange }: ScheduleFiltersProps) {
  return (
    <div className="space-y-6 bg-gray-50 rounded-lg p-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Day</h2>
        <ScheduleDaySelector
          selectedDay={filters.day}
          onDayChange={(day) => onFilterChange('day', day)}
          days={DAYS}
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter by Track</h2>
        <ScheduleTrackFilter
          selectedTrack={filters.track}
          onTrackChange={(track) => onFilterChange('track', track)}
          tracks={TRACKS}
        />
      </div>
    </div>
  );
}