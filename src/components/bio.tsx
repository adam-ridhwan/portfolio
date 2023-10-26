import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import Orbit from '@/components/orbit';

export const Bio = () => {
  return (
    <>
      <section className='relative pt-10 md:mt-16'>
        <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
          <Avatar className='ring-offset h-32 w-32 border-4 border-blue-400 ring-4 ring-blue-200'>
            <Image
              src='/images/me.jpeg'
              alt='me'
              priority
              width={500}
              height={500}
              className='h-full w-full translate-y-4 scale-[1.3]'
            />
          </Avatar>

          <div className='flex flex-col gap-2'>
            <span className='text-3xl font-bold text-secondary-foreground md:text-4xl'>
              Hello, I&apos;m Adam 👋
            </span>

            <div className='flex flex-col items-center text-lg font-light text-muted-foreground md:items-start md:text-xl'>
              <span>I&apos;m a software engineer 🖥️</span>
              <span>avid badminton player 🏸</span>
              <span>& keyboard enthusiast ⌨️🪛</span>
            </div>
          </div>
        </div>

        <Orbit
          height='h-40'
          color='bg-orange11'
          animate='animate-spin-slow'
          className={cn('left-0 top-0 -translate-x-28 translate-y-4', 'md:translate-y-28')}
        />

        <Orbit
          height='h-32'
          color='bg-blue12'
          animate='animate-spin-slow'
          className={cn(
            'overflow right-0 top-0 -translate-y-4 translate-x-16',
            `md:left-1/2 md:top-0 md:translate-x-7 md:translate-y-0`
          )}
        />

        <Orbit
          height='h-20'
          color='bg-blue12'
          animate='animate-spin-slow'
          className={cn('bottom-0 left-0 -translate-x-8 translate-y-8 md:hidden')}
        />
      </section>
    </>
  );
};
