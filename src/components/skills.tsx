import {
  CSS,
  Jotai,
  MongoDB,
  NextJS,
  PostgreSQL,
  Radix,
  React,
  Tailwind,
  TypeScript,
  Zod,
  Zustand,
} from '@/assets';

import { Badge } from '@/components/ui/badge';
import { H2, P } from '@/components/typography';

const TECHNOLOGIES = [
  { Icon: NextJS, label: 'Next.js' },
  { Icon: React, label: 'React' },
  { Icon: TypeScript, label: 'TypeScript' },
  { Icon: Tailwind, label: 'Tailwind' },
  { Icon: CSS, label: 'CSS' },
  { Icon: Radix, label: 'Radix UI' },
  { Icon: MongoDB, label: 'MongoDB' },
  { Icon: PostgreSQL, label: 'Postgresql' },
  { Icon: Zod, label: 'Zod' },
  { Icon: Zustand, label: 'Zustand' },
  { Icon: Jotai, label: 'Jotai' },
];

export const Skills = () => {
  return (
    <section className='flex flex-col'>
      <H2>SKILLS</H2>

      <P>
        Not to give a generic answer, but I truly think the most suitable technology for a task is the one
        that fits best.
      </P>

      <P>
        However, there are certain technologies I particularly enjoy using. My choice tech stack for personal
        projects is primarily:
      </P>

      <div className='mt-2 flex flex-wrap justify-center gap-2 text-center'>
        {TECHNOLOGIES.map(({ Icon, label }) => (
          <Badge key={label} variant='secondary' className='text-md gap-1 font-mono font-normal'>
            <Icon className='h-4 w-4' />
            <span>{label}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
