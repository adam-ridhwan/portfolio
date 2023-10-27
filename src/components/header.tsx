import { GitHub } from '../../public/icons/github';
import { LinkedIn } from '../../public/icons/linkedin';
import { React } from '../../public/icons/react';

export const Header = () => {
  return (
    <>
      <header className='container fixed left-[50%] top-0 z-50 flex h-[55px] w-full translate-x-[-50%] flex-row items-center justify-between bg-background p-4'>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-muted-foreground'>Adam Ridhwan</span>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <a href='https://www.linkedin.com/in/adam-ridhwan/' target='_blank'>
            <span className='sr-only'>LinkedIn</span>
            <LinkedIn />
          </a>

          <a href='https://github.com/adam-ridhwan' target='_blank'>
            <span className='sr-only'>GitHub</span>
            <GitHub />
          </a>

          <a
            href='mailto:adamridhwan.1@gmail.com'
            className='inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
          >
            Contact
          </a>
        </div>
      </header>
    </>
  );
};
