import { MapPin, Clock, Tag } from 'lucide-react';
import type { ScheduleEvent } from '../types';

const trackColors: Record<string, { bg: string; text: string }> = {
  Workshop: { bg: 'bg-blue-100', text: 'text-blue-800' },
  Competition: { bg: 'bg-purple-100', text: 'text-purple-800' },
  Panel: { bg: 'bg-amber-100', text: 'text-amber-800' },
  Entertainment: { bg: 'bg-pink-100', text: 'text-pink-800' },
  General: { bg: 'bg-gray-100', text: 'text-gray-800' },
  Special: { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  Break: { bg: 'bg-orange-100', text: 'text-orange-800' },
  'Industry Visit': { bg: 'bg-indigo-100', text: 'text-indigo-800' }
};

export function ScheduleEventCard({
  time,
  title,
  description,
  track,
  location,
  type
}: ScheduleEvent) {
  const { bg = 'bg-gray-100', text = 'text-gray-800' } = trackColors[track] || {};

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} ${text}`}>
              {track}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Tag className="h-4 w-4" />
              <span className="capitalize">{type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}