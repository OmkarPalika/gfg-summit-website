import { TeamMember } from '@/lib/data/team-data';
import { TeamSocial } from './team-social';
import { TeamImage } from './team-image';
import { TeamInfo } from './team-info';

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <TeamImage imageUrl={member.imageUrl} name={member.name} />
      <div className="p-6">
        <TeamInfo
          name={member.name}
          role={member.role}
          bio={member.bio}
        />
        <TeamSocial links={member.socialLinks} />
      </div>
    </div>
  );
}