import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const Link = ({ className }: Props) => {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className={cn('h-5 w-5', className)}>
        <path
          fillRule='evenodd'
          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
          clipRule='evenodd'
        />
      </svg>
    </>
  );
};
