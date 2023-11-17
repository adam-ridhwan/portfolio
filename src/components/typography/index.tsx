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

const H2 = ({ className, children }: Props) => {
  return (
    <h2
      className={cn(
        `${spaceGrotesk.className} mb-4 text-2xl font-semibold tracking-wide text-secondary-foreground`,
        className
      )}
    >
      {children}
    </h2>
  );
};

const H3 = ({ className, children }: Props) => {
  return <h3 className={cn(`text-lg font-light text-secondary-foreground`, className)}>{children}</h3>;
};

const P = ({ className, children }: Props) => {
  return <p className={cn('mb-4 text-lg tracking-tight text-muted-foreground', className)}>{children}</p>;
};

export { H1, H2, H3, P };
