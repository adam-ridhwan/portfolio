import { ReactNode } from 'react';

import { H2, P } from '@/components/typography';

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className='text-secondary-foreground'>{children}</span>
);

export const About = () => {
  return (
    <section>
      <H2>ABOUT</H2>

      <P>
        Hi, I&apos;m <Highlight>Adam</Highlight> 👋 I&apos;m{' '}
        <Highlight>Fullstack Software Engineer</Highlight> based in{' '}
        <Highlight>Boston, Massachusetts</Highlight>.
      </P>

      <P>
        I build responsive and modern web applications that is user-centric ranging from blog applications to
        ecommerce platforms. I am passionate about coding and being pixel perfect using beautiful UI with
        intuitively implemented UX design.
      </P>

      <P>
        My passion for coding started during my music degree. One of the classes I enjoyed was not music
        related at all. I took a Web Development class, which piqued my interest on building websites. Ever
        since then, I went on a deep dive on coding and web development. Now, I strive to learn as much as I
        can and make great code.
      </P>

      <P className='m-0'>
        When I am not coding on my computer, I like to play badminton on the weekends with my girlfriend,
        chilling at home with my cats, or go hiking in the 4000ft peaks at New Hampshire.
      </P>
    </section>
  );
};
