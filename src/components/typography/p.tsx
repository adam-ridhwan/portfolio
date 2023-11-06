import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: ReactNode;
};

const P = ({ className, children }: Props) => {
  return <p className={cn('mb-4 text-lg tracking-tight text-muted-foreground', className)}>{children}</p>;
};

export default P;
