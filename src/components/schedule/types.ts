export interface ScheduleEvent {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  track: string;
  location: string;
  type: 'registration' | 'ceremony' | 'break' | 'workshop' | 'entertainment' | 
        'competition' | 'panel' | 'special' | 'transport' | 'visit';
}

export interface ScheduleFilters {
  day: string;
  track: string;
}