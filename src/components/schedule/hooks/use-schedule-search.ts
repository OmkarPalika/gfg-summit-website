import { useState, useMemo } from 'react';
import { ScheduleEvent } from '../types';
import { searchEvents } from '@/lib/utils/search';

type ScheduleSearchResult = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredEvents: ScheduleEvent[];
  hasResults: boolean;
  isSearching: boolean;
};

export function useScheduleSearch(events: ScheduleEvent[]): ScheduleSearchResult {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    // Default to all events if there's no search term
    return searchTerm.trim() ? searchEvents(events, searchTerm) : events;
  }, [events, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredEvents,
    hasResults: filteredEvents.length > 0,
    isSearching: searchTerm.trim().length > 0,
  };
}
