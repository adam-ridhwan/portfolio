import {
  CSS,
  GitHub,
  JavaScript,
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
import { Project, SVGProps } from '@/types';

export const ICON_LINKS = [
  {
    id: '1',
    name: 'Contact',
    Icon: Mail,
    link: 'mailto:adamridhwan.1@gmail.com',
    handle: 'adamridhwan.1@gmail.com',
  },
  { id: '2', name: 'GitHub', Icon: GitHub, link: 'https://github.com/adam-ridhwan', handle: '@adam-ridhwan' },
  {
    id: '3',
    name: 'LinkedIn',
    Icon: LinkedIn,
    link: 'https://www.linkedin.com/in/adam-ridhwan/',
    handle: '@adam-ridhwan',
  },
  { id: '4', name: 'Resume', Icon: Resume, link: '/resume.pdf', handle: 'resume.pdf' },
];

export const TECHNOLOGIES = [
  { Icon: NextJS, label: 'Next.js' },
  { Icon: React, label: 'React' },
  { Icon: TypeScript, label: 'TypeScript' },
  { Icon: Tailwind, label: 'Tailwind' },
  // { Icon: CSS, label: 'CSS' },
  // { Icon: Radix, label: 'Radix UI' },
  { Icon: MongoDB, label: 'MongoDB' },
  // { Icon: PostgreSQL, label: 'Postgresql' },
  { Icon: Zod, label: 'Zod' },
  // { Icon: Zustand, label: 'Zustand' },
  // { Icon: Jotai, label: 'Jotai' },
];

export const PROJECTS: Project[] = [
  {
    id: '5',
    name: 'PixelCraft',
    description: `An image generator platform with an input that allows users to generate any image based on the prompt.`,
    type: 'AI image generator',
    image: '/pixel-craft.png',
    link: 'https://pixel-craft-rust.vercel.app/',
  },
  {
    id: '1',
    name: 'Pondero',
    description: `A blogging platform where users can post articles. Features include the ability for readers to like, comment on, save, and delete posts.`,
    type: 'Blog',
    image: '/pondero.png',
    link: 'https://pondero-sigma.vercel.app',
  },
  {
    id: '2',
    name: 'Flair',
    description: `An e-commerce website with a dynamic shopping cart, product filtering, a custom image gallery, and a seamless Stripe checkout process.`,
    type: 'Ecommerce',
    image: '/flair.png',
    link: 'https://flair.vercel.app',
  },
  {
    id: '3',
    name: 'Quizzzy',
    description: `An interactive quiz platform designed to make quizzes easy. It offers a seamless experience for educators, students, and trivia enthusiasts alike.`,
    type: 'Quiz',
    image: '/quizzzy.png',
    link: 'https://quizzzy-mu.vercel.app/',
  },
  {
    id: '4',
    name: 'Geaux TV',
    description: `A TV streaming platform offering a library of live tv shows. Features include a custom video player, url routing, and a responsive design.`,
    type: 'TV streaming',
    image: '/geaux.png',
    link: 'https://geaux-tv.vercel.app/tv/465',
  },
];
