import { ArrowLink } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { H2, H3, P } from '@/components/typography';

export const WorkExperience = () => (
  <section>
    <H2>WORK EXPERIENCE</H2>

    <div className='flex flex-col rounded-lg md:flex-row md:gap-8'>
      <P className='m-0 whitespace-nowrap font-light text-muted-foreground/80'>May 2023 - Oct 2023</P>

      <div className='flex flex-col'>
        <a href='https://geaux.tv/' target='_blank' className='flex flex-col'>
          <div className='group/item item flex flex-row items-center gap-1'>
            <H3 className='whitespace-nowrap group-hover/item:hover:text-primary'>
              Fullstack Engineer - Geaux Network
            </H3>

            <ArrowLink
              className={cn(
                'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
                'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
              )}
            />
          </div>
        </a>

        <P className='m-0'>
          Developed and styled a responsive TV streaming app. Collaborated closely with COO to lead a team of
          interns.
        </P>
      </div>
    </div>
  </section>
);
