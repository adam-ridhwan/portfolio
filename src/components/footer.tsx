import { NextJS } from '../../public/icons/nextjs';
import { Tailwind } from '../../public/icons/tailwind';

export const Footer = () => {
  return (
    <footer className='container my-10 flex flex-col items-center justify-center text-sm text-muted-foreground'>
      <span>Made by Adam Ridhwan © {new Date().getFullYear()}</span>
      <div className='flex flex-row items-center gap-1'>
        <span>Built with</span>
        <NextJS className='h-3 w-3' />
        <b>Next.js</b>
        <span>and</span>
        <Tailwind className='h-3 w-3' />
        <b>Tailwind</b>
      </div>
    </footer>
  );
};
