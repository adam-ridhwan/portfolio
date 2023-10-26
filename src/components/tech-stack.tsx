'use client';

import { ReactNode } from 'react';
import { JSXElement } from '@babel/types';

import { cn } from '@/lib/utils';
import Orbit from '@/components/orbit';

import { CSS } from '../../public/icons/css';
import { GitHub } from '../../public/icons/github';
import { MongoDB } from '../../public/icons/mongodb';
import { NextJS } from '../../public/icons/nextjs';
import { React } from '../../public/icons/react';
import { Tailwind } from '../../public/icons/tailwind';
import { TypeScript } from '../../public/icons/typescript';
import { Zod } from '../../public/icons/zod';

type LogoProps = {
  children: ReactNode;
  className?: string;
};

export const TechStack = () => {
  const icons = [
    { icon: <NextJS />, label: 'Next.js' },
    { icon: <React />, label: 'React' },
    { icon: <TypeScript />, label: 'TypeScript' },
    { icon: <CSS />, label: 'CSS' },
    { icon: <Tailwind />, label: 'Tailwind' },
    { icon: <MongoDB />, label: 'MongoDB' },
    { icon: <Zod />, label: 'Zod' },
    { icon: <GitHub className='h-10 w-10' />, label: 'Github' },
  ];

  const TechStackContainer = ({ children, className }: LogoProps) => (
    <div className={cn('absolute flex w-max flex-col items-center', className)}>{children}</div>
  );

  const P = ({ children }: LogoProps) => (
    <p className={cn('font-medium text-secondary-foreground')}>{children}</p>
  );

  return (
    <>
      <section>
        <div className='mb-4 flex flex-col gap-2'>
          <span className='text-2xl font-semibold text-secondary-foreground'>Tech stack</span>
          <span className='text-lg font-light text-muted-foreground'>
            What I use to turn ideas into reality:
          </span>
        </div>

        <div className='relative flex flex-col gap-8 md:flex-row'>
          <div className='relative h-96 w-full rounded-[30px] bg-blue2 md:flex-[2]'>
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

            <TechStackContainer className='left-1/2 top-1/2 -translate-x-2 translate-y-2 rounded-full bg-background p-4 shadow-2xl'>
              <TypeScript />
            </TechStackContainer>

            <TechStackContainer className='left-1/2 top-1/2 -translate-y-3/4 rounded-full bg-background p-4 shadow-2xl'>
              <React className='h-12 w-12' />
            </TechStackContainer>

            <TechStackContainer className='right-1/2 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-background p-5 shadow-2xl'>
              <NextJS className='h-20 w-20' />
            </TechStackContainer>

            <TechStackContainer className='left-[10%] top-[18%] '>
              <CSS className='h-16 w-16' />
            </TechStackContainer>

            <TechStackContainer className='left-[45%] top-[10%] '>
              <Tailwind className='h-16 w-16' />
            </TechStackContainer>

            <TechStackContainer className='right-[10%] top-[20%] '>
              <MongoDB className='h-16 w-16' />
            </TechStackContainer>

            <TechStackContainer className='bottom-[10%] right-[15%] '>
              <Zod className='h-16 w-16' />
            </TechStackContainer>

            <TechStackContainer className='bottom-[10%] left-[15%] '>
              <GitHub className='h-16 w-16' />
            </TechStackContainer>
          </div>

          <div className='flex-1 flex-col md:flex'>
            <div className='flex flex-col gap-4'>
              <span className='text-xl font-medium text-secondary-foreground'>
                I use a combination of modern technologies to build efficient and scalable applications.
              </span>

              <ul className='grid grid-cols-2 gap-2 text-center'>
                <li className='text-lg font-light text-secondary-foreground'>Next.js</li>
                <li className='text-lg font-light text-secondary-foreground'>MongoDB</li>

                <li className='text-lg font-light text-secondary-foreground'>React</li>
                <li className='text-lg font-light text-secondary-foreground'>PosgresSQL</li>

                <li className='text-lg font-light text-secondary-foreground'>Tailwind</li>
                <li className='text-lg font-light text-secondary-foreground'>CSS</li>

                <li className='text-lg font-light text-secondary-foreground'>Zod</li>
                <li className='text-lg font-light text-secondary-foreground'>GitHub</li>
              </ul>

              <span className='mt-2 w-full text-right'>...and many more</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
