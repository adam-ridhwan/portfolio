import { cn } from '@/lib/utils';

export const Radix = ({ className }: SVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      viewBox='0 0 24 24'
      className={cn('h-10 w-10', className)}
    >
      <path
        fill='#ffffff'
        d='M11.52 24a7.68 7.68 0 0 1-7.68-7.68 7.68 7.68 0 0 1 7.68-7.68V24Zm0-24v7.68H3.84V0h7.68Zm4.8 7.68a3.84 3.84 0 1 1 0-7.68 3.84 3.84 0 0 1 0 7.68Z'
      />
    </svg>
  );
};
