'use client';

import { MouseEvent } from 'react';
import Link from 'next/link';
import { LINKS } from '@/database';
import { LinkType } from '@/types';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const isDevelopmentMode = process.env.NEXT_PUBLIC_NODE_ENV;

const IconLinks = () => {
  const handleClick = async (e: MouseEvent<HTMLAnchorElement>, link: LinkType) => {
    if (isDevelopmentMode === 'development') e.preventDefault();

    const response = await fetch('/api/clicks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        link,
        time: new Date().toISOString(),
      }),
    });
  };

  return (
    <div className='mt-4 flex flex-row items-center justify-center gap-4'>
      {LINKS.map(({ id, name, Icon, link }) => (
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
