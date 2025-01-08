import { TeamMember } from '@/lib/data/team-data';
import { TeamSocial } from './team-social';
import { TeamImage } from './team-image';

interface TeamCardProps {
  member: TeamMember & { designation?: string };
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <TeamImage imageUrl={member.imageUrl} name={member.name} />
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          {member.designation && (
            <p className="text-sm font-medium text-gray-500">{member.designation}</p>
          )}
          <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
          <p className="text-gray-600 text-sm">{member.bio}</p>
        </div>
        <TeamSocial links={member.socialLinks} />
      </div>
    </div>
  );
}
