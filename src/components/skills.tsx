import { React } from '@/assets';

import { TECHNOLOGIES } from '@/database/skills';
import { Badge } from '@/components/ui/badge';
import { H2, P } from '@/components/typography';

export const Skills = () => {
  return (
    <section className='flex flex-col'>
      <H2>SKILLS</H2>

      <P>
        Not to give a generic answer, but I truly think the most suitable technology for a task is the one
        that fits best. However, there are certain technologies I particularly enjoy using. My choice tech
        stack for personal projects is primarily:
      </P>

      <div className='mt-2 flex flex-wrap justify-center gap-2 text-center'>
        {TECHNOLOGIES.map(({ Icon, label }) => (
          <Badge key={label} variant='secondary' className='text-md gap-1 font-mono font-normal ring-1'>
            <Icon className='h-5 w-5' />
            <span>{label}</span>
          </Badge>
        ))}
      </div>
    </section>
  );
};
