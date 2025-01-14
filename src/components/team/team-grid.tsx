import { TeamMember } from '@/lib/data/team-data';
import { TeamCard } from './team-card';
import { motion } from 'framer-motion';

interface TeamGridProps {
  team: Array<TeamMember & { designation?: string }>;
}

export function TeamGrid({ team }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <TeamCard member={member} />
        </motion.div>
      ))}
    </div>
  );
}
