import { ReactNode } from 'react';

import { H2, P } from '@/components/typography';

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className='text-md font-normal text-secondary-foreground'>{children}</span>
);

export const About = () => (
  <section className='md:px-4'>
    <H2>ABOUT</H2>

    <P>
      Hi, I&apos;m <Highlight>Adam</Highlight> 👋, a <Highlight>Software Engineer</Highlight> based in{' '}
      <Highlight>Boston, MA</Highlight>.
    </P>

    <P>
      I enjoy building solid and user-friendly web applications using Next.js. I am passionate about coding
      and being pixel perfect using beautiful UI with intuitively implemented UX design.
    </P>
  </section>
);
