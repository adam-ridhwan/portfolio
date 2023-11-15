import { NextJS, Tailwind, Vercel } from '@/assets';

export const Footer = () => {
  return (
    <footer className='container my-20 flex flex-col items-center justify-center text-sm text-muted-foreground'>
      <span>Made by Adam Ridhwan © {new Date().getFullYear()}</span>
      <div className='flex flex-row items-center gap-1'>
        <span>Built with</span>
        <NextJS className='h-3 w-3' />
        <b>Next.js,</b>
        <Tailwind className='h-3 w-3' />
        <b>Tailwind</b>
        <span>and</span>
        <Vercel className='h-3 w-3' />
        <b>Vercel</b>
      </div>
    </footer>
  );
};
