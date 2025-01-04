import { Github, Linkedin, Instagram } from 'lucide-react';
import Omkar from '@/public/Team/Omkar.jpg';
// import Navaneeth from '@/public/Team/Navaneeth.jpg';
import Afeefa from '@/public/Team/Afeefa.jpg';
import Aarif from '@/public/Team/Aarif.jpg';
import Praharshini from '@/public/Team/Praharshini.jpg';
import Sreemaa from '@/public/Team/Sreemaa.jpg';
import Mohan from '@/public/Team/Mohan.jpg';
import Pavan from '@/public/Team/Pavan.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    icon: typeof Github | typeof Linkedin | typeof Instagram;
    url: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Omkar Palika',
    role: 'Chapter Lead',
    bio: 'Dynamic leader with 2+ years of experience in coding, app development, and building collaborative tech communities.',
    imageUrl: Omkar,
    socialLinks: [
      { icon: Linkedin, url: 'https://linkedin.com/in/omkar-palika' },
      { icon: Instagram, url: 'https://www.instagram.com/b.tech____boy' }
    ]
  },
  {
    id: '2',
    name: 'Navaneeth Dubbaka',
    role: 'Chapter Vice-Lead',
    bio: 'Innovative Python Developer with expertise in Machine Learning, Data Science, and driving impactful tech projects.',
    imageUrl: '',
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/navaneeth-dubbaka-77ab06297' },
      { icon: Instagram, url: 'https://www.instagram.com/navaneeth.dubbaka' }
    ]
  },
  {
    id: '3',
    name: 'Aarif Mohammad',
    role: 'Events Lead',
    bio: 'Proactive organizer with a strong foundation in software development and a passion for creating engaging tech events.',
    imageUrl: Aarif,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/aarif-mohammad-159394325' },
      { icon: Instagram, url: 'https://www.instagram.com/_aesthetic__asm' }
    ]
  },
  {
    id: '4',
    name: 'Afeefa Shahzadi',
    role: 'Technical Lead',
    bio: 'Dedicated technologist specializing in AI, web development, and crafting user-focused technical solutions.',
    imageUrl: Afeefa,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/afeefa-shahzadi-b42849302' },
      { icon: Instagram, url: 'https://www.instagram.com/afeefa.shahzadi' }
    ]
  },
  {
    id: '5',
    name: 'Sreemaa Penta',
    role: 'Marketing Lead',
    bio: 'Strategic marketer with expertise in digital campaigns, community building, brand management, and enhancing online presence.',
    imageUrl: Sreemaa,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/sreemaapenta' },
      { icon: Instagram, url: 'https://www.instagram.com/taurusszzz____' }
    ]
  },
  {
    id: '6',
    name: 'K L Praharshini',
    role: 'Public Relations & Outreach Lead',
    bio: 'Skilled communicator with a passion for building networks and driving impactful outreach initiatives to foster collaboration.',
    imageUrl: Praharshini,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/likitha-praharshini-karanam-72a255256' }
    ]
  },
  {
    id: '7',
    name: 'Mohan Nimmakayala',
    role: 'Design & Branding Lead',
    bio: 'Visionary designer with a passion for game aesthetics, branding, and creating visually compelling experiences.',
    imageUrl: Mohan,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/nimmakayala-mohan-54639a258' },
      { icon: Instagram, url: 'https://www.instagram.com/mohan._1210' }
    ]
  },
  {
    id: '8',
    name: 'Pavan Kumar K',
    role: 'Social Media Lead',
    bio: 'Dedicated technologist specializing in AI, web development, and crafting user-focused technical solutions.',
    imageUrl: Pavan,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/pavan-kumar-korupolu-b048bb2a0' },
      { icon: Instagram, url: 'https://www.instagram.com/the_only_pummy' }
    ]
  }
];