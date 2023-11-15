import { ReactNode } from 'react';
import { spaceGrotesk } from '@/assets/fonts';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: ReactNode;
};

const H1 = ({ className, children }: Props) => {
  return (
    <h1 className={cn(`${spaceGrotesk.className} text-5xl tracking-[-0.3rem]`, className)}>{children}</h1>
  );
};

export default H1;
