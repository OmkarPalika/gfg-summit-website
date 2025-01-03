import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    icon: typeof Github | typeof Linkedin | typeof Twitter | typeof Instagram;
    url: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Omkar Palika',
    role: 'Chapter Lead',
    bio: 'Dynamic leader with 2+ years of experience in coding, app development, and building collaborative tech communities.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Linkedin, url: 'https://linkedin.com' },
      { icon: Instagram, url: 'https://twitter.com' }
    ]
  },
  {
    id: '2',
    name: 'Navaneeth Dubbaka',
    role: 'Chapter Vice Lead',
    bio: 'Innovative Python Developer with expertise in Machine Learning, Data Science, and driving impactful tech projects.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Github, url: 'https://github.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  },
  {
    id: '3',
    name: 'Aarif Mohammad',
    role: 'Events Lead',
    bio: 'Proactive organizer with a strong foundation in software development and a passion for creating engaging tech events.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  },
  {
    id: '4',
    name: 'Afeefa Shahzadi',
    role: 'Technical Lead',
    bio: 'Dedicated technologist specializing in AI, web development, and crafting user-focused technical solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  },
  {
    id: '5',
    name: 'Sreemaa Penta',
    role: 'Marketing Lead',
    bio: 'Strategic marketer with expertise in digital campaigns, community building, brand management, and enhancing online presence.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  },
  {
    id: '6',
    name: 'K L Praharshini',
    role: 'PR & O Lead',
    bio: 'Skilled communicator with a passion for building networks and driving impactful outreach initiatives to foster collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  },
  {
    id: '7',
    name: 'Mohan Nimmakayala',
    role: 'Design & Branding Lead',
    bio: 'Visionary designer with a passion for game aesthetics, branding, and creating visually compelling experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  },
  {
    id: '8',
    name: 'Pavan Kumar K',
    role: 'Social Media Lead',
    bio: 'Dedicated technologist specializing in AI, web development, and crafting user-focused technical solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
      { icon: Twitter, url: 'https://twitter.com' },
      { icon: Linkedin, url: 'https://linkedin.com' }
    ]
  }
];