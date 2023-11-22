import { NextJS, Tailwind, Vercel } from '@/assets/icons';

export const Footer = () => (
  <footer className='container mb-20 mt-44 flex flex-col items-center justify-center text-sm text-muted-foreground'>
    <div className='flex flex-row items-center gap-1'>
      <span>Built with</span>
      <NextJS className='h-3 w-3' />
      <span>Next.js,</span>
      <Tailwind className='h-3 w-3' />
      <span>Tailwind</span>
      <span>and</span>
      <Vercel className='h-3 w-3' />
      <span>Vercel</span>
    </div>
  </footer>
);
