import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: ReactNode;
};

const H2 = ({ className, children }: Props) => {
  return (
    <h2 className={cn('mb-4 text-2xl font-semibold tracking-wide text-secondary-foreground', className)}>
      {children}
    </h2>
  );
};

export default H2;
