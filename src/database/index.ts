import {
  CSS,
  GitHub,
  Jotai,
  LinkedIn,
  Mail,
  MongoDB,
  NextJS,
  PostgreSQL,
  Radix,
  React,
  Resume,
  Tailwind,
  TypeScript,
  Zod,
  Zustand,
} from '@/assets/icons';
import { Link, LINKS_ENUM, Project } from '@/types';

const { EMAIL, GITHUB, LINKEDIN, RESUME } = LINKS_ENUM;

export const LINKS: Link[] = [
  {
    id: EMAIL,
    name: 'Email',
    Icon: Mail,
    link: 'mailto:adamridhwan.1@gmail.com',
    handle: 'adamridhwan.1@gmail.com',
  },
  {
    id: GITHUB,
    name: 'GitHub',
    Icon: GitHub,
    link: 'https://github.com/adam-ridhwan',
    handle: '@adam-ridhwan',
  },
  {
    id: LINKEDIN,
    name: 'LinkedIn',
    Icon: LinkedIn,
    link: 'https://www.linkedin.com/in/adam-ridhwan/',
    handle: '@adam-ridhwan',
  },
  { id: RESUME, name: 'Resume', Icon: Resume, link: '/resume.pdf', handle: 'resume.pdf' },
];

export const TECHNOLOGIES = [
  { Icon: NextJS, label: 'Next' },
  { Icon: React, label: 'React' },
  { Icon: TypeScript, label: 'TypeScript' },
  { Icon: Tailwind, label: 'Tailwind' },
  { Icon: MongoDB, label: 'MongoDB' },
  { Icon: Zod, label: 'Zod' },
];

export const PROJECTS: Project[] = [
  {
    id: '5',
    name: 'PixelCraft',
    description: `An image generator platform with an input that allows users to generate any image based on the prompt.`,
    type: 'AI image generator',
    image: '/pixel-craft.png',
    link: 'https://github.com/adam-ridhwan/pixel-craft',
  },
  {
    id: '1',
    name: 'Pondero',
    description: `A blogging platform where users can post articles. Features include the ability for readers to like, comment on, save, and delete posts.`,
    type: 'Blog',
    image: '/pondero.png',
    link: 'https://github.com/adam-ridhwan/pondero',
  },
  {
    id: '2',
    name: 'Flair',
    description: `An e-commerce website with a dynamic shopping cart, product filtering, a custom image gallery, and a seamless Stripe checkout process.`,
    type: 'Ecommerce',
    image: '/flair.png',
    link: 'https://github.com/adam-ridhwan/flair',
  },
  {
    id: '3',
    name: 'Quizzzy',
    description: `An interactive quiz platform designed to make quizzes easy. It offers a seamless experience for educators, students, and trivia enthusiasts alike.`,
    type: 'Quiz',
    image: '/quizzzy.png',
    link: 'https://github.com/adam-ridhwan/quizzzy/',
  },
];
