import { EnvelopeIcon } from '@heroicons/react/24/solid';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export const Bio = () => {
  return (
    <>
      <div className='mb-8 px-4 pt-10'>
        <div className='mb-5'>
          <span className='text-3xl font-bold text-secondary-foreground'>Hello, I&apos;m Adam</span>
        </div>

        <div className='mb-3 flex flex-col font-light text-muted-foreground'>
          <span>I&apos;m a software engineer 🖥️</span>
          <span>avid badminton player 🏸</span>
          <span>& keyboard enthusiast ⌨️🪛</span>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <a href='mailto:adamridhwan.1@gmail.com'>
            <span className='sr-only'>Mail</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              fill='#000000'
              className='h-7 w-7 scale-[1.125]'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
            </svg>
          </a>
          <a href='https://github.com/adam-ridhwan' target='_blank'>
            <span className='sr-only'>GitHub</span>
            <GitHubLogoIcon className='h-7 w-7' />
          </a>
          <a href='https://www.linkedin.com/feed/' target='_blank'>
            <span className='sr-only'>LinkedIn</span>
            <LinkedInLogoIcon className='h-7 w-7' />
          </a>
        </div>
      </div>
    </>
  );
};
