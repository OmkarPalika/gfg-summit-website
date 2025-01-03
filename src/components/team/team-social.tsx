import { LucideIcon } from 'lucide-react';

interface TeamSocialProps {
  links: {
    icon: LucideIcon;
    url: string;
  }[];
}

export function TeamSocial({ links }: TeamSocialProps) {
  return (
    <div className="flex gap-4">
      {links.map(({ icon: Icon, url }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-emerald-600 transition-colors"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}