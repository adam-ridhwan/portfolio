import Image from 'next/image';
import { ArrowLink } from '@/assets/icons';
import { Project } from '@/types';
import { useWindowSize } from '@uidotdev/usehooks';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { H3, P } from '@/components/typography';

type Props = {
  project: Project;
};

export const ProjectItem = ({ project: { name, link, image, description, type } }: Props) => {
  const { width } = useWindowSize();

  return (
    <li
      className={cn(
        'group/item rounded-lg transition-opacity md:hover:bg-muted/60',
        width! > 768 && 'group-hover:opacity-50 group-hover:hover:opacity-100'
      )}
    >
      <a
        key={name}
        href={`${link}`}
        target='_blank'
        className='flex flex-col gap-2 md:flex-row md:gap-8 md:p-4'
      >
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
          <div className='flex flex-row items-center gap-1'>
            <H3 className='whitespace-nowrap group-hover/item:text-primary'>{name}</H3>
            <ArrowLink
              className={cn(
                'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
                'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
              )}
            />
            <Badge className={cn('badge-gradient hover:none text-[#93370c]')}>{type}</Badge>
          </div>
          <P>{description}</P>
        </div>
      </a>
    </li>
  );
};
