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
  designation: string | '';
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    icon: typeof Github | typeof Linkedin | typeof Instagram;
    url: string;
  }[];
}

export const coreTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Omkar Palika',
    designation: '',
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
    designation: '',
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
    designation: '',
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
    designation: '',
    role: 'Technical Lead',
    bio: 'Dedicated technologist specializing in AI, web development, Android development, and crafting user-focused technical solutions.',
    imageUrl: Afeefa,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/afeefa-shahzadi-b42849302' },
      { icon: Instagram, url: 'https://www.instagram.com/afeefa.shahzadi' }
    ]
  },
  {
    id: '5',
    name: 'Sreemaa Penta',
    designation: '',
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
    designation: '',
    role: 'PR & O Lead',
    bio: 'Skilled communicator with a passion for building networks and driving impactful outreach initiatives to foster collaboration.',
    imageUrl: Praharshini,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/likitha-praharshini-karanam-72a255256' }
    ]
  },
  {
    id: '7',
    name: 'Mohan Nimmakayala',
    designation: '',
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
    designation: '',
    role: 'Social Media Lead',
    bio: 'Creative Full Stack Developer blending UI/UX design, AI, and cutting-edge technologies to deliver innovative user experiences.',
    imageUrl: Pavan,
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/pavan-kumar-korupolu-b048bb2a0' },
      { icon: Instagram, url: 'https://www.instagram.com/the_only_pummy' }
    ]
  }
];

export const advisoryBoard: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. K. B. R. Prasad',
    designation: 'Chairman',
    role: 'Chairman, ANITS',
    bio: 'Visionary leader and academic pioneer, guiding ANITS with a steadfast commitment to excellence in education and innovation.',
    imageUrl: '',
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/sreemaapenta' },
      { icon: Instagram, url: 'https://www.instagram.com/taurusszzz____' },
    ],
  },
  {
    id: '2',
    name: 'Prof. K. Sri Ramakrishna',
    designation: 'Principal',
    role: 'Principal, ANITS',
    bio: 'Dynamic academic administrator dedicated to fostering a culture of learning, research, and holistic student development at ANITS.',
    imageUrl: '',
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/sreemaapenta' },
      { icon: Instagram, url: 'https://www.instagram.com/taurusszzz____' },
    ],
  },
  {
    id: '3',
    name: 'Dr. M. Rekha Sundari',
    designation: 'Convenor',
    role: 'Convenor',
    bio: 'Esteemed educator and coordinator with a passion for orchestrating impactful events and nurturing academic collaborations.',
    imageUrl: '',
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/sreemaapenta' },
      { icon: Instagram, url: 'https://www.instagram.com/taurusszzz____' },
    ],
  },
  {
    id: '4',
    name: 'Mr. B. Kiran Kumar',
    designation: 'M.Tech, PhD',
    role: 'Faculty Coordinator',
    bio: 'Inspiring mentor and dedicated faculty member, playing a pivotal role in bridging academia and practical learning experiences.',
    imageUrl: '',
    socialLinks: [
      { icon: Linkedin, url: 'https://www.linkedin.com/in/sreemaapenta' },
      { icon: Instagram, url: 'https://www.instagram.com/taurusszzz____' },
    ],
  },
];
