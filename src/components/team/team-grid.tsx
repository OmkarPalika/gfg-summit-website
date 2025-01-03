import { TeamCard } from './team-card';
import { teamMembers } from '@/lib/data/team-data';
import { motion } from 'framer-motion';

export function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
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