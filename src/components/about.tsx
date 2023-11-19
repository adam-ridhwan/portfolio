import { ReactNode } from 'react';

import { H2, P } from '@/components/typography';

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className='text-md font-light text-secondary-foreground'>{children}</span>
);

export const About = () => (
  <section className='md:px-4'>
    <H2>ABOUT</H2>

    <P>
      Hi, I&apos;m <Highlight>Adam</Highlight> 👋, a <Highlight>Fullstack Software Engineer</Highlight> based
      in <Highlight>Boston, Massachusetts</Highlight>.
    </P>

    <P>
      I enjoy building solid and user-friendly web applications. I am passionate about coding and being pixel
      perfect using beautiful UI with intuitively implemented UX design.
    </P>

    <P className='m-0'>
      When I am not coding on my computer, I like to play badminton on the weekends with my girlfriend,
      chilling at home with my cats, or go hiking in the 4000ft peaks at New Hampshire.
    </P>
  </section>
);
