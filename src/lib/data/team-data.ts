import { Github, Linkedin, Instagram } from "lucide-react";
import Omkar from "@/public/Team/Omkar.jpg";
// import Navaneeth from '@/public/Team/Navaneeth.jpg';
import Afeefa from "@/public/Team/Afeefa.jpg";
import Aarif from "@/public/Team/Aarif.jpg";
import Praharshini from "@/public/Team/Praharshini.jpg";
import Sreemaa from "@/public/Team/Sreemaa.jpg";
import Mohan from "@/public/Team/Mohan.jpg";
import Pavan from "@/public/Team/Pavan.jpg";
import Principal from "@/public/Team/Principal.jpg";
import IT from "@/public/Team/IT.jpg";
import Faculty from "@/public/Team/Faculty.jpg";
import CSE from "@/public/Team/CSE.jpeg";
import CSMD from "@/public/Team/CSMD.jpg";
import ECE from "@/public/Team/ECE.jpeg";
import EEE from "@/public/Team/EEE.jpg";
import ME from "@/public/Team/ME.jpg";
import CHE from "@/public/Team/CHE.jpg";
import CE from "@/public/Team/CE.jpg";
import HA from "@/public/Team/HA.jpg";

export interface TeamMember {
  id: string;
  name: string;
  designation: string | "";
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks: {
    icon: typeof Github | typeof Linkedin | typeof Instagram;
    url: string;
  }[];
}

export const advisoryBoard: TeamMember[] = [
  {
    id: "1",
    name: "Prof. K. Sri Ramakrishna",
    designation:
      "B.Tech, M.S, Ph.D, FIETE, FIE (India), Life Member in BMESI, ISOI, ISTE",
    role: "Patron",
    bio: "Dynamic academic administrator dedicated to fostering a culture of learning, research, and holistic student development at ANITS.",
    imageUrl: Principal,
    socialLinks: [],
  },
  {
    id: "2",
    name: "Dr. V. Rajya Lakshmi",
    designation: "M.E, Ph.D, MIEEE, MIETE, MIE",
    role: "Advisor",
    bio: "Accomplished leader with a rich background in educational policy & curriculum development, dedicated to driving academic excellence & fostering continuous learning.",
    imageUrl: HA,
    socialLinks: [],
  },
  {
    id: "3",
    name: "Dr. G. Srinivas",
    designation: "Ph.D",
    role: "Advisor",
    bio: "Distinguished researcher and academician specializing in Computer Science, committed to nurturing innovation & empowering students with technical expertise.",
    imageUrl: CSE,
    socialLinks: [],
  },
  {
    id: "4",
    name: "Dr. K Selvani Deepthi",
    designation: "M.Tech, Ph.D",
    role: "Advisor",
    bio: "Visionary educator and researcher in AI & DS, dedicated to integrating emerging technologies into industry-ready solutions.",
    imageUrl: CSMD,
    socialLinks: [],
  },
  {
    id: "5",
    name: "Dr. B. Jagadeesh",
    designation: "B.E., M.E., Ph.D, FIE, FIETE, MIEEE",
    role: "Advisor",
    bio: "Experienced academician and researcher in ECE, with a focus on developing practical, technology-driven solutions.",
    imageUrl: ECE,
    socialLinks: [],
  },
  {
    id: "6",
    name: "Dr. J. Vijaya Kumar",
    designation: "M.Tech(NITB), Ph.D(NITW)",
    role: "Advisor",
    bio: "Renowned academic and innovator in EEE, fostering a balance of theoretical knowledge and practical application in systems.",
    imageUrl: EEE,
    socialLinks: [],
  },
  {
    id: "7",
    name: "Dr. Srikanth Rachakonda",
    designation: "M.Tech, Ph.D",
    role: "Advisor",
    bio: "Dedicated researcher and educator in Chemical Engineering, passionate about advancing sustainable practices, innovative solutions, and empowering future engineers.",
    imageUrl: CHE,
    socialLinks: [],
  },
  {
    id: "8",
    name: "Dr. B. N. D. Narasinga Rao",
    designation: "M.E.,Ph.D, FIGS, FIE, MISTE",
    role: "Advisor",
    bio: "Expert in Civil Engineering and infrastructure development, committed to delivering innovative solutions for sustainable construction.",
    imageUrl: CE,
    socialLinks: [],
  },
  {
    id: "9",
    name: "Dr. B. Naga Raju",
    designation: "B.E, M.Tech, M.E., Ph.D, MISTE, MIE, MSAE",
    role: "Advisor",
    bio: "Experienced mechanical engineer and educator, focusing on developing efficient systems and advancing research in mechanical innovation.",
    imageUrl: ME,
    socialLinks: [],
  },
];

