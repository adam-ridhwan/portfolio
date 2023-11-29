import Image from 'next/image';
import { Airtable, ArrowLink, Firebase, JavaScript, React, Redux, SCSS } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { Badge, TechnologyBadge } from '@/components/ui/badge';
import { H2, H3, P } from '@/components/typography';

export const WorkExperience = () => (
  <section>
    <H2 className='md:mb-2 md:px-4'>WORK EXPERIENCE</H2>
    <MobileLayout />
    <DesktopLayout />
  </section>
);

const MobileLayout = () => (
  <div className='flex flex-col gap-1 md:hidden'>
    <P className='m-0 whitespace-nowrap font-light text-muted-foreground/80'>May 2023 - Oct 2023</P>

    <a
      href='https://geaux.tv/'
      target='_blank'
      className='group/item flex w-max flex-row items-center gap-1 rounded-lg md:hidden'
    >
      <H3 className='whitespace-nowrap group-hover/item:text-primary'>Fullstack Engineer - Geaux Network</H3>

      <ArrowLink
        className={cn(
          'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
          'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
        )}
      />
    </a>

    <P className='m-0'>
      Led a team of engineers to develop TV streaming app. Collaborated closely with COO to ship new features
      and improve site usability and performance.
    </P>

    <div className='mt-1 flex flex-row flex-wrap items-center gap-2'>
      <TechnologyBadge>
        <React />
        React
      </TechnologyBadge>
      <TechnologyBadge>
        <Redux />
        Redux
      </TechnologyBadge>
      <TechnologyBadge>
        <JavaScript />
        JavaScript
      </TechnologyBadge>
      <TechnologyBadge>
        <SCSS />
        SCSS
      </TechnologyBadge>
      <TechnologyBadge>
        <Firebase />
        Firebase
      </TechnologyBadge>
      <TechnologyBadge>
        <Airtable />
        Airtable
      </TechnologyBadge>
    </div>
  </div>
);

const DesktopLayout = () => (
  <a
    href='https://geaux.tv/'
    target='_blank'
    className='group/item hidden flex-row gap-2 rounded-lg p-4 hover:bg-muted/60 md:flex'
  >
    <P className='m-0 min-w-[180px] whitespace-nowrap font-light text-muted-foreground/80'>
      May 2023 - Oct 2023
    </P>

    <div className='flex flex-col'>
      <div className='flex flex-row items-center gap-1'>
        <H3 className='whitespace-nowrap group-hover/item:text-primary'>
          Fullstack Engineer - Geaux Network
        </H3>

        <ArrowLink
          className={cn(
            'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
            'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
          )}
        />
      </div>

      <P className='mt-2'>
        Led a team of engineers to develop TV streaming app. Collaborated closely with COO to ship new
        features and improve site usability and performance.
      </P>

      <div className='flex flex-row flex-wrap items-center gap-2'>
        <TechnologyBadge>
          <React />
          React
        </TechnologyBadge>
        <TechnologyBadge>
          <Redux />
          Redux
        </TechnologyBadge>
        <TechnologyBadge>
          <JavaScript />
          JavaScript
        </TechnologyBadge>
        <TechnologyBadge>
          <SCSS />
          SCSS
        </TechnologyBadge>
        <TechnologyBadge>
          <Firebase />
          Firebase
        </TechnologyBadge>
        <TechnologyBadge>
          <Airtable />
          Airtable
        </TechnologyBadge>
      </div>
    </div>
  </a>
);
