import { React } from '@/assets/icons';
import { TECHNOLOGIES } from '@/database';

import { TechnologyBadge } from '@/components/ui/badge';
import { H2, H3, P } from '@/components/typography';

export const Skills = () => (
  <section className='flex flex-col md:px-4'>
    <H2>SKILLS</H2>

    <P className='mb-2 md:mb-4'>
      Not to give a generic answer, but I truly think the most suitable technology for a task is the one that
      fits best. However, there are certain technologies I particularly enjoy using. My choice tech stack for
      personal projects is primarily:
    </P>

    {/*<div className='flex flex-wrap gap-2 text-center'>*/}
    {/*  {TECHNOLOGIES.map(({ Icon, label }) => (*/}
    {/*    <TechnologyBadge key={label}>*/}
    {/*      <Icon />*/}
    {/*      <span>{label}</span>*/}
    {/*    </TechnologyBadge>*/}
    {/*  ))}*/}
    {/*</div>*/}

    <div className='grid grid-cols-2 gap-4'>
      {TECHNOLOGIES.map(({ Icon, label }) => (
        <div
          key={label}
          className='flex flex-col items-center gap-1 rounded-lg border border-muted-foreground/20 py-6'
        >
          <Icon className='h-10 w-10' />
          <H3 className='m-0'>{label}</H3>
        </div>
      ))}
    </div>
  </section>
);