export const mentorsPanel: TeamMember[] = [
  {
    id: "2",
    name: "Prof. M. Rekha Sundari",
    designation: "M.Tech, Ph.D",
    role: "GFG SC Convenor",
    bio: "Esteemed educator and dedicated coordinator with a passion for orchestrating impactful academic events and fostering meaningful collaborations.",
    imageUrl: IT,
    socialLinks: [],
  },
  {
    id: "3",
    name: "Dr. B. Kiran Kumar",
    designation: "M.Tech, PhD",
    role: "Faculty Advisor",
    bio: "Inspiring mentor and experienced faculty member, playing a pivotal role in bridging academia and practical industry learning experiences for student growth.",
    imageUrl: Faculty,
    socialLinks: [],
  },
];

export const coreTeam: TeamMember[] = [
  {
    id: "1",
    name: "Omkar Palika",
    designation: "",
    role: "Chapter Lead",
    bio: "Dynamic leader with 2+ years of experience in coding, app development, and building collaborative tech communities.",
    imageUrl: Omkar,
    socialLinks: [
      { icon: Linkedin, url: "https://linkedin.com/in/omkar-palika" },
      { icon: Instagram, url: "https://www.instagram.com/b.tech____boy" },
    ],
  },
  {
    id: "2",
    name: "Navaneeth Dubbaka",
    designation: "",
    role: "Chapter Vice-Lead",
    bio: "Innovative Python Developer with expertise in Machine Learning, Data Science, and driving impactful tech projects.",
    imageUrl: "",
    socialLinks: [
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/navaneeth-dubbaka-77ab06297",
      },
      { icon: Instagram, url: "https://www.instagram.com/navaneeth.dubbaka" },
    ],
  },
  {
    id: "3",
    name: "Aarif Mohammad",
    designation: "",
    role: "Events Lead",
    bio: "Proactive organizer with a strong foundation in software development and a passion for creating engaging tech events.",
    imageUrl: Aarif,
    socialLinks: [
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/aarif-mohammad-159394325",
      },
      { icon: Instagram, url: "https://www.instagram.com/_aesthetic__asm" },
    ],
  },
  {
    id: "4",
    name: "Afeefa Shahzadi",
    designation: "",
    role: "Technical Lead",
    bio: "Dedicated technologist specializing in AI, web development, Android development, and crafting user-focused technical solutions.",
    imageUrl: Afeefa,
    socialLinks: [
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/afeefa-shahzadi-b42849302",
      },
      { icon: Instagram, url: "https://www.instagram.com/afeefa.shahzadi" },
    ],
  },
  {
    id: "5",
    name: "Sreemaa Penta",
    designation: "",
    role: "Marketing Lead",
    bio: "Strategic marketer with expertise in digital campaigns, community building, brand management, and enhancing online presence.",
    imageUrl: Sreemaa,
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/in/sreemaapenta" },
      { icon: Instagram, url: "https://www.instagram.com/taurusszzz____" },
    ],
  },
  {
    id: "6",
    name: "K L Praharshini",
    designation: "",
    role: "PR & O Lead",
    bio: "Skilled communicator with a passion for building networks and driving impactful outreach initiatives to foster collaboration.",
    imageUrl: Praharshini,
    socialLinks: [
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/likitha-praharshini-karanam-72a255256",
      },
    ],
  },
  {
    id: "7",
    name: "Mohan Nimmakayala",
    designation: "",
    role: "Design & Branding Lead",
    bio: "Visionary designer with a passion for game aesthetics, branding, and creating visually compelling experiences.",
    imageUrl: Mohan,
    socialLinks: [
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/nimmakayala-mohan-54639a258",
      },
      { icon: Instagram, url: "https://www.instagram.com/mohan._1210" },
    ],
  },
  {
    id: "8",
    name: "Pavan Kumar K",
    designation: "",
    role: "Social Media Lead",
    bio: "Creative Full Stack Developer blending UI/UX design, AI, and cutting-edge technologies to deliver innovative user experiences.",
    imageUrl: Pavan,
    socialLinks: [
      {
        icon: Linkedin,
        url: "https://www.linkedin.com/in/pavan-kumar-korupolu-b048bb2a0",
      },
      { icon: Instagram, url: "https://www.instagram.com/the_only_pummy" },
    ],
  },
];