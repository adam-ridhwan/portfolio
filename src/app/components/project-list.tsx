'use client';

import { useState } from 'react';
import { PROJECTS } from '@/database';

import { H2 } from '@/components/typography';
import { ProjectItem } from '@/app/components/project-item';

export const ProjectList = () => {
  return (
    <section className='flex flex-col'>
      <H2 className='md:mb-2 md:px-4'>PROJECTS</H2>

      <ol className='group flex flex-col gap-8 md:gap-2'>
        {PROJECTS.map(project => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </ol>
    </section>
  );
};
