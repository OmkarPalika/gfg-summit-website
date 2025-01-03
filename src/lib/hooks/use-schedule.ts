import { useState, useEffect } from 'react';
import { scheduleData } from '@/lib/data/schedule-data';
import type { ScheduleEvent } from '@/components/schedule/types';

export function useSchedule() {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      // Simulate API call with setTimeout
      setTimeout(() => {
        setEvents(scheduleData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to fetch schedule data');
      setLoading(false);
    }
  }, []);

  return { events, loading, error };
}