interface TeamInfoProps {
  name: string;
  role: string;
  bio: string;
}

export function TeamInfo({ name, role, bio }: TeamInfoProps) {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-emerald-600 font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
}