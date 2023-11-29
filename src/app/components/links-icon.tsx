'use client';

import { LINKS } from '@/database';

import { updateLinkClicks } from '@/lib/updateLinkClicks';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const LinksIcon = () => (
  <div className='mt-4 flex flex-row items-center justify-center gap-4'>
    {LINKS.map(({ id, name, Icon, link }) => (
      <TooltipProvider key={id}>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <a href={link} target='_blank' onClick={e => updateLinkClicks(e, id)}>
              <span className='sr-only'>{name}</span>
              <Icon className='transition-all hover:scale-110' />
            </a>
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ))}
  </div>
);

export default LinksIcon;
