import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

export const Navbar = () => {
  return (
    <>
      <header className='container fixed left-[50%] top-0 z-50 flex h-[55px] w-full translate-x-[-50%] flex-row items-center justify-between bg-background p-4'>
        <div className='flex flex-row items-center gap-2'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className='text-muted-foreground'>Adam Ridhwan</span>
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
          <a href='https://www.linkedin.com/in/adam-ridhwan/' target='_blank'>
            <span className='sr-only'>LinkedIn</span>
            <LinkedInLogoIcon className='h-7 w-7' />
          </a>
        </div>
      </header>
    </>
  );
};
