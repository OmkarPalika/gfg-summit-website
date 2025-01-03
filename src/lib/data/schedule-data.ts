import { ScheduleEvent } from '@/components/schedule/types';

export const scheduleData: ScheduleEvent[] = [
  // Day 1
  {
    id: 'd1-1',
    day: 'Day 1 - February 14',
    time: '8:00 AM - 9:30 AM',
    title: 'Registration & Kit Distribution',
    description: 'Check-in and receive event materials (badges, schedules, etc.)',
    track: 'General',
    location: 'Registration Desk',
    type: 'registration'
  },
  {
    id: 'd1-2',
    day: 'Day 1 - February 14',
    time: '9:30 AM - 10:00 AM',
    title: 'Opening Ceremony',
    description: 'Welcome speech and overview of the summit\'s vision, goals, and schedule',
    track: 'General',
    location: 'Main Auditorium',
    type: 'ceremony'
  },
  {
    id: 'd1-3',
    day: 'Day 1 - February 14',
    time: '10:00 AM - 10:30 AM',
    title: 'Cultural Break',
    description: 'Light cultural performances, music, and fun activities',
    track: 'Entertainment',
    location: 'Main Auditorium',
    type: 'break'
  },
  {
    id: 'd1-4',
    day: 'Day 1 - February 14',
    time: '10:30 AM - 1:00 PM',
    title: 'Advanced Workshops',
    description: 'Sessions on AI, IoT, and Blockchain with hands-on learning',
    track: 'Workshop',
    location: 'Workshop Halls',
    type: 'workshop'
  },
  {
    id: 'd1-5',
    day: 'Day 1 - February 14',
    time: '1:00 PM - 2:30 PM',
    title: 'Lunch Break',
    description: 'Lunch served with networking opportunities',
    track: 'Break',
    location: 'Dining Area',
    type: 'break'
  },
  {
    id: 'd1-6',
    day: 'Day 1 - February 14',
    time: '2:30 PM - 4:30 PM',
    title: 'Advanced Workshops (Continued)',
    description: 'Deep dive sessions with practical knowledge',
    track: 'Workshop',
    location: 'Workshop Halls',
    type: 'workshop'
  },
  {
    id: 'd1-7',
    day: 'Day 1 - February 14',
    time: '4:30 PM - 5:00 PM',
    title: 'Snacks Break & Networking',
    description: 'Have good Snacks and Socilaize',
    track: 'Break',
    location: 'Event Arena',
    type: 'break'
  },
  {
    id: 'd1-8',
    day: 'Day 1 - February 14',
    time: '5:00 PM - 6:00 PM',
    title: 'Refreshing Break',
    description: 'Relax, explore the venue, or socialize; but, prepare for the Entertainment Night',
    track: 'Break',
    location: 'Ground',
    type: 'break'
  },
  {
    id: 'd1-9',
    day: 'Day 1 - February 14',
    time: '6:00 PM - 7:30 PM',
    title: 'Entertainment Night',
    description: 'DJ Night with music, dancing, and socializing',
    track: 'Special',
    location: 'Outdoor Arena',
    type: 'special'
  },

  // Day 2
  {
    id: 'd2-1',
    day: 'Day 2 - February 15',
    time: '8:30 AM - 11:00 AM',
    title: 'Workshops (Continued)',
    description: 'Advanced workshops focused on skill-building',
    track: 'Workshop',
    location: 'Workshop Halls',
    type: 'workshop'
  },
  {
    id: 'd2-2',
    day: 'Day 2 - February 15',
    time: '11:00 AM - 12:30 PM',
    title: 'GFG Team Competitions',
    description: 'Tech quizzes, coding challenges, and problem-solving competitions',
    track: 'Competition',
    location: 'Stalls Arena',
    type: 'competition'
  },
  {
    id: 'd2-3',
    day: 'Day 2 - February 15',
    time: '12:30 PM - 2:00 PM',
    title: 'Lunch Break',
    description: 'Lunch served with networking opportunities',
    track: 'Break',
    location: 'Dining Area',
    type: 'break'
  },
  {
    id: 'd2-4',
    day: 'Day 2 - February 15',
    time: '2:00 PM - 3:00 PM',
    title: 'GFG Dignitaries Visit & Panel Discussion',
    description: 'Panel discussion with GFG alumni and dignitaries sharing success stories',
    track: 'Panel',
    location: 'Main Auditorium',
    type: 'panel'
  },
  {
    id: 'd2-5',
    day: 'Day 2 - February 15',
    time: '3:00 PM - 4:30 PM',
    title: 'Showcase of GFG SCs & Sponsors',
    description: 'It\'s time for chapters and sponsors',
    track: 'Break',
    location: 'Main Auditorium',
    type: 'break'
  },
  {
    id: 'd2-6',
    day: 'Day 2 - February 15',
    time: '4:30 PM - 5:00 PM',
    title: 'Snacks Break & Networking',
    description: 'Have good Snacks and Socilaize',
    track: 'Break',
    location: 'Event Arena',
    type: 'break'
  },
  {
    id: 'd2-7',
    day: 'Day 2 - February 15',
    time: '5:00 PM - 6:00 PM',
    title: 'Refreshing Break',
    description: 'Relax, explore the venue, or socialize; but, prepare for the Entertainment Night',
    track: 'Break',
    location: 'Venue or Accomodation',
    type: 'break'
  },
  {
    id: 'd2-8',
    day: 'Day 2 - February 15',
    time: '6:00 PM - 7:30 PM',
    title: 'Fire Camp (GFG Core Teams only)',
    description: 'Exclusive fire camp session with team-building exercises',
    track: 'Special',
    location: 'Outdoor Arena',
    type: 'special'
  },

  // Day 3
  {
    id: 'd3-1',
    day: 'Day 3 - February 16',
    time: '8:00 AM - 9:00 AM',
    title: 'Bus Boarding',
    description: 'Board buses for the industrial visit',
    track: 'General',
    location: 'Bus Area',
    type: 'transport'
  },
  {
    id: 'd3-2',
    day: 'Day 3 - February 16',
    time: '9:00 AM - 1:00 PM',
    title: 'Industrial Visit to AMTZ',
    description: 'Guided tour with live demonstrations of cutting-edge MedTech',
    track: 'Industry Visit',
    location: 'AMTZ Facility',
    type: 'visit'
  },
  {
    id: 'd3-3',
    day: 'Day 3 - February 16',
    time: '1:00 PM - 2:00 PM',
    title: 'Lunch Break',
    description: 'Lunch served with networking opportunities',
    track: 'Break',
    location: 'Dining Area',
    type: 'break'
  },
  {
    id: 'd3-4',
    day: 'Day 3 - February 16',
    time: '2:00 PM - 2:30 PM',
    title: 'Closing Ceremony',
    description: 'Final remarks, winner announcements, and certificate distribution',
    track: 'General',
    location: 'Main Auditorium',
    type: 'ceremony'
  },
  {
    id: 'd3-5',
    day: 'Day 3 - February 16',
    time: '2:30 PM - 3:00 PM',
    title: 'Group Photos & Departure',
    description: 'Celebrating the event with Group Photos and bidding farewell',
    track: 'Special',
    location: 'AMTZ Facility',
    type: 'special'
  },
];