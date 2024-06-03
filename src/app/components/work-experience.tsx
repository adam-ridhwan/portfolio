import { ArrowLink, Dart, Firebase, Flutter, JavaScript, React, Redux, TypeScript } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { TechnologyBadge } from '@/components/ui/badge';
import { H2, H3, P } from '@/components/typography';

const WORK_EXPERIENCE = [
  {
    date: 'June 2024 - Present',
    title: 'Software Engineer I - Ikigai Labs',
    description: 'Building frontend for Generative AI.',
    link: 'https://www.ikigailabs.io/',
    technologies: [
      { Icon: React, label: 'React' },
      { Icon: Redux, label: 'Redux' },
      { Icon: TypeScript, label: 'TypeScript' },
    ],
  },

  {
    date: 'Dec 2023 - Mar 2024',
    title: 'Software Engineer - Approachable Geek',
    description: 'Built apps people love.',
    link: 'https://approachablegeek.com/',
    technologies: [
      { Icon: Flutter, label: 'Flutter' },
      { Icon: Dart, label: 'Dart' },
      { Icon: TypeScript, label: 'TypeScript' },
      { Icon: Firebase, label: 'Firebase' },
    ],
  },
  {
    date: 'Apr 2023 - Nov 2023',
    title: 'Software Engineer - Geaux Network',
    description: 'Led a team of engineers to develop TV streaming app.',
    link: 'https://geaux.tv/',
    technologies: [
      { Icon: React, label: 'React' },
      { Icon: Redux, label: 'Redux' },
      { Icon: JavaScript, label: 'JavaScript' },
      { Icon: Firebase, label: 'Firebase' },
    ],
  },
];

export const WorkExperience = () => (
  <section>
    <H2 className='md:mb-2 md:px-4'>WORK EXPERIENCE</H2>
    <MobileLayout />
    <DesktopLayout />
  </section>
);

const MobileLayout = () => (
  <div className='flex flex-col gap-6'>
    {WORK_EXPERIENCE.map(({ date, title, description, technologies }, index) => (
      <div key={index} className='flex flex-col gap-1 md:hidden'>
        <P className='m-0 whitespace-nowrap font-light text-muted-foreground/80'>{date}</P>

        <a
          href='https://geaux.tv/'
          target='_blank'
          className='group/item flex w-max flex-row items-center gap-1 rounded-lg md:hidden'
        >
          <H3 className='whitespace-nowrap group-hover/item:text-primary'>{title}</H3>

          <ArrowLink
            className={cn(
              'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
              'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
            )}
          />
        </a>

        <P className='m-0'>{description}</P>

        <div className='mt-1 flex flex-row flex-wrap items-center gap-2'>
          {technologies.map(({ Icon, label }) => (
            <TechnologyBadge key={label}>
              <Icon />
              {label}
            </TechnologyBadge>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const DesktopLayout = () => (
  <>
    {WORK_EXPERIENCE.map(({ date, title, description, link, technologies }, index) => (
      <a
        key={index}
        href={link}
        target='_blank'
        className='group/item hidden flex-row gap-2 rounded-lg p-4 hover:bg-muted/60 md:flex'
      >
        <P className='m-0 min-w-[180px] whitespace-nowrap font-light text-muted-foreground/80'>{date}</P>

        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-1'>
            <H3 className='whitespace-nowrap group-hover/item:text-primary'>{title}</H3>

            <ArrowLink
              className={cn(
                'h-4 w-4 -translate-x-1 translate-y-1 fill-secondary-foreground transition-all',
                'group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:fill-primary'
              )}
            />
          </div>

          <P className='mt-2'>{description}</P>

          <div className='flex flex-row flex-wrap items-center gap-2'>
            {technologies.map(({ Icon, label }) => (
              <TechnologyBadge key={label}>
                <Icon />
                {label}
              </TechnologyBadge>
            ))}
          </div>
        </div>
      </a>
    ))}
  </>
);
