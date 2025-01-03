import { motion } from 'framer-motion';

interface ScheduleTrackFilterProps {
  selectedTrack: string;
  onTrackChange: (track: string) => void;
  tracks: string[];
}

export function ScheduleTrackFilter({ selectedTrack, onTrackChange, tracks }: ScheduleTrackFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tracks.map((track) => (
        <motion.button
          key={track}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onTrackChange(track)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${selectedTrack === track 
              ? 'bg-emerald-100 text-emerald-800' 
              : 'bg-white text-gray-700 hover:bg-gray-50'}`}
        >
          {track}
        </motion.button>
      ))}
    </div>
  );
}