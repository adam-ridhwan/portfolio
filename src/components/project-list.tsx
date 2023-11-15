'use client';

import { useState } from 'react';

import { ProjectItem } from '@/components/project-item';
import { H2 } from '@/components/typography';

export type Project = {
  id: string;
  name: string;
  description: string;
  type: string;
  image: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    id: 'Vd8cMAzNdok0UY9ymyr6',
    name: 'Pondero',
    description: `A blogging platform where users can post articles. Features include the ability for readers to like, comment on, save, and delete posts.`,
    type: 'Blog',
    image: '/pondero.png',
    link: 'https://pondero-sigma.vercel.app',
  },
  {
    id: 'KGd8xQbf1tEYVikWENos',
    name: 'Flair',
    description: `An e-commerce website with a dynamic shopping cart, product filtering, a custom image gallery, and a seamless Stripe checkout process.`,
    type: 'E-commerce',
    image: '/flair.png',
    link: 'https://flair.vercel.app',
  },
  {
    id: '5zxPyrLDJVnnosU96FUG',
    name: 'Quizzzy',
    description: `An interactive quiz platform designed to make quizzes easy. It offers a seamless experience for educators, students, and trivia enthusiasts alike.`,
    type: 'Quiz',
    image: '/quizzzy.png',
    link: 'https://quizzzy-mu.vercel.app/',
  },
  {
    id: '4MT5C6ENf9FpdHFvXf2M',
    name: 'Geaux TV',
    description: `A TV streaming platform offering a library of live tv shows. Features include a custom video player, url routing, and a responsive design.`,
    type: 'TV streaming',
    image: '/geaux.png',
    link: 'https://geaux-tv.vercel.app/tv/465',
  },
];

export const ProjectList = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <section className='flex flex-col'>
        <H2>PROJECTS</H2>

        <ol className='group flex flex-col gap-8 md:gap-2'>
          {PROJECTS.map(project => (
            <ProjectItem
              key={project.name}
              project={project}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}
        </ol>
      </section>
    </>
  );
};
