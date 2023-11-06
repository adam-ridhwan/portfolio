import Image from 'next/image';

import H1 from '@/components/typography/h1';
import H2 from '@/components/typography/h2';
import P from '@/components/typography/p';

import { GitHub } from '../../public/icons/github';
import { LinkedIn } from '../../public/icons/linkedin';
import { Mail } from '../../public/icons/mail';
import { React } from '../../public/icons/react';
import { Resume } from '../../public/icons/resume';

export const Bio = () => {
  return (
    <>
      <section className='relative pt-20  md:pt-16'>
        <div className='absolute left-0 top-0 -translate-x-[17rem] -translate-y-12 md:top-1/2 md:-translate-x-[19rem] md:-translate-y-20'>
          <div className='relative aspect-square w-96 rotate-[60deg]'>
            <Image
              priority
              src='/images/glass-element-25.png'
              alt='glass'
              height={500}
              width={500}
              className='object-cover'
            />
          </div>
        </div>

        <div className='absolute bottom-0 right-0 translate-x-64 translate-y-52 md:top-1/2 md:-translate-y-20 md:translate-x-[19rem]'>
          <div className='relative aspect-square w-96 -rotate-[160deg]'>
            <Image
              priority
              src='/images/glass-element-26.png'
              alt='glass'
              height={500}
              width={500}
              className='object-cover'
            />
          </div>
        </div>

        <div className='relative flex flex-col items-center gap-4'>
          <H1>Adam Ridhwan</H1>

          <H2 className='m-0 font-medium'>Fullstack software engineer</H2>

          <P className='m-0 text-center'>I build things for the web. </P>

          <div className='mt-4 flex flex-row items-center justify-center gap-4'>
            <a href='mailto:adamridhwan.1@gmail.com' className='h-8 w-8'>
              <span className='sr-only'>Contact</span>
              <Mail />
            </a>

            <a href='https://github.com/adam-ridhwan' target='_blank' className='h-8 w-8'>
              <span className='sr-only'>LinkedIn</span>
              <GitHub />
            </a>

            <a href='https://www.linkedin.com/in/adam-ridhwan/' target='_blank' className='h-8 w-8'>
              <span className='sr-only'>GitHub</span>
              <LinkedIn />
            </a>

            <a
              href='https://docs.google.com/document/d/1qGoBMpqtCnwT3wELMZ21kWM2lrArJ6G6l2-8Tcj-sOk/edit?usp=sharing'
              target='_blank'
              className='h-8 w-8'
            >
              <span className='sr-only'>Resume</span>
              <Resume />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
