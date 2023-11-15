import { H2, P } from '@/components/typography';

export const About = () => {
  return (
    <>
      <section className='relative'>
        <H2>ABOUT</H2>

        <P>
          Hi, I&apos;m Adam, a Software Engineer based in Boston, Massachusetts. I build responsive and modern
          web applications that is user-centric ranging from blog applications to ecommerce platforms. I am
          passionate about coding and being pixel perfect using beautiful interfaces with intuitively
          implemented UX design.
        </P>

        <P>
          All my life I have been immersed in the world of music. I grew up playing the piano and the electric
          guitar, and loved performing on stage. So I decided to pursue my music degree. One of the classes I
          enjoyed was not music related at all. I took a Web Development class, which piqued my interest on
          building websites. Ever since then, I went on a deep dive on coding and web development. I then
          pivoted into the tech industry and have been coding ever since.
        </P>

        <P className='m-0'>
          When I am not coding on my computer, I like to play badminton on the weekends, chilling at home with
          my cats, or go hiking in the 4000ft peaks at New Hampshire.
        </P>
      </section>
    </>
  );
};
