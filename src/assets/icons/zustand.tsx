import Image from 'next/image';
import { SVGProps } from '@/types';

import { cn } from '@/lib/utils';

export const Zustand = ({ className }: SVGProps) => {
  return (
    <>
      <Image
        src='/zustand.png'
        alt='next auth'
        width={100}
        height={100}
        className={cn('h-10 w-10 scale-[1]', className)}
      />
    </>
  );
};
