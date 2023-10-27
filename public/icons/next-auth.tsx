import Image from 'next/image';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const NextAuth = ({ className }: Props) => {
  return (
    <>
      <Image
        src='/images/next-auth.png'
        alt='next auth'
        width={327}
        height={361}
        className={cn('h-10 w-10', className)}
      />
    </>
  );
};
