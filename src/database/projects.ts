import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: '5',
    name: 'PixelCraft',
    description: `An image generator platform with a prompt input that allows users can generate any image based on the input.`,
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
    type: 'E-commerce',
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
