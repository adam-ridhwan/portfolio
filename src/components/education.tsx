import Image from 'next/image';
import { React } from '@/assets/icons';

import { H2, H3, P } from '@/components/typography';

const Education = () => {
  return (
    <section className='md:px-4'>
      <H2>EDUCATION</H2>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2 rounded-lg md:flex-row'>
          <P className='m-0 min-w-[180px] whitespace-nowrap font-light text-muted-foreground/80'>
            2021 - 2023
          </P>

          <div className='flex flex-row items-center gap-2'>
            <div className='relative aspect-square h-12'>
              <Image src='/bu.jpeg' alt='bu' fill className='rounded-lg object-cover' />
            </div>

            <div>
              <H3 className='whitespace-nowrap group-hover/item:text-primary'>Boston University</H3>
              <P className='m-0'>Master of Science, Software Development</P>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 rounded-lg md:flex-row'>
          <P className='m-0 min-w-[180px] whitespace-nowrap font-light text-muted-foreground/80'>
            2017 - 2021
          </P>

          <div className='flex flex-row items-center gap-2'>
            <div className='relative aspect-square h-12'>
              <Image src='/bu.jpeg' alt='bu' fill className='rounded-lg object-cover' />
            </div>

            <div>
              <H3 className='whitespace-nowrap group-hover/item:text-primary'>Berklee College of Music</H3>
              <P className='m-0'>Bachelor of Music, Music Business</P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
