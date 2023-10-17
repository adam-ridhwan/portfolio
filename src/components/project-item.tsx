import Image from 'next/image';

import { Project } from '@/components/project-list';

type Props = {
  project: Project;
};

export const ProjectItem = ({ project: { name, link, image, description } }: Props) => {
  return (
    <a key={name} href={`${link}`} target='_blank' className='md: mb-8 flex flex-col gap-4 md:flex-row'>
      <div className='relative aspect-video w-full md:min-w-[350px] md:max-w-[350px]'>
        <Image
          priority
          src={`${image}`}
          alt='thumbnail'
          fill
          sizes='(min-width: 768px) 350px, 100vw'
          className='rounded-md object-cover'
        />
      </div>

      <div className='mb-4 flex flex-col'>
        <span className='text-xl font-medium text-secondary-foreground'>{name}</span>
        <span className='text-lg font-light text-muted-foreground'>{description}</span>
      </div>
    </a>
  );
};
