'use client';

import { ArrowLink } from '@/assets/icons';
import { LINKS } from '@/database';

import { updateLinkClicks } from '@/lib/updateLinkClicks';
import { cn } from '@/lib/utils';
import { H2, H3, P } from '@/components/typography';

const Links = () => (
  <section className='flex flex-col md:pl-4'>
    <H2>LINKS</H2>

    <div className='flex flex-col gap-6'>
      {LINKS.map(({ id, name, link, handle }) => (
        <div key={id} className='flex flex-row items-center gap-8'>
          <div className='w-20'>
            <P className='text-md m-0'>{name}</P>
          </div>

          <a
            href={link}
            target='_blank'
            className='group/item flex flex-row items-center gap-1'
            onClick={e => updateLinkClicks(e, id)}
          >
            <H3 className='text-md whitespace-nowrap group-hover/item:text-primary'>{handle}</H3>

            <ArrowLink
              className={cn(
                'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
                'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
              )}
            />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Links;
