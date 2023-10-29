import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@uidotdev/usehooks';

import { cn } from '@/lib/utils';
import { Project } from '@/components/project-list';

import { Link } from '../../public/icons/link';

type Props = {
  project: Project;
  hoveredItem: string | null;
  setHoveredItem: Dispatch<SetStateAction<string | null>>;
};

export const ProjectItem = ({
  project: { id, name, link, image, description },
  hoveredItem,
  setHoveredItem,
}: Props) => {
  const { width } = useWindowSize();

  const handleMouseEnter = (id: string) => setHoveredItem(id);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <li
      className={cn(
        'group/item rounded-lg transition-all sm:hover:bg-muted/70',
        width! > 640 && hoveredItem && hoveredItem !== id && 'opacity-50'
      )}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <a
        key={name}
        href={`${link}`}
        target='_blank'
        className='flex flex-col gap-2 sm:flex-row sm:gap-8 sm:p-4'
      >
        <div className='flex flex-row items-center gap-2 sm:hidden'>
          <span className='text-xl font-medium text-secondary-foreground'>{name}</span>
        </div>

        <div className='relative aspect-video w-full sm:min-w-[250px] sm:max-w-[250px] '>
          <Image
            priority
            src={`${image}`}
            alt='thumbnail'
            fill
            sizes='(min-width: 640px) 250px, 100vw'
            className='rounded-md object-cover'
          />
        </div>

        <div>
          <div className='hidden flex-row items-center gap-1 sm:flex'>
            <span className='whitespace-nowrap text-xl font-medium text-secondary-foreground group-hover/item:text-primary'>
              {name}
            </span>
            <Link
              className={cn(
                'h-5 w-5 -translate-x-1 translate-y-1 transition-all',
                'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
              )}
            />
          </div>
          <span className='text-md font-light text-muted-foreground'>{description}</span>
        </div>
      </a>
    </li>
  );
};
