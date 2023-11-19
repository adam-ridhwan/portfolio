'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import { ICON_LINKS } from '@/database';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const IconLinks = () => {
  const handleClick = async (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    // e.preventDefault();
    const response = await fetch('/api/clicks', {
      method: 'POST',
    });

    // console.log(await response.json());
  };

  return (
    <div className='mt-4 flex flex-row items-center justify-center gap-4'>
      {ICON_LINKS.map(({ id, name, Icon, link }) => (
        <TooltipProvider key={id}>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Link href={link} target='_blank' onClick={e => handleClick(e, id)}>
                <span className='sr-only'>{name}</span>
                <Icon className='transition-all hover:scale-110' />
              </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={5}>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default IconLinks;
