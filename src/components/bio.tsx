import Image from 'next/image';

import IconLinks from '@/components/icon-links';
import { H1, H2 } from '@/components/typography';

export const Bio = () => (
  <section className='relative pt-32 md:pt-48'>
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
      <H2 className='m-0 text-2xl font-medium tracking-tighter'>Fullstack Software Engineer</H2>

      <IconLinks />
    </div>
  </section>
);
