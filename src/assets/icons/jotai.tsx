import Image from 'next/image';
import { SVGProps } from '@/types';

import { cn } from '@/lib/utils';

export const Jotai = ({ className }: SVGProps) => {
  return (
    <Image src='/jotai.png' alt='next auth' width={100} height={100} className={cn('h-10 w-10', className)} />
  );
};
