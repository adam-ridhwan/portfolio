import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Link } from '@/assets/icons/link';
import { Project } from '@/types';
import { useWindowSize } from '@uidotdev/usehooks';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { P } from '@/components/typography';

type Props = {
  project: Project;
  hoveredItem: string | null;
  setHoveredItem: Dispatch<SetStateAction<string | null>>;
};

export const ProjectItem = ({
  project: { id, name, link, image, description, type },
  hoveredItem,
  setHoveredItem,
}: Props) => {
  const { width } = useWindowSize();

  const handleMouseEnter = (id: string) => setHoveredItem(id);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <li
      className={cn(
        'group/item rounded-lg transition-all md:hover:bg-muted/70',
        width! > 768 && hoveredItem && hoveredItem !== id && 'opacity-50'
      )}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <a
        key={name}
        href={`${link}`}
        target='_blank'
        className='flex flex-col gap-2 md:flex-row md:gap-8 md:p-4'
      >
        <div className='flex flex-row items-center gap-2 md:hidden'>
          <span className='text-xl font-medium text-secondary-foreground'>{name}</span>
          <Badge className={cn('text-[#93370c]', 'badge-gradient')}>{type}</Badge>
        </div>

        <div className='relative aspect-video w-full md:min-w-[250px] md:max-w-[250px] '>
          <Image
            priority
            src={image}
            alt='thumbnail'
            fill
            sizes='(min-width: 640px) 250px, 100vw'
            className='rounded-md object-cover'
          />
        </div>

        <div>
          <div className='hidden flex-row items-center gap-1 md:flex'>
            <span className='whitespace-nowrap text-xl font-medium text-secondary-foreground group-hover/item:text-primary'>
              {name}
            </span>
            <Link
              className={cn(
                'h-5 w-5 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
                'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
              )}
            />
            <Badge className={cn('text-[#93370c]', 'badge-gradient')}>{type}</Badge>
          </div>
          <P>{description}</P>
        </div>
      </a>
    </li>
  );
};
