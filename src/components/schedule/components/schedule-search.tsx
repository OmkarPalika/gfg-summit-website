import { Search } from 'lucide-react';

interface ScheduleSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ScheduleSearch({ value, onChange }: ScheduleSearchProps) {
  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <input
        type="text"
        placeholder="Search sessions or speakers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
          focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
      />
    </div>
  );
}