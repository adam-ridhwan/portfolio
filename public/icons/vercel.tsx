import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const Vercel = ({ className }: Props) => {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className={cn('h-10 w-10', className)}>
        <path d='M24 22.525H0l12-21.05 12 21.05z' />
      </svg>
    </>
  );
};
