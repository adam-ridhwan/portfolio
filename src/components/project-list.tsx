'use client';

import { useState } from 'react';
import { PROJECTS } from '@/database';

import { ProjectItem } from '@/components/project-item';
import { H2 } from '@/components/typography';

export const ProjectList = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className='flex flex-col'>
      <H2 className='md:mb-2 md:px-4'>PROJECTS</H2>

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
  );
};
