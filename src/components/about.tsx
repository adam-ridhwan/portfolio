import { H2, P } from '@/components/typography';

export const About = () => {
  return (
    <>
      <section className='relative'>
        <H2>ABOUT</H2>
        <P>
          All my life I have been immersed in the world of music. I grew up playing the piano and the electric
          guitar, and loved performing on stage. So I decided to pursue my music degree.
        </P>

        <P>
          One of the classes I enjoyed was not music related at all. I wanted to take an elective class and
          chose Web Development, which piqued my interest on building websites. Thanks to that class, I went
          on a deep dive on coding and web development. I then pivoted into the tech industry and have been
          coding ever since.
        </P>

        <P className='m-0'>
          When I am not coding on my computer, I like to play badminton with my girlfriend, chilling with my
          cats, or go hiking.
        </P>
      </section>
    </>
  );
};
