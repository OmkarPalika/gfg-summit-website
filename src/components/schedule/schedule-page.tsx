import { useState } from 'react';
import { MetaTags } from '@/components/seo/meta-tags';
import { ScheduleFilters } from './components/schedule-filters';
import { ScheduleEventList } from './components/schedule-event-list';
import { SearchBar } from './components/search-bar';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useSchedule } from '@/lib/hooks/use-schedule';
import type { ScheduleFilters as Filters } from './types';

export function SchedulePage() {
  const { events, loading, error } = useSchedule();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    day: 'All Days', // Default is 'All Days'
    track: 'All Tracks', // Default is 'All Tracks'
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Function to group events by day
  const groupEventsByDay = (events: any[]) => {
    return events.reduce((groupedEvents, event) => {
      const day = event.day; // Assuming the 'day' is a property of each event
      if (!groupedEvents[day]) {
        groupedEvents[day] = [];
      }
      groupedEvents[day].push(event);
      return groupedEvents;
    }, {} as Record<string, any[]>);
  };

  // Combine filtering and search logic
  const filteredAndSearchedEvents = events
    .filter(
      (event) =>
        (!searchTerm ||
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.track.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(
      (event) =>
        (filters.day === 'All Days' || event.day === filters.day) &&
        (filters.track === 'All Tracks' || event.track === filters.track)
    );

  // Group events by day
  const groupedEvents = groupEventsByDay(filteredAndSearchedEvents);

  return (
    <>
      <MetaTags
        title="Schedule | GFG SC Summit 2025"
        description="Explore the complete schedule of GFG SC Summit 2025. Find technical sessions, workshops, and career talks."
      />

      <main className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Schedule</h1>
            <p className="text-xl text-gray-600 mb-8">
              Plan your summit experience with our comprehensive schedule
            </p>
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              onClear={() => setSearchTerm('')}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ScheduleFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>

            <div className="lg:col-span-3">
              {loading ? (
                <div className="flex justify-center py-12">
                  <LoadingSpinner className="h-8 w-8 text-emerald-600" />
                </div>
              ) : error ? (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                  {error}
                </div>
              ) : Object.keys(groupedEvents).length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  No events match your search or filters.
                </div>
              ) : (
                Object.keys(groupedEvents).map((day) => (
                  <div key={day} className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{day}</h2>
                    <ScheduleEventList events={groupedEvents[day]} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
