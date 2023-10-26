import Image from 'next/image';

import { GitHub } from '../../public/icons/github';
import { LinkedIn } from '../../public/icons/linkedin';

export const Header = () => {
  return (
    <>
      <header className='container fixed left-[50%] top-0 z-50 flex h-[55px] w-full translate-x-[-50%] flex-row items-center justify-between bg-background p-4'>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-muted-foreground'>Adam Ridhwan</span>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <a href='mailto:adamridhwan.1@gmail.com'>
            <span className='sr-only'>Mail</span>
            <Image src='/icons/mail.svg' alt='mail' width={500} height={500} className='h-7 w-7' />
          </a>

          <a href='https://www.linkedin.com/in/adam-ridhwan/' target='_blank'>
            <span className='sr-only'>LinkedIn</span>
            <LinkedIn />
          </a>

          <a href='https://github.com/adam-ridhwan' target='_blank'>
            <span className='sr-only'>GitHub</span>
            <GitHub />
          </a>
        </div>
      </header>
    </>
  );
};
