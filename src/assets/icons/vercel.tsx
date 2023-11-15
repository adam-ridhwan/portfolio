import { cn } from '@/lib/utils';

export const Vercel = ({ className }: SVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={cn('h-10 w-10 fill-secondary-foreground', className)}
    >
      <path d='M24 22.525H0l12-21.05 12 21.05z' />
    </svg>
  );
};
