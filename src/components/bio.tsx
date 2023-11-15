import Image from 'next/image';
import { GitHub, LinkedIn, Mail, Resume } from '@/assets';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { H1, H2 } from '@/components/typography';

export const Bio = () => {
  return (
    <section className='relative pt-32  md:pt-48'>
      <div className='absolute left-0 top-0 -translate-x-[17rem] -translate-y-12 md:top-1/2 md:-translate-x-[19rem] md:-translate-y-20'>
        <div className='relative aspect-square w-96 rotate-[60deg]'>
          <Image
            priority
            src='/glass-element-25.png'
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
            src='/glass-element-26.png'
            alt='glass'
            height={500}
            width={500}
            className='object-cover'
          />
        </div>
      </div>

      <div className='relative flex flex-col items-center gap-4'>
        <H1 className='text-blue4 sm:text-6xl'>Adam Ridhwan</H1>

        <H2 className='m-0 font-mono font-medium tracking-tighter'>Fullstack Software Engineer</H2>

        <div className='mt-4 flex flex-row items-center justify-center gap-4'>
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <a href='mailto:adamridhwan.1@gmail.com'>
                  <span className='sr-only'>Contact</span>
                  <Mail />
                </a>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                <p>Contact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <a
                  href='https://github.com/adam-ridhwan'
                  target='_blank'
                  className='flex h-8 w-8 items-center justify-center'
                >
                  <span className='sr-only'>GitHub</span>
                  <GitHub />
                </a>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <a
                  href='https://www.linkedin.com/in/adam-ridhwan/'
                  target='_blank'
                  className='flex h-8 w-8 items-center justify-center'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <LinkedIn />
                </a>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <a
                  href='/src/assets/resume.pdf'
                  target='_blank'
                  className='flex h-8 w-8 items-center justify-center'
                >
                  <span className='sr-only'>Resume</span>
                  <Resume />
                </a>
              </TooltipTrigger>
              <TooltipContent sideOffset={5}>
                <p>Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};
