import Image from 'next/image';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const Zustand = ({ className }: Props) => {
  return (
    <>
      <Image
        src='/images/zustand.png'
        alt='next auth'
        width={100}
        height={100}
        className={cn('h-10 w-10 scale-[1]', className)}
      />
    </>
  );
};
