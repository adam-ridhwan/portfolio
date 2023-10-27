import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const Folder = ({ className }: Props) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        className={cn('h-5 w-5', className)}
        style={{ fill: 'rgba(34, 211, 238, 1)' }}
      >
        <path d='M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z'></path>
      </svg>
    </>
  );
};
