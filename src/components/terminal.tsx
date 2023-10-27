import { BiSolidFolder } from 'react-icons/bi';

import Orbit from '@/components/orbit';

import { Folder } from '../../public/icons/folder';

export const Terminal = () => {
  return (
    <>
      <section className='relative'>
        <Orbit
          height='h-20'
          color='bg-red10'
          animate='animate-spin-slow'
          className='right-0 top-0 translate-x-5 translate-y-4'
        />

        <div className='relative mb-4 flex flex-col gap-2'>
          <span className='text-2xl font-semibold text-secondary-foreground'>About Me</span>
          <span className='text-lg font-light text-muted-foreground'>Terminal insights:</span>
        </div>

        <div className='relative rounded-lg shadow-lg'>
          <div className='absolute mt-2 flex flex-row items-center gap-2 pl-2'>
            <div className='aspect-square w-3 rounded-full bg-red-500' />
            <div className='aspect-square w-3 rounded-full bg-yellow-400' />
            <div className='aspect-square w-3 rounded-full bg-green-500' />
          </div>

          <div className='flex h-[30px] flex-row items-center justify-center gap-2 rounded-t-lg bg-gray-200 pl-3'>
            <Folder />
            <span className='font-semibold text-secondary-foreground'>adam</span>
          </div>

          <div className='flex flex-col gap-4 rounded-b-lg bg-gray-100 p-4'>
            <div className='flex flex-col font-mono'>
              <span>&gt; Current location</span>
              <span className='text-orange-500'>{`"Boston, MA"`}</span>
            </div>

            <div className='flex flex-col font-mono'>
              <span>&gt; Contact info</span>
              <div className='text-orange-500'>
                [&quot;
                <a
                  href='mailto:adamridhwan.1@gmail.com'
                  className='text-cyan-500 underline hover:text-cyan-700'
                >
                  adamridhwan.1@gmail.com
                </a>
                &quot;, &quot;
                <a
                  href='https://www.linkedin.com/in/adam-ridhwan/'
                  target='_blank'
                  className='text-cyan-500 underline hover:text-cyan-700'
                >
                  LinkedIn
                </a>
                &quot;, &quot;
                <a
                  href='https://github.com/adam-ridhwan'
                  target='_blank'
                  className='text-cyan-500 underline hover:text-cyan-700'
                >
                  GitHub
                </a>
                &quot;]
              </div>
            </div>

            <div className='flex flex-col font-mono'>
              <span>&gt; Resume</span>

              <div className='text-orange-500'>
                &quot;
                <a
                  href='https://docs.google.com/document/d/1qGoBMpqtCnwT3wELMZ21kWM2lrArJ6G6l2-8Tcj-sOk/edit?usp=sharing'
                  target='_blank'
                  className='text-cyan-500 underline hover:text-cyan-700'
                >
                  adamridhwan.pdf
                </a>
                &quot;
              </div>
            </div>

            <div className='flex flex-col font-mono'>
              <span>&gt; Education</span>
              <span className='text-orange-500'>{`"MS Software Development - Boston University"`}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
