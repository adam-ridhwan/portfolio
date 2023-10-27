'use client';

import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Orbit from '@/components/orbit';

import { CSS } from '../../public/icons/css';
import { GitHub } from '../../public/icons/github';
import { Jotai } from '../../public/icons/jotai';
import { MongoDB } from '../../public/icons/mongodb';
import { NextAuth } from '../../public/icons/next-auth';
import { NextJS } from '../../public/icons/nextjs';
import { Radix } from '../../public/icons/radix';
import { React } from '../../public/icons/react';
import { Tailwind } from '../../public/icons/tailwind';
import { TypeScript } from '../../public/icons/typescript';
import { Vercel } from '../../public/icons/vercel';
import { Zod } from '../../public/icons/zod';
import { Zustand } from '../../public/icons/zustand';

type LogoProps = {
  children: ReactNode;
  className?: string;
};

export const TechILove = () => {
  const PRIMARY_TECHNOLOGIES = [
    { Icon: NextJS, label: 'Next.js' },
    { Icon: React, label: 'React' },
    { Icon: TypeScript, label: 'TypeScript' },
    { Icon: Tailwind, label: 'Tailwind' },
    { Icon: CSS, label: 'CSS' },
    { Icon: Radix, label: 'Radix UI' },
    { Icon: MongoDB, label: 'MongoDB' },
    { Icon: Zod, label: 'Zod' },
    { Icon: Zustand, label: 'Zustand' },
    { Icon: Jotai, label: 'Jotai' },
  ];

  const SECONDARY_TECHNOLOGIES = [
    { Icon: NextJS, label: 'Angular' },
    { Icon: React, label: 'SCSS' },
    { Icon: TypeScript, label: 'Node.js' },
    { Icon: Tailwind, label: 'Express' },
    { Icon: CSS, label: 'Express' },
    { Icon: Radix, label: 'Java' },
    { Icon: MongoDB, label: 'Python' },
    { Icon: Zod, label: 'PostgresSQL' },
    { Icon: Zustand, label: 'MySQL' },
    { Icon: Zustand, label: 'Firebase' },
    { Icon: Jotai, label: 'Prisma' },
  ];

  const TechContainer = ({ children, className }: LogoProps) => (
    <div className={cn('absolute flex w-max flex-col items-center', className)}>{children}</div>
  );

  return (
    <>
      <section>
        <div className='mb-4 flex flex-col gap-2'>
          <span className='text-2xl font-semibold text-secondary-foreground'>Tech I Love</span>
          <span className='text-lg font-light text-muted-foreground'>
            What I use to turn ideas into reality:
          </span>
        </div>

        <div className='relative flex flex-col gap-4'>
          <div className='relative h-96 w-full rounded-[30px] bg-blue2 '>
            <Orbit
              height='h-[135px]'
              color='bg-slate9'
              animate='animate-spin-infinite-reverse'
              className='right-1/2 top-1/2 -translate-y-[68px] translate-x-[24px]'
            />

            <Orbit
              height='h-[96px]'
              color='bg-cyan6'
              animate='animate-spin-infinite'
              className='left-1/2 top-1/2 -translate-x-[8px] -translate-y-[68px]'
            />

            <Orbit
              height='h-[87px]'
              color='bg-blue9'
              animate='animate-spin-infinite'
              className='left-1/2 top-1/2 -translate-x-[16px] translate-y-[0px]'
            />

            <TechContainer className='left-1/2 top-1/2 -translate-x-2 translate-y-2 rounded-full bg-background p-4 shadow-2xl'>
              <TypeScript />
            </TechContainer>

            <TechContainer className='left-1/2 top-1/2 -translate-y-3/4 rounded-full bg-background p-4 shadow-2xl'>
              <React className='h-12 w-12' />
            </TechContainer>

            <TechContainer className='right-1/2 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background p-5 shadow-2xl'>
              <NextJS className='h-20 w-20' />
            </TechContainer>

            <TechContainer className='left-[10%] top-[18%] '>
              <CSS className='h-16 w-16' />
            </TechContainer>

            <TechContainer className='left-[45%] top-[10%] '>
              <Tailwind className='h-16 w-16' />
            </TechContainer>

            <TechContainer className='right-[10%] top-[20%] '>
              <MongoDB className='h-16 w-16' />
            </TechContainer>

            <TechContainer className='bottom-[10%] right-[15%] '>
              <Zod className='h-16 w-16' />
            </TechContainer>

            <TechContainer className='bottom-[10%] left-[15%] '>
              <GitHub className='h-16 w-16' />
            </TechContainer>

            <TechContainer className='bottom-[5%] left-[50%] '>
              <Vercel className='h-12 w-12' />
            </TechContainer>
          </div>

          <div className='flex-1 flex-col md:flex'>
            <div className='flex flex-col gap-2'>
              <span className='text-lg font-normal text-muted-foreground'>
                Not to give a generic answer, but I truly think the most suitable technology for a task is the
                one that fits best.
              </span>

              <span className='text-lg font-normal text-muted-foreground'>
                However, there are certain technologies I particularly enjoy using. My choice tech stack for
                personal projects is primarily:
              </span>

              <div className='my-4 flex flex-wrap justify-center gap-2 text-center'>
                {PRIMARY_TECHNOLOGIES.map(({ Icon, label }) => (
                  <Badge
                    key={label}
                    variant='secondary'
                    className='md:text-md gap-1 font-mono text-sm font-normal'
                  >
                    <Icon className='h-4 w-4' />
                    <span>{label}</span>
                  </Badge>
                ))}
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
