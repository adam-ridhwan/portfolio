import Image from 'next/image';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const Jotai = ({ className }: Props) => {
  return (
    <>
      <Image
        src='/images/jotai.png'
        alt='next auth'
        width={100}
        height={100}
        className={cn('h-10 w-10', className)}
      />
    </>
  );
};
