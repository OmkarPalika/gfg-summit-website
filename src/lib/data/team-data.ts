import { Github, Linkedin, Instagram } from 'lucide-react';
import Sreemaa from '@/public/Team/Sreemaa.jpg';

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
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
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
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
<<<<<<< HEAD
      { icon: Linkedin, url: 'https://www.linkedin.com/in/afeefa-shahzadi-b42849302' },
      { icon: Instagram, url: 'https://www.instagram.com/afeefa.shahzadi' }
=======
      { icon: Linkedin, url: 'https://linkedin.com' },
      { icon: Instagram, url: 'https://twitter.com' }
>>>>>>> 43ba04828c27708a16c2b8950f14de1dd989abc3
    ]
  },
  {
    id: '5',
    name: 'Sreemaa Penta',
    role: 'Marketing Lead',
    bio: 'Strategic marketer with expertise in digital campaigns, community building, brand management, and enhancing online presence.',
    imageUrl: Sreemaa,
    socialLinks: [
<<<<<<< HEAD
      { icon: Linkedin, url: 'https://www.linkedin.com/in/sreemaapenta' },
      { icon: Instagram, url: 'https://www.instagram.com/taurusszzz____' }
=======
      { icon: Linkedin, url: 'https://linkedin.com' },
      { icon: Instagram, url: 'https://twitter.com' }
>>>>>>> 43ba04828c27708a16c2b8950f14de1dd989abc3
    ]
  },
  {
    id: '6',
    name: 'K L Praharshini',
    role: 'Public Relations & Outreach Lead',
    bio: 'Skilled communicator with a passion for building networks and driving impactful outreach initiatives to foster collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
<<<<<<< HEAD
      { icon: Linkedin, url: 'https://www.linkedin.com/in/likitha-praharshini-karanam-72a255256' }
=======
      { icon: Linkedin, url: 'https://linkedin.com' },
      { icon: Instagram, url: 'https://twitter.com' }
>>>>>>> 43ba04828c27708a16c2b8950f14de1dd989abc3
    ]
  },
  {
    id: '7',
    name: 'Mohan Nimmakayala',
    role: 'Design & Branding Lead',
    bio: 'Visionary designer with a passion for game aesthetics, branding, and creating visually compelling experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
<<<<<<< HEAD
      { icon: Linkedin, url: 'https://www.linkedin.com/in/nimmakayala-mohan-54639a258' },
      { icon: Instagram, url: 'https://www.instagram.com/mohan._1210' }
=======
      { icon: Linkedin, url: 'https://linkedin.com' },
      { icon: Instagram, url: 'https://twitter.com' }
>>>>>>> 43ba04828c27708a16c2b8950f14de1dd989abc3
    ]
  },
  {
    id: '8',
    name: 'Pavan Kumar K',
    role: 'Social Media Lead',
    bio: 'Dedicated technologist specializing in AI, web development, and crafting user-focused technical solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    socialLinks: [
<<<<<<< HEAD
      { icon: Linkedin, url: 'https://www.linkedin.com/in/pavan-kumar-korupolu-b048bb2a0' },
      { icon: Instagram, url: 'https://www.instagram.com/the_only_pummy' }
=======
      { icon: Linkedin, url: 'https://linkedin.com' },
      { icon: Instagram, url: 'https://twitter.com' }
>>>>>>> 43ba04828c27708a16c2b8950f14de1dd989abc3
    ]
  }
];